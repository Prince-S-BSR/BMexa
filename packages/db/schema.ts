// packages/db/schema.ts
//
// Drizzle TypeScript schema — the typed half of the database.
//
// TWO SOURCES OF TRUTH, AND WHICH ONE WINS
//   * drizzle/0000_phase0_foundation.sql (a verbatim copy of
//     docs/architecture/schema-phase-0.sql) and 0001_session_lookup_function.sql
//     are hand-written and were applied as-is. They remain authoritative for
//     every Phase 0 object, including the ones this file does not mention
//     (indexes, triggers, provisioning functions, the 13 audit partitions).
//   * From Phase 1 on (0002+), table DDL is GENERATED from this file by
//     `npm run db:generate` (drizzle-kit). Anything the Drizzle DSL cannot
//     express — FORCE ROW LEVEL SECURITY, triggers, functions, grants, seed
//     backfills — lives in a drizzle-kit `--custom` migration next to it.
//
// PHASE 0 TABLES TYPED HERE
//   `tenants`, `users`, `roles`, `permissions`, `role_permissions`,
//   `user_roles` and `audit_events` are typed because Phase 1 references or
//   alters them. Their definitions mirror the live DDL column-for-column, and
//   every constraint that Phase 1 references or changes carries the EXACT
//   PostgreSQL-assigned name (e.g. `audit_events_tenant_id_fkey`) so a
//   generated DROP/ADD targets the real object. Phase 0 indexes are NOT
//   mirrored: drizzle-kit only diffs what both snapshots know about, so
//   omitting them is inert.
//
//   How the diff baseline was produced (see packages/db/README.md): the
//   Phase 0 part of this file was generated ONCE into a throwaway folder and
//   its snapshot committed as drizzle/meta/0001_snapshot.json, i.e. "what
//   0000+0001 already built". drizzle-kit therefore emits only the Phase 1
//   delta and never tries to re-CREATE a Phase 0 table.
//
// The remaining Phase 0 tables (subscriptions, entitlements, sessions, MFA,
// the six lead/deal masters) are still SQL-only; type them when a feature
// needs them, by the same procedure.
//
// Design record for everything below: docs/architecture/
// 03ak-phase1-organization-users-and-audit-completeness-gate-data-model.md
// (cited as "03ak §n"). Every Phase 1 column cites the decision it serves.

import {
  pgTable,
  uuid,
  text,
  jsonb,
  boolean,
  integer,
  timestamp,
  inet,
  index,
  uniqueIndex,
  unique,
  check,
  foreignKey,
  primaryKey,
  pgPolicy,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// -----------------------------------------------------------------------------
// R1 — the one RLS policy every table carries.
// -----------------------------------------------------------------------------
// Identical in shape to every policy in 0000 §7: PERMISSIVE, FOR ALL, TO
// PUBLIC, keyed on app_current_tenant_id(), which returns NULL (so the policy
// matches ZERO rows) when no tenant context was SET LOCAL. Declaring it here
// makes drizzle-kit emit ENABLE ROW LEVEL SECURITY + CREATE POLICY for new
// tables. FORCE ROW LEVEL SECURITY cannot be expressed in the DSL and is
// applied by the companion custom migration (0003) — both halves are checked
// by the schema-conformance test.
const tenantIsolation = () =>
  pgPolicy("tenant_isolation", {
    as: "permissive",
    for: "all",
    to: "public",
    using: sql`tenant_id = app_current_tenant_id()`,
    withCheck: sql`tenant_id = app_current_tenant_id()`,
  });

// =============================================================================
// PHASE 0 TABLES (built by 0000; typed here, altered only where marked)
// =============================================================================

export const tenants = pgTable(
  "tenants",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    // Generated column (`GENERATED ALWAYS AS (id) STORED`) in the SQL migration —
    // see schema-phase-0.sql §1 for why. Drizzle just needs to know the column
    // exists and is not null; it never writes to it.
    tenantId: uuid("tenant_id").notNull(),
    subdomain: text("subdomain").notNull(),
    name: text("name").notNull(),
    status: text("status").notNull().default("provisioning"),
    customAttributes: jsonb("custom_attributes").notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  () => [tenantIsolation()],
);

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id").notNull(),
    email: text("email").notNull(),
    passwordHash: text("password_hash"),
    fullName: text("full_name"),
    status: text("status").notNull().default("invited"),
    mfaEnrolledAt: timestamp("mfa_enrolled_at", { withTimezone: true }),
    mfaEnabled: boolean("mfa_enabled").notNull().default(false),
    lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
    failedLoginCount: integer("failed_login_count").notNull().default(0),
    lockedUntil: timestamp("locked_until", { withTimezone: true }),
    customAttributes: jsonb("custom_attributes").notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  (t) => [unique("users_tenant_id_id_key").on(t.tenantId, t.id), tenantIsolation()],
);

