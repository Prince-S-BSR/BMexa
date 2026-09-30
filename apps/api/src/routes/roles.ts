// apps/api/src/routes/roles.ts
//
// Roles & Permissions (Beads issue Final-Verison-abf; docs/architecture/
// 03ak-… §5, §11 item 2). Read-only list of a tenant's roles + their
// permissions (roles.read), and tenant-wide role assign/unassign to a user
// (roles.manage).
//
// MANDATORY ANTI-ESCALATION RULE (03ak §5: "Requirement carried to the
// role-management endpoints... a user may assign a role only if they hold
// every permission the role carries. Without this, an owner holding
// roles.manage could add audit.export to their own role and defeat ACG-9.").
// Assignment computes the caller's own effective permission set (the union
// across every tenant-wide role they currently hold) and the target role's
// permission set, and refuses with 403 if the target role carries any
// permission the caller does not already hold — whether the grant targets
// someone else or the caller themself. Unassignment carries no equivalent
// risk (it only removes access) and is not gated by this rule.
//
// This only governs project_role_grants insofar as project roles (site_head,
// project_head) are never assignable through THIS endpoint at all — the
// composite FK `user_roles_role_scope_fk` (schema.ts) only accepts
// grant_scope = 'tenant' roles, so attempting to assign a project-scoped role
// here fails at the database with a clean FK violation, surfaced as 400.

import type { FastifyInstance } from "fastify";
import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { sessionContextPreHandler } from "../middleware/session-context.js";
import { requirePermission } from "../middleware/require-permission.js";
import { extractRows } from "../lib/rows.js";
import { getActorLabel, recordAuditEvent } from "../lib/audit.js";
import { getEffectivePermissionKeys, getRolePermissionKeys } from "../lib/permissions.js";

interface RoleAssignBody {
  roleId: string;
}

export default async function roleRoutes(app: FastifyInstance): Promise<void> {
  app.addHook("preHandler", sessionContextPreHandler);

  app.get("/roles", { preHandler: requirePermission("roles.read") }, async (request) => {
    const { tenantId } = request.sessionContext!;

    const [roleRows, permissionRows] = await withTenantContext(tenantId, async (tx) => {
      const roles = await tx.execute(sql`
        SELECT id, tenant_id AS "tenantId", key, name, description,
               is_system AS "isSystem", requires_2fa AS "requiresTwoFactor", grant_scope AS "grantScope"
        FROM roles
        WHERE tenant_id = ${tenantId}
        ORDER BY name
      `);
      const permissions = await tx.execute(sql`
        SELECT rp.role_id AS "roleId", p.key
        FROM role_permissions rp
        JOIN permissions p ON p.tenant_id = rp.tenant_id AND p.id = rp.permission_id
        WHERE rp.tenant_id = ${tenantId}
      `);
      return [extractRows(roles), extractRows(permissions)] as const;
    });

    const permissionsByRole = new Map<string, string[]>();
    for (const row of permissionRows) {
      const roleId = row.roleId as string;
      const list = permissionsByRole.get(roleId) ?? [];
      list.push(row.key as string);
      permissionsByRole.set(roleId, list);
    }

    const roles = roleRows.map((role) => ({
      ...role,
      permissions: (permissionsByRole.get(role.id as string) ?? []).sort(),
    }));

    return { roles };
  });

  app.post<{ Params: { userId: string }; Body: RoleAssignBody }>(
    "/users/:userId/roles",
    { preHandler: requirePermission("roles.manage") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const { userId: targetUserId } = request.params;
      const body = request.body ?? ({} as RoleAssignBody);

      if (!body.roleId) {
        await reply.code(400).send({ error: "role_id_required" });
        return;
      }

      try {
        const outcome = await withTenantContext(tenantId, async (tx) => {
          const actorPermissions = await getEffectivePermissionKeys(tx, tenantId, actorUserId);
          const rolePermissions = await getRolePermissionKeys(tx, tenantId, body.roleId);

          // rolePermissions.size === 0 means either the role doesn't exist in
          // this tenant, or it carries no permissions at all (e.g.
          // site_head/project_head, which cannot be assigned here anyway —
          // see file header: the composite FK only accepts grant_scope =
          // 'tenant' roles). Either way there is nothing to escalate, so this
          // falls through to the INSERT, whose FK reports a bad role_id.
          const missing = [...rolePermissions].filter((key) => !actorPermissions.has(key));
          if (missing.length > 0) {
            return { outcome: "escalation_denied" as const, missing };
          }

          const result = await tx.execute(sql`
            INSERT INTO user_roles (tenant_id, user_id, role_id, granted_by)
            VALUES (${tenantId}, ${targetUserId}, ${body.roleId}, ${actorUserId})
            ON CONFLICT (user_id, role_id) DO NOTHING
            RETURNING user_id AS "userId", role_id AS "roleId", granted_by AS "grantedBy", granted_at AS "grantedAt"
          `);
          const [row] = extractRows(result);

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: "user_role.assigned",
            eventCategory: "rbac",
            subjectType: "user",
            subjectId: targetUserId,
            afterState: { roleId: body.roleId },
          });

          return { outcome: "assigned" as const, row: row ?? { userId: targetUserId, roleId: body.roleId } };
        });

        if (outcome.outcome === "escalation_denied") {
          await reply.code(403).send({
            error: "escalation_denied",
            detail: "cannot grant a role that carries permissions you do not hold yourself",
            missingPermissions: outcome.missing,
          });
          return;
        }
        await reply.code(201).send({ userRole: outcome.row });
      } catch (err) {
        request.log.error(err, "failed to assign role");
        await reply.code(400).send({ error: "role_assign_failed", detail: (err as Error).message });
      }
    },
  );

  app.delete<{ Params: { userId: string; roleId: string } }>(
    "/users/:userId/roles/:roleId",
    { preHandler: requirePermission("roles.manage") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const { userId: targetUserId, roleId } = request.params;

      try {
        const removed = await withTenantContext(tenantId, async (tx) => {
          const result = await tx.execute(sql`
            DELETE FROM user_roles
            WHERE tenant_id = ${tenantId} AND user_id = ${targetUserId} AND role_id = ${roleId}
            RETURNING user_id AS "userId", role_id AS "roleId"
          `);
          const [row] = extractRows(result);
          if (!row) return null;

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: "user_role.unassigned",
            eventCategory: "rbac",
            subjectType: "user",
            subjectId: targetUserId,
            beforeState: { roleId },
          });

          return row;
        });

        if (!removed) {
          await reply.code(404).send({ error: "user_role_not_found" });
          return;
        }
        await reply.send({ userRole: removed });
      } catch (err) {
        request.log.error(err, "failed to unassign role");
        await reply.code(400).send({ error: "role_unassign_failed", detail: (err as Error).message });
      }
    },
  );
}
