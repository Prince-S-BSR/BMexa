import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import { ScopeBadge } from "@/components/org/role-badges";
import { Badge } from "@/components/ui/badge";
import {
  grantsForTenant,
  isLiveGrant,
  loadOrgSnapshot,
  permissionsForRole,
  permissionsForTenant,
  roleHasPermission,
  rolesForTenant,
  type OrgRole,
} from "@/lib/org-api";
import { getSessionTenant, requireSession } from "@/lib/session";

export const metadata: Metadata = { title: "Roles & permissions" };

/** Presentation order: the audit authority first, then the rest of the tenant roles, then the per-project roles. */
const ORDER = ["builder_side_admin", "owner", "admin", "manager", "member", "read_only", "site_head", "project_head"];

export default async function RolesPage() {
  const token = await requireSession();
  const [snapshot, tenant] = await Promise.all([loadOrgSnapshot(token), getSessionTenant()]);
  const tenantLabel = tenant?.subdomain ?? "your organization";

  const roleList = rolesForTenant(snapshot).sort((a, b) => {
    const ia = ORDER.indexOf(a.key);
    const ib = ORDER.indexOf(b.key);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.name.localeCompare(b.name);
  });
  const permissionList = permissionsForTenant(snapshot);
  const resources = [...new Set(permissionList.map((p) => p.resource))];

  const audit = roleList.find((r) => r.key === "builder_side_admin");
  const auditPerms = permissionList.filter((p) => p.resource === "audit");
  const auditRoles = auditPerms.length
    ? roleList.filter((r) => auditPerms.every((p) => roleHasPermission(r, p.key)))
    : [];

  /**
   * Holder count. Project-scoped roles (Site Head/Project Head) are real —
   * derived from project_role_grants, a real, filterable API. Tenant-scoped
   * roles (owner/admin/manager/member/read_only/builder_side_admin) are NOT:
   * apps/api has no endpoint listing a tenant's user_roles rows, so there is
   * no way to count how many users hold a given tenant-wide role (see
   * lib/org-api.ts's file header, gap #2). Rather than show a fabricated or
   * silently-wrong "0 users", this is surfaced honestly.
   */
  function holdersLabel(role: OrgRole): string {
    if (role.grantScope === "project") {
      const n = new Set(
        grantsForTenant(snapshot)
          .filter((g) => g.roleId === role.id && isLiveGrant(g))
          .map((g) => g.employeeId),
      ).size;
      return `${n} ${n === 1 ? "holder" : "holders"}`;
    }
    return "holders not available";
  }

  return (
    <div className="flex flex-col gap-5">
      <header>
        <h1 className="text-xl font-semibold tracking-tight">Roles &amp; permissions</h1>
        <p className="text-sm text-fg-2">
          {tenantLabel} · <span className="tabular">{roleList.length}</span> roles · <span className="tabular">{permissionList.length}</span> permissions
        </p>
      </header>

      {/* Role summary cards: scope, 2FA, holders, permission count. */}
      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {roleList.map((r) => {
          const n = permissionsForRole(snapshot, r).length;
          const isAudit = r.key === "builder_side_admin";
          const isProject = r.grantScope === "project";
          return (
            <li key={r.id} className={`card flex flex-col gap-2 p-4 ${isAudit ? "border-accent/40" : ""}`}>
              <div className="flex items-start justify-between gap-2">
                <p className="flex items-center gap-1.5 font-semibold">
                  {isAudit && <ShieldCheck aria-hidden="true" className="size-4 text-accent" />}
                  {r.name}
                </p>
                <ScopeBadge scope={r.grantScope} />
              </div>
              <p className="line-clamp-3 text-xs text-fg-2">{r.description}</p>
              <p className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border pt-2 text-xs text-fg-3">
                <span className={`tabular ${isProject ? "text-fg-3" : "font-medium text-fg-2"}`}>
                  {n === 0 ? "No permissions" : `${n} of ${permissionList.length}`}
                </span>
                <span className="tabular">{holdersLabel(r)}</span>
                {r.requiresTwoFactor && <span>2FA required</span>}
                {r.isSystem && <span>System</span>}
              </p>
            </li>
          );
        })}
      </ul>

      {/* Permissions × roles matrix. */}
      <section aria-labelledby="matrix-h" className="card overflow-hidden">
        <h2 id="matrix-h" className="sr-only">
          Permission matrix
        </h2>
        {/* relative: contains the absolutely positioned sr-only cell labels, which would otherwise widen the page. */}
        <div className="relative overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2 text-left text-xs font-medium text-fg-2">
                <th scope="col" className="sticky left-0 z-10 min-w-44 bg-surface-2 px-4 py-2.5">
                  Permission
                </th>
                {roleList.map((r) => (
                  <th
                    key={r.id}
                    scope="col"
                    className={`min-w-24 px-2 py-2.5 text-center align-bottom ${r.grantScope === "project" ? "text-fg-3" : ""} ${
                      r.key === "builder_side_admin" ? "text-accent-soft-fg" : ""
                    }`}
                  >
                    <span className="block whitespace-nowrap">{r.name}</span>
                    <span className="block font-normal">{r.grantScope === "project" ? "per project" : "tenant"}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {resources.map((resource) => (
                <RowGroup key={resource} resource={resource} roles={roleList} permissions={permissionList.filter((p) => p.resource === resource)} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-1.5 border-t border-border px-4 py-3 text-xs text-fg-3">
          <p>
            <span className="font-medium text-fg-2">Audit.</span>{" "}
            {audit && auditRoles.length === 1 && auditRoles[0]!.id === audit.id
              ? `${audit.name} is the only default holder of audit read, export, correction and retraction. Owner and Admin do not hold any audit permission.`
              : "Audit permissions are held by the roles ticked above."}
          </p>
          <p>
            <span className="font-medium text-fg-2">Site Head and Project Head.</span> Granted per project, not tenant-wide, and currently hold no permissions.
            The acts they will authorise (holds, cancellations, resale release, approval exceptions) do not exist yet; their permissions are added with those acts.
          </p>
          <p>
            <span className="font-medium text-fg-2">Holder counts.</span> Real for Site Head/Project Head (from project role grants). Not available for
            tenant-wide roles — the current API has no endpoint listing who holds a tenant-wide role (see the step 5 report).
          </p>
        </div>
      </section>
    </div>
  );
}

function RowGroup({ resource, roles, permissions }: { resource: string; roles: OrgRole[]; permissions: { id: string; key: string; action: string }[] }) {
  const isAudit = resource === "audit";
  return (
    <>
      <tr className="border-b border-border bg-surface/60">
        <th scope="rowgroup" colSpan={roles.length + 1} className="sticky left-0 px-4 pt-3 pb-1 text-left text-xs font-medium text-fg-3 uppercase tracking-wide">
          <span className="inline-flex items-center gap-2">
            {resource}
            {isAudit && (
              <Badge tone="accent" className="h-5 normal-case tracking-normal">
                Builder-Side Admin only
              </Badge>
            )}
          </span>
        </th>
      </tr>
      {permissions.map((p) => (
        <tr key={p.id} className="border-b border-border last:border-b-0 hover:bg-surface-2/40">
          <th scope="row" className="sticky left-0 z-10 bg-surface px-4 py-2 text-left font-normal whitespace-nowrap">
            <span className="font-mono text-xs text-fg-2">{p.key}</span>
          </th>
          {roles.map((r) => {
            const has = roleHasPermission(r, p.key);
            return (
              <td key={r.id} className={`px-2 py-2 text-center ${r.grantScope === "project" ? "bg-surface-2/30" : ""}`}>
                {has ? (
                  <>
                    <Check aria-hidden="true" className={`mx-auto size-4 ${isAudit ? "text-accent" : "text-fg-2"}`} strokeWidth={2.25} />
                    <span className="sr-only">
                      {r.name} has {p.key}
                    </span>
                  </>
                ) : (
                  <span className="sr-only">
                    {r.name} lacks {p.key}
                  </span>
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}
