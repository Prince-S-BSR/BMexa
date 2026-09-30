import type { Metadata } from "next";
import Link from "next/link";
import { Inbox } from "lucide-react";
import { CustomerCards, CustomerTable } from "@/components/leads/customer-list";
import { customersForTenant, followUpBucket, resolveTenant, STATUS_ORDER, type FollowUpBucket } from "@/lib/crm";
import type { InquiryStatus } from "@/lib/fixtures/types";

export const metadata: Metadata = { title: "Customers" };

const BUCKETS: FollowUpBucket[] = ["Overdue", "Today", "Future"];

function first(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

export default async function LeadsPage(props: PageProps<"/leads">) {
  const sp = await props.searchParams;
  const tenant = resolveTenant(sp.tenant);
  const bucketFilter = first(sp.bucket) as FollowUpBucket | undefined;
  const statusFilter = first(sp.status) as InquiryStatus | undefined;

  const all = customersForTenant(tenant.id);
  const withBucket = all.map((c) => ({ c, bucket: followUpBucket(c) }));

  const counts = {
    Overdue: withBucket.filter((x) => x.bucket === "Overdue").length,
    Today: withBucket.filter((x) => x.bucket === "Today").length,
    Future: withBucket.filter((x) => x.bucket === "Future").length,
  };

  // Work-queue ordering: Overdue first, then Today, Future, then no follow-up; newest first within.
  const bucketRank: Record<string, number> = { Overdue: 0, Today: 1, Future: 2, none: 3 };
  const visible = withBucket
    .filter((x) => (bucketFilter ? x.bucket === bucketFilter : true))
    .filter((x) => (statusFilter ? x.c.status === statusFilter : true))
    .sort((a, b) => {
      const r = bucketRank[a.bucket ?? "none"]! - bucketRank[b.bucket ?? "none"]!;
      if (r !== 0) return r;
      const at = a.c.pendingFollowUp?.at ?? a.c.createdAt;
      const bt = b.c.pendingFollowUp?.at ?? b.c.createdAt;
      return at < bt ? -1 : at > bt ? 1 : 0;
    })
    .map((x) => x.c);

  const link = (next: { bucket?: FollowUpBucket; status?: InquiryStatus }) => {
    const q = new URLSearchParams({ tenant: tenant.id });
    const b = "bucket" in next ? next.bucket : bucketFilter;
    const s = "status" in next ? next.status : statusFilter;
    if (b) q.set("bucket", b);
    if (s) q.set("status", s);
    return `/leads?${q.toString()}`;
  };

  const chip = (active: boolean, tone: "danger" | "warn" | "neutral" | "accent" = "neutral") => {
    const base = "inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-sm font-medium transition-colors";
    if (!active) return `${base} border-border bg-surface text-fg-2 hover:border-border-strong hover:text-fg`;
    const activeTone = {
      danger: "border-danger bg-danger text-white",
      warn: "border-warn bg-warn text-[#2b1a02]",
      accent: "border-accent bg-accent text-accent-fg",
      neutral: "border-fg bg-fg text-bg",
    }[tone];
    return `${base} ${activeTone}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Customers</h1>
          <p className="text-sm text-fg-2">
            {tenant.name} · <span className="tabular">{all.length}</span> customers
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Follow-up bucket">
          <Link href={link({ bucket: undefined })} className={chip(!bucketFilter, "neutral")} aria-pressed={!bucketFilter}>
            All
          </Link>
          {BUCKETS.map((b) => (
            <Link
              key={b}
              href={link({ bucket: bucketFilter === b ? undefined : b })}
              className={chip(bucketFilter === b, b === "Overdue" ? "danger" : b === "Today" ? "warn" : "neutral")}
              aria-pressed={bucketFilter === b}
            >
              {b}
              <span className={`tabular ${bucketFilter === b ? "opacity-80" : "text-fg-3"}`}>{counts[b]}</span>
            </Link>
          ))}
        </div>
        <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-0.5 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Status">
          {STATUS_ORDER.map((s) => (
            <Link
              key={s}
              href={link({ status: statusFilter === s ? undefined : s })}
              className={`${chip(statusFilter === s, "accent")} h-7 shrink-0 text-xs`}
              aria-pressed={statusFilter === s}
            >
              {s}
              <span className={`tabular ${statusFilter === s ? "opacity-80" : "text-fg-3"}`}>
                {all.filter((c) => c.status === s).length}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="card flex flex-col items-center gap-2 px-6 py-14 text-center">
          <Inbox aria-hidden="true" className="size-8 text-fg-3" strokeWidth={1.5} />
          <p className="font-medium">Nothing in this view</p>
          <p className="max-w-xs text-sm text-fg-2">
            No customers match {bucketFilter ? `the ${bucketFilter} bucket` : "this status"} for {tenant.name}.
          </p>
          <Link href={`/leads?tenant=${tenant.id}`} className="mt-2 text-sm font-medium text-accent hover:underline">
            Clear filters
          </Link>
        </div>
      ) : (
        <>
          <CustomerTable customers={visible} tenantParam={tenant.id} />
          <CustomerCards customers={visible} tenantParam={tenant.id} />
        </>
      )}
    </div>
  );
}
