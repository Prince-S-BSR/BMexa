import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { AppShell } from "@/components/shell/app-shell";
import { geistSans, geistMono } from "@/lib/fonts";
import { hasSession } from "@/lib/session";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import "../globals.css";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

// Root layout for the signed-in app (route group: doesn't affect the URL —
// see node_modules/next/dist/docs/01-app/.../route-groups.md). Split out
// from app/(auth)/layout.tsx so logged-out auth pages don't render the main
// nav/tenant-switcher chrome (Beads issue Final-Verison-b1r, step 4/5).
//
// Real auth gate (Beads issue Final-Verison-224, step 5/5): every (app)
// route previously rendered regardless of session state — only the header's
// logout/login link changed (see the old AppShell comment this step
// removes). This is a fast, no-network, whole-page-load check (redirect
// before AppShell's chrome even starts rendering). It is deliberately NOT
// the only gate: node_modules/next/dist/docs/01-app/02-guides/
// authentication.md ("Layouts and auth checks") warns a layout does not
// control whether the rest of the route renders on a client-side
// transition, so every protected page additionally calls
// lib/session.ts's requireSession() itself, close to the data it fetches —
// see that function's comment for the full reasoning.
export default async function AppRootLayout({ children }: { children: ReactNode }) {
  if (!(await hasSession())) {
    redirect("/login");
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
