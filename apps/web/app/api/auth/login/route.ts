// apps/web/app/api/auth/login/route.ts
//
// Route Handler wrapping apps/api's real `POST /auth/login` (Beads issue
// Final-Verison-a98, step 3/5). See app/api/auth/signup/route.ts's header
// comment for why this is a Route Handler rather than a Server Action.
//
// On success, sets the httpOnly session cookie (lib/session.ts) and returns
// only non-secret fields — the raw bearer token never appears in the JSON
// response body, only in the Set-Cookie header.
//
// On failure, forwards apps/api's own error body and status verbatim
// (401 invalid_credentials, 423 account_locked + lockedUntil, 400 for a
// missing field, ...) so the caller can branch on `body.error` without this
// layer re-encoding apps/api's error vocabulary.

import { NextResponse } from "next/server";
import { ApiClientError, login, type LoginInput } from "@/lib/api-client";
import { setSessionCookie } from "@/lib/session";

export async function POST(request: Request) {
  let body: Partial<LoginInput>;
  try {
    body = (await request.json()) as Partial<LoginInput>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { subdomain, email, password } = body;
  if (!subdomain || !email || !password) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  try {
    const result = await login({ subdomain, email, password });
    await setSessionCookie(result.token, result.expiresAt);
    return NextResponse.json({ tenant: result.tenant, user: result.user });
  } catch (err) {
    if (err instanceof ApiClientError) {
      return NextResponse.json(err.body, { status: err.status });
    }
    return NextResponse.json({ error: "login_request_failed" }, { status: 502 });
  }
}
