// apps/web/lib/api-client.ts
//
// Thin server-side API client for the real apps/api backend (Beads issue
// Final-Verison-a98, step 3/5). This module is the ONLY place in apps/web
// that knows the backend's base URL and request/response shapes — Route
// Handlers, Server Components and Server Actions call through it rather
// than calling `fetch` against apps/api directly.
//
// Server-side only. It never touches cookies or browser storage itself
// (that's lib/session.ts) and it never runs in a Client Component: nothing
// here is marked "use client", it is only ever imported from Route Handlers
// and Server Components, and API_BASE_URL is deliberately NOT prefixed
// NEXT_PUBLIC_, so it would be undefined if a client bundle ever pulled it
// in. A bearer token is only ever attached because a caller passed one in
// explicitly (see `token` on ApiRequestInit) — this module never reads it
// from a cookie itself.
//
// Shapes below are copied from apps/api/src/routes/auth.ts's actual request
// bodies and reply payloads (both routes tested, 207 passing tests total as
// of step 2) — not invented. If auth.ts's shapes change, update here too.

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:4000";

/** Every error apps/api's auth routes reply with is `{ error: "<code>", ... }`. */
export interface ApiErrorBody {
  error: string;
  [key: string]: unknown;
}

/**
 * Thrown for any non-2xx response. Carries the HTTP status and the parsed
 * error body verbatim so callers (Route Handlers today; Server Components/
 * Actions in later steps) can branch on `body.error` (e.g. "invalid_credentials",
 * "account_locked", "subdomain_taken") instead of re-parsing a message string.
 */
export class ApiClientError extends Error {
  readonly status: number;
  readonly body: ApiErrorBody;

  constructor(status: number, body: ApiErrorBody) {
    super(typeof body.error === "string" ? body.error : `request_failed_${status}`);
    this.name = "ApiClientError";
    this.status = status;
    this.body = body;
  }
}

interface ApiRequestInit extends Omit<RequestInit, "body"> {
  /** JSON-serializable request body. */
  body?: unknown;
  /**
   * Bearer token to attach as `Authorization: Bearer <token>`, exactly what
   * apps/api/src/middleware/session-context.ts expects. Callers pass this
   * in explicitly (e.g. from lib/session.ts's getSessionToken()) — this
   * module does not look tokens up itself.
   */
  token?: string;
}

/**
 * Base fetch wrapper: JSON in, JSON out, real network calls against
 * apps/api. Every typed helper below (signup, login) is built on this, and
 * later steps can call it directly (e.g. `apiFetch("/employees", { token })`)
 * for endpoints this step doesn't need to wrap yet.
 */
export async function apiFetch<T>(path: string, init: ApiRequestInit = {}): Promise<T> {
  const { token, body, headers, ...rest } = init;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      // Only set when there IS a body: apps/api's routes are plain Fastify
      // JSON-body routes (e.g. employees.ts's /:id/deactivate,
      // project-role-grants.ts's /:id/revoke) with no body of their own, and
      // Fastify's default JSON content-type parser rejects an
      // `application/json` request whose body is empty
      // (`FST_ERR_CTP_EMPTY_JSON_BODY`) — found while wiring
      // deactivateEmployee/revokeProjectRoleGrant for Beads issue
      // Final-Verison-224, step 5/5; verified against the real running
      // apps/api. This bug predates this step (every step-3 caller —
      // signup/login — always sent a body, so it never surfaced) but every
      // no-body POST added in this step needed it fixed here, at the one
      // shared wrapper, rather than worked around per call site.
      ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    // Auth calls (and anything bearer-authenticated) must never be cached —
    // Route Handlers are uncached by default for non-GET methods anyway,
    // but this keeps the client's own behavior explicit and correct if a
    // future GET helper is added here.
    cache: "no-store",
  });

  const raw = await res.text();
  const parsed: unknown = raw ? JSON.parse(raw) : {};

  if (!res.ok) {
    throw new ApiClientError(res.status, parsed as ApiErrorBody);
  }

  return parsed as T;
}

// --- /auth/signup ---------------------------------------------------------

