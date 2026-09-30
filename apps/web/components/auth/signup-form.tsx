"use client";

// components/auth/signup-form.tsx
//
// Client-side form for app/(auth)/signup/page.tsx. Posts to this app's own
// same-origin Route Handler (app/api/auth/signup/route.ts), which chains a
// login() after a successful signup and reports whether that chained login
// actually established a session via `sessionEstablished: boolean` (see
// that route's header comment — should be unreachable in practice, but the
// handler doesn't assume it). This form honors both outcomes explicitly:
// sessionEstablished === true -> the cookie is already set, go straight
// into the app; sessionEstablished === false -> the tenant/user were still
// created, but there's no session cookie, so send them to /login instead of
// pretending they're signed in.

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupErrorMessage, type AuthErrorBody } from "@/lib/auth-errors";
import { DEFAULT_APP_PATH, LOGIN_PATH } from "@/lib/auth-nav";

const inputCls =
  "h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm hover:border-border-strong focus:border-accent";
const labelCls = "text-xs font-medium text-fg-2";

interface SignupResponse extends AuthErrorBody {
  sessionEstablished?: boolean;
}

export function SignupForm() {
  const router = useRouter();
  const [subdomain, setSubdomain] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subdomain,
          tenantName,
          email,
          password,
          fullName: fullName || undefined,
        }),
      });
      const body = (await res.json().catch(() => ({}))) as SignupResponse;
      if (!res.ok) {
        setError(signupErrorMessage(body));
        setSubmitting(false);
        return;
      }

      if (body.sessionEstablished) {
        router.push(DEFAULT_APP_PATH);
        router.refresh();
      } else {
        // Tenant + user were created, but the chained login didn't produce a
        // session cookie — send them to log in explicitly rather than
        // showing them a signed-in app with no session.
        router.push(`${LOGIN_PATH}?notice=account_created`);
      }
    } catch {
      setError("Couldn't reach the server. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className={labelCls}>Workspace URL</span>
        <input
          name="subdomain"
          type="text"
          autoComplete="organization"
          required
          value={subdomain}
          onChange={(e) => setSubdomain(e.target.value)}
          placeholder="acme"
          className={inputCls}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className={labelCls}>Company name</span>
        <input
          name="tenantName"
          type="text"
          autoComplete="organization"
          required
          value={tenantName}
          onChange={(e) => setTenantName(e.target.value)}
          className={inputCls}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className={labelCls}>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputCls}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className={labelCls}>Password</span>
        <input
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputCls}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className={labelCls}>Full name (optional)</span>
        <input
          name="fullName"
          type="text"
          autoComplete="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={inputCls}
        />
      </label>

      {error && (
        <p role="alert" className="text-sm text-danger">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="h-10 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? "Creating account…" : "Create workspace"}
      </button>
    </form>
  );
}
