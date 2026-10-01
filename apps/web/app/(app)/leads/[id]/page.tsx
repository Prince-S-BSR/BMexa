import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarClock, ChevronLeft, Lock } from "lucide-react";
import { CustomerActions } from "@/components/leads/customer-actions";
import { Timeline } from "@/components/leads/timeline";
import { ViewAsToggle } from "@/components/leads/view-as-toggle";
import { Avatar } from "@/components/ui/avatar";
import { Badge, BucketBadge } from "@/components/ui/badge";
import { followUpBucket, getCustomer, getProject, getTenant, getUser, visibleTimeline, type Viewer } from "@/lib/crm";
import { formatDate, formatDateTime, formatLakh } from "@/lib/format";
import { requireSession } from "@/lib/session";

export async function generateMetadata(props: PageProps<"/leads/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  return { title: getCustomer(id)?.name ?? "Customer" };
}

export default async function LeadDetailPage(props: PageProps<"/leads/[id]">) {
  // Auth gate only (Beads issue Final-Verison-224, step 5/5); this screen
  // stays fixture-backed and otherwise untouched.
  await requireSession();
  const { id } = await props.params;
  const sp = await props.searchParams;
  const customer = getCustomer(id);
  if (!customer) notFound();

  const tenant = getTenant(customer.tenantId)!;
  const handler = getUser(customer.handlerId)!;
  const owner = getUser(customer.ownerId)!;
  const viewer: Viewer = sp.as === "site-head" ? "site-head" : "handler";
  const entries = visibleTimeline(customer, viewer);
  const bucket = followUpBucket(customer);

  const href = (v: Viewer) => `/leads/${customer.id}?tenant=${tenant.id}${v === "site-head" ? "&as=site-head" : ""}`;
  const canOperate = viewer === "handler";
  const blockedReason =
    viewer === "site-head"
      ? "Site Heads are view-only on customer records. Only the current handler can log activities or follow-ups; you can transfer or reassign."
      : undefined;

  return (
    <div className="flex flex-col gap-5">
      <nav aria-label="Breadcrumb" className="-mt-1">
        <Link href={`/leads?tenant=${tenant.id}`} className="inline-flex h-8 items-center gap-1 rounded-md pr-2 text-sm text-fg-2 hover:text-fg">
          <ChevronLeft aria-hidden="true" className="size-4" />
          Customers
        </Link>
      </nav>

      <header className="card p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <Avatar name={customer.name} size="md" />
            <div className="min-w-0">
              <h1 className="truncate text-xl font-semibold tracking-tight">{customer.name}</h1>
              <p className="text-sm text-fg-2 tabular">
                <a href={`tel:${customer.mobile.replace(/\s/g, "")}`} className="hover:underline">
                  {customer.mobile}
                </a>{" "}
                · {customer.source} · in CRM since {formatDate(customer.createdAt, true)}
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <CustomerActions initialStatus={customer.status} customerName={customer.name} canOperate={canOperate} reason={blockedReason} />
          </div>
        </div>
        <div className="mt-4 border-t border-border pt-3">
          <ViewAsToggle viewer={viewer} handlerName={handler.name.split(" ")[0]!} siteHeadName={owner.name.split(" ")[0]!} href={href} />
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        {/* Right rail on desktop, first on mobile: next action, interests, ownership */}
        <aside className="flex flex-col gap-4 lg:order-2">
          <section aria-labelledby="fu-h" className="card p-4">
            <h2 id="fu-h" className="flex items-center gap-2 text-sm font-semibold">
              <CalendarClock aria-hidden="true" className="size-4 text-fg-3" />
              Next follow-up
            </h2>
            {customer.pendingFollowUp && bucket ? (
              <div className="mt-3 flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <BucketBadge bucket={bucket} />
                  <span className="text-sm font-medium tabular">{formatDateTime(customer.pendingFollowUp.at)}</span>
                </div>
                <p className="text-sm text-fg-2">{customer.pendingFollowUp.remarks}</p>
                <p className="text-xs text-fg-3">Logging any activity fulfils this follow-up automatically.</p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-fg-2">
                {customer.status === "Dumped"
                  ? "No follow-ups. Pending follow-ups were cancelled when the customer was dumped."
                  : customer.status === "Booked"
                    ? "No follow-ups scheduled. Customer is Booked."
                    : "No follow-up scheduled yet."}
              </p>
            )}
          </section>

          <section aria-labelledby="pi-h" className="card p-4">
            <div className="flex items-baseline justify-between">
              <h2 id="pi-h" className="text-sm font-semibold">
                Project interests
              </h2>
              <span className="text-xs text-fg-3 tabular">{customer.interests.length} active</span>
            </div>
            <ul className="mt-3 flex flex-col divide-y divide-border">
              {customer.interests.map((i) => {
                const p = getProject(i.projectId)!;
                return (
                  <li key={i.projectId} className="flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-fg-2">
                        {i.configuration}
                        {i.budgetLakh ? ` · ${formatLakh(i.budgetLakh)}` : ""} · {p.locality}
                      </p>
                      <p className="mt-0.5 text-xs text-fg-3">Added {formatDate(i.addedAt)}</p>
                    </div>
                    <Badge
                      tone={i.provenance === "CUSTOMER_SUBMITTED" ? "accent" : "neutral"}
                      title={
                        i.provenance === "CUSTOMER_SUBMITTED"
                          ? "Submitted by the customer. Cannot be removed."
                          : "Added by the Sales Rep. Removal requires the Site Head."
                      }
                    >
                      {i.provenance === "CUSTOMER_SUBMITTED" ? "Customer" : "Rep-added"}
                    </Badge>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 border-t border-border pt-2.5 text-xs text-fg-3">
              Status is tracked once for the customer, not per project.
            </p>
          </section>

          <section aria-labelledby="own-h" className="card p-4">
            <h2 id="own-h" className="text-sm font-semibold">
              Ownership
            </h2>
            <dl className="mt-3 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <Avatar name={handler.name} />
                <div className="min-w-0">
                  <dt className="text-xs text-fg-3">Handler · Sales Rep</dt>
                  <dd className="truncate text-sm font-medium">
                    {handler.name}
                    {customer.transfer && <span className="font-normal text-fg-2"> · since {formatDate(customer.transfer.at)}</span>}
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Avatar name={owner.name} />
                <div className="min-w-0">
                  <dt className="text-xs text-fg-3">Owner · Site Head</dt>
                  <dd className="truncate text-sm font-medium">{owner.name}</dd>
                </div>
              </div>
            </dl>
            {viewer === "site-head" && customer.transfer && (
              <p className="mt-3 flex items-start gap-1.5 border-t border-border pt-2.5 text-xs text-fg-2">
                <Lock aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-fg-3" />
                <span>
                  Transferred {customer.transfer.historyMode === "WITHOUT_HISTORY" ? "without" : "with"} history on {formatDate(customer.transfer.at)}.
                  {customer.transfer.historyMode === "WITHOUT_HISTORY" && " The handler sees only activity from the transfer onward; you see the complete record."}
                </span>
              </p>
            )}
          </section>
        </aside>

        <section aria-labelledby="tl-h" className="min-w-0 lg:order-1">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 id="tl-h" className="text-base font-semibold">
              Timeline
            </h2>
            <span className="text-xs text-fg-3 tabular">{entries.length} entries</span>
          </div>
          <Timeline entries={entries} />
          <p className="mt-6 text-xs text-fg-3">
            Activities are append-only. Nothing here can be edited or deleted; to correct a mistake, log a new activity.
          </p>
        </section>
      </div>
    </div>
  );
}
