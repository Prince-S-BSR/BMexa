// apps/api/test/auth-signup.test.ts
//
// HTTP-level tests for the signup endpoint (Beads issue Final-Verison-r1r;
// routes/auth.ts). Matches the rigor of the other Phase 1 product-route
// suites: proves the endpoint provisions a real, usable tenant (RBAC
// defaults, builder_side_admin granted to the founding user, a 1:1 employees
// row) and that a signup can never claim — or collide with — an existing
// tenant's subdomain.

import { randomUUID } from "node:crypto";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import type { FastifyInstance } from "fastify";
import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { startTestApp } from "./support/app.js";
import { closeDbConnection } from "./support/provision.js";
import { deleteTenantAllowingAuditHistory } from "./support/cleanup.js";
import { extractRows } from "./support/rows.js";

function uniqueSubdomain(prefix = "sgn"): string {
  return `${prefix}${Date.now().toString(36)}${randomUUID().replace(/-/g, "").slice(0, 8)}`.toLowerCase();
}

describe("Signup API (Final-Verison-r1r)", () => {
  let app: FastifyInstance;
  const createdTenantIds: string[] = [];

  beforeAll(async () => {
    app = await startTestApp();
  });

  afterAll(async () => {
    await app.close();
    for (const tenantId of createdTenantIds) {
      await deleteTenantAllowingAuditHistory(tenantId);
    }
    await closeDbConnection();
  });

  it("signs up a new tenant + founding user, provisions RBAC, grants builder_side_admin, and creates a 1:1 employee row", async () => {
    const subdomain = uniqueSubdomain();
    const email = `founder-${subdomain}@example.test`;

    const res = await request(app.server).post("/auth/signup").send({
      subdomain,
      tenantName: "Test Builder Co",
      email,
      password: "correct-horse-battery-staple",
      fullName: "Founding User",
    });

    expect(res.status).toBe(201);
    expect(res.body.tenant.subdomain).toBe(subdomain);
    expect(res.body.user.email).toBe(email);
    expect(res.body.employee.id).toBeTruthy();

    const tenantId = res.body.tenant.id as string;
    createdTenantIds.push(tenantId);
    const userId = res.body.user.id as string;
    const employeeId = res.body.employee.id as string;

    await withTenantContext(tenantId, async (tx) => {
      // The tenant row itself, active and with the requested subdomain/name.
      const tenantRows = extractRows(await tx.execute(sql`SELECT subdomain, name, status FROM tenants WHERE id = ${tenantId}`));
      expect(tenantRows).toHaveLength(1);
      expect(tenantRows[0]!.status).toBe("active");

      // The founding user: active, with a password hash (never the plaintext).
      const userRows = extractRows(
        await tx.execute(sql`SELECT email, status, password_hash, full_name FROM users WHERE id = ${userId} AND tenant_id = ${tenantId}`),
      );
      expect(userRows).toHaveLength(1);
      expect(userRows[0]!.status).toBe("active");
      expect(userRows[0]!.full_name).toBe("Founding User");
      expect(userRows[0]!.password_hash).not.toBe("correct-horse-battery-staple");
      expect(String(userRows[0]!.password_hash)).toMatch(/^\$argon2/);

      // RBAC defaults were actually provisioned (not just a bare tenant row).
      const roleRows = extractRows(await tx.execute(sql`SELECT id, key FROM roles WHERE tenant_id = ${tenantId} AND key = 'builder_side_admin'`));
      expect(roleRows).toHaveLength(1);
      const builderAdminRoleId = roleRows[0]!.id as string;

      // The founding user holds builder_side_admin.
      const userRoleRows = extractRows(
        await tx.execute(sql`SELECT role_id FROM user_roles WHERE tenant_id = ${tenantId} AND user_id = ${userId} AND role_id = ${builderAdminRoleId}`),
      );
      expect(userRoleRows).toHaveLength(1);

      // The founding user has a 1:1 employees row, top of the reporting tree.
      const employeeRows = extractRows(
        await tx.execute(sql`
          SELECT id, user_id, department_id, designation_id, reports_to_employee_id
          FROM employees WHERE tenant_id = ${tenantId} AND id = ${employeeId}
        `),
      );
      expect(employeeRows).toHaveLength(1);
      expect(employeeRows[0]!.user_id).toBe(userId);
      expect(employeeRows[0]!.department_id).toBeNull();
      expect(employeeRows[0]!.designation_id).toBeNull();
      expect(employeeRows[0]!.reports_to_employee_id).toBeNull();

      // An audit event was recorded for the signup itself.
      const auditRows = extractRows(
        await tx.execute(sql`
          SELECT event_type, event_category, actor_user_id, subject_id
          FROM audit_events WHERE tenant_id = ${tenantId} AND event_type = 'tenant.signed_up'
        `),
      );
      expect(auditRows).toHaveLength(1);
      expect(auditRows[0]!.event_category).toBe("auth");
      expect(auditRows[0]!.actor_user_id).toBe(userId);
      expect(auditRows[0]!.subject_id).toBe(tenantId);
    });
  });

  it("rejects a signup that reuses an existing tenant's subdomain (409, no hijack)", async () => {
    const subdomain = uniqueSubdomain("dup");

    const first = await request(app.server).post("/auth/signup").send({
      subdomain,
      tenantName: "First Claimant",
      email: `first-${subdomain}@example.test`,
      password: "correct-horse-battery-staple",
    });
    expect(first.status).toBe(201);
    const firstTenantId = first.body.tenant.id as string;
    createdTenantIds.push(firstTenantId);

    const second = await request(app.server).post("/auth/signup").send({
      subdomain,
      tenantName: "Second Claimant",
      email: `second-${subdomain}@example.test`,
      password: "correct-horse-battery-staple",
    });

    expect(second.status).toBe(409);
    expect(second.body.error).toBe("subdomain_taken");
    expect(second.body.tenant).toBeUndefined();

    // The original tenant's name/rows are untouched by the failed second attempt.
    await withTenantContext(firstTenantId, async (tx) => {
      const rows = extractRows(await tx.execute(sql`SELECT name FROM tenants WHERE id = ${firstTenantId}`));
      expect(rows).toHaveLength(1);
      expect(rows[0]!.name).toBe("First Claimant");

      const userRows = extractRows(await tx.execute(sql`SELECT email FROM users WHERE tenant_id = ${firstTenantId}`));
      expect(userRows).toHaveLength(1);
      expect(userRows[0]!.email).toBe(`first-${subdomain}@example.test`);
    });
  });

  it("400s on missing required fields", async () => {
    const base = { subdomain: uniqueSubdomain("miss"), tenantName: "T", email: "a@example.test", password: "correct-horse-battery-staple" };

    const noSubdomain = await request(app.server).post("/auth/signup").send({ ...base, subdomain: undefined });
    expect(noSubdomain.status).toBe(400);
    expect(noSubdomain.body.error).toBe("subdomain_required");

    const noName = await request(app.server).post("/auth/signup").send({ ...base, tenantName: undefined });
    expect(noName.status).toBe(400);
    expect(noName.body.error).toBe("tenant_name_required");

    const noEmail = await request(app.server).post("/auth/signup").send({ ...base, email: undefined });
    expect(noEmail.status).toBe(400);
    expect(noEmail.body.error).toBe("email_required");

    const noPassword = await request(app.server).post("/auth/signup").send({ ...base, password: undefined });
    expect(noPassword.status).toBe(400);
    expect(noPassword.body.error).toBe("password_required");
  });

  it("400s on an invalid subdomain format", async () => {
    const res = await request(app.server).post("/auth/signup").send({
      subdomain: "Not Valid! Subdomain",
      tenantName: "T",
      email: "a@example.test",
      password: "correct-horse-battery-staple",
    });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("subdomain_invalid_format");
  });

  it("400s on a too-short password", async () => {
    const res = await request(app.server).post("/auth/signup").send({
      subdomain: uniqueSubdomain("short"),
      tenantName: "T",
      email: "a@example.test",
      password: "short",
    });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("password_too_short");
  });
});
