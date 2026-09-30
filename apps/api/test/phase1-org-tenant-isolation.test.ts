// apps/api/test/phase1-org-tenant-isolation.test.ts
//
// Phase 1 — Organization / Users (Master Spec §78). Beads Final-Verison-20t.
// Design record: docs/architecture/03ak-phase1-organization-users-and-audit-
// completeness-gate-data-model.md — the §10 acceptance checklist IDs (P1-…)
// are cited on each test.
//
// Two real tenants are provisioned through the same provisioning functions
// signup uses; every statement runs as crm_app through withTenantContext(),
// the application's own SET LOCAL choke point. Nothing is mocked and nothing
// bypasses RLS. There are no HTTP routes for these tables yet (CRUD endpoints
// are a follow-up implementer task), so the database contract is tested
// directly — the same level the Phase 0 architecture note §12 verified at.

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { sql } from "drizzle-orm";
import { db } from "@crm/db";
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
import {
  createEmployee,
  createProject,
  departmentIdByCode,
  grantProjectRole,
  idOf,
  pgError,
  q,
} from "./support/phase1.js";

const PHASE1_TABLES = ["departments", "designations", "employees", "projects", "project_role_grants"] as const;
type Phase1Table = (typeof PHASE1_TABLES)[number];

describe("Phase 1 — organization schema: tenant isolation, reporting tree, per-project role grants", () => {
  let A: TestTenant;
  let B: TestTenant;

  // One row per Phase 1 table in each tenant, for the R1 sweep.
  const rowOf: Record<"A" | "B", Record<Phase1Table, string>> = {
    A: {} as Record<Phase1Table, string>,
    B: {} as Record<Phase1Table, string>,
  };

  // Tenant A's PO-AI1 worked example.
  let siteHeadA: string;
  let projectHeadA: string;
  let empCeo: string;
  let empD: string;
  let empA: string;
  let empRep: string;
  let projB: string;
  let projC: string;
  let projD: string;
  let projE: string;
  let projF: string;
  let designationGM: string;

  beforeAll(async () => {
    A = await provisionTenant("p1org-a");
    B = await provisionTenant("p1org-b");

    for (const [label, t] of [
      ["A", A],
      ["B", B],
    ] as const) {
      const tid = t.tenantId;
      const u = await createUser(tid, `p1-${label}-emp`);
      const dept = await departmentIdByCode(tid, "sales");
      const desig = await idOf(
        tid,
        sql`INSERT INTO designations (tenant_id, code, label) VALUES (${tid}, 'gm', 'GM') RETURNING id`,
      );
      const emp = await createEmployee(tid, u, { departmentId: dept, designationId: desig });
      const proj = await createProject(tid, `${label} Project`);
      const sh = await getRoleIdByKey(tid, "site_head");
      const grant = await grantProjectRole(tid, emp, sh, proj);
      rowOf[label] = {
        departments: dept,
        designations: desig,
        employees: emp,
        projects: proj,
        project_role_grants: grant,
      };
      if (label === "A") designationGM = desig;
    }

    // ---- PO-AI1 worked example, in tenant A --------------------------------
    //   Employee D — designation GM
    //   Project B → D = Site Head
    //   Project C → D = Project Head, while Employee A = Site Head
    //   Project D → D = Site Head
    //   Project E → D = Project Head + Site Head
    // plus a reporting tree CEO ← D ← Rep, and A outside D's tree.
    const tid = A.tenantId;
    siteHeadA = await getRoleIdByKey(tid, "site_head");
    projectHeadA = await getRoleIdByKey(tid, "project_head");
    empCeo = await createEmployee(tid, await createUser(tid, "p1-ceo"));
    empD = await createEmployee(tid, await createUser(tid, "p1-d"), { reportsTo: empCeo, designationId: designationGM });
    empA = await createEmployee(tid, await createUser(tid, "p1-a"), { reportsTo: empCeo });
    empRep = await createEmployee(tid, await createUser(tid, "p1-rep"), { reportsTo: empD });
    projB = await createProject(tid, "Project B");
    projC = await createProject(tid, "Project C");
    projD = await createProject(tid, "Project D");
    projE = await createProject(tid, "Project E");
    projF = await createProject(tid, "Project F");
    await grantProjectRole(tid, empD, siteHeadA, projB);
    await grantProjectRole(tid, empD, projectHeadA, projC);
    await grantProjectRole(tid, empA, siteHeadA, projC);
    await grantProjectRole(tid, empD, siteHeadA, projD);
    await grantProjectRole(tid, empD, projectHeadA, projE);
    await grantProjectRole(tid, empD, siteHeadA, projE);
  });

  afterAll(async () => {
    // Tenant teardown must still cascade through every Phase 1 table,
    // including the ON DELETE RESTRICT composite FKs between them (P1-R1-9).
    await deleteTenant(A.tenantId);
    await deleteTenant(B.tenantId);
    await closeDbConnection();
  });

  // ===========================================================================
  // R1 — tenant isolation on every new table
  // ===========================================================================
  describe("R1 — tenant isolation on every Phase 1 table", () => {
    for (const table of PHASE1_TABLES) {
      describe(table, () => {
        it(`tenant A reads only its own ${table} rows, never tenant B's (P1-R1-1)`, async () => {
          const r = await q(A.tenantId, sql`SELECT id, tenant_id FROM ${sql.identifier(table)}`);
          expect(r.length).toBeGreaterThan(0);
          for (const row of r) expect(row.tenant_id).toBe(A.tenantId);
          expect(r.map((x) => x.id)).not.toContain(rowOf.B[table]);
        });

        it(`tenant A cannot read tenant B's ${table} row even by its exact id (P1-R1-2)`, async () => {
          const r = await q(A.tenantId, sql`SELECT id FROM ${sql.identifier(table)} WHERE id = ${rowOf.B[table]}`);
          expect(r).toHaveLength(0);
        });

        it(`tenant A's UPDATE aimed at tenant B's ${table} row touches nothing (P1-R1-3)`, async () => {
          // A no-op assignment keeps the append-only trigger on
          // project_role_grants out of the picture: RLS must filter the row
          // out before any trigger could see it.
          const r = await q(
            A.tenantId,
            sql`UPDATE ${sql.identifier(table)} SET tenant_id = tenant_id WHERE id = ${rowOf.B[table]} RETURNING id`,
          );
          expect(r).toHaveLength(0);
          const stillThere = await q(B.tenantId, sql`SELECT id FROM ${sql.identifier(table)} WHERE id = ${rowOf.B[table]}`);
          expect(stillThere).toHaveLength(1);
        });

        it(`an INSERT stamped with tenant B's id under tenant A's context is refused by RLS (P1-R1-4)`, async () => {
          const insert: Record<Phase1Table, ReturnType<typeof sql>> = {
            departments: sql`INSERT INTO departments (tenant_id, code, label) VALUES (${B.tenantId}, 'forged', 'Forged')`,
            designations: sql`INSERT INTO designations (tenant_id, code, label) VALUES (${B.tenantId}, 'forged', 'Forged')`,
            projects: sql`INSERT INTO projects (tenant_id, name) VALUES (${B.tenantId}, 'Forged')`,
            employees: sql`INSERT INTO employees (tenant_id, user_id) VALUES (${B.tenantId}, gen_random_uuid())`,
            project_role_grants: sql`INSERT INTO project_role_grants (tenant_id, employee_id, role_id, project_id)
                                     VALUES (${B.tenantId}, ${rowOf.B.employees}, gen_random_uuid(), ${rowOf.B.projects})`,
          };
          const err = await pgError(q(A.tenantId, insert[table]));
          expect(err.code).toBe("42501");
          expect(err.message).toMatch(/row-level security/);
        });

        it(`with NO tenant context, ${table} returns zero rows — fail closed (P1-R1-5)`, async () => {
          const r = await db.transaction(async (tx) =>
            extractRows(await tx.execute(sql`SELECT count(*)::int AS n FROM ${sql.identifier(table)}`)),
          );
          expect(r[0].n).toBe(0);
        });
      });
    }

    it("DELETE aimed at another tenant's master row touches nothing (P1-R1-6)", async () => {
      const r = await q(A.tenantId, sql`DELETE FROM designations WHERE id = ${rowOf.B.designations} RETURNING id`);
      expect(r).toHaveLength(0);
    });

    it("composite FKs refuse a cross-tenant reference: tenant A's employee cannot point at tenant B's department (P1-R1-7)", async () => {
      const u = await createUser(A.tenantId, "p1-xref");
      const err = await pgError(
        q(A.tenantId, sql`INSERT INTO employees (tenant_id, user_id, department_id)
                          VALUES (${A.tenantId}, ${u}, ${rowOf.B.departments})`),
      );
      expect(err.code).toBe("23503");
      expect(err.constraint_name).toBe("employees_department_fk");
    });

    it("composite FKs refuse a cross-tenant reference: a tenant A grant cannot name tenant B's project or tenant B's manager (P1-R1-8)", async () => {
      const grantErr = await pgError(
        q(A.tenantId, sql`INSERT INTO project_role_grants (tenant_id, employee_id, role_id, project_id)
                          VALUES (${A.tenantId}, ${empD}, ${siteHeadA}, ${rowOf.B.projects})`),
      );
      expect(grantErr.code).toBe("23503");
      expect(grantErr.constraint_name).toBe("project_role_grants_project_fk");

      const u = await createUser(A.tenantId, "p1-xmgr");
      const mgrErr = await pgError(
        q(A.tenantId, sql`INSERT INTO employees (tenant_id, user_id, reports_to_employee_id)
                          VALUES (${A.tenantId}, ${u}, ${rowOf.B.employees})`),
      );
      expect(mgrErr.code).toBe("23503");
      expect(mgrErr.constraint_name).toBe("employees_reports_to_fk");
    });
  });

  // ===========================================================================
  // R4 masters: departments and designations
  // ===========================================================================
  describe("R4 masters — departments (AG-Q-3-n) and designations", () => {
    it("every tenant is seeded with exactly the four PO-locked departments, as system rows (P1-M-1)", async () => {
      for (const t of [A, B]) {
        const r = await q(
          t.tenantId,
          sql`SELECT code, label, is_system FROM departments WHERE is_system ORDER BY sort_order`,
        );
        expect(r.map((x) => x.code)).toEqual(["sales", "crm", "accounts", "marketing"]);
        expect(r.map((x) => x.label)).toEqual(["Sales", "CRM", "Accounts", "Marketing"]);
      }
    });

    it("no designations are seeded — the tenant owns that vocabulary (P1-M-2)", async () => {
      const fresh = await provisionTenant("p1org-fresh");
      try {
        const r = await q(fresh.tenantId, sql`SELECT count(*)::int AS n FROM designations`);
        expect(r[0].n).toBe(0);
      } finally {
        await deleteTenant(fresh.tenantId);
      }
    });

    it("tenant A renaming its CRM department leaves tenant B's label untouched (P1-M-3)", async () => {
      await q(A.tenantId, sql`UPDATE departments SET label = 'Customer Relations' WHERE code = 'crm'`);
      const b = await q(B.tenantId, sql`SELECT label FROM departments WHERE code = 'crm'`);
      expect(b[0].label).toBe("CRM");
    });

    it("a department referenced by an employee cannot be deleted — ON DELETE RESTRICT (P1-M-4, R4)", async () => {
      const err = await pgError(q(A.tenantId, sql`DELETE FROM departments WHERE id = ${rowOf.A.departments}`));
      expect(err.code).toBe("23503");
      expect(err.constraint_name).toBe("employees_department_fk");
    });

    it("department codes must be lowercase snake_case, as for every master (P1-M-5)", async () => {
      const err = await pgError(
        q(A.tenantId, sql`INSERT INTO departments (tenant_id, code, label) VALUES (${A.tenantId}, 'Sales Support', 'x')`),
      );
      expect(err.code).toBe("23514");
      expect(err.constraint_name).toBe("departments_code_format");
    });
  });

  // ===========================================================================
  // Reporting tree (PO-AF1·B.1–B.5, AC-55)
  // ===========================================================================
  describe("reporting tree — direct and indirect managers (PO-AF1·B, AC-55)", () => {
    const chainAbove = (employeeId: string) => sql`
      WITH RECURSIVE chain AS (
        SELECT e.reports_to_employee_id AS manager_id, 1 AS depth
        FROM employees e WHERE e.id = ${employeeId}
        UNION ALL
        SELECT e.reports_to_employee_id, c.depth + 1
        FROM chain c JOIN employees e ON e.id = c.manager_id
        WHERE c.manager_id IS NOT NULL
      )
      SELECT manager_id, depth FROM chain WHERE manager_id IS NOT NULL ORDER BY depth
    `;

    it("direct manager = the immediate manager; indirect managers = everyone above in the same chain (P1-O-1)", async () => {
      const r = await q(A.tenantId, chainAbove(empRep));
      expect(r.map((x) => x.manager_id)).toEqual([empD, empCeo]);
      expect(r[0].depth).toBe(1); // direct
    });

    it("an employee cannot report to themselves (P1-O-2)", async () => {
      const err = await pgError(q(A.tenantId, sql`UPDATE employees SET reports_to_employee_id = id WHERE id = ${empD}`));
      expect(err.code).toBe("23514");
      expect(err.constraint_name).toBe("employees_not_own_manager");
    });

    it("a longer cycle is refused: the CEO cannot be made to report to someone in their own tree (P1-O-3)", async () => {
      const err = await pgError(
        q(A.tenantId, sql`UPDATE employees SET reports_to_employee_id = ${empRep} WHERE id = ${empCeo}`),
      );
      expect(err.code).toBe("23514");
      expect(err.constraint_name).toBe("employees_reporting_tree_acyclic");
    });

    it("one employee record per user (P1-O-4)", async () => {
      const userOfD = await q(A.tenantId, sql`SELECT user_id FROM employees WHERE id = ${empD}`);
      const err = await pgError(
        q(A.tenantId, sql`INSERT INTO employees (tenant_id, user_id) VALUES (${A.tenantId}, ${userOfD[0].user_id as string})`),
      );
      expect(err.code).toBe("23505");
    });
  });

  // ===========================================================================
  // Per-project role grants (PO-AI1; NI-17; AI-Q-2 left open)
  // ===========================================================================
  describe("per-project role grants — the PO-AI1 worked example (NI-17 fixed)", () => {
    it("all of Employee D's grants coexist with Employee A's Site Head grant on Project C (P1-G-1)", async () => {
      const r = await q(
        A.tenantId,
        sql`SELECT g.employee_id, g.role_id, g.project_id
            FROM project_role_grants g
            WHERE g.revoked_at IS NULL AND g.project_id IN (${projB}, ${projC}, ${projD}, ${projE})`,
      );
      const has = (emp: string, role: string, proj: string) =>
        r.some((x) => x.employee_id === emp && x.role_id === role && x.project_id === proj);
      expect(has(empD, siteHeadA, projB)).toBe(true);
      expect(has(empD, projectHeadA, projC)).toBe(true);
      expect(has(empA, siteHeadA, projC)).toBe(true);
      expect(has(empD, siteHeadA, projD)).toBe(true);
      expect(has(empD, projectHeadA, projE)).toBe(true);
      expect(has(empD, siteHeadA, projE)).toBe(true);
      expect(r).toHaveLength(6);
    });

    it("no per-project cardinality is imposed: a second Site Head and a second Project Head on one project are both representable (P1-G-2, AI-Q-2 open)", async () => {
      const extra = await createEmployee(A.tenantId, await createUser(A.tenantId, "p1-second"));
      await grantProjectRole(A.tenantId, extra, siteHeadA, projC);
      await grantProjectRole(A.tenantId, extra, projectHeadA, projC);
      const r = await q(
        A.tenantId,
        sql`SELECT role_id, count(*)::int AS n FROM project_role_grants
            WHERE project_id = ${projC} AND revoked_at IS NULL GROUP BY role_id`,
      );
      const n = Object.fromEntries(r.map((x) => [x.role_id as string, x.n as number]));
      expect(n[siteHeadA]).toBe(2);
      expect(n[projectHeadA]).toBe(2);
    });

    it("the same active grant cannot be recorded twice (P1-G-3)", async () => {
      const err = await pgError(grantProjectRole(A.tenantId, empD, siteHeadA, projB));
      expect(err.code).toBe("23505");
      expect(err.constraint_name).toBe("project_role_grants_active_key");
    });

    it("a project-scoped role cannot be granted tenant-wide through user_roles (P1-G-4, 03ai R-AI-1)", async () => {
      const u = await createUser(A.tenantId, "p1-tenantwide-sh");
      const err = await pgError(assignRole(A.tenantId, u, siteHeadA));
      expect(err.code).toBe("23503");
      expect(err.constraint_name).toBe("user_roles_role_scope_fk");
    });

    it("a tenant-wide role cannot be granted per project (P1-G-5)", async () => {
      const member = await getRoleIdByKey(A.tenantId, "member");
      const err = await pgError(grantProjectRole(A.tenantId, empD, member, projF));
      expect(err.code).toBe("23503");
      expect(err.constraint_name).toBe("project_role_grants_role_scope_fk");
    });

    it("revocation is a stamp, a re-grant is a new row, and history is kept (P1-G-6, Spec §08)", async () => {
      const g1 = await grantProjectRole(A.tenantId, empRep, siteHeadA, projF);
      await q(A.tenantId, sql`UPDATE project_role_grants SET revoked_at = now() WHERE id = ${g1}`);
      const g2 = await grantProjectRole(A.tenantId, empRep, siteHeadA, projF);
      expect(g2).not.toBe(g1);
      const r = await q(
        A.tenantId,
        sql`SELECT id, revoked_at FROM project_role_grants WHERE employee_id = ${empRep} AND project_id = ${projF}`,
      );
      expect(r).toHaveLength(2);
      expect(r.filter((x) => x.revoked_at === null)).toHaveLength(1);
    });

    it("a revoked grant can never be reopened (P1-G-7)", async () => {
      const g = await grantProjectRole(A.tenantId, empA, projectHeadA, projF);
      await q(A.tenantId, sql`UPDATE project_role_grants SET revoked_at = now() WHERE id = ${g}`);
      const err = await pgError(q(A.tenantId, sql`UPDATE project_role_grants SET revoked_at = NULL WHERE id = ${g}`));
      expect(err.code).toBe("23514");
      expect(err.constraint_name).toBe("project_role_grants_append_only");
    });

    it("a grant can never be re-pointed at another project, role or employee (P1-G-8)", async () => {
      const g = await grantProjectRole(A.tenantId, empA, siteHeadA, projB);
      const err = await pgError(q(A.tenantId, sql`UPDATE project_role_grants SET project_id = ${projD} WHERE id = ${g}`));
      expect(err.code).toBe("23514");
      expect(err.constraint_name).toBe("project_role_grants_append_only");
    });

    it("crm_app cannot DELETE a grant at all (P1-G-9)", async () => {
      const err = await pgError(q(A.tenantId, sql`DELETE FROM project_role_grants WHERE id = ${rowOf.A.project_role_grants}`));
      expect(err.code).toBe("42501");
    });
  });

  // ===========================================================================
  // AC-55 is EXPRESSIBLE: management authority = reporting tree AND project
  // authorization. The application check itself is not built (nothing to
  // authorize against until Phase 3); this proves the schema can answer it,
  // and that it answers it through PERMISSIONS, never role names (R2).
  // ===========================================================================
  describe("AC-55 two-gate management authority is expressible as one query (P1-A55)", () => {
    const PROBE = "probe.manage";

    beforeAll(async () => {
      // A test-only permission standing in for a Phase 3 management act
      // (e.g. declaring a Rep unavailable, AC-54). Granted to both project
      // roles, as 03ai §3.5 row 8 does for that act.
      const permId = await idOf(
        A.tenantId,
        sql`INSERT INTO permissions (tenant_id, key, resource, action)
            VALUES (${A.tenantId}, ${PROBE}, 'probe', 'manage') RETURNING id`,
      );
      for (const role of [siteHeadA, projectHeadA]) {
        await q(
          A.tenantId,
          sql`INSERT INTO role_permissions (tenant_id, role_id, permission_id) VALUES (${A.tenantId}, ${role}, ${permId})`,
        );
      }
    });

    // May `actor` perform the management act guarded by `perm` over `target`
    // on `project`? Gate 1+2: an active grant ON THAT PROJECT whose role
    // carries the permission. Gate 3: `target` is below `actor` in the
    // reporting tree (PO-AF1·B.2, B.5).
    const mayManage = async (actor: string, target: string, project: string, perm: string) => {
      const r = await q(
        A.tenantId,
        sql`
          WITH RECURSIVE above_target AS (
            SELECT e.reports_to_employee_id AS manager_id
            FROM employees e WHERE e.id = ${target}
            UNION ALL
            SELECT e.reports_to_employee_id
            FROM above_target a JOIN employees e ON e.id = a.manager_id
            WHERE a.manager_id IS NOT NULL
          )
          SELECT
            EXISTS (
              SELECT 1
              FROM project_role_grants g
              JOIN role_permissions rp ON rp.tenant_id = g.tenant_id AND rp.role_id = g.role_id
              JOIN permissions p       ON p.tenant_id  = rp.tenant_id AND p.id = rp.permission_id
              WHERE g.employee_id = ${actor} AND g.project_id = ${project}
                AND g.revoked_at IS NULL AND p.key = ${perm}
            )
            AND EXISTS (SELECT 1 FROM above_target WHERE manager_id = ${actor})
            AS allowed
        `,
      );
      return r[0].allowed as boolean;
    };

    it("D (Project Head on C, and the Rep's direct manager) may manage the Rep on Project C", async () => {
      expect(await mayManage(empD, empRep, projC, PROBE)).toBe(true);
    });

    it("A (Site Head on C, but the Rep is outside A's tree) may NOT manage the Rep on Project C — 03ai LC-22", async () => {
      expect(await mayManage(empA, empRep, projC, PROBE)).toBe(false);
    });

    it("the CEO (indirect manager of the Rep, but no grant on C) may NOT — project assignment is required too", async () => {
      expect(await mayManage(empCeo, empRep, projC, PROBE)).toBe(false);
    });

    it("D's designation (GM) confers nothing on Project F, where D holds no grant — PO-AI1·7", async () => {
      expect(await mayManage(empD, empRep, projF, PROBE)).toBe(false);
    });

    it("the Rep may not manage their own manager (direction follows the tree)", async () => {
      await grantProjectRole(A.tenantId, empRep, projectHeadA, projE);
      expect(await mayManage(empRep, empD, projE, PROBE)).toBe(false);
    });
  });

  // ===========================================================================
  // R2 — the seeded role set
  // ===========================================================================
  describe("R2 — Builder-Side Admin, Site Head and Project Head roles are seeded as data, not code", () => {
    const permsOf = async (tenantId: string, roleKey: string) =>
      (
        await q(
          tenantId,
          sql`SELECT p.key FROM roles r
              JOIN role_permissions rp ON rp.tenant_id = r.tenant_id AND rp.role_id = r.id
              JOIN permissions p ON p.tenant_id = rp.tenant_id AND p.id = rp.permission_id
              WHERE r.key = ${roleKey}`,
        )
      ).map((x) => x.key as string);

    it("builder_side_admin is a tenant-wide system role requiring 2FA and holding every audit permission (P1-R2-1)", async () => {
      const r = await q(A.tenantId, sql`SELECT is_system, requires_2fa, grant_scope FROM roles WHERE key = 'builder_side_admin'`);
      expect(r[0]).toEqual({ is_system: true, requires_2fa: true, grant_scope: "tenant" });
      const perms = await permsOf(A.tenantId, "builder_side_admin");
      for (const k of ["audit.read", "audit.export", "audit.correct", "audit.retract"]) expect(perms).toContain(k);
    });

    it("owner and admin hold NO audit permission — ACG-4/5/9 reserve them to the Builder-Side Admin (P1-R2-2)", async () => {
      for (const roleKey of ["owner", "admin"]) {
        const perms = await permsOf(A.tenantId, roleKey);
        expect(perms.length).toBeGreaterThan(0);
        expect(perms.filter((k) => k.startsWith("audit."))).toEqual([]);
      }
    });

    it("site_head and project_head are project-scoped system roles with no permissions yet (P1-R2-3)", async () => {
      const r = await q(
        A.tenantId,
        sql`SELECT key, is_system, grant_scope FROM roles WHERE key IN ('site_head', 'project_head') ORDER BY key`,
      );
      expect(r).toEqual([
        { key: "project_head", is_system: true, grant_scope: "project" },
        { key: "site_head", is_system: true, grant_scope: "project" },
      ]);
      // Tenant B (no test-only probe permission) shows the seeded state.
      expect(await permsOf(B.tenantId, "site_head")).toEqual([]);
      expect(await permsOf(B.tenantId, "project_head")).toEqual([]);
    });

    it("audit export and audit view are distinct permissions (P1-R2-4, ACG-9)", async () => {
      const r = await q(A.tenantId, sql`SELECT key FROM permissions WHERE resource = 'audit' ORDER BY key`);
      expect(r.map((x) => x.key)).toEqual(["audit.correct", "audit.export", "audit.read", "audit.retract"]);
    });
  });
});
