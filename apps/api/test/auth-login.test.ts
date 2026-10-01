// apps/api/test/auth-login.test.ts
//
// HTTP-level tests for the login endpoint (Beads issue Final-Verison-x0l;
// routes/auth.ts). Proves: a real, usable session is minted on success (and
// actually authenticates a subsequent request through the existing
// session-context middleware, not just that the DB row exists); wrong
// password and a nonexistent email produce the exact same 401 response as
// each other (no account-enumeration via response shape); an unknown
// subdomain is rejected the same way; and basic lockout
// (failed_login_count/locked_until, 0000_phase0_foundation.sql §4) engages
// after repeated failures and blocks even a correct password while locked.

import { randomUUID } from "node:crypto";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import type { FastifyInstance } from "fastify";
import { sql } from "drizzle-orm";
import { withTenantContext } from "@crm/db";
import { startTestApp } from "./support/app.js";
import { closeDbConnection } from "./support/provision.js";
import { deleteTenantAllowingAuditHistory } from "./support/cleanup.js";
import { extractRows } from "./support/rows.js";

function uniqueSubdomain(prefix = "lgn"): string {
  return `${prefix}${Date.now().toString(36)}${randomUUID().replace(/-/g, "").slice(0, 8)}`.toLowerCase();
}

interface SignedUpFixture {
  tenantId: string;
  subdomain: string;
  email: string;
  password: string;
}

