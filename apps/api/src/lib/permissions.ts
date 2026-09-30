// apps/api/src/lib/permissions.ts
//
// Shared permission-set lookups for the Phase 1 role-management routes
// (Beads issue Final-Verison-abf; docs/architecture/03ak-… §5 "Requirement
// carried to the role-management endpoints"). Used by routes/roles.ts to
// enforce the mandatory anti-escalation rule: a user may only grant a role
// whose permissions they themselves already hold, tenant-wide.
//
// Same join shape as middleware/require-permission.ts (user_roles -> roles
// -> role_permissions -> permissions), reused here rather than duplicated a
// third time, since this file and require-permission.ts now both need
// "what permission keys does this user hold".

import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { extractRows } from "./rows.js";

type Tx = Parameters<Parameters<typeof withTenantContext>[1]>[0];

/** The caller's own effective permission keys, via every TENANT-WIDE role they currently hold. */
export async function getEffectivePermissionKeys(tx: Tx, tenantId: string, userId: string): Promise<Set<string>> {
  const result = await tx.execute(sql`
    SELECT DISTINCT p.key
    FROM user_roles ur
    JOIN roles r ON r.tenant_id = ur.tenant_id AND r.id = ur.role_id
    JOIN role_permissions rp ON rp.tenant_id = r.tenant_id AND rp.role_id = r.id
    JOIN permissions p ON p.tenant_id = rp.tenant_id AND p.id = rp.permission_id
    WHERE ur.tenant_id = ${tenantId} AND ur.user_id = ${userId}
  `);
  return new Set(extractRows(result).map((row) => row.key as string));
}

/** The permission keys a given (tenant-wide) role carries. */
export async function getRolePermissionKeys(tx: Tx, tenantId: string, roleId: string): Promise<Set<string>> {
  const result = await tx.execute(sql`
    SELECT p.key
    FROM role_permissions rp
    JOIN permissions p ON p.tenant_id = rp.tenant_id AND p.id = rp.permission_id
    WHERE rp.tenant_id = ${tenantId} AND rp.role_id = ${roleId}
  `);
  return new Set(extractRows(result).map((row) => row.key as string));
}