export interface SignupInput {
  subdomain: string;
  tenantName: string;
  email: string;
  password: string;
  fullName?: string;
}

export interface SignupResult {
  tenant: { id: string; subdomain: string; name: string };
  user: { id: string; email: string };
  employee: { id: string };
}

/**
 * Calls the real `POST /auth/signup`. Note: per auth.ts, signup creates the
 * tenant + founding user but does NOT mint a session — there is no token in
 * this response. Callers that want the founding user logged in afterward
 * (the signup Route Handler does) must call `login()` separately with the
 * same credentials.
 */
export function signup(input: SignupInput): Promise<SignupResult> {
  return apiFetch<SignupResult>("/auth/signup", { method: "POST", body: input });
}

// --- /auth/login ------------------------------------------------------------

export interface LoginInput {
  subdomain: string;
  email: string;
  password: string;
}

export interface LoginResult {
  token: string;
  tenant: { id: string; subdomain: string };
  user: { id: string; email: string };
  expiresAt: string;
}

/**
 * Calls the real `POST /auth/login`. On success, `token` is the raw bearer
 * token (apps/api only ever persists its hash) — callers must not return it
 * to the browser in a JSON body; it belongs in the httpOnly cookie
 * lib/session.ts sets, nowhere else.
 */
export function login(input: LoginInput): Promise<LoginResult> {
  return apiFetch<LoginResult>("/auth/login", { method: "POST", body: input });
}

// ---------------------------------------------------------------------------
// Organization/Users resources (Beads issue Final-Verison-224, step 5/5).
// Shapes below are copied verbatim from each route file's own SELECT/
// RETURNING column list — apps/api/src/routes/{employees,departments,
// designations,projects,project-role-grants,roles}.ts — the same way the
// auth shapes above were copied from auth.ts. Every call here requires a
// bearer token (`token` on ApiRequestInit): apps/api's
// sessionContextPreHandler rejects with 401 without one, and every route
// below also requires a specific permission (requirePermission(...) in the
// route file) that the caller's tenant-wide roles must carry, or apps/api
// replies 403 `permission_denied`.
//
// tenantId is deliberately NOT a parameter anywhere in this section: every
// route below resolves it itself from the bearer token
// (session-context.ts) and scopes every query to it. There is no
// multi-tenant "?tenant=" switch for real data the way the CRM fixtures'
// lib/crm.ts `resolveTenant()` has for fixtures/tenants.ts — the fixtures'
// own TenantSwitcher component already says as much ("Mock tenant context.
// In the real product the tenant comes from the session").

/** `users.status` — verbatim from apps/api's employees.ts `userStatus` column. */
export type UserStatus = "invited" | "active" | "suspended" | "deactivated";

/** GET/POST/PATCH `/employees` row shape, exactly as employees.ts's `EMPLOYEE_COLUMNS` + join returns it. */
export interface ApiEmployee {
  id: string;
  tenantId: string;
  userId: string;
  departmentId: string | null;
  designationId: string | null;
  reportsToEmployeeId: string | null;
  customAttributes: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  /**
   * The employee's user's email and status, joined in by employees.ts. NOTE:
   * this is the only user-identifying field GET /employees and
   * GET /employees/:id return — `users.full_name` is never selected by
   * either route, even though the column exists and signup populates it.
   * There is also no `/users` listing endpoint at all. See the step 5 final
   * report: this is a genuine, unavoidable API gap (not something this
   * frontend-wiring task should quietly work around by adding a backend
   * endpoint), and the Org/Users screens fall back to this email wherever
   * the fixtures showed a person's name.
   */
  userEmail: string;
  userStatus: UserStatus;
}

export interface EmployeeCreateInput {
  userId: string;
  departmentId?: string | null;
  designationId?: string | null;
  reportsToEmployeeId?: string | null;
  customAttributes?: Record<string, unknown>;
}

export interface EmployeeUpdateInput {
  departmentId?: string | null;
  designationId?: string | null;
  reportsToEmployeeId?: string | null;
  customAttributes?: Record<string, unknown>;
}