describe("Login API (Final-Verison-x0l)", () => {
  let app: FastifyInstance;
  const createdTenantIds: string[] = [];

  beforeAll(async () => {
    app = await startTestApp();
  });

  afterAll(async () => {
    await app.close();
    for (const tenantId of createdTenantIds) {
      await deleteTenantAllowingAuditHistory(tenantId);
    }
    await closeDbConnection();
  });

  /** Signs up a fresh tenant + founding user via the real signup endpoint. */
  async function signUpFixture(prefix: string, password = "correct-horse-battery-staple"): Promise<SignedUpFixture> {
    const subdomain = uniqueSubdomain(prefix);
    const email = `founder-${subdomain}@example.test`;
    const res = await request(app.server).post("/auth/signup").send({
      subdomain,
      tenantName: "Login Test Co",
      email,
      password,
      fullName: "Founding User",
    });
    expect(res.status).toBe(201);
    const tenantId = res.body.tenant.id as string;
    createdTenantIds.push(tenantId);
    return { tenantId, subdomain, email, password };
  }

  it("logs in with correct credentials, minting a session that actually authenticates a subsequent request", async () => {
    const fixture = await signUpFixture("ok");

    const res = await request(app.server).post("/auth/login").send({
      subdomain: fixture.subdomain,
      email: fixture.email,
      password: fixture.password,
    });

    expect(res.status).toBe(200);
    expect(typeof res.body.token).toBe("string");
    expect(res.body.token.length).toBeGreaterThan(20);
    expect(res.body.user.email).toBe(fixture.email);
    expect(res.body.tenant.subdomain).toBe(fixture.subdomain);
    expect(res.body.expiresAt).toBeTruthy();

    // The minted token is a real, usable bearer token — prove it against an
    // existing protected route (same one session-context.test.ts uses),
    // not just that a sessions row exists in the DB.
    const authedRes = await request(app.server)
      .get("/_test/tenant-data/lead-stages")
      .set("Authorization", `Bearer ${res.body.token}`);
    expect(authedRes.status).toBe(200);

    // last_login_at was stamped and the lockout counters are clean.
    await withTenantContext(fixture.tenantId, async (tx) => {
      const rows = extractRows(
        await tx.execute(sql`
          SELECT last_login_at, failed_login_count, locked_until
          FROM users WHERE tenant_id = ${fixture.tenantId} AND email = ${fixture.email}
        `),
      );
      expect(rows).toHaveLength(1);
      expect(rows[0]!.last_login_at).toBeTruthy();
      expect(rows[0]!.failed_login_count).toBe(0);
      expect(rows[0]!.locked_until).toBeNull();
    });
  });

  it("rejects a wrong password with a generic error", async () => {
    const fixture = await signUpFixture("wrong");

    const res = await request(app.server).post("/auth/login").send({
      subdomain: fixture.subdomain,
      email: fixture.email,
      password: "definitely-the-wrong-password",
    });

    expect(res.status).toBe(401);
    expect(res.body.error).toBe("invalid_credentials");
    expect(res.body.token).toBeUndefined();
  });

  it("rejects a nonexistent email with the exact same status and body shape as a wrong password (no account-enumeration)", async () => {
    const fixture = await signUpFixture("enum");

    const wrongPasswordRes = await request(app.server).post("/auth/login").send({
      subdomain: fixture.subdomain,
      email: fixture.email,
      password: "definitely-the-wrong-password",
    });

    const nonexistentEmailRes = await request(app.server).post("/auth/login").send({
      subdomain: fixture.subdomain,
      email: `no-such-user-${randomUUID()}@example.test`,
      password: "whatever-password-123",
    });

    expect(nonexistentEmailRes.status).toBe(wrongPasswordRes.status);
    expect(nonexistentEmailRes.body).toEqual(wrongPasswordRes.body);
    expect(nonexistentEmailRes.status).toBe(401);
    expect(nonexistentEmailRes.body).toEqual({ error: "invalid_credentials" });
  });

  it("rejects an unknown subdomain the same way as invalid credentials", async () => {
    const res = await request(app.server).post("/auth/login").send({
      subdomain: uniqueSubdomain("nosuch"),
      email: "someone@example.test",
      password: "whatever-password-123",
    });

    expect(res.status).toBe(401);
    expect(res.body).toEqual({ error: "invalid_credentials" });
  });

  it("400s on missing required fields", async () => {
    const noSubdomain = await request(app.server).post("/auth/login").send({ email: "a@example.test", password: "x" });
    expect(noSubdomain.status).toBe(400);
    expect(noSubdomain.body.error).toBe("subdomain_required");

    const noEmail = await request(app.server).post("/auth/login").send({ subdomain: "acme", password: "x" });
    expect(noEmail.status).toBe(400);
    expect(noEmail.body.error).toBe("email_required");

    const noPassword = await request(app.server).post("/auth/login").send({ subdomain: "acme", email: "a@example.test" });
    expect(noPassword.status).toBe(400);
    expect(noPassword.body.error).toBe("password_required");
  });

  it("locks the account after repeated failed attempts and rejects even a correct password while locked", async () => {
    const fixture = await signUpFixture("lock");

    // 4 failures stay as ordinary invalid_credentials rejections.
    for (let i = 0; i < 4; i += 1) {
      const res = await request(app.server).post("/auth/login").send({
        subdomain: fixture.subdomain,
        email: fixture.email,
        password: "wrong-password",
      });
      expect(res.status).toBe(401);
      expect(res.body.error).toBe("invalid_credentials");
    }

    // The 5th failure crosses the threshold and locks the account.
    const lockingRes = await request(app.server).post("/auth/login").send({
      subdomain: fixture.subdomain,
      email: fixture.email,
      password: "wrong-password",
    });
    expect(lockingRes.status).toBe(423);
    expect(lockingRes.body.error).toBe("account_locked");
    expect(lockingRes.body.lockedUntil).toBeTruthy();

    // Even the CORRECT password is rejected while locked.
    const correctWhileLockedRes = await request(app.server).post("/auth/login").send({
      subdomain: fixture.subdomain,
      email: fixture.email,
      password: fixture.password,
    });
    expect(correctWhileLockedRes.status).toBe(423);
    expect(correctWhileLockedRes.body.error).toBe("account_locked");

    await withTenantContext(fixture.tenantId, async (tx) => {
      const rows = extractRows(
        await tx.execute(sql`
          SELECT failed_login_count, locked_until FROM users
          WHERE tenant_id = ${fixture.tenantId} AND email = ${fixture.email}
        `),
      );
      expect(rows).toHaveLength(1);
      expect(rows[0]!.failed_login_count).toBe(5);
      expect(rows[0]!.locked_until).toBeTruthy();
    });
  });
});
