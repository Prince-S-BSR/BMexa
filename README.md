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
index.html                 Page markup (hero, problem, 3 pillars, philosophy, final CTA, footer)
css/styles.css             All styling, color tokens at the top of the file
js/main.js                 Form validation/submission (Formspree) + scroll-reveal animation
assets/logo-lockup.png     Header logo (mark + wordmark, transparent background)
assets/logo-icon.png       Mark-only square crop, used for apple-touch-icon
assets/favicon.png         Browser-tab icon (mark only)
assets/footer-logo.png     Stacked mark+wordmark shown above the footer copyright line
assets/social-preview.jpg  Link-preview image (Open Graph / Twitter card)
```

## Email capture

Both "Join VIP Waitlist" and "Request Early Access" forms share one handler in
`js/main.js`, which posts to Formspree (`WAITLIST_ENDPOINT` at the top of the
file). Every submission — from either form, tagged with a `source` field so
you can tell them apart — lands in the Formspree dashboard at
[formspree.io](https://formspree.io), exportable as CSV at any time.

If `WAITLIST_ENDPOINT` is ever cleared back to `""`, the form falls back to
saving submissions in the visitor's own `localStorage` instead (useful for
local demoing, but nobody but that visitor can see them — don't ship it that
way).

To switch providers later (Mailchimp, Google Sheets, etc.), swap
`WAITLIST_ENDPOINT` and adjust the `fetch` call's body/headers in
`js/main.js` to match that provider's expected format.

## Deploying

Live now via **GitHub Pages**, serving directly from the
`claude/bmexa-waitlist-landing-8f4qxf` branch (Settings → Pages → Deploy from
a branch): **https://prince-s-bsr.github.io/Final-Verison/**

Any other static host works too, no build step required — Netlify/Vercel:
import the repo, leave the build command empty, publish directory `/`.

## Customizing

- **Colors:** edit the CSS custom properties at the top of `css/styles.css`
  (`--emerald-*`, `--amber*`, `--white*`).
- **Logo:** `assets/logo-lockup.png` (header), `assets/favicon.png` /
  `assets/logo-icon.png` (browser tab / apple-touch-icon), and
  `assets/footer-logo.png` (footer) are all transparent-background crops of
  the official BMexa mark artwork. Replace any of them directly — no
  HTML/CSS changes needed as long as the new file keeps the same name.
- **Copy:** all section copy lives directly in `index.html`.
