// apps/api/src/routes/audit.ts
//
// Audit API (Beads issue Final-Verison-abf; docs/architecture/03ak-… §6,
// §11 item 3). List/read with the supersession chain resolved, correct,
// retract, export.
//
// THE HARD INVARIANTS ARE ENFORCED BY THE DATABASE, NOT HERE (03ak §6.4):
// append-only for every role including the owner (`audit_events_append_only`
// trigger), the mandatory-reason/named-actor/after-state CHECK constraints,
// and — the one this file leans on most — `audit_events_supersession_guard`,
// which independently re-checks that the actor holds audit.correct /
// audit.retract before allowing the INSERT, and refuses to let a
// supersession record itself be superseded. This file's permission checks
// (requirePermission below) are belt-and-suspenders alongside that trigger,
// the same philosophy the codebase already applies to tenant_id filters
// alongside RLS — not a replacement for it. Its job is a clean, chain-aware
// response shape and mapping the trigger's rejections to sensible HTTP
// status codes.
//
// SUPERSESSION CHAIN, RESOLVED FOR PRESENTATION (03ak §6.4 step 3): "An event
// whose latest supersession is a retraction is shown as deleted; a
// correction, as edited, with its after_state. Latest means occurred_at,
// then recorded_at, then id." Each primary event in the list/get response
// carries a `status` ('active' | 'corrected' | 'retracted') and, if
// superseded, a `supersession` object describing the latest one. Supersession
// records themselves (rows that carry supersedes_event_id) are left out of
// the list — they surface only nested under the event they supersede, since
// a supersession record can never itself be superseded (single-level chain,
// enforced by the guard trigger) — but GET /audit/events/:id can still fetch
// one directly by id, flagged `isSupersessionRecord: true`.

import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { sql, type SQL } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { sessionContextPreHandler } from "../middleware/session-context.js";
import { requirePermission } from "../middleware/require-permission.js";
import { extractRows } from "../lib/rows.js";
import { getActorLabel, recordAuditEvent } from "../lib/audit.js";

// Plain column list (no alias, no supersession join) — used by INSERT ...
// RETURNING, where there is no joined `a`/`s` to qualify against.
const AUDIT_COLUMNS_PLAIN = sql`
  id, tenant_id AS "tenantId", occurred_at AS "occurredAt", recorded_at AS "recordedAt",
  event_type AS "eventType", event_category AS "eventCategory",
  actor_type AS "actorType", actor_user_id AS "actorUserId", actor_label AS "actorLabel",
  subject_type AS "subjectType", subject_id AS "subjectId",
  payload, before_state AS "beforeState", after_state AS "afterState",
  supersedes_event_id AS "supersedesEventId", supersedes_occurred_at AS "supersedesOccurredAt",
  supersession_kind AS "supersessionKind", supersession_reason AS "supersessionReason"
`;

const AUDIT_SELECT = sql`
  a.id, a.tenant_id AS "tenantId", a.occurred_at AS "occurredAt", a.recorded_at AS "recordedAt",
  a.event_type AS "eventType", a.event_category AS "eventCategory",
  a.actor_type AS "actorType", a.actor_user_id AS "actorUserId", a.actor_label AS "actorLabel",
  a.subject_type AS "subjectType", a.subject_id AS "subjectId",
  a.payload, a.before_state AS "beforeState", a.after_state AS "afterState",
  a.supersedes_event_id AS "supersedesEventId", a.supersedes_occurred_at AS "supersedesOccurredAt",
  a.supersession_kind AS "supersessionKind", a.supersession_reason AS "supersessionReason",
  s.id AS "supersessionId", s.supersession_kind AS "appliedKind", s.supersession_reason AS "appliedReason",
  s.actor_user_id AS "appliedActorUserId", s.actor_label AS "appliedActorLabel",
  s.occurred_at AS "appliedOccurredAt", s.after_state AS "appliedAfterState"
`;

// LEFT JOIN LATERAL onto the latest row (if any) that supersedes this one —
// "latest" per 03ak §6.4 step 3: occurred_at, then recorded_at, then id.
const SUPERSESSION_JOIN = sql`
  LEFT JOIN LATERAL (
    SELECT * FROM audit_events sup
    WHERE sup.tenant_id = a.tenant_id
      AND sup.supersedes_event_id = a.id
      AND sup.supersedes_occurred_at = a.occurred_at
    ORDER BY sup.occurred_at DESC, sup.recorded_at DESC, sup.id DESC
    LIMIT 1
  ) s ON true
`;

interface AuditListQuery {
  actorUserId?: string;
  category?: string;
  from?: string;
  to?: string;
  limit?: string;
  offset?: string;
}

interface SupersedeBody {
  reason: string;
  afterState?: Record<string, unknown>;
}

interface ExportBody {
  actorUserId?: string;
  category?: string;
  from?: string;
  to?: string;
}

