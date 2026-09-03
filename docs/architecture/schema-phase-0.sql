-- =============================================================================
-- Phase 0 — Platform Foundation Schema
-- CRM platform: pooled multi-tenant PostgreSQL with Row-Level Security
--
-- Companion document: ./00-phase-0-architecture-note.md
-- Beads issue:        Final-Verison-c86
-- Target:             PostgreSQL 14+ (16 assumed; see architecture note §2.2)
--
-- -----------------------------------------------------------------------------
-- RULES THIS FILE IMPLEMENTS
--   R1  Every single table carries a tenant_id column.  NON-NEGOTIABLE.
--   R2  RBAC uses flexible default roles — defaults ship, tenants define more.
--   R3  Entitlements are soft-stop — overage billing, not hard blocks.
--   R6  Audit log is event-based, append-only, 12 months hot.
--
-- -----------------------------------------------------------------------------
-- HOW TO READ THE COMMENTS
--   [DECIDED]     Settled. Downstream work should not relitigate.
--   [JUDGMENT]    A call made here beyond what the brief specified. Reviewable.
--   [OPEN]        Explicitly unresolved. See the architecture note §10.
-- =============================================================================


-- =============================================================================
-- 0. EXTENSIONS AND HELPERS
-- =============================================================================

-- gen_random_uuid() is built into PostgreSQL 13+ core. On 12 and below it comes
-- from pgcrypto. We create the extension unconditionally so the file is portable;
-- on 13+ it is harmless. The alternative, uuid_generate_v4(), requires
-- "uuid-ossp" and is not preferred — it is a third-party extension providing a
-- function core now ships natively.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- [JUDGMENT] UUID v4 primary keys everywhere rather than bigserial.
--   Why: tenant-scoped data eventually gets exported, merged, and referenced
--   across systems (a CRM integrates with everything). Sequential integers leak
--   volume ("we are customer #47") and make cross-tenant ID collisions during
--   imports/merges a live hazard.
--   Cost accepted: v4 UUIDs are random, so index locality on inserts is poor.
--   If insert throughput on the hot tables becomes a problem, the migration is
--   to UUIDv7 (time-ordered) — same type, same width, no schema change.
--   [OPEN] Revisit UUIDv7 before GA.


-- -----------------------------------------------------------------------------
-- 0.1 The tenant-context accessor — the heart of tenant isolation
-- -----------------------------------------------------------------------------
-- Every RLS policy in this file is expressed in terms of this one function.
--
-- [DECIDED] It MUST fail closed. Three properties make that true:
--   1. current_setting(..., true) — the second argument `missing_ok` makes it
--      return NULL instead of raising when the GUC has never been set in this
--      session. Without it, any query that forgot to establish tenant context
--      would raise a confusing error; with it, we get a clean NULL we can turn
--      into "matches nothing".
--   2. NULLIF(..., '') — a GUC reset to the empty string would otherwise blow up
--      on the ::uuid cast. Empty is treated as "no context".
--   3. The policies compare `tenant_id = app_current_tenant_id()`. When the
--      function returns NULL, that comparison is NULL, which is not TRUE, so the
--      policy matches ZERO rows.
--
-- The failure mode of a forgotten SET LOCAL is therefore "no data" — never
-- "everyone's data". That asymmetry is the entire point of this design.
CREATE OR REPLACE FUNCTION app_current_tenant_id()
RETURNS uuid
LANGUAGE sql
STABLE
AS $$
    SELECT NULLIF(current_setting('app.current_tenant_id', true), '')::uuid;
$$;

COMMENT ON FUNCTION app_current_tenant_id() IS
'Returns the tenant_id for the current request, set by the data-access layer as
 SET LOCAL app.current_tenant_id = ''<uuid>'' at the start of every transaction.
 Returns NULL when unset, which causes every RLS policy to match zero rows.
 SET LOCAL (not SET) is required: it is scoped to the transaction and reverted on
 commit/rollback, so the value cannot leak to the next request that borrows the
 same pooled connection under transaction-mode pooling.';


-- -----------------------------------------------------------------------------
-- 0.2 updated_at maintenance
-- -----------------------------------------------------------------------------
-- [JUDGMENT] Maintain updated_at in a trigger rather than in application code.
-- Application-maintained timestamps are wrong the first time anyone writes a
-- backfill script or a manual correction.
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;


-- =============================================================================
-- 1. TENANTS
-- =============================================================================
-- The root of every ownership chain. One row per customer workspace.

CREATE TABLE tenants (
    id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),

    -- [JUDGMENT] R1 says *every* table carries tenant_id. The obvious reading is
    -- that `tenants` is exempt because it cannot reference itself. Instead of
    -- carving out an exception, tenant_id here is a STORED generated column that
    -- always equals id.
    --   Why bother: it means R1 has ZERO exceptions, so the CI lint described in
    --   the architecture note §9 is a flat "every table in this schema has a
    --   non-null tenant_id column with an RLS policy on it" — no allowlist to
    --   maintain, and therefore no allowlist for someone to quietly add to. It
    --   also lets the isolation policy below be *literally identical* to every
    --   other table's, which matters because a policy that is copy-pasted
    --   identically 15 times is easier to audit than 14 identical ones plus a
    --   special case.
    --   Cost: one redundant 16-byte column per tenant row. Negligible.
    --
    --   The explicit NOT NULL is load-bearing and easy to omit: PostgreSQL does
    --   NOT infer NOT NULL for a generated column, even when the expression can
    --   never produce NULL (id is the primary key). Without it this table fails
    --   the R1 conformance lint in §7 — which is how this was caught.
    tenant_id      uuid GENERATED ALWAYS AS (id) STORED NOT NULL,

    -- Routing key. `company` in company.yourcrm.com.
    -- Stored lowercase and constrained to a DNS-label-safe charset because it
    -- becomes part of a hostname. Length capped at 63 (the DNS label limit) and
    -- floored at 3 to keep the short, valuable labels available.
    subdomain      text NOT NULL,

    name           text NOT NULL,

    -- [JUDGMENT] status as a CHECK-constrained text column rather than a native
    -- ENUM type. Adding a value to a Postgres ENUM is easy; removing or
    -- reordering one is not, and ENUM changes historically could not run inside
    -- a transaction with other DDL. CHECK constraints are trivially altered in a
    -- migration. Same choice is made for every status-like column in this file.
    --   provisioning — created, not yet usable
    --   active       — normal operation
    --   suspended    — non-payment or policy; routing rejects, data retained
    --   deactivated  — customer left; retained pending the deletion routine
    status         text NOT NULL DEFAULT 'provisioning'
                     CHECK (status IN ('provisioning','active','suspended','deactivated')),

    created_at     timestamptz NOT NULL DEFAULT now(),
    updated_at     timestamptz NOT NULL DEFAULT now(),

    -- Soft-delete marker. Hard deletion of a tenant is an ordered multi-table
    -- teardown, not a single DELETE. [OPEN] That routine is not designed yet
    -- (architecture note Q15).
    deleted_at     timestamptz,

    CONSTRAINT tenants_subdomain_format CHECK (
        subdomain ~ '^[a-z0-9]([a-z0-9-]{1,61}[a-z0-9])$'
    )
);

-- Unique and case-insensitive by construction (the CHECK forbids uppercase), so
-- a plain unique index is sufficient and is directly usable by the routing
-- lookup in middleware.
CREATE UNIQUE INDEX tenants_subdomain_key ON tenants (subdomain);

-- Routing middleware reads (subdomain -> id, status) on every request.
-- Covering index so the lookup is index-only.
CREATE INDEX tenants_routing_idx ON tenants (subdomain) INCLUDE (id, status)
    WHERE deleted_at IS NULL;

