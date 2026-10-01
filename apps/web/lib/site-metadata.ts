// apps/web/lib/site-metadata.ts
//
// Metadata/viewport shared across this app's multiple root layouts (see
// lib/fonts.ts's header comment for why there's more than one root layout).
// Both app/(app)/layout.tsx and app/(auth)/layout.tsx re-export these under
// the `metadata`/`viewport` names Next.js looks for, so the two root
// layouts don't drift out of sync with each other.

import type { Metadata, Viewport } from "next";

export const siteMetadata: Metadata = {
  title: { default: "BMexa", template: "%s · BMexa" },
  description: "Sales execution system of record for real-estate builders and channel partners.",
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f2" },
    { media: "(prefers-color-scheme: dark)", color: "#131412" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
