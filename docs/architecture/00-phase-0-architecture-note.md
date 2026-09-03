# Phase 0 — Platform Foundation Architecture Note

**Status:** Draft / foundation. Not a final spec.
**Date:** 2026-09-03
**Beads issue:** `Final-Verison-c86`
**Companion artifact:** [`schema-phase-0.sql`](./schema-phase-0.sql)

---

## 0. How to read this document

This is the first piece of product design work in the repo. It exists to lock down the
handful of decisions that are **expensive to reverse later** — tenancy model, tenant
isolation mechanism, identity/session model, the shape of RBAC, the shape of
entitlements, and the shape of the audit log — so that downstream implementation work
does not have to re-derive them.

Two conventions are used throughout:

- **DECIDED** — a constraint handed down by the project owner, or a decision made here
  that downstream work should treat as settled.
- **ASSUMPTION** — a reasonable default chosen to make the note concrete. It is *not*
  settled. Each one is repeated in [§10 Open questions](#10-open-questions--assumptions-register)
  so they can be confirmed or overturned cheaply.

The rules referenced (R1, R2, R3, R6) were given directly by the project owner as part of
the Phase 0 brief. There is no pre-existing engineering-rules document in this repo; this
note is the first written record of them.

---

## 1. The rules this phase must satisfy

| Rule | Statement | Where it lands |
|---|---|---|
| **R1** | Every single table carries a `tenant_id` column. Non-negotiable. | [§3](#3-tenancy), [§9](#9-r1-enforcement), schema file |
| **R2** | RBAC uses *flexible* default roles — defaults ship, tenants can define their own. | [§5](#5-rbac-r2) |
| **R3** | Entitlements are *soft-stop* — overage billing, not hard blocks. | [§7](#7-entitlements--soft-stop-limits-r3) |
| **R6** | Audit logs are *event-based*, with 12-month hot storage. | [§8](#8-audit-logs-r6) |

Rules R4 and R5 were not supplied in the Phase 0 brief. Their absence is noted rather than
guessed at — see [§10](#10-open-questions--assumptions-register).

---

## 2. Stack

**DECIDED (by the owner):** Node.js / TypeScript, Next.js, PostgreSQL, AWS.

Everything below that is *shape* rather than *stack name* is an assumption, flagged as such.

### 2.1 Application shape

**ASSUMPTION — Next.js App Router, single deployable.** One Next.js application using the
App Router, serving both the rendered UI (React Server Components) and the HTTP API. No
separate standalone API service in Phase 0.

Rationale: a separate service layer buys independent scaling and a hard language boundary,
but costs a second deployment, a second auth path, and cross-service tracing — all of which
are real work with no Phase 0 payoff. A single deployable is cheaper to run now and is not
a one-way door: extracting a service later is mechanical if the constraint below holds.

**DECIDED — the "no ORM call from a component" constraint.** Even inside a single
deployable, all database access goes through a **server-side data-access layer** (a
`src/server/db/` module tree), never directly from a route handler, a Server Component, or
a Server Action. This is the seam that makes a future service extraction cheap, and — much
more importantly — it is the single choke point where the per-request tenant context gets
set (see [§3.3](#33-how-rls-is-actually-enforced-per-request)). Tenant isolation that
depends on every caller remembering to do the right thing is not isolation. One choke point
that cannot be bypassed is.

Layering:

```
  Browser
    │
    ▼
  Next.js middleware (edge)  ── resolves subdomain → tenant_id, attaches to request
    │
    ▼
  Route handler / Server Component / Server Action
    │                                (never touches the pool directly)
    ▼
  Data-access layer  ── opens txn, SET LOCAL app.current_tenant_id, runs query
    │
    ▼
  PostgreSQL (RLS enforced)
```

### 2.2 Persistence

**ASSUMPTION — Amazon RDS for PostgreSQL 16+**, single primary, Multi-AZ, with a read
replica added only when read load justifies it (not in Phase 0). Aurora PostgreSQL is the
obvious alternative and is worth revisiting before GA; the reason to *not* start there is
cost and the fact that nothing in this design depends on Aurora-specific behaviour, so the
migration path stays open.

Postgres is chosen deliberately over a document store because the two hardest constraints in
this design — R1 (`tenant_id` everywhere) and RLS-based isolation — are enforced *by the
database engine* in Postgres. That is the whole point: isolation that the application
cannot forget to apply.

**ASSUMPTION — connection pooling via PgBouncer (or RDS Proxy) in `transaction` pooling
mode.** This interacts directly with the RLS design and is not a free choice — see the
warning in [§3.4](#34-connection-pooling-caveat-important).

**ASSUMPTION — migration tooling.** A SQL-first migration tool (Drizzle Kit, or
node-pg-migrate) rather than an ORM-owned schema. Reason: R1 and the RLS policies are
expressed most clearly as raw DDL, and we will want to lint the DDL in CI ([§9](#9-r1-enforcement)).
Not yet decided; see [§10](#10-open-questions--assumptions-register).

### 2.3 Where AWS fits

**ASSUMPTION for all of the following.** None of these were dictated beyond "AWS".

| Concern | Proposed | Note |
|---|---|---|
| Compute | ECS Fargate behind an ALB, or AWS Amplify Hosting | Fargate if we want control over the runtime; Amplify if we want the managed Next.js path. Open. |
| Database | RDS PostgreSQL, Multi-AZ | See §2.2 |
| Secrets | AWS Secrets Manager | DB creds, 2FA encryption key, third-party API keys |
| File/object storage | S3, per-tenant key prefix `tenant/<tenant_id>/...` | Object storage has no RLS. Isolation there is an *application* responsibility and must be designed separately — flagged as an open item. |
| Audit archive (post-12mo) | S3 + Glacier, or nothing | Undecided — see [§8.3](#83-retention--the-12-month-boundary) |
| Async / metering jobs | EventBridge Scheduler → Lambda, or an in-app queue | Needed by [§7](#7-entitlements--soft-stop-limits-r3) for usage rollups |
| TLS / DNS | Route 53 + ACM wildcard cert `*.yourcrm.com` | The wildcard cert is what makes subdomain routing ([§4](#4-subdomain-based-tenant-routing)) practical |
| Observability | CloudWatch initially | Structured logs must carry `tenant_id` on every line |

---

## 3. Tenancy

**DECIDED — pooled (shared) database, shared schema, isolated by Postgres Row-Level
Security.** One database, one schema, every tenant's rows in the same tables, separated by
`tenant_id` and enforced by RLS policies in the engine.

### 3.1 Why pooled, and what we are accepting

The three realistic options and their tradeoffs:

| Model | Isolation strength | Ops cost per tenant | Cross-tenant queries | Noisy-neighbour risk |
|---|---|---|---|---|
| Database-per-tenant | Strongest | High (N migrations, N connections, N backups) | Painful | Low |
| Schema-per-tenant | Strong | Medium (N schemas to migrate; Postgres degrades in the thousands) | Awkward | Medium |
| **Pooled + RLS (chosen)** | Good, but *engine-enforced* rather than physical | Lowest — one migration, one backup | Trivial | Highest |

We are choosing pooled because a CRM's cost structure lives or dies on per-tenant
operational overhead, and because one migration path beats N. What we are **accepting** in
exchange, explicitly:

1. **A single bug or misconfiguration can cross tenants.** This is the real risk. It is
   mitigated by making RLS the enforcement mechanism (the database refuses, rather than the
   application remembering), and by never letting the application connect as a role that can
   bypass RLS ([§3.5](#35-the-bypassrls-trap)).
2. **Noisy neighbours are real.** A tenant with 5M contacts shares I/O with a tenant with
   500. Phase 0 does not solve this; the escape hatch is to move an outlier tenant to its own
   database later, which the design keeps possible because `tenant_id` is on every row.
3. **"Delete a tenant" is a large multi-table delete**, not a `DROP DATABASE`. Needs a
   deliberate, ordered teardown routine. Not designed in Phase 0.

### 3.2 The isolation invariant

> Every tenant-scoped table has `tenant_id UUID NOT NULL REFERENCES tenants(id)`,
> has RLS **enabled and forced**, and carries a policy keyed on
> `current_setting('app.current_tenant_id')`.

This is R1 plus its enforcement. R1 (the column) without RLS (the policy) is just a
convention; RLS without R1 has nothing to key on. They are one decision.

### 3.3 How RLS is actually enforced per request

The mechanism, precisely:

1. Middleware resolves the subdomain to a `tenant_id` ([§4](#4-subdomain-based-tenant-routing)).
2. The session cookie is validated, yielding a `user_id` **and the `tenant_id` that user
   belongs to**.
3. **These two must match.** If the session's tenant and the subdomain's tenant disagree,
   the request is rejected — this is the check that stops a user of tenant A from replaying
   a valid cookie against tenant B's subdomain.
4. The data-access layer opens a transaction and, as the first statement, runs:

   ```sql
   SET LOCAL app.current_tenant_id = $1;
   ```

5. Every query in that transaction now sees only that tenant's rows, because the engine
   filters them.

`SET LOCAL` (not `SET`) is load-bearing: it scopes the setting to the enclosing transaction
and it is reverted on commit or rollback, so the value cannot leak to the next request that
borrows the same pooled connection.

**DECIDED — the tenant context comes from the server-side session and the subdomain, never
from a client-supplied header, body field, or query parameter.** A `tenant_id` that the
client can set is not a security boundary.

### 3.4 Connection pooling caveat (important)

With an external pooler in **transaction** mode, a connection is handed back to the pool at
the end of each transaction. That is compatible with `SET LOCAL` — and *only* with
`SET LOCAL`. Two failure modes to design against, both of which are silent cross-tenant
data leaks rather than loud errors:

- Using `SET` instead of `SET LOCAL` — the value survives on the physical connection and the
  next borrower inherits another tenant's context.
- Running a query **outside** a transaction — there is no `SET LOCAL` in effect, so
  `current_setting('app.current_tenant_id')` is unset.

Mitigation, and this should be treated as a requirement on the data-access layer, not a
style preference: `current_setting('app.current_tenant_id', true)` returns NULL rather than
erroring when unset, and the policies in the schema file are written so that **a NULL
tenant context matches zero rows**. Combined with `FORCE ROW LEVEL SECURITY`, a query that
forgets its context returns nothing instead of returning everything. Failing closed is the
entire design goal here.

### 3.5 The `BYPASSRLS` trap

Table owners and superusers bypass RLS by default. Therefore:

- The application connects as a **dedicated non-superuser role** (`crm_app`) that does
  **not** own the tables and does **not** have `BYPASSRLS`.
- Tables are additionally marked `FORCE ROW LEVEL SECURITY` so policies apply even to the
  owner.
- Migrations run as a separate, more privileged role, out-of-band from request traffic.

If the app ever connects as the owner or as a superuser, every policy in the schema file is
silently inert. This is the single most likely way this design fails in practice, so it is
worth a startup assertion: on boot, verify the connected role is not superuser and lacks
`BYPASSRLS`, and refuse to start otherwise.

---

## 4. Subdomain-based tenant routing

**DECIDED — tenants are addressed as `company.yourcrm.com`.**

### 4.1 Resolution order

Resolution happens in **Next.js middleware**, before any route handler and therefore before
any query executes:

1. Read the `Host` header; strip the apex domain to get the label (`company`).
2. Reject reserved labels (`www`, `api`, `app`, `admin`, `static`, `assets`, `mail`, plus
   whatever else we hold back). These must also be blocked at tenant-signup time so a tenant
   can never claim one.
3. Look up the label in `tenants.subdomain` (unique, lowercase, indexed).
4. Not found, or tenant not `active` → render a "workspace not found / suspended" page. Do
   not fall through to the app.
5. Found → attach the resolved `tenant_id` to the request for the data-access layer to
   consume.

Only after this does anything touch the database on the tenant's behalf.

### 4.2 The lookup cost

Every single request needs subdomain → `tenant_id`. A database round-trip in middleware on
every request is a poor trade.

**ASSUMPTION — cache the mapping** (subdomain → `tenant_id` + status) in an edge-appropriate
cache with a short TTL, invalidated on tenant rename or status change. The exact cache
(Next.js data cache, a small KV, or an in-process LRU per instance) is undecided.

Note the sequencing problem this creates: the resolution lookup happens *before* any tenant
context exists, so it cannot itself run under RLS as `crm_app`. This is the one legitimate
cross-tenant read in the system. It should be served by a narrowly-scoped path — a dedicated
read of `tenants` only, ideally through a separate role or a `SECURITY DEFINER` function
that returns nothing but `(id, status)`. Flagged as an open item; do not let it become a
general-purpose god-mode connection.

### 4.3 Cookies

**ASSUMPTION — session cookies are scoped to the specific subdomain**, not to `.yourcrm.com`.
A cookie set on the parent domain is sent to *every* tenant's subdomain, which is precisely
the thing we are trying to prevent. Per-subdomain cookies mean a user belonging to two
tenants authenticates twice; that is the correct trade. This also means custom vanity
domains (`crm.company.com`) are a later, separate design problem — not Phase 0.

---

## 5. RBAC (R2)

**DECIDED — flexible default roles.**

"Flexible" specifically means:

1. **Defaults ship.** Every new tenant is seeded with a sensible set of roles so they are
   productive on day one without configuring anything.
2. **Roles are tenant-scoped rows, not an enum.** The `roles` table carries `tenant_id`
   (R1 applies here too). Two tenants can both have a role named "Manager" that grants
   different things, and neither can see the other's.
3. **Tenants can create their own roles** and compose them from the permission catalogue.
   They are not locked to the defaults.
4. **Permissions are the fixed vocabulary; roles are the flexible composition.** Tenants
   compose roles out of permissions we define; they do not invent new permissions. This is
   the important line: an open-ended permission vocabulary is unenforceable, because the
   application has to `if`-check against *something* known at build time.
5. **Default roles are `is_system = true`** and protected from deletion/renaming, so a
   tenant cannot delete their way into a workspace with no administrator. Tenants may
   *clone* a system role and edit the clone.
6. **Users can hold multiple roles**, via a `user_roles` join. Effective permissions are the
   **union** of the permissions of all held roles. Union (rather than a deny-precedence
   model) is chosen for predictability — deny rules interacting with union semantics is a
   well-known source of "why can't this user do X" support tickets. If explicit denies are
   ever needed, that is a deliberate later change, not something to leave ambiguous now.

**ASSUMPTION — the default role set** is `owner`, `admin`, `manager`, `member`,
`read_only`. The `executive` role referenced by the 2FA rule ([§6.2](#62-two-factor-authentication))
needs to map onto this list; the schema models "executive" as a **flag on the role**
(`requires_2fa`) rather than a magic role name, so the rule survives tenants renaming or
redefining their roles. The exact default list is an open question.

**ASSUMPTION — permission naming** follows `resource.action` (`contacts.read`,
`contacts.delete`, `billing.manage`). The Phase 0 catalogue is a starting point; it will
grow with every feature and that is expected.

---

## 6. Security: sessions and 2FA

### 6.1 Sessions

**DECIDED — sessions expire after 24 hours.**

**ASSUMPTION — absolute, not sliding.** 24h from issuance, not 24h from last activity. A
sliding window means an active session never expires, which defeats the point. A user
active at hour 23 is asked to re-authenticate. If the owner intended sliding expiry, this
is cheap to change now and annoying to change later — flagged.

Mechanics:

- Server-side session records (a `sessions` table), not self-contained JWTs. Reason: we need
  **revocation** — "log out all devices", forced logout on role change, and forced logout on
  2FA enrolment. A stateless JWT cannot be revoked before its expiry without a
  denylist, which is a session table with extra steps.
- Cookie is `HttpOnly`, `Secure`, `SameSite=Lax`, scoped to the tenant subdomain ([§4.3](#43-cookies)).
- `sessions` is tenant-scoped and carries `tenant_id` (R1).
- Session validation checks both `expires_at` and a `revoked_at` null-check.

The `sessions` table is not in the Phase 0 schema file's required list, but it is required
by this decision — see [§10](#10-open-questions--assumptions-register).

### 6.2 Two-factor authentication

**DECIDED — 2FA is mandatory for executive-role users, optional for frontline staff roles.**

The important part is *how it is enforced*. A UI toggle is not enforcement; it is a
suggestion. The requirement is evaluated **server-side at two moments**:

**(a) At login.** After password verification, the server computes whether any role held by
the user has `requires_2fa = true`. Then:

- Requires 2FA **and enrolled** → challenge for the TOTP code. No code, no session.
- Requires 2FA and **not enrolled** → issue a restricted, short-lived
  *enrolment-only* session that can reach exactly one route: 2FA setup. It cannot read CRM
  data. This avoids the deadlock where a newly-promoted executive cannot log in at all, while
  still refusing them access to data before they enrol.
- Does not require 2FA but has enrolled voluntarily → challenge anyway. Opting in is binding.

**(b) At role assignment.** When a user is granted a role with `requires_2fa = true`, the
grant is recorded and **all of that user's existing sessions are revoked**. Otherwise a user
promoted to executive keeps browsing on a session that was issued under the weaker
requirement, for up to 24 hours. The next login runs path (a) and forces enrolment.

Design consequences:

- The requirement is a property of the **role** (`roles.requires_2fa`), not a hardcoded
  check against a role named "executive". Tenants define custom roles (R2), so any role can
  be marked as requiring 2FA. This is what makes R2 and the 2FA rule compose instead of
  fighting.
- Because a user can hold several roles ([§5](#5-rbac-r2)), the rule is: **2FA is required if
  *any* held role requires it.** Strictest-wins.

**ASSUMPTION — TOTP (RFC 6238) via authenticator app** as the Phase 0 second factor. SMS is
deliberately excluded (SIM-swap). WebAuthn/passkeys are the better long-term answer and the
schema should not preclude adding them — hence a `user_mfa_methods`-shaped design rather
than a single `totp_secret` column on `users`, noted in the schema file.

**DECIDED — the TOTP secret is never stored in plaintext.** The schema stores a *reference*
to a secret held in AWS Secrets Manager / KMS-encrypted, not the secret itself. Recovery
codes are stored hashed, exactly like passwords.

---

## 7. Entitlements — soft-stop limits (R3)

**DECIDED — soft stop. When a tenant exceeds a plan limit, the action is allowed and the
excess is metered for billing. It is not rejected.**

### 7.1 The mechanic

For a limited resource (seats, contacts, API calls):

1. **Resolve the limit.** Look up the entitlement for the tenant: the plan-tier default,
   overridden by any per-tenant override row. (Per-tenant overrides matter — sales will
   promise a customer a custom limit, and the alternative is inventing a bespoke plan tier
   per negotiation.)
2. **Read current usage** for the current billing period.
3. **Decide** based on `soft_stop`:
   - `soft_stop = true` → **allow the action.** If usage now exceeds `limit_value`, record
     the excess as billable overage at `overage_unit_price`. Surface an in-app warning; do
     not block.
   - `soft_stop = false` → hard cap. Reject with a clear upgrade path. This exists because a
     few limits genuinely must be hard (anything with an unbounded cost tail — outbound
     email volume, storage — where "we'll bill you" is not a real answer at 100x). R3 makes
     soft the *default*, not the only option.
4. **Meter.** Overage is computed from usage counters at the close of the billing period and
   handed to billing.

The billing-facing consequence to be explicit about: **soft stop means we can invoice a
customer for something they never explicitly agreed to at the moment they did it.** That is
a product and legal decision as much as a technical one. Mitigations that Phase 0 should
assume are required: a visible in-app indicator when a tenant is in overage, a notification
at the moment the limit is first crossed, and a per-tenant overage ceiling
(`overage_hard_ceiling`) above which we *do* stop — an unbounded soft limit is a runaway
invoice waiting to happen. The schema includes a nullable ceiling column for this.

### 7.2 Usage accounting

Two shapes of limit, and they need different accounting — conflating them is a common and
painful mistake:

- **Point-in-time ("stock") limits** — seats, contacts. "How many exist *right now*." Best
  served by a maintained counter, reconciled periodically against a `COUNT(*)`.
- **Period-accumulating ("flow") limits** — API calls. "How many happened *this period*."
  Reset each billing period; must not be served by a live `COUNT(*)` over an events table at
  request time.

**ASSUMPTION** — both are represented in a single `usage_counters` table keyed by
`(tenant_id, metric_key, period_start)`, with stock metrics using the current open period
row as a running value. The alternative — deriving everything from a raw usage-events stream
— is more accurate and more auditable but needs a rollup job before it is queryable at
request latency. Starting with counters and adding an events stream later is the cheaper
order. Flagged.

**ASSUMPTION** — the enforcement check lives in the data-access layer as an explicit,
named guard, not scattered through feature code.

---

## 8. Audit logs (R6)

**DECIDED — event-based, 12-month hot storage.**

### 8.1 What "event-based" means here

An **append-only log of discrete domain events** — "what happened, described in the language
of the business" — *not* row-level before/after snapshots of every `UPDATE`.

The distinction, concretely:

| | Event-based (chosen) | Row-snapshot / CDC (not chosen) |
|---|---|---|
| Unit | `contact.merged`, `user.role_granted`, `subscription.upgraded` | `UPDATE contacts SET ... WHERE id=...` before/after |
| Written by | Application, deliberately, at the point of the business action | A trigger or logical-decoding stream, automatically |
| Reads like | "Priya merged contact A into B on the 3rd" | A JSON diff of 14 columns |
| Coverage | Only what we remember to emit | Everything, including things we did not think about |
| Volume | Low — one row per meaningful action | High — one row per statement |

The trade is explicit: **we accept incomplete coverage in exchange for a log that answers
questions humans actually ask.** "Who deleted this account?" is answerable from an event
log in one query, and requires reconstruction from a diff log. The mitigation for the
coverage gap is that emitting an event is part of the definition of done for any
state-changing operation, and the high-risk categories (auth, permission changes, billing,
data export, deletion) are non-negotiable emitters.

Design properties:

- **Append-only.** No `UPDATE`, no `DELETE` (outside the retention job). Enforce with grants
  — `crm_app` gets `INSERT` and `SELECT` on `audit_events`, and nothing else. A log the
  application can rewrite is not an audit log.
- **Immutable payload.** `JSONB` capturing the event's own facts, denormalised on purpose. If
  a contact is later renamed, the audit event must still say what the name was *at the time*.
  Joining to live tables to render history is wrong; it rewrites the past.
- **Actor is nullable.** System- and integration-originated events have no human actor. An
  `actor_type` discriminates user / system / api_key / integration.
- **Tenant-scoped and RLS-protected** like everything else (R1).

### 8.2 Indexing for the access pattern

Essentially every read is *"events for this tenant, in this time range, optionally filtered
by type or actor, newest first."* So the primary index is a composite on
`(tenant_id, occurred_at DESC)`, with supporting indexes for type and actor filters. A
GIN index on the JSONB payload is deliberately **not** added in Phase 0 — it is expensive to
maintain on a write-heavy append-only table, and should be added only when a real query
demands it.

### 8.3 Retention — the 12-month boundary

12 months hot (queryable in the primary database) is decided. **What happens at month 13 is
not**, and this note will not silently decide it. The options:

- **Archive to S3/Glacier** as Parquet or JSONL, queryable via Athena when needed. Preserves
  history for compliance; adds a second retrieval path to build.
- **Hard delete.** Simplest, cheapest, irreversible — and possibly *required*, since some
  data-protection regimes treat indefinite retention as a liability rather than an asset.
- **Tiered by event type.** Keep security/billing events longer than routine activity.

**ASSUMPTION for structure only:** `audit_events` should be **partitioned by month**
(`PARTITION BY RANGE (occurred_at)`) regardless of which option wins. Dropping a partition is
instant; deleting 12-month-old rows from a large unpartitioned table is a long, bloat-
generating operation. Partitioning now keeps all three options cheap; retrofitting it later
does not. The schema file includes this, with the partition-management job flagged as
required-but-not-built.

**This is the highest-priority open question in this note** — it has compliance implications
and it gets harder to answer once there is a year of production data.

---

## 9. R1 enforcement

R1 — *every table carries `tenant_id`* — is a constraint that decays silently. It holds
perfectly on day one and is violated by the third developer who adds a lookup table in a
hurry. A constraint that depends on remembering is not a constraint.

What Phase 0 can state now, even though none of it is built yet:

1. **A CI migration lint.** A check that runs against the migrated schema and fails the build
   if any table in the application schema lacks a `tenant_id UUID NOT NULL` column, lacks
   `ENABLE ROW LEVEL SECURITY`, or has no policy attached. This is a ~50-line query against
   `pg_catalog` / `information_schema`, and it is the single highest-leverage piece of
   tooling this project can build early. **It should be the first item of Phase 1.**
2. **An explicit allowlist for genuine exceptions.** `tenants` itself, and the migration
   bookkeeping table. Exceptions live in a checked-in list, so adding one is a visible,
   reviewable act rather than an omission.
3. **A boot-time assertion** that the application's DB role is not superuser and lacks
   `BYPASSRLS` ([§3.5](#35-the-bypassrls-trap)).
4. **A cross-tenant integration test** — seed two tenants, set the context to A, assert that
   every table returns zero rows belonging to B. Cheap to write, and it fails loudly the day
   someone adds a table without a policy.

Note the ordering: (1) and (2) catch the *column* being missing; (3) and (4) catch the
*policy* being missing or inert. Both failure modes are silent in production and both are
trivially detectable in CI.

---

## 10. Open questions / assumptions register

Everything below is unresolved. Nothing here should be treated as decided.

### Blocking-ish — worth answering before Phase 1 ships

| # | Question | Why it matters |
|---|---|---|
| Q1 | **What happens to audit events after 12 months** — archive to S3/Glacier, hard delete, or tiered by type? | Compliance exposure; gets harder with a year of data. See [§8.3](#83-retention--the-12-month-boundary). |
| Q2 | **Exact default RBAC role list.** Proposed: `owner`, `admin`, `manager`, `member`, `read_only`. Which map to "executive" (`requires_2fa = true`)? | Seeded into every new tenant; changing it later means migrating existing tenants. |
| Q3 | **Is the 24h session expiry absolute or sliding?** Assumed absolute. | Materially different UX; cheap now, disruptive later. |
| Q4 | **Is there a per-tenant overage ceiling, and what is it?** Unbounded soft limits are a runaway-invoice risk. | Product/legal, not just technical. See [§7.1](#71-the-mechanic). |
| Q5 | **What are R4 and R5?** Not supplied in the Phase 0 brief. | They may constrain the schema; better to know now. |
| Q6 | **Which permissions exist in the Phase 0 catalogue?** The schema seeds a starting set. | Tenants compose roles from this vocabulary; gaps block real workflows. |

### Deferred — decide before GA

| # | Question |
|---|---|
| Q7 | Exact AWS compute target: ECS Fargate vs. Amplify Hosting vs. something else. |
| Q8 | RDS PostgreSQL vs. Aurora PostgreSQL. |
| Q9 | Migration tooling choice (Drizzle Kit / node-pg-migrate / other), and how RLS policies are represented in it. |
| Q10 | Subdomain→tenant cache: which cache, what TTL, and how the pre-tenant-context lookup is scoped so it does not become a general-purpose god-mode connection ([§4.2](#42-the-lookup-cost)). |
| Q11 | S3 per-tenant isolation strategy — object storage has no RLS, so this is application-enforced and needs its own design. |
| Q12 | Usage accounting: counters-only (assumed) vs. a raw usage-events stream with rollups ([§7.2](#72-usage-accounting)). |
| Q13 | Billing provider integration (Stripe assumed but not decided) and how overage line items are pushed to it. |
| Q14 | Custom vanity domains (`crm.company.com`) — out of scope for Phase 0, but affects cookie and cert strategy ([§4.3](#43-cookies)). |
| Q15 | Tenant offboarding/deletion routine — ordered multi-table teardown ([§3.1](#31-why-pooled-and-what-we-are-accepting)). |
| Q16 | Does a user ever belong to more than one tenant? Assumed **no** for Phase 0 (`users.tenant_id` is a hard scope). Supporting it later means a `tenant_memberships` join and is a genuinely invasive change — worth confirming now. |

### Assumptions made in this note

`A1` Next.js App Router, single deployable, no separate API service ([§2.1](#21-application-shape)) ·
`A2` RDS PostgreSQL 16+, Multi-AZ ([§2.2](#22-persistence)) ·
`A3` PgBouncer/RDS Proxy in transaction pooling mode ([§2.2](#22-persistence)) ·
`A4` All AWS service selections in [§2.3](#23-where-aws-fits) ·
`A5` Session cookies scoped per-subdomain, not parent-domain ([§4.3](#43-cookies)) ·
`A6` Absolute 24h session expiry ([§6.1](#61-sessions)) ·
`A7` Server-side session records rather than stateless JWTs ([§6.1](#61-sessions)) ·
`A8` TOTP as the Phase 0 second factor; SMS excluded; WebAuthn not precluded ([§6.2](#62-two-factor-authentication)) ·
`A9` Default role list ([§5](#5-rbac-r2)) ·
`A10` `resource.action` permission naming ([§5](#5-rbac-r2)) ·
`A11` Union (not deny-precedence) semantics for multi-role permissions ([§5](#5-rbac-r2)) ·
`A12` Counter-based usage accounting ([§7.2](#72-usage-accounting)) ·
`A13` Monthly partitioning of `audit_events` ([§8.3](#83-retention--the-12-month-boundary)) ·
`A14` One user belongs to exactly one tenant (Q16) ·
`A15` A `sessions` table is required by [§6.1](#61-sessions) though it was not in the Phase 0 table list.

---

## 11. Verification status of the companion schema

`schema-phase-0.sql` was not just written — it was executed against a real PostgreSQL 16
instance and the isolation properties were asserted, not assumed. What was confirmed:

| Check | Result |
|---|---|
| Full DDL applies cleanly (`ON_ERROR_STOP=1`) | Pass — 14 tables |
| R1 conformance lint ([§9](#9-r1-enforcement)) returns zero violations | Pass — 14/14 have `NOT NULL tenant_id` + RLS enabled + forced + policy |
| Tenant A's context sees only tenant A's rows | Pass |
| **No** tenant context set → zero rows, not all rows (fail-closed) | Pass |
| Cross-tenant `INSERT` rejected by `WITH CHECK` | Pass — RLS violation raised |
| `audit_events` routes to the correct monthly partition | Pass |
| `crm_app` cannot `UPDATE`/`DELETE` audit rows (append-only via grants) | Pass — permission denied |
| Tenant signup works without any RLS bypass | Pass |

Two findings came out of running it rather than reading it, both now fixed in the schema:

1. **The lint caught a real defect on its first run.** `tenants.tenant_id` is a generated
   column (`GENERATED ALWAYS AS (id) STORED`), and PostgreSQL does **not** infer `NOT NULL`
   for a generated column even when the expression can never be null. The table therefore
   failed R1's own conformance check until `NOT NULL` was stated explicitly. This is a good
   sign for the lint: it found something a schema review would plausibly have waved through.
2. **Tenant creation needs no privileged bypass.** Generating the UUID application-side and
   setting the context to it before the insert satisfies the policy's `WITH CHECK`. Worth
   protecting deliberately — a bypass added "just for provisioning" is the usual first leak
   in a design like this.

---

## 12. What Phase 1 should pick up first

1. The **R1/RLS CI lint** ([§9](#9-r1-enforcement)) — before there are many tables to retrofit.
2. The **data-access layer** with the `SET LOCAL` choke point ([§3.3](#33-how-rls-is-actually-enforced-per-request)) — before any feature code establishes a habit of bypassing it.
3. The **cross-tenant isolation integration test** ([§9](#9-r1-enforcement)).
4. An answer to **Q1** (audit retention) and **Q2** (default roles).