CREATE TRIGGER tenants_set_updated_at
    BEFORE UPDATE ON tenants
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Tenant CREATION under RLS, verified against PostgreSQL 16:
--   Because tenant_id is generated from id, the WITH CHECK on the isolation
--   policy is satisfiable by generating the UUID in the application and setting
--   the context to it before inserting:
--       BEGIN;
--       SET LOCAL app.current_tenant_id = '<new uuid>';
--       INSERT INTO tenants (id, subdomain, name) VALUES ('<same uuid>', ...);
--       SELECT provision_tenant_rbac_defaults('<same uuid>');
--       COMMIT;
--   This means signup needs NO RLS bypass and no privileged escape hatch — which
--   is worth protecting, since a bypass added "just for provisioning" is how
--   these designs usually spring their first leak.
COMMENT ON TABLE tenants IS
'Root tenancy table. Reserved subdomains (www, api, app, admin, static, assets,
 mail, ...) must be rejected at signup by the application — this schema does not
 encode that list because it will change more often than the schema does.
 [OPEN] Where the reserved list lives is undecided.';


-- =============================================================================
-- 2. SUBSCRIPTIONS, ENTITLEMENTS AND USAGE  (Rule R3 — soft-stop limits)
-- =============================================================================
--
-- [JUDGMENT] There is deliberately NO global `plans` catalogue table.
--   R1 requires tenant_id on every table, and a shared plan catalogue is by
--   definition not tenant-scoped. The two ways to keep a global catalogue would
--   be (a) exempt it from R1, or (b) invent a sentinel "system tenant" whose
--   rows every tenant can also read — which forces every RLS policy to become
--   "my tenant OR the system tenant", weakening the single most important
--   invariant in the design for the sake of a lookup table.
--   Neither is worth it. Instead: plan *templates* live in application code /
--   seed data, and provisioning MATERIALISES them into per-tenant entitlement
--   rows. Per-tenant rows are needed anyway, because sales will negotiate
--   custom limits and the alternative is a bespoke plan tier per customer.
--   Cost accepted: changing a plan template does not retroactively change
--   existing tenants — a backfill migration is required. That is arguably the
--   correct behaviour for a billing-relevant value.

CREATE TABLE subscriptions (
    id                       uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id                uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,

    plan_tier                text NOT NULL
                               CHECK (plan_tier IN ('free','starter','professional','enterprise')),

    status                   text NOT NULL DEFAULT 'trialing'
                               CHECK (status IN ('trialing','active','past_due','canceled')),

    -- Billing period. Overage is computed and invoiced per period, so these
    -- bounds are the join key for usage_counters.
    current_period_start     timestamptz NOT NULL,
    current_period_end       timestamptz NOT NULL,

    -- [DECIDED, R3] Master switch for soft-stop behaviour. Per-feature soft_stop
    -- in feature_entitlements decides *whether a given limit* is soft; this flag
    -- decides whether this tenant is permitted to accrue billable overage at all.
    -- A tenant on a prepaid/PO arrangement with no payment method on file must
    -- not silently accrue charges, so for them this is false and every limit
    -- behaves as a hard cap regardless of its own soft_stop value.
    overage_billing_enabled  boolean NOT NULL DEFAULT true,

    -- References into the billing provider. [OPEN] Stripe is assumed but not
    -- decided (architecture note Q13). Deliberately untyped text so swapping the
    -- provider is a data migration, not a schema migration.
    external_customer_id     text,
    external_subscription_id text,

    trial_ends_at            timestamptz,
    canceled_at              timestamptz,

    created_at               timestamptz NOT NULL DEFAULT now(),
    updated_at               timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT subscriptions_period_valid CHECK (current_period_end > current_period_start)
);

-- [JUDGMENT] One active subscription per tenant, enforced as a partial unique
-- index rather than a plain unique on tenant_id. Cancelled/superseded rows are
-- retained for billing history, so tenant_id is not globally unique here — but
-- "two simultaneously active subscriptions" is a state that would make
-- entitlement resolution ambiguous, and ambiguity in entitlement resolution
-- becomes a revenue bug.
CREATE UNIQUE INDEX subscriptions_one_active_per_tenant
    ON subscriptions (tenant_id)
    WHERE status IN ('trialing','active','past_due');

CREATE INDEX subscriptions_tenant_idx ON subscriptions (tenant_id);

-- Composite unique key enabling tenant-safe composite foreign keys from child
-- tables. See the note on feature_entitlements below.
ALTER TABLE subscriptions ADD CONSTRAINT subscriptions_tenant_id_id_key
    UNIQUE (tenant_id, id);

CREATE TRIGGER subscriptions_set_updated_at
    BEFORE UPDATE ON subscriptions
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();


-- -----------------------------------------------------------------------------
-- 2.1 Feature entitlements — the soft-stop limit definitions (R3)
-- -----------------------------------------------------------------------------
-- One row per (tenant, feature). Handles three shapes of entitlement with one
-- table:
--   * boolean feature flag       -> is_enabled, limit_value NULL
--   * unlimited metered feature  -> is_enabled, is_unlimited = true
--   * limited metered feature    -> is_enabled, limit_value set, soft_stop set
--
-- [JUDGMENT] One table for flags and limits rather than two. A "feature" and a
-- "limit" are the same question asked twice ("may they, and how much"), and
-- splitting them means every entitlement check has to consult two tables and
-- reconcile disagreements between them.

