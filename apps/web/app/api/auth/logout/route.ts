// apps/web/app/api/auth/logout/route.ts
//
// Route Handler that clears the httpOnly session cookie (Beads issue
// Final-Verison-a98, step 3/5). Does not call apps/api to revoke the
// underlying `sessions` row — apps/api has no `/auth/logout` endpoint yet
// (out of scope for this step: this is apps/web only, calling the API that
// already exists). Clearing the cookie is enough for this client to stop
// sending the token; the session row itself remains valid server-side until
// it naturally expires. Flagging this for a later step in case
// server-side revocation-on-logout turns out to matter.

import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/session";

export async function POST() {
  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}
