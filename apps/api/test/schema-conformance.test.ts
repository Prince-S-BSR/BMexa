// apps/api/test/schema-conformance.test.ts
//
// Mechanical schema conformance — R1 and R4 made CI-checkable, as the Phase 0
// architecture note §10 and §13 item 1 asked for ("It should be the first
// item of Phase 1"), plus the Phase 1 invariants that live in pg_catalog
// rather than in data. Beads Final-Verison-20t; checklist IDs are 03ak §10.
//
// Runs as crm_app (the catalog is readable by every role). It reads no tenant
// data, so it needs no tenant context.
//
// ONE DELIBERATE CHANGE FROM THE PHASE 0 LINT (0000 §8): audit_events
// partitions are NO LONGER excluded. The exclusion rested on "partitions
// inherit from parent", which is false for direct access — see 0004 §2 and
// 03ak §7. Every partition, present and future, must carry its own RLS.

import { afterAll, describe, expect, it } from "vitest";
import { sql } from "drizzle-orm";
import { db, closeDbConnection } from "@crm/db";
import { extractRows } from "./support/rows.js";

async function query(text: ReturnType<typeof sql>): Promise<Array<Record<string, unknown>>> {
  return extractRows(await db.execute(text));
}

const PHASE1_TABLES = ["departments", "designations", "employees", "projects", "project_role_grants"];

