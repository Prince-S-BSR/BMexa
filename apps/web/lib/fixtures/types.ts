/**
 * Front-end-only fixture types for the BMexa CRM design exploration.
 *
 * These deliberately mirror the PO-locked vocabulary from
 * docs/architecture/03ae (customer-centric Inquiry, Project Interests,
 * transfer history modes) and 03af (PO-AF1: Communication Type x Outcome,
 * First Response milestone, follow-up buckets). They are NOT the backend
 * schema and are not shared with packages/db.
 */

export type TenantPlan = "Starter" | "Growth" | "Enterprise";
export type TenantStatus = "Active" | "Trial" | "Past Due" | "Suspended";

export interface Tenant {
  id: string;
  name: string;
  city: string;
  plan: TenantPlan;
  status: TenantStatus;
  employeeCount: number;
  createdAt: string; // ISO
  trialEndsAt?: string;
}

/**
 * `projects` is a deliberate minimal stub in the real schema (03ak §4.6):
 * id, tenant, name, custom_attributes, timestamps. No status, no lifecycle.
 * `locality` is a customer-screen display convenience that lives in
 * `custom_attributes` territory; the Organization screens do not show it.
 */
export interface Project {
  id: string;
  tenantId: string;
  name: string;
  locality: string;
  createdAt: string;
}

/**
 * Legacy display label used by the customer screens ("Owner · Site Head").
 * The Organization screens do NOT read this: project roles come from
 * `ProjectRoleGrant` rows and tenant roles from `UserRoleGrant` rows.
 */
export type UserRole = "Sales Rep" | "Site Head" | "Project Head" | "Helpdesk" | "Management" | "Staff";

/** Mirrors `users.status` (0000 §users CHECK). Access ends here; the employee row persists. */
export type UserStatus = "invited" | "active" | "suspended" | "deactivated";

export interface User {
  id: string;
  tenantId: string;
  name: string;
  role: UserRole;
  /** `users.email` */
  email: string;
  /** `users.status` */
  status: UserStatus;
}

// ---------------------------------------------------------------------------
// Organization / Users (Phase 1). Field names mirror packages/db/schema.ts
// column-for-column so a later real-API wiring is a data-source swap. The
// `id`s are readable slugs instead of uuids; nothing else differs in shape.
// ---------------------------------------------------------------------------

/** R4 master shape shared by `departments` and `designations` (03ak §4.2). */
export interface MasterRow {
  id: string;
  tenantId: string;
  /** Stable machine key, never shown. */
  code: string;
  /** Tenant-renameable label. */
  label: string;
  description: string | null;
  sortOrder: number;
  /** Retirement, never deletion. */
  isActive: boolean;
  /** Seeded rows: renameable and deactivatable, not deletable. */
  isSystem: boolean;
}

/** `departments` — Sales, CRM, Accounts, Marketing are seeded (AG-Q-3-n). */
export type Department = MasterRow;
/** `designations` — NOT seeded; each tenant creates its own (PO-AI1·7). Confers no authority. */
export type Designation = MasterRow;

/** `employees` — the organizational identity, 1:1 with a user (Spec §06). */
export interface Employee {
  id: string;
  tenantId: string;
  userId: string;
  departmentId: string | null;
  designationId: string | null;
  /** DIRECT manager. Indirect managers are reached by walking this upward. NULL = top of a tree. */
  reportsToEmployeeId: string | null;
  createdAt: string;
}

export type RoleGrantScope = "tenant" | "project";

/** `roles` (Phase 0, extended with `grantScope` in Phase 1). */
export interface Role {
  id: string;
  tenantId: string;
  key: string;
  name: string;
  description: string | null;
  isSystem: boolean;
  requiresTwoFactor: boolean;
  grantScope: RoleGrantScope;
}

/** `permissions` — the fixed catalogue, `resource.action`. */
export interface Permission {
  id: string;
  tenantId: string;
  key: string;
  resource: string;
  action: string;
}

/** `role_permissions` */
export interface RolePermission {
  tenantId: string;
  roleId: string;
  permissionId: string;
}

/** `user_roles` — tenant-wide grants only (`roleGrantScope` is always 'tenant'). */
export interface UserRoleGrant {
  tenantId: string;
  userId: string;
  roleId: string;
  grantedBy: string | null;
  grantedAt: string;
  roleGrantScope: "tenant";
}

