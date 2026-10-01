import type { Metadata } from "next";
import Link from "next/link";
import { UsersRound } from "lucide-react";
import { EmployeeLink, employeeHref } from "@/components/org/employee-link";
import { ProjectRoleBadge, UserStatusBadge } from "@/components/org/role-badges";
import {
  departmentsForTenant,
  directManager,
  employeeName,
  employeesForTenant,
  getDepartment,
  getDesignation,
  getProject,
  getRole,
  isActive,
  liveGrantsForEmployee,
  loadOrgSnapshot,
  type OrgEmployee,
  type OrgSnapshot,
} from "@/lib/org-api";
import { getSessionTenant, requireSession } from "@/lib/session";

export const metadata: Metadata = { title: "Employees" };

function first(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

function ProjectRoleCell({ snapshot, employee }: { snapshot: OrgSnapshot; employee: OrgEmployee }) {
  const grants = liveGrantsForEmployee(snapshot, employee.id);
  if (grants.length === 0) return <span className="text-fg-3">—</span>;
  return (
    <span className="flex flex-wrap gap-1">
      {grants.map((g) => {
        const role = getRole(snapshot, g.roleId)!;
        const project = getProject(snapshot, g.projectId)!;
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
  const token = await requireSession();
  const sp = await props.searchParams;
  const deptFilter = first(sp.dept);
  const showInactive = first(sp.inactive) === "1";

  const [snapshot, tenant] = await Promise.all([loadOrgSnapshot(token), getSessionTenant()]);
  const tenantLabel = tenant?.subdomain ?? "your organization";

  const all = employeesForTenant(snapshot);
  const depts = departmentsForTenant(snapshot);
  const inactiveCount = all.filter((e) => !isActive(e)).length;

  const visible = all
    .filter((e) => (showInactive ? true : isActive(e)))
    .filter((e) => (deptFilter ? e.departmentId === depts.find((d) => d.code === deptFilter)?.id : true));

  const link = (next: { dept?: string; inactive?: boolean }) => {
    const q = new URLSearchParams();
    const d = "dept" in next ? next.dept : deptFilter;
    const i = "inactive" in next ? next.inactive : showInactive;
    if (d) q.set("dept", d);
    if (i) q.set("inactive", "1");
    const qs = q.toString();
    return `/org/employees${qs ? `?${qs}` : ""}`;
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
            {tenantLabel} · <span className="tabular">{visible.length}</span> of <span className="tabular">{all.length}</span> records
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
            Nobody {showInactive ? "" : "active "}is assigned to this department.
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
                  const manager = directManager(snapshot, e);
                  const active = isActive(e);
                  return (
                    <tr key={e.id} className={`border-b border-border last:border-b-0 hover:bg-surface-2/60 ${active ? "" : "text-fg-2"}`}>
                      <td className="px-4 py-3 align-top">
                        <EmployeeLink
                          employeeId={e.id}
                          name={employeeName(e)}
                          designation={getDesignation(snapshot, e.designationId)?.label}
                          subtitle="none"
                          muted={!active}
                        />
                        <span className="mt-0.5 block truncate pl-9.5 text-xs text-fg-3">{e.userEmail}</span>
                      </td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">{getDesignation(snapshot, e.designationId)?.label ?? <span className="text-fg-3">—</span>}</td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">{getDepartment(snapshot, e.departmentId)?.label ?? <span className="text-fg-3">—</span>}</td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">
                        {manager ? (
                          <Link href={employeeHref(manager.id)} className="hover:underline">
                            {employeeName(manager)}
                          </Link>
                        ) : (
                          <span className="text-fg-3">Top of tree</span>
                        )}
                      </td>
                      <td className="max-w-72 px-4 py-3 align-top">
                        <ProjectRoleCell snapshot={snapshot} employee={e} />
                      </td>
                      <td className="px-4 py-3 align-top">
                        <UserStatusBadge status={e.userStatus} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <ul className="flex flex-col gap-2 md:hidden">
            {visible.map((e) => {
              const manager = directManager(snapshot, e);
              return (
                <li key={e.id} className="card p-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <EmployeeLink
                      employeeId={e.id}
                      name={employeeName(e)}
                      designation={getDesignation(snapshot, e.designationId)?.label}
                      muted={!isActive(e)}
                    />
                    <UserStatusBadge status={e.userStatus} />
                  </div>
                  <dl className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3 text-xs">
                    <div>
                      <dt className="text-fg-3">Department</dt>
                      <dd className="font-medium">{getDepartment(snapshot, e.departmentId)?.label ?? "—"}</dd>
                    </div>
                    <div>
                      <dt className="text-fg-3">Direct manager</dt>
                      <dd className="font-medium">{manager ? employeeName(manager) : "Top of tree"}</dd>
                    </div>
                  </dl>
                  {liveGrantsForEmployee(snapshot, e.id).length > 0 && (
                    <div className="mt-2.5">
                      <ProjectRoleCell snapshot={snapshot} employee={e} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}

      <p className="text-xs text-fg-3">
        Site Head and Project Head are per-project role grants, not designations. A designation confers no authority. Names shown are the
        employee&rsquo;s login email — the API does not yet return a display name (see the step 5 report).
      </p>
    </div>
  );
}
