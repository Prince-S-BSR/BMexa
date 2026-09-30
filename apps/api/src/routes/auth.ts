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
// Login (Beads issue Final-Verison-x0l), added below `/auth/signup`: verifies
// credentials and mints a real `sessions` row.
//
// TENANT RESOLUTION PROBLEM: a login request can't know its tenant the way
// every other authenticated route does (session-context.ts resolves it from
// the token; product routes get it from sessionContext) — the credentials
// being checked are themselves what would normally get us there. This is
// the exact chicken-and-egg case session-context.ts's own header comment
// already names for session-token lookup (and, upstream of that, the one
// 0000_phase0_foundation.sql's comment above the `tenants` RLS policy names
// for subdomain routing, architecture note §4.2 / Q10): `tenants` and
// `users` are both RLS-protected on `tenant_id = app_current_tenant_id()`,
// but no tenant context can be SET LOCAL before the tenant is known.
//
// Resolution taken: the login body carries `subdomain` alongside
// email/password (the same field signup already requires), and
// `resolve_tenant_by_subdomain()` (packages/db/drizzle/
// 0006_tenant_subdomain_lookup_function.sql) — a narrowly-scoped SECURITY
// DEFINER function returning only (id, status), same shape as
// resolve_session_context() — resolves it to a tenantId before
// withTenantContext() can be used at all. The alternative (a global,
// cross-tenant index on `users.email`) was rejected: `users_tenant_email_key`
// is `UNIQUE (tenant_id, lower(email))`, not globally unique (0000
// §"Email is unique WITHIN a tenant, not globally" — users are strictly
// single-tenant per architecture note Q16), so a global email lookup would
// either require a second, differently-scoped index carrying its own
// cross-tenant leak surface, or would silently pick an arbitrary tenant when
// the same email string happens to exist in more than one. Requiring the
// subdomain is also what the frontend's own subdomain-based routing
// (architecture note §4) already assumes by the time a login form can be
// shown at all.
//
// Not enumerable: an unknown subdomain, an unknown email within a resolved
// tenant, and a wrong password for a real user all produce the exact same
// 401 { error: "invalid_credentials" }. A dummy argon2 verify runs on every
// rejection path that would otherwise skip the real hash comparison, so the
// three cases stay close in timing as well (OWASP's standard mitigation for
// this class of side channel).

