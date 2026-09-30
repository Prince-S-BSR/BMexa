// apps/api/src/app.ts
//
// Extracted from index.ts so the Fastify instance can be built without
// binding a real network port — this is what the integration test suite
// (apps/api/test/) imports and drives with Supertest against the same
// instance the process actually serves. Pure extraction, no behavior change:
// index.ts still registers the same routes in the same order and still
// calls app.listen() the same way.

import Fastify, { type FastifyInstance } from "fastify";
import testOnlyRoutes from "./routes/test-only.js";
import employeeRoutes from "./routes/employees.js";
import departmentRoutes from "./routes/departments.js";
import designationRoutes from "./routes/designations.js";
import projectRoutes from "./routes/projects.js";
import projectRoleGrantRoutes from "./routes/project-role-grants.js";
import roleRoutes from "./routes/roles.js";
import auditRoutes from "./routes/audit.js";

export interface BuildAppOptions {
  /** Defaults to true to match index.ts's production behavior. Tests pass false to keep output quiet. */
  logger?: boolean;
}

export async function buildApp(opts: BuildAppOptions = {}): Promise<FastifyInstance> {
  const app = Fastify({
    logger: opts.logger ?? true,
  });

  // Phase 0 scope: infrastructure scaffolding only. No product routes.
  // See docs/ROADMAP.md — CRM business objects (contacts, deals, etc.) land in
  // Phase 1, built on top of the data-access layer described in
  // docs/architecture/00-phase-0-architecture-note.md §2.1/§3.3.
  app.get("/health", async () => {
    return { status: "ok" };
  });

  // Phase 0 gate work (Beads issue Final-Verison-x9u): throwaway /_test/
  // routes proving R1/R2/R3 hold over real HTTP requests. Not product routes —
  // see apps/api/src/routes/test-only.ts for the scope boundary.
  await app.register(testOnlyRoutes);

  // Phase 1 (Beads issue Final-Verison-abf): the first real product routes —
  // Organization/Users CRUD and the Audit API. See docs/architecture/03ak-…
  // for the data model and each route file's header for its permission
  // mapping and audit-emission behavior.
  await app.register(employeeRoutes);
  await app.register(departmentRoutes);
  await app.register(designationRoutes);
  await app.register(projectRoutes);
  await app.register(projectRoleGrantRoutes);
  await app.register(roleRoutes);
  await app.register(auditRoutes);

  return app;
}
