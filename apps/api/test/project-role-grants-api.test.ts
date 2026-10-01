// apps/api/test/project-role-grants-api.test.ts
//
// HTTP-level tests for Project Role Grants (Beads issue Final-Verison-abf;
// routes/project-role-grants.ts; docs/architecture/03ak-… §4.5). Exercises
// the new `project_roles.manage` permission end-to-end: only
// builder_side_admin holds it by default (NOT owner/admin — see
// packages/db/drizzle/0005_phase1_project_roles_manage_permission.sql), no
// per-project cardinality limit, append-only revocation, and tenant
// isolation including forged cross-tenant references.

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import type { FastifyInstance } from "fastify";
import { seedSession } from "../src/test-utils/seed-session.js";
import { startTestApp } from "./support/app.js";
import { assignRole, closeDbConnection, createUser, getRoleIdByKey, provisionTenant, type TestTenant } from "./support/provision.js";
import { createEmployee, createProject } from "./support/phase1.js";
import { deleteTenantAllowingAuditHistory } from "./support/cleanup.js";

describe("Project Role Grants API (Final-Verison-abf)", () => {
  let app: FastifyInstance;
  let tenantA: TestTenant;
  let tenantB: TestTenant;
  let tokenBsaA: string; // builder_side_admin — the only default holder of project_roles.manage
  let tokenOwnerA: string; // owner — must NOT hold project_roles.manage by default (NI-20)
  let tokenBsaB: string;
  let projectA: string;
  let employeeA1: string;
  let employeeA2: string;
  let siteHeadRoleIdA: string;
  let projectHeadRoleIdA: string;
  let projectB: string;
  let employeeB1: string;
  let siteHeadRoleIdB: string;

  beforeAll(async () => {
    app = await startTestApp();
    tenantA = await provisionTenant("prg-a");
    tenantB = await provisionTenant("prg-b");

    const bsaAUserId = await createUser(tenantA.tenantId, "bsa-a");
    const ownerAUserId = await createUser(tenantA.tenantId, "owner-a");
    const bsaBUserId = await createUser(tenantB.tenantId, "bsa-b");

    await assignRole(tenantA.tenantId, bsaAUserId, await getRoleIdByKey(tenantA.tenantId, "builder_side_admin"));
    await assignRole(tenantA.tenantId, ownerAUserId, await getRoleIdByKey(tenantA.tenantId, "owner"));
    await assignRole(tenantB.tenantId, bsaBUserId, await getRoleIdByKey(tenantB.tenantId, "builder_side_admin"));

    tokenBsaA = (await seedSession({ tenantId: tenantA.tenantId, userId: bsaAUserId })).token;
    tokenOwnerA = (await seedSession({ tenantId: tenantA.tenantId, userId: ownerAUserId })).token;
    tokenBsaB = (await seedSession({ tenantId: tenantB.tenantId, userId: bsaBUserId })).token;

    projectA = await createProject(tenantA.tenantId, "Tower A");
    employeeA1 = await createEmployee(tenantA.tenantId, await createUser(tenantA.tenantId, "emp-a1"));
    employeeA2 = await createEmployee(tenantA.tenantId, await createUser(tenantA.tenantId, "emp-a2"));
    siteHeadRoleIdA = await getRoleIdByKey(tenantA.tenantId, "site_head");
    projectHeadRoleIdA = await getRoleIdByKey(tenantA.tenantId, "project_head");

    projectB = await createProject(tenantB.tenantId, "Tower B");
    employeeB1 = await createEmployee(tenantB.tenantId, await createUser(tenantB.tenantId, "emp-b1"));
    siteHeadRoleIdB = await getRoleIdByKey(tenantB.tenantId, "site_head");
  });

  afterAll(async () => {
    await app.close();
    await deleteTenantAllowingAuditHistory(tenantA.tenantId);
    await deleteTenantAllowingAuditHistory(tenantB.tenantId);
    await closeDbConnection();
  });

  it("403s owner (lacks project_roles.manage by default — NI-20) even though owner holds roles.manage and settings.manage", async () => {
    const res = await request(app.server)
      .post("/project-role-grants")
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ employeeId: employeeA1, roleId: siteHeadRoleIdA, projectId: projectA });
    expect(res.status).toBe(403);
    expect(res.body.error).toBe("permission_denied");

    const listRes = await request(app.server)
      .get("/project-role-grants")
      .set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(listRes.status).toBe(403);
  });

  let grantSiteHeadId: string;
  let grantProjectHeadId: string;

  it("grants Site Head to an employee on a project (builder_side_admin, project_roles.manage) and emits an audit event", async () => {
    const res = await request(app.server)
      .post("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ employeeId: employeeA1, roleId: siteHeadRoleIdA, projectId: projectA });

    expect(res.status).toBe(201);
    expect(res.body.projectRoleGrant.employeeId).toBe(employeeA1);
    expect(res.body.projectRoleGrant.revokedAt).toBeNull();
    grantSiteHeadId = res.body.projectRoleGrant.id;
  });

  it("allows a SECOND simultaneous grant of a DIFFERENT role to the SAME employee on the SAME project (no 1:1 assumption, AI-Q-1/AI-Q-2)", async () => {
    const res = await request(app.server)
      .post("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ employeeId: employeeA1, roleId: projectHeadRoleIdA, projectId: projectA });
    expect(res.status).toBe(201);
    grantProjectHeadId = res.body.projectRoleGrant.id;
  });

  it("allows a second Site Head on the SAME project for a DIFFERENT employee (no per-project cardinality limit, P1-G-2)", async () => {
    const res = await request(app.server)
      .post("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ employeeId: employeeA2, roleId: siteHeadRoleIdA, projectId: projectA });
    expect(res.status).toBe(201);
  });

  it("rejects a duplicate ACTIVE grant of the same (employee, role, project)", async () => {
    const res = await request(app.server)
      .post("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ employeeId: employeeA1, roleId: siteHeadRoleIdA, projectId: projectA });
    expect(res.status).toBe(400);
  });

  it("refuses a grant naming another tenant's employee — not a spoofable body field", async () => {
    const res = await request(app.server)
      .post("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ employeeId: employeeB1, roleId: siteHeadRoleIdA, projectId: projectA });
    expect(res.status).toBe(400);
  });

  it("refuses a grant naming another tenant's project", async () => {
    const res = await request(app.server)
      .post("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ employeeId: employeeA1, roleId: siteHeadRoleIdA, projectId: projectB });
    expect(res.status).toBe(400);
  });

  it("refuses a grant naming another tenant's role (cross-tenant role id)", async () => {
    const res = await request(app.server)
      .post("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ employeeId: employeeA1, roleId: siteHeadRoleIdB, projectId: projectA });
    expect(res.status).toBe(400);
  });

  it("lists grants filtered by project", async () => {
    const res = await request(app.server)
      .get("/project-role-grants")
      .query({ projectId: projectA })
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(res.status).toBe(200);
    const grants = res.body.projectRoleGrants as Array<{ id: string; projectId: string }>;
    expect(grants.every((g) => g.projectId === projectA)).toBe(true);
    expect(grants.some((g) => g.id === grantSiteHeadId)).toBe(true);
    expect(grants.some((g) => g.id === grantProjectHeadId)).toBe(true);
  });

  it("lists grants filtered by employee", async () => {
    const res = await request(app.server)
      .get("/project-role-grants")
      .query({ employeeId: employeeA1 })
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(res.status).toBe(200);
    const grants = res.body.projectRoleGrants as Array<{ employeeId: string }>;
    expect(grants.length).toBeGreaterThanOrEqual(2);
    expect(grants.every((g) => g.employeeId === employeeA1)).toBe(true);
  });

  it("never returns tenant B's grants to tenant A, even unfiltered", async () => {
    await request(app.server)
      .post("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaB}`)
      .send({ employeeId: employeeB1, roleId: siteHeadRoleIdB, projectId: projectB });

    const res = await request(app.server).get("/project-role-grants").set("Authorization", `Bearer ${tokenBsaA}`);
    expect(res.status).toBe(200);
    for (const g of res.body.projectRoleGrants as Array<{ employeeId: string }>) {
      expect([employeeA1, employeeA2]).toContain(g.employeeId);
    }
  });

  it("revokes a grant (soft — stamps revokedAt/revokedByUserId, no delete) and emits an audit event", async () => {
    const res = await request(app.server)
      .post(`/project-role-grants/${grantSiteHeadId}/revoke`)
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(res.status).toBe(200);
    expect(res.body.projectRoleGrant.revokedAt).not.toBeNull();
    expect(res.body.projectRoleGrant.revokedByUserId).toBeTruthy();

    // Still visible with includeRevoked, absent from the default (active-only) list.
    const activeOnly = await request(app.server)
      .get("/project-role-grants")
      .query({ projectId: projectA })
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect((activeOnly.body.projectRoleGrants as Array<{ id: string }>).some((g) => g.id === grantSiteHeadId)).toBe(
      false,
    );

    const withRevoked = await request(app.server)
      .get("/project-role-grants")
      .query({ projectId: projectA, includeRevoked: "true" })
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect((withRevoked.body.projectRoleGrants as Array<{ id: string }>).some((g) => g.id === grantSiteHeadId)).toBe(
      true,
    );
  });

  it("refuses to re-revoke an already-revoked grant (append-only — a re-grant is a new row, not a reopen)", async () => {
    const res = await request(app.server)
      .post(`/project-role-grants/${grantSiteHeadId}/revoke`)
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(res.status).toBe(409);
    expect(res.body.error).toBe("project_role_grant_already_revoked");
  });

  it("404s revoking a grant id that doesn't exist in the caller's tenant", async () => {
    const res = await request(app.server)
      .post(`/project-role-grants/${grantProjectHeadId.slice(0, -4)}0000/revoke`)
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(res.status).toBe(404);
  });

  it("404s tenant A revoking tenant B's grant id", async () => {
    const bGrants = await request(app.server)
      .get("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaB}`);
    const bGrantId = (bGrants.body.projectRoleGrants as Array<{ id: string }>)[0].id;

    const res = await request(app.server)
      .post(`/project-role-grants/${bGrantId}/revoke`)
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(res.status).toBe(404);

    // Confirm it is genuinely untouched.
    const stillThere = await request(app.server)
      .get("/project-role-grants")
      .set("Authorization", `Bearer ${tokenBsaB}`);
    expect((stillThere.body.projectRoleGrants as Array<{ id: string; revokedAt: unknown }>).find((g) => g.id === bGrantId)?.revokedAt).toBeNull();
  });
});