function shapeAuditRow(row: Record<string, unknown>) {
  const appliedKind = row.appliedKind as string | null;
  const status = appliedKind === "retraction" ? "retracted" : appliedKind === "correction" ? "corrected" : "active";

  return {
    id: row.id,
    tenantId: row.tenantId,
    occurredAt: row.occurredAt,
    recordedAt: row.recordedAt,
    eventType: row.eventType,
    eventCategory: row.eventCategory,
    actorType: row.actorType,
    actorUserId: row.actorUserId,
    actorLabel: row.actorLabel,
    subjectType: row.subjectType,
    subjectId: row.subjectId,
    payload: row.payload,
    beforeState: row.beforeState,
    afterState: row.afterState,
    isSupersessionRecord: row.supersedesEventId !== null && row.supersedesEventId !== undefined,
    status,
    supersession: row.supersessionId
      ? {
          id: row.supersessionId,
          kind: row.appliedKind,
          reason: row.appliedReason,
          actorUserId: row.appliedActorUserId,
          actorLabel: row.appliedActorLabel,
          occurredAt: row.appliedOccurredAt,
          afterState: row.appliedAfterState,
        }
      : null,
  };
}

function buildListConditions(tenantId: string, q: AuditListQuery): SQL[] {
  const conditions: SQL[] = [sql`a.tenant_id = ${tenantId}`, sql`a.supersedes_event_id IS NULL`];
  if (q.actorUserId) conditions.push(sql`a.actor_user_id = ${q.actorUserId}`);
  if (q.category) conditions.push(sql`a.event_category = ${q.category}`);
  if (q.from) conditions.push(sql`a.occurred_at >= ${q.from}`);
  if (q.to) conditions.push(sql`a.occurred_at <= ${q.to}`);
  return conditions;
}

export default async function auditRoutes(app: FastifyInstance): Promise<void> {
  app.addHook("preHandler", sessionContextPreHandler);

  app.get<{ Querystring: AuditListQuery }>(
    "/audit/events",
    { preHandler: requirePermission("audit.read") },
    async (request, reply) => {
      const { tenantId } = request.sessionContext!;
      const q = request.query ?? {};

      const limitInput = Number(q.limit);
      const limit = Number.isFinite(limitInput) && limitInput > 0 ? Math.min(limitInput, 200) : 50;
      const offsetInput = Number(q.offset);
      const offset = Number.isFinite(offsetInput) && offsetInput >= 0 ? offsetInput : 0;

      const conditions = buildListConditions(tenantId, q);

      const result = await withTenantContext(tenantId, (tx) =>
        tx.execute(sql`
          SELECT ${AUDIT_SELECT}
          FROM audit_events a
          ${SUPERSESSION_JOIN}
          WHERE ${sql.join(conditions, sql` AND `)}
          ORDER BY a.occurred_at DESC
          LIMIT ${limit} OFFSET ${offset}
        `),
      );

      await reply.send({ auditEvents: extractRows(result).map(shapeAuditRow) });
    },
  );

  app.get<{ Params: { id: string } }>(
    "/audit/events/:id",
    { preHandler: requirePermission("audit.read") },
    async (request, reply) => {
      const { tenantId } = request.sessionContext!;
      const result = await withTenantContext(tenantId, (tx) =>
        tx.execute(sql`
          SELECT ${AUDIT_SELECT}
          FROM audit_events a
          ${SUPERSESSION_JOIN}
          WHERE a.tenant_id = ${tenantId} AND a.id = ${request.params.id}
        `),
      );
      const [row] = extractRows(result);
      if (!row) {
        await reply.code(404).send({ error: "audit_event_not_found" });
        return;
      }
      await reply.send({ auditEvent: shapeAuditRow(row) });
    },
  );

  app.post<{ Params: { id: string }; Body: SupersedeBody }>(
    "/audit/events/:id/correct",
    { preHandler: requirePermission("audit.correct") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const { id } = request.params;
      const body = request.body ?? ({} as SupersedeBody);

      if (!body.reason || !body.reason.trim()) {
        await reply.code(400).send({ error: "reason_required" });
        return;
      }
      if (!body.afterState || typeof body.afterState !== "object" || Array.isArray(body.afterState)) {
        // ACG-6 "details of the edit": a correction must carry the corrected
        // values. The DB CHECK (audit_events_correction_has_after_state)
        // backstops this; this is the clean-response-shape half.
        await reply.code(400).send({ error: "after_state_required" });
        return;
      }

      await supersede(request, reply, {
        tenantId,
        actorUserId,
        targetId: id,
        kind: "correction",
        reason: body.reason,
        afterState: body.afterState,
      });
    },
  );

  app.post<{ Params: { id: string }; Body: SupersedeBody }>(
    "/audit/events/:id/retract",
    { preHandler: requirePermission("audit.retract") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const { id } = request.params;
      const body = request.body ?? ({} as SupersedeBody);

      if (!body.reason || !body.reason.trim()) {
        await reply.code(400).send({ error: "reason_required" });
        return;
      }

      await supersede(request, reply, {
        tenantId,
        actorUserId,
        targetId: id,
        kind: "retraction",
        reason: body.reason,
        afterState: null,
      });
    },
  );

  app.post<{ Body: ExportBody }>(
    "/audit/events/export",
    { preHandler: requirePermission("audit.export") },
    async (request, reply) => {
      const { tenantId, userId: actorUserId } = request.sessionContext!;
      const body = request.body ?? ({} as ExportBody);
      const conditions = buildListConditions(tenantId, body);

      const records = await withTenantContext(tenantId, async (tx) => {
        const result = await tx.execute(sql`
          SELECT ${AUDIT_SELECT}
          FROM audit_events a
          ${SUPERSESSION_JOIN}
          WHERE ${sql.join(conditions, sql` AND `)}
          ORDER BY a.occurred_at DESC
        `);
        const shaped = extractRows(result).map(shapeAuditRow);

        // ACG-9 / ACG-INV-10: the export action is itself an audited admin
        // action. Recorded inside the same transaction the export ran in, so
        // an export can never happen without leaving this trail.
        const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
        await recordAuditEvent(tx, {
          tenantId,
          actorUserId,
          actorLabel,
          eventType: "audit.export",
          eventCategory: "audit",
          subjectType: "audit_export",
          subjectId: null,
          payload: { filters: body, resultCount: shaped.length },
        });

        return shaped;
      });

      await reply.send({
        auditEvents: records,
        exportedAt: new Date().toISOString(),
        exportedCount: records.length,
      });
    },
  );
}