export function listEmployees(token: string): Promise<{ employees: ApiEmployee[] }> {
  return apiFetch<{ employees: ApiEmployee[] }>("/employees", { token });
}
export function getEmployee(id: string, token: string): Promise<{ employee: ApiEmployee }> {
  return apiFetch<{ employee: ApiEmployee }>(`/employees/${id}`, { token });
}
export function createEmployee(input: EmployeeCreateInput, token: string): Promise<{ employee: ApiEmployee }> {
  return apiFetch<{ employee: ApiEmployee }>("/employees", { method: "POST", body: input, token });
}
export function updateEmployee(id: string, input: EmployeeUpdateInput, token: string): Promise<{ employee: ApiEmployee }> {
  return apiFetch<{ employee: ApiEmployee }>(`/employees/${id}`, { method: "PATCH", body: input, token });
}
export function deactivateEmployee(id: string, token: string): Promise<{ employee: ApiEmployee }> {
  return apiFetch<{ employee: ApiEmployee }>(`/employees/${id}/deactivate`, { method: "POST", token });
}

/** Shared R4 master shape — verbatim from `registerOrgMasterRoutes` (departments AND designations). */
export interface ApiMasterRow {
  id: string;
  tenantId: string;
  code: string;
  label: string;
  description: string | null;
  sortOrder: number;
  isActive: boolean;
  isSystem: boolean;
  customAttributes: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface MasterCreateInput {
  code: string;
  label: string;
  description?: string | null;
  sortOrder?: number;
  customAttributes?: Record<string, unknown>;
}

export function listDepartments(token: string): Promise<{ departments: ApiMasterRow[] }> {
  return apiFetch<{ departments: ApiMasterRow[] }>("/departments", { token });
}
export function createDepartment(input: MasterCreateInput, token: string): Promise<{ department: ApiMasterRow }> {
  return apiFetch<{ department: ApiMasterRow }>("/departments", { method: "POST", body: input, token });
}
export function listDesignations(token: string): Promise<{ designations: ApiMasterRow[] }> {
  return apiFetch<{ designations: ApiMasterRow[] }>("/designations", { token });
}
export function createDesignation(input: MasterCreateInput, token: string): Promise<{ designation: ApiMasterRow }> {
  return apiFetch<{ designation: ApiMasterRow }>("/designations", { method: "POST", body: input, token });
}

/**
 * GET/POST/PATCH `/projects` row shape (projects.ts `PROJECT_COLUMNS`). Note:
 * no `locality` field — the real `projects` table is the deliberate minimal
 * stub projects.ts's header describes (id, tenant, name, custom_attributes,
 * timestamps only). The fixtures' `Project.locality` was, per its own doc
 * comment in fixtures/types.ts, "a customer-screen display convenience" the
 * Organization screens never rendered anyway, so this is not a UI-visible
 * gap for the 5 screens this step wires up.
 */
export interface ApiProject {
  id: string;
  tenantId: string;
  name: string;
  customAttributes: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectCreateInput {
  name: string;
  customAttributes?: Record<string, unknown>;
}

export function listProjects(token: string): Promise<{ projects: ApiProject[] }> {
  return apiFetch<{ projects: ApiProject[] }>("/projects", { token });
}
export function getProject(id: string, token: string): Promise<{ project: ApiProject }> {
  return apiFetch<{ project: ApiProject }>(`/projects/${id}`, { token });
}
export function createProject(input: ProjectCreateInput, token: string): Promise<{ project: ApiProject }> {
  return apiFetch<{ project: ApiProject }>("/projects", { method: "POST", body: input, token });
}
export function updateProject(id: string, name: string, token: string): Promise<{ project: ApiProject }> {
  return apiFetch<{ project: ApiProject }>(`/projects/${id}`, { method: "PATCH", body: { name }, token });
}

/** `/project-role-grants` row shape (project-role-grants.ts `GRANT_COLUMNS`). Append-only: no PATCH, revoke is its own route. */
export interface ApiProjectRoleGrant {
  id: string;
  tenantId: string;
  employeeId: string;
  roleId: string;
  projectId: string;
  grantedByUserId: string | null;
  grantedAt: string;
  revokedAt: string | null;
  revokedByUserId: string | null;
}

export interface ProjectRoleGrantCreateInput {
  employeeId: string;
  roleId: string;
  projectId: string;
}

export interface ListProjectRoleGrantsOptions {
  projectId?: string;
  employeeId?: string;
  /** Mirrors project-role-grants.ts's `includeRevoked` query param — defaults to live-only, same as the route. */
  includeRevoked?: boolean;
}

export function listProjectRoleGrants(
  token: string,
  opts: ListProjectRoleGrantsOptions = {},
): Promise<{ projectRoleGrants: ApiProjectRoleGrant[] }> {
  const q = new URLSearchParams();
  if (opts.projectId) q.set("projectId", opts.projectId);
  if (opts.employeeId) q.set("employeeId", opts.employeeId);
  if (opts.includeRevoked) q.set("includeRevoked", "true");
  const qs = q.toString();
  return apiFetch<{ projectRoleGrants: ApiProjectRoleGrant[] }>(`/project-role-grants${qs ? `?${qs}` : ""}`, { token });
}
export function createProjectRoleGrant(input: ProjectRoleGrantCreateInput, token: string): Promise<{ projectRoleGrant: ApiProjectRoleGrant }> {
  return apiFetch<{ projectRoleGrant: ApiProjectRoleGrant }>("/project-role-grants", { method: "POST", body: input, token });
}
export function revokeProjectRoleGrant(id: string, token: string): Promise<{ projectRoleGrant: ApiProjectRoleGrant }> {
  return apiFetch<{ projectRoleGrant: ApiProjectRoleGrant }>(`/project-role-grants/${id}/revoke`, { method: "POST", token });
}

/**
 * `/roles` row shape (roles.ts). Unlike the fixtures' separate `Role` +
 * `Permission` + `RolePermission` tables, apps/api nests each role's
 * permission keys directly on the role (`permissions: string[]`) and has no
 * standalone `/permissions` listing endpoint at all. lib/org-api.ts derives
 * a Permission-catalog-shaped view from the union of every role's
 * `permissions` for the roles & permissions screen — see that file's
 * `buildPermissionCatalog` for the mechanics and its header comment for why
 * that derivation is sound (builder_side_admin holds the full catalogue).
 */
export interface ApiRole {
  id: string;
  tenantId: string;
  key: string;
  name: string;
  description: string | null;
  isSystem: boolean;
  requiresTwoFactor: boolean;
  grantScope: "tenant" | "project";
  permissions: string[];
}

export function listRoles(token: string): Promise<{ roles: ApiRole[] }> {
  return apiFetch<{ roles: ApiRole[] }>("/roles", { token });
}

export interface ApiUserRole {
  userId: string;
  roleId: string;
  grantedBy: string | null;
  grantedAt: string;
}

/**
 * There is deliberately no `listUserRoles`/`usersWithRole` call here: apps/api
 * has no endpoint that lists a tenant's `user_roles` rows (who currently
 * holds which tenant-wide role) — only assign (`POST /users/:userId/roles`)
 * and unassign (`DELETE /users/:userId/roles/:roleId`), both of which need
 * to already know a specific target user and role, not discover them. See
 * the step 5 final report: this blocks the roles screen's tenant-wide
 * "N holders" count and the employee detail screen's "tenant-wide roles"
 * section, and is a genuine API gap, not something worked around here.
 */
export function assignUserRole(userId: string, roleId: string, token: string): Promise<{ userRole: ApiUserRole }> {
  return apiFetch<{ userRole: ApiUserRole }>(`/users/${userId}/roles`, { method: "POST", body: { roleId }, token });
}
export function unassignUserRole(userId: string, roleId: string, token: string): Promise<{ userRole: { userId: string; roleId: string } }> {
  return apiFetch<{ userRole: { userId: string; roleId: string } }>(`/users/${userId}/roles/${roleId}`, { method: "DELETE", token });
}
