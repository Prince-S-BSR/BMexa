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

export interface Project {
  id: string;
  tenantId: string;
  name: string;
  locality: string;
}

export type UserRole = "Sales Rep" | "Site Head" | "Project Head" | "Helpdesk";

export interface User {
  id: string;
  tenantId: string;
  name: string;
  role: UserRole;
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