/**
 * `project_role_grants` — one row per (employee, project-scoped role, project).
 * Append-only: revocation stamps `revokedAt`, the row is never deleted, and a
 * re-grant is a new row. No cardinality constraint (AI-Q-2 is open): a project
 * may have several Site Heads, several Project Heads, and one employee may
 * hold both on the same project.
 */
export interface ProjectRoleGrant {
  id: string;
  tenantId: string;
  employeeId: string;
  roleId: string;
  roleGrantScope: "project";
  projectId: string;
  grantedByUserId: string | null;
  grantedAt: string;
  revokedAt: string | null;
  revokedByUserId: string | null;
}

/** Inquiry-level commercial status (PO-AE1·P.3, V-23, PO-AJ1·11). */
export type InquiryStatus =
  | "New"
  | "Booking In Progress"
  | "Booked"
  | "Booking Cancelled"
  | "Dumped";

export const INQUIRY_STATUSES: InquiryStatus[] = [
  "New",
  "Booking In Progress",
  "Booked",
  "Booking Cancelled",
  "Dumped",
];

/** Project Interest provenance (PO-AE1·D). */
export type InterestProvenance = "CUSTOMER_SUBMITTED" | "SALES_REP_ADDED";

export interface ProjectInterest {
  projectId: string;
  configuration: string; // e.g. "2 BHK"
  budgetLakh?: number; // indicative budget in INR lakh
  provenance: InterestProvenance;
  addedAt: string;
}

/** PO-AF1·C.3 — configured set; these are examples, not a closed list. */
export type CommunicationType =
  | "Outbound Call"
  | "Inbound Call"
  | "WhatsApp"
  | "Message"
  | "Email"
  | "Site Visit";

export const COMMUNICATION_TYPES: CommunicationType[] = [
  "Outbound Call",
  "Inbound Call",
  "WhatsApp",
  "Message",
  "Email",
  "Site Visit",
];

/** PO-AF1·C.5 */
export type Outcome = "FOLLOW-UP" | "SUCCESS" | "DUMP";

export interface FollowUpFields {
  responseType: string;
  subResponseType: string;
  remarks: string;
  nextFollowUpAt: string;
}
export interface SuccessFields {
  reason: string;
  remarks: string;
}
export interface DumpFields {
  reason: string; // mandatory (PO-AF1·F.2)
  remarks?: string;
}

/** A business activity recorded by the current handler. Immutable. */
export interface BusinessActivity {
  kind: "activity";
  id: string;
  at: string;
  actorId: string;
  communicationType: CommunicationType;
  outcome: Outcome;
  projectId?: string; // activity/project association (PO-AE1·A.7)
  followUp?: FollowUpFields;
  success?: SuccessFields;
  dump?: DumpFields;
}

/** System-generated milestones (PO-AF1·L.1 (B)). */
export type SystemEventType =
  | "LEAD_CREATED"
  | "FIRST_RESPONSE"
  | "TRANSFER"
  | "REVIVAL"
  | "INTEREST_ADDED"
  | "INTEREST_AGAIN"
  | "STATUS_CHANGE"
  | "FOLLOW_UPS_CANCELLED";

export interface SystemEvent {
  kind: "system";
  id: string;
  at: string;
  type: SystemEventType;
  /** Short, user-facing label. */
  label: string;
  /** Structured detail, e.g. cycle name or minutes. */
  detail?: string;
  /** For FIRST_RESPONSE: which response cycle this belongs to. */
  cycle?: string;
  minutes?: number;
  projectId?: string;
}

export type TimelineEntry = BusinessActivity | SystemEvent;

export type HistoryMode = "WITH_HISTORY" | "WITHOUT_HISTORY";

export interface TransferRecord {
  at: string;
  historyMode: HistoryMode;
}

export interface PendingFollowUp {
  at: string;
  remarks: string;
}

/**
 * One customer = one Inquiry (PO-AE1·A.1). Commercial status lives here,
 * never on a Project Interest.
 */
export interface Customer {
  id: string;
  tenantId: string;
  name: string;
  mobile: string; // tenant-scoped identity key (PO-AE1·B)
  source: string;
  status: InquiryStatus;
  /** Lead Owner (relationship) — Site Head in current PO usage. */
  ownerId: string;
  /** Lead Handler — the Sales Rep currently working the customer. */
  handlerId: string;
  createdAt: string;
  interests: ProjectInterest[];
  timeline: TimelineEntry[];
  pendingFollowUp?: PendingFollowUp;
  /** Most recent transfer into the current handler, if any. */
  transfer?: TransferRecord;
}
