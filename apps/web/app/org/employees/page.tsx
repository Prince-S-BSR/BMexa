import type { Metadata } from "next";
import Link from "next/link";
import { UsersRound } from "lucide-react";
import { EmployeeLink, employeeHref } from "@/components/org/employee-link";
import { ProjectRoleBadge, UserStatusBadge } from "@/components/org/role-badges";
import { resolveTenant } from "@/lib/crm";
import type { Employee } from "@/lib/fixtures/types";
import {
  departmentsForTenant,
  directManager,
  employeeName,
  employeeUser,
  employeesForTenant,
  getDepartment,
  getDesignation,
  getProject,
  getRole,
  isActive,
  liveGrantsForEmployee,
} from "@/lib/org";

export const metadata: Metadata = { title: "Employees" };

function first(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

function ProjectRoleCell({ employee }: { employee: Employee }) {
  const grants = liveGrantsForEmployee(employee.id);
  if (grants.length === 0) return <span className="text-fg-3">—</span>;
  return (
    <span className="flex flex-wrap gap-1">
      {grants.map((g) => {
        const role = getRole(g.roleId)!;
        const project = getProject(g.projectId)!;
        return (
          <span key={g.id} className="inline-flex items-center gap-1 whitespace-nowrap text-xs text-fg-2">
            <ProjectRoleBadge role={role} compact />
            {project.name}
          </span>
        );
      })}
    </span>
  );
}

export default async function EmployeesPage(props: PageProps<"/org/employees">) {
  const sp = await props.searchParams;
  const tenant = resolveTenant(sp.tenant);
  const deptFilter = first(sp.dept);
  const showInactive = first(sp.inactive) === "1";

  const all = employeesForTenant(tenant.id);
  const depts = departmentsForTenant(tenant.id);
  const inactiveCount = all.filter((e) => !isActive(e)).length;

  const visible = all
    .filter((e) => (showInactive ? true : isActive(e)))
    .filter((e) => (deptFilter ? e.departmentId === `dept-${tenant.id}-${deptFilter}` : true));

  const link = (next: { dept?: string; inactive?: boolean }) => {
    const q = new URLSearchParams({ tenant: tenant.id });
    const d = "dept" in next ? next.dept : deptFilter;
    const i = "inactive" in next ? next.inactive : showInactive;
    if (d) q.set("dept", d);
    if (i) q.set("inactive", "1");
    return `/org/employees?${q.toString()}`;
  };

  const chip = (active: boolean) =>
    `inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border px-2.5 text-sm font-medium transition-colors ${
      active ? "border-fg bg-fg text-bg" : "border-border bg-surface text-fg-2 hover:border-border-strong hover:text-fg"
    }`;

  const countIn = (deptId: string | null) =>
    all.filter((e) => (showInactive ? true : isActive(e))).filter((e) => (deptId ? e.departmentId === deptId : true)).length;

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Employees</h1>
          <p className="text-sm text-fg-2">
            {tenant.name} · <span className="tabular">{visible.length}</span> of <span className="tabular">{all.length}</span> records
          </p>
        </div>
        <Link href={link({ inactive: !showInactive })} className="text-sm font-medium text-accent hover:underline" aria-pressed={showInactive}>
          {showInactive ? "Hide inactive" : `Show inactive (${inactiveCount})`}
        </Link>
      </header>

      <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-0.5 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Department">
        <Link href={link({ dept: undefined })} className={chip(!deptFilter)} aria-pressed={!deptFilter}>
          All
          <span className={`tabular ${!deptFilter ? "opacity-80" : "text-fg-3"}`}>{countIn(null)}</span>
        </Link>
        {depts.map((d) => {
          const active = deptFilter === d.code;
          return (
            <Link key={d.id} href={link({ dept: active ? undefined : d.code })} className={chip(active)} aria-pressed={active}>
              {d.label}
              <span className={`tabular ${active ? "opacity-80" : "text-fg-3"}`}>{countIn(d.id)}</span>
            </Link>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="card flex flex-col items-center gap-2 px-6 py-14 text-center">
          <UsersRound aria-hidden="true" className="size-8 text-fg-3" strokeWidth={1.5} />
          <p className="font-medium">No employees in this view</p>
          <p className="max-w-xs text-sm text-fg-2">
            Nobody {showInactive ? "" : "active "}is assigned to this department at {tenant.name}.
          </p>
          <Link href={link({ dept: undefined })} className="mt-2 text-sm font-medium text-accent hover:underline">
            Clear filter
          </Link>
        </div>
      ) : (
        <>
          <div className="card hidden overflow-hidden md:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2 text-left text-xs font-medium text-fg-2">
                  <th scope="col" className="px-4 py-2.5">Employee</th>
                  <th scope="col" className="px-4 py-2.5">Designation</th>
                  <th scope="col" className="px-4 py-2.5">Department</th>
                  <th scope="col" className="px-4 py-2.5">Direct manager</th>
                  <th scope="col" className="px-4 py-2.5">Project roles</th>
                  <th scope="col" className="px-4 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((e) => {
                  const user = employeeUser(e);
                  const manager = directManager(e);
                  const active = isActive(e);
                  return (
                    <tr key={e.id} className={`border-b border-border last:border-b-0 hover:bg-surface-2/60 ${active ? "" : "text-fg-2"}`}>
                      <td className="px-4 py-3 align-top">
                        <EmployeeLink employee={e} subtitle="none" muted={!active} />
                        <span className="mt-0.5 block truncate pl-9.5 text-xs text-fg-3">{user.email}</span>
                      </td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">{getDesignation(e.designationId)?.label ?? <span className="text-fg-3">—</span>}</td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">{getDepartment(e.departmentId)?.label ?? <span className="text-fg-3">—</span>}</td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">
                        {manager ? (
                          <Link href={employeeHref(manager)} className="hover:underline">
                            {employeeName(manager)}
                          </Link>
                        ) : (
                          <span className="text-fg-3">Top of tree</span>
                        )}
                      </td>
                      <td className="max-w-72 px-4 py-3 align-top">
                        <ProjectRoleCell employee={e} />
                      </td>
                      <td className="px-4 py-3 align-top">
                        <UserStatusBadge status={user.status} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <ul className="flex flex-col gap-2 md:hidden">
            {visible.map((e) => {
              const user = employeeUser(e);
              const manager = directManager(e);
              return (
                <li key={e.id} className="card p-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <EmployeeLink employee={e} muted={!isActive(e)} />
                    <UserStatusBadge status={user.status} />
                  </div>
                  <dl className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3 text-xs">
                    <div>
                      <dt className="text-fg-3">Department</dt>
                      <dd className="font-medium">{getDepartment(e.departmentId)?.label ?? "—"}</dd>
                    </div>
                    <div>
                      <dt className="text-fg-3">Direct manager</dt>
                      <dd className="font-medium">{manager ? employeeName(manager) : "Top of tree"}</dd>
                    </div>
                  </dl>
                  {liveGrantsForEmployee(e.id).length > 0 && (
                    <div className="mt-2.5">
                      <ProjectRoleCell employee={e} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}

      <p className="text-xs text-fg-3">
        Site Head and Project Head are per-project role grants, not designations. A designation confers no authority.
      </p>
    </div>
  );
}
