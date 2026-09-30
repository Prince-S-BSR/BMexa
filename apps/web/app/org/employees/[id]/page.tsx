import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, CornerDownRight, KeyRound, Network } from "lucide-react";
import { EmployeeLink } from "@/components/org/employee-link";
import { ProjectRoleBadge, UserStatusBadge } from "@/components/org/role-badges";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getTenant } from "@/lib/crm";
import type { ReportNode } from "@/lib/org";
import {
  employeeName,
  employeeUser,
  flattenReports,
  getDepartment,
  getDesignation,
  getEmployee,
  getProject,
  getRole,
  grantHistoryForEmployee,
  isActive,
  liveGrantsForEmployee,
  managerChain,
  projectsForTenant,
  reportsTree,
  tenantRoleGrantsForUser,
} from "@/lib/org";
import { formatDate } from "@/lib/format";

export async function generateMetadata(props: PageProps<"/org/employees/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const e = getEmployee(id);
  return { title: e ? employeeName(e) : "Employee" };
}

function ReportsList({ nodes }: { nodes: ReportNode[] }) {
  return (
    <ul className="flex flex-col">
      {nodes.map((n) => (
        <li key={n.employee.id}>
          <div
            className="flex items-center justify-between gap-3 py-2"
            style={{ paddingLeft: `${(n.depth - 1) * 1.5}rem` }}
          >
            <span className="flex min-w-0 items-center gap-1.5">
              {n.depth > 1 && <CornerDownRight aria-hidden="true" className="size-3.5 shrink-0 text-fg-3" />}
              <EmployeeLink employee={n.employee} muted={!isActive(n.employee)} />
            </span>
            <span className="shrink-0 text-xs text-fg-3">{n.depth === 1 ? "Direct" : "Indirect"}</span>
          </div>
          {n.children.length > 0 && <ReportsList nodes={n.children} />}
        </li>
      ))}
    </ul>
  );
}

