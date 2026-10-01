import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { BucketBadge, StatusBadge } from "@/components/ui/badge";
import { followUpBucket, getUser } from "@/lib/crm";
import type { Customer } from "@/lib/fixtures/types";
import { formatDate, formatTime } from "@/lib/format";
import { ActivitySummary } from "./activity-summary";
import { InterestChips } from "./interest-chips";

function FollowUpCell({ customer }: { customer: Customer }) {
  const bucket = followUpBucket(customer);
  if (!bucket || !customer.pendingFollowUp) {
    return <span className="text-fg-3">—</span>;
  }
  const at = customer.pendingFollowUp.at;
  return (
    <span className="flex items-center gap-2">
      <BucketBadge bucket={bucket} />
      <span className="text-fg-2 tabular">
        {bucket === "Today" ? formatTime(at) : `${formatDate(at)}, ${formatTime(at)}`}
      </span>
    </span>
  );
}

export function CustomerTable({ customers, tenantParam }: { customers: Customer[]; tenantParam: string }) {
  return (
    <div className="card hidden overflow-hidden md:block">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-2 text-left text-xs font-medium text-fg-2">
            <th scope="col" className="px-4 py-2.5">Customer</th>
            <th scope="col" className="px-4 py-2.5">Project interests</th>
            <th scope="col" className="px-4 py-2.5">Status</th>
            <th scope="col" className="px-4 py-2.5">Follow-up</th>
            <th scope="col" className="px-4 py-2.5">Handler</th>
            <th scope="col" className="px-4 py-2.5">Last activity</th>
            <th scope="col" className="w-10 px-2 py-2.5">
              <span className="sr-only">Open</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => {
            const handler = getUser(c.handlerId);
            const href = `/leads/${c.id}?tenant=${tenantParam}`;
            return (
              <tr key={c.id} className="group border-b border-border last:border-b-0 hover:bg-surface-2/60">
                <td className="px-4 py-3 align-top">
                  <Link href={href} className="block min-w-0 rounded-sm">
                    <span className="block truncate font-medium text-fg">{c.name}</span>
                    <span className="block truncate text-xs text-fg-3 tabular">
                      {c.mobile} · {c.source}
                    </span>
                  </Link>
                </td>
                <td className="max-w-72 px-4 py-3 align-top">
                  <InterestChips interests={c.interests} />
                </td>
                <td className="px-4 py-3 align-top">
                  <StatusBadge status={c.status} />
                </td>
                <td className="px-4 py-3 align-top whitespace-nowrap">
                  <FollowUpCell customer={c} />
                </td>
                <td className="px-4 py-3 align-top whitespace-nowrap">
                  {handler && (
                    <span className="flex items-center gap-2">
                      <Avatar name={handler.name} />
                      <span className="text-fg-2">{handler.name}</span>
                    </span>
                  )}
                </td>
                <td className="max-w-56 px-4 py-3 align-top">
                  <ActivitySummary customer={c} />
                </td>
                <td className="px-2 py-3 align-top">
                  <Link href={href} aria-label={`Open ${c.name}`} className="grid size-8 place-items-center rounded-md text-fg-3 hover:bg-surface-3 hover:text-fg">
                    <ChevronRight aria-hidden="true" className="size-4" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function CustomerCards({ customers, tenantParam }: { customers: Customer[]; tenantParam: string }) {
  return (
    <ul className="flex flex-col gap-2 md:hidden">
      {customers.map((c) => {
        const handler = getUser(c.handlerId);
        const bucket = followUpBucket(c);
        return (
          <li key={c.id}>
            <Link href={`/leads/${c.id}?tenant=${tenantParam}`} className="card flex flex-col gap-2.5 p-3.5 active:bg-surface-2">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="block truncate text-base font-semibold leading-tight">{c.name}</span>
                  <span className="block truncate text-xs text-fg-3">{c.source}</span>
                </div>
                <StatusBadge status={c.status} />
              </div>

              <InterestChips interests={c.interests} compact />

              <div className="flex items-center justify-between gap-3 border-t border-border pt-2.5">
                <div className="min-w-0 text-xs">
                  <ActivitySummary customer={c} />
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {bucket && c.pendingFollowUp && (
                    <span className="flex items-center gap-1.5">
                      <BucketBadge bucket={bucket} />
                      <span className="text-xs text-fg-2 tabular">
                        {bucket === "Today" ? formatTime(c.pendingFollowUp.at) : formatDate(c.pendingFollowUp.at)}
                      </span>
                    </span>
                  )}
                  {handler && <Avatar name={handler.name} />}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
