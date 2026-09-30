"use client";

// components/auth/login-form.tsx
//
// Client-side form for app/(auth)/login/page.tsx. Posts to this app's own
// same-origin Route Handler (app/api/auth/login/route.ts) rather than
// calling apps/api directly — that handler is what sets the httpOnly
// session cookie (lib/session.ts), which client-side JS must never touch
// itself. On success the cookie is already set by the response's Set-Cookie
// header by the time this runs, so a plain redirect is enough — no token
// handling here.

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginErrorMessage } from "@/lib/auth-errors";
import { DEFAULT_APP_PATH } from "@/lib/auth-nav";

const inputCls =
  "h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm hover:border-border-strong focus:border-accent";
const labelCls = "text-xs font-medium text-fg-2";

export function LoginForm() {
  const router = useRouter();
  const [subdomain, setSubdomain] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subdomain, email, password }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(loginErrorMessage(body));
        setSubmitting(false);
        return;
      }
      router.push(DEFAULT_APP_PATH);
      router.refresh();
    } catch {
      setError("Couldn't reach the server. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className={labelCls}>Workspace</span>
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
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        {submitting ? "Logging in…" : "Log in"}
      </button>
    </form>
  );
}