CREATE TABLE feature_entitlements (
    id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id             uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    subscription_id       uuid NOT NULL,

    -- Stable machine key, e.g. 'seats', 'contacts', 'api_calls_per_month',
    -- 'custom_roles', 'api_access'. Application-owned vocabulary; not enumerated
    -- in the schema because it grows with every feature shipped.
    feature_key           text NOT NULL,

    is_enabled            boolean NOT NULL DEFAULT true,

    -- NULL means "not a metered feature" (a pure on/off flag).
    -- is_unlimited = true means metered-but-uncapped; limit_value must be NULL.
    limit_value           bigint,
    is_unlimited          boolean NOT NULL DEFAULT false,

    -- How limit_value is counted. Drives which accounting model applies:
    --   'stock' -> point-in-time count (seats, contacts). "How many exist now."
    --   'flow'  -> accumulates within the billing period (api_calls). Resets.
    -- [JUDGMENT] Making this explicit in the schema, rather than implied by the
    -- feature_key, is what stops someone from serving a flow limit with a live
    -- COUNT(*) or resetting a stock limit at period rollover. Conflating the two
    -- is the classic metering bug.
    metering_model        text NOT NULL DEFAULT 'stock'
                            CHECK (metering_model IN ('stock','flow')),

    -- [DECIDED, R3] THE SOFT-STOP SWITCH.
    --   true  -> exceed the limit: ALLOW the action, meter the excess, bill it.
    --   false -> exceed the limit: REJECT with an upgrade path.
    -- R3 makes true the default. false exists for limits with an unbounded cost
    -- tail (outbound email volume, raw storage) where "we'll invoice you" is not
    -- a real answer at 100x the plan.
    soft_stop             boolean NOT NULL DEFAULT true,

    -- Price per overage unit, in minor units (cents) to avoid float money.
    -- numeric(12,4) rather than integer because per-unit prices are frequently
    -- fractional cents (e.g. $0.0004 per API call) and rounding at the unit level
    -- rather than the invoice level produces visibly wrong totals at volume.
    overage_unit_price    numeric(12,4),
    overage_unit_currency char(3) NOT NULL DEFAULT 'USD',

    -- How many units of usage constitute one billable overage unit. Lets us bill
    -- API calls per 1,000 without storing a fractional price per call.
    overage_unit_size     bigint NOT NULL DEFAULT 1 CHECK (overage_unit_size > 0),

    -- [JUDGMENT] The safety valve on soft-stop. An unbounded soft limit is a
    -- runaway invoice: a looping integration can bill a customer thousands of
    -- dollars overnight, and that is a refund and a lost account, not revenue.
    -- Above this many units of TOTAL usage we stop even a soft limit.
    -- NULL = no ceiling. [OPEN] Whether ceilings are mandatory, and at what
    -- multiple of limit_value they default, is an unresolved product/legal
    -- question (architecture note Q4).
    overage_hard_ceiling  bigint,

    -- Provenance: did this come from the plan template or from a negotiated
    -- override? Overrides must survive plan-template backfills.
    source                text NOT NULL DEFAULT 'plan_template'
                            CHECK (source IN ('plan_template','tenant_override')),

    created_at            timestamptz NOT NULL DEFAULT now(),
    updated_at            timestamptz NOT NULL DEFAULT now(),

    -- Tenant-safe composite FK: a tenant's entitlement can only ever point at
    -- that same tenant's subscription. A plain FK to subscriptions(id) would
    -- permit a cross-tenant reference if application code ever passed the wrong
    -- id; this makes that state unrepresentable in the database.
    -- [JUDGMENT] This pattern is applied to every child relation in the file.
    -- It costs an extra unique index per parent and removes an entire class of
    -- cross-tenant data leak that RLS alone does not catch (RLS filters what you
    -- can SEE; it does not stop you writing a row that points somewhere else).
    CONSTRAINT feature_entitlements_subscription_fk
        FOREIGN KEY (tenant_id, subscription_id)
        REFERENCES subscriptions (tenant_id, id) ON DELETE CASCADE,

    CONSTRAINT feature_entitlements_unlimited_has_no_limit
        CHECK (NOT (is_unlimited AND limit_value IS NOT NULL)),

    -- If a limit is soft, we must know what to charge for exceeding it.
    -- Without this constraint, a misconfigured row silently gives away unlimited
    -- usage for free — the failure is invisible until the revenue report.
    CONSTRAINT feature_entitlements_soft_stop_needs_price
        CHECK (
            NOT (soft_stop AND limit_value IS NOT NULL)
            OR overage_unit_price IS NOT NULL
        ),

    CONSTRAINT feature_entitlements_ceiling_above_limit
        CHECK (overage_hard_ceiling IS NULL
               OR limit_value IS NULL
               OR overage_hard_ceiling >= limit_value)
);

CREATE UNIQUE INDEX feature_entitlements_tenant_feature_key
    ON feature_entitlements (tenant_id, feature_key);

CREATE TRIGGER feature_entitlements_set_updated_at
    BEFORE UPDATE ON feature_entitlements
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

COMMENT ON TABLE feature_entitlements IS
'R3 soft-stop limits. Enforcement contract for the data-access layer:
   1. resolve the entitlement row for (tenant, feature_key)
   2. read current usage from usage_counters
   3. if usage < limit_value            -> allow
   4. else if NOT soft_stop             -> reject, surface upgrade path
   5. else if NOT subscription.overage_billing_enabled -> reject
   6. else if ceiling set AND usage >= overage_hard_ceiling -> reject
   7. else                              -> ALLOW, and meter the excess
 Steps 5 and 6 are the guardrails that keep "soft" from meaning "unbounded".';


-- -----------------------------------------------------------------------------
-- 2.2 Usage counters — what is actually consumed
-- -----------------------------------------------------------------------------
-- [JUDGMENT] Counters, not a raw usage-event stream, for Phase 0.
--   A raw event stream (one row per API call) is more accurate and more
--   auditable, but it cannot answer "how many this period" at request latency
--   without a rollup job — and the entitlement check is on the hot path of every
--   metered action. Counters answer in one indexed read.
--   Cost accepted: counters can drift (a crashed transaction, a double-decrement
--   on delete). Mitigated by last_reconciled_at plus a periodic job that
--   recomputes stock metrics from COUNT(*) and corrects the counter.
--   [OPEN] Whether to add an event stream underneath for audit is unresolved
--   (architecture note Q12). The shape here does not preclude it.

CREATE TABLE usage_counters (
    id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id           uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    subscription_id     uuid NOT NULL,

    -- Matches feature_entitlements.feature_key.
    metric_key          text NOT NULL,

    -- The billing period this counter covers. For 'stock' metrics the counter is
    -- carried forward into each new period (seats do not reset); for 'flow'
    -- metrics a new period starts at zero. The rollover job owns that
    -- distinction and reads metering_model to decide.
    period_start        timestamptz NOT NULL,
    period_end          timestamptz NOT NULL,

    used_value          bigint NOT NULL DEFAULT 0 CHECK (used_value >= 0),

    -- Snapshot of the limit in force when this period opened. Kept so that an
    -- invoice can be reconstructed exactly as it was billed, even after the
    -- tenant upgrades mid-period and the live entitlement row changes.
    -- Denormalisation here is deliberate: billing history must not move.
    limit_snapshot      bigint,

    -- Set the first time used_value crosses limit_snapshot. Drives the in-app
    -- "you are in overage" banner and the crossing notification, which are the
    -- mitigation for billing a customer for something they did not explicitly
    -- opt into at the moment they did it.
    overage_started_at  timestamptz,

    last_reconciled_at  timestamptz,

    created_at          timestamptz NOT NULL DEFAULT now(),
    updated_at          timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT usage_counters_subscription_fk
        FOREIGN KEY (tenant_id, subscription_id)
        REFERENCES subscriptions (tenant_id, id) ON DELETE CASCADE,

    CONSTRAINT usage_counters_period_valid CHECK (period_end > period_start)
);

-- The entitlement check's hot-path lookup, and the guard against duplicate
-- counter rows for the same metric and period.
CREATE UNIQUE INDEX usage_counters_tenant_metric_period_key
    ON usage_counters (tenant_id, metric_key, period_start);

-- Finds tenants currently in overage, for billing runs and for the ops dashboard.
CREATE INDEX usage_counters_in_overage_idx
    ON usage_counters (tenant_id, period_start)
    WHERE overage_started_at IS NOT NULL;

CREATE TRIGGER usage_counters_set_updated_at
    BEFORE UPDATE ON usage_counters
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();


-- -----------------------------------------------------------------------------
-- 2.3 Metered overage — the billable output of R3
-- -----------------------------------------------------------------------------
-- One row per (tenant, metric, closed period) once the period is closed and
-- overage computed. This is the handoff artifact to the billing provider.
--
-- [JUDGMENT] A separate table rather than deriving the invoice line directly
-- from usage_counters at billing time. Reason: what we CHARGED must be a
-- recorded fact, not a recomputation. If the entitlement or the price changes
-- later, recomputing would produce a different number than the invoice the
-- customer already received — and reconciling that is a support nightmare.

CREATE TABLE overage_line_items (
    id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id           uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    subscription_id     uuid NOT NULL,

    metric_key          text NOT NULL,
    period_start        timestamptz NOT NULL,
    period_end          timestamptz NOT NULL,

    -- All four frozen at computation time; see the note above.
    limit_value         bigint  NOT NULL,
    used_value          bigint  NOT NULL,
    overage_units       bigint  NOT NULL CHECK (overage_units > 0),
    unit_price          numeric(12,4) NOT NULL,
    currency            char(3) NOT NULL DEFAULT 'USD',
    amount_minor        bigint  NOT NULL,

    status              text NOT NULL DEFAULT 'pending'
                          CHECK (status IN ('pending','pushed','invoiced','waived','failed')),

    -- Set when the line item has been accepted by the billing provider.
    external_line_item_id text,
    pushed_at             timestamptz,

    -- Support waives overage; we record why rather than deleting the row, so the
    -- audit trail of "we charged, then we didn't" survives.
    waived_reason       text,

    created_at          timestamptz NOT NULL DEFAULT now(),
    updated_at          timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT overage_line_items_subscription_fk
        FOREIGN KEY (tenant_id, subscription_id)
        REFERENCES subscriptions (tenant_id, id) ON DELETE CASCADE
);

