// apps/web/lib/org-api.ts
//
// Organization/Users read model over the REAL apps/api backend (Beads issue
// Final-Verison-224, step 5/5). This is the real-data counterpart to
// lib/org.ts (which stays exactly as it was, reading lib/fixtures/org.ts —
// the CRM leads/pipeline screens still use it and are explicitly out of
// scope for this step). Every function here has the same name and does the
// same job as its lib/org.ts counterpart, over the same fixture-shaped
// `Employee`/`Department`/... types (lib/fixtures/types.ts) — that
// column-for-column mirroring is what makes this swap mechanical, per the
// issue brief. The one structural difference every function here has is
// that it takes an `OrgSnapshot` (see below) instead of closing over a
// module-level fixture array, because there is no such array anymore: the
// data has to be fetched from apps/api with the caller's session token.
//
// TENANT SCOPING: nothing here takes a tenantId or a `?tenant=` param.
// Every apps/api route resolves tenantId itself from the bearer token
// (session-context.ts) and every query is scoped to it — see api-client.ts's
// header comment on this section. The fixtures' `resolveTenant()`/
// `?tenant=` multi-tenant browsing (lib/crm.ts, used by the CRM screens and
// the admin tenants list) has no real-API equivalent for an authenticated
// user, who only ever has one tenant: their own. The TenantSwitcher
// component's own comment already says this ("Mock tenant context. In the
// real product the tenant comes from the session").
//
// GENUINE, NOT-MECHANICAL GAPS (flagged in the step 5 final report, not
// silently worked around):
//   1. GET /employees and /employees/:id never select `users.full_name`
//      (only `userEmail`/`userStatus`), and there is no `/users` listing
//      endpoint at all. `employeeName()` below falls back to the employee's
//      email everywhere the fixtures showed a real person's name.
//   2. There is no endpoint that lists a tenant's `user_roles` rows (who
//      currently holds which TENANT-WIDE role). `usersWithRole()` and
//      `tenantRoleGrantsForUser()` cannot be implemented against the real
//      API and are intentionally not exported — callers render an
//      "unavailable" state instead (see org/roles/page.tsx and
//      org/employees/[id]/page.tsx). Per-PROJECT role grants (Site Head/
//      Project Head, via project_role_grants) do NOT have this problem —
//      /project-role-grants is a real, filterable listing endpoint — so
//      every project-role feature (the grid, the grant log, "N holders" for
//      project-scoped roles) is fully real and complete.
//   3. There is also no way to create an additional `users` row for an
//      existing tenant via HTTP at all (no `/users` POST, no invite
//      endpoint) — `POST /employees` requires an existing `userId`, and the
//      only thing that ever creates a `users` row is `/auth/signup`, which
//      always creates a brand-new tenant. This blocks real multi-employee
//      usage in production, not just this task's own test-data setup (see
//      the final report for how validation data was seeded despite this).

import {
  createDepartment as apiCreateDepartment,
  createDesignation as apiCreateDesignation,
  createEmployee as apiCreateEmployee,
  createProjectRoleGrant as apiCreateProjectRoleGrant,
  listDepartments,
  listDesignations,
  listEmployees,
  listProjectRoleGrants,
  listProjects,
  listRoles,
  revokeProjectRoleGrant as apiRevokeProjectRoleGrant,
  type ApiEmployee,
  type ApiMasterRow,
  type ApiProject,
  type ApiProjectRoleGrant,
  type ApiRole,
  type EmployeeCreateInput,
  type MasterCreateInput,
  type ProjectRoleGrantCreateInput,
} from "./api-client";
import type {
  Department,
  Designation,
  Employee,
  Permission,
  Project,
  ProjectRoleGrant,
  Role,
} from "./fixtures/types";

// Re-exported so pages/components can keep importing the same names they
// used against lib/fixtures/types.ts — these are structurally compatible
// supersets (extra fields; every field the fixture type declared is still
// present with the same name and type). See api-client.ts for the exact
// column-by-column provenance of each extra field.
export type OrgEmployee = ApiEmployee & Employee;
export type OrgDepartment = ApiMasterRow & Department;
export type OrgDesignation = ApiMasterRow & Designation;
export type OrgProject = ApiProject & Omit<Project, "locality">;
export type OrgRole = ApiRole & Role;

export interface OrgSnapshot {
  employees: OrgEmployee[];
  departments: OrgDepartment[];
  designations: OrgDesignation[];
  projects: OrgProject[];
  /** Full append-only history (includeRevoked: true) — grantHistoryForEmployee/the grant log need the revoked rows too. */
  projectRoleGrants: ProjectRoleGrant[];
  roles: OrgRole[];
  /** Derived — see buildPermissionCatalog below. */
  permissions: Permission[];
}

