/**
 * Organization / Users read model over the fixtures. Every function here is a
 * query the real API will answer from the same tables (03ak §4); swapping the
 * data source should leave the screens untouched.
 */
import {
  departments,
  designations,
  employees,
  permissions,
  projectRoleGrants,
  rolePermissions,
  roles,
  userRoles,
} from "./fixtures/org";
import { projects, users } from "./fixtures/tenants";
import type {
  Department,
  Designation,
  Employee,
  Permission,
  Project,
  ProjectRoleGrant,
  Role,
  User,
  UserRoleGrant,
} from "./fixtures/types";

export { departments, designations, employees, permissions, projectRoleGrants, roles, userRoles };

// ───────────────────────── lookups ─────────────────────────

export function getEmployee(id: string): Employee | undefined {
  return employees.find((e) => e.id === id);
}
export function employeeForUser(userId: string): Employee | undefined {
  return employees.find((e) => e.userId === userId);
}
export function employeeUser(e: Employee): User {
  return users.find((u) => u.id === e.userId)!;
}
export function employeeName(e: Employee): string {
  return employeeUser(e).name;
}
export function getDepartment(id: string | null): Department | undefined {
  return id ? departments.find((d) => d.id === id) : undefined;
}
export function getDesignation(id: string | null): Designation | undefined {
  return id ? designations.find((d) => d.id === id) : undefined;
}
export function getRole(id: string): Role | undefined {
  return roles.find((r) => r.id === id);
}
export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function employeesForTenant(tenantId: string): Employee[] {
  return employees
    .filter((e) => e.tenantId === tenantId)
    .sort((a, b) => employeeName(a).localeCompare(employeeName(b)));
}
export function departmentsForTenant(tenantId: string): Department[] {
  return departments.filter((d) => d.tenantId === tenantId).sort((a, b) => a.sortOrder - b.sortOrder);
}
export function designationsForTenant(tenantId: string): Designation[] {
  return designations.filter((d) => d.tenantId === tenantId).sort((a, b) => a.sortOrder - b.sortOrder);
}
export function rolesForTenant(tenantId: string): Role[] {
  return roles.filter((r) => r.tenantId === tenantId);
}
export function permissionsForTenant(tenantId: string): Permission[] {
  return permissions.filter((p) => p.tenantId === tenantId);
}
export function projectsForTenant(tenantId: string): Project[] {
  return projects.filter((p) => p.tenantId === tenantId).sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

/** Whether the employee's user can currently sign in (Spec §57: access ends on users.status). */
export function isActive(e: Employee): boolean {
  return employeeUser(e).status === "active";
}

// ───────────────────────── reporting tree (PO-AF1·B, AC-55) ─────────────────────────

/**
 * Managers above `e`, nearest first. Index 0 is the DIRECT manager
 * ("immediate manager"); the rest are INDIRECT ("any manager above in the
 * same chain"). Cycles are impossible in the real schema (trigger); guarded
 * here anyway so a bad fixture cannot hang the page.
 */
export function managerChain(e: Employee): Employee[] {
  const chain: Employee[] = [];
  const seen = new Set<string>([e.id]);
  let cur = e.reportsToEmployeeId ? getEmployee(e.reportsToEmployeeId) : undefined;
  while (cur && !seen.has(cur.id)) {
    chain.push(cur);
    seen.add(cur.id);
    cur = cur.reportsToEmployeeId ? getEmployee(cur.reportsToEmployeeId) : undefined;
  }
  return chain;
}

export function directManager(e: Employee): Employee | undefined {
  return e.reportsToEmployeeId ? getEmployee(e.reportsToEmployeeId) : undefined;
}

export function directReports(e: Employee): Employee[] {
  return employees.filter((x) => x.reportsToEmployeeId === e.id).sort((a, b) => employeeName(a).localeCompare(employeeName(b)));
}

export interface ReportNode {
  employee: Employee;
  /** 1 = direct report, 2+ = indirect. */
  depth: number;
  children: ReportNode[];
}

/** The tree below `e` (Tree(actor) in 03ai notation), depth-first. */
export function reportsTree(e: Employee, depth = 1): ReportNode[] {
  return directReports(e).map((r) => ({ employee: r, depth, children: reportsTree(r, depth + 1) }));
}

export function flattenReports(nodes: ReportNode[]): ReportNode[] {
  return nodes.flatMap((n) => [n, ...flattenReports(n.children)]);
}

// ───────────────────────── project role grants (PO-AI1) ─────────────────────────

export function isLiveGrant(g: ProjectRoleGrant): boolean {
  return g.revokedAt === null;
}

export function grantsForTenant(tenantId: string): ProjectRoleGrant[] {
  return projectRoleGrants.filter((g) => g.tenantId === tenantId);
}

/** Live grants held by an employee, in project order. */
export function liveGrantsForEmployee(employeeId: string): ProjectRoleGrant[] {
  return projectRoleGrants.filter((g) => g.employeeId === employeeId && isLiveGrant(g));
}

/** Every grant ever made to an employee, newest first (append-only history). */
export function grantHistoryForEmployee(employeeId: string): ProjectRoleGrant[] {
  return projectRoleGrants.filter((g) => g.employeeId === employeeId).sort((a, b) => b.grantedAt.localeCompare(a.grantedAt));
}

/** Live grants on a project: "who holds role R on project P right now?" (SH@P / PH@P). */
export function liveGrantsForProject(projectId: string): ProjectRoleGrant[] {
  return projectRoleGrants.filter((g) => g.projectId === projectId && isLiveGrant(g));
}

/** Live grants for (employee, project) — zero, one or two rows. */
export function liveGrantsAt(employeeId: string, projectId: string): ProjectRoleGrant[] {
  return projectRoleGrants.filter((g) => g.employeeId === employeeId && g.projectId === projectId && isLiveGrant(g));
}

/** Employees holding at least one live project-role grant in the tenant. */
export function projectRoleHolders(tenantId: string): Employee[] {
  const ids = new Set(grantsForTenant(tenantId).filter(isLiveGrant).map((g) => g.employeeId));
  return employeesForTenant(tenantId).filter((e) => ids.has(e.id));
}

// ───────────────────────── tenant-wide roles & permissions (R2) ─────────────────────────

export function tenantRoleGrantsForUser(userId: string): UserRoleGrant[] {
  return userRoles.filter((g) => g.userId === userId);
}

export function permissionsForRole(roleId: string): Permission[] {
  const ids = new Set(rolePermissions.filter((rp) => rp.roleId === roleId).map((rp) => rp.permissionId));
  return permissions.filter((p) => ids.has(p.id));
}

export function roleHasPermission(roleId: string, permissionId: string): boolean {
  return rolePermissions.some((rp) => rp.roleId === roleId && rp.permissionId === permissionId);
}

/** Users holding a tenant-wide role, for the roles overview. */
export function usersWithRole(roleId: string): User[] {
  const ids = new Set(userRoles.filter((g) => g.roleId === roleId).map((g) => g.userId));
  return users.filter((u) => ids.has(u.id));
}

/** Project-scoped roles, in the order the screens present them (Site Head first). */
export function projectRolesForTenant(tenantId: string): Role[] {
  return rolesForTenant(tenantId)
    .filter((r) => r.grantScope === "project")
    .sort((a, b) => (a.key === "site_head" ? -1 : b.key === "site_head" ? 1 : a.name.localeCompare(b.name)));
}
