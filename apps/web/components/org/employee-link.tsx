import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";

// Beads issue Final-Verison-224 (step 5/5): this component used to take a
// whole fixture `Employee` and look up its name/designation itself via
// lib/org.ts's module-level fixture arrays (`employeeName`, `getDesignation`).
// Real data has no such module-level arrays to close over — every lookup now
// needs the fetched `OrgSnapshot` (lib/org-api.ts) explicitly — so this
// component takes the already-resolved `name`/`designation` strings instead
// and no longer imports lib/org or lib/org-api at all. Callers resolve those
// with lib/org-api.ts's `employeeName`/`getDesignation` before rendering
// this, the same way they already resolve every other per-row value.

export function employeeHref(employeeId: string) {
  return `/org/employees/${employeeId}`;
}

/** Avatar + name (+ designation) linking to the employee's detail page. */
export function EmployeeLink({
  employeeId,
  name,
  designation,
  subtitle = "designation",
  size = "sm",
  muted = false,
}: {
  employeeId: string;
  name: string;
  designation?: string | null;
  subtitle?: "designation" | "none";
  size?: "sm" | "md";
  muted?: boolean;
}) {
  return (
    <Link href={employeeHref(employeeId)} className={`group flex min-w-0 items-center gap-2.5 rounded-sm ${muted ? "opacity-70" : ""}`}>
      <Avatar name={name} size={size} />
      <span className="min-w-0">
        <span className="block truncate font-medium text-fg group-hover:underline">{name}</span>
        {subtitle === "designation" && (
          <span className="block truncate text-xs text-fg-3">{designation ?? "No designation"}</span>
        )}
      </span>
    </Link>
  );
}
