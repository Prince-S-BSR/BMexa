import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { customersForTenant, tenants } from "@/lib/crm";
import type { TenantStatus } from "@/lib/fixtures/types";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = { title: "Builder tenants" };

const statusTone: Record<TenantStatus, "success" | "info" | "warn" | "danger"> = {
  Active: "success",
  Trial: "info",
  "Past Due": "warn",
  Suspended: "danger",
};

export default function TenantsPage() {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="text-xl font-semibold tracking-tight">Builder tenants</h1>
        <p className="text-sm text-fg-2">
          Companies subscribed to BMexa. Each tenant&rsquo;s customers, users and data are isolated.
        </p>
      </header>

      <div className="card hidden overflow-hidden md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-2 text-left text-xs font-medium text-fg-2">
              <th scope="col" className="px-4 py-2.5">Tenant</th>
              <th scope="col" className="px-4 py-2.5">Plan</th>
              <th scope="col" className="px-4 py-2.5">Subscription</th>
              <th scope="col" className="px-4 py-2.5 text-right">Employees</th>
              <th scope="col" className="px-4 py-2.5 text-right">Customers</th>
              <th scope="col" className="px-4 py-2.5">Created</th>
              <th scope="col" className="px-4 py-2.5">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((t) => (
              <tr key={t.id} className="border-b border-border last:border-b-0 hover:bg-surface-2/60">
                <td className="px-4 py-3">
                  <span className="block font-medium">{t.name}</span>
                  <span className="block text-xs text-fg-3">{t.city}</span>
                </td>
                <td className="px-4 py-3 text-fg-2">{t.plan}</td>
                <td className="px-4 py-3">
                  <Badge tone={statusTone[t.status]}>{t.status}</Badge>
                  {t.status === "Trial" && t.trialEndsAt && (
                    <span className="ml-2 text-xs text-fg-3">ends {formatDate(t.trialEndsAt)}</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right tabular">{t.employeeCount}</td>
                <td className="px-4 py-3 text-right tabular">{customersForTenant(t.id).length}</td>
                <td className="px-4 py-3 text-fg-2 tabular">{formatDate(t.createdAt, true)}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/leads?tenant=${t.id}`} className="text-sm font-medium text-accent hover:underline">
                    Open workspace
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="flex flex-col gap-2 md:hidden">
        {tenants.map((t) => (
          <li key={t.id} className="card p-3.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-fg-3">
                  {t.city} · {t.plan}
                </p>
              </div>
              <Badge tone={statusTone[t.status]}>{t.status}</Badge>
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-border pt-3 text-xs">
              <div>
                <dt className="text-fg-3">Employees</dt>
                <dd className="font-medium tabular">{t.employeeCount}</dd>
              </div>
              <div>
                <dt className="text-fg-3">Customers</dt>
                <dd className="font-medium tabular">{customersForTenant(t.id).length}</dd>
              </div>
              <div>
                <dt className="text-fg-3">Created</dt>
                <dd className="font-medium tabular">{formatDate(t.createdAt)}</dd>
              </div>
            </dl>
            <Link href={`/leads?tenant=${t.id}`} className="mt-3 inline-block text-sm font-medium text-accent">
              Open workspace
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
