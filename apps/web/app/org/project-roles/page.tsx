import type { Metadata } from "next";
import Link from "next/link";
import { EmployeeLink, employeeHref } from "@/components/org/employee-link";
import { ProjectRoleBadge } from "@/components/org/role-badges";
import { resolveTenant } from "@/lib/crm";
import { formatDate } from "@/lib/format";
import {
  employeeName,
  getEmployee,
  getRole,
  grantsForTenant,
  isActive,
  isLiveGrant,
  liveGrantsAt,
  liveGrantsForEmployee,
  liveGrantsForProject,
  projectRoleHolders,
  projectRolesForTenant,
  projectsForTenant,
} from "@/lib/org";
import { users } from "@/lib/fixtures/tenants";

export const metadata: Metadata = { title: "Project roles" };

export default async function ProjectRolesPage(props: PageProps<"/org/project-roles">) {
  const sp = await props.searchParams;
  const tenant = resolveTenant(sp.tenant);

  const projectList = projectsForTenant(tenant.id);
  const holders = projectRoleHolders(tenant.id);
  const projectRoles = projectRolesForTenant(tenant.id);
  const allGrants = grantsForTenant(tenant.id).sort((a, b) => b.grantedAt.localeCompare(a.grantedAt));
  const liveCount = allGrants.filter(isLiveGrant).length;

  const userName = (id: string | null) => (id ? (users.find((u) => u.id === id)?.name ?? "—") : "—");

  return (
    <div className="flex flex-col gap-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Project roles</h1>
          <p className="text-sm text-fg-2">
            {tenant.name} · <span className="tabular">{liveCount}</span> live {liveCount === 1 ? "grant" : "grants"} across{" "}
            <span className="tabular">{projectList.length}</span> {projectList.length === 1 ? "project" : "projects"}
          </p>
        </div>
        <dl className="flex items-center gap-3 text-xs text-fg-2">
          {projectRoles.map((r) => (
            <div key={r.id} className="flex items-center gap-1.5">
              <dt className="sr-only">{r.name}</dt>
              <dd>
                <ProjectRoleBadge role={r} />
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Employees × projects grid: each cell is the set of roles held there. */}
      <section aria-labelledby="grid-h" className="card overflow-hidden">
        <h2 id="grid-h" className="sr-only">
          Role grants by employee and project
        </h2>
        {holders.length === 0 ? (
          <p className="px-4 py-10 text-center text-sm text-fg-2">No project roles have been granted at {tenant.name} yet.</p>
        ) : (
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2 text-left text-xs font-medium text-fg-2">
                  <th scope="col" className="sticky left-0 z-10 min-w-56 bg-surface-2 px-4 py-2.5">
                    Employee
                  </th>
                  {projectList.map((p) => {
                    const n = liveGrantsForProject(p.id).length;
                    return (
                      <th key={p.id} scope="col" className="min-w-40 px-4 py-2.5 align-bottom">
                        <span className="block font-medium text-fg">{p.name}</span>
                        <span className="block font-normal tabular">
                          {n} {n === 1 ? "grant" : "grants"}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {holders.map((e) => {
                  const total = liveGrantsForEmployee(e.id).length;
                  return (
                    <tr key={e.id} className="border-b border-border last:border-b-0 hover:bg-surface-2/40">
                      <th scope="row" className="sticky left-0 z-10 bg-surface px-4 py-3 text-left font-normal">
                        <span className="flex items-center justify-between gap-3">
                          <EmployeeLink employee={e} muted={!isActive(e)} />
                          <span className="shrink-0 text-xs text-fg-3 tabular">{total}</span>
                        </span>
                      </th>
                      {projectList.map((p) => {
                        const here = liveGrantsAt(e.id, p.id).sort((a, b) =>
                          getRole(a.roleId)!.key === "site_head" ? -1 : getRole(b.roleId)!.key === "site_head" ? 1 : 0,
                        );
                        return (
                          <td key={p.id} className="px-4 py-3 align-top">
                            {here.length === 0 ? (
                              <span className="sr-only">No role on {p.name}</span>
                            ) : (
                              <span className="flex flex-col items-start gap-1">
                                {here.map((g) => (
                                  <ProjectRoleBadge key={g.id} role={getRole(g.roleId)!} />
                                ))}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <p className="border-t border-border px-4 py-2.5 text-xs text-fg-3">
          An employee may hold either role, both, or neither on each project, and the same role on several projects. A project may have
          several holders of the same role; no per-project maximum is set.
        </p>
      </section>

      {/* Per-project view of the same grants: who holds what on each project. */}
      <section aria-labelledby="byproj-h">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 id="byproj-h" className="text-base font-semibold">
            By project
          </h2>
          <Link href={`/org/projects?tenant=${tenant.id}`} className="text-xs font-medium text-accent hover:underline">
            Projects list
          </Link>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {projectList.map((p) => {
            const here = liveGrantsForProject(p.id);
            return (
              <li key={p.id} className="card p-4">
                <p className="truncate font-medium">{p.name}</p>
                <dl className="mt-3 flex flex-col gap-2.5">
                  {projectRoles.map((r) => {
                    const holdersHere = here.filter((g) => g.roleId === r.id).map((g) => getEmployee(g.employeeId)!);
                    return (
                      <div key={r.id} className="flex items-start gap-2">
                        <dt className="shrink-0 pt-0.5">
                          <ProjectRoleBadge role={r} compact />
                        </dt>
                        <dd className="min-w-0 text-sm">
                          {holdersHere.length === 0 ? (
                            <span className="text-fg-3">Nobody</span>
                          ) : (
                            <ul className="flex flex-col">
                              {holdersHere.map((h) => (
                                <li key={h.id} className="truncate">
                                  <Link href={employeeHref(h)} className="hover:underline">
                                    {employeeName(h)}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </li>
            );
          })}
        </ul>
      </section>

      {/* The append-only grant table itself. */}
      <section aria-labelledby="log-h" className="min-w-0">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 id="log-h" className="text-base font-semibold">
            Grant log
          </h2>
          <span className="text-xs text-fg-3 tabular">{allGrants.length} rows</span>
        </div>
        <div className="card relative overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2 text-left text-xs font-medium text-fg-2">
                <th scope="col" className="px-4 py-2.5">Granted</th>
                <th scope="col" className="px-4 py-2.5">Employee</th>
                <th scope="col" className="px-4 py-2.5">Role</th>
                <th scope="col" className="px-4 py-2.5">Project</th>
                <th scope="col" className="px-4 py-2.5">Granted by</th>
                <th scope="col" className="px-4 py-2.5">Status</th>
              </tr>
            </thead>
            <tbody>
              {allGrants.map((g) => {
                const e = getEmployee(g.employeeId)!;
                const live = isLiveGrant(g);
                return (
                  <tr key={g.id} className={`border-b border-border last:border-b-0 ${live ? "" : "text-fg-2"}`}>
                    <td className="px-4 py-2.5 whitespace-nowrap tabular">{formatDate(g.grantedAt, true)}</td>
                    <td className="px-4 py-2.5 whitespace-nowrap">
                      <Link href={employeeHref(e)} className="hover:underline">
                        {employeeName(e)}
                      </Link>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className={live ? "" : "opacity-60"}>
                        <ProjectRoleBadge role={getRole(g.roleId)!} />
                      </span>
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap">{projectList.find((p) => p.id === g.projectId)?.name}</td>
                    <td className="px-4 py-2.5 whitespace-nowrap">{userName(g.grantedByUserId)}</td>
                    <td className="px-4 py-2.5 whitespace-nowrap">
                      {live ? (
                        <span className="text-success-soft-fg">Live</span>
                      ) : (
                        <span>
                          Revoked {formatDate(g.revokedAt!, true)}
                          <span className="text-fg-3"> by {userName(g.revokedByUserId)}</span>
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-fg-3">
          Grants are appended, never edited or deleted. Revoking stamps the row; granting again adds a new one, so ownership history survives role
          changes.
        </p>
      </section>
    </div>
  );
}
