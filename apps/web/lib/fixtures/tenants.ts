import type { Project, Tenant, User } from "./types";

export const tenants: Tenant[] = [
  {
    id: "prithvi",
    name: "Prithvi Developers",
    city: "Pune",
    plan: "Enterprise",
    status: "Active",
    employeeCount: 148,
    createdAt: "2025-02-11T09:00:00+05:30",
  },
  {
    id: "suryavanshi",
    name: "Suryavanshi Realty",
    city: "Hyderabad",
    plan: "Growth",
    status: "Active",
    employeeCount: 62,
    createdAt: "2025-06-03T09:00:00+05:30",
  },
  {
    id: "ambar",
    name: "Ambar Heights Builders",
    city: "Ahmedabad",
    plan: "Starter",
    status: "Trial",
    employeeCount: 14,
    createdAt: "2026-09-12T09:00:00+05:30",
    trialEndsAt: "2026-10-12T09:00:00+05:30",
  },
  {
    id: "kaveri",
    name: "Kaveri Constructions",
    city: "Bengaluru",
    plan: "Growth",
    status: "Past Due",
    employeeCount: 39,
    createdAt: "2025-11-20T09:00:00+05:30",
  },
  {
    id: "neelkanth",
    name: "Neelkanth Infra",
    city: "Noida",
    plan: "Enterprise",
    status: "Suspended",
    employeeCount: 210,
    createdAt: "2025-04-28T09:00:00+05:30",
  },
];

/**
 * Prithvi's four projects double as the PO's worked example (03ai §2.1):
 *   Project B = Prithvi Aurum, C = Prithvi Greens, D = Prithvi Skyline,
 *   Project E = Prithvi Riverside. See fixtures/org.ts `projectRoleGrants`.
 */
export const projects: Project[] = [
  { id: "p-aurum", tenantId: "prithvi", name: "Prithvi Aurum", locality: "Hinjewadi", createdAt: "2025-02-18T10:00:00+05:30" },
  { id: "p-greens", tenantId: "prithvi", name: "Prithvi Greens", locality: "Wakad", createdAt: "2025-03-04T10:00:00+05:30" },
  { id: "p-skyline", tenantId: "prithvi", name: "Prithvi Skyline", locality: "Baner", createdAt: "2025-08-21T10:00:00+05:30" },
  { id: "p-riverside", tenantId: "prithvi", name: "Prithvi Riverside", locality: "Kharadi", createdAt: "2026-06-09T10:00:00+05:30" },
  { id: "s-meadows", tenantId: "suryavanshi", name: "Surya Meadows", locality: "Kokapet", createdAt: "2025-06-10T10:00:00+05:30" },
  { id: "s-one", tenantId: "suryavanshi", name: "Surya One", locality: "Gachibowli", createdAt: "2026-01-15T10:00:00+05:30" },
  { id: "a-phase2", tenantId: "ambar", name: "Ambar Heights Phase 2", locality: "Bopal", createdAt: "2026-09-14T10:00:00+05:30" },
  { id: "k-lakefront", tenantId: "kaveri", name: "Kaveri Lakefront", locality: "Whitefield", createdAt: "2025-11-25T10:00:00+05:30" },
  { id: "k-elan", tenantId: "kaveri", name: "Kaveri Elan", locality: "Sarjapur", createdAt: "2026-04-02T10:00:00+05:30" },
  { id: "n-grand", tenantId: "neelkanth", name: "Neelkanth Grand", locality: "Sector 150", createdAt: "2025-05-06T10:00:00+05:30" },
];

const domain: Record<string, string> = {
  prithvi: "prithvidev.in",
  suryavanshi: "suryavanshirealty.com",
  ambar: "ambarheights.in",
  kaveri: "kavericonstructions.com",
  neelkanth: "neelkanthinfra.in",
};

function user(id: string, tenantId: string, name: string, role: User["role"], status: User["status"] = "active"): User {
  const local = name
    .toLowerCase()
    .replace(/[^a-z ]/g, "")
    .trim()
    .replace(/\s+/g, ".");
  return { id, tenantId, name, role, email: `${local}@${domain[tenantId]}`, status };
}

/**
 * `role` is the legacy customer-screen label. Every user here has exactly one
 * `employees` row in fixtures/org.ts; that is where designation, department,
 * manager and project roles live.
 */
export const users: User[] = [
  // Prithvi
  user("u-shrikant", "prithvi", "Shrikant Patwardhan", "Management"),
  user("u-meera", "prithvi", "Meera Sathe", "Management"),
  user("u-anjali", "prithvi", "Anjali Bhosale", "Site Head"),
  user("u-rohan", "prithvi", "Rohan Deshmukh", "Site Head"),
  user("u-kiran", "prithvi", "Kiran Salunkhe", "Project Head"),
  user("u-priya", "prithvi", "Priya Nair", "Sales Rep"),
  user("u-amit", "prithvi", "Amit Tomar", "Sales Rep"),
  user("u-sneha", "prithvi", "Sneha Kulkarni", "Sales Rep"),
  user("u-vikram", "prithvi", "Vikram Joshi", "Sales Rep"),
  user("u-tanvi", "prithvi", "Tanvi Jadhav", "Sales Rep", "invited"),
  user("u-nilesh", "prithvi", "Nilesh Pawar", "Staff"),
  user("u-sunita", "prithvi", "Sunita Rane", "Staff"),
  user("u-deepak", "prithvi", "Deepak More", "Site Head", "deactivated"),
  // Suryavanshi
  user("u-venkat", "suryavanshi", "Venkat Suryavanshi", "Management"),
  user("u-ravi", "suryavanshi", "Ravi Teja", "Site Head"),
  user("u-lakshmi", "suryavanshi", "Lakshmi Devi", "Project Head"),
  user("u-divya", "suryavanshi", "Divya Reddy", "Sales Rep"),
  user("u-karthik", "suryavanshi", "Karthik Rao", "Sales Rep"),
  // Ambar
  user("u-bhavin", "ambar", "Bhavin Shah", "Management"),
  user("u-hetal", "ambar", "Hetal Shah", "Site Head"),
  user("u-jignesh", "ambar", "Jignesh Patel", "Sales Rep"),
  // Kaveri
  user("u-girish", "kaveri", "Girish Kaveriappa", "Management"),
  user("u-manoj", "kaveri", "Manoj Hegde", "Site Head"),
  user("u-shalini", "kaveri", "Shalini Menon", "Project Head"),
  user("u-ananya", "kaveri", "Ananya Iyer", "Sales Rep"),
  user("u-suresh", "kaveri", "Suresh Gowda", "Sales Rep", "suspended"),
  // Neelkanth
  user("u-arvind", "neelkanth", "Arvind Goel", "Management"),
  user("u-pooja", "neelkanth", "Pooja Mathur", "Project Head"),
  user("u-rajat", "neelkanth", "Rajat Saxena", "Site Head"),
  user("u-neha", "neelkanth", "Neha Chauhan", "Sales Rep"),
];
