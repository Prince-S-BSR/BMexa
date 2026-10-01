-- =============================================================================
-- Phase 1 — custom migration: what the Drizzle DSL cannot express
-- Beads issue: Final-Verison-20t
-- Design record: docs/architecture/03ak-phase1-organization-users-and-audit-
--                completeness-gate-data-model.md (cited "03ak §n")
--
-- Created with `drizzle-kit generate --custom`. 0002 and 0003 are generated
-- from packages/db/schema.ts; this file holds only the objects drizzle-kit
-- has no DSL for:
--   1. FORCE ROW LEVEL SECURITY on every Phase 1 table (R1).
--   2. RLS on the 13 audit_events PARTITIONS — closes a Phase 0 cross-tenant
--      leak found by this task (03ak §7).
--   3. Triggers: updated_at, reporting-tree acyclicity, append-only project
--      role grants, audit_events append-only + supersession guard.
--   4. Provisioning functions, replaced (new permissions, roles, departments).
--   5. Backfill of existing tenants.
--   6. crm_app grants (conditional, same pattern as 0001).
--
-- RUN AS the privileged migration role (superuser or BYPASSRLS), never as
-- crm_app — §5's backfill enumerates every tenant and refuses to run
-- otherwise rather than silently seeing zero tenants under FORCE RLS.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- 1. FORCE ROW LEVEL SECURITY on the Phase 1 tables  (R1)
-- -----------------------------------------------------------------------------
-- 0003 (generated) already ran ENABLE ROW LEVEL SECURITY and CREATE POLICY
-- tenant_isolation on each, identical in shape to 0000 §7. ENABLE alone does
-- not bind the table owner; FORCE does. Same statement shape as 0000 §7.
ALTER TABLE departments         FORCE ROW LEVEL SECURITY;
--> statement-breakpoint
ALTER TABLE designations        FORCE ROW LEVEL SECURITY;
--> statement-breakpoint
ALTER TABLE employees           FORCE ROW LEVEL SECURITY;
--> statement-breakpoint
ALTER TABLE projects            FORCE ROW LEVEL SECURITY;
--> statement-breakpoint
ALTER TABLE project_role_grants FORCE ROW LEVEL SECURITY;
--> statement-breakpoint


-- -----------------------------------------------------------------------------
-- 2. RLS on every audit_events partition  (R1 — Phase 0 defect, 03ak §7)
-- -----------------------------------------------------------------------------
-- FOUND BY THIS TASK. 0000 §7 put RLS on the partitioned PARENT only, and its
-- R1 lint excludes 'audit_events_%' on the premise that "partitions inherit
-- from parent". They do not when addressed DIRECTLY: a partition is its own
-- relation with its own (default: disabled) row security, and the parent's
-- policy is consulted only for queries that go through the parent. Because
-- the out-of-band `GRANT ... ON ALL TABLES IN SCHEMA public TO crm_app` also
-- reached the partitions, crm_app could run
--     SELECT * FROM audit_events_2026_10;
-- with NO tenant context and read every tenant's audit rows, and INSERT
-- forged rows for any tenant. Verified against the local Phase 0 database
-- before this fix; the regression test lives in
-- apps/api/test/phase1-audit-completeness-gate.test.ts.
--
-- Fix, two independent layers:
--   (a) Each partition gets the same ENABLE + FORCE + tenant_isolation policy
--       as every other table. Queries through the parent are unaffected:
--       PostgreSQL applies only the parent's policy to them.
--   (b) §6 revokes every direct privilege crm_app holds on the partitions.
--       Access through the parent needs privileges on the parent only.
--
-- OBLIGATION ON THE (UNBUILT) PARTITION-CREATION JOB: every partition it
-- creates must get (a) in the same transaction and must never be granted to
-- crm_app. The schema-conformance test now lints partitions too, so a
-- partition created without RLS fails CI.
DO $$
DECLARE
    v_partition regclass;
BEGIN
    FOR v_partition IN
        SELECT i.inhrelid::regclass
        FROM pg_inherits i
        WHERE i.inhparent = 'audit_events'::regclass
    LOOP
        EXECUTE format('ALTER TABLE %s ENABLE ROW LEVEL SECURITY', v_partition);
        EXECUTE format('ALTER TABLE %s FORCE ROW LEVEL SECURITY', v_partition);
        IF NOT EXISTS (
            SELECT 1 FROM pg_policy
            WHERE polrelid = v_partition AND polname = 'tenant_isolation'
        ) THEN
            EXECUTE format(
                'CREATE POLICY tenant_isolation ON %s '
                'USING (tenant_id = app_current_tenant_id()) '
                'WITH CHECK (tenant_id = app_current_tenant_id())',
                v_partition);
        END IF;
    END LOOP;
