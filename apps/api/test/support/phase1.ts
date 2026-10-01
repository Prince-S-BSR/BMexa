// apps/api/test/support/phase1.ts
//
// Shared helpers for the Phase 1 schema suites (Beads issue Final-Verison-20t;
// design record docs/architecture/03ak-…). Like provision.ts, every helper
// goes through withTenantContext() — the same SET LOCAL choke point the
// application uses — so nothing here bypasses RLS or uses a privileged
// connection. There are deliberately no HTTP routes for these tables yet
// (CRUD endpoints are a follow-up implementer task), so these suites exercise
// the database contract directly, as the Phase 0 architecture note §12
// verification did.

import { sql, type SQL } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { extractRows } from "./rows.js";

type Tx = Parameters<Parameters<typeof withTenantContext>[1]>[0];

export interface PgErrorShape {
  code?: string;
  constraint_name?: string;
  message: string;
}

/**
 * Awaits a promise that MUST reject with a PostgreSQL error and returns the
 * error's code/constraint for assertion. A promise that resolves fails the
 * test loudly instead of passing silently.
 */
export async function pgError(promise: Promise<unknown>): Promise<PgErrorShape> {
  try {
    await promise;
  } catch (err) {
    const e = err as { code?: string; constraint_name?: string; message?: string; cause?: unknown };
    // drizzle may wrap the driver error; unwrap one level if so.
    const inner = (e.code ? e : (e.cause as typeof e | undefined)) ?? e;
    return { code: inner.code, constraint_name: inner.constraint_name, message: String(inner.message ?? e.message) };
  }
  throw new Error("expected the database to reject this statement, but it succeeded");
}

/** Runs one statement in its own tenant-scoped transaction and returns its rows. */
export async function q(
  tenantId: string,
  query: SQL,
): Promise<Array<Record<string, unknown>>> {
  return withTenantContext(tenantId, async (tx) => extractRows(await tx.execute(query)));
}

/** Runs `fn` inside a tenant-scoped transaction that is ALWAYS rolled back. */
export async function inRolledBackTx(tenantId: string, fn: (tx: Tx) => Promise<void>): Promise<void> {
  const ROLLBACK = Symbol("rollback");
  try {
    await withTenantContext(tenantId, async (tx) => {
      await fn(tx);
      throw ROLLBACK;
    });
  } catch (err) {
    if (err !== ROLLBACK) throw err;
  }
}

/**
 * Runs `query` inside a SAVEPOINT of `tx` and returns the PostgreSQL error it
 * must raise. The savepoint rollback keeps `tx` usable afterwards.
 */
export async function pgErrorInSavepoint(tx: Tx, query: SQL): Promise<PgErrorShape> {
  return pgError(tx.transaction(async (sp) => sp.execute(query)));
}

export async function rows(tx: Tx, query: SQL): Promise<Array<Record<string, unknown>>> {
  return extractRows(await tx.execute(query));
}

export async function idOf(tenantId: string, query: SQL): Promise<string> {
  const r = await q(tenantId, query);
  if (!r[0]) throw new Error("test setup: expected a row");
  return r[0].id as string;
}

export async function createEmployee(
  tenantId: string,
  userId: string,
  opts: { reportsTo?: string | null; departmentId?: string | null; designationId?: string | null } = {},
): Promise<string> {
  return idOf(
    tenantId,
    sql`
      INSERT INTO employees (tenant_id, user_id, reports_to_employee_id, department_id, designation_id)
      VALUES (${tenantId}, ${userId}, ${opts.reportsTo ?? null}, ${opts.departmentId ?? null}, ${opts.designationId ?? null})
      RETURNING id
    `,
  );
}

export async function createProject(tenantId: string, name: string): Promise<string> {
  return idOf(tenantId, sql`INSERT INTO projects (tenant_id, name) VALUES (${tenantId}, ${name}) RETURNING id`);
}

export async function grantProjectRole(
  tenantId: string,
  employeeId: string,
  roleId: string,
  projectId: string,
): Promise<string> {
  return idOf(
    tenantId,
    sql`
      INSERT INTO project_role_grants (tenant_id, employee_id, role_id, project_id)
      VALUES (${tenantId}, ${employeeId}, ${roleId}, ${projectId})
      RETURNING id
    `,
  );
}

export async function departmentIdByCode(tenantId: string, code: string): Promise<string> {
  return idOf(tenantId, sql`SELECT id FROM departments WHERE tenant_id = ${tenantId} AND code = ${code}`);
}
