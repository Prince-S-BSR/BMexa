// apps/api/src/lib/rows.ts
//
// Shared row-normalisation helper for the Phase 1 product routes
// (Beads issue Final-Verison-abf). The postgres.js driver returns a bare
// array from tx.execute() in some call shapes and a `{ rows: [...] }`
// wrapper in others depending on the query — the same ambiguity already
// duplicated in middleware/require-permission.ts, middleware/require-feature.ts
// and routes/test-only.ts (each throwaway/Phase-0 file predates this shared
// copy and is left as-is). Every real product route added under
// apps/api/src/routes/ imports this one instead of duplicating it again.

export function extractRows(result: unknown): Array<Record<string, unknown>> {
  if (Array.isArray(result)) return result as Array<Record<string, unknown>>;
  if (result && typeof result === "object" && Array.isArray((result as { rows?: unknown }).rows)) {
    return (result as { rows: Array<Record<string, unknown>> }).rows;
  }
  return [];
}
