# @crm/db

Drizzle ORM + Postgres wiring for the CRM monorepo.

## Layout

- `drizzle/0000_phase0_foundation.sql` — copied verbatim from
  `docs/architecture/schema-phase-0.sql` (the canonical, already-verified
  source; see that file and `docs/architecture/00-phase-0-architecture-note.md`).
  This is **not** hand-translated into Drizzle's schema DSL because the file
  has hand-written RLS policies, generated columns, and triggers that the DSL
  cannot express faithfully — copying avoids introducing drift.
- `drizzle/meta/_journal.json` — hand-written (not `drizzle-kit generate`-d)
  so `drizzle-kit` tooling recognizes the copied file as migration `0000`.
  `breakpoints` is `false` because the copied SQL has no
  `--> statement-breakpoint` markers inserted (deliberately, to keep it
  byte-for-byte identical to the canonical file).
- `drizzle/0001_session_lookup_function.sql` — hand-written (Phase 0 gate).
- `drizzle/0002_phase1_keys.sql`, `drizzle/0003_phase1_org_users_audit_gate.sql`
  — **generated** by `drizzle-kit generate` from `schema.ts` (Phase 1:
  organization/users tables, per-project role grants, audit_events extensions).
- `drizzle/0004_phase1_rls_force_triggers_seed_grants.sql` — created with
  `drizzle-kit generate --custom`; holds only what the Drizzle DSL cannot
  express (FORCE RLS, partition RLS, triggers, provisioning functions,
  backfill, `crm_app` grants). Must run as a superuser/BYPASSRLS migration
  role — its backfill refuses to run otherwise.
- `drizzle/meta/0001_snapshot.json` — the **diff baseline**: the Phase 0
  portion of `schema.ts`, generated once into a throwaway folder and committed
  as migration 0001's snapshot, so drizzle-kit emits only deltas and never
  re-CREATEs a Phase 0 table.
- `schema.ts` — Drizzle table definitions. Phase 0 tables are typed where
  Phase 1 references them (`tenants`, `users`, `roles`, `permissions`,
  `role_permissions`, `user_roles`, `audit_events`), with constraint names
  matching the live database; Phase 1 tables are defined in full. Design
  record: `docs/architecture/03ak-phase1-organization-users-and-audit-completeness-gate-data-model.md`.

## Generating a migration

1. Edit `schema.ts`, then `npm run db:generate -- --name <what_changed>`.
2. **If the change adds a UNIQUE constraint to an existing table AND a foreign
   key that references it**, generate twice: first with only the UNIQUE (and
   any new column it covers), then with the rest. drizzle-kit 0.30 emits FKs on
   altered tables before UNIQUE constraints on altered tables, so a single run
   produces SQL that fails to apply. Never hand-reorder generated SQL.
3. Anything the DSL cannot express (FORCE RLS, triggers, functions, grants,
   data backfills) goes in `npm run db:generate -- --custom --name <name>`.
4. Every new table: declare the `tenant_isolation` policy in `schema.ts` (it
   generates ENABLE RLS + CREATE POLICY) **and** add `FORCE ROW LEVEL
   SECURITY` in a custom migration. `apps/api/test/schema-conformance.test.ts`
   fails CI if either is missing.
5. Apply with `psql -v ON_ERROR_STOP=1 -f <file>` as the migration role, in
   journal order, and re-run `npm run db:generate` to confirm "No schema
   changes".
- `client.ts` — the Drizzle client and the `withTenantContext()` helper that
  implements the `SET LOCAL app.current_tenant_id` pattern from the
  architecture note §3.3. Not called from any route yet (Phase 0 has none).

## Verifying the migration applies

In this sandbox, the migration was verified directly with `psql` against a
throwaway local database (see the Phase 0 scaffolding task notes / PR
description for the exact commands and output), per the schema file's own
verification table (`00-phase-0-architecture-note.md` §12). `drizzle-kit`
config (`drizzle.config.ts`) is wired for future incremental migrations via
`npm run db:generate` / `db:migrate`, but the initial migration's correctness
was checked against raw Postgres rather than through the drizzle-kit runner,
since it is a straight copy of an already-verified file rather than
drizzle-kit-generated output.

## Environment

Requires `DATABASE_URL` (see `.env.example` at the repo root).
