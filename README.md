# t90.club

A focused calculator suite for **runners and cyclists** — nutrition and performance math, no devices, no accounts, no tracking. The entire site is a single HTML file.

> **One file. No build. No dependencies. Open it. Ship it.**

---

## What's in the box

`index.html` — that's it. The whole site.

It contains:

- **Home** — hero and tagline
- **Calculators hub** — all 13 tools, filterable
- **6 working calculators** (with live charts)
- **7 stub pages** (routes work, "Coming soon" placeholders)
- **About**, **Meet the Creator**, **Articles** (structure only, fill in copy)
- Hash-based router so every page has a URL

---

## The calculators

| # | Calculator | Status | What it does |
|---|---|---|---|
| 1 | Daily fuel needs | ✅ Live | BMR + lifestyle + training kcal + macro split |
| 2 | Daily carbs & protein | 🕐 Soon | g/kg by training intensity day |
| 3 | During-workout carbs | ✅ Live | g/hr by duration, with cumulative chart |
| 4 | Sweat rate & hydration | 🕐 Soon | From pre/post weight check |
| 5 | Sodium loss & replacement | 🕐 Soon | mg/hr by sweat profile |
| 6 | Race-day fuel plan | 🕐 Soon | Carbs split across race duration |
| 7 | Caffeine dose & timing | 🕐 Soon | mg/kg pre-race |
| 8 | Race time predictor | ✅ Live | Riegel formula, 5K → marathon, curve chart |
| 9 | Pace / time / distance | 🕐 Soon | Converter |
| 10 | VDOT training paces | ✅ Live | Daniels' E/M/T/I/R paces from a recent race |
| 11 | FTP power zones | ✅ Live | Coggan 7-zone breakdown |
| 12 | W/kg power-to-weight | ✅ Live | Rider category bands |
| 13 | TSS estimator | 🕐 Soon | Training stress from power + duration |

---

## Run it locally

Just open `index.html` in a browser. Double-click. Done.

For an actual dev experience (auto-reload when editing), use any tiny server:

```bash
# Python
python3 -m http.server 8000

# Node (one-off)
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deploy

The file is fully static — no build, no Node, no Astro. **Drop it on any host:**

### GitHub Pages

1. Commit `index.html` to the **root** of the repo
2. Settings → Pages → Source → **"Deploy from a branch"** → main, `/` (root)
3. Custom domain (optional): add a `CNAME` file containing your domain. Set DNS A records to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

### Cloudflare Pages / Netlify / Vercel

Drag-and-drop the file. Done in 30 seconds.

### Any web server (nginx, Apache, S3, etc.)

Upload `index.html`. That's it.

---

## How to edit

The file is laid out in three regions:

```
<head>            ← meta, fonts, page title
<style>           ← all CSS (design tokens at the top in :root)
<body>
  <header>        ← logo, nav
  <main>
    <section data-page="/">                          ← home
    <section data-page="/calculators">               ← hub
    <section data-page="/calculators/daily-fuel">    ← one per calc
    <section data-page="/calculators/_stub">         ← soon-template
    <section data-page="/about">
    ...
  </main>
  <footer>
<script>          ← router + CATALOG array + per-calc math + chart code
```

### Common edits

- **Change colors / fonts / spacing** — edit `:root` variables at the top of `<style>`
- **Edit a calculator** — search for its `data-page="/calculators/<slug>"` section
- **Edit calculator math** — search for `// CALC N — <name>` comments in `<script>`
- **Edit the catalog (descriptions, statuses)** — find the `const CATALOG = [...]` array in `<script>`
- **Edit About / Creator copy** — find the `<section data-page="/about">` and `/creator` sections, replace the `[Placeholder]` spans
- **Add a new calculator**:
  1. Add an entry in `CATALOG`
  2. Add a `<section data-page="/calculators/<slug>">` with your form + result markup
  3. Write a `<slug>Calc()` function in the script
  4. Wire it up inside `wire()` at the bottom of the script

### Routing

Hash-based. All routes look like `#/path`. Examples:

- `index.html#/` → home
- `index.html#/calculators` → hub
- `index.html#/calculators/ftp-zones` → FTP zones calculator
- `index.html#/about` → about

When you click any `<a href="#/...">` link, the router shows the matching `<section>` and hides the rest. Browser back/forward works.

---

## Design principles

1. **Fast** — static HTML, no spinners, math runs instantly in your browser
2. **Private** — no accounts, no cookies, no analytics. Your inputs never leave your device
3. **Honest** — every calculator names its formula and its limits in a `<details>` block
4. **Free** — no paywall, no "pro" tier

---

## Stack

- HTML / CSS / vanilla JS
- Fonts from Google Fonts (McLaren, Bricolage Grotesque, JetBrains Mono)
- Inline SVG for all charts
- **Zero dependencies, zero build, zero frameworks**

Total page weight: ~68 KB HTML + ~50 KB fonts (CDN-cached).

---

## License

TBD. Pick one before you ship publicly.

---

## Status

**v0.1** — six working calculators with charts, seven stubs. Articles, About, and Creator pages are structural; copy still to write.