// R2: roles are tenant-scoped rows; application logic never branches on
// `key` or `name` — it branches on permissions and on semantic columns
// (`requires_2fa`, and from Phase 1 `grant_scope`).
export const roles = pgTable(
  "roles",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id").notNull(),
    key: text("key").notNull(),
    name: text("name").notNull(),
    description: text("description"),
    isSystem: boolean("is_system").notNull().default(false),
    requiresTwoFactor: boolean("requires_2fa").notNull().default(false),
    // [PHASE 1 — 03ak §4.4; PO-AI1·1, PO-AI1·2; R2 "capabilities are columns
    // on the role, not names"] WHERE a role may be granted:
    //   'tenant'  — tenant-wide, through user_roles (every Phase 0 role).
    //   'project' — only per project, through project_role_grants (the seeded
    //               Site Head and Project Head roles, and any tenant-defined
    //               role of the same kind).
    // Composite FKs from both grant tables pin the scope, so a project role
    // cannot be granted tenant-wide (03ai R-AI-1: "grants are left tenant-wide
    // — D becomes Site Head everywhere") and vice versa. It is a closed,
    // product-owned vocabulary that authorization reads, so it is a typed,
    // CHECK-constrained column (architecture note §9.3, last row), not an R4
    // master.
    grantScope: text("grant_scope").notNull().default("tenant"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("roles_tenant_id_id_key").on(t.tenantId, t.id),
    // [PHASE 1] Target of the scope-pinning composite FKs above.
    unique("roles_tenant_id_id_grant_scope_key").on(t.tenantId, t.id, t.grantScope),
    check("roles_grant_scope_valid", sql`grant_scope IN ('tenant', 'project')`),
    tenantIsolation(),
  ],
);

// R2: the fixed permission vocabulary. Phase 1 adds audit.export,
// audit.correct and audit.retract to the seeded catalogue (0003; 03ak §5.3).
export const permissions = pgTable(
  "permissions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id").notNull(),
    key: text("key").notNull(),
    resource: text("resource").notNull(),
    action: text("action").notNull(),
    description: text("description"),
    requiresFeatureKey: text("requires_feature_key"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [unique("permissions_tenant_id_id_key").on(t.tenantId, t.id), tenantIsolation()],
);

