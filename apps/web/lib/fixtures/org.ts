/**
 * Organization / Users fixtures (Phase 1 — Master Spec §78).
 *
 * Shapes mirror packages/db/schema.ts column-for-column (see fixtures/types.ts)
 * so that wiring a real API later is a data-source swap. Ids are readable
 * slugs; nothing else differs from the real rows.
 *
 * What is reproduced faithfully from the locked record:
 *  - AG-Q-3-n: Sales, CRM, Accounts, Marketing seeded per tenant (is_system).
 *  - PO-AI1·7: designations are NOT seeded; each tenant has its own small set.
 *  - PO-AF1·B / AC-55: one `reportsToEmployeeId` column, walked upward.
 *  - PO-AI1 worked example (03ai §2.1) on Prithvi Developers — see
 *    `projectRoleGrants` below: Employee D = Anjali Bhosale (designation GM),
 *    Employee A = Rohan Deshmukh.
 *  - 03ak §5: builder_side_admin is the only default holder of audit.*;
 *    site_head / project_head hold NO permissions yet.
 */
import type {
  Department,
  Designation,
  Employee,
  Permission,
  ProjectRoleGrant,
  Role,
  RolePermission,
  UserRoleGrant,
} from "./types";
import { tenants } from "./tenants";

const TENANT_IDS = tenants.map((t) => t.id);

// ───────────────────────── departments (R4, seeded) ─────────────────────────

const SEEDED_DEPARTMENTS: ReadonlyArray<[code: string, label: string]> = [
  ["sales", "Sales"],
  ["crm", "CRM"],
  ["accounts", "Accounts"],
  ["marketing", "Marketing"],
];

export const departments: Department[] = [
  ...TENANT_IDS.flatMap((tenantId) =>
    SEEDED_DEPARTMENTS.map(([code, label], i): Department => ({
      id: `dept-${tenantId}-${code}`,
      tenantId,
      code,
      label,
      description: null,
      sortOrder: (i + 1) * 10,
      isActive: true,
      isSystem: true,
    })),
  ),
  // AG-Q-11(f) is open (where Sales Support / Helpdesk sit). Tenants answer it
  // with rows, not schema — Prithvi has added one.
  {
    id: "dept-prithvi-helpdesk",
    tenantId: "prithvi",
    code: "helpdesk",
    label: "Helpdesk",
    description: "Walk-in and inbound call desk. Added by the tenant.",
    sortOrder: 50,
    isActive: true,
    isSystem: false,
  },
];

// ───────────────────────── designations (R4, NOT seeded) ─────────────────────────

function designation(tenantId: string, code: string, label: string, sortOrder: number, isActive = true): Designation {
  return { id: `desg-${tenantId}-${code}`, tenantId, code, label, description: null, sortOrder, isActive, isSystem: false };
}

export const designations: Designation[] = [
  // Prithvi — the chunk-272 shape the PO described (GM → AGM → Senior Sales Manager → … → Sales Executive)
  designation("prithvi", "ceo", "CEO & Promoter", 10),
  designation("prithvi", "vp_sales", "VP Sales", 20),
  designation("prithvi", "gm", "GM", 30),
  designation("prithvi", "agm", "AGM", 40),
  designation("prithvi", "sr_sales_manager", "Senior Sales Manager", 50),
  designation("prithvi", "sales_manager", "Sales Manager", 60, false), // retired, still referenced by history
  designation("prithvi", "sales_executive", "Sales Executive", 70),
  designation("prithvi", "manager", "Manager", 80),
  // Suryavanshi
  designation("suryavanshi", "md", "Managing Director", 10),
  designation("suryavanshi", "sr_manager_sales", "Senior Manager – Sales", 20),
  designation("suryavanshi", "manager", "Manager", 30),
  designation("suryavanshi", "sales_executive", "Sales Executive", 40),
  // Ambar (a small builder: three titles)
  designation("ambar", "partner", "Partner", 10),
  designation("ambar", "sales_manager", "Sales Manager", 20),
  designation("ambar", "sales_associate", "Sales Associate", 30),
  // Kaveri
  designation("kaveri", "director", "Director", 10),
  designation("kaveri", "regional_head", "Regional Head", 20),
  designation("kaveri", "asst_manager", "Assistant Manager", 30),
  designation("kaveri", "sales_executive", "Sales Executive", 40),
  // Neelkanth
  designation("neelkanth", "chairman", "Chairman", 10),
  designation("neelkanth", "vp_sales", "VP Sales", 20),
  designation("neelkanth", "zonal_head", "Zonal Head", 30),
  designation("neelkanth", "sales_executive", "Sales Executive", 40),
];

