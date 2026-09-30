// apps/api/test/phase1-audit-completeness-gate.test.ts
//
// Audit Completeness Gate (ACG-1…ACG-9, PO LOCKED) against the extended
// audit_events table. Beads Final-Verison-20t; design record 03ak §6–§7; the
// checklist IDs (P1-ACG-…) are 03ak §10.
//
// Every audit row these tests write is written inside a transaction that is
// ALWAYS rolled back (inRolledBackTx). That is not a convenience: audit rows
// are append-only for every role (R6), and since ACG-8 the tenants FK is
// ON DELETE RESTRICT — a test tenant that kept an audit row could never be
// torn down. Expected failures inside those transactions run in SAVEPOINTs.
//
// Everything runs as crm_app through withTenantContext(); nothing bypasses
// RLS.

import { randomUUID } from "node:crypto";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import {
  assignRole,
  closeDbConnection,
  createUser,
  deleteTenant,
  getRoleIdByKey,
  provisionTenant,
  type TestTenant,
} from "./support/provision.js";
import { extractRows } from "./support/rows.js";
import { inRolledBackTx, pgError, pgErrorInSavepoint, q, rows } from "./support/phase1.js";

// Inside the pre-created partition runway (2026-09 … 2027-09) regardless of
// the wall clock, so the suite does not start failing when now() passes the
// last declared partition — that failure belongs to partition monitoring.
const T0 = "2026-10-15T10:00:00Z";
const T1 = "2026-10-16T10:00:00Z";
const T2 = "2026-10-17T10:00:00Z";