export const rolePermissions = pgTable(
  "role_permissions",
  {
    tenantId: uuid("tenant_id").notNull(),
    roleId: uuid("role_id").notNull(),
    permissionId: uuid("permission_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ name: "role_permissions_pkey", columns: [t.roleId, t.permissionId] }),
    tenantIsolation(),
  ],
);

// Tenant-wide role grants (Phase 0). Project-scoped grants are a separate
// table (project_role_grants, below) rather than a rewrite of this one: the
// PRIMARY KEY (user_id, role_id) change that NI-17 would otherwise need is
// AD-01 §L.3's "most dangerous migration", and every Phase 0 auth path and
// test reads this table as-is. 03ak §4.5 records the trade.
export const userRoles = pgTable(
  "user_roles",
  {
    tenantId: uuid("tenant_id").notNull(),
    userId: uuid("user_id").notNull(),
    roleId: uuid("role_id").notNull(),
    grantedBy: uuid("granted_by"),
    grantedAt: timestamp("granted_at", { withTimezone: true }).notNull().defaultNow(),
    // [PHASE 1 — 03ak §4.4] Constant 'tenant'. Exists only to carry the
    // composite FK below, which makes it impossible to grant a
    // grant_scope = 'project' role (Site Head / Project Head) tenant-wide.
    // Defaulted, so every existing INSERT keeps working unchanged.
    roleGrantScope: text("role_grant_scope").notNull().default("tenant"),
  },
  (t) => [
    primaryKey({ name: "user_roles_pkey", columns: [t.userId, t.roleId] }),
    check("user_roles_role_grant_scope_is_tenant", sql`role_grant_scope = 'tenant'`),
    foreignKey({
      name: "user_roles_role_scope_fk",
      columns: [t.tenantId, t.roleId, t.roleGrantScope],
      foreignColumns: [roles.tenantId, roles.id, roles.grantScope],
    }).onDelete("cascade"),
    tenantIsolation(),
  ],
);

// -----------------------------------------------------------------------------
// audit_events — R6 event log, extended for the Audit Completeness Gate.
// -----------------------------------------------------------------------------
// PARTITIONED BY RANGE (occurred_at) in 0000 (13 monthly partitions). Drizzle
// does not model partitioning; that is harmless because 0000 created the
// table and drizzle-kit only ever emits ALTERs against it, which PostgreSQL
// propagates to every partition.
//
// STORAGE-LAYER IMMUTABILITY IS UNCHANGED (R6). No role, including the
// Builder-Side Admin, is ever granted UPDATE or DELETE. 0003 additionally
// installs a trigger that rejects UPDATE/DELETE for every role, so the
// guarantee no longer depends on out-of-band grants alone.
//
// ACG-3/ACG-4 "edit or delete" is implemented by APPENDING a supersession
// record (03ak §6 — the AGX-10 resolution; architect-derived mechanism, not
// PO-specified). Presentation follows the chain: an event superseded by a
// 'retraction' is shown as deleted, by a 'correction' as edited; the latest
// supersession (occurred_at, then recorded_at, then id) wins. Nothing is ever
// rewritten.
export const auditEvents = pgTable(
  "audit_events",
  {
    id: uuid("id").notNull().defaultRandom(),
    // R1. Stays NOT NULL (03ak §6.2 — ACG-1 pre-auth events are recorded under
    // the tenant resolved from the subdomain, with actor_type 'anonymous';
    // events that resolve to no tenant are platform telemetry, not a tenant's
    // audit record).
    tenantId: uuid("tenant_id").notNull(),
    occurredAt: timestamp("occurred_at", { withTimezone: true }).notNull().defaultNow(),
    recordedAt: timestamp("recorded_at", { withTimezone: true }).notNull().defaultNow(),
    eventType: text("event_type").notNull(),
    eventCategory: text("event_category").notNull().default("general"),
    actorType: text("actor_type").notNull().default("user"),
    actorUserId: uuid("actor_user_id"),
    actorLabel: text("actor_label"),
    subjectType: text("subject_type"),
    subjectId: uuid("subject_id"),
    payload: jsonb("payload").notNull().default({}),
    requestId: text("request_id"),
    ipAddress: inet("ip_address"),

    // [PHASE 1 — ACG-2 "before-and-after values … wherever applicable"; Spec
    // §54 "relevant before/after values"] Two nullable objects, each holding
    // ONLY the fields the event changed, frozen at write time (R6: never
    // re-joined to live tables). NULL = not applicable (e.g. a login). Two
    // columns rather than one diff: "old → new" renders without diff
    // semantics, and a retraction's before_state can hold the original's
    // values on its own. Sensitive fields (AD-G-7) are the emitter's
    // responsibility — see 03ak §6.3.
    beforeState: jsonb("before_state"),
    afterState: jsonb("after_state"),

    // [PHASE 1 — ACG-3, ACG-4, ACG-6, ACG-7] Supersession: this row corrects
    // or retracts an EARLIER row. The earlier row is never touched.
    //   supersedes_event_id / supersedes_occurred_at — the target (composite,
    //     because the partitioned table's key is (id, occurred_at)); a
    //     same-tenant self-FK guarantees it exists in this tenant.
    //   supersession_kind — 'correction' (the PO's "edit") or 'retraction'
    //     (the PO's "delete"). Closed product vocabulary: CHECK, not R4.
    //   supersession_reason — ACG-7's mandatory reason; non-blank.
    // The ACG-6 "administrator identity" is actor_user_id + actor_label,
    // required by CHECK on every supersession row; "timestamp" is
    // occurred_at/recorded_at; "details" are before_state/after_state/payload.
    // Authorization (ACG-4: Builder-Side Admin only, via the audit.correct /
    // audit.retract permissions) and "a supersession record cannot itself be
    // superseded" (ACG-6: "a separate immutable record") are enforced by the
    // audit_events_supersession_guard trigger in 0003.
    supersedesEventId: uuid("supersedes_event_id"),
    supersedesOccurredAt: timestamp("supersedes_occurred_at", { withTimezone: true }),
    supersessionKind: text("supersession_kind"),
    supersessionReason: text("supersession_reason"),
  },
  (t) => [
    primaryKey({ name: "audit_events_pkey", columns: [t.id, t.occurredAt] }),
    // [PHASE 1 — ACG-8 "no automatic expiration or age-based deletion"] Was
    // ON DELETE CASCADE, which deleted a tenant's entire audit history with
    // its tenant row. Now RESTRICT: a tenant with audit history cannot be
    // hard-deleted until a Legal/Compliance-validated closure procedure
    // exists (Spec §56; architecture note Q15). Same constraint name, so the
    // generated migration drops and re-adds exactly this FK.
    foreignKey({
      name: "audit_events_tenant_id_fkey",
      columns: [t.tenantId],
      foreignColumns: [tenants.id],
    }).onDelete("restrict"),
    // [PHASE 1 — ACG-1 security events] 'anonymous' = a request that
    // resolved a tenant (subdomain) but no authenticated user, e.g. a failed
    // login. Product-owned vocabulary; CHECK, as in 0000.
    check(
      "audit_events_actor_type_check",
      sql`actor_type IN ('user', 'system', 'api_key', 'integration', 'support', 'anonymous')`,
    ),
    // [PHASE 1 — ACG-1 "security events"; ACG-6 meta-records] Adds 'security'
    // and 'audit'. Business-domain categories (booking, inventory, lead …)
    // arrive with their phases (ACG-INV-1; 03ak §9).
    check(
      "audit_events_event_category_check",
      sql`event_category IN ('general', 'auth', 'rbac', 'billing', 'data', 'integration', 'admin', 'security', 'audit')`,
    ),
    check(
      "audit_events_before_state_is_object",
      sql`before_state IS NULL OR jsonb_typeof(before_state) = 'object'`,
    ),
    check(
      "audit_events_after_state_is_object",
      sql`after_state IS NULL OR jsonb_typeof(after_state) = 'object'`,
    ),
    check(
      "audit_events_supersession_all_or_nothing",
      sql`(supersedes_event_id IS NULL AND supersedes_occurred_at IS NULL AND supersession_kind IS NULL AND supersession_reason IS NULL)
          OR (supersedes_event_id IS NOT NULL AND supersedes_occurred_at IS NOT NULL AND supersession_kind IS NOT NULL)`,
    ),
    check(
      "audit_events_supersession_kind_valid",
      sql`supersession_kind IS NULL OR supersession_kind IN ('correction', 'retraction')`,
    ),
    // ACG-7: "must provide a reason before every audit record edit or deletion".
    check(
      "audit_events_supersession_reason_required",
      sql`supersedes_event_id IS NULL OR (supersession_reason IS NOT NULL AND btrim(supersession_reason) <> '')`,
    ),
    // ACG-6: "administrator identity" — a named human actor, frozen label.
    check(
      "audit_events_supersession_actor_identified",
      sql`supersedes_event_id IS NULL OR (actor_type = 'user' AND actor_user_id IS NOT NULL AND actor_label IS NOT NULL)`,
    ),
    check(
      "audit_events_supersession_category_is_audit",
      sql`supersedes_event_id IS NULL OR event_category = 'audit'`,
    ),
    check(
      "audit_events_supersession_after_target",
      sql`supersedes_occurred_at IS NULL OR supersedes_occurred_at <= occurred_at`,
    ),
    // ACG-6 "details of the edit": a correction must carry the corrected values.
    check(
      "audit_events_correction_has_after_state",
      sql`supersession_kind IS DISTINCT FROM 'correction' OR after_state IS NOT NULL`,
    ),
    // Target of the same-tenant supersession FK. Includes the partition key,
    // as every unique constraint on a partitioned table must.
    unique("audit_events_tenant_id_id_occurred_at_key").on(t.tenantId, t.id, t.occurredAt),
    foreignKey({
      name: "audit_events_supersedes_fk",
      columns: [t.tenantId, t.supersedesEventId, t.supersedesOccurredAt],
      foreignColumns: [t.tenantId, t.id, t.occurredAt],
    }).onDelete("restrict"),
    // "Is this event superseded, and by what?" — the presentation lookup.
    index("audit_events_tenant_supersedes_idx")
      .on(t.tenantId, t.supersedesEventId, t.supersedesOccurredAt)
      .where(sql`supersedes_event_id IS NOT NULL`),
    tenantIsolation(),
  ],
);

// =============================================================================
// PHASE 1 — ORGANIZATION / USERS (Master Spec §78)
// =============================================================================

// -----------------------------------------------------------------------------
// R4 masters: departments and designations
// -----------------------------------------------------------------------------
// Same shape as the six Phase 0 masters (0000 §5): code (stable machine key,
// never shown), label (tenant-renameable), sort_order, is_active (retirement,
// never deletion), is_system (seeded: renameable/deactivatable, not deletable
// or re-codable), R5 custom_attributes, timestamps. Composite UNIQUE
// (tenant_id, id) so referencing tables use tenant-carrying FKs, and those
// FKs are ON DELETE RESTRICT (R4: a referenced master value fails loudly).

// [AG-Q-3-n, PO LOCKED: "Sales, CRM, Accounts, Marketing"] Seeded per tenant
// by provision_tenant_master_data() (0003) with exactly those four,
// is_system = true. Tenants add more as rows. CRM is a DEPARTMENT, not the
// BMexa system (AG-Q-3-m). Where Sales Support / Helpdesk sit is OPEN
// (AG-Q-11(f), NI-2) — a data question the tenant answers with rows, not a
// schema question.
export const departments = pgTable(
  "departments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id").notNull(),
    code: text("code").notNull(),
    label: text("label").notNull(),
    description: text("description"),
    sortOrder: integer("sort_order").notNull().default(0),
    isActive: boolean("is_active").notNull().default(true),
    isSystem: boolean("is_system").notNull().default(false),
    customAttributes: jsonb("custom_attributes").notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    foreignKey({ name: "departments_tenant_id_fkey", columns: [t.tenantId], foreignColumns: [tenants.id] }).onDelete(
      "cascade",
    ),
    uniqueIndex("departments_tenant_code_key").on(t.tenantId, t.code),
    unique("departments_tenant_id_id_key").on(t.tenantId, t.id),
    index("departments_tenant_active_idx").on(t.tenantId, t.sortOrder, t.label).where(sql`is_active`),
    check("departments_code_format", sql`code ~ '^[a-z0-9]+(_[a-z0-9]+)*$'`),
    check("departments_custom_attributes_is_object", sql`jsonb_typeof(custom_attributes) = 'object'`),
    tenantIsolation(),
  ],
);

