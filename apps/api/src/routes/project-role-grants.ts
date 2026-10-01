// apps/api/src/routes/project-role-grants.ts
//
// Project Role Grants — per-project Site Head / Project Head assignment
// (Beads issue Final-Verison-abf; docs/architecture/03ak-… §4.5). list (by
// project or by employee), grant (create), revoke (soft). There is no PATCH
// and no DELETE: grants are append-only (Spec §08 "Role changes must not
// destroy historical ownership information"; 0004's
// `project_role_grants_append_only` trigger enforces this at the DB layer
// for every role, including crm_app, which additionally has no DELETE grant
// on this table at all — see 0004 §6). A re-grant is always a new row.
//
// Permission: `project_roles.manage`, the one new permission this task adds
// (packages/db/drizzle/0005_phase1_project_roles_manage_permission.sql; see
// the final report for the reasoning). It gates every route in this file,
// including the list routes — NI-20 (03ai §8.3) frames who may grant these
// roles as "A Builder-Side Admin permission... never implied by CRM
// configuration delegation", and this task's judgment is that visibility
// into who currently holds Site Head/Project Head on a project belongs to
// the same permission rather than being open to any authenticated user; this
// is a judgment call, flagged in the final report, not a locked rule.
//
// No cardinality limit is enforced here (AI-Q-2 is open; 03ak §4.5): multiple
// simultaneous grants of the same role, and of different roles, to the same
// employee and to the same project are all legal. The only uniqueness is the
// DB's own "at most one ACTIVE grant of (employee, role, project)"
// (`project_role_grants_active_key`), which this file does not duplicate —
// a violation surfaces as an ordinary 400 from the INSERT.
//
// A grant's `role_id` must reference a grant_scope = 'project' role — the
// composite FK `project_role_grants_role_scope_fk` (schema.ts) enforces this
// already; there is deliberately no duplicate application-level check.

import type { FastifyInstance } from "fastify";
import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { sessionContextPreHandler } from "../middleware/session-context.js";
import { requirePermission } from "../middleware/require-permission.js";
import { extractRows } from "../lib/rows.js";
import { getActorLabel, recordAuditEvent } from "../lib/audit.js";

const GRANT_COLUMNS = sql`
  id, tenant_id AS "tenantId", employee_id AS "employeeId", role_id AS "roleId", project_id AS "projectId",
  granted_by_user_id AS "grantedByUserId", granted_at AS "grantedAt",
  revoked_at AS "revokedAt", revoked_by_user_id AS "revokedByUserId"
`;

interface GrantCreateBody {
  employeeId: string;
  roleId: string;
  projectId: string;
}

interface GrantListQuery {
  projectId?: string;
  employeeId?: string;
  includeRevoked?: string;
}

export default async function projectRoleGrantRoutes(app: FastifyInstance): Promise<void> {
  app.addHook("preHandler", sessionContextPreHandler);

  app.get<{ Querystring: GrantListQuery }>(
    "/project-role-grants",
    { preHandler: requirePermission("project_roles.manage") },
    async (request) => {
      const { tenantId } = request.sessionContext!;
      const { projectId, employeeId, includeRevoked } = request.query ?? {};

      const conditions = [sql`tenant_id = ${tenantId}`];
      if (projectId) conditions.push(sql`project_id = ${projectId}`);
      if (employeeId) conditions.push(sql`employee_id = ${employeeId}`);
      if (includeRevoked !== "true") conditions.push(sql`revoked_at IS NULL`);

      const result = await withTenantContext(tenantId, (tx) =>
        tx.execute(sql`
          SELECT ${GRANT_COLUMNS} FROM project_role_grants
          WHERE ${sql.join(conditions, sql` AND `)}
          ORDER BY granted_at DESC
        `),
      );
      return { projectRoleGrants: extractRows(result) };
    },
  );

  app.post<{ Body: GrantCreateBody }>(
    "/project-role-grants",
    { preHandler: requirePermission("project_roles.manage") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const body = request.body ?? ({} as GrantCreateBody);

      if (!body.employeeId || !body.roleId || !body.projectId) {
        await reply.code(400).send({ error: "employee_id_role_id_and_project_id_required" });
        return;
      }

      try {
        const grant = await withTenantContext(tenantId, async (tx) => {
          const result = await tx.execute(sql`
            INSERT INTO project_role_grants (tenant_id, employee_id, role_id, project_id, granted_by_user_id)
            VALUES (${tenantId}, ${body.employeeId}, ${body.roleId}, ${body.projectId}, ${actorUserId})
            RETURNING ${GRANT_COLUMNS}
          `);
          const [row] = extractRows(result);

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: "project_role_grant.granted",
            eventCategory: "rbac",
            subjectType: "project_role_grant",
            subjectId: row.id as string,
            afterState: row,
          });

          return row;
        });
        await reply.code(201).send({ projectRoleGrant: grant });
      } catch (err) {
        request.log.error(err, "failed to create project role grant");
        await reply.code(400).send({ error: "project_role_grant_create_failed", detail: (err as Error).message });
      }
    },
  );

  app.post<{ Params: { id: string } }>(
    "/project-role-grants/:id/revoke",
    { preHandler: requirePermission("project_roles.manage") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const { id } = request.params;

      try {
        const grant = await withTenantContext(tenantId, async (tx) => {
          const beforeResult = await tx.execute(
            sql`SELECT ${GRANT_COLUMNS} FROM project_role_grants WHERE tenant_id = ${tenantId} AND id = ${id}`,
          );
          const [before] = extractRows(beforeResult);
          if (!before) return { outcome: "not_found" as const };
          if (before.revokedAt) return { outcome: "already_revoked" as const };

          const result = await tx.execute(sql`
            UPDATE project_role_grants
            SET revoked_at = now(), revoked_by_user_id = ${actorUserId}
            WHERE tenant_id = ${tenantId} AND id = ${id}
            RETURNING ${GRANT_COLUMNS}
          `);
          const [after] = extractRows(result);

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: "project_role_grant.revoked",
            eventCategory: "rbac",
            subjectType: "project_role_grant",
            subjectId: id,
            beforeState: { revokedAt: null },
            afterState: { revokedAt: after.revokedAt, revokedByUserId: after.revokedByUserId },
          });

          return { outcome: "revoked" as const, row: after };
        });

        if (grant.outcome === "not_found") {
          await reply.code(404).send({ error: "project_role_grant_not_found" });
          return;
        }
        if (grant.outcome === "already_revoked") {
          await reply.code(409).send({ error: "project_role_grant_already_revoked" });
          return;
        }
        await reply.send({ projectRoleGrant: grant.row });
      } catch (err) {
        request.log.error(err, "failed to revoke project role grant");
        await reply.code(400).send({ error: "project_role_grant_revoke_failed", detail: (err as Error).message });
      }
    },
  );
}
