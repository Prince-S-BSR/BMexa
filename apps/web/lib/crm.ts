import { customers, NOW_ISO } from "./fixtures/customers";
import { projects, tenants, users } from "./fixtures/tenants";
import type {
  BusinessActivity,
  Customer,
  InquiryStatus,
  Project,
  Tenant,
  TimelineEntry,
  User,
} from "./fixtures/types";
import { dayKey } from "./format";

export { NOW_ISO };

/** Derived follow-up bucket (PO-AF1·M): calendar-day based, never stored. */
export type FollowUpBucket = "Overdue" | "Today" | "Future";

export function followUpBucket(c: Customer, nowIso: string = NOW_ISO): FollowUpBucket | null {
  if (!c.pendingFollowUp) return null;
  const due = dayKey(c.pendingFollowUp.at);
  const today = dayKey(nowIso);
  if (due < today) return "Overdue";
  if (due === today) return "Today";
  return "Future";
}

/** Who is looking at the record. Drives without-history projection (PO-AE1·L.3, ·O.1). */
export type Viewer = "handler" | "site-head";

/**
 * Projection of the timeline for a viewer.
 * - Site Head sees the complete history regardless of the transfer mode (·O.1).
 * - A handler who received the customer WITHOUT history sees only the
 *   transfer event and what came after it — with no indication, count or
 *   summary of what is hidden (·L.3). Nothing about earlier custody leaks.
 */
export function visibleTimeline(c: Customer, viewer: Viewer): TimelineEntry[] {
  const sorted = [...c.timeline].sort((a, b) => a.at.localeCompare(b.at) || rank(a) - rank(b));
  if (viewer === "site-head" || !c.transfer || c.transfer.historyMode === "WITH_HISTORY") {
    return sorted;
  }
  const cutoff = c.transfer.at;
  return sorted.filter((e) => e.at >= cutoff);
}

/** Keep business activities ahead of same-timestamp system milestones (·H.3). */
function rank(e: TimelineEntry) {
  return e.kind === "activity" ? 0 : 1;
}

export function lastBusinessActivity(c: Customer, viewer: Viewer = "handler"): BusinessActivity | null {
  const entries = visibleTimeline(c, viewer);
  for (let i = entries.length - 1; i >= 0; i--) {
    const e = entries[i]!;
    if (e.kind === "activity") return e;
  }
  return null;
}

export function lastEntry(c: Customer, viewer: Viewer = "handler"): TimelineEntry | null {
  const entries = visibleTimeline(c, viewer);
  return entries.length ? entries[entries.length - 1]! : null;
}

/** Whether the current response cycle still awaits its First Response. */
export function awaitingFirstResponse(c: Customer): boolean {
  const sorted = visibleTimeline(c, "site-head");
  let cycleStart: string | null = null;
  let responded = false;
  for (const e of sorted) {
    if (e.kind === "system" && (e.type === "LEAD_CREATED" || e.type === "TRANSFER" || e.type === "REVIVAL")) {
      cycleStart = e.at;
      responded = false;
    }
    if (e.kind === "system" && e.type === "FIRST_RESPONSE") responded = true;
  }
  return cycleStart !== null && !responded;
}

// ───────────────────────── lookups ─────────────────────────

export function getTenant(id: string): Tenant | undefined {
  return tenants.find((t) => t.id === id);
}
export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
export function getUser(id: string): User | undefined {
  return users.find((u) => u.id === id);
}
export function getCustomer(id: string): Customer | undefined {
  return customers.find((c) => c.id === id);
}
export function customersForTenant(tenantId: string): Customer[] {
  return customers.filter((c) => c.tenantId === tenantId);
}
export function projectsForTenant(tenantId: string): Project[] {
  return projects.filter((p) => p.tenantId === tenantId);
}
export function usersForTenant(tenantId: string): User[] {
  return users.filter((u) => u.tenantId === tenantId);
}
export function employeeCount(tenantId: string): number {
  return getTenant(tenantId)?.employeeCount ?? 0;
}

export const DEFAULT_TENANT_ID = "prithvi";

/** Resolve the tenant from a `?tenant=` search param, falling back safely. */
export function resolveTenant(param: string | string[] | undefined): Tenant {
  const id = Array.isArray(param) ? param[0] : param;
  return getTenant(id ?? "") ?? getTenant(DEFAULT_TENANT_ID)!;
}

export const STATUS_ORDER: InquiryStatus[] = [
  "New",
  "Booking In Progress",
  "Booked",
  "Booking Cancelled",
  "Dumped",
];

export { customers, projects, tenants, users };
