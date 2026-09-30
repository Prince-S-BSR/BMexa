// apps/web/app/api/auth/signup/route.ts
//
// Route Handler wrapping apps/api's real `POST /auth/signup` (Beads issue
// Final-Verison-a98, step 3/5). See lib/api-client.ts and lib/session.ts for
// the pieces this composes, and this step's issue for why a Route Handler
// (not a Server Action) was chosen: step 4's actual signup page doesn't
// exist yet, so this stays a plain JSON HTTP endpoint any client (a form
// posting via fetch, a test harness, a future non-browser client) can call,
// rather than binding this layer to one page's form-submission mechanism.
//
// auth.ts's /auth/signup deliberately does not mint a session — it only
// creates the tenant + founding user. This handler chains a `login()` call
// with the same credentials right after a successful signup so the caller
// experiences "sign up" as one step and ends up with the same httpOnly
// session cookie /auth/login sets. If that follow-up login fails (should be
// unreachable — a freshly created account has no lockout state or wrong
// password to fail on — but not provably impossible), the handler still
// returns the successful signup result with `sessionEstablished: false`
// rather than discarding the tenant/user that was just created; the caller
// (step 4's signup page) should treat that as "route to /login" rather than
// an error.

import { NextResponse } from "next/server";
import { ApiClientError, login, signup, type SignupInput } from "@/lib/api-client";
import { setSessionCookie } from "@/lib/session";

export async function POST(request: Request) {
  let body: Partial<SignupInput>;
  try {
    body = (await request.json()) as Partial<SignupInput>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { subdomain, tenantName, email, password, fullName } = body;
  if (!subdomain || !tenantName || !email || !password) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  try {
    const signupResult = await signup({ subdomain, tenantName, email, password, fullName });

    try {
      const loginResult = await login({ subdomain, email, password });
      await setSessionCookie(loginResult.token, loginResult.expiresAt);
      return NextResponse.json(
        { tenant: signupResult.tenant, user: signupResult.user, sessionEstablished: true },
        { status: 201 },
      );
    } catch {
      return NextResponse.json(
        { tenant: signupResult.tenant, user: signupResult.user, sessionEstablished: false },
        { status: 201 },
      );
    }
  } catch (err) {
    if (err instanceof ApiClientError) {
      return NextResponse.json(err.body, { status: err.status });
    }
    // Network failure, backend unreachable, etc. — not an apps/api response
    // at all, so there's no error code to forward.
    return NextResponse.json({ error: "signup_request_failed" }, { status: 502 });
  }
}