/** See ApiRole's doc comment on api-client.ts: derives a Permission catalog from the union of every role's permission keys. */
function buildPermissionCatalog(roles: OrgRole[]): Permission[] {
  const seen = new Map<string, Permission>();
  for (const role of roles) {
    for (const key of role.permissions) {
      if (seen.has(key)) continue;
      const [resource, action] = key.split(".");
      seen.set(key, { id: `perm-${key}`, tenantId: role.tenantId, key, resource: resource ?? key, action: action ?? "" });
    }
  }
  return [...seen.values()];
}

/** Fetches every collection the 5 Org/Users screens need, in parallel, for the current session's tenant. */
export async function loadOrgSnapshot(token: string): Promise<OrgSnapshot> {
  const [employeesRes, departmentsRes, designationsRes, projectsRes, grantsRes, rolesRes] = await Promise.all([
    listEmployees(token),
    listDepartments(token),
    listDesignations(token),
    listProjects(token),
    listProjectRoleGrants(token, { includeRevoked: true }),
    listRoles(token),
  ]);

  const employees = employeesRes.employees as OrgEmployee[];
  const departments = departmentsRes.departments as OrgDepartment[];
  const designations = designationsRes.designations as OrgDesignation[];
  const projects = projectsRes.projects as OrgProject[];
  const projectRoleGrants: ProjectRoleGrant[] = grantsRes.projectRoleGrants.map((g: ApiProjectRoleGrant) => ({
    ...g,
    roleGrantScope: "project",
  }));
  const roles = rolesRes.roles as OrgRole[];

  return {
    employees,
    departments,
    designations,
    projects,
    projectRoleGrants,
    roles,
    permissions: buildPermissionCatalog(roles),
  };
}

// ───────────────────────── lookups ─────────────────────────

export function getEmployee(snapshot: OrgSnapshot, id: string): OrgEmployee | undefined {
  return snapshot.employees.find((e) => e.id === id);
}
/**
 * GAP #1 (see file header): real GET /employees never returns a person's
 * name, only their email. This is that fallback, centralized in one place.
 */
export function employeeName(e: OrgEmployee): string {
  return e.userEmail;
}
export function getDepartment(snapshot: OrgSnapshot, id: string | null): OrgDepartment | undefined {
  return id ? snapshot.departments.find((d) => d.id === id) : undefined;
}
export function getDesignation(snapshot: OrgSnapshot, id: string | null): OrgDesignation | undefined {
  return id ? snapshot.designations.find((d) => d.id === id) : undefined;
}
export function getRole(snapshot: OrgSnapshot, id: string): OrgRole | undefined {
  return snapshot.roles.find((r) => r.id === id);
}
export function getProject(snapshot: OrgSnapshot, id: string): OrgProject | undefined {
  return snapshot.projects.find((p) => p.id === id);
}

