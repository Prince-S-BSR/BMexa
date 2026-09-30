import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, CornerDownRight, Network } from "lucide-react";
import { EmployeeLink } from "@/components/org/employee-link";
import { ProjectRoleBadge, UserStatusBadge } from "@/components/org/role-badges";
import { Avatar } from "@/components/ui/avatar";
import {
  employeeName,
  flattenReports,
  getDepartment,
  getDesignation,
  getEmployee,
  getProject,
  getRole,
  grantHistoryForEmployee,
  isActive,
  liveGrantsForEmployee,
  loadOrgSnapshot,
  managerChain,
  projectsForTenant,
  reportsTree,
  type OrgSnapshot,
  type ReportNode,
} from "@/lib/org-api";
import { formatDate } from "@/lib/format";
import { getSessionTenant, requireSession } from "@/lib/session";

export async function generateMetadata(props: PageProps<"/org/employees/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  // Metadata can't call requireSession()'s redirect (Next runs generateMetadata
  // in parallel with the page and a redirect there isn't supported the same
  // way); a lightweight, non-redirecting fallback title is fine here — the
  // page component below still enforces the real gate before rendering.
  return { title: id ? "Employee" : "Employee" };
}

function ReportsList({ snapshot, nodes }: { snapshot: OrgSnapshot; nodes: ReportNode[] }) {
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
              <EmployeeLink
                employeeId={n.employee.id}
                name={employeeName(n.employee)}
                designation={getDesignation(snapshot, n.employee.designationId)?.label}
                muted={!isActive(n.employee)}
              />
            </span>
            <span className="shrink-0 text-xs text-fg-3">{n.depth === 1 ? "Direct" : "Indirect"}</span>
          </div>
          {n.children.length > 0 && <ReportsList snapshot={snapshot} nodes={n.children} />}
        </li>
      ))}
    </ul>
  );
}

export default async function EmployeeDetailPage(props: PageProps<"/org/employees/[id]">) {
  const token = await requireSession();
  const { id } = await props.params;

  const [snapshot, tenant] = await Promise.all([loadOrgSnapshot(token), getSessionTenant()]);
  const employee = getEmployee(snapshot, id);
  if (!employee) notFound();

  const name = employeeName(employee);
  const designation = getDesignation(snapshot, employee.designationId);
  const department = getDepartment(snapshot, employee.departmentId);
  const tenantLabel = tenant?.subdomain ?? "your organization";

  const chain = managerChain(snapshot, employee); // nearest first
  const tree = reportsTree(snapshot, employee);
  const allReports = flattenReports(tree);
  const directCount = tree.length;
  const indirectCount = allReports.length - directCount;

  const liveGrants = liveGrantsForEmployee(snapshot, employee.id);
  const history = grantHistoryForEmployee(snapshot, employee.id);
  const revoked = history.filter((g) => g.revokedAt !== null);
  const projectsHeld = projectsForTenant(snapshot).filter((p) => liveGrants.some((g) => g.projectId === p.id));

  return (
    <div className="flex flex-col gap-5">
      <nav aria-label="Breadcrumb" className="-mt-1">
        <Link href="/org/employees" className="inline-flex h-8 items-center gap-1 rounded-md pr-2 text-sm text-fg-2 hover:text-fg">
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
                {department ? ` · ${department.label}` : ""} · {tenantLabel}
              </p>
              <p className="mt-0.5 truncate text-xs text-fg-3">
                <a href={`mailto:${employee.userEmail}`} className="hover:underline">
                  {employee.userEmail}
                </a>{" "}
                · employee since {formatDate(employee.createdAt, true)}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-1.5">
            <UserStatusBadge status={employee.userStatus} />
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
                      <EmployeeLink
                        employeeId={m.id}
                        name={employeeName(m)}
                        designation={getDesignation(snapshot, m.designationId)?.label}
                        muted={!isActive(m)}
                      />
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
              <p className="mt-3 text-sm text-fg-2">Nobody reports to {name.split("@")[0]}.</p>
            ) : (
              <div className="mt-2">
                <ReportsList snapshot={snapshot} nodes={tree} />
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
                          <ProjectRoleBadge key={g.id} role={getRole(snapshot, g.roleId)!} />
                        ))}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
            <p className="mt-3 border-t border-border pt-2.5 text-xs text-fg-3">
              Roles are assigned per project, independently of designation. Either, both or neither may be held on each project.{" "}
              <Link href="/org/project-roles" className="font-medium text-accent hover:underline">
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
                      <p className="truncate text-sm">{getProject(snapshot, g.projectId)!.name}</p>
                      <p className="text-xs text-fg-3">
                        {formatDate(g.grantedAt, true)} – {formatDate(g.revokedAt!, true)}
                      </p>
                    </div>
                    <span className="shrink-0 opacity-60">
                      <ProjectRoleBadge role={getRole(snapshot, g.roleId)!} />
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-border pt-2.5 text-xs text-fg-3">Grants are never deleted; a revocation is a stamp and a re-grant is a new row.</p>
            </section>
          )}

          <section aria-labelledby="tr-h" className="card p-4">
            <h2 id="tr-h" className="text-sm font-semibold">
              Tenant-wide roles
            </h2>
            {/*
              GAP (see lib/org-api.ts's file header, item #2): apps/api has
              no endpoint that lists which tenant-wide roles (owner, admin,
              manager, member, read_only, builder_side_admin) a given user
              currently holds — only POST/DELETE /users/:userId/roles, which
              assume the caller already knows the answer. This section
              cannot be filled from the real API without one; flagged in the
              step 5 final report rather than fabricated here.
            */}
            <p className="mt-3 text-sm text-fg-2">
              Not shown: the current API has no endpoint to look up which tenant-wide roles a user holds (see the step 5 report).
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