interface SupersedeOptions {
  tenantId: string;
  actorUserId: string;
  targetId: string;
  kind: "correction" | "retraction";
  reason: string;
  afterState: Record<string, unknown> | null;
}

/**
 * Shared body for /audit/events/:id/correct and /audit/events/:id/retract:
 * loads the target, rejects (with a clean 409, ahead of the DB guard) an
 * attempt to supersede a supersession record, inserts the new supersession
 * row, and lets the `audit_events_supersession_guard` trigger have the final
 * word on ACG-4 authorization — a rejection there surfaces as a 403.
 */
async function supersede(request: FastifyRequest, reply: FastifyReply, opts: SupersedeOptions): Promise<void> {
  const { tenantId, actorUserId, targetId, kind, reason, afterState } = opts;

  try {
    const outcome = await withTenantContext(tenantId, async (tx) => {
      const targetResult = await tx.execute(sql`
        SELECT id, occurred_at AS "occurredAt", supersedes_event_id AS "supersedesEventId"
        FROM audit_events
        WHERE tenant_id = ${tenantId} AND id = ${targetId}
      `);
      const [target] = extractRows(targetResult);
      if (!target) return { outcome: "not_found" as const };
      if (target.supersedesEventId) return { outcome: "target_is_supersession_record" as const };

      const actorLabel = await getActorLabel(tx, tenantId, actorUserId);
      const result = await tx.execute(sql`
        INSERT INTO audit_events (
          tenant_id, event_type, event_category, actor_type, actor_user_id, actor_label,
          subject_type, subject_id,
          supersedes_event_id, supersedes_occurred_at, supersession_kind, supersession_reason, after_state
        )
        VALUES (
          ${tenantId}, ${kind === "correction" ? "audit.correct" : "audit.retract"}, 'audit',
          'user', ${actorUserId}, ${actorLabel},
          'audit_event', ${target.id},
          ${target.id}, ${target.occurredAt as string}, ${kind}, ${reason},
          ${afterState !== null ? JSON.stringify(afterState) : null}::jsonb
        )
        RETURNING ${AUDIT_COLUMNS_PLAIN}
      `);
      const [row] = extractRows(result);
      return { outcome: "created" as const, row };
    });

    if (outcome.outcome === "not_found") {
      await reply.code(404).send({ error: "audit_event_not_found" });
      return;
    }
    if (outcome.outcome === "target_is_supersession_record") {
      await reply.code(409).send({
        error: "cannot_supersede_a_supersession_record",
        detail: "ACG-6: a supersession record is itself immutable; supersede the original event instead",
      });
      return;
    }

    await reply.code(201).send({
      auditEvent: {
        ...outcome.row,
        isSupersessionRecord: true,
        status: "active",
        supersession: null,
      },
    });
  } catch (err) {
    const message = (err as Error & { code?: string }).message;
    const pgCode = (err as { code?: string; cause?: { code?: string } }).code ?? (err as { cause?: { code?: string } }).cause?.code;
    // ACG-4: the audit_events_supersession_guard trigger raises SQLSTATE
    // 42501 (insufficient_privilege) when the actor lacks audit.correct/
    // audit.retract at insert time, OR is not an active, non-deleted user —
    // a check requirePermission() above does not itself make. Real
    // belt-and-suspenders: this is reachable even after the preHandler
    // passed (e.g. the actor was deactivated between the check and the
    // INSERT), not merely a duplicate of it.
    if (pgCode === "42501") {
      await reply.code(403).send({ error: "permission_denied", detail: message });
      return;
    }
    request.log.error(err, `failed to ${opts.kind} audit event`);
    await reply.code(400).send({ error: `audit_${opts.kind === "correction" ? "correct" : "retract"}_failed`, detail: message });
  }
}
