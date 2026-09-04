// packages/db/client.ts
//
// Drizzle client + the RLS tenant-context helper described in
// docs/architecture/00-phase-0-architecture-note.md §3.3 ("How RLS is
// actually enforced per request").
//
// Not wired into any route yet — Phase 0 has no feature routes to call it
// from (apps/api exposes only GET /health). This file exists so the pattern
// is settled before Phase 1 builds the real data-access layer on top of it.

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { sql } from "drizzle-orm";
import * as schema from "./schema.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL is not set. Copy .env.example to .env and configure it.",
  );
}

// [DECIDED, architecture note §3.5] The application connects as a dedicated,
// non-superuser role (`crm_app`) that does not own the tables and does not
// have BYPASSRLS. `max: 1` avoids surprises with PgBouncer transaction-mode
// pooling for this minimal client; a production data-access layer should
// tune pool size deliberately.
const queryClient = postgres(connectionString, { max: 10 });

export const db = drizzle(queryClient, { schema });

/**
 * Runs `callback` inside a transaction with the tenant context set via
 * `SET LOCAL app.current_tenant_id`, per the architecture note §3.3/§3.4.
 *
 * `SET LOCAL` (not `SET`) is load-bearing: it is scoped to this transaction
 * and reverts on commit/rollback, so the value can never leak to the next
 * request that borrows the same pooled connection. Every RLS policy in
 * schema-phase-0.sql is keyed on `app_current_tenant_id()`, which reads this
 * setting and returns NULL (matching zero rows) when it was never set —
 * fail-closed by construction.
 *
 * This helper is not called from anywhere yet (Phase 0 has no feature
 * routes). It is here so Phase 1's data-access layer has one already-correct
 * choke point to build on rather than re-deriving the pattern.
 */
export async function withTenantContext<T>(
  tenantId: string,
  callback: (tx: Parameters<Parameters<typeof db.transaction>[0]>[0]) => Promise<T>,
): Promise<T> {
  return db.transaction(async (tx) => {
    // Parameterised, not string-interpolated: SET LOCAL does not accept bind
    // parameters directly, so this uses `sql` with a literal that Postgres
    // still validates as a well-formed UUID via the ::uuid cast below.
    await tx.execute(sql`SET LOCAL app.current_tenant_id = ${tenantId}`);
    return callback(tx);
  });
}

export async function closeDbConnection(): Promise<void> {
  await queryClient.end();
}