// ───────────────────────── employees ─────────────────────────

function employee(
  tenantId: string,
  slug: string,
  opts: { dept: string | null; desg: string | null; reportsTo: string | null; createdAt: string },
): Employee {
  return {
    id: `e-${slug}`,
    tenantId,
    userId: `u-${slug}`,
    departmentId: opts.dept ? `dept-${tenantId}-${opts.dept}` : null,
    designationId: opts.desg ? `desg-${tenantId}-${opts.desg}` : null,
    reportsToEmployeeId: opts.reportsTo ? `e-${opts.reportsTo}` : null,
    createdAt: opts.createdAt,
  };
}

export const employees: Employee[] = [
  // Prithvi Developers ─ tree: Shrikant → Meera → {Anjali → {Kiran → {Sneha, Vikram}, Priya, Amit, Deepak}, Rohan → Tanvi}
  employee("prithvi", "shrikant", { dept: null, desg: "ceo", reportsTo: null, createdAt: "2025-02-11T09:30:00+05:30" }),
  employee("prithvi", "meera", { dept: "sales", desg: "vp_sales", reportsTo: "shrikant", createdAt: "2025-02-12T09:30:00+05:30" }),
  employee("prithvi", "anjali", { dept: "sales", desg: "gm", reportsTo: "meera", createdAt: "2025-02-12T10:00:00+05:30" }),
  employee("prithvi", "rohan", { dept: "sales", desg: "agm", reportsTo: "meera", createdAt: "2025-03-01T10:00:00+05:30" }),
  employee("prithvi", "kiran", { dept: "sales", desg: "sr_sales_manager", reportsTo: "anjali", createdAt: "2025-03-15T10:00:00+05:30" }),
  employee("prithvi", "priya", { dept: "sales", desg: "sales_executive", reportsTo: "anjali", createdAt: "2025-04-02T10:00:00+05:30" }),
  employee("prithvi", "amit", { dept: "sales", desg: "sales_executive", reportsTo: "anjali", createdAt: "2025-04-02T10:00:00+05:30" }),
  employee("prithvi", "sneha", { dept: "sales", desg: "sales_executive", reportsTo: "kiran", createdAt: "2025-05-20T10:00:00+05:30" }),
  employee("prithvi", "vikram", { dept: "sales", desg: "sales_executive", reportsTo: "kiran", createdAt: "2025-05-20T10:00:00+05:30" }),
  employee("prithvi", "tanvi", { dept: "sales", desg: "sales_executive", reportsTo: "rohan", createdAt: "2026-09-22T10:00:00+05:30" }),
  employee("prithvi", "nilesh", { dept: "crm", desg: "manager", reportsTo: "shrikant", createdAt: "2025-02-20T10:00:00+05:30" }),
  employee("prithvi", "sunita", { dept: "accounts", desg: "manager", reportsTo: "shrikant", createdAt: "2025-02-20T10:00:00+05:30" }),
  employee("prithvi", "deepak", { dept: "sales", desg: "sales_manager", reportsTo: "anjali", createdAt: "2025-02-12T10:30:00+05:30" }),

  // Suryavanshi Realty ─ Venkat → {Ravi → {Divya, Karthik}, Lakshmi}
  employee("suryavanshi", "venkat", { dept: null, desg: "md", reportsTo: null, createdAt: "2025-06-03T09:30:00+05:30" }),
  employee("suryavanshi", "ravi", { dept: "sales", desg: "sr_manager_sales", reportsTo: "venkat", createdAt: "2025-06-04T10:00:00+05:30" }),
  employee("suryavanshi", "lakshmi", { dept: "sales", desg: "manager", reportsTo: "venkat", createdAt: "2026-01-10T10:00:00+05:30" }),
  employee("suryavanshi", "divya", { dept: "sales", desg: "sales_executive", reportsTo: "ravi", createdAt: "2025-06-20T10:00:00+05:30" }),
  employee("suryavanshi", "karthik", { dept: "sales", desg: "sales_executive", reportsTo: "ravi", createdAt: "2025-07-01T10:00:00+05:30" }),

  // Ambar Heights ─ Bhavin → Hetal → Jignesh
  employee("ambar", "bhavin", { dept: null, desg: "partner", reportsTo: null, createdAt: "2026-09-12T09:30:00+05:30" }),
  employee("ambar", "hetal", { dept: "sales", desg: "sales_manager", reportsTo: "bhavin", createdAt: "2026-09-12T10:00:00+05:30" }),
  employee("ambar", "jignesh", { dept: "sales", desg: "sales_associate", reportsTo: "hetal", createdAt: "2026-09-13T10:00:00+05:30" }),

  // Kaveri Constructions ─ Girish → Manoj → {Shalini, Ananya, Suresh}
  employee("kaveri", "girish", { dept: null, desg: "director", reportsTo: null, createdAt: "2025-11-20T09:30:00+05:30" }),
  employee("kaveri", "manoj", { dept: "sales", desg: "regional_head", reportsTo: "girish", createdAt: "2025-11-21T10:00:00+05:30" }),
  employee("kaveri", "shalini", { dept: "sales", desg: "asst_manager", reportsTo: "manoj", createdAt: "2026-03-30T10:00:00+05:30" }),
  employee("kaveri", "ananya", { dept: "sales", desg: "sales_executive", reportsTo: "manoj", createdAt: "2025-12-01T10:00:00+05:30" }),
  employee("kaveri", "suresh", { dept: "sales", desg: "sales_executive", reportsTo: "manoj", createdAt: "2025-12-01T10:00:00+05:30" }),

  // Neelkanth Infra ─ Arvind → Pooja → Rajat → Neha
  employee("neelkanth", "arvind", { dept: null, desg: "chairman", reportsTo: null, createdAt: "2025-04-28T09:30:00+05:30" }),
  employee("neelkanth", "pooja", { dept: "sales", desg: "vp_sales", reportsTo: "arvind", createdAt: "2025-04-29T10:00:00+05:30" }),
  employee("neelkanth", "rajat", { dept: "sales", desg: "zonal_head", reportsTo: "pooja", createdAt: "2025-05-02T10:00:00+05:30" }),
  employee("neelkanth", "neha", { dept: "sales", desg: "sales_executive", reportsTo: "rajat", createdAt: "2025-05-15T10:00:00+05:30" }),
];

