import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
import { hasSession } from "@/lib/session";
import { DEFAULT_APP_PATH } from "@/lib/auth-nav";

export const metadata: Metadata = { title: "Log in" };

export default async function LoginPage(props: PageProps<"/login">) {
  // Already signed in — a login form has nothing to offer them.
  if (await hasSession()) {
    redirect(DEFAULT_APP_PATH);
  }

  const sp = await props.searchParams;
  const notice = typeof sp.notice === "string" ? sp.notice : undefined;

  return (
    <div className="card flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">Log in</h1>
        <p className="text-sm text-fg-2">Sign in to your workspace.</p>
      </div>

      {notice === "account_created" && (
        <p className="rounded-md border border-border bg-info-soft px-3 py-2 text-sm text-info-soft-fg">
          Account created. Log in to continue.
        </p>
      )}

      <LoginForm />

      <p className="text-center text-sm text-fg-2">
        Need a workspace?{" "}
        <Link href="/signup" className="font-medium text-accent hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
