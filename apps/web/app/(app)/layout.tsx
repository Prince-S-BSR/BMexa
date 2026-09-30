import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { AppShell } from "@/components/shell/app-shell";
import { geistSans, geistMono } from "@/lib/fonts";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import "../globals.css";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

// Root layout for the signed-in app (route group: doesn't affect the URL —
// see node_modules/next/dist/docs/01-app/.../route-groups.md). Split out
// from app/(auth)/layout.tsx so logged-out auth pages don't render the main
// nav/tenant-switcher chrome (Beads issue Final-Verison-b1r, step 4/5).
export default function AppRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
