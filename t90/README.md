# t90.club

Calculators for endurance athletes. Astro, static, dependency-light.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → ./dist
npm run preview  # serve ./dist locally
```

Node 18.17+ or 20+ required.

## Project map

```
src/
├─ layouts/Base.astro          # header, footer, global wrapper
├─ lib/catalog.js              # single source of truth for all calculators
├─ pages/
│  ├─ index.astro              # Home — explains t90 and audience
│  ├─ about.astro              # About (structure only — fill in copy)
│  ├─ creator.astro            # Meet the Creator (structure only)
│  ├─ articles/index.astro     # Articles list (structure only)
│  └─ calculators/
│     ├─ index.astro           # Hub — lists all calculators, live filter
│     ├─ bmr.astro             # Working: Mifflin–St Jeor BMR
│     └─ tdee.astro            # Working: TDEE w/ activity multiplier
└─ styles/global.css           # Design tokens — Linear/Stripe minimal
```

## Adding a new calculator

1. Add an entry in `src/lib/catalog.js` under the right category. Set `status: 'live'` once built.
2. Create `src/pages/calculators/<slug>.astro`. Copy `bmr.astro` or `tdee.astro` as a starting point — same shell (form → result → notes).
3. The hub page picks it up automatically.

## Design tokens

In `src/styles/global.css` under `:root`. The whole site reads from those vars — change one, the site shifts.

Accent color is signal-orange `#ff5a1f`, used sparingly (logo dot, accent underline, hover state, status badges).

## Stack

- Astro 4 (static, zero JS by default per page)
- Fontshare: Satoshi (sans) + Tanker (display); JetBrains Mono for code/labels
- No GA4, no analytics, no trackers — by design.

## Status

v0.1 — scaffold + 2 working calculators (BMR, TDEE). Remaining ~18 calculators flagged `status: 'soon'` in the catalog and rendered as disabled cards on the hub.
