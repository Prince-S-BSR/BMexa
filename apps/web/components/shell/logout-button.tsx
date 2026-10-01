"use client";

// components/shell/logout-button.tsx
//
// Minimal logout control for app-shell.tsx (Beads issue Final-Verison-b1r,
// step 4/5 — the shell had no way to log out before this). Posts to this
// app's own app/api/auth/logout/route.ts, which clears the httpOnly session
// cookie (lib/session.ts), then sends the browser to /login. `router.refresh()`
// isn't enough on its own here since the destination is a different route
// entirely, so this uses a full navigation via router.push + refresh to make
// sure every Server Component re-reads the (now absent) session.

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function onLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      router.push("/login");
      router.refresh();
    }
  }

  return (
    <button
      type="button"
      onClick={onLogout}
      disabled={loggingOut}
      className="inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-fg-2 hover:bg-surface-2 hover:text-fg disabled:cursor-not-allowed disabled:opacity-50"
    >
      <LogOut aria-hidden="true" className="size-4" />
      <span className="hidden sm:inline">Log out</span>
    </button>
  );
}