// [PO-AI1 ("Employee D — designation GM"); PO-AI1·7; 03ai "Designation is an
// employee's HR title (GM, AGM, Senior Sales Manager …)"] The HR title as an
// R4 master. NOT seeded: the PO has locked no designation list (the chunk-272
// titles are corpus evidence, not a decision), and a seeded is_system row is
// undeletable — the tenant creates its own.
// AUTHORITY: NONE. Nothing may read authority from a designation
// (PO-AI1·7: roles are assigned "independently of the employee's HR
// designation"; 03ai R-AI-5). There is deliberately no rank, level or
// semantic column here for anything to branch on.
export const designations = pgTable(
  "designations",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id").notNull(),
    code: text("code").notNull(),
    label: text("label").notNull(),
    description: text("description"),
    sortOrder: integer("sort_order").notNull().default(0),
    isActive: boolean("is_active").notNull().default(true),
    isSystem: boolean("is_system").notNull().default(false),
    customAttributes: jsonb("custom_attributes").notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    foreignKey({ name: "designations_tenant_id_fkey", columns: [t.tenantId], foreignColumns: [tenants.id] }).onDelete(
      "cascade",
    ),
    uniqueIndex("designations_tenant_code_key").on(t.tenantId, t.code),
    unique("designations_tenant_id_id_key").on(t.tenantId, t.id),
    index("designations_tenant_active_idx").on(t.tenantId, t.sortOrder, t.label).where(sql`is_active`),
    check("designations_code_format", sql`code ~ '^[a-z0-9]+(_[a-z0-9]+)*$'`),
    check("designations_custom_attributes_is_object", sql`jsonb_typeof(custom_attributes) = 'object'`),
    tenantIsolation(),
  ],
);

