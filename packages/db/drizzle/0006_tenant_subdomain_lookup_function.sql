-- =============================================================================
-- Phase 1 — tenant subdomain lookup function
-- Beads issue: Final-Verison-x0l (login endpoint)
--
-- WHY THIS EXISTS
--   Login has the exact same chicken-and-egg problem
--   0001_session_lookup_function.sql already solved for session tokens:
--   `tenants` is RLS-protected (tenant_id = app_current_tenant_id(), the
--   generated-column self-reference — see the `tenant_isolation` policy
--   comment on `tenants` in 0000_phase0_foundation.sql), but the whole point
--   of a login request is to DISCOVER the tenant_id from the caller-supplied
--   subdomain — no tenant context can be SET LOCAL before that is known.
--
--   0000_phase0_foundation.sql's own comment above the `tenants` policy
--   already names this exact case and prescribes the fix: "That one
--   legitimate cross-tenant read must go through a narrowly scoped SECURITY
--   DEFINER function returning nothing but (id, status)... it belongs with
--   the routing work" (architecture note §4.2, Q10). This IS that routing
--   work, applied to login's subdomain -> tenant_id resolution. Same shape,
--   same mitigation as resolve_session_context() — not a new architectural
--   decision.
--
-- SCOPE, kept as narrow as resolve_session_context():
--   * Takes only a subdomain string.
--   * Returns only (id, status) — never name, custom_attributes, or anything
--     else a tenant row holds.
--   * SECURITY DEFINER, owned by the table owner (not crm_app), with EXECUTE
--     revoked from PUBLIC and granted only to crm_app.
CREATE OR REPLACE FUNCTION resolve_tenant_by_subdomain(p_subdomain text)
RETURNS TABLE (
    id      uuid,
    status  text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT id, status
    FROM tenants
    WHERE subdomain = p_subdomain;
$$;

COMMENT ON FUNCTION resolve_tenant_by_subdomain(text) IS
'Narrowly-scoped SECURITY DEFINER lookup used ONLY by POST /auth/login to
 resolve a subdomain to {id, status} before any tenant context exists.
 Mirrors resolve_session_context() (0001_session_lookup_function.sql) and the
 subdomain -> tenant_id pattern already prescribed in the architecture note
 (§4.2) and the schema comment above the tenants RLS policy. Must never be
 widened to accept arbitrary filters or return additional columns — that
 would turn it into the general-purpose bypass both of those notes warn
 against.';

REVOKE ALL ON FUNCTION resolve_tenant_by_subdomain(text) FROM PUBLIC;

-- `crm_app` is provisioned out-of-band, not by this migration — same
-- reasoning as 0001_session_lookup_function.sql's identical block.
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'crm_app') THEN
        EXECUTE 'GRANT EXECUTE ON FUNCTION resolve_tenant_by_subdomain(text) TO crm_app';
    END IF;
END
$$;
