// apps/api/test/org-masters-api.test.ts
//
// HTTP-level tests for departments and designations (Beads issue
// Final-Verison-abf; routes/departments.ts, routes/designations.ts,
// lib/org-master-routes.ts). Both tables share one implementation, so one
// file exercises both rather than duplicating the same cases twice.

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import type { FastifyInstance } from "fastify";
import { seedSession } from "../src/test-utils/seed-session.js";
import { startTestApp } from "./support/app.js";
import { assignRole, closeDbConnection, createUser, getRoleIdByKey, provisionTenant, type TestTenant } from "./support/provision.js";
import { deleteTenantAllowingAuditHistory } from "./support/cleanup.js";

describe.each([
  { table: "departments" as const, path: "/departments", key: "departments" as const, seededCode: "sales" },
  { table: "designations" as const, path: "/designations", key: "designations" as const, seededCode: null },
])("$table API (Final-Verison-abf)", ({ path, key, seededCode }) => {
  let app: FastifyInstance;
  let tenantA: TestTenant;
  let tenantB: TestTenant;
  let ownerAId: string;
  let ownerBId: string;
  let readOnlyAId: string; // has settings.read? no — read_only lacks settings entirely
  let tokenOwnerA: string;
  let tokenOwnerB: string;
  let tokenReadOnlyA: string;

  beforeAll(async () => {
    app = await startTestApp();
    tenantA = await provisionTenant(`${path.slice(1, 4)}-a`);
    tenantB = await provisionTenant(`${path.slice(1, 4)}-b`);

    ownerAId = await createUser(tenantA.tenantId, "owner-a");
    ownerBId = await createUser(tenantB.tenantId, "owner-b");
    readOnlyAId = await createUser(tenantA.tenantId, "ro-a");

    await assignRole(tenantA.tenantId, ownerAId, await getRoleIdByKey(tenantA.tenantId, "owner"));
    await assignRole(tenantB.tenantId, ownerBId, await getRoleIdByKey(tenantB.tenantId, "owner"));
    await assignRole(tenantA.tenantId, readOnlyAId, await getRoleIdByKey(tenantA.tenantId, "read_only"));

    tokenOwnerA = (await seedSession({ tenantId: tenantA.tenantId, userId: ownerAId })).token;
    tokenOwnerB = (await seedSession({ tenantId: tenantB.tenantId, userId: ownerBId })).token;
    tokenReadOnlyA = (await seedSession({ tenantId: tenantA.tenantId, userId: readOnlyAId })).token;
  });

  afterAll(async () => {
    await app.close();
    await deleteTenantAllowingAuditHistory(tenantA.tenantId);
    await deleteTenantAllowingAuditHistory(tenantB.tenantId);
    // closeDbConnection() is called once, after BOTH describe.each blocks
    // finish (see the top-level afterAll below) — the DB pool is a
    // module-level singleton shared across this whole file.
  });

  it("403s a caller without settings.read", async () => {
    const res = await request(app.server).get(path).set("Authorization", `Bearer ${tokenReadOnlyA}`);
    expect(res.status).toBe(403);
    expect(res.body.error).toBe("permission_denied");
  });

  if (seededCode) {
    it("lists the seeded is_system rows for a fresh tenant", async () => {
      const res = await request(app.server).get(path).set("Authorization", `Bearer ${tokenOwnerA}`);
      expect(res.status).toBe(200);
      const rows = res.body[key] as Array<{ code: string; isSystem: boolean }>;
      const seeded = rows.find((r) => r.code === seededCode);
      expect(seeded).toBeDefined();
      expect(seeded?.isSystem).toBe(true);
    });
  } else {
    it("seeds no designations at all for a fresh tenant (P1-M-2)", async () => {
      const res = await request(app.server).get(path).set("Authorization", `Bearer ${tokenOwnerA}`);
      expect(res.status).toBe(200);
      expect(res.body[key]).toEqual([]);
    });
  }

  let createdId: string;

  it("creates a tenant-custom row (settings.manage), always is_system = false", async () => {
    const res = await request(app.server)
      .post(path)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ code: "custom_row", label: "Custom Row" });

    expect(res.status).toBe(201);
    const created = res.body[path === "/departments" ? "department" : "designation"];
    expect(created.isSystem).toBe(false);
    expect(created.tenantId).toBe(tenantA.tenantId);
    createdId = created.id;
  });

  it("rejects a duplicate code within the same tenant", async () => {
    const res = await request(app.server)
      .post(path)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ code: "custom_row", label: "Custom Row Again" });
    expect(res.status).toBe(400);
  });

  it("rejects an is_system field spoofed in the body — the created row is always custom", async () => {
    const res = await request(app.server)
      .post(path)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ code: "spoof_system", label: "Spoof System", isSystem: true, is_system: true });
    expect(res.status).toBe(201);
    const created = res.body[path === "/departments" ? "department" : "designation"];
    expect(created.isSystem).toBe(false);
  });

  it("ignores a forged tenantId on create — the row always belongs to the caller's tenant", async () => {
    const res = await request(app.server)
      .post(path)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ code: "spoof_tenant", label: "Spoof Tenant", tenantId: tenantB.tenantId, tenant_id: tenantB.tenantId });

    expect(res.status).toBe(201);
    const created = res.body[path === "/departments" ? "department" : "designation"];
    expect(created.tenantId).toBe(tenantA.tenantId);

    const asB = await request(app.server).get(path).set("Authorization", `Bearer ${tokenOwnerB}`);
    expect((asB.body[key] as Array<{ code: string }>).some((r) => r.code === "spoof_tenant")).toBe(false);
  });

  it("keeps tenant B's own master rows invisible to tenant A", async () => {
    await request(app.server)
      .post(path)
      .set("Authorization", `Bearer ${tokenOwnerB}`)
      .send({ code: "b_only_row", label: "B Only Row" });

    const asA = await request(app.server).get(path).set("Authorization", `Bearer ${tokenOwnerA}`);
    expect((asA.body[key] as Array<{ code: string }>).some((r) => r.code === "b_only_row")).toBe(false);
    void createdId;
  });
});

afterAll(async () => {
  await closeDbConnection();
});