// -----------------------------------------------------------------------------
// employees — the builder-side organizational identity (Spec §06, §78)
// -----------------------------------------------------------------------------
// Spec §06 lists Employee ("Builder-side organizational identity and
// employment record. Employee history must survive role changes.") as a
// canonical entity SEPARATE from User ("Authenticated system identity"), and
// §78 lists "users, employees" separately. So the reporting tree lives here,
// not on users: CP users (Phase 4) are users but never employees, and an
// employee's organizational record outlives their access (Spec §57 — access
// is deactivated on users.status; the employee row is never deleted).
//
// user_id is NOT NULL and unique per tenant: every employee in scope today is
// someone the system must authorize. Relaxing to nullable later (e.g. staff
// without logins) is a one-line, non-destructive change; the reverse is not.
export const employees = pgTable(
  "employees",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id").notNull(),
    userId: uuid("user_id").notNull(),
    // [AG-Q-3 ("active user in the relevant department"); AG-Q-3-n] Nullable:
    // not every employee (e.g. the promoter) sits in one of the departments.
    // One department per employee is an ASSUMPTION (03ak §4.3) — reversible
    // to a join table if AG-Q-11(f) ever needs dual membership.
    departmentId: uuid("department_id"),
    // [PO-AI1 "Employee D — designation GM"] HR title. Confers no authority.
    designationId: uuid("designation_id"),
    // [PO-AF1·B.1–B.5; AC-55; AG-Q-3 "reporting hierarchy"] The DIRECT
    // manager ("immediate manager"). An INDIRECT manager is any employee
    // reached by following this column upward ("any manager above in the
    // same chain"). NULL = top of a tree. One column, because the PO's text
    // is singular ("immediate manager"). Acyclicity is enforced by the
    // employees_forbid_reporting_cycle trigger (0003); self-reference by CHECK.
    reportsToEmployeeId: uuid("reports_to_employee_id"),
    customAttributes: jsonb("custom_attributes").notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    foreignKey({ name: "employees_tenant_id_fkey", columns: [t.tenantId], foreignColumns: [tenants.id] }).onDelete(
      "cascade",
    ),
    foreignKey({
      name: "employees_user_fk",
      columns: [t.tenantId, t.userId],
      foreignColumns: [users.tenantId, users.id],
    }).onDelete("restrict"),
    foreignKey({
      name: "employees_department_fk",
      columns: [t.tenantId, t.departmentId],
      foreignColumns: [departments.tenantId, departments.id],
    }).onDelete("restrict"),
    foreignKey({
      name: "employees_designation_fk",
      columns: [t.tenantId, t.designationId],
      foreignColumns: [designations.tenantId, designations.id],
    }).onDelete("restrict"),
    foreignKey({
      name: "employees_reports_to_fk",
      columns: [t.tenantId, t.reportsToEmployeeId],
      foreignColumns: [t.tenantId, t.id],
    }).onDelete("restrict"),
    unique("employees_tenant_id_id_key").on(t.tenantId, t.id),
    uniqueIndex("employees_tenant_user_key").on(t.tenantId, t.userId),
    // Walking the tree DOWN (Tree(actor) = everyone below the actor). Walking
    // up uses the primary key.
    index("employees_tenant_reports_to_idx")
      .on(t.tenantId, t.reportsToEmployeeId)
      .where(sql`reports_to_employee_id IS NOT NULL`),
    // "Active users in the relevant department" (AG-Q-3 replacement rule).
    index("employees_tenant_department_idx")
      .on(t.tenantId, t.departmentId)
      .where(sql`department_id IS NOT NULL`),
    check("employees_not_own_manager", sql`reports_to_employee_id IS NULL OR reports_to_employee_id <> id`),
    check("employees_custom_attributes_is_object", sql`jsonb_typeof(custom_attributes) = 'object'`),
    tenantIsolation(),
  ],
);