END
$$;
--> statement-breakpoint


-- -----------------------------------------------------------------------------
-- 3.1 updated_at maintenance on the Phase 1 entity tables (0000 §0.2 pattern)
-- -----------------------------------------------------------------------------
CREATE TRIGGER departments_set_updated_at
    BEFORE UPDATE ON departments
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();
--> statement-breakpoint
CREATE TRIGGER designations_set_updated_at
    BEFORE UPDATE ON designations
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();
--> statement-breakpoint
CREATE TRIGGER employees_set_updated_at
    BEFORE UPDATE ON employees
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();
--> statement-breakpoint
CREATE TRIGGER projects_set_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();
--> statement-breakpoint


-- -----------------------------------------------------------------------------
-- 3.2 The reporting tree is a tree  (PO-AF1·B.1–B.5; AC-55)
-- -----------------------------------------------------------------------------
-- "Direct Manager means immediate manager; indirect Manager means any manager
-- above in the same chain." A chain with a cycle has no "above": every
-- member would be everyone's indirect manager, and every recursive scope
-- query over it would either loop or silently truncate. The CHECK in 0003
-- stops the one-row cycle (reports to self); this stops the rest.
--
-- Concurrency: two transactions could each add one edge of a cycle (A→B and
-- B→A) and both pass. A per-tenant transaction-scoped advisory lock
-- serialises reporting-line changes within a tenant (they are rare admin
-- acts), and in READ COMMITTED each walk below runs after the lock, so it sees
-- the other transaction's committed edge.
--
-- SECURITY INVOKER on purpose: the walk runs under the caller's RLS, so it
-- sees exactly one tenant — the composite FK already guarantees the manager is
-- in the same tenant.
CREATE OR REPLACE FUNCTION employees_forbid_reporting_cycle()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
    v_cursor uuid;
    v_steps  integer := 0;
BEGIN
    IF NEW.reports_to_employee_id IS NULL THEN
        RETURN NEW;
    END IF;

    PERFORM pg_advisory_xact_lock(
        hashtextextended('employees_reporting_tree:' || NEW.tenant_id::text, 0));

    v_cursor := NEW.reports_to_employee_id;
    WHILE v_cursor IS NOT NULL LOOP
        IF v_cursor = NEW.id THEN
            RAISE EXCEPTION
                'reporting-tree cycle: employee % cannot report (directly or indirectly) to %',
                NEW.id, NEW.reports_to_employee_id
                USING ERRCODE = 'check_violation',
                      CONSTRAINT = 'employees_reporting_tree_acyclic';
        END IF;
        v_steps := v_steps + 1;
        IF v_steps > 10000 THEN
            -- Unreachable while this trigger has guarded every write; a
            -- pre-existing cycle would otherwise hang the walk.
            RAISE EXCEPTION 'reporting tree deeper than 10000 levels or already cyclic'
                USING ERRCODE = 'check_violation',
                      CONSTRAINT = 'employees_reporting_tree_acyclic';
        END IF;
        SELECT e.reports_to_employee_id INTO v_cursor
        FROM employees e
        WHERE e.tenant_id = NEW.tenant_id AND e.id = v_cursor;
    END LOOP;

    RETURN NEW;
END;
$$;
--> statement-breakpoint
CREATE TRIGGER employees_reporting_tree_acyclic
    BEFORE INSERT OR UPDATE OF reports_to_employee_id ON employees
    FOR EACH ROW EXECUTE FUNCTION employees_forbid_reporting_cycle();
--> statement-breakpoint


-- -----------------------------------------------------------------------------
-- 3.3 Project role grants are appended, never rewritten  (Spec §08)
-- -----------------------------------------------------------------------------
-- "Role changes must not destroy historical ownership information." The only
-- permitted UPDATE is the one-time revocation stamp (revoked_at, and
-- optionally revoked_by_user_id) on a live grant. Re-pointing a grant at
-- another employee/role/project, back-dating it, or reopening a revoked grant
-- is refused; a re-grant is a new row. DELETE is withheld from crm_app by
-- grant (§6), not by trigger, so the tenant-teardown cascade still works.
CREATE OR REPLACE FUNCTION project_role_grants_forbid_rewrite()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    IF NEW.id                 IS DISTINCT FROM OLD.id
       OR NEW.tenant_id          IS DISTINCT FROM OLD.tenant_id
       OR NEW.employee_id        IS DISTINCT FROM OLD.employee_id
       OR NEW.role_id            IS DISTINCT FROM OLD.role_id
       OR NEW.role_grant_scope   IS DISTINCT FROM OLD.role_grant_scope
       OR NEW.project_id         IS DISTINCT FROM OLD.project_id
       OR NEW.granted_by_user_id IS DISTINCT FROM OLD.granted_by_user_id
       OR NEW.granted_at         IS DISTINCT FROM OLD.granted_at
    THEN
        RAISE EXCEPTION
            'project_role_grants are append-only: only revocation may be recorded on an existing grant (grant %)',
            OLD.id
            USING ERRCODE = 'check_violation',
                  CONSTRAINT = 'project_role_grants_append_only';
    END IF;

    IF OLD.revoked_at IS NOT NULL THEN
        RAISE EXCEPTION
            'project role grant % is already revoked; revocations are final — issue a new grant instead',
            OLD.id
            USING ERRCODE = 'check_violation',
                  CONSTRAINT = 'project_role_grants_append_only';
    END IF;

    RETURN NEW;
