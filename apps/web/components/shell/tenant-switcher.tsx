"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { tenants } from "@/lib/fixtures/tenants";
import { DEFAULT_TENANT_ID } from "@/lib/crm";

/**
 * Mock tenant context. In the real product the tenant comes from the
 * session; here it is a URL param so state is deep-linkable.
 */
export function TenantSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const current = params.get("tenant") ?? DEFAULT_TENANT_ID;
  const onAdmin = pathname.startsWith("/admin");

  return (
    <label className="relative flex items-center">
      <span className="sr-only">Builder tenant</span>
      <select
        name="tenant"
        value={current}
        disabled={onAdmin}
        onChange={(e) => {
          const next = new URLSearchParams(params.toString());
          next.set("tenant", e.target.value);
          // Detail pages are record-scoped: switching tenant returns to the list.
          const base = pathname.startsWith("/leads/")
            ? "/leads"
            : pathname.startsWith("/org/employees/")
              ? "/org/employees"
              : pathname;
          router.push(`${base}?${next.toString()}`);
        }}
        className="h-8 appearance-none rounded-md border border-border bg-surface pr-8 pl-3 text-sm font-medium hover:border-border-strong disabled:cursor-not-allowed disabled:opacity-60"
      >
        {tenants.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-2 size-4 text-fg-3" />
    </label>
  );
}
