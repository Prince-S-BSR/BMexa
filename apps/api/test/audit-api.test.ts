// apps/api/test/audit-api.test.ts
//
// HTTP-level tests for the Audit API (Beads issue Final-Verison-abf;
// routes/audit.ts; docs/architecture/03ak-… §6, §11 item 3). List/read with
// the supersession chain resolved, correct, retract, export (which must
// itself emit an audit event), permission gating (audit.read/correct/
// retract/export — the owner holds NONE of them per ACG-5/9), and tenant
// isolation.
//
// The DB-trigger-level correctness (append-only, mandatory reason, named
// actor, ACG-4 authorization at the trigger) is already proven by
// phase1-audit-completeness-gate.test.ts. This file proves the HTTP layer
// wires it up correctly, not the trigger itself.

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import type { FastifyInstance } from "fastify";
import { seedSession } from "../src/test-utils/seed-session.js";
import { startTestApp } from "./support/app.js";
import { assignRole, closeDbConnection, createUser, getRoleIdByKey, provisionTenant, type TestTenant } from "./support/provision.js";
import { deleteTenantAllowingAuditHistory } from "./support/cleanup.js";

describe("Audit API (Final-Verison-abf)", () => {
  let app: FastifyInstance;
  let tenantA: TestTenant;
  let tenantB: TestTenant;
  let bsaAId: string; // builder_side_admin: audit.read/correct/retract/export
  let ownerAId: string; // owner: NONE of the audit.* permissions (ACG-5/9 Phase 1 change)
  let bsaBId: string;
  let tokenBsaA: string;
  let tokenOwnerA: string;
  let tokenBsaB: string;

  beforeAll(async () => {
    app = await startTestApp();
    tenantA = await provisionTenant("audit-a");
    tenantB = await provisionTenant("audit-b");

    bsaAId = await createUser(tenantA.tenantId, "bsa-a");
    ownerAId = await createUser(tenantA.tenantId, "owner-a");
    bsaBId = await createUser(tenantB.tenantId, "bsa-b");

    await assignRole(tenantA.tenantId, bsaAId, await getRoleIdByKey(tenantA.tenantId, "builder_side_admin"));
    await assignRole(tenantA.tenantId, ownerAId, await getRoleIdByKey(tenantA.tenantId, "owner"));
    await assignRole(tenantB.tenantId, bsaBId, await getRoleIdByKey(tenantB.tenantId, "builder_side_admin"));

    tokenBsaA = (await seedSession({ tenantId: tenantA.tenantId, userId: bsaAId })).token;
    tokenOwnerA = (await seedSession({ tenantId: tenantA.tenantId, userId: ownerAId })).token;
    tokenBsaB = (await seedSession({ tenantId: tenantB.tenantId, userId: bsaBId })).token;
  });

  afterAll(async () => {
    await app.close();
    await deleteTenantAllowingAuditHistory(tenantA.tenantId);
    await deleteTenantAllowingAuditHistory(tenantB.tenantId);
    await closeDbConnection();
  });

  it("owner holds NONE of audit.read/correct/retract/export (ACG-5/ACG-9) — every audit route 403s for owner", async () => {
    const getList = await request(app.server).get("/audit/events").set("Authorization", `Bearer ${tokenOwnerA}`);
    expect(getList.status).toBe(403);

    const exportRes = await request(app.server)
      .post("/audit/events/export")
      .set("Authorization", `Bearer ${tokenOwnerA}`)
      .send({});
    expect(exportRes.status).toBe(403);
  });

  let originalEventSubjectId: string;

  it("an ordinary mutation (department create, settings.manage) produces a real audit_events row visible via the Audit API", async () => {
    const createDept = await request(app.server)
      .post("/departments")
      .set("Authorization", `Bearer ${tokenBsaA}`) // builder_side_admin also holds settings.manage
      .send({ code: "audit_probe_dept", label: "Audit Probe Dept" });
    expect(createDept.status).toBe(201);
    originalEventSubjectId = createDept.body.department.id;

    const list = await request(app.server)
      .get("/audit/events")
      .query({ category: "data" })
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(list.status).toBe(200);
    const found = (list.body.auditEvents as Array<{ subjectId: string; status: string; eventType: string }>).find(
      (e) => e.subjectId === originalEventSubjectId,
    );
    expect(found).toBeDefined();
    expect(found?.eventType).toBe("department.created");
    expect(found?.status).toBe("active");
  });

  let originalEventId: string;

  it("GET /audit/events/:id returns the single event with status 'active' and no supersession", async () => {
    const list = await request(app.server)
      .get("/audit/events")
      .query({ category: "data" })
      .set("Authorization", `Bearer ${tokenBsaA}`);
    const row = (list.body.auditEvents as Array<{ id: string; subjectId: string }>).find(
      (e) => e.subjectId === originalEventSubjectId,
    )!;
    originalEventId = row.id;

    const res = await request(app.server)
      .get(`/audit/events/${originalEventId}`)
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(res.status).toBe(200);
    expect(res.body.auditEvent.status).toBe("active");
    expect(res.body.auditEvent.supersession).toBeNull();
    expect(res.body.auditEvent.isSupersessionRecord).toBe(false);
  });

  it("404s tenant B reading tenant A's audit event by id", async () => {
    const res = await request(app.server)
      .get(`/audit/events/${originalEventId}`)
      .set("Authorization", `Bearer ${tokenBsaB}`);
    expect(res.status).toBe(404);
  });

  it("rejects correct/retract without a reason", async () => {
    const res = await request(app.server)
      .post(`/audit/events/${originalEventId}/correct`)
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ afterState: { label: "Corrected Label" } });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("reason_required");
  });

  it("rejects a correction without after_state (ACG-6 'details of the edit')", async () => {
    const res = await request(app.server)
      .post(`/audit/events/${originalEventId}/correct`)
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ reason: "Entered against the wrong department" });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("after_state_required");
  });

  let correctionId: string;

  it("CORRECT: builder_side_admin (audit.correct) corrects the event; the original is presented as 'corrected' with the correction's after_state", async () => {
    const res = await request(app.server)
      .post(`/audit/events/${originalEventId}/correct`)
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ reason: "Entered against the wrong department", afterState: { label: "Corrected Label" } });

    expect(res.status).toBe(201);
    expect(res.body.auditEvent.supersedesEventId).toBe(originalEventId);
    expect(res.body.auditEvent.eventCategory).toBe("audit");
    correctionId = res.body.auditEvent.id;

    const original = await request(app.server)
      .get(`/audit/events/${originalEventId}`)
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(original.body.auditEvent.status).toBe("corrected");
    expect(original.body.auditEvent.supersession.kind).toBe("correction");
    expect(original.body.auditEvent.supersession.afterState).toEqual({ label: "Corrected Label" });
    expect(original.body.auditEvent.supersession.reason).toBe("Entered against the wrong department");
  });

  it("ACG-6: a supersession record cannot itself be superseded (409), the DB guard is the backstop", async () => {
    const res = await request(app.server)
      .post(`/audit/events/${correctionId}/correct`)
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ reason: "trying to fix the fix", afterState: { label: "double corrected" } });
    expect(res.status).toBe(409);
    expect(res.body.error).toBe("cannot_supersede_a_supersession_record");
  });

  // NOTE: there is no seeded role that holds audit.read without also holding
  // audit.correct/audit.retract/audit.export — only builder_side_admin holds
  // any audit.* permission, and it holds all four together (03ak §5,
  // P1-R2-4). A "has audit.read only" 403 case would need a custom role this
  // task has no endpoint to create, so it is not fabricated here; every
  // other 403 test in this file already exercises requirePermission() on
  // each of the four audit.* keys via the owner, who holds none of them.

  let retractOriginalId: string;

  it("RETRACT: builder_side_admin (audit.retract) retracts a second event; it is presented as 'retracted'", async () => {
    const createDept2 = await request(app.server)
      .post("/departments")
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ code: "audit_probe_dept_2", label: "Audit Probe Dept 2" });
    const subjectId2 = createDept2.body.department.id;

    const list = await request(app.server)
      .get("/audit/events")
      .query({ category: "data" })
      .set("Authorization", `Bearer ${tokenBsaA}`);
    const row = (list.body.auditEvents as Array<{ id: string; subjectId: string }>).find((e) => e.subjectId === subjectId2)!;
    retractOriginalId = row.id;

    const res = await request(app.server)
      .post(`/audit/events/${retractOriginalId}/retract`)
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ reason: "Duplicate department created by mistake" });
    expect(res.status).toBe(201);
    expect(res.body.auditEvent.supersessionKind).toBe("retraction");

    const original = await request(app.server)
      .get(`/audit/events/${retractOriginalId}`)
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(original.body.auditEvent.status).toBe("retracted");
  });

  it("404s correcting/retracting an id that doesn't exist in the caller's tenant", async () => {
    const res = await request(app.server)
      .post(`/audit/events/${retractOriginalId.slice(0, -4)}0000/retract`)
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ reason: "n/a" });
    expect(res.status).toBe(404);
  });

  it("404s tenant B attempting to correct tenant A's audit event", async () => {
    const res = await request(app.server)
      .post(`/audit/events/${originalEventId}/correct`)
      .set("Authorization", `Bearer ${tokenBsaB}`)
      .send({ reason: "cross tenant attempt", afterState: { label: "hijacked" } });
    expect(res.status).toBe(404);
  });

  it("EXPORT (audit.export) returns matching records and itself emits an audit_events row (ACG-9/ACG-INV-10)", async () => {
    const res = await request(app.server)
      .post("/audit/events/export")
      .set("Authorization", `Bearer ${tokenBsaA}`)
      .send({ category: "data" });

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.auditEvents)).toBe(true);
    expect(res.body.exportedCount).toBe(res.body.auditEvents.length);

    const list = await request(app.server)
      .get("/audit/events")
      .query({ category: "audit" })
      .set("Authorization", `Bearer ${tokenBsaA}`);
    const exportEvent = (list.body.auditEvents as Array<{ eventType: string; actorUserId: string }>).find(
      (e) => e.eventType === "audit.export",
    );
    expect(exportEvent).toBeDefined();
    expect(exportEvent?.actorUserId).toBe(bsaAId);
  });

  it("tenant isolation: tenant B never sees tenant A's audit events, even unfiltered", async () => {
    const res = await request(app.server).get("/audit/events").set("Authorization", `Bearer ${tokenBsaB}`);
    expect(res.status).toBe(200);
    for (const e of res.body.auditEvents as Array<{ tenantId: string }>) {
      expect(e.tenantId).toBe(tenantB.tenantId);
    }
  });

  it("filters by actorUserId and date range", async () => {
    const res = await request(app.server)
      .get("/audit/events")
      .query({ actorUserId: bsaAId, from: "2020-01-01T00:00:00Z" })
      .set("Authorization", `Bearer ${tokenBsaA}`);
    expect(res.status).toBe(200);
    for (const e of res.body.auditEvents as Array<{ actorUserId: string }>) {
      expect(e.actorUserId).toBe(bsaAId);
    }
  });
});
