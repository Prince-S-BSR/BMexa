import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import type { Employee } from "@/lib/fixtures/types";
import { employeeName, getDesignation } from "@/lib/org";

export function employeeHref(e: Employee) {
  return `/org/employees/${e.id}?tenant=${e.tenantId}`;
}

/** Avatar + name (+ designation) linking to the employee's detail page. */
export function EmployeeLink({
  employee,
  subtitle = "designation",
  size = "sm",
  muted = false,
}: {
  employee: Employee;
  subtitle?: "designation" | "none";
  size?: "sm" | "md";
  muted?: boolean;
}) {
  const name = employeeName(employee);
  const designation = getDesignation(employee.designationId)?.label;
  return (
    <Link href={employeeHref(employee)} className={`group flex min-w-0 items-center gap-2.5 rounded-sm ${muted ? "opacity-70" : ""}`}>
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
