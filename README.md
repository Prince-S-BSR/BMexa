# BMexa — Waitlist Landing Page

A single-page, high-converting waitlist site for BMexa (by BSR Labs). Static
HTML/CSS/JS — no build step, no framework, deploys anywhere.

**Palette (official brand values, sampled from the BMexa logo):**

| Role | Hex | Usage |
| --- | --- | --- |
| Deep Emerald | `#0A3121` | Page background |
| Golden Amber | `#E2981F` | CTAs, highlights, glow |
| Pristine White | `#FFFFFF` | Typography |

The brand gradient (`linear-gradient(135deg, #0A3121 0%, #E2981F 100%)`) is
used as a small accent — the top brand bar and the logo wordmark — rather
than as a full-page background, so body copy stays readable against a
consistent dark base. All three tokens live as CSS custom properties
(`--emerald-900`, `--amber`, `--white`, `--brand-gradient`) at the top of
`css/styles.css`.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or open `index.html` directly in a browser — it has no server dependencies.

## Structure

```
index.html               Page markup (hero, problem, 3 pillars, philosophy, final CTA, footer)
css/styles.css           All styling, color tokens at the top of the file
js/main.js               Form validation/submission + scroll-reveal animation
assets/logo-icon.png     Header logo tile, cropped from the brand mark artwork
assets/favicon.png       Browser-tab icon (same mark, smaller)
assets/social-preview.jpg  Link-preview image (Open Graph / Twitter card)
```

## Wiring up email capture

Both "Join VIP Waitlist" and "Request Early Access" forms share one handler in
`js/main.js`. By default (no endpoint configured) submissions are saved to
the visitor's `localStorage` under the key `bmexa_waitlist` so you can demo
the flow before a backend exists — **no emails leave the browser until you
configure an endpoint.**

To start actually collecting emails, set `WAITLIST_ENDPOINT` at the top of
`js/main.js` to any endpoint that accepts a JSON POST of `{ email, source }`:

- **Formspree** — create a form at formspree.io, use its endpoint URL.
- **Mailchimp** — use a Mailchimp embedded-form action URL, or a small
  serverless function that calls the Mailchimp API (recommended, since
  Mailchimp's native form action expects `multipart/form-data`, not JSON).
- **Google Sheets** — deploy a Google Apps Script web app that appends rows
  to a sheet, and point `WAITLIST_ENDPOINT` at its `/exec` URL.

## Deploying

Any static host works — no build step required:

- **GitHub Pages:** enable Pages on this repo, serve from the root of the
  main branch.
- **Netlify / Vercel:** import the repo, leave build command empty, publish
  directory `/`.

Once live, put the URL in the Instagram bio.

## Customizing

- **Colors:** edit the CSS custom properties at the top of `css/styles.css`
  (`--emerald-*`, `--amber*`, `--white*`).
- **Logo:** `assets/logo-icon.png` is a rounded-square tile cropped from the
  official BMexa mark artwork, used in the header (`.logo-icon`) and as the
  favicon/apple-touch-icon. To swap in an updated mark, replace that file
  (and `assets/favicon.png`, `assets/social-preview.jpg`) — no HTML/CSS
  changes needed as long as the new files keep the same names.
- **Copy:** all section copy lives directly in `index.html`.