END;
$$;
--> statement-breakpoint
CREATE TRIGGER project_role_grants_append_only
    BEFORE UPDATE ON project_role_grants
    FOR EACH ROW EXECUTE FUNCTION project_role_grants_forbid_rewrite();
--> statement-breakpoint


-- -----------------------------------------------------------------------------
-- 3.4 audit_events is append-only for EVERY role  (R6; the AGX-10 resolution)
-- -----------------------------------------------------------------------------
-- R6's guarantee was grants-only: crm_app lacks UPDATE/DELETE. That holds only
-- as long as the out-of-band grant setup is right, and it never bound the
-- table owner. 03ak §6's resolution of AGX-10 rests on "nothing in the
-- append-only log is ever mutated at the storage layer", so that claim is
-- now enforced in the migration itself: any UPDATE or DELETE, by anyone,
-- raises. ACG-3/ACG-4 "edit or delete" is an INSERT of a supersession record
-- (§3.5), which this trigger does not touch.
--
-- Not affected: DROP/DETACH of a partition (DDL, no row triggers) — the
-- future archive job's concern, which ACG-8 now constrains (03ak §6.6); and
-- tenant teardown, which the ON DELETE RESTRICT FK in 0003 already refuses
-- for a tenant with audit history (ACG-8).
CREATE OR REPLACE FUNCTION audit_events_forbid_mutation()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE EXCEPTION
        'audit_events is append-only (R6): % is never permitted. An authorised correction or retraction is a new supersession record (ACG-3/ACG-6).',
        TG_OP
        USING ERRCODE = 'insufficient_privilege';
END;
$$;
--> statement-breakpoint
CREATE TRIGGER audit_events_append_only
    BEFORE UPDATE OR DELETE ON audit_events
    FOR EACH ROW EXECUTE FUNCTION audit_events_forbid_mutation();
--> statement-breakpoint


-- -----------------------------------------------------------------------------
-- 3.5 Supersession guard  (ACG-4, ACG-6)
-- -----------------------------------------------------------------------------
-- Runs only for rows that supersede another. The CHECK constraints in 0003
-- already enforce the row's shape (reason present and non-blank — ACG-7;
-- named human actor — ACG-6; category 'audit'; a correction carries its
-- after_state). This trigger enforces the two rules that need a lookup:
--
--   (1) ACG-6 "a separate IMMUTABLE record": a supersession record can itself
--       never be corrected or retracted — not even by the Builder-Side Admin.
--       (A mistaken correction is fixed by superseding the ORIGINAL again;
--       the latest supersession wins.)
--   (2) ACG-4 "Only the Builder-Side Admin may edit or delete audit records":
--       the actor must, at insert time, be an active user holding
--       audit.correct (for a correction) or audit.retract (for a retraction)
--       through a TENANT-WIDE role grant. R2: this checks PERMISSION KEYS, the
--       fixed vocabulary — never a role name. The Builder-Side Admin role is
--       merely those permissions' only default holder (§4).
--
-- Structural problems (missing kind, missing actor …) are left for the CHECK
-- constraints to report with their own names.
--
-- SECURITY INVOKER: every lookup runs under the caller's tenant context, so
-- it can only find the caller's tenant's target, user and grants.
CREATE OR REPLACE FUNCTION audit_events_supersession_guard()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
    v_found              boolean;
    v_target_supersedes  uuid;
    v_required           text;
    v_authorized         boolean;