export function employeesForTenant(snapshot: OrgSnapshot): OrgEmployee[] {
  return [...snapshot.employees].sort((a, b) => employeeName(a).localeCompare(employeeName(b)));
}
export function departmentsForTenant(snapshot: OrgSnapshot): OrgDepartment[] {
  return [...snapshot.departments].sort((a, b) => a.sortOrder - b.sortOrder);
}
export function designationsForTenant(snapshot: OrgSnapshot): OrgDesignation[] {
  return [...snapshot.designations].sort((a, b) => a.sortOrder - b.sortOrder);
}
export function rolesForTenant(snapshot: OrgSnapshot): OrgRole[] {
  return snapshot.roles;
}
export function permissionsForTenant(snapshot: OrgSnapshot): Permission[] {
  return snapshot.permissions;
}
export function projectsForTenant(snapshot: OrgSnapshot): OrgProject[] {
  return [...snapshot.projects].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

/** Whether the employee's user can currently sign in (Spec §57: access ends on users.status). */
export function isActive(e: OrgEmployee): boolean {
  return e.userStatus === "active";
}

// ───────────────────────── reporting tree (PO-AF1·B, AC-55) ─────────────────────────

export function managerChain(snapshot: OrgSnapshot, e: OrgEmployee): OrgEmployee[] {
  const chain: OrgEmployee[] = [];
  const seen = new Set<string>([e.id]);
  let cur = e.reportsToEmployeeId ? getEmployee(snapshot, e.reportsToEmployeeId) : undefined;
  while (cur && !seen.has(cur.id)) {
    chain.push(cur);
    seen.add(cur.id);
    cur = cur.reportsToEmployeeId ? getEmployee(snapshot, cur.reportsToEmployeeId) : undefined;
  }
  return chain;
}

export function directManager(snapshot: OrgSnapshot, e: OrgEmployee): OrgEmployee | undefined {
  return e.reportsToEmployeeId ? getEmployee(snapshot, e.reportsToEmployeeId) : undefined;
}

export function directReports(snapshot: OrgSnapshot, e: OrgEmployee): OrgEmployee[] {
  return snapshot.employees
    .filter((x) => x.reportsToEmployeeId === e.id)
    .sort((a, b) => employeeName(a).localeCompare(employeeName(b)));
}

export interface ReportNode {
  employee: OrgEmployee;
  /** 1 = direct report, 2+ = indirect. */
  depth: number;
  children: ReportNode[];
}

export function reportsTree(snapshot: OrgSnapshot, e: OrgEmployee, depth = 1): ReportNode[] {
  return directReports(snapshot, e).map((r) => ({ employee: r, depth, children: reportsTree(snapshot, r, depth + 1) }));
}

export function flattenReports(nodes: ReportNode[]): ReportNode[] {
  return nodes.flatMap((n) => [n, ...flattenReports(n.children)]);
}

// ───────────────────────── project role grants (PO-AI1) ─────────────────────────

export function isLiveGrant(g: ProjectRoleGrant): boolean {
  return g.revokedAt === null;
}

export function grantsForTenant(snapshot: OrgSnapshot): ProjectRoleGrant[] {
  return snapshot.projectRoleGrants;
}

export function liveGrantsForEmployee(snapshot: OrgSnapshot, employeeId: string): ProjectRoleGrant[] {
  return snapshot.projectRoleGrants.filter((g) => g.employeeId === employeeId && isLiveGrant(g));
}

export function grantHistoryForEmployee(snapshot: OrgSnapshot, employeeId: string): ProjectRoleGrant[] {
  return snapshot.projectRoleGrants.filter((g) => g.employeeId === employeeId).sort((a, b) => b.grantedAt.localeCompare(a.grantedAt));
}

export function liveGrantsForProject(snapshot: OrgSnapshot, projectId: string): ProjectRoleGrant[] {
  return snapshot.projectRoleGrants.filter((g) => g.projectId === projectId && isLiveGrant(g));
}

export function liveGrantsAt(snapshot: OrgSnapshot, employeeId: string, projectId: string): ProjectRoleGrant[] {
  return snapshot.projectRoleGrants.filter((g) => g.employeeId === employeeId && g.projectId === projectId && isLiveGrant(g));
}

export function projectRoleHolders(snapshot: OrgSnapshot): OrgEmployee[] {
  const ids = new Set(grantsForTenant(snapshot).filter(isLiveGrant).map((g) => g.employeeId));
  return employeesForTenant(snapshot).filter((e) => ids.has(e.id));
}

// ───────────────────────── tenant-wide roles & permissions (R2) ─────────────────────────

export function permissionsForRole(snapshot: OrgSnapshot, role: OrgRole): Permission[] {
  return snapshot.permissions.filter((p) => role.permissions.includes(p.key));
}

export function roleHasPermission(role: OrgRole, permissionKey: string): boolean {
  return role.permissions.includes(permissionKey);
}

/** Project-scoped roles, in the order the screens present them (Site Head first). */
export function projectRolesForTenant(snapshot: OrgSnapshot): OrgRole[] {
  return rolesForTenant(snapshot)
    .filter((r) => r.grantScope === "project")
    .sort((a, b) => (a.key === "site_head" ? -1 : b.key === "site_head" ? 1 : a.name.localeCompare(b.name)));
}

// ───────────────────────── mutations used only for seeding validation data ─────────────────────────
//
// Not called from any of the 5 read screens — these exist so
// scripts/seed-org-data.ts (validation-only, see final report) can create
// employees/departments/designations/project-role-grants against the real
// API using the same typed shapes the screens read, instead of hand-rolling
// ad hoc fetch calls.

export function createEmployee(input: EmployeeCreateInput, token: string) {
  return apiCreateEmployee(input, token);
}
export function createDepartment(input: MasterCreateInput, token: string) {
  return apiCreateDepartment(input, token);
}
export function createDesignation(input: MasterCreateInput, token: string) {
  return apiCreateDesignation(input, token);
}
export function createProjectRoleGrant(input: ProjectRoleGrantCreateInput, token: string) {
  return apiCreateProjectRoleGrant(input, token);
}
export function revokeProjectRoleGrant(id: string, token: string) {
  return apiRevokeProjectRoleGrant(id, token);
}
