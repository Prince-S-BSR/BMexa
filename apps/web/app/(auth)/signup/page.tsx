import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SignupForm } from "@/components/auth/signup-form";
import { hasSession } from "@/lib/session";
import { DEFAULT_APP_PATH } from "@/lib/auth-nav";

export const metadata: Metadata = { title: "Sign up" };

export default async function SignupPage() {
  // Already signed in — a signup form has nothing to offer them.
  if (await hasSession()) {
    redirect(DEFAULT_APP_PATH);
  }

  return (
    <div className="card flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">Create your workspace</h1>
        <p className="text-sm text-fg-2">Set up a new tenant and founding account.</p>
      </div>

      <SignupForm />

      <p className="text-center text-sm text-fg-2">
        Already have a workspace?{" "}
        <Link href="/login" className="font-medium text-accent hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
