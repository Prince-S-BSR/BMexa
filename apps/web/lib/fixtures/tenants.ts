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

export const projects: Project[] = [
  { id: "p-aurum", tenantId: "prithvi", name: "Prithvi Aurum", locality: "Hinjewadi" },
  { id: "p-greens", tenantId: "prithvi", name: "Prithvi Greens", locality: "Wakad" },
  { id: "p-skyline", tenantId: "prithvi", name: "Prithvi Skyline", locality: "Baner" },
  { id: "s-meadows", tenantId: "suryavanshi", name: "Surya Meadows", locality: "Kokapet" },
  { id: "s-one", tenantId: "suryavanshi", name: "Surya One", locality: "Gachibowli" },
  { id: "a-phase2", tenantId: "ambar", name: "Ambar Heights Phase 2", locality: "Bopal" },
  { id: "k-lakefront", tenantId: "kaveri", name: "Kaveri Lakefront", locality: "Whitefield" },
  { id: "k-elan", tenantId: "kaveri", name: "Kaveri Elan", locality: "Sarjapur" },
  { id: "n-grand", tenantId: "neelkanth", name: "Neelkanth Grand", locality: "Sector 150" },
];

export const users: User[] = [
  // Prithvi
  { id: "u-anjali", tenantId: "prithvi", name: "Anjali Bhosale", role: "Site Head" },
  { id: "u-priya", tenantId: "prithvi", name: "Priya Nair", role: "Sales Rep" },
  { id: "u-amit", tenantId: "prithvi", name: "Amit Tomar", role: "Sales Rep" },
  { id: "u-sneha", tenantId: "prithvi", name: "Sneha Kulkarni", role: "Sales Rep" },
  { id: "u-vikram", tenantId: "prithvi", name: "Vikram Joshi", role: "Sales Rep" },
  // Suryavanshi
  { id: "u-ravi", tenantId: "suryavanshi", name: "Ravi Teja", role: "Site Head" },
  { id: "u-divya", tenantId: "suryavanshi", name: "Divya Reddy", role: "Sales Rep" },
  { id: "u-karthik", tenantId: "suryavanshi", name: "Karthik Rao", role: "Sales Rep" },
  // Ambar
  { id: "u-hetal", tenantId: "ambar", name: "Hetal Shah", role: "Site Head" },
  { id: "u-jignesh", tenantId: "ambar", name: "Jignesh Patel", role: "Sales Rep" },
  // Kaveri
  { id: "u-manoj", tenantId: "kaveri", name: "Manoj Hegde", role: "Site Head" },
  { id: "u-ananya", tenantId: "kaveri", name: "Ananya Iyer", role: "Sales Rep" },
  { id: "u-suresh", tenantId: "kaveri", name: "Suresh Gowda", role: "Sales Rep" },
  // Neelkanth
  { id: "u-rajat", tenantId: "neelkanth", name: "Rajat Saxena", role: "Site Head" },
  { id: "u-neha", tenantId: "neelkanth", name: "Neha Chauhan", role: "Sales Rep" },
];
