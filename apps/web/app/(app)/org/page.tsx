import { redirect } from "next/navigation";
import { requireSession } from "@/lib/session";

export default async function OrgIndexPage() {
  // Auth gate (Beads issue Final-Verison-224, step 5/5). There is no more
  // `?tenant=` to preserve on the redirect — real Org data is scoped to the
  // session's own tenant, not a fixture browsed by id (see lib/org-api.ts's
  // file header).
  await requireSession();
  redirect("/org/employees");
}
