// apps/api/scripts/seed-demo-tenant.ts
//
// VALIDATION-ONLY tooling for Beads issue Final-Verison-224 (step 5/5) — not
// part of the product. Signs up a fresh test tenant through the real HTTP
// `POST /auth/signup` + `POST /auth/login`, then populates it with a small
// multi-employee org (departments, designations, projects, and a set of
// project-role grants reproducing the fixtures' Employee-D scenario —
// several simultaneous Site Head/Project Head grants on one employee, plus
// one revoked grant to exercise the append-only history) so the 5 real
// Org/Users screens have a genuine non-trivial dataset to render, per the
// issue's validation checklist.
//
// WHY THIS SCRIPT TALKS TO THE DB DIRECTLY FOR ONE STEP (creating additional
// `users` rows): apps/api has no HTTP endpoint that can do this at all.
// `POST /employees` requires an existing `userId`, and the only thing that
// ever creates a `users` row is `POST /auth/signup`, which always creates a
// brand-new TENANT along with it — there is no `/users` POST, no invite
// endpoint, nothing. This is flagged as a genuine, unavoidable API gap in
// the step 5 final report (it blocks real multi-employee usage in
// production, not just this script), not something this frontend-wiring
// task should quietly fix by adding a new backend route. The workaround
// here — inserting directly via `@crm/db`'s `withTenantContext`, the exact
// same choke point the application itself uses for every query, never a raw
// unscoped connection — mirrors apps/api/test/support/provision.ts's own
// `createUser()` test helper. Every other mutation below goes through the
// real HTTP API with the founding user's real bearer token, exactly as a
// legitimate client would.
//
// Usage (from repo root, with the dev Postgres reachable and apps/api's
// dev server running against the same DATABASE_URL):
//
//   set -a; source .env; set +a
//   API_BASE_URL=http://localhost:4000 npx tsx apps/api/scripts/seed-demo-tenant.ts
//
// Prints the founding user's login credentials (subdomain/email/password)
// at the end so they can be used to log in through the real /login page.

import { randomUUID } from "node:crypto";
import { sql } from "drizzle-orm";
import { withTenantContext, closeDbConnection } from "@crm/db";

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:4000";
const RUN_ID = Date.now().toString(36);
const SUBDOMAIN = `demo-org-${RUN_ID}`;
const FOUNDER_EMAIL = `founder@${SUBDOMAIN}.test`;
const PASSWORD = "correct-horse-battery-staple-1";

async function api<T>(path: string, init: { method?: string; token?: string; body?: unknown } = {}): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: init.method ?? "GET",
    headers: {
      // Only when there's a body — see api-client.ts's apiFetch comment on
      // the same fix: Fastify rejects an application/json request with no
      // body at all.
      ...(init.body !== undefined ? { "Content-Type": "application/json" } : {}),
      ...(init.token ? { Authorization: `Bearer ${init.token}` } : {}),
    },
    body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
  });
  const text = await res.text();
  const parsed = text ? JSON.parse(text) : {};
  if (!res.ok) {
    throw new Error(`${init.method ?? "GET"} ${path} -> ${res.status}: ${JSON.stringify(parsed)}`);
  }
  return parsed as T;
}

/** Direct-DB user creation — see file header for why this can't go through HTTP. */
async function createUser(tenantId: string, emailPrefix: string, fullName: string): Promise<string> {
  const userId = randomUUID();
  const email = `${emailPrefix}@${SUBDOMAIN}.test`;
  await withTenantContext(tenantId, async (tx) => {
    await tx.execute(sql`
      INSERT INTO users (id, tenant_id, email, full_name, status)
      VALUES (${userId}, ${tenantId}, ${email}, ${fullName}, 'active')
    `);
  });
  return userId;
}