BEGIN
    IF NEW.supersession_kind IS NULL
       OR NEW.supersession_kind NOT IN ('correction', 'retraction')
       OR NEW.actor_user_id IS NULL
       OR NEW.supersedes_occurred_at IS NULL
    THEN
        RETURN NEW;
    END IF;

    SELECT true, a.supersedes_event_id
      INTO v_found, v_target_supersedes
    FROM audit_events a
    WHERE a.tenant_id   = NEW.tenant_id
      AND a.id          = NEW.supersedes_event_id
      AND a.occurred_at = NEW.supersedes_occurred_at;

    IF v_found IS NULL THEN
        RAISE EXCEPTION
            'audit supersession target % (occurred_at %) does not exist in this tenant',
            NEW.supersedes_event_id, NEW.supersedes_occurred_at
            USING ERRCODE = 'foreign_key_violation',
                  CONSTRAINT = 'audit_events_supersedes_fk';
    END IF;

    IF v_target_supersedes IS NOT NULL THEN
        RAISE EXCEPTION
            'ACG-6: audit event % is itself a supersession record and is immutable; supersede the original event instead',
            NEW.supersedes_event_id
            USING ERRCODE = 'check_violation',
                  CONSTRAINT = 'audit_events_supersession_target_not_meta';
    END IF;

    v_required := CASE NEW.supersession_kind
                      WHEN 'correction' THEN 'audit.correct'
                      WHEN 'retraction' THEN 'audit.retract'
                  END;

    SELECT EXISTS (
        SELECT 1
        FROM users u
        JOIN user_roles ur
          ON ur.tenant_id = u.tenant_id AND ur.user_id = u.id
        JOIN role_permissions rp
          ON rp.tenant_id = ur.tenant_id AND rp.role_id = ur.role_id
        JOIN permissions p
          ON p.tenant_id = rp.tenant_id AND p.id = rp.permission_id
        WHERE u.tenant_id  = NEW.tenant_id
          AND u.id         = NEW.actor_user_id
          AND u.status     = 'active'
          AND u.deleted_at IS NULL
          AND p.key        = v_required
    ) INTO v_authorized;

    IF NOT v_authorized THEN
        RAISE EXCEPTION
            'ACG-4: user % does not hold % and may not % audit records',
            NEW.actor_user_id, v_required,
            CASE NEW.supersession_kind WHEN 'correction' THEN 'correct' ELSE 'retract' END
            USING ERRCODE = 'insufficient_privilege';
    END IF;

    RETURN NEW;
END;
$$;
--> statement-breakpoint
CREATE TRIGGER audit_events_supersession_guard
    BEFORE INSERT ON audit_events
    FOR EACH ROW
    WHEN (NEW.supersedes_event_id IS NOT NULL)
    EXECUTE FUNCTION audit_events_supersession_guard();
--> statement-breakpoint


-- =============================================================================
-- 4. PROVISIONING FUNCTIONS, REPLACED  (R2, R4)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- 4.1 provision_tenant_rbac_defaults — Phase 0 body plus Phase 1 changes
-- -----------------------------------------------------------------------------
-- Changes from 0000 §9.1, each with its source:
--   * Permissions audit.export, audit.correct, audit.retract are added.
--     audit.read already existed. ACG-9: "Do not confuse export permission
--     with audit log viewing permission" — hence export is its own key.
--     ACG-3 "edit or delete" is two keys (correct / retract) so a tenant can
--     hold one without the other; ACG-4 gives both to the same holder.
--   * Role builder_side_admin ("Builder-Side Admin", AG-Q-3; rename AG-Q-3-m):
--     system role, tenant-wide, requires_2fa = true (the tenant's
--     administrative authority is "the CEO or an authorized executive", and
--     2FA is mandatory for executive roles — architecture note §6.2). It holds
--     the whole catalogue, and is the ONLY default holder of every audit.*
--     permission (ACG-4, ACG-5, ACG-9).
--   * owner and admin now receive the catalogue MINUS resource 'audit'.
--     In 0000 they held audit.read; ACG-5 limits audit visibility to the
--     Builder-Side Admin and management within scope, and AG-Q-3 says staff
--     with delegated setup permissions "do not automatically become
--     Builder-Side Admin". Scoped management visibility (ACG-5 second limb)
--     needs write-time scope anchors that Phase 3 will define (03ak §6.5), so
--     no scoped-read permission is seeded yet.
--   * Roles site_head and project_head (PO-AI1): grant_scope = 'project', so
--     they can be granted only per project (project_role_grants). They carry
--     NO permissions yet: every act they authorise (holds, cancellations,
--     resale release, Approval Exception, Stage-2 …) belongs to Phase 3/5 and
--     its permission will be added with it, keeping NI-18's asymmetries
--     (Site-Head-only vs Site-Head-or-Project-Head) as separate grants.
--     is_system = true (cannot be deleted or re-keyed); requires_2fa = false
--     (not locked either way).
--
-- R2 is unchanged: role keys appear only here, in seed data. No application
-- or database logic branches on them — the supersession guard (§3.5) checks
-- permission keys.
CREATE OR REPLACE FUNCTION provision_tenant_rbac_defaults(p_tenant_id uuid)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
    v_perm  text;
    v_role  record;
