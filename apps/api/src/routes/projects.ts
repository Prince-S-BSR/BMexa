// apps/api/src/routes/projects.ts
//
// Projects — the deliberate minimal stub (Beads issue Final-Verison-abf;
// docs/architecture/03ak-… §4.6). list/get/create/update-name-only, exactly
// as the issue brief specifies: this table exists only as the FK target for
// project_role_grants, and no project lifecycle (status, activation, …) is
// locked yet (AI-Q-2 open) — so there is deliberately no status field, no
// "complete project" action, and no route implying one. Phase 2 adds columns
// to this table; it does not get a workflow bolted onto it here.

import type { FastifyInstance } from "fastify";
import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { sessionContextPreHandler } from "../middleware/session-context.js";
import { requirePermission } from "../middleware/require-permission.js";
import { extractRows } from "../lib/rows.js";
import { getActorLabel, recordAuditEvent } from "../lib/audit.js";

const PROJECT_COLUMNS = sql`
  id, tenant_id AS "tenantId", name, custom_attributes AS "customAttributes",
  created_at AS "createdAt", updated_at AS "updatedAt"
`;

interface ProjectCreateBody {
  name: string;
  customAttributes?: Record<string, unknown>;
}

interface ProjectUpdateBody {
  name: string;
}

export default async function projectRoutes(app: FastifyInstance): Promise<void> {
  app.addHook("preHandler", sessionContextPreHandler);

  app.get("/projects", { preHandler: requirePermission("settings.read") }, async (request) => {
    const { tenantId } = request.sessionContext!;
    const result = await withTenantContext(tenantId, (tx) =>
      tx.execute(sql`SELECT ${PROJECT_COLUMNS} FROM projects WHERE tenant_id = ${tenantId} ORDER BY created_at`),
    );
    return { projects: extractRows(result) };
  });

  app.get<{ Params: { id: string } }>(
    "/projects/:id",
    { preHandler: requirePermission("settings.read") },
    async (request, reply) => {
      const { tenantId } = request.sessionContext!;
      const result = await withTenantContext(tenantId, (tx) =>
        tx.execute(sql`SELECT ${PROJECT_COLUMNS} FROM projects WHERE tenant_id = ${tenantId} AND id = ${request.params.id}`),
      );
      const [row] = extractRows(result);
      if (!row) {
        await reply.code(404).send({ error: "project_not_found" });
        return;
      }
      await reply.send({ project: row });
    },
  );

  app.post<{ Body: ProjectCreateBody }>(
    "/projects",
    { preHandler: requirePermission("settings.manage") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const body = request.body ?? ({} as ProjectCreateBody);

      if (!body.name) {
        await reply.code(400).send({ error: "name_required" });
        return;
      }

      try {
        const project = await withTenantContext(tenantId, async (tx) => {
          const result = await tx.execute(sql`
            INSERT INTO projects (tenant_id, name, custom_attributes)
            VALUES (${tenantId}, ${body.name}, ${JSON.stringify(body.customAttributes ?? {})}::jsonb)
            RETURNING ${PROJECT_COLUMNS}
          `);
          const [row] = extractRows(result);

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: "project.created",
            eventCategory: "data",
            subjectType: "project",
            subjectId: row.id as string,
            afterState: row,
          });

          return row;
        });
        await reply.code(201).send({ project });
      } catch (err) {
        request.log.error(err, "failed to create project");
        await reply.code(400).send({ error: "project_create_failed", detail: (err as Error).message });
      }
    },
  );

  app.patch<{ Params: { id: string }; Body: ProjectUpdateBody }>(
    "/projects/:id",
    { preHandler: requirePermission("settings.manage") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const { id } = request.params;
      const body = request.body ?? ({} as ProjectUpdateBody);

      if (!body.name) {
        await reply.code(400).send({ error: "name_required" });
        return;
      }

      try {
        const project = await withTenantContext(tenantId, async (tx) => {
          const beforeResult = await tx.execute(
            sql`SELECT ${PROJECT_COLUMNS} FROM projects WHERE tenant_id = ${tenantId} AND id = ${id}`,
          );
          const [before] = extractRows(beforeResult);
          if (!before) return null;

          const result = await tx.execute(sql`
            UPDATE projects SET name = ${body.name}
            WHERE tenant_id = ${tenantId} AND id = ${id}
            RETURNING ${PROJECT_COLUMNS}
          `);
          const [after] = extractRows(result);

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: "project.updated",
            eventCategory: "data",
            subjectType: "project",
            subjectId: id,
            beforeState: { name: before.name },
            afterState: { name: after.name },
          });

          return after;
        });

        if (!project) {
          await reply.code(404).send({ error: "project_not_found" });
          return;
        }
        await reply.send({ project });
      } catch (err) {
        request.log.error(err, "failed to update project");
        await reply.code(400).send({ error: "project_update_failed", detail: (err as Error).message });
      }
    },
  );
}
