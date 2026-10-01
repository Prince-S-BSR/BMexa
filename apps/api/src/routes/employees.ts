// apps/api/src/routes/employees.ts
//
// Employees CRUD (Beads issue Final-Verison-abf; docs/architecture/03ak-…
// §4.3, §11 item 1). Employees are the Spec §06 canonical entity, 1:1 with
// `users` — permission mapping per the issue brief:
//   list/get/create -> users.read / users.invite
//   update (dept/designation/manager assignment) -> users.update
//   deactivate (soft — no hard delete) -> users.deactivate
//
// Manager-chain cycles (reports_to_employee_id) are rejected entirely by the
// database (0004 §3.2 `employees_reporting_tree_acyclic` trigger, backed by a
// per-tenant advisory lock — 03ak §4.3, acceptance items P1-O-2/P1-O-3). This
// file deliberately does NOT re-implement cycle detection: it lets the
// INSERT/UPDATE run and translates the trigger's `check_violation` into a
// clean 400, the same belt-and-suspenders posture already used for tenant_id
// (DB is the source of truth; the API's job is a clean response shape, not a
// second implementation of the same rule that could drift from the first).
//
// Every mutating route here also writes an `audit_events` row, atomically
// (see lib/audit.ts) — issue brief requirement #7.

import type { FastifyInstance } from "fastify";
import { sql, type SQL } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { sessionContextPreHandler } from "../middleware/session-context.js";
import { requirePermission } from "../middleware/require-permission.js";
import { extractRows } from "../lib/rows.js";
import { getActorLabel, recordAuditEvent } from "../lib/audit.js";

const EMPLOYEE_COLUMNS = sql`
  e.id, e.tenant_id AS "tenantId", e.user_id AS "userId",
  e.department_id AS "departmentId", e.designation_id AS "designationId",
  e.reports_to_employee_id AS "reportsToEmployeeId",
  e.custom_attributes AS "customAttributes",
  e.created_at AS "createdAt", e.updated_at AS "updatedAt"
`;

interface EmployeeCreateBody {
  userId: string;
  departmentId?: string | null;
  designationId?: string | null;
  reportsToEmployeeId?: string | null;
  customAttributes?: Record<string, unknown>;
}

interface EmployeeUpdateBody {
  departmentId?: string | null;
  designationId?: string | null;
  reportsToEmployeeId?: string | null;
  customAttributes?: Record<string, unknown>;
}