import type { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { sql } from "drizzle-orm";
import { db, withTenantContext } from "@crm/db";
import { extractRows } from "../lib/rows.js";
import { hashPassword, verifyPassword } from "../lib/password.js";
import { generateSessionToken, hashSessionToken } from "../lib/session-token.js";
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

interface LoginBody {
  subdomain?: string;
  email?: string;
  password?: string;
}

// [JUDGMENT] `users.failed_login_count` / `users.locked_until` (0000
// §4 "USERS, MFA AND SESSIONS") exist already but nothing writes to them yet
// — login is their only plausible caller, so wiring basic lockout in here
// (rather than leaving two provisioned-but-dead columns) is in scope for
// this endpoint. Thresholds are a product-level floor, not a schema
// constraint or a spec-mandated number (grepped the architecture note and
// the master spec; neither names one) — 5 consecutive failures, 15-minute
// lockout, both easy to retune later without a schema or API-shape change.
const MAX_FAILED_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION_MINUTES = 15;

// Precomputed once (top-level await; this module is ESM) so every rejection
// path — unknown subdomain, unknown email, locked account, wrong password —
// pays the same argon2.verify() cost as a real credential check. Without
// this, an unknown-subdomain or unknown-email request would return in a
// fraction of the time a real password check takes, which is itself an
// account-enumeration side channel even though the response body is
// identical. The password hashed here secures nothing; only its shape (a
// real argon2id hash) matters.
const DUMMY_PASSWORD_HASH = await hashPassword("dummy-password-for-timing-parity-only");

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

  app.post<{ Body: LoginBody }>("/auth/login", async (request, reply) => {
    const body = request.body ?? ({} as LoginBody);
    const subdomain = body.subdomain?.trim().toLowerCase();
    const email = body.email?.trim().toLowerCase();
    const password = body.password;

    if (!subdomain) {
      await reply.code(400).send({ error: "subdomain_required" });
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

    try {
      // Step 1: resolve the tenant from the subdomain, outside any tenant
      // context (see the file header — this is the same SECURITY DEFINER
      // pattern resolve_session_context() already uses for the token-lookup
      // version of this problem).
      const tenantResult = await db.execute(
        sql`SELECT id, status FROM resolve_tenant_by_subdomain(${subdomain})`,
      );
      const [tenantRow] = extractRows(tenantResult);

      if (!tenantRow || tenantRow.status !== "active") {
        // Unknown subdomain, or a tenant that exists but is suspended/
        // cancelled: same rejection as a wrong password, and same dummy
        // verify so it costs the same time. Never let subdomain existence
        // leak through response shape or latency either.
        await verifyPassword(DUMMY_PASSWORD_HASH, password);
        await reply.code(401).send({ error: "invalid_credentials" });
        return;
      }

      const tenantId = tenantRow.id as string;

      // Step 2: everything else runs inside the now-known tenant's RLS
      // context, exactly like every other route in this codebase.
      const outcome = await withTenantContext(tenantId, async (tx) => {
        const userResult = await tx.execute(sql`
          SELECT id, email, password_hash, status, failed_login_count, locked_until
          FROM users
          WHERE tenant_id = ${tenantId} AND lower(email) = ${email} AND deleted_at IS NULL
        `);
        const [user] = extractRows(userResult);

        if (!user || !user.password_hash) {
          // No such user in this tenant (or an SSO-provisioned user with no
          // local password, 0000 §4's comment on `password_hash` — either
          // way there is no password to check). Same dummy verify, same
          // response as a wrong password below.
          await verifyPassword(DUMMY_PASSWORD_HASH, password);
          return { outcome: "invalid_credentials" as const };
        }

        const userId = user.id as string;
        const lockedUntilRaw = user.locked_until as string | null;
        const isLocked = lockedUntilRaw !== null && new Date(lockedUntilRaw).getTime() > Date.now();

        if (isLocked) {
          // Already locked out from a prior run of failures: don't even
          // spend a real verify against this user's hash, but still pay the
          // dummy one so this path isn't measurably faster than a normal
          // wrong-password rejection.
          await verifyPassword(DUMMY_PASSWORD_HASH, password);
          return { outcome: "account_locked" as const, lockedUntil: lockedUntilRaw };
        }

        const passwordValid = await verifyPassword(user.password_hash as string, password);

        if (!passwordValid) {
          // A lock that has already expired resets the streak before
          // counting this failure, so `locked_until` only ever reflects
          // consecutive *recent* failures, not a lifetime total.
          const priorFailedCount = lockedUntilRaw !== null ? 0 : (user.failed_login_count as number);
          const newFailedCount = priorFailedCount + 1;

          if (newFailedCount >= MAX_FAILED_LOGIN_ATTEMPTS) {
            const lockRows = extractRows(
              await tx.execute(sql`
                UPDATE users
                SET failed_login_count = ${newFailedCount},
                    locked_until = now() + make_interval(mins => ${LOCKOUT_DURATION_MINUTES})
                WHERE tenant_id = ${tenantId} AND id = ${userId}
                RETURNING locked_until
              `),
            );
            return { outcome: "account_locked" as const, lockedUntil: lockRows[0]!.locked_until as string };
          }

          await tx.execute(sql`
            UPDATE users SET failed_login_count = ${newFailedCount}
            WHERE tenant_id = ${tenantId} AND id = ${userId}
          `);
          return { outcome: "invalid_credentials" as const };
        }

        if (user.status !== "active") {
          // Correct password, but the account is invited/suspended/
          // deactivated. Same rejection as a wrong password — whether the
          // account exists and is merely disabled is not something a login
          // attempt should reveal either. Not counted as a failed attempt:
          // the credential itself was right.
          return { outcome: "invalid_credentials" as const };
        }

        // Success: clear any lockout state, stamp last_login_at, and mint a
        // real session the same way seed-session.ts's test-only helper
        // already does (generateSessionToken/hashSessionToken from
        // lib/session-token.ts — only the hash is ever persisted).
        await tx.execute(sql`
          UPDATE users
          SET failed_login_count = 0, locked_until = NULL, last_login_at = now()
          WHERE tenant_id = ${tenantId} AND id = ${userId}
        `);

        const token = generateSessionToken();
        const tokenHash = hashSessionToken(token);
        const sessionId = randomUUID();

        const sessionResult = await tx.execute(sql`
          INSERT INTO sessions (id, tenant_id, user_id, token_hash, scope, mfa_satisfied)
          VALUES (${sessionId}, ${tenantId}, ${userId}, ${tokenHash}, 'full', true)
          RETURNING id, expires_at
        `);
        const [session] = extractRows(sessionResult);

        await recordAuditEvent(tx, {
          tenantId,
          actorUserId: userId,
          actorLabel: (user.email as string),
          eventType: "user.logged_in",
          eventCategory: "auth",
          subjectType: "user",
          subjectId: userId,
        });

        return {
          outcome: "success" as const,
          token,
          user: { id: userId, email: user.email as string },
          session: { id: session!.id as string, expiresAt: session!.expires_at as string },
        };
      });

      if (outcome.outcome === "invalid_credentials") {
        await reply.code(401).send({ error: "invalid_credentials" });
        return;
      }
      if (outcome.outcome === "account_locked") {
        await reply.code(423).send({ error: "account_locked", lockedUntil: outcome.lockedUntil });
        return;
      }

      await reply.code(200).send({
        token: outcome.token,
        tenant: { id: tenantId, subdomain },
        user: outcome.user,
        expiresAt: outcome.session.expiresAt,
      });
    } catch (err) {
      request.log.error(err, "failed to log in");
      await reply.code(500).send({ error: "login_failed" });
    }
  });
}
