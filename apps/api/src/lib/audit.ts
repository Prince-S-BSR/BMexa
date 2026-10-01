// apps/api/src/lib/audit.ts
//
// Shared helper so every mutating Phase 1 product route (Beads issue
// Final-Verison-abf) emits its `audit_events` row the same way, inside the
// SAME withTenantContext() transaction as the mutation it records — atomic
// per ACG-2 ("relevant before/after values"), and per the issue brief's
// requirement #7 that every create/update/grant/revoke/assign path is
// audited, not just the audit-domain's own correct/retract/export endpoints.
//
// This does not re-derive any of the hard invariants the database already
// enforces (0004 §3.4/§3.5, 03ak §6.4): append-only, the supersession guard,
// the mandatory-reason/actor CHECKs. It exists only to (a) stop seven
// call-sites from hand-writing the same INSERT with slightly different
// column lists, and (b) resolve `actor_label` the same way everywhere, since
// `audit_events.actor_label` has no FK — it is a frozen point-in-time label,
// by design (R6: never re-joined to live tables to render history).

import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { extractRows } from "./rows.js";

type Tx = Parameters<Parameters<typeof withTenantContext>[1]>[0];

export interface RecordAuditEventInput {
  tenantId: string;
  actorUserId: string;
  actorLabel: string;
  eventType: string;
  /** One of audit_events_event_category_check's values (0000/0003). Callers pick deliberately; there is no default. */
  eventCategory: "general" | "auth" | "rbac" | "billing" | "data" | "integration" | "admin" | "security" | "audit";
  subjectType?: string | null;
  subjectId?: string | null;
  beforeState?: Record<string, unknown> | null;
  afterState?: Record<string, unknown> | null;
  payload?: Record<string, unknown>;
}

export interface RecordedAuditEvent {
  id: string;
  occurredAt: string;
}

/**
 * Resolves the human-readable, frozen `actor_label` for a user at the moment
 * of the action — full name if set, else email. Falls back to the raw id if
 * the user row cannot be found (should not happen for a caller that just
 * authenticated, but fail soft rather than block the mutation it is
 * annotating).
 */
export async function getActorLabel(tx: Tx, tenantId: string, userId: string): Promise<string> {
  const result = await tx.execute(sql`
    SELECT email, full_name FROM users WHERE tenant_id = ${tenantId} AND id = ${userId}
  `);
  const [row] = extractRows(result);
  if (!row) return userId;
  return (row.full_name as string | null) ?? (row.email as string) ?? userId;
}

/**
 * Inserts one `audit_events` row. Must be called with the `tx` handed to the
 * surrounding `withTenantContext()` callback so it commits or rolls back
 * atomically with the mutation it documents — never call this outside the
 * transaction whose effect it records.
 */
export async function recordAuditEvent(tx: Tx, input: RecordAuditEventInput): Promise<RecordedAuditEvent> {
  const result = await tx.execute(sql`
    INSERT INTO audit_events (
      tenant_id, event_type, event_category, actor_type, actor_user_id, actor_label,
      subject_type, subject_id, before_state, after_state, payload
    )
    VALUES (
      ${input.tenantId}, ${input.eventType}, ${input.eventCategory}, 'user', ${input.actorUserId}, ${input.actorLabel},
      ${input.subjectType ?? null}, ${input.subjectId ?? null},
      ${input.beforeState !== undefined && input.beforeState !== null ? JSON.stringify(input.beforeState) : null}::jsonb,
      ${input.afterState !== undefined && input.afterState !== null ? JSON.stringify(input.afterState) : null}::jsonb,
      ${JSON.stringify(input.payload ?? {})}::jsonb
    )
    RETURNING id, occurred_at
  `);
  const [row] = extractRows(result);
  return { id: row.id as string, occurredAt: String(row.occurred_at) };
}