// ───────────────────────── roles & permissions (R2 seed, 0004) ─────────────────────────

/** The fixed catalogue, verbatim from provision_tenant_rbac_defaults (0004). */
export const PERMISSION_CATALOGUE: readonly string[] = [
  "contacts.read", "contacts.create", "contacts.update", "contacts.delete", "contacts.export",
  "deals.read", "deals.create", "deals.update", "deals.delete",
  "activities.read", "activities.create", "activities.update", "activities.delete",
  "reports.read", "reports.export",
  "users.read", "users.invite", "users.update", "users.deactivate",
  "roles.read", "roles.manage",
  "billing.read", "billing.manage",
  "settings.read", "settings.manage",
  "audit.read",
  "audit.export", "audit.correct", "audit.retract",
  "integrations.read", "integrations.manage",
  "api.access",
];

type RoleSeed = Omit<Role, "id" | "tenantId">;

/** Seeded system roles, verbatim from 0004 (key, name, description, requires_2fa, grant_scope). */
const SEEDED_ROLES: readonly RoleSeed[] = [
  { key: "owner", name: "Owner", description: "Full control including billing and tenant deletion.", isSystem: true, requiresTwoFactor: true, grantScope: "tenant" },
  { key: "admin", name: "Admin", description: "Full control except tenant deletion.", isSystem: true, requiresTwoFactor: true, grantScope: "tenant" },
  { key: "manager", name: "Manager", description: "Manages team members and sees all CRM data.", isSystem: true, requiresTwoFactor: false, grantScope: "tenant" },
  { key: "member", name: "Member", description: "Standard frontline user. Full CRM data access.", isSystem: true, requiresTwoFactor: false, grantScope: "tenant" },
  { key: "read_only", name: "Read Only", description: "View-only access to CRM data.", isSystem: true, requiresTwoFactor: false, grantScope: "tenant" },
  {
    key: "builder_side_admin",
    name: "Builder-Side Admin",
    description:
      "The builder tenant's administrative authority, held by the CEO or an authorized executive (AG-Q-3). Only default holder of audit view, export, correction and retraction (ACG-4, ACG-5, ACG-9).",
    isSystem: true,
    requiresTwoFactor: true,
    grantScope: "tenant",
  },
  { key: "site_head", name: "Site Head", description: "Project-level role, granted per project and independent of designation (PO-AI1).", isSystem: true, requiresTwoFactor: false, grantScope: "project" },
  { key: "project_head", name: "Project Head", description: "Project-level role, granted per project and independent of designation (PO-AI1).", isSystem: true, requiresTwoFactor: false, grantScope: "project" },
];

