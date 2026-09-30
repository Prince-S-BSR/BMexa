// apps/web/lib/api-client.ts
//
// Thin server-side API client for the real apps/api backend (Beads issue
// Final-Verison-a98, step 3/5). This module is the ONLY place in apps/web
// that knows the backend's base URL and request/response shapes — Route
// Handlers, Server Components and Server Actions call through it rather
// than calling `fetch` against apps/api directly.
//
// Server-side only. It never touches cookies or browser storage itself
// (that's lib/session.ts) and it never runs in a Client Component: nothing
// here is marked "use client", it is only ever imported from Route Handlers
// and Server Components, and API_BASE_URL is deliberately NOT prefixed
// NEXT_PUBLIC_, so it would be undefined if a client bundle ever pulled it
// in. A bearer token is only ever attached because a caller passed one in
// explicitly (see `token` on ApiRequestInit) — this module never reads it
// from a cookie itself.
//
// Shapes below are copied from apps/api/src/routes/auth.ts's actual request
// bodies and reply payloads (both routes tested, 207 passing tests total as
// of step 2) — not invented. If auth.ts's shapes change, update here too.

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:4000";

/** Every error apps/api's auth routes reply with is `{ error: "<code>", ... }`. */
export interface ApiErrorBody {
  error: string;
  [key: string]: unknown;
}

/**
 * Thrown for any non-2xx response. Carries the HTTP status and the parsed
 * error body verbatim so callers (Route Handlers today; Server Components/
 * Actions in later steps) can branch on `body.error` (e.g. "invalid_credentials",
 * "account_locked", "subdomain_taken") instead of re-parsing a message string.
 */
export class ApiClientError extends Error {
  readonly status: number;
  readonly body: ApiErrorBody;

  constructor(status: number, body: ApiErrorBody) {
    super(typeof body.error === "string" ? body.error : `request_failed_${status}`);
    this.name = "ApiClientError";
    this.status = status;
    this.body = body;
  }
}

interface ApiRequestInit extends Omit<RequestInit, "body"> {
  /** JSON-serializable request body. */
  body?: unknown;
  /**
   * Bearer token to attach as `Authorization: Bearer <token>`, exactly what
   * apps/api/src/middleware/session-context.ts expects. Callers pass this
   * in explicitly (e.g. from lib/session.ts's getSessionToken()) — this
   * module does not look tokens up itself.
   */
  token?: string;
}

/**
 * Base fetch wrapper: JSON in, JSON out, real network calls against
 * apps/api. Every typed helper below (signup, login) is built on this, and
 * later steps can call it directly (e.g. `apiFetch("/employees", { token })`)
 * for endpoints this step doesn't need to wrap yet.
 */
export async function apiFetch<T>(path: string, init: ApiRequestInit = {}): Promise<T> {
  const { token, body, headers, ...rest } = init;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    // Auth calls (and anything bearer-authenticated) must never be cached —
    // Route Handlers are uncached by default for non-GET methods anyway,
    // but this keeps the client's own behavior explicit and correct if a
    // future GET helper is added here.
    cache: "no-store",
  });

  const raw = await res.text();
  const parsed: unknown = raw ? JSON.parse(raw) : {};

  if (!res.ok) {
    throw new ApiClientError(res.status, parsed as ApiErrorBody);
  }

  return parsed as T;
}

// --- /auth/signup ---------------------------------------------------------

export interface SignupInput {
  subdomain: string;
  tenantName: string;
  email: string;
  password: string;
  fullName?: string;
}

export interface SignupResult {
  tenant: { id: string; subdomain: string; name: string };
  user: { id: string; email: string };
  employee: { id: string };
}

/**
 * Calls the real `POST /auth/signup`. Note: per auth.ts, signup creates the
 * tenant + founding user but does NOT mint a session — there is no token in
 * this response. Callers that want the founding user logged in afterward
 * (the signup Route Handler does) must call `login()` separately with the
 * same credentials.
 */
export function signup(input: SignupInput): Promise<SignupResult> {
  return apiFetch<SignupResult>("/auth/signup", { method: "POST", body: input });
}

// --- /auth/login ------------------------------------------------------------

export interface LoginInput {
  subdomain: string;
  email: string;
  password: string;
}

export interface LoginResult {
  token: string;
  tenant: { id: string; subdomain: string };
  user: { id: string; email: string };
  expiresAt: string;
}

/**
 * Calls the real `POST /auth/login`. On success, `token` is the raw bearer
 * token (apps/api only ever persists its hash) — callers must not return it
 * to the browser in a JSON body; it belongs in the httpOnly cookie
 * lib/session.ts sets, nowhere else.
 */
export function login(input: LoginInput): Promise<LoginResult> {
  return apiFetch<LoginResult>("/auth/login", { method: "POST", body: input });
}
