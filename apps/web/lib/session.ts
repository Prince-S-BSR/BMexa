// apps/web/lib/session.ts
//
// Auth session cookie handling for apps/web (Beads issue Final-Verison-a98,
// step 3/5). apps/api's session auth is a bare opaque bearer token checked
// against the `sessions` table (session-context.ts) — no JWT, no
// refresh-token flow — so the cookie's value IS that token, nothing more.
//
// Reads/writes go through next/headers' `cookies()`, which can only WRITE
// (`.set`/`.delete`) from a Route Handler or Server Action, and can be READ
// from a Server Component. That split is why setSessionCookie/
// clearSessionCookie are only ever called from this step's Route Handlers
// (app/api/auth/*/route.ts) while getSessionToken/hasSession are meant for
// Server Components too.
//
// The cookie is httpOnly and never readable by client-side JS. Nothing in
// this module (or anywhere in this step) puts the token in localStorage, a
// non-httpOnly cookie, or a JSON response body — a Route Handler reply only
// ever echoes back non-secret fields (tenant/user), never `token`.

import { cookies } from "next/headers";

export const SESSION_COOKIE_NAME = "bmexa_session";

/**
 * Sets the session cookie after a successful login (or a signup that chains
 * into a login — see app/api/auth/signup/route.ts). `expiresAt` is the
 * session's own absolute expiry as returned by apps/api's /auth/login
 * (`sessions.expires_at`), so the cookie's lifetime always matches the real
 * session's lifetime exactly — no separately-tracked maxAge to drift out of
 * sync with the backend.
 */
export async function setSessionCookie(token: string, expiresAt: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(expiresAt),
  });
}

/** Logout: clears the cookie. Does not call apps/api to revoke the session row. */
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

/**
 * Reads the raw bearer token out of the cookie, for a Server Component or
 * Route Handler to attach to an authenticated apps/api call (via
 * `apiFetch(path, { token })`). Returns null if there is no cookie.
 */
export async function getSessionToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value ?? null;
}

/**
 * "Is there a session cookie at all" — a lightweight, no-network check.
 *
 * DECISION: this layer deliberately does NOT verify the token against
 * apps/api on every call. Reasoning:
 *   - Every real read of protected data already calls apps/api with the
 *     token attached, and apps/api is the sole source of truth for whether
 *     a session is still valid (not revoked, not expired, correct scope —
 *     session-context.ts). That call will 401 on a stale/invalid token
 *     regardless of what this helper says, so backend-verifying here too
 *     would just be the same check paid for twice.
 *   - This helper exists for cheap, frequent, non-security-critical
 *     decisions a Server Component makes on every render — e.g. "show the
 *     signed-in nav or the signed-out one", "redirect /  to /login vs
 *     /pipeline" — where a false positive (stale cookie treated as
 *     "logged in") costs nothing worse than one extra page render before
 *     the first real API call 401s and the caller clears the cookie; a
 *     network round trip to apps/api on every single Server Component
 *     render, including ones that touch no protected data, would add real
 *     latency and load for no corresponding security benefit (the cookie
 *     is httpOnly, so client JS can't forge or read it either way).
 *   - Callers that need an actual verified session (anything that reads or
 *     writes tenant data) get that verification for free by calling
 *     apps/api with the token and handling a 401 as "not logged in" —
 *     this module doesn't need a second code path for that; it's just
 *     ordinary error handling on the real request.
 */
export async function hasSession(): Promise<boolean> {
  return (await getSessionToken()) !== null;
}