async function main() {
  console.log(`Signing up tenant "${SUBDOMAIN}" via real HTTP POST /auth/signup ...`);
  const signupResult = await api<{ tenant: { id: string }; user: { id: string }; employee: { id: string } }>("/auth/signup", {
    method: "POST",
    body: {
      subdomain: SUBDOMAIN,
      tenantName: "Demo Org (seeded for Final-Verison-224 validation)",
      email: FOUNDER_EMAIL,
      password: PASSWORD,
      fullName: "Founding Admin",
    },
  });
  const tenantId = signupResult.tenant.id;
  const founderEmployeeId = signupResult.employee.id;

  console.log("Logging in via real HTTP POST /auth/login ...");
  const loginResult = await api<{ token: string }>("/auth/login", {
    method: "POST",
    body: { subdomain: SUBDOMAIN, email: FOUNDER_EMAIL, password: PASSWORD },
  });
  const token = loginResult.token;

  console.log("Creating an extra department (real HTTP POST /departments) ...");
  await api("/departments", { method: "POST", token, body: { code: "ops", label: "Operations", sortOrder: 45 } });

  console.log("Creating designations (real HTTP POST /designations) ...");
  const designationKeys = ["gm", "sr_manager", "manager", "executive"] as const;
  const designationLabels: Record<(typeof designationKeys)[number], string> = {
    gm: "GM",
    sr_manager: "Senior Manager",
    manager: "Manager",
    executive: "Executive",
  };
  const designationIds: Record<string, string> = {};
  for (const [i, key] of designationKeys.entries()) {
    const { designation } = await api<{ designation: { id: string } }>("/designations", {
      method: "POST",
      token,
      body: { code: key, label: designationLabels[key], sortOrder: (i + 1) * 10 },
    });
    designationIds[key] = designation.id;
  }

  console.log("Creating three additional users directly via @crm/db (see file header — no HTTP endpoint exists for this) ...");
  const gmUserId = await createUser(tenantId, "gm", "Grace Manager");
  const siteHeadUserId = await createUser(tenantId, "sitehead", "Sam Sitehead");
  const repUserId = await createUser(tenantId, "rep", "Rita Rep");

  console.log("Attaching those users as employees (real HTTP POST /employees) ...");
  const { employee: gmEmployee } = await api<{ employee: { id: string } }>("/employees", {
    method: "POST",
    token,
    body: { userId: gmUserId, designationId: designationIds.gm, reportsToEmployeeId: founderEmployeeId },
  });
  const { employee: siteHeadEmployee } = await api<{ employee: { id: string } }>("/employees", {
    method: "POST",
    token,
    body: { userId: siteHeadUserId, designationId: designationIds.sr_manager, reportsToEmployeeId: gmEmployee.id },
  });
  const { employee: repEmployee } = await api<{ employee: { id: string } }>("/employees", {
    method: "POST",
    token,
    body: { userId: repUserId, designationId: designationIds.executive, reportsToEmployeeId: gmEmployee.id },
  });

  console.log("Creating projects (real HTTP POST /projects) ...");
  const projectNames = ["Demo Aurum", "Demo Greens", "Demo Skyline", "Demo Riverside"];
  const projectIds: string[] = [];
  for (const name of projectNames) {
    const { project } = await api<{ project: { id: string } }>("/projects", { method: "POST", token, body: { name } });
    projectIds.push(project.id);
  }
  const [aurum, greens, skyline, riverside] = projectIds as [string, string, string, string];

  console.log("Looking up site_head/project_head role ids (real HTTP GET /roles) ...");
  const { roles } = await api<{ roles: { id: string; key: string }[] }>("/roles", { token });
  const siteHeadRoleId = roles.find((r) => r.key === "site_head")!.id;
  const projectHeadRoleId = roles.find((r) => r.key === "project_head")!.id;

  console.log("Granting project roles (real HTTP POST /project-role-grants), reproducing the fixtures' Employee-D scenario ...");
  // History: the GM briefly held Site Head on Aurum before handing it to the
  // dedicated Site Head hire — revoked below to exercise the append-only path.
  const { projectRoleGrant: toRevoke } = await api<{ projectRoleGrant: { id: string } }>("/project-role-grants", {
    method: "POST",
    token,
    body: { employeeId: gmEmployee.id, roleId: siteHeadRoleId, projectId: aurum },
  });
  await api(`/project-role-grants/${toRevoke.id}/revoke`, { method: "POST", token });

  // Aurum: Site Head hire takes over.
  await api("/project-role-grants", { method: "POST", token, body: { employeeId: siteHeadEmployee.id, roleId: siteHeadRoleId, projectId: aurum } });
  // Greens: Site Head hire is Site Head; GM is Project Head; a second Project
  // Head (the rep) is also granted here, showing no per-project cardinality limit.
  await api("/project-role-grants", { method: "POST", token, body: { employeeId: siteHeadEmployee.id, roleId: siteHeadRoleId, projectId: greens } });
  await api("/project-role-grants", { method: "POST", token, body: { employeeId: gmEmployee.id, roleId: projectHeadRoleId, projectId: greens } });
  await api("/project-role-grants", { method: "POST", token, body: { employeeId: repEmployee.id, roleId: projectHeadRoleId, projectId: greens } });
  // Skyline: Site Head hire is Site Head.
  await api("/project-role-grants", { method: "POST", token, body: { employeeId: siteHeadEmployee.id, roleId: siteHeadRoleId, projectId: skyline } });
  // Riverside: Site Head hire holds BOTH roles simultaneously (the fixtures'
  // "Project E" case: Employee D = Site Head + Project Head at once).
  await api("/project-role-grants", { method: "POST", token, body: { employeeId: siteHeadEmployee.id, roleId: siteHeadRoleId, projectId: riverside } });
  await api("/project-role-grants", { method: "POST", token, body: { employeeId: siteHeadEmployee.id, roleId: projectHeadRoleId, projectId: riverside } });

  await closeDbConnection();

  console.log("\nDone. Log in at /login with:");
  console.log(`  subdomain: ${SUBDOMAIN}`);
  console.log(`  email:     ${FOUNDER_EMAIL}`);
  console.log(`  password:  ${PASSWORD}`);
}

main().catch(async (err) => {
  console.error(err);
  await closeDbConnection();
  process.exit(1);
});