describe("Audit Completeness Gate — audit_events (ACG-1…ACG-9)", () => {
  let A: TestTenant;
  let B: TestTenant;
  let adminA: string; // holds builder_side_admin
  let ownerA: string; // holds owner (no audit.* since Phase 1)
  let adminB: string;

  beforeAll(async () => {
    A = await provisionTenant("p1acg-a");
    B = await provisionTenant("p1acg-b");
    adminA = await createUser(A.tenantId, "bsa-a");
    ownerA = await createUser(A.tenantId, "owner-a");
    adminB = await createUser(B.tenantId, "bsa-b");
    await assignRole(A.tenantId, adminA, await getRoleIdByKey(A.tenantId, "builder_side_admin"));
    await assignRole(A.tenantId, ownerA, await getRoleIdByKey(A.tenantId, "owner"));
    await assignRole(B.tenantId, adminB, await getRoleIdByKey(B.tenantId, "builder_side_admin"));
  });

  afterAll(async () => {
    await deleteTenant(A.tenantId);
    await deleteTenant(B.tenantId);
    await closeDbConnection();
  });

  // An ordinary business/data event with ACG-2 before/after values.
  const insertOriginal = (tenantId: string, id: string) => sql`
    INSERT INTO audit_events (id, tenant_id, occurred_at, event_type, event_category,
                              actor_type, actor_user_id, actor_label,
                              subject_type, subject_id, before_state, after_state)
    VALUES (${id}, ${tenantId}, ${T0}, 'employee.manager_changed', 'data',
            'system', NULL, 'org-sync', 'employee', gen_random_uuid(),
            '{"reports_to":"old-manager"}'::jsonb, '{"reports_to":"new-manager"}'::jsonb)
  `;

  const supersede = (
    tenantId: string,
    opts: {
      target: string;
      targetAt?: string;
      kind: "correction" | "retraction";
      actor: string | null;
      reason?: string | null;
      afterState?: string | null;
      occurredAt?: string;
      actorType?: string;
    },
  ) => sql`
    INSERT INTO audit_events (tenant_id, occurred_at, event_type, event_category,
                              actor_type, actor_user_id, actor_label,
                              supersedes_event_id, supersedes_occurred_at,
                              supersession_kind, supersession_reason, after_state)
    VALUES (${tenantId}, ${opts.occurredAt ?? T1},
            ${opts.kind === "correction" ? "audit.event_corrected" : "audit.event_retracted"}, 'audit',
            ${opts.actorType ?? "user"}, ${opts.actor}, 'Builder-Side Admin (test)',
            ${opts.target}, ${opts.targetAt ?? T0},
            ${opts.kind}, ${opts.reason === undefined ? "Entered against the wrong employee" : opts.reason},
            ${opts.afterState === undefined ? null : opts.afterState}::jsonb)
    RETURNING id
  `;

  // ---------------------------------------------------------------------------
  // ACG-1 / ACG-2 — coverage and contents
  // ---------------------------------------------------------------------------
  describe("ACG-1 coverage and ACG-2 contents", () => {
    it("records structured before-and-after values and reads them back unchanged (P1-ACG-2a)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const id = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, id));
        const r = await rows(tx, sql`SELECT before_state, after_state FROM audit_events WHERE id = ${id}`);
        expect(r[0].before_state).toEqual({ reports_to: "old-manager" });
        expect(r[0].after_state).toEqual({ reports_to: "new-manager" });
      });
    });

    it("before/after must be JSON objects when present (P1-ACG-2b)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const err = await pgErrorInSavepoint(
          tx,
          sql`INSERT INTO audit_events (tenant_id, occurred_at, event_type, before_state)
              VALUES (${A.tenantId}, ${T0}, 'x.y', '"a string"'::jsonb)`,
        );
        expect(err.code).toBe("23514");
        expect(err.constraint_name).toBe("audit_events_before_state_is_object");
      });
    });

    it("a pre-authentication security event (failed login: tenant known from the subdomain, no user) is recordable (P1-ACG-1a)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const r = await rows(
          tx,
          sql`INSERT INTO audit_events (tenant_id, occurred_at, event_type, event_category,
                                        actor_type, actor_user_id, actor_label, payload, ip_address)
              VALUES (${A.tenantId}, ${T0}, 'auth.login_failed', 'security',
                      'anonymous', NULL, NULL, '{"attempted_email":"someone@example.test"}'::jsonb, '203.0.113.7')
              RETURNING actor_type, event_category`,
        );
        expect(r[0]).toEqual({ actor_type: "anonymous", event_category: "security" });
      });
    });

    it("event vocabularies stay closed: an unknown actor_type or category is refused (P1-ACG-1b)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const a = await pgErrorInSavepoint(
          tx,
          sql`INSERT INTO audit_events (tenant_id, occurred_at, event_type, actor_type)
              VALUES (${A.tenantId}, ${T0}, 'x.y', 'hacker')`,
        );
        expect(a.constraint_name).toBe("audit_events_actor_type_check");
        const c = await pgErrorInSavepoint(
          tx,
          sql`INSERT INTO audit_events (tenant_id, occurred_at, event_type, event_category)
              VALUES (${A.tenantId}, ${T0}, 'x.y', 'misc')`,
        );
        expect(c.constraint_name).toBe("audit_events_event_category_check");
      });
    });
  });

  // ---------------------------------------------------------------------------
  // ACG-3/4/6/7 — edit or delete = append a supersession record (AGX-10)
  // ---------------------------------------------------------------------------
  describe("ACG-3/ACG-4/ACG-6/ACG-7 — correction and retraction by supersession", () => {
    it("the Builder-Side Admin retracts an event: a new record is appended and the original row is untouched (P1-ACG-3a)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const original = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, original));
        const before = await rows(tx, sql`SELECT * FROM audit_events WHERE id = ${original}`);

        const r = await rows(tx, supersede(A.tenantId, { target: original, kind: "retraction", actor: adminA }));
        expect(r).toHaveLength(1);

        const after = await rows(tx, sql`SELECT * FROM audit_events WHERE id = ${original}`);
        expect(after).toEqual(before); // byte-for-byte unchanged
        const count = await rows(tx, sql`SELECT count(*)::int AS n FROM audit_events WHERE id = ${original} OR supersedes_event_id = ${original}`);
        expect(count[0].n).toBe(2);
      });
    });

    it("presentation follows the chain: the latest supersession decides whether the original shows as edited or deleted (P1-ACG-3b)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const original = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, original));
        await tx.execute(
          supersede(A.tenantId, {
            target: original,
            kind: "correction",
            actor: adminA,
            afterState: '{"reports_to":"corrected-manager"}',
            occurredAt: T1,
          }),
        );
        await tx.execute(supersede(A.tenantId, { target: original, kind: "retraction", actor: adminA, occurredAt: T2 }));
        const r = await rows(
          tx,
          sql`SELECT supersession_kind FROM audit_events
              WHERE supersedes_event_id = ${original}
              ORDER BY occurred_at DESC, recorded_at DESC, id DESC LIMIT 1`,
        );
        expect(r[0].supersession_kind).toBe("retraction");
      });
    });

    it("ACG-7: a supersession without a reason, or with a blank one, is refused (P1-ACG-7)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const original = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, original));
        const missing = await pgErrorInSavepoint(tx, supersede(A.tenantId, { target: original, kind: "retraction", actor: adminA, reason: null }));
        expect(missing.code).toBe("23514");
        expect(missing.constraint_name).toBe("audit_events_supersession_reason_required");
        const blank = await pgErrorInSavepoint(tx, supersede(A.tenantId, { target: original, kind: "retraction", actor: adminA, reason: "   " }));
        expect(blank.constraint_name).toBe("audit_events_supersession_reason_required");
      });
    });

    it("ACG-4: a user without audit.retract — even the tenant owner — cannot retract (P1-ACG-4a)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const original = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, original));
        const err = await pgErrorInSavepoint(tx, supersede(A.tenantId, { target: original, kind: "retraction", actor: ownerA }));
        expect(err.code).toBe("42501");
        expect(err.message).toMatch(/ACG-4/);
      });
    });

    it("ACG-4: a suspended Builder-Side Admin cannot correct (P1-ACG-4b)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const original = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, original));
        await tx.execute(sql`UPDATE users SET status = 'suspended' WHERE id = ${adminA}`);
        const err = await pgErrorInSavepoint(
          tx,
          supersede(A.tenantId, { target: original, kind: "correction", actor: adminA, afterState: '{"a":1}' }),
        );
        expect(err.code).toBe("42501");
      });
    });

    it("ACG-6: the edit/delete record must name its administrator — a system actor is refused (P1-ACG-6a)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const original = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, original));
        const err = await pgErrorInSavepoint(
          tx,
          supersede(A.tenantId, { target: original, kind: "retraction", actor: null, actorType: "system" }),
        );
        expect(err.code).toBe("23514");
        expect(err.constraint_name).toBe("audit_events_supersession_actor_identified");
      });
    });

    it("ACG-6: a correction must carry the corrected values (P1-ACG-6b)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const original = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, original));
        const err = await pgErrorInSavepoint(tx, supersede(A.tenantId, { target: original, kind: "correction", actor: adminA }));
        expect(err.constraint_name).toBe("audit_events_correction_has_after_state");
      });
    });

    it("ACG-6: the edit/delete record is itself immutable — it cannot be retracted, even by the Builder-Side Admin (P1-ACG-6c)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const original = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, original));
        const meta = await rows(tx, supersede(A.tenantId, { target: original, kind: "retraction", actor: adminA }));
        const err = await pgErrorInSavepoint(
          tx,
          supersede(A.tenantId, { target: meta[0].id as string, targetAt: T1, kind: "retraction", actor: adminA, occurredAt: T2 }),
        );
        expect(err.code).toBe("23514");
        expect(err.constraint_name).toBe("audit_events_supersession_target_not_meta");
      });
    });

    it("a tenant A admin cannot supersede tenant B's event (P1-ACG-4c)", async () => {
      const bEvent = randomUUID();
      // Tenant B's event exists only inside this rolled-back transaction; the
      // context is switched in-transaction with set_config (SET LOCAL's
      // parameterisable form) so both halves share one rollback.
      await inRolledBackTx(B.tenantId, async (tx) => {
        await tx.execute(insertOriginal(B.tenantId, bEvent));
        await tx.execute(sql`SELECT set_config('app.current_tenant_id', ${A.tenantId}, true)`);
        const err = await pgErrorInSavepoint(tx, supersede(A.tenantId, { target: bEvent, kind: "retraction", actor: adminA }));
        expect(err.code).toBe("23503");
      });
    });
  });

  // ---------------------------------------------------------------------------
  // R6 storage-layer immutability, retention (ACG-8) and isolation
  // ---------------------------------------------------------------------------
  describe("R6 immutability, ACG-8 retention, and tenant isolation of audit rows", () => {
    it("crm_app can neither UPDATE nor DELETE an audit row (P1-ACG-R6)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        const id = randomUUID();
        await tx.execute(insertOriginal(A.tenantId, id));
        const u = await pgErrorInSavepoint(tx, sql`UPDATE audit_events SET event_type = 'rewritten' WHERE id = ${id}`);
        expect(u.code).toBe("42501");
        const d = await pgErrorInSavepoint(tx, sql`DELETE FROM audit_events WHERE id = ${id}`);
        expect(d.code).toBe("42501");
      });
    });

    it("ACG-8: a tenant with audit history cannot be deleted — no cascade path erases it (P1-ACG-8)", async () => {
      await inRolledBackTx(A.tenantId, async (tx) => {
        await tx.execute(insertOriginal(A.tenantId, randomUUID()));
        const err = await pgErrorInSavepoint(tx, sql`DELETE FROM tenants WHERE id = ${A.tenantId}`);
        expect(err.code).toBe("23503");
        expect(err.constraint_name).toBe("audit_events_tenant_id_fkey");
      });
    });

    it("tenant B cannot see tenant A's audit rows, and cannot write rows stamped as tenant A (P1-ACG-R1a)", async () => {
      const aEvent = randomUUID();
      await inRolledBackTx(A.tenantId, async (tx) => {
        await tx.execute(insertOriginal(A.tenantId, aEvent));
        await tx.execute(sql`SELECT set_config('app.current_tenant_id', ${B.tenantId}, true)`);
        const seen = await rows(tx, sql`SELECT id FROM audit_events WHERE id = ${aEvent}`);
        expect(seen).toHaveLength(0);
        const forged = await pgErrorInSavepoint(
          tx,
          sql`INSERT INTO audit_events (tenant_id, occurred_at, event_type) VALUES (${A.tenantId}, ${T0}, 'forged')`,
        );
        expect(forged.code).toBe("42501");
      });
    });

    it("REGRESSION (Phase 0 leak): a partition cannot be read or written directly, bypassing the parent's policy (P1-ACG-R1b)", async () => {
      const partitions = await q(
        A.tenantId,
        sql`SELECT i.inhrelid::regclass::text AS name FROM pg_inherits i WHERE i.inhparent = 'audit_events'::regclass`,
      );
      expect(partitions.length).toBeGreaterThanOrEqual(13);
      for (const { name } of partitions) {
        const readErr = await pgError(q(A.tenantId, sql`SELECT count(*) FROM ${sql.identifier(name as string)}`));
        expect(readErr.code).toBe("42501");
        const writeErr = await pgError(
          q(A.tenantId, sql`INSERT INTO ${sql.identifier(name as string)} (tenant_id, occurred_at, event_type)
                            VALUES (${B.tenantId}, ${T0}, 'forged')`),
        );
        expect(writeErr.code).toBe("42501");
      }
    });

    it("with no tenant context, audit_events returns zero rows (P1-ACG-R1c)", async () => {
      // A committed row would outlive the test (append-only + RESTRICT), so
      // the probe insert and the context-free read share one rolled-back
      // transaction; clearing the GUC mid-transaction is the no-context case.
      await inRolledBackTx(A.tenantId, async (tx) => {
        await tx.execute(insertOriginal(A.tenantId, randomUUID()));
        await tx.execute(sql`SELECT set_config('app.current_tenant_id', '', true)`);
        const r = extractRows(await tx.execute(sql`SELECT count(*)::int AS n FROM audit_events`));
        expect(r[0].n).toBe(0);
      });
    });
  });

  // ---------------------------------------------------------------------------
  // ACG-5 / ACG-9 — visibility and export are distinct, reserved permissions
  // ---------------------------------------------------------------------------
  describe("ACG-5 / ACG-9 — permissions", () => {
    const holds = async (userId: string, key: string) =>
      withTenantContext(A.tenantId, async (tx) => {
        const r = extractRows(
          await tx.execute(sql`
            SELECT EXISTS (
              SELECT 1 FROM user_roles ur
              JOIN role_permissions rp ON rp.tenant_id = ur.tenant_id AND rp.role_id = ur.role_id
              JOIN permissions p ON p.tenant_id = rp.tenant_id AND p.id = rp.permission_id
              WHERE ur.user_id = ${userId} AND p.key = ${key}
            ) AS ok`),
        );
        return r[0].ok as boolean;
      });

    it("the Builder-Side Admin holds audit.read AND audit.export; the owner holds neither (P1-ACG-5/9)", async () => {
      expect(await holds(adminA, "audit.read")).toBe(true);
      expect(await holds(adminA, "audit.export")).toBe(true);
      expect(await holds(ownerA, "audit.read")).toBe(false);
      expect(await holds(ownerA, "audit.export")).toBe(false);
    });
  });
});
