-- =============================================================================
-- Phase 1 — data-only migration: the missing project_role_grants permission
-- Beads issue: Final-Verison-abf
-- Design record: docs/architecture/03ak-phase1-organization-users-and-audit-
--                completeness-gate-data-model.md §11 item 1 ("Grant/revoke of
--                a project role is a permission to be added (for example
--                project_roles.manage); its default holder is the Builder-
--                Side Admin — 03ai §8.3, NI-20").
--
-- WHY THIS IS A DATA-ONLY MIGRATION, NOT A SCHEMA CHANGE. `permissions` is an
-- R4 master table (03ak §5; docs/ENGINEERING_RULES.md R4): its rows are the
-- tenant's permission vocabulary, seeded by provision_tenant_rbac_defaults()
-- exactly like every other permission key. Adding one more key is the same
-- class of change as 0004 §4.1 adding audit.export/audit.correct/audit.retract
-- — it does not touch a table, column, constraint or index. No `schema.ts`
-- change accompanies this file for that reason.
--
-- THE GAP THIS CLOSES. The 32-key catalogue seeded by 0004 has no permission
-- for managing project_role_grants (Site Head / Project Head assignment) —
-- confirmed by grepping 0004's `INSERT INTO permissions` FOREACH array. NI-20
-- (03ai §8.3, quoted above) already named the fix: "Who may grant these roles
-- — A Builder-Side Admin permission. Delegable only by an explicit grant of
-- that permission, and never implied by CRM configuration delegation." That
-- is the same shape as ACG-4/ACG-5/ACG-9's audit.* permissions: a capability
-- that is NOT part of owner/admin's general "everything" grant, and IS part
-- of builder_side_admin's full catalogue.
--
-- KEY CHOSEN: `project_roles.manage` (resource `project_roles`, action
-- `manage`), matching the existing `<resource>.manage` convention
-- (`roles.manage`, `settings.manage`, `billing.manage`,
-- `integrations.manage`). One key, not a read/write split: unlike audit
-- (view vs. edit vs. delete vs. export are four independently grantable
-- acts, ACG-3/ACG-9), grant and revoke of a project role are the same single
-- administrative capability (03ak §4.5 "Grant/revoke... a permission to be
-- added", singular) with no read-only counterpart called for — reading grants
-- (list by project/by employee) is ordinary access to a record already
-- visible under the requester's own permissions, per 03ak §4.7's read-side
-- gates being about acting on a target, not about the grant list itself.
--
-- WHAT THIS DOES:
--   1. Replaces provision_tenant_rbac_defaults() (verbatim from 0004, plus
--      exactly two changes, each marked "[0005]" below) so every NEWLY
--      provisioned tenant gets the permission and its single default grant.
--   2. Backfills every EXISTING tenant the same way 0004 §5 did: re-running
--      the (idempotent, ON CONFLICT DO NOTHING) function under each tenant's
--      own context. No cleanup step is needed afterwards (unlike 0004's
--      owner/admin audit.* removal) because this permission never existed
--      before, so no tenant's owner/admin role can already hold it.
--
-- RUN AS the privileged migration role (superuser or BYPASSRLS), never as
-- crm_app — exactly 0004 §5's requirement, for the same reason (the backfill
-- enumerates every tenant, which FORCE RLS hides from an unprivileged role).
-- =============================================================================


-- -----------------------------------------------------------------------------
-- 1. provision_tenant_rbac_defaults — 0004's body, plus the new permission
-- -----------------------------------------------------------------------------
-- [0005] change 1: 'project_roles.manage' added to the permission catalogue.
-- [0005] change 2: owner/admin's "everything except audit" grant now also
--   excludes resource 'project_roles', so it is NOT implied by the general
--   administrative grant (NI-20: "never implied by CRM configuration
--   delegation"). builder_side_admin's unqualified "whole catalogue" INSERT
--   (unchanged below) picks up the new permission automatically, exactly as
--   it already does for audit.* — no third change is needed for that block.
--   manager/member/read_only are unaffected: their INSERTs already filter by
--   an explicit resource allow-list that does not include 'project_roles'.
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
        'api.access',
        -- [0005] Phase 1 follow-up (NI-20; 03ak §11 item 1): grant/revoke of a
        -- project role (Site Head / Project Head) had no permission at all.
        'project_roles.manage'
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
             'The builder tenant''s administrative authority, held by the CEO or an authorized executive (AG-Q-3). Only default holder of audit view, export, correction and retraction (ACG-4, ACG-5, ACG-9), and of project role grant/revoke (NI-20).',
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
    -- owner and admin: everything EXCEPT the audit resource (ACG-4/5/9) and,
    -- [0005], EXCEPT project_roles (NI-20 — a Builder-Side Admin permission,
    -- not implied by the general administrative grant).
    INSERT INTO role_permissions (tenant_id, role_id, permission_id)
    SELECT p_tenant_id, r.id, p.id
    FROM roles r
    CROSS JOIN permissions p
    WHERE r.tenant_id = p_tenant_id
      AND p.tenant_id = p_tenant_id
      AND r.key IN ('owner','admin')
      AND p.resource NOT IN ('audit', 'project_roles')
    ON CONFLICT DO NOTHING;

    -- builder_side_admin: the whole catalogue, audit.* and project_roles.manage included.
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
 (read, export, correct, retract — ACG-4/5/9) and of project_roles.manage
 (NI-20); owner and admin get everything else. site_head and project_head are
 grant_scope = ''project'' roles (PO-AI1) with no permissions until the
 Phase 3/5 acts they authorise exist. Idempotent; also the backfill for
 existing tenants (0004 §5, 0005).';
--> statement-breakpoint


-- -----------------------------------------------------------------------------
-- 2. Backfill existing tenants
-- -----------------------------------------------------------------------------
-- New tenants get project_roles.manage from provision_tenant_rbac_defaults()
-- above at provisioning time. Existing tenants get it here: re-run the
-- function under each tenant's own context, exactly as 0004 §5 did. It is
-- idempotent (every INSERT above is ON CONFLICT DO NOTHING), so this touches
-- only the one new permission row and its one new builder_side_admin grant
-- per tenant — nothing else it seeds is disturbed. Unlike 0004 §5, no
-- corrective DELETE follows: project_roles.manage is brand new, so no
-- tenant's owner/admin role can already hold it from an earlier seed.
DO $$
DECLARE
    v_privileged boolean;
    v_tenant     record;
BEGIN
    SELECT (r.rolsuper OR r.rolbypassrls) INTO v_privileged
    FROM pg_roles r WHERE r.rolname = current_user;

    IF NOT v_privileged THEN
        RAISE EXCEPTION
            'Phase 1 (0005) backfill must run as a superuser or BYPASSRLS migration role (current_user = %). Under FORCE ROW LEVEL SECURITY any other role sees zero tenants and the backfill would silently do nothing.',
            current_user;
    END IF;

    FOR v_tenant IN SELECT id FROM tenants ORDER BY created_at LOOP
        PERFORM set_config('app.current_tenant_id', v_tenant.id::text, true);
        PERFORM provision_tenant_rbac_defaults(v_tenant.id);
    END LOOP;

    PERFORM set_config('app.current_tenant_id', '', true);
END
$$;
--> statement-breakpoint
