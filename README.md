# djinny-app

Public website for the [Djinny](https://github.com/Magwerste/djinny) trivia game: a landing
page with a Google Play download button, plus the privacy policy and account-deletion pages
that the Play Console listing links to.

| Path | What | Source |
|---|---|---|
| `/` | App landing page, statically prerendered | `src/`, `index.html` |
| `/privacy/` | Privacy policy | `public/privacy/index.html` |
| `/delete-account.html` | Account and data deletion page | `public/delete-account.html` |

The privacy policy's source of truth is `docs/privacy-policy.html` in the main (private)
`djinny` repo. Copy changes over to `public/privacy/index.html` when it's updated there.

## Stack

Mirrors the main marketing site, trimmed for a single page: React 18 + TypeScript, Vite 5 (SWC),
Tailwind CSS 3 with `tailwindcss-animate`, shadcn/ui (`components.json`), Fontsource fonts,
ESLint 9 + typescript-eslint, Node 22. Left out on purpose: React Router, react-helmet-async
(the page's `<head>` is static in `index.html`), i18n, forms, charts, Functions. Add them when
the site grows past one page.

## Develop

```
npm install
npm run dev        # local dev server
npm run build      # typecheck, client build, SSR build, then scripts/prerender.mjs -> dist/
npm run preview    # serve dist/ locally
npm run lint
```

Design tokens (colors, fonts, radii) come from the app's `docs/DESIGN.md` ("Arcade Pop"): colors
in `src/index.css`, mapped to Tailwind in `tailwind.config.ts`. Coral and amber are fill-only colors: always pair them with ink text.

## Google Play badge

Google's brand guidelines require the unmodified official badge, so it isn't checked in as
a recreation. Download the PNG for your locale from <https://play.google.com/intl/en_us/badges/>
and save it as `public/badges/en_badge_web_generic.png`. Until then the page shows a plain
text "Get it on Google Play" link. Don't recolor, crop or add effects to the badge.

## Deployment (GitHub Pages)

`.github/workflows/pages.yml` builds the site and deploys it. In the repo's
**Settings → Pages**, set **Source** to **GitHub Actions** (it was "Deploy from a branch" when
this repo only hosted static HTML). Canonical, Open Graph and sitemap URLs are taken from the
real Pages URL at build time; override locally with `SITE_URL=https://example.com npm run build`.

Moving the privacy policy from `/` to `/privacy/` changes its URL: update the privacy policy
field in the Play Console to `<site>/privacy/`.
