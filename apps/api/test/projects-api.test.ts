// apps/api/test/projects-api.test.ts
//
// HTTP-level tests for the deliberate minimal Projects stub (Beads issue
// Final-Verison-abf; routes/projects.ts; docs/architecture/03ak-… §4.6).
// list/get/create/update-name-only, tenant isolation, permission gating.

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import type { FastifyInstance } from "fastify";
import { seedSession } from "../src/test-utils/seed-session.js";
import { startTestApp } from "./support/app.js";
import { assignRole, closeDbConnection, createUser, getRoleIdByKey, provisionTenant, type TestTenant } from "./support/provision.js";
import { deleteTenantAllowingAuditHistory } from "./support/cleanup.js";

describe("Projects API (Final-Verison-abf)", () => {
  let app: FastifyInstance;
  let tenantA: TestTenant;
  let tenantB: TestTenant;
  let tokenOwnerA: string;
  let tokenOwnerB: string;
  let tokenReadOnlyA: string;

  beforeAll(async () => {
    app = await startTestApp();
    tenantA = await provisionTenant("proj-a");
    tenantB = await provisionTenant("proj-b");

    const ownerA = await createUser(tenantA.tenantId, "owner-a");
    const ownerB = await createUser(tenantB.tenantId, "owner-b");
    const readOnlyA = await createUser(tenantA.tenantId, "ro-a");

    await assignRole(tenantA.tenantId, ownerA, await getRoleIdByKey(tenantA.tenantId, "owner"));
    await assignRole(tenantB.tenantId, ownerB, await getRoleIdByKey(tenantB.tenantId, "owner"));
    await assignRole(tenantA.tenantId, readOnlyA, await getRoleIdByKey(tenantA.tenantId, "read_only"));

    tokenOwnerA = (await seedSession({ tenantId: tenantA.tenantId, userId: ownerA })).token;
    tokenOwnerB = (await seedSession({ tenantId: tenantB.tenantId, userId: ownerB })).token;
    tokenReadOnlyA = (await seedSession({ tenantId: tenantA.tenantId, userId: readOnlyA })).token;
  });

  afterAll(async () => {
    await app.close();
    await deleteTenantAllowingAuditHistory(tenantA.tenantId);
    await deleteTenantAllowingAuditHistory(tenantB.tenantId);
    await closeDbConnection();
  });

  it("403s a caller without settings.read/settings.manage", async () => {
    const getRes = await request(app.server).get("/projects").set("Authorization", `Bearer ${tokenReadOnlyA}`);
    expect(getRes.status).toBe(403);
    const postRes = await request(app.server)
      .post("/projects")
      .set("Authorization", `Bearer ${tokenReadOnlyA}`)
      .send({ name: "Nope" });
    expect(postRes.status).toBe(403);
  });

  let projectId: string;

  it("creates a project (settings.manage) with no status field at all", async () => {
    const res = await request(app.server)
      .post("/projects")
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ name: "Skyline Towers" });

    expect(res.status).toBe(201);
    expect(res.body.project.name).toBe("Skyline Towers");
    expect(res.body.project).not.toHaveProperty("status");
    projectId = res.body.project.id;
  });

  it("ignores a forged tenantId on create", async () => {
    const res = await request(app.server)
      .post("/projects")
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ name: "Spoofed Tenant Project", tenantId: tenantB.tenantId, tenant_id: tenantB.tenantId });

    expect(res.status).toBe(201);
    expect(res.body.project.tenantId).toBe(tenantA.tenantId);

    const asB = await request(app.server).get("/projects").set("Authorization", `Bearer ${tokenOwnerB}`);
    expect((asB.body.projects as Array<{ id: string }>).some((p) => p.id === res.body.project.id)).toBe(false);
  });

  it("lists only the caller's own tenant's projects", async () => {
    const res = await request(app.server).get("/projects").set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(res.status).toBe(200);
    for (const p of res.body.projects as Array<{ tenantId: string }>) {
      expect(p.tenantId).toBe(tenantA.tenantId);
    }
  });

  it("404s a cross-tenant GET by id", async () => {
    const bProject = await request(app.server)
      .post("/projects")
      .set("Authorization", `Bearer ${tokenOwnerB}`)
      .send({ name: "B Only Project" });

    const res = await request(app.server)
      .get(`/projects/${bProject.body.project.id}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(res.status).toBe(404);
    expect(res.body.error).toBe("project_not_found");
  });

  it("updates the project's name (name only) and never reassigns tenant via a spoofed body field", async () => {
    const res = await request(app.server)
      .patch(`/projects/${projectId}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ name: "Skyline Towers Phase 2", tenantId: tenantB.tenantId });

    expect(res.status).toBe(200);
    expect(res.body.project.name).toBe("Skyline Towers Phase 2");
    expect(res.body.project.tenantId).toBe(tenantA.tenantId);
  });

  it("404s a PATCH aimed at another tenant's project id", async () => {
    const bList = await request(app.server).get("/projects").set("Authorization", `Bearer ${tokenOwnerB}`);
    const bProjectId = (bList.body.projects as Array<{ id: string }>)[0].id;

    const res = await request(app.server)
      .patch(`/projects/${bProjectId}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ name: "Hijacked" });
    expect(res.status).toBe(404);
  });
});
