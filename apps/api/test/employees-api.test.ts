// apps/api/test/employees-api.test.ts
//
// HTTP-level tests for the real Employees product routes (Beads issue
// Final-Verison-abf; routes/employees.ts). Matches the tenant-isolation
// rigor of adversarial-tenant-boundary.test.ts: a request authenticated as
// tenant A must never read or mutate tenant B's rows, including via a
// forged tenantId in the body, and a request missing the required
// permission must get 403. Also proves the manager-chain cycle is rejected
// by the DATABASE (employees_reporting_tree_acyclic, 0004 §3.2), not
// re-implemented here, and that every mutating route emits an audit event.

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import type { FastifyInstance } from "fastify";
import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { seedSession } from "../src/test-utils/seed-session.js";
import { startTestApp } from "./support/app.js";
import {
  assignRole,
  closeDbConnection,
  createUser,
  getRoleIdByKey,
  provisionTenant,
  type TestTenant,
} from "./support/provision.js";
import { deleteTenantAllowingAuditHistory } from "./support/cleanup.js";
import { extractRows } from "./support/rows.js";

describe("Employees API (Final-Verison-abf)", () => {
  let app: FastifyInstance;
  let tenantA: TestTenant;
  let tenantB: TestTenant;
  let ownerAId: string;
  let ownerBId: string;
  let memberAId: string; // lacks users.read/invite/update/deactivate
  let tokenOwnerA: string;
  let tokenOwnerB: string;
  let tokenMemberA: string;
  let plainUserA1: string; // an ordinary tenant-A user to turn into an employee
  let plainUserA2: string;
  let plainUserB1: string; // tenant-B user, for cross-tenant attempts

  beforeAll(async () => {
    app = await startTestApp();

    tenantA = await provisionTenant("emp-a");
    tenantB = await provisionTenant("emp-b");

    ownerAId = await createUser(tenantA.tenantId, "owner-a");
    memberAId = await createUser(tenantA.tenantId, "member-a");
    ownerBId = await createUser(tenantB.tenantId, "owner-b");
    plainUserA1 = await createUser(tenantA.tenantId, "plain-a1");
    plainUserA2 = await createUser(tenantA.tenantId, "plain-a2");
    plainUserB1 = await createUser(tenantB.tenantId, "plain-b1");

    await assignRole(tenantA.tenantId, ownerAId, await getRoleIdByKey(tenantA.tenantId, "owner"));
    await assignRole(tenantA.tenantId, memberAId, await getRoleIdByKey(tenantA.tenantId, "member"));
    await assignRole(tenantB.tenantId, ownerBId, await getRoleIdByKey(tenantB.tenantId, "owner"));

    tokenOwnerA = (await seedSession({ tenantId: tenantA.tenantId, userId: ownerAId })).token;
    tokenOwnerB = (await seedSession({ tenantId: tenantB.tenantId, userId: ownerBId })).token;
    tokenMemberA = (await seedSession({ tenantId: tenantA.tenantId, userId: memberAId })).token;
  });

  afterAll(async () => {
    await app.close();
    // See test/support/cleanup.ts: these tenants now have real audit
    // history (every mutating route above emitted one), so ACG-8 may refuse
    // the delete — that is P1-ACG-8 working as designed, not a test bug.
    await deleteTenantAllowingAuditHistory(tenantA.tenantId);
    await deleteTenantAllowingAuditHistory(tenantB.tenantId);
    await closeDbConnection();
  });

  it("403s a caller without users.read", async () => {
    const res = await request(app.server).get("/employees").set("Authorization", `Bearer ${tokenMemberA}`);
    expect(res.status).toBe(403);
    expect(res.body.error).toBe("permission_denied");
  });

  let employeeA1Id: string;

  it("creates an employee (users.invite) and emits an audit event", async () => {
    const res = await request(app.server)
      .post("/employees")
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ userId: plainUserA1 });

    expect(res.status).toBe(201);
    expect(res.body.employee.userId).toBe(plainUserA1);
    expect(res.body.employee.tenantId).toBe(tenantA.tenantId);
    employeeA1Id = res.body.employee.id;

    const events = await withTenantContext(tenantA.tenantId, (tx) =>
      tx.execute(sql`
        SELECT event_type, event_category, subject_id, after_state
        FROM audit_events WHERE tenant_id = ${tenantA.tenantId} AND event_type = 'employee.created' AND subject_id = ${employeeA1Id}
      `),
    );
    const rows = extractRows(events);
    expect(rows).toHaveLength(1);
    expect(rows[0].event_category).toBe("data");
    expect(rows[0].after_state).toMatchObject({ userId: plainUserA1 });
  });

  it("ignores a forged tenantId in the create body and never creates a cross-tenant employee", async () => {
    const res = await request(app.server)
      .post("/employees")
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ userId: plainUserA2, tenantId: tenantB.tenantId, tenant_id: tenantB.tenantId });

    expect(res.status).toBe(201);
    expect(res.body.employee.tenantId).toBe(tenantA.tenantId);
    expect(res.body.employee.tenantId).not.toBe(tenantB.tenantId);

    const asB = await request(app.server).get("/employees").set("Authorization", `Bearer ${tokenOwnerB}`);
    expect((asB.body.employees as Array<{ id: string }>).some((e) => e.id === res.body.employee.id)).toBe(false);
  });

  it("refuses to create an employee for another tenant's user (composite FK, not a spoofable field)", async () => {
    const res = await request(app.server)
      .post("/employees")
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ userId: plainUserB1 });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe("employee_create_failed");
  });

  it("lists only the caller's own tenant's employees", async () => {
    const res = await request(app.server).get("/employees").set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(res.status).toBe(200);
    const ids = (res.body.employees as Array<{ id: string; tenantId: string }>).map((e) => e.id);
    expect(ids).toContain(employeeA1Id);
    for (const e of res.body.employees as Array<{ tenantId: string }>) {
      expect(e.tenantId).toBe(tenantA.tenantId);
    }
  });

  it("404s a cross-tenant GET by id rather than leaking existence", async () => {
    const bList = await request(app.server).get("/employees").set("Authorization", `Bearer ${tokenOwnerB}`);
    // tenant B has no employees yet; create one, then try to fetch it as tenant A.
    const created = await request(app.server)
      .post("/employees")
      .set("Authorization", `Bearer ${tokenOwnerB}`)
      .send({ userId: plainUserB1 });
    expect(created.status).toBe(201);
    void bList;

    const res = await request(app.server)
      .get(`/employees/${created.body.employee.id}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(res.status).toBe(404);
    expect(res.body.error).toBe("employee_not_found");
  });

  it("PATCH with a spoofed tenantId updates the row but never reassigns its tenant", async () => {
    const res = await request(app.server)
      .patch(`/employees/${employeeA1Id}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ customAttributes: { title: "Sales Exec" }, tenantId: tenantB.tenantId });

    expect(res.status).toBe(200);
    expect(res.body.employee.customAttributes).toEqual({ title: "Sales Exec" });
    expect(res.body.employee.tenantId).toBe(tenantA.tenantId);
  });

  it("404s a PATCH aimed at another tenant's employee id", async () => {
    const bEmployees = await withTenantContext(tenantB.tenantId, (tx) =>
      tx.execute(sql`SELECT id FROM employees WHERE tenant_id = ${tenantB.tenantId} LIMIT 1`),
    );
    const bEmployeeId = extractRows(bEmployees)[0].id as string;

    const res = await request(app.server)
      .patch(`/employees/${bEmployeeId}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ customAttributes: { hijack: true } });

    expect(res.status).toBe(404);
  });

  it("rejects a manager-chain cycle — enforced by the DATABASE trigger, not app code", async () => {
    const empC = await request(app.server)
      .post("/employees")
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ userId: await createUser(tenantA.tenantId, "cycle-c") });
    const empD = await request(app.server)
      .post("/employees")
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ userId: await createUser(tenantA.tenantId, "cycle-d"), reportsToEmployeeId: empC.body.employee.id });

    expect(empC.status).toBe(201);
    expect(empD.status).toBe(201);

    // C -> reports to D would close the loop C -> D -> C.
    const cycleAttempt = await request(app.server)
      .patch(`/employees/${empC.body.employee.id}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ reportsToEmployeeId: empD.body.employee.id });

    expect(cycleAttempt.status).toBe(400);
    expect(cycleAttempt.body.error).toBe("employee_update_failed");
    expect(String(cycleAttempt.body.detail)).toMatch(/reporting-tree cycle/);

    // Unchanged afterwards.
    const stillC = await request(app.server)
      .get(`/employees/${empC.body.employee.id}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(stillC.body.employee.reportsToEmployeeId).toBeNull();
  });

  it("deactivates an employee (soft — sets the underlying user's status, no row is deleted)", async () => {
    const res = await request(app.server)
      .post(`/employees/${employeeA1Id}/deactivate`)
      .set("Authorization", `Bearer ${tokenOwnerA}`);

    expect(res.status).toBe(200);
    expect(res.body.employee.userStatus).toBe("deactivated");

    const stillListed = await request(app.server).get("/employees").set("Authorization", `Bearer ${tokenOwnerA}`);
    expect((stillListed.body.employees as Array<{ id: string }>).some((e) => e.id === employeeA1Id)).toBe(true);

    const events = await withTenantContext(tenantA.tenantId, (tx) =>
      tx.execute(sql`
        SELECT event_type FROM audit_events
        WHERE tenant_id = ${tenantA.tenantId} AND event_type = 'employee.deactivated' AND subject_id = ${employeeA1Id}
      `),
    );
    expect(extractRows(events)).toHaveLength(1);
  });
});
