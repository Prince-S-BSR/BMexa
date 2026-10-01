import { Badge } from "@/components/ui/badge";
import type { Role, RoleGrantScope, UserStatus } from "@/lib/fixtures/types";

/**
 * Project-scoped role badge. Tone is keyed on the role's `key` for the two
 * seeded roles (accent = Site Head, info = Project Head) and falls back to
 * neutral for any tenant-defined project role. Display only — no logic
 * anywhere branches on these names (R2).
 */
export function ProjectRoleBadge({ role, compact = false, className = "" }: { role: Role; compact?: boolean; className?: string }) {
  const tone = role.key === "site_head" ? "accent" : role.key === "project_head" ? "info" : "neutral";
  const short = role.key === "site_head" ? "SH" : role.key === "project_head" ? "PH" : role.name;
  return (
    <Badge tone={tone} title={compact ? role.name : undefined} className={className}>
      {compact ? <abbr className="no-underline">{short}</abbr> : role.name}
    </Badge>
  );
}

export function ScopeBadge({ scope }: { scope: RoleGrantScope }) {
  return (
    <Badge tone="neutral" title={scope === "project" ? "Granted per project through project role grants" : "Granted tenant-wide through user roles"}>
      {scope === "project" ? "Per project" : "Tenant-wide"}
    </Badge>
  );
}

const statusTone: Record<UserStatus, { tone: "success" | "info" | "warn" | "neutral"; label: string }> = {
  active: { tone: "success", label: "Active" },
  invited: { tone: "info", label: "Invited" },
  suspended: { tone: "warn", label: "Suspended" },
  deactivated: { tone: "neutral", label: "Inactive" },
};

/** `users.status` rendered as the directory's active/inactive state. */
export function UserStatusBadge({ status, className = "" }: { status: UserStatus; className?: string }) {
  const { tone, label } = statusTone[status];
  return (
    <Badge tone={tone} className={className} title={status === "deactivated" ? "Access deactivated. The employee record is retained." : undefined}>
      {label}
    </Badge>
  );
}
