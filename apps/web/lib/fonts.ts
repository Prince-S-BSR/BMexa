// apps/web/lib/fonts.ts
//
// next/font instances shared across this app's multiple root layouts
// (app/(app)/layout.tsx and app/(auth)/layout.tsx — see route-groups.md's
// "multiple root layouts" pattern). next/font requires each font to be
// invoked exactly once per unique arguments; centralizing the calls here and
// importing the result into both layouts satisfies that while keeping both
// layouts using the same font variables/classes.

import { Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