BEGIN
    -- ---- Permission catalogue (the fixed vocabulary) -------------------------
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
        -- Phase 1 (ACG-3, ACG-4, ACG-9):
        'audit.export','audit.correct','audit.retract',
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
    FOR v_role IN
        SELECT * FROM (VALUES
            ('owner',     'Owner',      'Full control including billing and tenant deletion.', true,  'tenant'),
            ('admin',     'Admin',      'Full control except tenant deletion.',                 true,  'tenant'),
            ('manager',   'Manager',    'Manages team members and sees all CRM data.',          false, 'tenant'),
            ('member',    'Member',     'Standard frontline user. Full CRM data access.',       false, 'tenant'),
            ('read_only', 'Read Only',  'View-only access to CRM data.',                        false, 'tenant'),
            -- Phase 1:
            ('builder_side_admin', 'Builder-Side Admin',
             'The builder tenant''s administrative authority, held by the CEO or an authorized executive (AG-Q-3). Only default holder of audit view, export, correction and retraction (ACG-4, ACG-5, ACG-9).',
             true, 'tenant'),
            ('site_head',    'Site Head',
             'Project-level role, granted per project and independent of designation (PO-AI1).',
             false, 'project'),
            ('project_head', 'Project Head',
             'Project-level role, granted per project and independent of designation (PO-AI1).',
             false, 'project')
        ) AS t(key, name, description, requires_2fa, grant_scope)
    LOOP
        INSERT INTO roles (tenant_id, key, name, description, is_system, requires_2fa, grant_scope)
        VALUES (p_tenant_id, v_role.key, v_role.name, v_role.description, true,
                v_role.requires_2fa, v_role.grant_scope)
        ON CONFLICT (tenant_id, key) DO NOTHING;
    END LOOP;

    -- ---- Role -> permission grants -------------------------------------------
    -- owner and admin: everything EXCEPT the audit resource (ACG-4/5/9).
    INSERT INTO role_permissions (tenant_id, role_id, permission_id)
    SELECT p_tenant_id, r.id, p.id
    FROM roles r
    CROSS JOIN permissions p
    WHERE r.tenant_id = p_tenant_id
      AND p.tenant_id = p_tenant_id
      AND r.key IN ('owner','admin')
      AND p.resource <> 'audit'
    ON CONFLICT DO NOTHING;

    -- builder_side_admin: the whole catalogue, audit.* included.
    INSERT INTO role_permissions (tenant_id, role_id, permission_id)
    SELECT p_tenant_id, r.id, p.id
    FROM roles r
    CROSS JOIN permissions p
    WHERE r.tenant_id = p_tenant_id
      AND p.tenant_id = p_tenant_id
      AND r.key = 'builder_side_admin'
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

    -- member: CRM data only. No export.
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

    -- site_head / project_head: no permissions until Phase 3/5 (see header).
END;
$$;
--> statement-breakpoint

COMMENT ON FUNCTION provision_tenant_rbac_defaults(uuid) IS
'Seeds the R2 default roles and permission catalogue for a tenant. System roles
 (is_system = true) cannot be deleted or re-keyed; tenants clone and edit. From
 Phase 1: builder_side_admin (AG-Q-3) is the only default holder of audit.*
 (read, export, correct, retract — ACG-4/5/9); owner and admin get everything
 else; site_head and project_head are grant_scope = ''project'' roles (PO-AI1)
 with no permissions until the Phase 3/5 acts they authorise exist. Idempotent;
 also the Phase 1 backfill for existing tenants.';
--> statement-breakpoint


