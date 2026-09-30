import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { geistSans, geistMono } from "@/lib/fonts";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import "../globals.css";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

// Root layout for logged-out auth pages (/login, /signup). Deliberately does
// NOT render AppShell — there's no session yet, so no main nav or
// tenant-switcher to show (Beads issue Final-Verison-b1r, step 4/5). See
// app/(app)/layout.tsx for the signed-in app's root layout; both share
// lib/fonts.ts and lib/site-metadata.ts so they don't drift apart.
export default function AuthRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-bg px-4 py-10">
          <span className="flex items-center gap-2" translate="no">
            <span aria-hidden="true" className="grid size-8 place-items-center rounded-md bg-accent text-accent-fg">
              <span className="text-xs font-bold tracking-wide">BM</span>
            </span>
            <span className="text-base font-semibold tracking-tight">BMexa</span>
          </span>
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </body>
    </html>
  );
}