-- Idempotency guard: the billing job must be safely re-runnable. Without this, a
-- retried billing run double-charges.
CREATE UNIQUE INDEX overage_line_items_unique_period
    ON overage_line_items (tenant_id, metric_key, period_start);

CREATE INDEX overage_line_items_pending_idx
    ON overage_line_items (status, period_end)
    WHERE status = 'pending';

CREATE TRIGGER overage_line_items_set_updated_at
    BEFORE UPDATE ON overage_line_items
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();


-- =============================================================================
-- 3. RBAC  (Rule R2 — flexible default roles)
-- =============================================================================
--
-- The R2 model in one line: PERMISSIONS are a fixed vocabulary we define; ROLES
-- are a flexible composition tenants control.
--
-- [JUDGMENT] The permissions catalogue is tenant-scoped (R1) and therefore
-- SEEDED PER TENANT at provisioning, rather than being one global table.
--   Rejected alternative: a global catalogue exempt from R1, or one owned by a
--   sentinel "system tenant" that every policy must additionally allow. Both
--   weaken the one invariant the whole design rests on, to save ~60 duplicated
--   rows per tenant (a few kilobytes).
--   Unexpected benefit: per-tenant catalogues let us withhold a permission from
--   tenants who have not bought the feature it guards, so entitlements and RBAC
--   compose instead of contradicting each other.
--   Cost accepted: adding a new permission to the product means a backfill
--   across all tenants. That is a well-understood migration, and it is the same
--   cost already accepted for plan templates in §2.

