// apps/api/src/lib/org-master-routes.ts
//
// Shared list/create routes for the two Phase 1 R4 masters, `departments`
// and `designations` (Beads issue Final-Verison-abf; docs/architecture/03ak-…
// §4.2). Both tables copy the Phase 0 master shape field-for-field
// (code/label/description/sort_order/is_active/is_system/custom_attributes),
// so one implementation serves both rather than two near-identical files
// that could quietly drift (e.g. one route auditing a create and the other
// forgetting to).
//
// R4: tenant vocabulary is rows, not columns. Seeded rows (is_system = true,
// e.g. Sales/CRM/Accounts/Marketing departments) come only from
// provision_tenant_master_data() — this file never creates one. Every row
// this file inserts is is_system = false: tenant-added custom vocabulary,
// distinguished from the seeded rows by that column in the response, exactly
// as 03ak/the existing fixtures already model it. There is no PUT/PATCH here:
// the issue brief calls for list/create only for these two masters.

import type { FastifyInstance } from "fastify";
import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { requirePermission } from "../middleware/require-permission.js";
import { extractRows } from "./rows.js";
import { getActorLabel, recordAuditEvent } from "./audit.js";

interface MasterCreateBody {
  code: string;
  label: string;
  description?: string | null;
  sortOrder?: number;
  customAttributes?: Record<string, unknown>;
}

export interface OrgMasterRouteOptions {
  /** Real table name — interpolated via sql.raw, never from request input. */
  table: "departments" | "designations";
  routePath: string;
  /** Singular resource name used for JSON keys, audit event types and error codes (e.g. "department"). */
  resourceName: string;
}

export function registerOrgMasterRoutes(app: FastifyInstance, opts: OrgMasterRouteOptions): void {
  const table = sql.raw(opts.table);
  const listKey = `${opts.resourceName}s`;

  app.get(opts.routePath, { preHandler: requirePermission("settings.read") }, async (request) => {
    const { tenantId } = request.sessionContext!;
    const result = await withTenantContext(tenantId, (tx) =>
      tx.execute(sql`
        SELECT
          id, tenant_id AS "tenantId", code, label, description,
          sort_order AS "sortOrder", is_active AS "isActive", is_system AS "isSystem",
          custom_attributes AS "customAttributes", created_at AS "createdAt", updated_at AS "updatedAt"
        FROM ${table}
        WHERE tenant_id = ${tenantId}
        ORDER BY sort_order, label
      `),
    );
    return { [listKey]: extractRows(result) };
  });

  app.post<{ Body: MasterCreateBody }>(
    opts.routePath,
    { preHandler: requirePermission("settings.manage") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const body = request.body ?? ({} as MasterCreateBody);

      if (!body.code || !body.label) {
        await reply.code(400).send({ error: "code_and_label_required" });
        return;
      }

      try {
        const row = await withTenantContext(tenantId, async (tx) => {
          const result = await tx.execute(sql`
            INSERT INTO ${table} (tenant_id, code, label, description, sort_order, is_system, custom_attributes)
            VALUES (
              ${tenantId}, ${body.code}, ${body.label}, ${body.description ?? null}, ${body.sortOrder ?? 0},
              false, ${JSON.stringify(body.customAttributes ?? {})}::jsonb
            )
            RETURNING
              id, tenant_id AS "tenantId", code, label, description,
              sort_order AS "sortOrder", is_active AS "isActive", is_system AS "isSystem",
              custom_attributes AS "customAttributes", created_at AS "createdAt", updated_at AS "updatedAt"
          `);
          const [inserted] = extractRows(result);

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: `${opts.resourceName}.created`,
            eventCategory: "data",
            subjectType: opts.resourceName,
            subjectId: inserted.id as string,
            afterState: inserted,
          });

          return inserted;
        });
        await reply.code(201).send({ [opts.resourceName]: row });
      } catch (err) {
        request.log.error(err, `failed to create ${opts.resourceName}`);
        await reply.code(400).send({ error: `${opts.resourceName}_create_failed`, detail: (err as Error).message });
      }
    },
  );
}
