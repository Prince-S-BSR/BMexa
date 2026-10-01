"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";

/** Link that keeps the current `?tenant=` context and marks itself active. */
export function NavLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const pathname = usePathname();
  const params = useSearchParams();
  const tenant = params.get("tenant");
  const active = pathname === href || pathname.startsWith(href + "/");
  const target = tenant && !href.startsWith("/admin") ? `${href}?tenant=${tenant}` : href;
  return (
    <Link href={target} data-active={active} aria-current={active ? "page" : undefined} className={className}>
      {children}
    </Link>
  );
}