/** Which catalogue keys each seeded role holds by default (0004 §"Role -> permission grants"). */
function seededPermissionKeys(roleKey: string): string[] {
  const resourceOf = (k: string) => k.split(".")[0]!;
  const actionOf = (k: string) => k.split(".")[1]!;
  switch (roleKey) {
    case "owner":
    case "admin":
      return PERMISSION_CATALOGUE.filter((k) => resourceOf(k) !== "audit");
    case "builder_side_admin":
      return [...PERMISSION_CATALOGUE];
    case "manager":
      return PERMISSION_CATALOGUE.filter((k) => ["contacts", "deals", "activities", "reports", "users"].includes(resourceOf(k)));
    case "member":
      return PERMISSION_CATALOGUE.filter((k) => ["contacts", "deals", "activities", "reports"].includes(resourceOf(k)) && actionOf(k) !== "export");
    case "read_only":
      return PERMISSION_CATALOGUE.filter((k) => ["contacts", "deals", "activities", "reports"].includes(resourceOf(k)) && actionOf(k) === "read");
    default:
      // site_head / project_head: no permissions until the Phase 3/5 acts exist.
      return [];
  }
}

export const roleId = (tenantId: string, key: string) => `role-${tenantId}-${key}`;
export const permissionId = (tenantId: string, key: string) => `perm-${tenantId}-${key.replace(".", "-")}`;

export const roles: Role[] = TENANT_IDS.flatMap((tenantId) =>
  SEEDED_ROLES.map((r): Role => ({ id: roleId(tenantId, r.key), tenantId, ...r })),
);

export const permissions: Permission[] = TENANT_IDS.flatMap((tenantId) =>
  PERMISSION_CATALOGUE.map(
    (key): Permission => ({
      id: permissionId(tenantId, key),
      tenantId,
      key,
      resource: key.split(".")[0]!,
      action: key.split(".")[1]!,
    }),
  ),
);

export const rolePermissions: RolePermission[] = TENANT_IDS.flatMap((tenantId) =>
  SEEDED_ROLES.flatMap((r) =>
    seededPermissionKeys(r.key).map(
      (key): RolePermission => ({ tenantId, roleId: roleId(tenantId, r.key), permissionId: permissionId(tenantId, key) }),
    ),
  ),
);

// ───────────────────────── user_roles (tenant-wide grants) ─────────────────────────

function tenantGrant(tenantId: string, userSlug: string, roleKey: string, grantedAt: string, grantedBy: string | null = null): UserRoleGrant {
  return { tenantId, userId: `u-${userSlug}`, roleId: roleId(tenantId, roleKey), grantedBy, grantedAt, roleGrantScope: "tenant" };
}