-- -----------------------------------------------------------------------------
-- 4.2 provision_tenant_master_data — Phase 0 body plus departments
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION provision_tenant_master_data(p_tenant_id uuid)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
    -- ---- Lead sources --------------------------------------------------------
    INSERT INTO lead_sources (tenant_id, code, label, sort_order, is_system)
    SELECT p_tenant_id, v.code, v.label, v.sort_order, true
    FROM (VALUES
        ('web_form',       'Web Form',        10),
        ('referral',       'Referral',        20),
        ('phone_inbound',  'Inbound Call',    30),
        ('email_campaign', 'Email Campaign',  40),
        ('paid_ads',       'Paid Advertising',50),
        ('social',         'Social Media',    60),
        ('event',          'Event',           70),
        ('partner',        'Partner',         80),
        ('cold_outreach',  'Cold Outreach',   90),
        ('other',          'Other',          100)
    ) AS v(code, label, sort_order)
    ON CONFLICT (tenant_id, code) DO NOTHING;

    -- ---- Lead statuses -------------------------------------------------------
    -- Exactly one is_default row, enforced by a partial unique index. Terminal
    -- statuses stop follow-up automation and drop out of "open work" counts.
    INSERT INTO lead_statuses (tenant_id, code, label, sort_order,
                               is_default, is_terminal, is_system)
    SELECT p_tenant_id, v.code, v.label, v.sort_order,
           v.is_default, v.is_terminal, true
    FROM (VALUES
        ('new',         'New',          10, true,  false),
        ('contacted',   'Contacted',    20, false, false),
        ('working',     'Working',      30, false, false),
        ('nurturing',   'Nurturing',    40, false, false),
        ('qualified',   'Qualified',    50, false, false),
        ('unqualified', 'Unqualified',  60, false, true),
        ('converted',   'Converted',    70, false, true)
    ) AS v(code, label, sort_order, is_default, is_terminal)
    ON CONFLICT (tenant_id, code) DO NOTHING;

    -- ---- Lead stages ---------------------------------------------------------
    -- stage_type is the only part the product reads. Note won = 100% and
    -- lost = 0% probability, which the lead_stages_terminal_probability CHECK
    -- also enforces.
    INSERT INTO lead_stages (tenant_id, code, label, sort_order,
                             stage_type, probability_pct, is_system)
    SELECT p_tenant_id, v.code, v.label, v.sort_order,
           v.stage_type, v.probability_pct, true
    FROM (VALUES
        ('new_lead',      'New Lead',      10, 'open', 10),
        ('qualification', 'Qualification', 20, 'open', 25),
        ('proposal',      'Proposal',      30, 'open', 50),
        ('negotiation',   'Negotiation',   40, 'open', 75),
        ('closed_won',    'Closed Won',    50, 'won',  100),
        ('closed_lost',   'Closed Lost',   60, 'lost', 0)
    ) AS v(code, label, sort_order, stage_type, probability_pct)
    ON CONFLICT (tenant_id, code) DO NOTHING;

    -- ---- Lead loss reasons ---------------------------------------------------
    -- 'other' requires a note: an "Other" bucket with no detail is a reason that
    -- teaches nobody anything, and it reliably becomes the largest category.
    INSERT INTO lead_loss_reasons (tenant_id, code, label, sort_order,
                                   requires_note, is_system)
    SELECT p_tenant_id, v.code, v.label, v.sort_order, v.requires_note, true
    FROM (VALUES
        ('price',              'Price',                10, false),
        ('timing',             'Bad Timing',           20, false),
        ('lost_to_competitor', 'Lost to Competitor',   30, true),
        ('no_budget',          'No Budget',            40, false),
        ('no_response',        'Went Unresponsive',    50, false),
        ('not_a_fit',          'Not a Fit',            60, false),
        ('duplicate',          'Duplicate Record',     70, false),
        ('other',              'Other',                80, true)
    ) AS v(code, label, sort_order, requires_note)
    ON CONFLICT (tenant_id, code) DO NOTHING;

    -- ---- Deal stages ---------------------------------------------------------
    -- [Q17] The SALES pipeline, seeded separately from the lead pipeline above
    -- and deliberately DIFFERENT from it — a deal starts where a lead ends. If
    -- these two lists were seeded identically it would be a signal that they did
    -- not need to be two tables; they are not identical, which is the point.
    -- stage_type is the only part the product reads: won = 100%, lost = 0%, as
    -- the deal_stages_terminal_probability CHECK also enforces.
    INSERT INTO deal_stages (tenant_id, code, label, sort_order,
                             stage_type, probability_pct, is_system)
    SELECT p_tenant_id, v.code, v.label, v.sort_order,
           v.stage_type, v.probability_pct, true
    FROM (VALUES
        ('qualification',  'Qualification',  10, 'open', 20),
        ('needs_analysis', 'Needs Analysis', 20, 'open', 30),
        ('proposal_sent',  'Proposal Sent',  30, 'open', 50),
        ('negotiation',    'Negotiation',    40, 'open', 75),
        ('contract_sent',  'Contract Sent',  50, 'open', 90),
        ('closed_won',     'Closed Won',     60, 'won',  100),
        ('closed_lost',    'Closed Lost',    70, 'lost', 0)
    ) AS v(code, label, sort_order, stage_type, probability_pct)
    ON CONFLICT (tenant_id, code) DO NOTHING;

    -- ---- Deal loss reasons ---------------------------------------------------
    -- [Q17] Commercial post-mortem reasons for a QUALIFIED deal, distinct from
    -- the lead loss reasons above (which are about whether an opportunity was
    -- ever real). 'lost_to_competitor' and 'missing_capability' require a note:
    -- "we lost to a competitor" without naming which one, and "we were missing a
    -- capability" without naming which, are the two data points that most often
    -- get collected and then cannot be acted on.
    INSERT INTO deal_loss_reasons (tenant_id, code, label, sort_order,
                                   requires_note, is_system)
    SELECT p_tenant_id, v.code, v.label, v.sort_order, v.requires_note, true
    FROM (VALUES
        ('price',               'Price',                     10, false),
        ('lost_to_competitor',  'Lost to Competitor',        20, true),
        ('missing_capability',  'Missing Capability',        30, true),
        ('no_decision',         'No Decision / Stalled',     40, false),
        ('budget_withdrawn',    'Budget Withdrawn',          50, false),
        ('timing',              'Timing',                    60, false),
        ('built_internally',    'Chose to Build Internally', 70, false),
        ('other',               'Other',                     80, true)
    ) AS v(code, label, sort_order, requires_note)
    ON CONFLICT (tenant_id, code) DO NOTHING;

    -- ---- Departments (Phase 1) ------------------------------------------------
    -- [AG-Q-3-n, PO LOCKED] "Sales, CRM, Accounts, Marketing" — exactly these
    -- four, is_system = true. CRM is a DEPARTMENT, not the BMexa system
    -- (AG-Q-3-m). Where Sales Support / Helpdesk sit is OPEN (AG-Q-11(f)); a
    -- tenant answers it by adding rows, so nothing else is seeded.
    -- No designations are seeded: the PO has locked no designation list.
    INSERT INTO departments (tenant_id, code, label, sort_order, is_system)
    SELECT p_tenant_id, v.code, v.label, v.sort_order, true
    FROM (VALUES
        ('sales',     'Sales',     10),
        ('crm',       'CRM',       20),
        ('accounts',  'Accounts',  30),
        ('marketing', 'Marketing', 40)
    ) AS v(code, label, sort_order)
    ON CONFLICT (tenant_id, code) DO NOTHING;
