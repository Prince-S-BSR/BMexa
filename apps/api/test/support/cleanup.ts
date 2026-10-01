// apps/api/test/support/cleanup.ts
//
// The new Phase 1 product-route HTTP suites (Beads issue Final-Verison-abf)
// exercise real mutations, and per the issue brief EVERY mutating route
// emits a real, committed `audit_events` row (ACG-1/ACG-2). Once a tenant
// has audit history, ACG-8's `audit_events_tenant_id_fkey` (ON DELETE
// RESTRICT) means the ordinary tenant-teardown cascade — provision.ts's
// `deleteTenant()`, used by every Phase 0/1 DB-level suite — can no longer
// drop it: "a tenant with audit history cannot be deleted" is exactly
// P1-ACG-8, already proven at the DB layer by
// phase1-audit-completeness-gate.test.ts, which works around it there by
// wrapping every audit-row INSERT in a transaction that is always rolled
// back. An HTTP-level test cannot do that — the mutation and the audit event
// it emits are one real, committed transaction by construction — so `afterAll`
// in these suites calls this helper instead of `deleteTenant()` directly: it
// attempts the same teardown and, if (and only if) the tenant has audit
// history, leaves the tenant and its rows in place rather than failing the
// suite. There is deliberately no "force-delete an audited tenant" path in
// this codebase (03ak §6.1: that needs a Legal/Compliance-validated closure
// procedure that does not exist yet) — so this is not a workaround around a
// bug, it is the same product behavior the DB-level suite already exercises,
// applied to teardown of a suite that cannot avoid producing that history.

import { deleteTenant } from "./provision.js";

export async function deleteTenantAllowingAuditHistory(tenantId: string): Promise<void> {
  try {
    await deleteTenant(tenantId);
  } catch (err) {
    const pgCode = (err as { code?: string; cause?: { code?: string } })?.code ?? (err as { cause?: { code?: string } })?.cause?.code;
    if (pgCode !== "23503") throw err; // anything other than the expected FK violation is a real failure
  }
}
