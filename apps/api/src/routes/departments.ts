// apps/api/src/routes/departments.ts
//
// Departments — tenant-scoped R4 master (Beads issue Final-Verison-abf;
// docs/architecture/03ak-… §4.2). List/create only; see
// lib/org-master-routes.ts for the shared implementation both this file and
// routes/designations.ts use.

import type { FastifyInstance } from "fastify";
import { sessionContextPreHandler } from "../middleware/session-context.js";
import { registerOrgMasterRoutes } from "../lib/org-master-routes.js";

export default async function departmentRoutes(app: FastifyInstance): Promise<void> {
  app.addHook("preHandler", sessionContextPreHandler);
  registerOrgMasterRoutes(app, { table: "departments", routePath: "/departments", resourceName: "department" });
}