END;
$$;
--> statement-breakpoint

COMMENT ON FUNCTION provision_tenant_master_data(uuid) IS
'Seeds the R4 master/lookup data for a newly provisioned tenant: lead sources,
 lead statuses, lead stages, lead loss reasons, deal stages, deal loss reasons
 (Phase 0, 46 rows) and, from Phase 1, the four PO-locked departments (Sales,
 CRM, Accounts, Marketing; AG-Q-3-n) — 50 rows per tenant. Designations are a
 tenant-owned master and are not seeded. All seeded rows are is_system = true:
 renameable, reorderable and deactivatable by the tenant, but not deletable and
 not re-codable. Retiring a value is is_active = false, never DELETE; foreign
 keys into masters are composite and ON DELETE RESTRICT. Idempotent (ON
 CONFLICT DO NOTHING), so it is also the Phase 1 backfill for existing tenants.';
--> statement-breakpoint


-- =============================================================================
-- 5. BACKFILL EXISTING TENANTS
-- =============================================================================
-- New tenants get everything from the two functions above at provisioning.
-- Existing tenants get it here: re-run both (idempotent — ON CONFLICT DO
-- NOTHING throughout), then remove the audit.* grants 0000 gave the system
-- owner/admin roles, which ACG-5 no longer allows (see 4.1).
--
-- Each tenant is processed under its OWN tenant context, exactly as
-- provisioning does, so the same code path writes the same rows. Enumerating
-- tenants, however, needs a role that is not bound by FORCE RLS; otherwise
-- `SELECT id FROM tenants` sees zero rows and the backfill would silently do
-- nothing. That silent path is refused explicitly.
DO $$
DECLARE
    v_privileged boolean;
    v_tenant     record;
BEGIN
    SELECT (r.rolsuper OR r.rolbypassrls) INTO v_privileged
    FROM pg_roles r WHERE r.rolname = current_user;

    IF NOT v_privileged THEN
        RAISE EXCEPTION
            'Phase 1 backfill must run as a superuser or BYPASSRLS migration role (current_user = %). Under FORCE ROW LEVEL SECURITY any other role sees zero tenants and the backfill would silently do nothing.',
            current_user;
    END IF;

    FOR v_tenant IN SELECT id FROM tenants ORDER BY created_at LOOP
        PERFORM set_config('app.current_tenant_id', v_tenant.id::text, true);
        PERFORM provision_tenant_rbac_defaults(v_tenant.id);
        PERFORM provision_tenant_master_data(v_tenant.id);

        DELETE FROM role_permissions rp
        USING roles r, permissions p
        WHERE rp.tenant_id = v_tenant.id
          AND r.tenant_id  = v_tenant.id AND r.id = rp.role_id
          AND r.is_system  AND r.key IN ('owner', 'admin')
          AND p.tenant_id  = v_tenant.id AND p.id = rp.permission_id
          AND p.resource   = 'audit';
    END LOOP;

    PERFORM set_config('app.current_tenant_id', '', true);
END
$$;
--> statement-breakpoint


