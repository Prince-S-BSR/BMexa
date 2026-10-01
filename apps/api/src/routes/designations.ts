// apps/api/src/routes/designations.ts
//
// Designations — tenant-scoped R4 master, NOT seeded (Beads issue
// Final-Verison-abf; docs/architecture/03ak-… §4.2: "designation confers no
// authority"). List/create only; see lib/org-master-routes.ts for the shared
// implementation both this file and routes/departments.ts use.

import type { FastifyInstance } from "fastify";
import { sessionContextPreHandler } from "../middleware/session-context.js";
import { registerOrgMasterRoutes } from "../lib/org-master-routes.js";

export default async function designationRoutes(app: FastifyInstance): Promise<void> {
  app.addHook("preHandler", sessionContextPreHandler);
  registerOrgMasterRoutes(app, { table: "designations", routePath: "/designations", resourceName: "designation" });
}
