import type { Metadata } from "next";
import Link from "next/link";
import { ActivitySummary } from "@/components/leads/activity-summary";
import { InterestChips } from "@/components/leads/interest-chips";
import { Avatar } from "@/components/ui/avatar";
import { BucketBadge } from "@/components/ui/badge";
import { customersForTenant, followUpBucket, getUser, resolveTenant, STATUS_ORDER } from "@/lib/crm";
import type { InquiryStatus } from "@/lib/fixtures/types";
import { requireSession } from "@/lib/session";

export const metadata: Metadata = { title: "Pipeline" };

const columnHint: Record<InquiryStatus, string> = {
  New: "In the handler's queue",
  "Booking In Progress": "Token received, awaiting verification",
  Booked: "Verified by Accounts",
  "Booking Cancelled": "Post-Booked cancellation",
  Dumped: "Work paused; revives on return or transfer",
};

const columnDot: Record<InquiryStatus, string> = {
  New: "bg-accent",
  "Booking In Progress": "bg-info",
  Booked: "bg-success",
  "Booking Cancelled": "bg-danger",
  Dumped: "bg-fg-3",
};

export default async function PipelinePage(props: PageProps<"/pipeline">) {
  // Auth gate only (Beads issue Final-Verison-224, step 5/5); this screen
  // stays fixture-backed and otherwise untouched.
  await requireSession();
  const sp = await props.searchParams;
  const tenant = resolveTenant(sp.tenant);
  const all = customersForTenant(tenant.id);

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Pipeline</h1>
          <p className="text-sm text-fg-2">
            {tenant.name} · grouped by customer status. Swipe sideways on a phone.
          </p>
        </div>
      </header>

      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0 sm:pb-1">
        {STATUS_ORDER.map((status) => {
          const items = all
            .filter((c) => c.status === status)
            .sort((a, b) => {
              const r = { Overdue: 0, Today: 1, Future: 2 };
              const ab = followUpBucket(a);
              const bb = followUpBucket(b);
              return (ab ? r[ab] : 3) - (bb ? r[bb] : 3);
            });
          return (
            <section
              key={status}
              aria-labelledby={`col-${status}`}
              className="flex w-[82vw] max-w-[19rem] shrink-0 snap-start flex-col rounded-xl bg-surface-2 sm:w-72"
            >
              <header className="flex items-center gap-2 px-3 pt-3 pb-2">
                <span aria-hidden="true" className={`size-2 rounded-full ${columnDot[status]}`} />
                <h2 id={`col-${status}`} className="text-sm font-semibold">
                  {status}
                </h2>
                <span className="ml-auto rounded-md bg-surface px-1.5 text-xs font-medium text-fg-2 tabular">{items.length}</span>
              </header>
              <p className="px-3 pb-2 text-xs text-fg-3">{columnHint[status]}</p>

              <ul className="flex min-h-24 flex-col gap-2 px-2 pb-2">
                {items.length === 0 && (
                  <li className="rounded-lg border border-dashed border-border-strong px-3 py-6 text-center text-xs text-fg-3">
                    No customers here
                  </li>
                )}
                {items.map((c) => {
                  const handler = getUser(c.handlerId);
                  const bucket = followUpBucket(c);
                  return (
                    <li key={c.id}>
                      <Link
                        href={`/leads/${c.id}?tenant=${tenant.id}`}
                        className="card flex flex-col gap-2 p-3 transition-shadow hover:shadow-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="min-w-0 truncate text-sm font-semibold">{c.name}</span>
                          {bucket && <BucketBadge bucket={bucket} />}
                        </div>
                        <InterestChips interests={c.interests} compact />
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <ActivitySummary customer={c} />
                          {handler && <Avatar name={handler.name} />}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
