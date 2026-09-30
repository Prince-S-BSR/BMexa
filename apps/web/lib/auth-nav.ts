// apps/web/lib/auth-nav.ts
//
// Where a signed-in visitor lands / where a signed-out one is sent.
// DEFAULT_APP_PATH matches the app's own existing default (app/(app)/page.tsx
// — the "/" route — already redirects here), so a logged-in user hitting
// /login or /signup ends up wherever "/" would already take them, rather
// than this step inventing a separate landing route.

export const DEFAULT_APP_PATH = "/leads";
export const LOGIN_PATH = "/login";
