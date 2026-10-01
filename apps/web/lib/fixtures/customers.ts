import type {
  BusinessActivity,
  CommunicationType,
  Customer,
  DumpFields,
  FollowUpFields,
  SuccessFields,
  SystemEvent,
  SystemEventType,
} from "./types";

/** Fixed reference "now" so derived buckets are stable in the mockup. */
export const NOW_ISO = "2026-09-30T14:30:00+05:30";

let seq = 0;
const nextId = (prefix: string) => `${prefix}-${(++seq).toString().padStart(3, "0")}`;

function sys(
  at: string,
  type: SystemEventType,
  label: string,
  extra: Partial<Omit<SystemEvent, "kind" | "id" | "at" | "type" | "label">> = {},
): SystemEvent {
  return { kind: "system", id: nextId("sys"), at, type, label, ...extra };
}

function followUp(
  at: string,
  actorId: string,
  communicationType: CommunicationType,
  fields: FollowUpFields,
  projectId?: string,
): BusinessActivity {
  return {
    kind: "activity",
    id: nextId("act"),
    at,
    actorId,
    communicationType,
    outcome: "FOLLOW-UP",
    projectId,
    followUp: fields,
  };
}

function success(
  at: string,
  actorId: string,
  communicationType: CommunicationType,
  fields: SuccessFields,
  projectId?: string,
): BusinessActivity {
  return {
    kind: "activity",
    id: nextId("act"),
    at,
    actorId,
    communicationType,
    outcome: "SUCCESS",
    projectId,
    success: fields,
  };
}

function dump(
  at: string,
  actorId: string,
  communicationType: CommunicationType,
  fields: DumpFields,
  projectId?: string,
): BusinessActivity {
  return {
    kind: "activity",
    id: nextId("act"),
    at,
    actorId,
    communicationType,
    outcome: "DUMP",
    projectId,
    dump: fields,
  };
}

const firstResponse = (at: string, minutes: number, cycle: string) =>
  sys(at, "FIRST_RESPONSE", "First Response", { minutes, cycle });

