// apps/api/src/routes/auth.ts
//
// Signup (Beads issue Final-Verison-r1r). Phase 1 scope (Master Spec §78:
// "Builder/company setup, organization profile, users") that had not been
// built yet — apps/api/src/middleware/session-context.ts's own header
// comment flagged the gap: "there is no signup/login endpoint yet — that is
// Phase 1 scope". test/support/provision.ts's provisionTenant() already does
// exactly this sequence (generate the tenant id, SET LOCAL tenant context to
// it, insert the tenants row, run provision_tenant_rbac_defaults()) as a
// test-only seeding helper; this route is that same sequence made a real,
// HTTP-reachable product endpoint.
//
// Deliberately unauthenticated (no sessionContextPreHandler): there is no
// session to resolve yet — signup is how a tenant and its founding user come
// to exist in the first place.
//
// Scope, per the issue brief: create the tenant + founding user in one
// transaction, provision R2 defaults, grant the founding user
// builder_side_admin (the tenant's administrative authority, AG-Q-3), and
// create the founding user's `employees` row (employees is 1:1 with users,
// 03ak §4.3 — the founding user is an employee too, at the top of the
// reporting tree: no manager, no department/designation yet).
//
// Login (verifying credentials and minting a session) is explicitly a
// separate, later piece of work — this file only ever creates rows, it never
// authenticates a request.

import type { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { extractRows } from "../lib/rows.js";
import { hashPassword } from "../lib/password.js";
import { recordAuditEvent } from "../lib/audit.js";

// Verbatim copy of the DB's own `tenants_subdomain_format` CHECK
// (schema-phase-0.sql / 0000 §1) — validating it here first turns a
// constraint violation into a clean, specific 400 instead of a generic
// "signup_failed" with a raw Postgres message.
const SUBDOMAIN_FORMAT = /^[a-z0-9]([a-z0-9-]{1,61}[a-z0-9])$/;

// Not a schema constraint (there isn't one on password_hash's plaintext
// input, which never reaches the DB) — a minimal product-level floor so an
// empty or trivial password doesn't silently produce a "valid" account.
const MIN_PASSWORD_LENGTH = 8;

interface SignupBody {
  subdomain?: string;
  tenantName?: string;
  email?: string;
  password?: string;
  fullName?: string;
}

function isUniqueViolation(err: unknown): boolean {
  const code =
    (err as { code?: string; cause?: { code?: string } })?.code ??
    (err as { cause?: { code?: string } })?.cause?.code;
  return code === "23505";
}

export default async function authRoutes(app: FastifyInstance): Promise<void> {
  app.post<{ Body: SignupBody }>("/auth/signup", async (request, reply) => {
    const body = request.body ?? ({} as SignupBody);
    const subdomain = body.subdomain?.trim().toLowerCase();
    const tenantName = body.tenantName?.trim();
    const email = body.email?.trim().toLowerCase();
    const password = body.password;
    const fullName = body.fullName?.trim() || null;

    if (!subdomain) {
      await reply.code(400).send({ error: "subdomain_required" });
      return;
    }
    if (!tenantName) {
      await reply.code(400).send({ error: "tenant_name_required" });
      return;
    }
    if (!email) {
      await reply.code(400).send({ error: "email_required" });
      return;
    }
    if (!password) {
      await reply.code(400).send({ error: "password_required" });
      return;
    }
    if (!SUBDOMAIN_FORMAT.test(subdomain)) {
      await reply.code(400).send({ error: "subdomain_invalid_format" });
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      await reply.code(400).send({ error: "password_too_short", minLength: MIN_PASSWORD_LENGTH });
      return;
    }

    // Generated up front, same as provisionTenant(): the tenant's own id is
    // needed to SET LOCAL app.current_tenant_id before the tenants row (whose
    // own RLS policy is keyed on that same setting) can be inserted.
    const tenantId = randomUUID();
    const passwordHash = await hashPassword(password);

    try {
      const result = await withTenantContext(tenantId, async (tx) => {
        await tx.execute(sql`
          INSERT INTO tenants (id, subdomain, name, status)
          VALUES (${tenantId}, ${subdomain}, ${tenantName}, 'active')
        `);

        // Same function test/support/provision.ts's provisionTenant() calls:
        // seeds the R2 role/permission catalogue, including builder_side_admin
        // (0004/0005 §"Role -> permission grants" — the whole catalogue,
        // audit.* and project_roles.manage included).
        await tx.execute(sql`SELECT provision_tenant_rbac_defaults(${tenantId}::uuid)`);

        const userResult = await tx.execute(sql`
          INSERT INTO users (tenant_id, email, password_hash, full_name, status)
          VALUES (${tenantId}, ${email}, ${passwordHash}, ${fullName}, 'active')
          RETURNING id, email
        `);
        const [user] = extractRows(userResult);
        const userId = user!.id as string;

        const roleResult = await tx.execute(sql`
          SELECT id FROM roles WHERE tenant_id = ${tenantId} AND key = 'builder_side_admin'
        `);
        const [role] = extractRows(roleResult);
        if (!role) {
          // Should be unreachable — provision_tenant_rbac_defaults() always
          // seeds this role — but fail loudly rather than silently grant
          // nothing if that function's seed list ever changes.
          throw new Error("provision_tenant_rbac_defaults did not seed a builder_side_admin role");
        }

        await tx.execute(sql`
          INSERT INTO user_roles (tenant_id, user_id, role_id)
          VALUES (${tenantId}, ${userId}, ${role.id})
        `);

        // 1:1 with users (03ak §4.3): the founding user is also an employee,
        // at the top of the reporting tree (no manager, no department or
        // designation assigned yet — those are set up later, same as every
        // other employee in this schema).
        const employeeResult = await tx.execute(sql`
          INSERT INTO employees (tenant_id, user_id)
          VALUES (${tenantId}, ${userId})
          RETURNING id
        `);
        const [employee] = extractRows(employeeResult);
        const employeeId = employee!.id as string;

        const actorLabel = fullName ?? (user!.email as string);
        await recordAuditEvent(tx, {
          tenantId,
          actorUserId: userId,
          actorLabel,
          eventType: "tenant.signed_up",
          eventCategory: "auth",
          subjectType: "tenant",
          subjectId: tenantId,
          afterState: { subdomain, tenantName, userId, employeeId },
        });

        return {
          tenant: { id: tenantId, subdomain, name: tenantName },
          user: { id: userId, email: user!.email as string },
          employee: { id: employeeId },
        };
      });

      await reply.code(201).send(result);
    } catch (err) {
      if (isUniqueViolation(err)) {
        // tenants_subdomain_key (0000 §1): another tenant already owns this
        // subdomain. Never let a signup silently attach itself to, or take
        // over, an existing tenant's namespace.
        await reply.code(409).send({ error: "subdomain_taken" });
        return;
      }
      request.log.error(err, "failed to sign up tenant");
      await reply.code(400).send({ error: "signup_failed", detail: (err as Error).message });
    }
  });
}