-- =============================================================================
-- 6. APPLICATION ROLE GRANTS  (conditional, as in 0001)
-- =============================================================================
-- crm_app is provisioned out of band (0000 §7.1). Grant only if it exists, so
-- this migration applies regardless of provisioning order; the out-of-band
-- setup must apply the same grants when it creates crm_app later.
--
--   * Phase 1 entity and master tables: ordinary CRUD.
--   * project_role_grants: no DELETE — grants are revoked, never deleted
--     (Spec §08; §3.3 above). Tenant teardown still cascades, because
--     referential actions run with the table owner's privileges.
--   * audit_events: R6 grants re-asserted (SELECT, INSERT only). Unchanged in
--     intent; restated here so the guarantee is in a migration, not only in
--     out-of-band setup.
--   * audit_events partitions: ALL direct privileges revoked (§2(b)).
--     Every read and write goes through the parent, where RLS applies.
DO $$
DECLARE
    v_partition regclass;
BEGIN
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'crm_app') THEN
        EXECUTE 'GRANT SELECT, INSERT, UPDATE, DELETE ON departments, designations, employees, projects TO crm_app';
        EXECUTE 'GRANT SELECT, INSERT, UPDATE ON project_role_grants TO crm_app';
        EXECUTE 'REVOKE DELETE, TRUNCATE ON project_role_grants FROM crm_app';

        EXECUTE 'REVOKE UPDATE, DELETE, TRUNCATE ON audit_events FROM crm_app';
        EXECUTE 'GRANT SELECT, INSERT ON audit_events TO crm_app';

        FOR v_partition IN
            SELECT i.inhrelid::regclass
            FROM pg_inherits i
            WHERE i.inhparent = 'audit_events'::regclass
        LOOP
            EXECUTE format('REVOKE ALL ON %s FROM crm_app', v_partition);
        END LOOP;
    END IF;
END
$$;
--> statement-breakpoint


-- =============================================================================
-- 7. TABLE COMMENTS
-- =============================================================================
COMMENT ON TABLE departments IS
'R4 master. Seeded per tenant with the four PO-locked departments (Sales, CRM,
 Accounts, Marketing; AG-Q-3-n), is_system = true. Tenants add rows; retire
 with is_active = false. CRM is a department, not the BMexa system (AG-Q-3-m).
 Design: 03ak §4.2.';
--> statement-breakpoint
COMMENT ON TABLE designations IS
'R4 master of HR titles (e.g. GM, AGM). Not seeded: no designation list is
 locked. Confers NO authority — nothing may branch on a designation (PO-AI1·7).
 Design: 03ak §4.2.';
--> statement-breakpoint
COMMENT ON TABLE employees IS
'Builder-side organizational identity (Spec §06 "Employee"), 1:1 with a user.
 reports_to_employee_id is the direct manager; indirect managers are the
 transitive chain above (PO-AF1·B; AC-55). The chain is kept acyclic by
 trigger. Rows are never deleted; access ends via users.status (Spec §57).
 Design: 03ak §4.3.';
--> statement-breakpoint
COMMENT ON TABLE projects IS
'DELIBERATE MINIMAL STUB (03ak §4.6): FK target for project_role_grants only.
 The Project / Tower / Floor / Inventory / Pricing model is Phase 2 (Spec §79),
 which extends this table rather than replacing it. No status column until a
 project lifecycle is decided (R4).';
--> statement-breakpoint
COMMENT ON TABLE project_role_grants IS
'Per-project role assignment (PO-AI1; fixes NI-17). One row per (employee,
 grant_scope = project role, project). No per-project cardinality limit
 (AI-Q-2 open). Append-only: revoke by stamping revoked_at; never delete,
 never re-point, never reopen (Spec §08). Management authority (AC-55) =
 an active grant on the project AND the target inside the actor''s reporting
 tree (employees.reports_to_employee_id). Design: 03ak §4.5.';
--> statement-breakpoint
COMMENT ON TABLE audit_events IS
'R6 event-based audit log, extended for the Audit Completeness Gate
 (ACG-1…ACG-9). Append-only at the storage layer for every role: UPDATE and
 DELETE are refused by trigger and by grants. ACG-3/ACG-4 "edit or delete" by
 the Builder-Side Admin is an appended supersession record
 (supersedes_event_id, supersession_kind correction|retraction, mandatory
 supersession_reason) — the original row is never touched; presentation
 follows the chain (latest supersession wins). tenant_id FK is ON DELETE
 RESTRICT (ACG-8: no deletion path through tenant removal). Partitioned by
 month; every partition carries its own RLS policy and no direct crm_app
 grants. Retention: ACG-8 (indefinite, no automatic expiration); how that
 sits with the original R6 archive-then-drop text is recorded in 03ak §6.6.
 No archive or partition job exists. Design: 03ak §6.';