describe("Schema conformance (R1, R4, R6 and Phase 1 invariants)", () => {
  afterAll(async () => {
    await closeDbConnection();
  });

  it("R1: every table — including every audit_events partition — has NOT NULL tenant_id, RLS enabled AND forced, and a policy (P1-C-1)", async () => {
    const violations = await query(sql`
      SELECT c.relname AS table_name,
             CASE
               WHEN a.attname IS NULL              THEN 'MISSING tenant_id column (R1)'
               WHEN a.attnotnull IS NOT TRUE       THEN 'tenant_id is nullable (R1)'
               WHEN c.relrowsecurity IS FALSE      THEN 'RLS not ENABLEd'
               WHEN c.relforcerowsecurity IS FALSE THEN 'RLS not FORCEd (owner bypasses)'
               WHEN NOT EXISTS (SELECT 1 FROM pg_policy p WHERE p.polrelid = c.oid)
                                                   THEN 'no RLS policy attached'
             END AS violation
      FROM pg_class c
      JOIN pg_namespace n ON n.oid = c.relnamespace
      LEFT JOIN pg_attribute a
             ON a.attrelid = c.oid AND a.attname = 'tenant_id' AND a.attnum > 0 AND NOT a.attisdropped
      WHERE n.nspname = 'public'
        AND c.relkind IN ('r', 'p')
        AND c.relname <> 'schema_migrations'
        AND (a.attname IS NULL
             OR a.attnotnull IS NOT TRUE
             OR c.relrowsecurity IS FALSE
             OR c.relforcerowsecurity IS FALSE
             OR NOT EXISTS (SELECT 1 FROM pg_policy p WHERE p.polrelid = c.oid))
      ORDER BY 1
    `);
    expect(violations).toEqual([]);
  });

  it("R1: every tenant_isolation policy has the canonical shape (P1-C-2)", async () => {
    const odd = await query(sql`
      SELECT c.relname, pg_get_expr(p.polqual, p.polrelid) AS using_expr,
             pg_get_expr(p.polwithcheck, p.polrelid) AS check_expr
      FROM pg_policy p
      JOIN pg_class c ON c.oid = p.polrelid
      JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE n.nspname = 'public'
        AND (p.polname <> 'tenant_isolation'
             OR NOT p.polpermissive
             OR p.polcmd <> '*'
             OR pg_get_expr(p.polqual, p.polrelid) <> '(tenant_id = app_current_tenant_id())'
             OR pg_get_expr(p.polwithcheck, p.polrelid) <> '(tenant_id = app_current_tenant_id())')
    `);
    expect(odd).toEqual([]);
  });

  it("the Phase 1 tables exist and are covered by the sweep above (P1-C-3)", async () => {
    const r = await query(sql`
      SELECT c.relname FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE n.nspname = 'public' AND c.relname IN (${sql.join(PHASE1_TABLES.map((t) => sql`${t}`), sql`, `)})
        AND c.relrowsecurity AND c.relforcerowsecurity
      ORDER BY 1
    `);
    expect(r.map((x) => x.relname)).toEqual([...PHASE1_TABLES].sort());
  });

  it("R4: zero ENUM types in the application schema (P1-C-4)", async () => {
    const r = await query(sql`
      SELECT t.typname FROM pg_type t JOIN pg_namespace n ON n.oid = t.typnamespace
      WHERE n.nspname = 'public' AND t.typtype = 'e'
    `);
    expect(r).toEqual([]);
  });

  it("R5: the Phase 1 entity and master tables carry custom_attributes jsonb NOT NULL; the grant table does not (P1-C-5)", async () => {
    const r = await query(sql`
      SELECT c.relname
      FROM pg_attribute a JOIN pg_class c ON c.oid = a.attrelid
      JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE n.nspname = 'public' AND a.attname = 'custom_attributes' AND a.attnotnull
        AND a.atttypid = 'jsonb'::regtype AND c.relname IN (${sql.join(PHASE1_TABLES.map((t) => sql`${t}`), sql`, `)})
      ORDER BY 1
    `);
    expect(r.map((x) => x.relname)).toEqual(["departments", "designations", "employees", "projects"]);
  });

  it("R6 / ACG: the audit and grant-history triggers are installed and enabled (P1-C-6)", async () => {
    const r = await query(sql`
      SELECT tgname FROM pg_trigger
      WHERE NOT tgisinternal AND tgenabled <> 'D'
        AND tgname IN ('audit_events_append_only', 'audit_events_supersession_guard',
                       'employees_reporting_tree_acyclic', 'project_role_grants_append_only')
        AND tgrelid IN ('audit_events'::regclass, 'employees'::regclass, 'project_role_grants'::regclass)
      ORDER BY 1
    `);
    expect(r.map((x) => x.tgname)).toEqual([
      "audit_events_append_only",
      "audit_events_supersession_guard",
      "employees_reporting_tree_acyclic",
      "project_role_grants_append_only",
    ]);
  });

  it("R6 / grants: crm_app holds only SELECT+INSERT on audit_events, nothing on any partition, and no DELETE on project_role_grants (P1-C-7)", async () => {
    const r = await query(sql`
      SELECT
        has_table_privilege('crm_app', 'audit_events', 'SELECT')          AS ae_select,
        has_table_privilege('crm_app', 'audit_events', 'INSERT')          AS ae_insert,
        has_table_privilege('crm_app', 'audit_events', 'UPDATE')          AS ae_update,
        has_table_privilege('crm_app', 'audit_events', 'DELETE')          AS ae_delete,
        has_table_privilege('crm_app', 'audit_events', 'TRUNCATE')        AS ae_truncate,
        has_table_privilege('crm_app', 'project_role_grants', 'DELETE')   AS prg_delete,
        (SELECT count(*)::int FROM pg_inherits i
           WHERE i.inhparent = 'audit_events'::regclass
             AND (has_table_privilege('crm_app', i.inhrelid, 'SELECT')
               OR has_table_privilege('crm_app', i.inhrelid, 'INSERT')
               OR has_table_privilege('crm_app', i.inhrelid, 'UPDATE')
               OR has_table_privilege('crm_app', i.inhrelid, 'DELETE')))  AS partitions_granted
    `);
    expect(r[0]).toEqual({
      ae_select: true,
      ae_insert: true,
      ae_update: false,
      ae_delete: false,
      ae_truncate: false,
      prg_delete: false,
      partitions_granted: 0,
    });
  });

  it("ACG-8: nothing references tenants with ON DELETE CASCADE from audit_events (P1-C-8)", async () => {
    const r = await query(sql`
      SELECT conname, confdeltype FROM pg_constraint
      WHERE conrelid = 'audit_events'::regclass AND contype = 'f' AND confrelid = 'tenants'::regclass
    `);
    expect(r).toEqual([{ conname: "audit_events_tenant_id_fkey", confdeltype: "r" }]);
  });

  it("the application role is not privileged (P1-C-9, architecture note §3.5)", async () => {
    const r = await query(sql`SELECT rolsuper, rolbypassrls FROM pg_roles WHERE rolname = current_user`);
    expect(r[0]).toEqual({ rolsuper: false, rolbypassrls: false });
  });
});