// -----------------------------------------------------------------------------
// projects — DELIBERATE MINIMAL STUB (03ak §4.6)
// -----------------------------------------------------------------------------
// Exists only as the FK target for project_role_grants. The full Project /
// Tower / Floor / Inventory / Pricing model is Phase 2 (Spec §79) and is NOT
// started here. Justification: Spec §82, "Do not artificially delay required
// foundational entities simply because their broader module is later."
//
// Columns: id, tenant_id (R1), name, custom_attributes (R5 — Project is a
// core business entity, so the column is present in the creating DDL),
// timestamps (Phase 0 convention). There is deliberately NO status column:
// no project lifecycle has been decided, R4 forbids a CHECK-constrained
// status, and an R4 project-status master is Phase 2's to design. Phase 2
// adds columns to this table; it does not replace it.
export const projects = pgTable(
  "projects",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id").notNull(),
    name: text("name").notNull(),
    customAttributes: jsonb("custom_attributes").notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    foreignKey({ name: "projects_tenant_id_fkey", columns: [t.tenantId], foreignColumns: [tenants.id] }).onDelete(
      "cascade",
    ),
    unique("projects_tenant_id_id_key").on(t.tenantId, t.id),
    check("projects_custom_attributes_is_object", sql`jsonb_typeof(custom_attributes) = 'object'`),
    tenantIsolation(),
  ],
);