CREATE TABLE roles (
    id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id     uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,

    -- Stable machine key ('admin'), distinct from the display name ('Admin'),
    -- which tenants may rename freely. Application logic keys on `key` only for
    -- system roles; custom roles are always resolved through permissions.
    key           text NOT NULL,
    name          text NOT NULL,
    description   text,

    -- [DECIDED, R2] System roles ship with every tenant and cannot be deleted or
    -- have their key changed. This is what stops a tenant from deleting their
    -- way into a workspace with no administrator — a support incident that is
    -- unrecoverable without manual database surgery.
    -- Tenants who want a variant CLONE a system role and edit the clone.
    is_system     boolean NOT NULL DEFAULT false,

    -- [DECIDED] The 2FA rule is a property of the ROLE, not a hardcoded check
    -- against a role literally named 'executive'.
    --   Why this matters: R2 lets tenants define and rename roles. If the 2FA
    --   requirement were `IF role.key = 'executive'`, a tenant renaming their
    --   executive role, or creating a second executive-equivalent role, would
    --   silently drop the mandatory-2FA requirement — a security control
    --   disabled by a cosmetic edit.
    --   With this flag, "executive" is a capability of a role, and any role a
    --   tenant defines can carry it.
    -- Resolution rule for users holding several roles: STRICTEST WINS — 2FA is
    -- required if ANY held role requires it.
    requires_2fa  boolean NOT NULL DEFAULT false,

    created_at    timestamptz NOT NULL DEFAULT now(),
    updated_at    timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX roles_tenant_key_key ON roles (tenant_id, key);
ALTER TABLE roles ADD CONSTRAINT roles_tenant_id_id_key UNIQUE (tenant_id, id);

CREATE TRIGGER roles_set_updated_at
    BEFORE UPDATE ON roles
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();


CREATE TABLE permissions (
    id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id    uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,

    -- [JUDGMENT] Naming convention: resource.action ('contacts.read',
    -- 'billing.manage'). resource and action are stored as separate columns as
    -- well as in `key` so the permission-picker UI can group by resource without
    -- string-splitting, and so a future "grant all actions on this resource"
    -- feature is a simple WHERE rather than a LIKE.
    key          text NOT NULL,
    resource     text NOT NULL,
    action       text NOT NULL,
    description  text,

    -- Permissions that only make sense when a paid feature is entitled. Lets the
    -- provisioning routine seed a catalogue matching what the tenant bought.
    -- NULL = always available.
    requires_feature_key text,

    created_at   timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT permissions_key_matches_parts CHECK (key = resource || '.' || action)
);

CREATE UNIQUE INDEX permissions_tenant_key_key ON permissions (tenant_id, key);
ALTER TABLE permissions ADD CONSTRAINT permissions_tenant_id_id_key UNIQUE (tenant_id, id);


-- Join: which permissions a role grants.
CREATE TABLE role_permissions (
    tenant_id      uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    role_id        uuid NOT NULL,
    permission_id  uuid NOT NULL,
    created_at     timestamptz NOT NULL DEFAULT now(),

    PRIMARY KEY (role_id, permission_id),

    -- Composite FKs keep both sides inside the same tenant. Without these, a
    -- bug could grant tenant A's role a reference to tenant B's permission row.
    CONSTRAINT role_permissions_role_fk
        FOREIGN KEY (tenant_id, role_id)
        REFERENCES roles (tenant_id, id) ON DELETE CASCADE,
    CONSTRAINT role_permissions_permission_fk
        FOREIGN KEY (tenant_id, permission_id)
        REFERENCES permissions (tenant_id, id) ON DELETE CASCADE
);

CREATE INDEX role_permissions_tenant_role_idx ON role_permissions (tenant_id, role_id);

COMMENT ON TABLE role_permissions IS
'Grant-only. There are no deny rows.
 [JUDGMENT] Effective permissions for a user are the UNION of the permissions of
 every role they hold. Deny-precedence models are more expressive but interact
 badly with union semantics and reliably produce "why can''t this user do X"
 support tickets that take an engineer to answer. If explicit denies are ever
 needed, adding them is a deliberate future decision — not an ambiguity to leave
 open now.';


-- =============================================================================
-- 4. USERS, MFA AND SESSIONS
-- =============================================================================

-- [JUDGMENT] Email case-insensitivity is handled with a functional unique index
-- on lower(email) rather than the citext extension. citext works, but it is an
-- extension dependency that must exist in every environment (including RDS
-- parameter-group-restricted ones and local test containers), and a functional
-- index achieves the same guarantee with zero dependencies.
CREATE TABLE users (
    id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id          uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,

    email              text NOT NULL,

    -- Argon2id or bcrypt output, algorithm+params encoded in the string itself
    -- so we can rotate algorithms without a schema change.
    -- Nullable: SSO-provisioned users have no local password. [OPEN] SSO/SAML is
    -- not designed in Phase 0.
    password_hash      text,

    full_name          text,

    status             text NOT NULL DEFAULT 'invited'
                         CHECK (status IN ('invited','active','suspended','deactivated')),

    -- ---- 2FA enrolment state -------------------------------------------------
    -- [DECIDED] This is enrolment STATE only. It is NOT the enforcement point.
    -- Whether 2FA is REQUIRED is computed at login from the roles the user holds
    -- (roles.requires_2fa), never stored here. Storing "this user must use 2FA"
    -- as a user column would go stale the moment their roles changed — exactly
    -- the bug that lets a newly-promoted executive keep logging in without it.
    mfa_enrolled_at    timestamptz,

    -- Denormalised convenience flag, maintained alongside user_mfa_methods.
    -- Reading it saves a join on the login path. It is a cache, not the truth.
    mfa_enabled        boolean NOT NULL DEFAULT false,

    last_login_at      timestamptz,
    failed_login_count integer NOT NULL DEFAULT 0,
    locked_until       timestamptz,

    created_at         timestamptz NOT NULL DEFAULT now(),
    updated_at         timestamptz NOT NULL DEFAULT now(),
    deleted_at         timestamptz
);

-- Email is unique WITHIN a tenant, not globally.
-- [JUDGMENT] This follows from the Phase 0 assumption that a user belongs to
-- exactly one tenant. It means the same human can hold separate accounts in two
-- tenants, which is normally what a B2B customer expects (their consultant has
-- an account in their workspace and in someone else's).
-- [OPEN] If a user must ever span tenants, this becomes a `tenant_memberships`
-- join and users loses its tenant_id — a genuinely invasive change. Worth
-- confirming early (architecture note Q16).
CREATE UNIQUE INDEX users_tenant_email_key
    ON users (tenant_id, lower(email))
    WHERE deleted_at IS NULL;

ALTER TABLE users ADD CONSTRAINT users_tenant_id_id_key UNIQUE (tenant_id, id);

CREATE INDEX users_tenant_status_idx ON users (tenant_id, status) WHERE deleted_at IS NULL;

CREATE TRIGGER users_set_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();


-- Join: which roles a user holds. A user may hold several.
CREATE TABLE user_roles (
    tenant_id   uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    user_id     uuid NOT NULL,
    role_id     uuid NOT NULL,

    -- Who granted this, for the audit trail. Nullable because provisioning and
    -- automated grants have no human actor.
    granted_by  uuid,
    granted_at  timestamptz NOT NULL DEFAULT now(),

    PRIMARY KEY (user_id, role_id),

    CONSTRAINT user_roles_user_fk
        FOREIGN KEY (tenant_id, user_id)
        REFERENCES users (tenant_id, id) ON DELETE CASCADE,
    CONSTRAINT user_roles_role_fk
        FOREIGN KEY (tenant_id, role_id)
        REFERENCES roles (tenant_id, id) ON DELETE CASCADE,
    CONSTRAINT user_roles_granted_by_fk
        FOREIGN KEY (tenant_id, granted_by)
        REFERENCES users (tenant_id, id) ON DELETE SET NULL
);

CREATE INDEX user_roles_tenant_role_idx ON user_roles (tenant_id, role_id);

COMMENT ON TABLE user_roles IS
'[DECIDED] Granting a role with requires_2fa = true MUST, in the same
 transaction, revoke all of that user''s active sessions (see sessions.revoked_at
 and revoked_reason = ''mfa_requirement_changed''). Otherwise a user promoted to
 an executive role keeps browsing for up to 24 hours on a session issued under
 the weaker requirement. Enforcing 2FA only at the next login is not enough; the
 current session has to be cut.';


-- -----------------------------------------------------------------------------
-- 4.1 MFA methods
-- -----------------------------------------------------------------------------
-- [JUDGMENT] A methods TABLE rather than a totp_secret column on users.
--   TOTP is the Phase 0 factor, but WebAuthn/passkeys are the better long-term
--   answer and adding them should not require reshaping the users table or
--   rewriting the login path's storage assumptions. A per-method row also lets a
--   user register two authenticators, which is the difference between losing a
--   phone and losing an account.

CREATE TABLE user_mfa_methods (
    id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id     uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    user_id       uuid NOT NULL,

    -- 'totp' is the only Phase 0 value. 'webauthn' reserved.
    -- [DECIDED] SMS is deliberately absent: SIM-swap makes it a downgrade, and
    -- offering it invites executives to choose it.
    method_type   text NOT NULL CHECK (method_type IN ('totp','webauthn')),

    label         text,

    -- [DECIDED] THE SECRET IS NOT STORED HERE.
    -- This is a REFERENCE (an AWS Secrets Manager ARN / KMS-encrypted key id) to
    -- the shared secret, held outside the database. A TOTP seed in a table is a
    -- password-equivalent sitting in every backup, every read replica, and every
    -- database dump a developer takes to debug something.
    secret_ref    text NOT NULL,

    -- Enrolment is a two-step handshake: create the method, then confirm it by
    -- entering a code. An unconfirmed method must NOT satisfy the 2FA
    -- requirement — otherwise starting enrolment and abandoning it would be
    -- enough to bypass a mandatory control.
    confirmed_at  timestamptz,

    last_used_at  timestamptz,
    created_at    timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT user_mfa_methods_user_fk
        FOREIGN KEY (tenant_id, user_id)
        REFERENCES users (tenant_id, id) ON DELETE CASCADE
);

CREATE INDEX user_mfa_methods_user_idx ON user_mfa_methods (tenant_id, user_id);

-- One confirmed TOTP method per user. Multiple WebAuthn keys are allowed and
-- desirable, hence the method_type predicate rather than a blanket constraint.
CREATE UNIQUE INDEX user_mfa_methods_one_totp
    ON user_mfa_methods (tenant_id, user_id)
    WHERE method_type = 'totp' AND confirmed_at IS NOT NULL;


CREATE TABLE user_recovery_codes (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id   uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    user_id     uuid NOT NULL,

    -- Hashed exactly like a password. A recovery code is a password that bypasses
    -- 2FA; storing it in plaintext would make the audit finding write itself.
    code_hash   text NOT NULL,
    used_at     timestamptz,
    created_at  timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT user_recovery_codes_user_fk
        FOREIGN KEY (tenant_id, user_id)
        REFERENCES users (tenant_id, id) ON DELETE CASCADE
);

CREATE INDEX user_recovery_codes_user_idx
    ON user_recovery_codes (tenant_id, user_id) WHERE used_at IS NULL;


-- -----------------------------------------------------------------------------
-- 4.2 Sessions — 24-hour expiry
-- -----------------------------------------------------------------------------
-- [JUDGMENT] Server-side session rows rather than self-contained JWTs.
--   The decisions in this design require REVOCATION: forced logout on role
--   change (see user_roles), forced logout on 2FA enrolment, "sign out all
--   devices", and immediate cutoff on suspension. A stateless JWT cannot be
--   revoked before its expiry without a denylist — which is this table, with
--   extra steps and worse ergonomics.
-- [ASSUMPTION] Not in the Phase 0 required table list, but required by the
--   24-hour session rule. Flagged in the architecture note (assumption A15).

CREATE TABLE sessions (
    id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id         uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    user_id           uuid NOT NULL,

    -- Only the hash of the session token is stored. A stolen database dump must
    -- not yield usable session tokens.
    token_hash        text NOT NULL,

    -- [DECIDED] 24 hours, ABSOLUTE from issuance.
    -- [ASSUMPTION] Absolute rather than sliding. A sliding window means an
    -- active session never expires, which defeats the purpose of having an
    -- expiry at all. If the intent was sliding, this default is the one line to
    -- change (architecture note Q3).
    issued_at         timestamptz NOT NULL DEFAULT now(),
    expires_at        timestamptz NOT NULL DEFAULT (now() + interval '24 hours'),

    -- [DECIDED] The 2FA gate, represented in the session itself.
    --   false + scope 'mfa_enrolment' -> the restricted session issued to a user
    --   who must use 2FA but has not enrolled. It can reach the enrolment route
    --   and nothing else. This resolves the deadlock where a newly-promoted
    --   executive could otherwise not log in at all, without granting them
    --   access to data before they enrol.
    mfa_satisfied     boolean NOT NULL DEFAULT false,
    scope             text NOT NULL DEFAULT 'full'
                        CHECK (scope IN ('full','mfa_enrolment','mfa_challenge')),

    ip_address        inet,
    user_agent        text,

    revoked_at        timestamptz,
    revoked_reason    text CHECK (revoked_reason IN (
                          'logout','logout_all','password_changed',
                          'mfa_requirement_changed','mfa_enrolled',
                          'user_suspended','admin_revoked','expired'
                      )),

    last_seen_at      timestamptz,

    CONSTRAINT sessions_user_fk
        FOREIGN KEY (tenant_id, user_id)
        REFERENCES users (tenant_id, id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX sessions_token_hash_key ON sessions (token_hash);

-- Validation path: look up by token hash, then check live-ness.
CREATE INDEX sessions_active_idx
    ON sessions (tenant_id, user_id)
    WHERE revoked_at IS NULL;

-- Cleanup job: delete expired rows. Not tenant-prefixed on purpose — this index
-- serves a cross-tenant maintenance job that runs as the owner, not as crm_app.
CREATE INDEX sessions_expires_at_idx ON sessions (expires_at);

COMMENT ON TABLE sessions IS
'A session is valid only when: revoked_at IS NULL AND expires_at > now() AND
 scope = ''full''. The scope check is what makes the restricted enrolment session
 safe — validating only revocation and expiry would let an mfa_enrolment session
 reach the whole application.
 [DECIDED] The session''s tenant_id MUST be compared against the tenant resolved
 from the request subdomain, and the request rejected on mismatch. That check is
 what stops a valid cookie from tenant A being replayed against tenant B''s
 subdomain.';


-- =============================================================================
-- 5. AUDIT LOG  (Rule R6 — event-based, 12 months hot)
-- =============================================================================
--
-- [DECIDED] EVENT-BASED, not row-snapshot / CDC.
--   Each row is a discrete DOMAIN event described in business language
--   ('contact.merged', 'user.role_granted'), written deliberately by the
--   application at the point of the business action — NOT an automatic
--   before/after diff of every UPDATE emitted by a trigger.
--   The trade: we accept incomplete coverage (only what we remember to emit) in
--   exchange for a log that answers the questions humans actually ask. "Who
--   deleted this account?" is one query against an event log and an archaeology
--   project against a column-diff log. Emitting an event is part of the
--   definition of done for any state-changing operation, and auth, permission,
--   billing, export and deletion events are non-negotiable emitters.
--
-- [DECIDED] APPEND-ONLY. The application role receives INSERT and SELECT on this
--   table and nothing else (see §6.3). A log the application can rewrite is not
--   an audit log.
--
-- [JUDGMENT] PARTITIONED BY MONTH, regardless of which retention policy wins.
--   12 months hot is decided; what happens at month 13 is NOT (archive to
--   S3/Glacier, hard delete, or tier by event type — architecture note Q1).
--   Partitioning keeps all three options cheap: dropping a partition is instant,
--   while DELETE-ing a year-old slice of a large unpartitioned append-only table
--   is a long, bloat-generating operation that competes with live traffic.
--   Retrofitting partitioning after a year of production data is significantly
--   harder than adopting it now, so we adopt it now even though the policy it
--   serves is undecided.

CREATE TABLE audit_events (
    -- The partition key must be part of every unique constraint on a partitioned
    -- table, hence the composite primary key rather than a bare id.
    id             uuid NOT NULL DEFAULT gen_random_uuid(),
    tenant_id      uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,

    -- When the business event happened (supplied by the emitter), which is not
    -- necessarily when the row was written (recorded_at). They differ for queued
    -- or replayed events, and conflating them makes an incident timeline lie.
    occurred_at    timestamptz NOT NULL DEFAULT now(),
    recorded_at    timestamptz NOT NULL DEFAULT now(),

    -- Dotted domain event name: 'contact.merged', 'user.role_granted',
    -- 'subscription.upgraded', 'auth.login_failed', 'export.generated'.
    event_type     text NOT NULL,

    -- Coarse grouping for retention tiering and for filtering the activity feed.
    -- Named here because a future tiered-retention policy (Q1) needs a column to
    -- tier ON, and adding one to a year-old partitioned table is expensive.
    event_category text NOT NULL DEFAULT 'general'
                     CHECK (event_category IN
                       ('general','auth','rbac','billing','data','integration','admin')),

    -- ---- Actor ---------------------------------------------------------------
    -- Nullable user reference: system jobs, integrations and API keys have no
    -- human actor, and forcing one would mean inventing fake users.
    actor_type     text NOT NULL DEFAULT 'user'
                     CHECK (actor_type IN ('user','system','api_key','integration','support')),
    actor_user_id  uuid,

    -- Denormalised actor label, frozen at write time. If the user is later
    -- renamed or deleted, the log must still say who it was AT THE TIME.
    -- Joining to live users to render history is wrong: it rewrites the past.
    actor_label    text,

    -- ---- Subject -------------------------------------------------------------
    -- What the event was about, as a loose type+id pair rather than a real FK.
    -- Deliberately NOT a foreign key: the log must survive deletion of the thing
    -- it describes, and "who deleted this record" is precisely the query where a
    -- cascading FK would have destroyed the evidence.
    subject_type   text,
    subject_id     uuid,

    -- ---- Payload -------------------------------------------------------------
    -- The event's own immutable facts. JSONB because event shapes differ per
    -- event_type and will keep changing; a wide typed table would be mostly
    -- NULLs and a migration for every new event.
    -- Payloads are self-contained and denormalised ON PURPOSE, for the same
    -- reason as actor_label.
    payload        jsonb NOT NULL DEFAULT '{}'::jsonb,

    -- Request correlation, for tying an event to a trace / support ticket.
    request_id     text,
    ip_address     inet,

    PRIMARY KEY (id, occurred_at)
) PARTITION BY RANGE (occurred_at);

-- Indexes declared on the parent are created on every partition automatically.
--
-- The dominant access pattern is: "events for THIS tenant, in THIS time range,
-- newest first" — every audit UI, export and investigation is that query with
-- optional extra filters. So (tenant_id, occurred_at DESC) is the primary index.
CREATE INDEX audit_events_tenant_time_idx
    ON audit_events (tenant_id, occurred_at DESC);

CREATE INDEX audit_events_tenant_type_time_idx
    ON audit_events (tenant_id, event_type, occurred_at DESC);

CREATE INDEX audit_events_tenant_actor_time_idx
    ON audit_events (tenant_id, actor_user_id, occurred_at DESC)
    WHERE actor_user_id IS NOT NULL;

CREATE INDEX audit_events_tenant_subject_idx
    ON audit_events (tenant_id, subject_type, subject_id, occurred_at DESC)
    WHERE subject_id IS NOT NULL;

-- [JUDGMENT] NO GIN index on payload in Phase 0.
--   A GIN index is the obvious reflex for a JSONB column, but it is expensive to
--   maintain on a write-heavy append-only table and it would be paid on every
--   single event insert to serve queries nobody has asked for yet. Add one
--   (ideally a jsonb_path_ops GIN, scoped to specific partitions) when a real
--   query demands it.

-- Example partitions. [OPEN] A scheduled job must create next month's partition
-- ahead of time and apply the retention action to the 13th-oldest — that job is
-- REQUIRED and NOT YET BUILT. If it does not run, inserts beyond the last
-- declared partition FAIL. A DEFAULT partition is deliberately not used: it
-- silently absorbs those rows and hides the failure until the default partition
-- is enormous and cannot be split without an exclusive lock.
CREATE TABLE audit_events_2026_09 PARTITION OF audit_events
    FOR VALUES FROM ('2026-09-01 00:00:00+00') TO ('2026-10-01 00:00:00+00');
CREATE TABLE audit_events_2026_10 PARTITION OF audit_events
    FOR VALUES FROM ('2026-10-01 00:00:00+00') TO ('2026-11-01 00:00:00+00');
CREATE TABLE audit_events_2026_11 PARTITION OF audit_events
    FOR VALUES FROM ('2026-11-01 00:00:00+00') TO ('2026-12-01 00:00:00+00');

COMMENT ON TABLE audit_events IS
'R6 event-based audit log. Append-only; 12 months hot (queryable here).
 [OPEN] Retention beyond 12 months is UNDECIDED — archive to S3/Glacier, hard
 delete, or tier by event_category. This is the highest-priority open question in
 Phase 0: it has compliance implications and it gets harder to answer once there
 is a year of production data. Monthly partitioning is in place so that whichever
 answer wins is cheap to implement.';


-- =============================================================================
-- 6. ROW-LEVEL SECURITY  (Rule R1 enforcement)
-- =============================================================================
--
-- R1 (the tenant_id column) and RLS (the policy) are ONE decision. R1 without
-- RLS is just a naming convention; RLS has nothing to key on without R1.
--
-- Every policy below is IDENTICAL in shape:
--
--     ALTER TABLE <t> ENABLE ROW LEVEL SECURITY;
--     ALTER TABLE <t> FORCE  ROW LEVEL SECURITY;
--     CREATE POLICY tenant_isolation ON <t>
--         USING       (tenant_id = app_current_tenant_id())
--         WITH CHECK  (tenant_id = app_current_tenant_id());
--
-- Three things to understand about that shape:
--
--   * ENABLE alone is not enough. Policies do NOT apply to the table's OWNER
--     unless FORCE is also set. Without FORCE, running migrations or an admin
--     script as the owner silently sees and writes everything — and so does the
--     application if it is ever misconfigured to connect as the owner.
--
--   * USING governs what rows are VISIBLE (SELECT/UPDATE/DELETE).
--     WITH CHECK governs what rows may be WRITTEN (INSERT/UPDATE).
--     Both are required. USING alone would let a request insert a row stamped
--     with somebody else's tenant_id — invisible to the writer afterwards, but
--     very much present in the victim's tenant.
--
--   * When app_current_tenant_id() returns NULL (context never set), the
--     comparison is NULL, which is not TRUE, so the policy matches ZERO rows.
--     Fail closed, by construction.
--
-- These are written out explicitly per table rather than generated by a DO loop.
-- A loop is less code but it makes "which tables are protected" a runtime
-- question; explicit statements make it greppable, reviewable in a diff, and
-- directly checkable by the CI lint in §7.
--
-- THE SAME PATTERN MUST BE APPLIED TO EVERY TENANT-SCOPED TABLE ADDED LATER.
-- There are no exceptions in this schema, including `tenants` itself.

-- tenants ---------------------------------------------------------------------
-- Works because tenants.tenant_id is a generated column equal to id, so a tenant
-- can read exactly its own row and no other.
-- NOTE: the subdomain -> tenant_id lookup in routing middleware necessarily runs
-- BEFORE any tenant context exists, so it cannot be served under this policy as
-- crm_app. That one legitimate cross-tenant read must go through a narrowly
-- scoped SECURITY DEFINER function returning nothing but (id, status).
-- [OPEN] That function is not written here — it belongs with the routing work,
-- and it must not be allowed to become a general-purpose god-mode accessor
-- (architecture note Q10).
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenants FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON tenants
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- subscriptions ---------------------------------------------------------------
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON subscriptions
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- feature_entitlements --------------------------------------------------------
ALTER TABLE feature_entitlements ENABLE ROW LEVEL SECURITY;
ALTER TABLE feature_entitlements FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON feature_entitlements
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- usage_counters --------------------------------------------------------------
ALTER TABLE usage_counters ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_counters FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON usage_counters
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- overage_line_items ----------------------------------------------------------
ALTER TABLE overage_line_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE overage_line_items FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON overage_line_items
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- roles -----------------------------------------------------------------------
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON roles
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- permissions -----------------------------------------------------------------
ALTER TABLE permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE permissions FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON permissions
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- role_permissions ------------------------------------------------------------
ALTER TABLE role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_permissions FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON role_permissions
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- users -----------------------------------------------------------------------
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE users FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON users
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- user_roles ------------------------------------------------------------------
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON user_roles
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- user_mfa_methods ------------------------------------------------------------
ALTER TABLE user_mfa_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_mfa_methods FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON user_mfa_methods
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- user_recovery_codes ---------------------------------------------------------
ALTER TABLE user_recovery_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_recovery_codes FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON user_recovery_codes
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- sessions --------------------------------------------------------------------
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON sessions
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());

-- audit_events ----------------------------------------------------------------
-- Declared on the partitioned parent; inherited by every partition, including
-- ones created in the future by the partition-management job.
ALTER TABLE audit_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_events FORCE  ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON audit_events
    USING (tenant_id = app_current_tenant_id())
    WITH CHECK (tenant_id = app_current_tenant_id());


-- -----------------------------------------------------------------------------
-- 6.1 The application database role
-- -----------------------------------------------------------------------------
-- [DECIDED] This is the most likely way the whole design silently fails.
--   Table owners and superusers bypass RLS. If the application ever connects as
--   the owner or as a superuser, EVERY policy above becomes inert and no error
--   is raised — the app just quietly returns cross-tenant data.
--
--   Therefore: the application connects as crm_app, which
--     * is NOT a superuser
--     * does NOT have BYPASSRLS
--     * does NOT own these tables (migrations run as a separate, higher-
--       privileged role, out of band from request traffic)
--
--   The application MUST additionally assert this at boot and refuse to start if
--   it is false:
--     SELECT rolsuper, rolbypassrls FROM pg_roles WHERE rolname = current_user;
--   Both must be false. This is cheap and it catches the misconfiguration on the
--   first deploy rather than in an incident.
--
-- Uncomment and adapt for the target environment:
--
-- CREATE ROLE crm_app LOGIN PASSWORD '<from AWS Secrets Manager>'
--     NOSUPERUSER NOCREATEDB NOCREATEROLE NOBYPASSRLS;
-- GRANT USAGE ON SCHEMA public TO crm_app;
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO crm_app;
--
-- [DECIDED, R6] The audit log is append-only, enforced by GRANTS, not by
-- convention. Revoke the ability to rewrite history:
-- REVOKE UPDATE, DELETE ON audit_events FROM crm_app;
-- GRANT  SELECT, INSERT ON audit_events TO crm_app;
--   (The retention/partition job runs as a different, privileged role.)


-- =============================================================================
-- 7. R1 / RLS CONFORMANCE CHECK
-- =============================================================================
-- R1 is a constraint that decays silently: it holds perfectly today and is
-- violated by the third developer who adds a lookup table in a hurry. A
-- constraint that depends on remembering is not a constraint.
--
-- This query is the seed of the CI lint described in the architecture note §9.
-- It returns one row per violation and should return ZERO rows. Wiring it into
-- CI so a non-empty result fails the build should be the first task of Phase 1 —
-- it is far cheaper to add now, with 14 tables, than after 140.
--
-- Note it catches BOTH silent failure modes: a missing tenant_id column, and a
-- tenant_id column with no policy protecting it. The second is the more
-- dangerous of the two, because it looks correct in a schema diagram.
--
-- SELECT c.relname AS table_name,
--        CASE
--          WHEN a.attname IS NULL           THEN 'MISSING tenant_id column (R1)'
--          WHEN a.attnotnull IS NOT TRUE    THEN 'tenant_id is nullable (R1)'
--          WHEN c.relrowsecurity IS FALSE   THEN 'RLS not ENABLEd'
--          WHEN c.relforcerowsecurity IS FALSE THEN 'RLS not FORCEd (owner bypasses)'
--          WHEN p.polname IS NULL           THEN 'no RLS policy attached'
--        END AS violation
-- FROM pg_class c
-- JOIN pg_namespace n ON n.oid = c.relnamespace
-- LEFT JOIN pg_attribute a
--        ON a.attrelid = c.oid AND a.attname = 'tenant_id' AND a.attnum > 0
--       AND NOT a.attisdropped
-- LEFT JOIN pg_policy p ON p.polrelid = c.oid
-- WHERE n.nspname = 'public'
--   AND c.relkind IN ('r','p')          -- ordinary and partitioned tables
--   AND c.relname NOT LIKE 'audit_events_%'   -- partitions inherit from parent
--   AND c.relname <> 'schema_migrations'      -- migration bookkeeping
--   AND (a.attname IS NULL
--        OR a.attnotnull IS NOT TRUE
--        OR c.relrowsecurity IS FALSE
--        OR c.relforcerowsecurity IS FALSE
--        OR p.polname IS NULL);
--
-- The exception list in that WHERE clause is deliberately TINY and lives in
-- version control, so adding an exception is a visible, reviewable act rather
-- than a silent omission. Note that `tenants` is NOT an exception — the
-- generated tenant_id column in §1 exists precisely so that it does not need to
-- be one.


-- =============================================================================
-- 8. DEFAULT ROLE / PERMISSION SEED  (Rule R2)
-- =============================================================================
-- [DECIDED, R2] "Flexible default roles" means: sensible defaults ship with every
-- tenant, AND tenants can define their own roles composed from the permission
-- vocabulary. They are not locked to this list.
--
-- USAGE: the caller MUST establish tenant context first, because this function
-- writes through the RLS policies like any other code path:
--     BEGIN;
--     SET LOCAL app.current_tenant_id = '<new tenant uuid>';
--     SELECT provision_tenant_rbac_defaults('<new tenant uuid>');
--     COMMIT;
-- Deliberately NOT written as SECURITY DEFINER — a provisioning function that
-- bypasses RLS is exactly the kind of privileged back door that later gets
-- reused for something it should not be.
--
-- [OPEN] Both lists below are STARTING POINTS, not settled.
--   * The default role set (architecture note Q2) — which roles, and which of
--     them count as "executive" for mandatory 2FA.
--   * The permission catalogue (architecture note Q6) — it will grow with every
--     feature shipped.
--   Changing either after tenants exist requires a backfill, so they are worth
--   settling before Phase 1 ships.

CREATE OR REPLACE FUNCTION provision_tenant_rbac_defaults(p_tenant_id uuid)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
    v_perm  text;
    v_role  record;
BEGIN
    -- ---- Permission catalogue (the fixed vocabulary) -------------------------
    -- Tenants compose roles OUT OF these; they do not invent new ones. An
    -- open-ended permission vocabulary is unenforceable, because application
    -- code has to check against something known at build time.
    FOREACH v_perm IN ARRAY ARRAY[
        'contacts.read','contacts.create','contacts.update','contacts.delete','contacts.export',
        'deals.read','deals.create','deals.update','deals.delete',
        'activities.read','activities.create','activities.update','activities.delete',
        'reports.read','reports.export',
        'users.read','users.invite','users.update','users.deactivate',
        'roles.read','roles.manage',
        'billing.read','billing.manage',
        'settings.read','settings.manage',
        'audit.read',
        'integrations.read','integrations.manage',
        'api.access'
    ] LOOP
        INSERT INTO permissions (tenant_id, key, resource, action)
        VALUES (
            p_tenant_id,
            v_perm,
            split_part(v_perm, '.', 1),
            split_part(v_perm, '.', 2)
        )
        ON CONFLICT (tenant_id, key) DO NOTHING;
    END LOOP;

    -- ---- Default roles -------------------------------------------------------
    -- requires_2fa = true marks the "executive" tier: 2FA is MANDATORY for these
    -- roles and optional for the rest. owner/admin qualify because they can
    -- change billing, grant roles, and export data — the three things an account
    -- takeover is actually after.
    -- [OPEN] Whether `manager` should also require 2FA is a policy call for the
    -- owner (architecture note Q2).
    FOR v_role IN
        SELECT * FROM (VALUES
            ('owner',     'Owner',      'Full control including billing and tenant deletion.', true),
            ('admin',     'Admin',      'Full control except tenant deletion.',                 true),
            ('manager',   'Manager',    'Manages team members and sees all CRM data.',          false),
            ('member',    'Member',     'Standard frontline user. Full CRM data access.',       false),
            ('read_only', 'Read Only',  'View-only access to CRM data.',                        false)
        ) AS t(key, name, description, requires_2fa)
    LOOP
        INSERT INTO roles (tenant_id, key, name, description, is_system, requires_2fa)
        VALUES (p_tenant_id, v_role.key, v_role.name, v_role.description, true, v_role.requires_2fa)
        ON CONFLICT (tenant_id, key) DO NOTHING;
    END LOOP;

    -- ---- Role -> permission grants -------------------------------------------
    -- owner and admin: everything in the catalogue.
    INSERT INTO role_permissions (tenant_id, role_id, permission_id)
    SELECT p_tenant_id, r.id, p.id
    FROM roles r
    CROSS JOIN permissions p
    WHERE r.tenant_id = p_tenant_id
      AND p.tenant_id = p_tenant_id
      AND r.key IN ('owner','admin')
    ON CONFLICT DO NOTHING;

    -- manager: all CRM data plus user management, but NOT billing or roles.
    INSERT INTO role_permissions (tenant_id, role_id, permission_id)
    SELECT p_tenant_id, r.id, p.id
    FROM roles r
    JOIN permissions p ON p.tenant_id = p_tenant_id
    WHERE r.tenant_id = p_tenant_id
      AND r.key = 'manager'
      AND p.resource IN ('contacts','deals','activities','reports','users')
    ON CONFLICT DO NOTHING;

    -- member: CRM data only. No export — deliberately, because bulk export is
    -- the main exfiltration path and it belongs behind a deliberate grant.
    INSERT INTO role_permissions (tenant_id, role_id, permission_id)
    SELECT p_tenant_id, r.id, p.id
    FROM roles r
    JOIN permissions p ON p.tenant_id = p_tenant_id
    WHERE r.tenant_id = p_tenant_id
      AND r.key = 'member'
      AND p.resource IN ('contacts','deals','activities','reports')
      AND p.action <> 'export'
    ON CONFLICT DO NOTHING;

    -- read_only: read actions on CRM data.
    INSERT INTO role_permissions (tenant_id, role_id, permission_id)
    SELECT p_tenant_id, r.id, p.id
    FROM roles r
    JOIN permissions p ON p.tenant_id = p_tenant_id
    WHERE r.tenant_id = p_tenant_id
      AND r.key = 'read_only'
      AND p.resource IN ('contacts','deals','activities','reports')
      AND p.action = 'read'
    ON CONFLICT DO NOTHING;
END;
$$;

COMMENT ON FUNCTION provision_tenant_rbac_defaults(uuid) IS
'Seeds the R2 default roles and permission catalogue for a newly provisioned
 tenant. System roles (is_system = true) cannot be deleted or re-keyed; tenants
 who want a variant clone one and edit the clone. Custom roles are ordinary rows
 in the same tables with is_system = false.';


-- =============================================================================
-- END — Phase 0 schema
--
-- Tables: 14 (tenants, subscriptions, feature_entitlements, usage_counters,
--             overage_line_items, roles, permissions, role_permissions, users,
--             user_roles, user_mfa_methods, user_recovery_codes, sessions,
--             audit_events)
-- R1 conformance: 14 / 14 carry a NOT NULL tenant_id; 14 / 14 have RLS ENABLEd,
--                 FORCEd, and a tenant_isolation policy attached. No exceptions.
-- =============================================================================