export default async function EmployeeDetailPage(props: PageProps<"/org/employees/[id]">) {
  const { id } = await props.params;
  const employee = getEmployee(id);
  if (!employee) notFound();

  const tenant = getTenant(employee.tenantId)!;
  const user = employeeUser(employee);
  const name = user.name;
  const designation = getDesignation(employee.designationId);
  const department = getDepartment(employee.departmentId);

  const chain = managerChain(employee); // nearest first
  const tree = reportsTree(employee);
  const allReports = flattenReports(tree);
  const directCount = tree.length;
  const indirectCount = allReports.length - directCount;

  const liveGrants = liveGrantsForEmployee(employee.id);
  const history = grantHistoryForEmployee(employee.id);
  const revoked = history.filter((g) => g.revokedAt !== null);
  const projectsHeld = projectsForTenant(tenant.id).filter((p) => liveGrants.some((g) => g.projectId === p.id));
  const tenantRoles = tenantRoleGrantsForUser(user.id)
    .map((g) => getRole(g.roleId)!)
    .sort((a, b) => (a.key === "builder_side_admin" ? -1 : b.key === "builder_side_admin" ? 1 : a.name.localeCompare(b.name)));

  return (
    <div className="flex flex-col gap-5">
      <nav aria-label="Breadcrumb" className="-mt-1">
        <Link href={`/org/employees?tenant=${tenant.id}`} className="inline-flex h-8 items-center gap-1 rounded-md pr-2 text-sm text-fg-2 hover:text-fg">
          <ChevronLeft aria-hidden="true" className="size-4" />
          Employees
        </Link>
      </nav>

      <header className="card p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <Avatar name={name} size="md" />
            <div className="min-w-0">
              <h1 className="truncate text-xl font-semibold tracking-tight">{name}</h1>
              <p className="text-sm text-fg-2">
                {designation?.label ?? "No designation"}
                {department ? ` · ${department.label}` : ""} · {tenant.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-fg-3">
                <a href={`mailto:${user.email}`} className="hover:underline">
                  {user.email}
                </a>{" "}
                · employee since {formatDate(employee.createdAt, true)}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-1.5">
            <UserStatusBadge status={user.status} />
            {tenantRoles.map((r) => (
              <Badge key={r.id} tone={r.key === "builder_side_admin" ? "accent" : "neutral"} solid={r.key === "builder_side_admin"} title={r.description ?? undefined}>
                {r.name}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <div className="flex min-w-0 flex-col gap-5">
          <section aria-labelledby="chain-h" className="card p-4">
            <div className="flex items-baseline justify-between">
              <h2 id="chain-h" className="flex items-center gap-2 text-sm font-semibold">
                <Network aria-hidden="true" className="size-4 text-fg-3" />
                Reporting line
              </h2>
              <span className="text-xs text-fg-3 tabular">
                {chain.length === 0 ? "Top of tree" : `${chain.length} above`}
              </span>
            </div>
            {chain.length === 0 ? (
              <p className="mt-3 text-sm text-fg-2">{name} reports to nobody. This is the top of a reporting tree.</p>
            ) : (
              <ol className="mt-3 flex flex-col">
                {[...chain].reverse().map((m, i, arr) => {
                  const isDirect = i === arr.length - 1;
                  return (
                    <li key={m.id} className="relative flex items-center justify-between gap-3 py-2 pl-5">
                      <span aria-hidden="true" className="absolute top-0 bottom-0 left-[7px] w-px bg-border" />
                      <span
                        aria-hidden="true"
                        className={`absolute top-1/2 left-1 size-[7px] -translate-y-1/2 rounded-full ${isDirect ? "bg-accent" : "bg-border-strong"}`}
                      />
                      <EmployeeLink employee={m} muted={!isActive(m)} />
                      <span className={`shrink-0 text-xs ${isDirect ? "font-medium text-accent-soft-fg" : "text-fg-3"}`}>
                        {isDirect ? "Direct manager" : "Indirect"}
                      </span>
                    </li>
                  );
                })}
                <li className="relative flex items-center gap-3 py-2 pl-5">
                  <span aria-hidden="true" className="absolute top-0 left-[7px] h-1/2 w-px bg-border" />
                  <span aria-hidden="true" className="absolute top-1/2 left-0.5 size-[11px] -translate-y-1/2 rounded-full border-2 border-accent bg-surface" />
                  <span className="flex items-center gap-2.5">
                    <Avatar name={name} />
                    <span className="text-sm font-medium">{name}</span>
                  </span>
                </li>
              </ol>
            )}
            <p className="mt-3 border-t border-border pt-2.5 text-xs text-fg-3">
              Direct manager is the immediate manager; indirect managers are everyone above in the same chain. Management scope follows this tree.
            </p>
          </section>

          <section aria-labelledby="reports-h" className="card p-4">
            <div className="flex items-baseline justify-between">
              <h2 id="reports-h" className="text-sm font-semibold">
                Reports
              </h2>
              <span className="text-xs text-fg-3 tabular">
                {allReports.length === 0 ? "None" : `${directCount} direct · ${indirectCount} indirect`}
              </span>
            </div>
            {allReports.length === 0 ? (
              <p className="mt-3 text-sm text-fg-2">Nobody reports to {name.split(" ")[0]}.</p>
            ) : (
              <div className="mt-2">
                <ReportsList nodes={tree} />
              </div>
            )}
          </section>
        </div>

        <aside className="flex flex-col gap-4 lg:order-2">
          <section aria-labelledby="pr-h" className="card p-4">
            <div className="flex items-baseline justify-between">
              <h2 id="pr-h" className="text-sm font-semibold">
                Project roles
              </h2>
              <span className="text-xs text-fg-3 tabular">
                {liveGrants.length} {liveGrants.length === 1 ? "grant" : "grants"}
              </span>
            </div>
            {projectsHeld.length === 0 ? (
              <p className="mt-3 text-sm text-fg-2">No project roles. Site Head and Project Head are granted per project.</p>
            ) : (
              <ul className="mt-3 flex flex-col divide-y divide-border">
                {projectsHeld.map((p) => {
                  const here = liveGrants.filter((g) => g.projectId === p.id);
                  return (
                    <li key={p.id} className="flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{p.name}</p>
                        <p className="text-xs text-fg-3">since {formatDate(here[0]!.grantedAt, true)}</p>
                      </div>
                      <span className="flex shrink-0 flex-wrap justify-end gap-1">
                        {here.map((g) => (
                          <ProjectRoleBadge key={g.id} role={getRole(g.roleId)!} />
                        ))}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
            <p className="mt-3 border-t border-border pt-2.5 text-xs text-fg-3">
              Roles are assigned per project, independently of designation. Either, both or neither may be held on each project.{" "}
              <Link href={`/org/project-roles?tenant=${tenant.id}`} className="font-medium text-accent hover:underline">
                Open the grid
              </Link>
            </p>
          </section>

          {revoked.length > 0 && (
            <section aria-labelledby="hist-h" className="card p-4">
              <h2 id="hist-h" className="text-sm font-semibold">
                Revoked grants
              </h2>
              <ul className="mt-3 flex flex-col divide-y divide-border">
                {revoked.map((g) => (
                  <li key={g.id} className="flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0 text-fg-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm">{getProject(g.projectId)!.name}</p>
                      <p className="text-xs text-fg-3">
                        {formatDate(g.grantedAt, true)} – {formatDate(g.revokedAt!, true)}
                      </p>
                    </div>
                    <span className="shrink-0 opacity-60">
                      <ProjectRoleBadge role={getRole(g.roleId)!} />
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-border pt-2.5 text-xs text-fg-3">Grants are never deleted; a revocation is a stamp and a re-grant is a new row.</p>
            </section>
          )}

          <section aria-labelledby="tr-h" className="card p-4">
            <h2 id="tr-h" className="flex items-center gap-2 text-sm font-semibold">
              <KeyRound aria-hidden="true" className="size-4 text-fg-3" />
              Tenant-wide roles
            </h2>
            {tenantRoles.length === 0 ? (
              <p className="mt-3 text-sm text-fg-2">No tenant-wide roles.</p>
            ) : (
              <ul className="mt-3 flex flex-col divide-y divide-border">
                {tenantRoles.map((r) => (
                  <li key={r.id} className="py-2.5 first:pt-0 last:pb-0">
                    <p className="text-sm font-medium">{r.name}</p>
                    {r.description && <p className="text-xs text-fg-2">{r.description}</p>}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-3 border-t border-border pt-2.5 text-xs text-fg-3">
              <Link href={`/org/roles?tenant=${tenant.id}`} className="font-medium text-accent hover:underline">
                See what each role can do
              </Link>
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