// -----------------------------------------------------------------------------
// project_role_grants — per-project role assignment (fixes NI-17)
// -----------------------------------------------------------------------------
// [PO-AI1·1–·5] One row per (employee, project-scoped role, project). The
// PO's worked example is representable exactly:
//   D: Site Head@B; Project Head@C (A: Site Head@C); Site Head@D;
//      Project Head@E + Site Head@E.
// CARDINALITY IS DELIBERATELY UNCONSTRAINED (AI-Q-2 is open): no "one Site
// Head per project", no "one Project Head per project", no ban on holding both
// (Project E is legal). The only uniqueness is "at most one ACTIVE grant of the
// same role to the same employee on the same project", which is identity,
// not cardinality. A per-project maximum can be added later as a partial
// unique index without restructuring; the ≥1-Site-Head minimum (LC-23) is
// pending PO confirmation and belongs to Phase 2's project activation.
//
// APPEND-ONLY (Spec §08 "Role changes must not destroy historical ownership
// information"): revocation stamps revoked_at/revoked_by; the row is never
// deleted (crm_app has no DELETE on this table) and never reopened or
// re-pointed (project_role_grants_forbid_rewrite trigger, 0003). A re-grant
// is a new row.
//
// No custom_attributes: a relationship, not an entity (R5 governance).
export const projectRoleGrants = pgTable(
  "project_role_grants",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id").notNull(),
    employeeId: uuid("employee_id").notNull(),
    roleId: uuid("role_id").notNull(),
    // Constant 'project' — carries the scope-pinning composite FK to roles.
    roleGrantScope: text("role_grant_scope").notNull().default("project"),
    projectId: uuid("project_id").notNull(),
    grantedByUserId: uuid("granted_by_user_id"),
    grantedAt: timestamp("granted_at", { withTimezone: true }).notNull().defaultNow(),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    revokedByUserId: uuid("revoked_by_user_id"),
  },
  (t) => [
    foreignKey({
      name: "project_role_grants_tenant_id_fkey",
      columns: [t.tenantId],
      foreignColumns: [tenants.id],
    }).onDelete("cascade"),
    foreignKey({
      name: "project_role_grants_employee_fk",
      columns: [t.tenantId, t.employeeId],
      foreignColumns: [employees.tenantId, employees.id],
    }).onDelete("restrict"),
    foreignKey({
      name: "project_role_grants_role_scope_fk",
      columns: [t.tenantId, t.roleId, t.roleGrantScope],
      foreignColumns: [roles.tenantId, roles.id, roles.grantScope],
    }).onDelete("restrict"),
    foreignKey({
      name: "project_role_grants_project_fk",
      columns: [t.tenantId, t.projectId],
      foreignColumns: [projects.tenantId, projects.id],
    }).onDelete("restrict"),
    foreignKey({
      name: "project_role_grants_granted_by_fk",
      columns: [t.tenantId, t.grantedByUserId],
      foreignColumns: [users.tenantId, users.id],
    }).onDelete("restrict"),
    foreignKey({
      name: "project_role_grants_revoked_by_fk",
      columns: [t.tenantId, t.revokedByUserId],
      foreignColumns: [users.tenantId, users.id],
    }).onDelete("restrict"),
    check("project_role_grants_role_grant_scope_is_project", sql`role_grant_scope = 'project'`),
    check("project_role_grants_revoked_after_granted", sql`revoked_at IS NULL OR revoked_at >= granted_at`),
    check("project_role_grants_revoker_implies_revoked", sql`revoked_by_user_id IS NULL OR revoked_at IS NOT NULL`),
    uniqueIndex("project_role_grants_active_key")
      .on(t.tenantId, t.employeeId, t.roleId, t.projectId)
      .where(sql`revoked_at IS NULL`),
    // "Who holds role R on project P right now?" (SH@P / PH@P).
    index("project_role_grants_tenant_project_role_idx")
      .on(t.tenantId, t.projectId, t.roleId)
      .where(sql`revoked_at IS NULL`),
    // "What does employee E hold, on which projects?" (the capability gate).
    index("project_role_grants_tenant_employee_idx").on(t.tenantId, t.employeeId).where(sql`revoked_at IS NULL`),
    tenantIsolation(),
  ],
);

export type Tenant = typeof tenants.$inferSelect;
export type NewTenant = typeof tenants.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Role = typeof roles.$inferSelect;
export type NewRole = typeof roles.$inferInsert;
export type Permission = typeof permissions.$inferSelect;
export type RolePermission = typeof rolePermissions.$inferSelect;
export type UserRole = typeof userRoles.$inferSelect;
export type NewUserRole = typeof userRoles.$inferInsert;
export type AuditEvent = typeof auditEvents.$inferSelect;
export type NewAuditEvent = typeof auditEvents.$inferInsert;
export type Department = typeof departments.$inferSelect;
export type NewDepartment = typeof departments.$inferInsert;
export type Designation = typeof designations.$inferSelect;
export type NewDesignation = typeof designations.$inferInsert;
export type Employee = typeof employees.$inferSelect;
export type NewEmployee = typeof employees.$inferInsert;
export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type ProjectRoleGrant = typeof projectRoleGrants.$inferSelect;
export type NewProjectRoleGrant = typeof projectRoleGrants.$inferInsert;