/** Signup assigns builder_side_admin to the founding user alongside owner (03ak §5). */
export const userRoles: UserRoleGrant[] = [
  tenantGrant("prithvi", "shrikant", "owner", "2025-02-11T09:30:00+05:30"),
  tenantGrant("prithvi", "shrikant", "builder_side_admin", "2025-02-11T09:30:00+05:30"),
  tenantGrant("prithvi", "meera", "manager", "2025-02-12T09:35:00+05:30", "u-shrikant"),
  tenantGrant("prithvi", "anjali", "manager", "2025-02-12T10:05:00+05:30", "u-shrikant"),
  tenantGrant("prithvi", "rohan", "manager", "2025-03-01T10:05:00+05:30", "u-shrikant"),
  tenantGrant("prithvi", "kiran", "manager", "2025-03-15T10:05:00+05:30", "u-shrikant"),
  // Delegated setup/configuration (AG-Q-3): admin, but NOT Builder-Side Admin.
  tenantGrant("prithvi", "nilesh", "admin", "2025-02-20T10:05:00+05:30", "u-shrikant"),
  tenantGrant("prithvi", "sunita", "read_only", "2025-02-20T10:05:00+05:30", "u-shrikant"),
  ...["priya", "amit", "sneha", "vikram", "tanvi", "deepak"].map((s) => tenantGrant("prithvi", s, "member", "2025-04-02T10:05:00+05:30", "u-nilesh")),

  tenantGrant("suryavanshi", "venkat", "owner", "2025-06-03T09:30:00+05:30"),
  tenantGrant("suryavanshi", "venkat", "builder_side_admin", "2025-06-03T09:30:00+05:30"),
  tenantGrant("suryavanshi", "ravi", "manager", "2025-06-04T10:05:00+05:30", "u-venkat"),
  tenantGrant("suryavanshi", "lakshmi", "manager", "2026-01-10T10:05:00+05:30", "u-venkat"),
  ...["divya", "karthik"].map((s) => tenantGrant("suryavanshi", s, "member", "2025-07-01T10:05:00+05:30", "u-venkat")),

  tenantGrant("ambar", "bhavin", "owner", "2026-09-12T09:30:00+05:30"),
  tenantGrant("ambar", "bhavin", "builder_side_admin", "2026-09-12T09:30:00+05:30"),
  tenantGrant("ambar", "hetal", "manager", "2026-09-12T10:05:00+05:30", "u-bhavin"),
  tenantGrant("ambar", "jignesh", "member", "2026-09-13T10:05:00+05:30", "u-bhavin"),

  tenantGrant("kaveri", "girish", "owner", "2025-11-20T09:30:00+05:30"),
  tenantGrant("kaveri", "girish", "builder_side_admin", "2025-11-20T09:30:00+05:30"),
  tenantGrant("kaveri", "manoj", "manager", "2025-11-21T10:05:00+05:30", "u-girish"),
  tenantGrant("kaveri", "shalini", "manager", "2026-03-30T10:05:00+05:30", "u-girish"),
  ...["ananya", "suresh"].map((s) => tenantGrant("kaveri", s, "member", "2025-12-01T10:05:00+05:30", "u-girish")),

  tenantGrant("neelkanth", "arvind", "owner", "2025-04-28T09:30:00+05:30"),
  tenantGrant("neelkanth", "arvind", "builder_side_admin", "2025-04-28T09:30:00+05:30"),
  tenantGrant("neelkanth", "pooja", "manager", "2025-04-29T10:05:00+05:30", "u-arvind"),
  tenantGrant("neelkanth", "rajat", "manager", "2025-05-02T10:05:00+05:30", "u-arvind"),
  tenantGrant("neelkanth", "neha", "member", "2025-05-15T10:05:00+05:30", "u-arvind"),
];

// ───────────────────────── project_role_grants ─────────────────────────

let grantSeq = 0;
function projectGrant(
  tenantId: string,
  employeeSlug: string,
  roleKey: "site_head" | "project_head",
  projectId: string,
  grantedAt: string,
  grantedBy: string,
  revoked?: { at: string; by: string },
): ProjectRoleGrant {
  return {
    id: `prg-${(++grantSeq).toString().padStart(3, "0")}`,
    tenantId,
    employeeId: `e-${employeeSlug}`,
    roleId: roleId(tenantId, roleKey),
    roleGrantScope: "project",
    projectId,
    grantedByUserId: grantedBy,
    grantedAt,
    revokedAt: revoked?.at ?? null,
    revokedByUserId: revoked?.by ?? null,
  };
}