export const customers: Customer[] = [
  // ───────────────────────── Prithvi Developers ─────────────────────────
  {
    id: "c-rohan",
    tenantId: "prithvi",
    name: "Rohan Deshmukh",
    mobile: "+91 98220 41177",
    source: "Website form",
    status: "New",
    ownerId: "u-anjali",
    handlerId: "u-priya",
    createdAt: "2026-09-27T10:02:00+05:30",
    interests: [
      { projectId: "p-aurum", configuration: "2 BHK", budgetLakh: 85, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-27T10:02:00+05:30" },
      { projectId: "p-greens", configuration: "3 BHK", budgetLakh: 110, provenance: "SALES_REP_ADDED", addedAt: "2026-09-28T11:07:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-09-30T17:00:00+05:30", remarks: "Confirm Saturday site visit for both projects" },
    timeline: [
      sys("2026-09-27T10:02:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Website form · Prithvi Aurum", projectId: "p-aurum" }),
      followUp("2026-09-27T10:24:00+05:30", "u-priya", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "Looking for 2 BHK near Hinjewadi IT park. Send Aurum brochure on WhatsApp.",
        nextFollowUpAt: "2026-09-28T11:00:00+05:30",
      }, "p-aurum"),
      firstResponse("2026-09-27T10:24:00+05:30", 22, "Original cycle"),
      followUp("2026-09-28T11:05:00+05:30", "u-priya", "WhatsApp", {
        responseType: "Qualified",
        subResponseType: "Site Visit Planned",
        remarks: "Liked Aurum. Also asked about 3 BHK at Greens for parents — added interest.",
        nextFollowUpAt: "2026-09-30T17:00:00+05:30",
      }, "p-aurum"),
      sys("2026-09-28T11:07:00+05:30", "INTEREST_ADDED", "Project Interest added", { detail: "Prithvi Greens · 3 BHK · added by Sales Rep", projectId: "p-greens" }),
    ],
  },
  {
    id: "c-meenal",
    tenantId: "prithvi",
    name: "Meenal Kulkarni",
    mobile: "+91 97650 88213",
    source: "MagicBricks",
    status: "New",
    ownerId: "u-anjali",
    handlerId: "u-priya",
    createdAt: "2026-09-15T09:41:00+05:30",
    transfer: { at: "2026-09-28T09:30:00+05:30", historyMode: "WITHOUT_HISTORY" },
    interests: [
      { projectId: "p-skyline", configuration: "3 BHK", budgetLakh: 140, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-15T09:41:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-09-29T18:00:00+05:30", remarks: "Share 3 BHK price sheet and PLC details" },
    timeline: [
      sys("2026-09-15T09:41:00+05:30", "LEAD_CREATED", "Lead created", { detail: "MagicBricks · Prithvi Skyline", projectId: "p-skyline" }),
      followUp("2026-09-15T16:21:00+05:30", "u-vikram", "Outbound Call", {
        responseType: "Not Connected",
        subResponseType: "Ringing, No Answer",
        remarks: "Tried twice.",
        nextFollowUpAt: "2026-09-16T11:00:00+05:30",
      }, "p-skyline"),
      firstResponse("2026-09-15T16:21:00+05:30", 400, "Original cycle"),
      followUp("2026-09-16T11:12:00+05:30", "u-vikram", "Outbound Call", {
        responseType: "Not Interested Now",
        subResponseType: "Call Back Later",
        remarks: "Busy with travel till the 24th.",
        nextFollowUpAt: "2026-09-25T11:00:00+05:30",
      }, "p-skyline"),
      sys("2026-09-28T09:30:00+05:30", "TRANSFER", "Customer transferred to you", { detail: "Assigned by Site Head" }),
      followUp("2026-09-28T12:10:00+05:30", "u-priya", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "Wants the 3 BHK price sheet. Checking home-loan eligibility this week.",
        nextFollowUpAt: "2026-09-29T18:00:00+05:30",
      }, "p-skyline"),
      firstResponse("2026-09-28T12:10:00+05:30", 160, "Transfer response"),
    ],
  },
  {
    id: "c-farhan",
    tenantId: "prithvi",
    name: "Farhan Sheikh",
    mobile: "+91 91580 23390",
    source: "CP · Skyline Realtors",
    status: "Booking In Progress",
    ownerId: "u-anjali",
    handlerId: "u-amit",
    createdAt: "2026-09-10T11:15:00+05:30",
    transfer: { at: "2026-09-22T10:00:00+05:30", historyMode: "WITH_HISTORY" },
    interests: [
      { projectId: "p-aurum", configuration: "3 BHK", budgetLakh: 125, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-10T11:15:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-10-03T12:00:00+05:30", remarks: "Collect KYC documents and PAN copy" },
    timeline: [
      sys("2026-09-10T11:15:00+05:30", "LEAD_CREATED", "Lead created", { detail: "CP walk-in · Skyline Realtors · Prithvi Aurum", projectId: "p-aurum" }),
      followUp("2026-09-10T11:27:00+05:30", "u-sneha", "Inbound Call", {
        responseType: "Qualified",
        subResponseType: "Site Visit Planned",
        remarks: "Coming with CP on Sunday to see 3 BHK tower A.",
        nextFollowUpAt: "2026-09-14T11:00:00+05:30",
      }, "p-aurum"),
      firstResponse("2026-09-10T11:27:00+05:30", 12, "Original cycle"),
      followUp("2026-09-14T12:40:00+05:30", "u-sneha", "Site Visit", {
        responseType: "Qualified",
        subResponseType: "Negotiation",
        remarks: "Liked A-1204. Asking for corner PLC waiver.",
        nextFollowUpAt: "2026-09-20T11:00:00+05:30",
      }, "p-aurum"),
      sys("2026-09-22T10:00:00+05:30", "TRANSFER", "Customer transferred to you", { detail: "With history · assigned by Site Head" }),
      followUp("2026-09-22T10:35:00+05:30", "u-amit", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Negotiation",
        remarks: "Agreed on A-1204 at list price with 1% discount. Token on Wednesday.",
        nextFollowUpAt: "2026-09-24T11:00:00+05:30",
      }, "p-aurum"),
      firstResponse("2026-09-22T10:35:00+05:30", 35, "Transfer response"),
      success("2026-09-24T11:20:00+05:30", "u-amit", "Site Visit", {
        reason: "Booking initiated",
        remarks: "Unit A-1204 · Token ₹2,00,000 received by cheque.",
      }, "p-aurum"),
      sys("2026-09-24T11:20:00+05:30", "STATUS_CHANGE", "Status → Booking In Progress", { detail: "Unit A-1204 · pending Accounts verification" }),
    ],
  },
  {
    id: "c-sunita",
    tenantId: "prithvi",
    name: "Sunita Pawar",
    mobile: "+91 98901 55021",
    source: "Referral",
    status: "Booked",
    ownerId: "u-anjali",
    handlerId: "u-sneha",
    createdAt: "2026-08-30T09:12:00+05:30",
    interests: [
      { projectId: "p-greens", configuration: "2 BHK", budgetLakh: 78, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-08-30T09:12:00+05:30" },
    ],
    timeline: [
      sys("2026-08-30T09:12:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Referral · Prithvi Greens", projectId: "p-greens" }),
      followUp("2026-08-30T09:21:00+05:30", "u-sneha", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Site Visit Planned",
        remarks: "Referred by existing G-402 owner. Visit on 2nd.",
        nextFollowUpAt: "2026-09-02T10:30:00+05:30",
      }, "p-greens"),
      firstResponse("2026-08-30T09:21:00+05:30", 9, "Original cycle"),
      followUp("2026-09-02T12:05:00+05:30", "u-sneha", "Site Visit", {
        responseType: "Qualified",
        subResponseType: "Negotiation",
        remarks: "Finalising G-702. Wants payment schedule.",
        nextFollowUpAt: "2026-09-05T11:00:00+05:30",
      }, "p-greens"),
      success("2026-09-05T11:30:00+05:30", "u-sneha", "Outbound Call", {
        reason: "Booking initiated",
        remarks: "Unit G-702 · booking amount transferred via NEFT.",
      }, "p-greens"),
      sys("2026-09-05T11:30:00+05:30", "STATUS_CHANGE", "Status → Booking In Progress", { detail: "Unit G-702" }),
      sys("2026-09-12T15:02:00+05:30", "STATUS_CHANGE", "Status → Booked", { detail: "Verified by Accounts · Unit G-702" }),
    ],
  },
  {
    id: "c-devendra",
    tenantId: "prithvi",
    name: "Devendra Rane",
    mobile: "+91 96570 10944",
    source: "Facebook Ads",
    status: "Dumped",
    ownerId: "u-anjali",
    handlerId: "u-vikram",
    createdAt: "2026-09-18T19:44:00+05:30",
    interests: [
      { projectId: "p-aurum", configuration: "1 BHK", budgetLakh: 38, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-18T19:44:00+05:30" },
    ],
    timeline: [
      sys("2026-09-18T19:44:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Facebook Ads · Prithvi Aurum", projectId: "p-aurum" }),
      followUp("2026-09-18T19:48:00+05:30", "u-vikram", "Outbound Call", {
        responseType: "Not Connected",
        subResponseType: "Switched Off",
        remarks: "",
        nextFollowUpAt: "2026-09-19T10:00:00+05:30",
      }, "p-aurum"),
      firstResponse("2026-09-18T19:48:00+05:30", 4, "Original cycle"),
      dump("2026-09-19T10:22:00+05:30", "u-vikram", "Outbound Call", {
        reason: "Budget mismatch",
        remarks: "Wants 1 BHK under ₹40L. Nothing at Aurum fits; no other project suits.",
      }, "p-aurum"),
      sys("2026-09-19T10:22:00+05:30", "FOLLOW_UPS_CANCELLED", "Pending follow-ups cancelled", { detail: "1 follow-up cancelled by Dump" }),
    ],
  },
  {
    id: "c-kavita",
    tenantId: "prithvi",
    name: "Kavita Sharma",
    mobile: "+91 99230 77462",
    source: "Website form",
    status: "New",
    ownerId: "u-anjali",
    handlerId: "u-amit",
    createdAt: "2026-07-14T13:05:00+05:30",
    interests: [
      { projectId: "p-skyline", configuration: "2 BHK", budgetLakh: 95, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-07-14T13:05:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-09-30T11:00:00+05:30", remarks: "Call to lock site-visit slot for Skyline sample flat" },
    timeline: [
      sys("2026-07-14T13:05:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Website form · Prithvi Skyline", projectId: "p-skyline" }),
      followUp("2026-07-14T13:36:00+05:30", "u-amit", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "Comparing with two other Baner projects.",
        nextFollowUpAt: "2026-07-20T11:00:00+05:30",
      }, "p-skyline"),
      firstResponse("2026-07-14T13:36:00+05:30", 31, "Original cycle"),
      followUp("2026-07-20T11:15:00+05:30", "u-amit", "WhatsApp", {
        responseType: "Not Interested Now",
        subResponseType: "Considering Other Project",
        remarks: "Leaning towards a ready-possession option.",
        nextFollowUpAt: "2026-07-28T11:00:00+05:30",
      }, "p-skyline"),
      dump("2026-07-28T11:40:00+05:30", "u-amit", "Outbound Call", {
        reason: "Bought elsewhere",
        remarks: "Booked a ready flat in Balewadi.",
      }, "p-skyline"),
      sys("2026-07-28T11:40:00+05:30", "FOLLOW_UPS_CANCELLED", "Pending follow-ups cancelled", { detail: "0 pending at the time of Dump" }),
      sys("2026-09-26T09:58:00+05:30", "REVIVAL", "Revived · Dumped → New", { detail: "Customer resubmitted website form", cycle: "Revival #1" }),
      sys("2026-09-26T09:58:00+05:30", "INTEREST_AGAIN", "Customer showed interest again", { detail: "Prithvi Skyline · 2 BHK", projectId: "p-skyline" }),
      followUp("2026-09-26T10:13:00+05:30", "u-amit", "Inbound Call", {
        responseType: "Qualified",
        subResponseType: "Site Visit Planned",
        remarks: "Balewadi deal fell through. Wants to see Skyline sample flat this week.",
        nextFollowUpAt: "2026-09-30T11:00:00+05:30",
      }, "p-skyline"),
      firstResponse("2026-09-26T10:13:00+05:30", 15, "Revival #1"),
    ],
  },
  {
    id: "c-omkar",
    tenantId: "prithvi",
    name: "Omkar Patil",
    mobile: "+91 98500 31288",
    source: "99acres",
    status: "Booking Cancelled",
    ownerId: "u-anjali",
    handlerId: "u-sneha",
    createdAt: "2026-08-05T10:30:00+05:30",
    interests: [
      { projectId: "p-aurum", configuration: "2 BHK", budgetLakh: 82, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-08-05T10:30:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-09-27T15:00:00+05:30", remarks: "Confirm refund paperwork received by Accounts" },
    timeline: [
      sys("2026-08-05T10:30:00+05:30", "LEAD_CREATED", "Lead created", { detail: "99acres · Prithvi Aurum", projectId: "p-aurum" }),
      followUp("2026-08-05T10:52:00+05:30", "u-sneha", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Site Visit Planned",
        remarks: "Visit on Saturday.",
        nextFollowUpAt: "2026-08-09T11:00:00+05:30",
      }, "p-aurum"),
      firstResponse("2026-08-05T10:52:00+05:30", 22, "Original cycle"),
      success("2026-08-20T16:10:00+05:30", "u-sneha", "Site Visit", {
        reason: "Booking initiated",
        remarks: "Unit A-903 · token received.",
      }, "p-aurum"),
      sys("2026-08-20T16:10:00+05:30", "STATUS_CHANGE", "Status → Booking In Progress", { detail: "Unit A-903" }),
      sys("2026-08-28T12:00:00+05:30", "STATUS_CHANGE", "Status → Booked", { detail: "Verified by Accounts · Unit A-903" }),
      sys("2026-09-20T17:25:00+05:30", "STATUS_CHANGE", "Status → Booking Cancelled", { detail: "Customer withdrew · Unit A-903 released per cancellation policy" }),
      followUp("2026-09-21T10:05:00+05:30", "u-sneha", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "Job relocation to Bengaluru. Wants refund status by month end.",
        nextFollowUpAt: "2026-09-27T15:00:00+05:30",
      }, "p-aurum"),
    ],
  },
  {
    id: "c-neelam",
    tenantId: "prithvi",
    name: "Neelam Gaikwad",
    mobile: "+91 90210 66315",
    source: "Housing.com",
    status: "New",
    ownerId: "u-anjali",
    handlerId: "u-vikram",
    createdAt: "2026-09-30T13:48:00+05:30",
    interests: [
      { projectId: "p-greens", configuration: "3 BHK", budgetLakh: 105, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-30T13:48:00+05:30" },
    ],
    timeline: [
      sys("2026-09-30T13:48:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Housing.com · Prithvi Greens", projectId: "p-greens" }),
    ],
  },

  // ───────────────────────── Suryavanshi Realty ─────────────────────────
  {
    id: "c-lakshmi",
    tenantId: "suryavanshi",
    name: "Lakshmi Pillai",
    mobile: "+91 98480 27703",
    source: "Website form",
    status: "New",
    ownerId: "u-ravi",
    handlerId: "u-divya",
    createdAt: "2026-09-21T08:55:00+05:30",
    interests: [
      { projectId: "s-meadows", configuration: "3 BHK", budgetLakh: 160, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-21T08:55:00+05:30" },
      { projectId: "s-one", configuration: "2 BHK", budgetLakh: 120, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-25T20:14:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-10-02T11:00:00+05:30", remarks: "Send comparison: Meadows 3 BHK vs Surya One 2 BHK" },
    timeline: [
      sys("2026-09-21T08:55:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Website form · Surya Meadows", projectId: "s-meadows" }),
      followUp("2026-09-21T09:40:00+05:30", "u-divya", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "NRI buyer, decision with spouse in October.",
        nextFollowUpAt: "2026-09-26T11:00:00+05:30",
      }, "s-meadows"),
      firstResponse("2026-09-21T09:40:00+05:30", 45, "Original cycle"),
      sys("2026-09-25T20:14:00+05:30", "INTEREST_ADDED", "Customer showed interest in another project", { detail: "Surya One · 2 BHK · customer-submitted", projectId: "s-one" }),
      followUp("2026-09-26T11:08:00+05:30", "u-divya", "Email", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "Shared floor plans for both projects.",
        nextFollowUpAt: "2026-10-02T11:00:00+05:30",
      }),
    ],
  },
  {
    id: "c-arjun",
    tenantId: "suryavanshi",
    name: "Arjun Varma",
    mobile: "+91 90000 48120",
    source: "CP · Hyderabad Homes",
    status: "Booking In Progress",
    ownerId: "u-ravi",
    handlerId: "u-karthik",
    createdAt: "2026-09-08T12:00:00+05:30",
    interests: [
      { projectId: "s-one", configuration: "3 BHK", budgetLakh: 175, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-08T12:00:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-09-30T16:00:00+05:30", remarks: "Collect booking-amount cheque at site office" },
    timeline: [
      sys("2026-09-08T12:00:00+05:30", "LEAD_CREATED", "Lead created", { detail: "CP · Hyderabad Homes · Surya One", projectId: "s-one" }),
      followUp("2026-09-08T12:18:00+05:30", "u-karthik", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Site Visit Planned",
        remarks: "",
        nextFollowUpAt: "2026-09-13T10:30:00+05:30",
      }, "s-one"),
      firstResponse("2026-09-08T12:18:00+05:30", 18, "Original cycle"),
      success("2026-09-27T13:15:00+05:30", "u-karthik", "Site Visit", {
        reason: "Booking initiated",
        remarks: "Unit T2-1503 · token paid via UPI.",
      }, "s-one"),
      sys("2026-09-27T13:15:00+05:30", "STATUS_CHANGE", "Status → Booking In Progress", { detail: "Unit T2-1503" }),
    ],
  },
  {
    id: "c-fatima",
    tenantId: "suryavanshi",
    name: "Fatima Begum",
    mobile: "+91 96180 90055",
    source: "Google Ads",
    status: "Dumped",
    ownerId: "u-ravi",
    handlerId: "u-divya",
    createdAt: "2026-09-12T17:30:00+05:30",
    interests: [
      { projectId: "s-meadows", configuration: "2 BHK", provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-12T17:30:00+05:30" },
    ],
    timeline: [
      sys("2026-09-12T17:30:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Google Ads · Surya Meadows", projectId: "s-meadows" }),
      followUp("2026-09-12T17:41:00+05:30", "u-divya", "Outbound Call", {
        responseType: "Not Connected",
        subResponseType: "Ringing, No Answer",
        remarks: "",
        nextFollowUpAt: "2026-09-13T11:00:00+05:30",
      }, "s-meadows"),
      firstResponse("2026-09-12T17:41:00+05:30", 11, "Original cycle"),
      followUp("2026-09-15T11:02:00+05:30", "u-divya", "WhatsApp", {
        responseType: "Not Connected",
        subResponseType: "No Reply",
        remarks: "Message delivered, not read.",
        nextFollowUpAt: "2026-09-18T11:00:00+05:30",
      }, "s-meadows"),
      dump("2026-09-19T10:00:00+05:30", "u-divya", "Outbound Call", {
        reason: "Unreachable",
        remarks: "5 attempts across call and WhatsApp, no response.",
      }, "s-meadows"),
      sys("2026-09-19T10:00:00+05:30", "FOLLOW_UPS_CANCELLED", "Pending follow-ups cancelled", { detail: "1 follow-up cancelled by Dump" }),
    ],
  },
  {
    id: "c-srinivas",
    tenantId: "suryavanshi",
    name: "Srinivas Naidu",
    mobile: "+91 98660 12890",
    source: "Referral",
    status: "Booked",
    ownerId: "u-ravi",
    handlerId: "u-karthik",
    createdAt: "2026-08-12T10:00:00+05:30",
    interests: [
      { projectId: "s-one", configuration: "4 BHK", budgetLakh: 240, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-08-12T10:00:00+05:30" },
    ],
    timeline: [
      sys("2026-08-12T10:00:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Referral · Surya One", projectId: "s-one" }),
      followUp("2026-08-12T10:06:00+05:30", "u-karthik", "Inbound Call", {
        responseType: "Qualified",
        subResponseType: "Site Visit Planned",
        remarks: "",
        nextFollowUpAt: "2026-08-16T11:00:00+05:30",
      }, "s-one"),
      firstResponse("2026-08-12T10:06:00+05:30", 6, "Original cycle"),
      success("2026-08-23T12:30:00+05:30", "u-karthik", "Site Visit", {
        reason: "Booking initiated",
        remarks: "Unit T1-2101 · penthouse floor.",
      }, "s-one"),
      sys("2026-08-23T12:30:00+05:30", "STATUS_CHANGE", "Status → Booking In Progress", { detail: "Unit T1-2101" }),
      sys("2026-09-02T11:00:00+05:30", "STATUS_CHANGE", "Status → Booked", { detail: "Verified by Accounts · Unit T1-2101" }),
    ],
  },

  // ───────────────────────── Ambar Heights Builders ─────────────────────────
  {
    id: "c-bhavna",
    tenantId: "ambar",
    name: "Bhavna Desai",
    mobile: "+91 98250 34410",
    source: "Walk-in",
    status: "New",
    ownerId: "u-hetal",
    handlerId: "u-jignesh",
    createdAt: "2026-09-20T15:20:00+05:30",
    interests: [
      { projectId: "a-phase2", configuration: "2 BHK", budgetLakh: 55, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-20T15:20:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-09-26T12:00:00+05:30", remarks: "Share bank tie-up list for home loan" },
    timeline: [
      sys("2026-09-20T15:20:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Walk-in · Ambar Heights Phase 2", projectId: "a-phase2" }),
      followUp("2026-09-20T15:45:00+05:30", "u-jignesh", "Site Visit", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "Saw 2 BHK sample. Needs loan pre-approval.",
        nextFollowUpAt: "2026-09-26T12:00:00+05:30",
      }, "a-phase2"),
      firstResponse("2026-09-20T15:45:00+05:30", 25, "Original cycle"),
    ],
  },
  {
    id: "c-parth",
    tenantId: "ambar",
    name: "Parth Mehta",
    mobile: "+91 99090 71226",
    source: "Instagram",
    status: "New",
    ownerId: "u-hetal",
    handlerId: "u-jignesh",
    createdAt: "2026-09-28T19:02:00+05:30",
    interests: [
      { projectId: "a-phase2", configuration: "3 BHK", budgetLakh: 72, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-28T19:02:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-10-01T10:30:00+05:30", remarks: "Call after his office hours; wants 3 BHK layout" },
    timeline: [
      sys("2026-09-28T19:02:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Instagram · Ambar Heights Phase 2", projectId: "a-phase2" }),
      followUp("2026-09-29T09:15:00+05:30", "u-jignesh", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "Prefers evening calls.",
        nextFollowUpAt: "2026-10-01T10:30:00+05:30",
      }, "a-phase2"),
      firstResponse("2026-09-29T09:15:00+05:30", 853, "Original cycle"),
    ],
  },

  // ───────────────────────── Kaveri Constructions ─────────────────────────
  {
    id: "c-nithya",
    tenantId: "kaveri",
    name: "Nithya Krishnan",
    mobile: "+91 98450 60918",
    source: "Website form",
    status: "New",
    ownerId: "u-manoj",
    handlerId: "u-ananya",
    createdAt: "2026-09-24T10:10:00+05:30",
    interests: [
      { projectId: "k-lakefront", configuration: "3 BHK", budgetLakh: 150, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-24T10:10:00+05:30" },
      { projectId: "k-elan", configuration: "3 BHK", budgetLakh: 135, provenance: "SALES_REP_ADDED", addedAt: "2026-09-24T10:40:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-09-30T18:30:00+05:30", remarks: "Decide between Lakefront and Elan after spouse visit" },
    timeline: [
      sys("2026-09-24T10:10:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Website form · Kaveri Lakefront", projectId: "k-lakefront" }),
      followUp("2026-09-24T10:38:00+05:30", "u-ananya", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "Open to Sarjapur too if possession is earlier — added Elan.",
        nextFollowUpAt: "2026-09-27T11:00:00+05:30",
      }, "k-lakefront"),
      firstResponse("2026-09-24T10:38:00+05:30", 28, "Original cycle"),
      sys("2026-09-24T10:40:00+05:30", "INTEREST_ADDED", "Project Interest added", { detail: "Kaveri Elan · 3 BHK · added by Sales Rep", projectId: "k-elan" }),
      followUp("2026-09-27T12:20:00+05:30", "u-ananya", "Site Visit", {
        responseType: "Qualified",
        subResponseType: "Negotiation",
        remarks: "Visited both. Spouse to visit on the 30th.",
        nextFollowUpAt: "2026-09-30T18:30:00+05:30",
      }),
    ],
  },
  {
    id: "c-ganesh",
    tenantId: "kaveri",
    name: "Ganesh Murthy",
    mobile: "+91 99000 23477",
    source: "CP · Namma Realty",
    status: "Booking Cancelled",
    ownerId: "u-manoj",
    handlerId: "u-suresh",
    createdAt: "2026-07-02T11:00:00+05:30",
    interests: [
      { projectId: "k-elan", configuration: "2 BHK", budgetLakh: 88, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-07-02T11:00:00+05:30" },
    ],
    pendingFollowUp: { at: "2026-10-06T11:00:00+05:30", remarks: "Check if he wants to re-book after loan approval" },
    timeline: [
      sys("2026-07-02T11:00:00+05:30", "LEAD_CREATED", "Lead created", { detail: "CP · Namma Realty · Kaveri Elan", projectId: "k-elan" }),
      followUp("2026-07-02T11:30:00+05:30", "u-suresh", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Site Visit Planned",
        remarks: "",
        nextFollowUpAt: "2026-07-06T11:00:00+05:30",
      }, "k-elan"),
      firstResponse("2026-07-02T11:30:00+05:30", 30, "Original cycle"),
      success("2026-07-15T16:00:00+05:30", "u-suresh", "Site Visit", {
        reason: "Booking initiated",
        remarks: "Unit E-604.",
      }, "k-elan"),
      sys("2026-07-15T16:00:00+05:30", "STATUS_CHANGE", "Status → Booking In Progress", { detail: "Unit E-604" }),
      sys("2026-08-14T10:00:00+05:30", "STATUS_CHANGE", "Status → Booking Cancelled", { detail: "Home-loan rejected · Unit E-604 released" }),
      followUp("2026-09-22T11:15:00+05:30", "u-suresh", "WhatsApp", {
        responseType: "Qualified",
        subResponseType: "Normal Follow-up",
        remarks: "Reapplying for loan with another bank.",
        nextFollowUpAt: "2026-10-06T11:00:00+05:30",
      }, "k-elan"),
    ],
  },
  {
    id: "c-pooja",
    tenantId: "kaveri",
    name: "Pooja Shetty",
    mobile: "+91 97400 18832",
    source: "Google Ads",
    status: "Dumped",
    ownerId: "u-manoj",
    handlerId: "u-ananya",
    createdAt: "2026-09-25T21:10:00+05:30",
    interests: [
      { projectId: "k-lakefront", configuration: "2 BHK", provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-09-25T21:10:00+05:30" },
    ],
    timeline: [
      sys("2026-09-25T21:10:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Google Ads · Kaveri Lakefront", projectId: "k-lakefront" }),
      dump("2026-09-26T09:05:00+05:30", "u-ananya", "Outbound Call", {
        reason: "Invalid lead",
        remarks: "Wrong number — person says they never enquired.",
      }, "k-lakefront"),
      firstResponse("2026-09-26T09:05:00+05:30", 715, "Original cycle"),
      sys("2026-09-26T09:05:00+05:30", "FOLLOW_UPS_CANCELLED", "Pending follow-ups cancelled", { detail: "0 pending at the time of Dump" }),
    ],
  },

  // ───────────────────────── Neelkanth Infra ─────────────────────────
  {
    id: "c-tarun",
    tenantId: "neelkanth",
    name: "Tarun Malhotra",
    mobile: "+91 98110 45573",
    source: "Referral",
    status: "Booked",
    ownerId: "u-rajat",
    handlerId: "u-neha",
    createdAt: "2026-06-18T10:00:00+05:30",
    interests: [
      { projectId: "n-grand", configuration: "3 BHK", budgetLakh: 190, provenance: "CUSTOMER_SUBMITTED", addedAt: "2026-06-18T10:00:00+05:30" },
    ],
    timeline: [
      sys("2026-06-18T10:00:00+05:30", "LEAD_CREATED", "Lead created", { detail: "Referral · Neelkanth Grand", projectId: "n-grand" }),
      followUp("2026-06-18T10:14:00+05:30", "u-neha", "Outbound Call", {
        responseType: "Qualified",
        subResponseType: "Site Visit Planned",
        remarks: "",
        nextFollowUpAt: "2026-06-21T11:00:00+05:30",
      }, "n-grand"),
      firstResponse("2026-06-18T10:14:00+05:30", 14, "Original cycle"),
      success("2026-06-28T15:00:00+05:30", "u-neha", "Site Visit", {
        reason: "Booking initiated",
        remarks: "Unit C-1102.",
      }, "n-grand"),
      sys("2026-06-28T15:00:00+05:30", "STATUS_CHANGE", "Status → Booking In Progress", { detail: "Unit C-1102" }),
      sys("2026-07-09T12:00:00+05:30", "STATUS_CHANGE", "Status → Booked", { detail: "Verified by Accounts · Unit C-1102" }),
    ],
  },
];
