import type { Metadata } from "next";
import Link from "next/link";
import { FolderKanban } from "lucide-react";
import { employeeHref } from "@/components/org/employee-link";
import { ProjectRoleBadge } from "@/components/org/role-badges";
import { resolveTenant } from "@/lib/crm";
import { formatDate } from "@/lib/format";
import { employeeName, getEmployee, liveGrantsForProject, projectRolesForTenant, projectsForTenant } from "@/lib/org";

export const metadata: Metadata = { title: "Projects" };

export default async function ProjectsPage(props: PageProps<"/org/projects">) {
  const sp = await props.searchParams;
  const tenant = resolveTenant(sp.tenant);
  const projectList = projectsForTenant(tenant.id);
  const projectRoles = projectRolesForTenant(tenant.id);

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Projects</h1>
          <p className="text-sm text-fg-2">
            {tenant.name} · <span className="tabular">{projectList.length}</span> {projectList.length === 1 ? "project" : "projects"}
          </p>
        </div>
        <Link href={`/org/project-roles?tenant=${tenant.id}`} className="text-sm font-medium text-accent hover:underline">
          Role grants grid
        </Link>
      </header>

      {projectList.length === 0 ? (
        <div className="card flex flex-col items-center gap-2 px-6 py-14 text-center">
          <FolderKanban aria-hidden="true" className="size-8 text-fg-3" strokeWidth={1.5} />
          <p className="font-medium">No projects yet</p>
          <p className="max-w-xs text-sm text-fg-2">{tenant.name} has not added a project.</p>
        </div>
      ) : (
        <>
          <div className="card hidden overflow-hidden md:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2 text-left text-xs font-medium text-fg-2">
                  <th scope="col" className="px-4 py-2.5">Project</th>
                  <th scope="col" className="px-4 py-2.5">Created</th>
                  <th scope="col" className="px-4 py-2.5">Role holders</th>
                </tr>
              </thead>
              <tbody>
                {projectList.map((p) => {
                  const here = liveGrantsForProject(p.id);
                  return (
                    <tr key={p.id} className="border-b border-border last:border-b-0 hover:bg-surface-2/60">
                      <td className="px-4 py-3 align-top font-medium">{p.name}</td>
                      <td className="px-4 py-3 align-top text-fg-2 tabular whitespace-nowrap">{formatDate(p.createdAt, true)}</td>
                      <td className="px-4 py-3 align-top">
                        {here.length === 0 ? (
                          <span className="text-fg-3">Nobody</span>
                        ) : (
                          <ul className="flex flex-wrap gap-x-4 gap-y-1">
                            {projectRoles.map((r) => {
                              const holders = here.filter((g) => g.roleId === r.id).map((g) => getEmployee(g.employeeId)!);
                              if (holders.length === 0) return null;
                              return (
                                <li key={r.id} className="flex items-center gap-1.5">
                                  <ProjectRoleBadge role={r} compact />
                                  <span className="text-fg-2">
                                    {holders.map((h, i) => (
                                      <span key={h.id}>
                                        {i > 0 && ", "}
                                        <Link href={employeeHref(h)} className="hover:underline">
                                          {employeeName(h)}
                                        </Link>
                                      </span>
                                    ))}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <ul className="flex flex-col gap-2 md:hidden">
            {projectList.map((p) => {
              const here = liveGrantsForProject(p.id);
              return (
                <li key={p.id} className="card p-3.5">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-fg-3 tabular">Created {formatDate(p.createdAt, true)}</p>
                  <ul className="mt-2.5 flex flex-col gap-1 border-t border-border pt-2.5 text-sm">
                    {here.length === 0 && <li className="text-fg-3">Nobody holds a role here</li>}
                    {projectRoles.map((r) => {
                      const holders = here.filter((g) => g.roleId === r.id).map((g) => getEmployee(g.employeeId)!);
                      if (holders.length === 0) return null;
                      return (
                        <li key={r.id} className="flex items-center gap-1.5">
                          <ProjectRoleBadge role={r} compact />
                          <span className="text-fg-2">{holders.map(employeeName).join(", ")}</span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </>
      )}

      <p className="text-xs text-fg-3">
        A project record holds only a name and timestamps for now. Status, towers, inventory and pricing belong to a later phase; role holders are read
        from the grants, not stored on the project.
      </p>
    </div>
  );
}
