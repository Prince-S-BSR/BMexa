import { redirect } from "next/navigation";
import { resolveTenant } from "@/lib/crm";

export default async function OrgIndexPage(props: PageProps<"/org">) {
  const sp = await props.searchParams;
  const tenant = resolveTenant(sp.tenant);
  redirect(`/org/employees?tenant=${tenant.id}`);
}
