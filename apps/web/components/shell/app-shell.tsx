import { Suspense, type ReactNode } from "react";
import { Building, Network, SquareKanban, Users } from "lucide-react";
import Link from "next/link";
import { hasSession } from "@/lib/session";
import { LogoutButton } from "./logout-button";
import { NavLink } from "./nav-link";
import { TenantSwitcher } from "./tenant-switcher";

const nav = [
  { href: "/leads", label: "Customers", icon: Users },
  { href: "/pipeline", label: "Pipeline", icon: SquareKanban },
  { href: "/org", label: "Organization", icon: Network },
  { href: "/admin/tenants", label: "Tenants", icon: Building, admin: true },
];

export async function AppShell({ children }: { children: ReactNode }) {
  // Session state also drives the logout/login link below (Beads issue
  // Final-Verison-b1r, step 4/5). Route-level auth gating (redirecting a
  // logged-out visitor away entirely) lives in app/(app)/layout.tsx and each
  // page's requireSession() call, not here — Final-Verison-224, step 5/5.
  const loggedIn = await hasSession();

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:shadow-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:px-6">
          <span className="flex items-center gap-2" translate="no">
            <span aria-hidden="true" className="grid size-7 place-items-center rounded-md bg-accent text-accent-fg">
              <span className="text-[11px] font-bold tracking-wide">BM</span>
            </span>
            <span className="text-sm font-semibold tracking-tight">BMexa</span>
          </span>

          <nav aria-label="Primary" className="ml-4 hidden items-center gap-1 md:flex">
            <Suspense>
              {nav.map((item) => (
                <NavLink key={item.href} href={item.href} className="rounded-md px-3 py-1.5 text-sm text-fg-2 hover:bg-surface-2 hover:text-fg data-[active=true]:bg-surface-2 data-[active=true]:font-medium data-[active=true]:text-fg">
                  {item.label}
                </NavLink>
              ))}
            </Suspense>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Suspense fallback={<div className="h-8 w-40 rounded-md bg-surface-2" />}>
              <TenantSwitcher />
            </Suspense>
            {loggedIn ? (
              <LogoutButton />
            ) : (
              <Link
                href="/login"
                className="inline-flex h-8 items-center rounded-md px-2.5 text-sm font-medium text-fg-2 hover:bg-surface-2 hover:text-fg"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-7xl flex-1 px-4 pt-5 pb-24 sm:px-6 md:pb-10">
        {children}
      </main>

      {/* Mobile bottom tab bar (Master Spec §14: phone-first for Sales Reps) */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <Suspense>
          <ul className="grid grid-cols-4">
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-fg-3 data-[active=true]:text-accent"
                >
                  <item.icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Suspense>
      </nav>
    </div>
  );
}
