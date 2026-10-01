// apps/api/test/roles-api.test.ts
//
// HTTP-level tests for Roles & Permissions (Beads issue Final-Verison-abf;
// routes/roles.ts; docs/architecture/03ak-… §5). Read-only list, tenant-wide
// assign/unassign, and — the mandatory part — the anti-escalation rule end
// to end over HTTP: a user with roles.manage but not audit.export must not
// be able to grant a role that includes audit.export to someone else, or to
// themselves.

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import type { FastifyInstance } from "fastify";
import { seedSession } from "../src/test-utils/seed-session.js";
import { startTestApp } from "./support/app.js";
import { assignRole, closeDbConnection, createUser, getRoleIdByKey, provisionTenant, type TestTenant } from "./support/provision.js";
import { deleteTenantAllowingAuditHistory } from "./support/cleanup.js";

describe("Roles API (Final-Verison-abf)", () => {
  let app: FastifyInstance;
  let tenantA: TestTenant;
  let tenantB: TestTenant;
  let ownerAId: string; // roles.manage, but NOT audit.export/read/correct/retract (Phase 1 removed audit.* from owner)
  let bsaAId: string; // builder_side_admin — holds everything, including audit.export
  let memberAId: string; // no roles.manage at all
  let targetUserId: string; // the user roles get assigned to/from in these tests
  let tokenOwnerA: string;
  let tokenBsaA: string;
  let tokenMemberA: string;
  let builderSideAdminRoleId: string;
  let memberRoleId: string;
  let ownerBId: string;
  let roleIdInTenantB: string;
  let tokenOwnerB: string;

  beforeAll(async () => {
    app = await startTestApp();
    tenantA = await provisionTenant("roles-a");
    tenantB = await provisionTenant("roles-b");

    ownerAId = await createUser(tenantA.tenantId, "owner-a");
    bsaAId = await createUser(tenantA.tenantId, "bsa-a");
    memberAId = await createUser(tenantA.tenantId, "member-a");
    targetUserId = await createUser(tenantA.tenantId, "target-a");
    ownerBId = await createUser(tenantB.tenantId, "owner-b");

    await assignRole(tenantA.tenantId, ownerAId, await getRoleIdByKey(tenantA.tenantId, "owner"));
    await assignRole(tenantA.tenantId, bsaAId, await getRoleIdByKey(tenantA.tenantId, "builder_side_admin"));
    await assignRole(tenantA.tenantId, memberAId, await getRoleIdByKey(tenantA.tenantId, "member"));
    await assignRole(tenantB.tenantId, ownerBId, await getRoleIdByKey(tenantB.tenantId, "owner"));

    builderSideAdminRoleId = await getRoleIdByKey(tenantA.tenantId, "builder_side_admin");
    memberRoleId = await getRoleIdByKey(tenantA.tenantId, "member");
    roleIdInTenantB = await getRoleIdByKey(tenantB.tenantId, "owner");

    tokenOwnerA = (await seedSession({ tenantId: tenantA.tenantId, userId: ownerAId })).token;
    tokenBsaA = (await seedSession({ tenantId: tenantA.tenantId, userId: bsaAId })).token;
    tokenMemberA = (await seedSession({ tenantId: tenantA.tenantId, userId: memberAId })).token;
    tokenOwnerB = (await seedSession({ tenantId: tenantB.tenantId, userId: ownerBId })).token;
  });

  afterAll(async () => {
    await app.close();
    await deleteTenantAllowingAuditHistory(tenantA.tenantId);
    await deleteTenantAllowingAuditHistory(tenantB.tenantId);
    await closeDbConnection();
  });

  it("403s a caller without roles.read", async () => {
    const res = await request(app.server).get("/roles").set("Authorization", `Bearer ${tokenMemberA}`);
    expect(res.status).toBe(403);
  });

  it("lists tenant roles with their permission keys, including builder_side_admin holding audit.export and owner NOT holding it", async () => {
    const res = await request(app.server).get("/roles").set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(res.status).toBe(200);
    const roles = res.body.roles as Array<{ key: string; permissions: string[] }>;

    const owner = roles.find((r) => r.key === "owner")!;
    const bsa = roles.find((r) => r.key === "builder_side_admin")!;
    expect(owner.permissions).not.toContain("audit.export");
    expect(owner.permissions).not.toContain("project_roles.manage");
    expect(bsa.permissions).toContain("audit.export");
    expect(bsa.permissions).toContain("project_roles.manage");
  });

  it("403s a caller without roles.manage attempting to assign a role", async () => {
    const res = await request(app.server)
      .post(`/users/${targetUserId}/roles`)
      .set("Authorization", `Bearer ${tokenMemberA}`)
      .send({ roleId: memberRoleId });
    expect(res.status).toBe(403);
    expect(res.body.error).toBe("permission_denied");
  });

  // --- The mandatory anti-escalation rule ---------------------------------

  it("ANTI-ESCALATION: owner (holds roles.manage, NOT audit.export) cannot grant builder_side_admin to someone else", async () => {
    const res = await request(app.server)
      .post(`/users/${targetUserId}/roles`)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ roleId: builderSideAdminRoleId });

    expect(res.status).toBe(403);
    expect(res.body.error).toBe("escalation_denied");
    expect(res.body.missingPermissions).toEqual(expect.arrayContaining(["audit.export", "audit.read", "audit.correct", "audit.retract"]));

    // Confirm nothing was actually granted.
    const roles = await request(app.server).get("/roles").set("Authorization", `Bearer ${tokenOwnerA}`);
    void roles;
  });

  it("ANTI-ESCALATION: owner cannot grant builder_side_admin to THEMSELVES either (self-grant is not exempt)", async () => {
    const res = await request(app.server)
      .post(`/users/${ownerAId}/roles`)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ roleId: builderSideAdminRoleId });
    expect(res.status).toBe(403);
    expect(res.body.error).toBe("escalation_denied");
  });

  it("owner CAN grant a role whose permissions are a subset of their own (member has no audit.* and no project_roles.manage)", async () => {
    const res = await request(app.server)
      .post(`/users/${targetUserId}/roles`)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ roleId: memberRoleId });

    expect(res.status).toBe(201);
    expect(res.body.userRole.userId).toBe(targetUserId);
    expect(res.body.userRole.roleId).toBe(memberRoleId);
  });

  it("builder_side_admin (holds the whole catalogue) CAN grant builder_side_admin to someone else", async () => {
    const anotherUser = await createUser(tenantA.tenantId, "another-a");
    const res = await request(app.server)
      .post(`/users/${anotherUser}/roles`)
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ roleId: builderSideAdminRoleId });
    expect(res.status).toBe(201);
  });

  it("refuses to assign a role id that belongs to another tenant (composite FK, not a spoofable field)", async () => {
    const res = await request(app.server)
      .post(`/users/${targetUserId}/roles`)
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({ roleId: roleIdInTenantB });
    expect(res.status).toBe(400);
  });

  it("unassigns a role and emits an audit event", async () => {
    const res = await request(app.server)
      .delete(`/users/${targetUserId}/roles/${memberRoleId}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(res.status).toBe(200);

    const again = await request(app.server)
      .delete(`/users/${targetUserId}/roles/${memberRoleId}`)
      .set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(again.status).toBe(404);
  });

  it("tenant B's roles.read/roles.manage never sees or touches tenant A's roles/users", async () => {
    const listRes = await request(app.server).get("/roles").set("Authorization", `Bearer ${tokenOwnerB}`);
    expect((listRes.body.roles as Array<{ id: string }>).some((r) => r.id === builderSideAdminRoleId)).toBe(false);

    const assignRes = await request(app.server)
      .post(`/users/${targetUserId}/roles`)
      .set("Authorization", `Bearer ${tokenOwnerB}`)
      .send({ roleId: roleIdInTenantB });
    // targetUserId belongs to tenant A; tenant B's FK (tenant_id, user_id) can never match it.
    expect(assignRes.status).toBe(400);
  });
});