export default async function employeeRoutes(app: FastifyInstance): Promise<void> {
  app.addHook("preHandler", sessionContextPreHandler);

  app.get("/employees", { preHandler: requirePermission("users.read") }, async (request) => {
    const { tenantId } = request.sessionContext!;
    const result = await withTenantContext(tenantId, (tx) =>
      tx.execute(sql`
        SELECT ${EMPLOYEE_COLUMNS}, u.email AS "userEmail", u.status AS "userStatus"
        FROM employees e
        JOIN users u ON u.tenant_id = e.tenant_id AND u.id = e.user_id
        WHERE e.tenant_id = ${tenantId}
        ORDER BY e.created_at
      `),
    );
    return { employees: extractRows(result) };
  });

  app.get<{ Params: { id: string } }>(
    "/employees/:id",
    { preHandler: requirePermission("users.read") },
    async (request, reply) => {
      const { tenantId } = request.sessionContext!;
      const result = await withTenantContext(tenantId, (tx) =>
        tx.execute(sql`
          SELECT ${EMPLOYEE_COLUMNS}, u.email AS "userEmail", u.status AS "userStatus"
          FROM employees e
          JOIN users u ON u.tenant_id = e.tenant_id AND u.id = e.user_id
          WHERE e.tenant_id = ${tenantId} AND e.id = ${request.params.id}
        `),
      );
      const [row] = extractRows(result);
      if (!row) {
        await reply.code(404).send({ error: "employee_not_found" });
        return;
      }
      await reply.send({ employee: row });
    },
  );

  app.post<{ Body: EmployeeCreateBody }>(
    "/employees",
    { preHandler: requirePermission("users.invite") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const body = request.body ?? ({} as EmployeeCreateBody);

      if (!body.userId) {
        await reply.code(400).send({ error: "user_id_required" });
        return;
      }

      try {
        const employee = await withTenantContext(tenantId, async (tx) => {
          const result = await tx.execute(sql`
            INSERT INTO employees (tenant_id, user_id, department_id, designation_id, reports_to_employee_id, custom_attributes)
            VALUES (
              ${tenantId}, ${body.userId},
              ${body.departmentId ?? null}, ${body.designationId ?? null}, ${body.reportsToEmployeeId ?? null},
              ${JSON.stringify(body.customAttributes ?? {})}::jsonb
            )
            RETURNING
              id, tenant_id AS "tenantId", user_id AS "userId",
              department_id AS "departmentId", designation_id AS "designationId",
              reports_to_employee_id AS "reportsToEmployeeId", custom_attributes AS "customAttributes",
              created_at AS "createdAt", updated_at AS "updatedAt"
          `);
          const [row] = extractRows(result);

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: "employee.created",
            eventCategory: "data",
            subjectType: "employee",
            subjectId: row.id as string,
            afterState: row,
          });

          return row;
        });
        await reply.code(201).send({ employee });
      } catch (err) {
        request.log.error(err, "failed to create employee");
        await reply.code(400).send({ error: "employee_create_failed", detail: (err as Error).message });
      }
    },
  );

  app.patch<{ Params: { id: string }; Body: EmployeeUpdateBody }>(
    "/employees/:id",
    { preHandler: requirePermission("users.update") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const { id } = request.params;
      const body = request.body ?? ({} as EmployeeUpdateBody);

      const assignments: SQL[] = [];
      if (body.departmentId !== undefined) assignments.push(sql`department_id = ${body.departmentId}`);
      if (body.designationId !== undefined) assignments.push(sql`designation_id = ${body.designationId}`);
      if (body.reportsToEmployeeId !== undefined) {
        assignments.push(sql`reports_to_employee_id = ${body.reportsToEmployeeId}`);
      }
      if (body.customAttributes !== undefined) {
        assignments.push(sql`custom_attributes = ${JSON.stringify(body.customAttributes)}::jsonb`);
      }

      if (assignments.length === 0) {
        await reply.code(400).send({ error: "no_fields_to_update" });
        return;
      }

      try {
        const employee = await withTenantContext(tenantId, async (tx) => {
          const beforeResult = await tx.execute(sql`
            SELECT ${EMPLOYEE_COLUMNS} FROM employees e WHERE e.tenant_id = ${tenantId} AND e.id = ${id}
          `);
          const [before] = extractRows(beforeResult);
          if (!before) return null;

          const result = await tx.execute(sql`
            UPDATE employees
            SET ${sql.join(assignments, sql`, `)}
            WHERE tenant_id = ${tenantId} AND id = ${id}
            RETURNING
              id, tenant_id AS "tenantId", user_id AS "userId",
              department_id AS "departmentId", designation_id AS "designationId",
              reports_to_employee_id AS "reportsToEmployeeId", custom_attributes AS "customAttributes",
              created_at AS "createdAt", updated_at AS "updatedAt"
          `);
          const [after] = extractRows(result);

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: "employee.updated",
            eventCategory: "data",
            subjectType: "employee",
            subjectId: id,
            beforeState: before,
            afterState: after,
          });

          return after;
        });

        if (!employee) {
          await reply.code(404).send({ error: "employee_not_found" });
          return;
        }
        await reply.send({ employee });
      } catch (err) {
        request.log.error(err, "failed to update employee");
        await reply.code(400).send({ error: "employee_update_failed", detail: (err as Error).message });
      }
    },
  );

  // Soft "delete": no DELETE route exists for employees at all. Deactivation
  // ends access via users.status while the employee's organizational record
  // persists (Spec §57; 03ak §4.3 "employees_department_fk … RESTRICT").
  app.post<{ Params: { id: string } }>(
    "/employees/:id/deactivate",
    { preHandler: requirePermission("users.deactivate") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const { id } = request.params;

      try {
        const employee = await withTenantContext(tenantId, async (tx) => {
          const beforeResult = await tx.execute(sql`
            SELECT e.id, u.id AS "userId", u.status
            FROM employees e
            JOIN users u ON u.tenant_id = e.tenant_id AND u.id = e.user_id
            WHERE e.tenant_id = ${tenantId} AND e.id = ${id}
          `);
          const [before] = extractRows(beforeResult);
          if (!before) return null;

          await tx.execute(sql`
            UPDATE users SET status = 'deactivated' WHERE tenant_id = ${tenantId} AND id = ${before.userId}
          `);

          const afterResult = await tx.execute(sql`
            SELECT ${EMPLOYEE_COLUMNS}, u.status AS "userStatus"
            FROM employees e
            JOIN users u ON u.tenant_id = e.tenant_id AND u.id = e.user_id
            WHERE e.tenant_id = ${tenantId} AND e.id = ${id}
          `);
          const [after] = extractRows(afterResult);

          const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
          await recordAuditEvent(tx, {
            tenantId,
            actorUserId,
            actorLabel,
            eventType: "employee.deactivated",
            eventCategory: "data",
            subjectType: "employee",
            subjectId: id,
            beforeState: { userStatus: before.status },
            afterState: { userStatus: "deactivated" },
          });

          return after;
        });

        if (!employee) {
          await reply.code(404).send({ error: "employee_not_found" });
          return;
        }
        await reply.send({ employee });
      } catch (err) {
        request.log.error(err, "failed to deactivate employee");
        await reply.code(400).send({ error: "employee_deactivate_failed", detail: (err as Error).message });
      }
    },
  );
}