/**
 * Prithvi reproduces the PO's worked example exactly (03ai §2.1), with
 * Employee D = Anjali Bhosale (GM) and Employee A = Rohan Deshmukh:
 *
 *   Project B (Prithvi Aurum)     → D = Site Head
 *   Project C (Prithvi Greens)    → D = Project Head, while A = Site Head
 *   Project D (Prithvi Skyline)   → D = Site Head
 *   Project E (Prithvi Riverside) → D = Project Head + Site Head, simultaneously
 *
 * The PO is silent on everyone else. Beyond the example, and as 03ak §4.5's
 * own test fixture does, a second Project Head is granted on Project C
 * (Kiran) to show that per-project cardinality is not constrained (AI-Q-2).
 * One revoked grant (Deepak, formerly Site Head on Aurum) shows the
 * append-only history: revocation is a stamp, and D's grant is a new row.
 */
export const projectRoleGrants: ProjectRoleGrant[] = [
  // — history: Deepak held Site Head on Aurum before D; revoked when he left.
  projectGrant("prithvi", "deepak", "site_head", "p-aurum", "2025-02-18T10:30:00+05:30", "u-shrikant", {
    at: "2025-08-29T18:00:00+05:30",
    by: "u-shrikant",
  }),
  // — Project B
  projectGrant("prithvi", "anjali", "site_head", "p-aurum", "2025-08-29T18:05:00+05:30", "u-shrikant"),
  // — Project C
  projectGrant("prithvi", "rohan", "site_head", "p-greens", "2025-03-04T10:30:00+05:30", "u-shrikant"),
  projectGrant("prithvi", "anjali", "project_head", "p-greens", "2025-03-04T10:30:00+05:30", "u-shrikant"),
  projectGrant("prithvi", "kiran", "project_head", "p-greens", "2026-02-02T11:00:00+05:30", "u-shrikant"),
  // — Project D
  projectGrant("prithvi", "anjali", "site_head", "p-skyline", "2025-08-21T10:30:00+05:30", "u-shrikant"),
  // — Project E: both roles, same employee, same project
  projectGrant("prithvi", "anjali", "site_head", "p-riverside", "2026-06-09T10:30:00+05:30", "u-shrikant"),
  projectGrant("prithvi", "anjali", "project_head", "p-riverside", "2026-06-09T10:30:00+05:30", "u-shrikant"),

  // Suryavanshi — one Site Head on several projects (GC-24), a separate Project Head on one.
  projectGrant("suryavanshi", "ravi", "site_head", "s-meadows", "2025-06-10T10:30:00+05:30", "u-venkat"),
  projectGrant("suryavanshi", "ravi", "site_head", "s-one", "2026-01-15T10:30:00+05:30", "u-venkat"),
  projectGrant("suryavanshi", "lakshmi", "project_head", "s-one", "2026-01-15T10:30:00+05:30", "u-venkat"),

  // Ambar — a small builder: one person holds both roles on its only project.
  projectGrant("ambar", "hetal", "site_head", "a-phase2", "2026-09-14T10:30:00+05:30", "u-bhavin"),
  projectGrant("ambar", "hetal", "project_head", "a-phase2", "2026-09-14T10:30:00+05:30", "u-bhavin"),

  // Kaveri
  projectGrant("kaveri", "manoj", "site_head", "k-lakefront", "2025-11-25T10:30:00+05:30", "u-girish"),
  projectGrant("kaveri", "manoj", "site_head", "k-elan", "2026-04-02T10:30:00+05:30", "u-girish"),
  projectGrant("kaveri", "shalini", "project_head", "k-lakefront", "2026-03-30T10:30:00+05:30", "u-girish"),

  // Neelkanth
  projectGrant("neelkanth", "rajat", "site_head", "n-grand", "2025-05-06T10:30:00+05:30", "u-arvind"),
  projectGrant("neelkanth", "pooja", "project_head", "n-grand", "2025-05-06T10:30:00+05:30", "u-arvind"),
];
