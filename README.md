# NAPELL — Aeroponic Coffee Seedling Proposal

A multilingual, static business-plan website for the **aeroponic (mist hydroponic) coffee seedling** project. Industrializing the global coffee nursery with aeroponic precision.

## Features

- **Language selection modal** on first visit with three languages:
  - English (English)
  - Mandarin Chinese (简体中文)
  - Saudi Arabic (العربية السعودية)
- **Full trilingual content** — every UI string, navigation label, table, tooltip, and page is translated.
- **NAPELL logo** — large, bold (36px+, weight 800), uppercase, letter-spaced, gradient brand mark.
- **Hover dropdown navigation** with individual subpages (hash-based routing).
- **RTL support** — automatic right-to-left layout when Arabic is selected.
- Fully responsive (desktop + mobile hamburger nav).

## Structure

```
index.html            # app shell (language modal, header, footer)
css/styles.css        # brand styling, hover nav, modal, RTL
js/i18n.js            # languages, UI strings, navigation
js/pages/*.js         # page content in EN / ZH / AR
js/app.js             # router, i18n renderer, language persistence
```

## Local development

Serve the folder with any static server, e.g.:

```
npx serve .
```

## Live site

<https://erikcywong.github.io/napell-proposal/>

---

*Financial figures are estimates based on current market conditions and do not constitute a return guarantee. Data source: napell.space — Longgang aeroponic seedling base operating cost analysis.*
