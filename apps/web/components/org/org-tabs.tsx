"use client";

import { NavLink } from "@/components/shell/nav-link";

const tabs = [
  { href: "/org/employees", label: "Employees" },
  { href: "/org/project-roles", label: "Project roles" },
  { href: "/org/roles", label: "Roles & permissions" },
  { href: "/org/projects", label: "Projects" },
];

/** Secondary navigation for the Organization area. Keeps `?tenant=` like the primary nav. */
export function OrgTabs() {
  return (
    <nav aria-label="Organization" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex min-w-max gap-1 border-b border-border">
        {tabs.map((t) => (
          <li key={t.href}>
            <NavLink
              href={t.href}
              className="-mb-px inline-flex h-10 items-center border-b-2 border-transparent px-3 text-sm text-fg-2 hover:text-fg data-[active=true]:border-accent data-[active=true]:font-medium data-[active=true]:text-fg"
            >
              {t.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
