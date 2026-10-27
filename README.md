# QR Nova â€” website

Marketing site for **QR Nova**, the QR code & barcode generator and scanner for Android (`com.qrnova.qrmaker`).
Plain static HTML/CSS/JS, no build step.

Live: https://edwardsundarsingh12-maker.github.io/QRNovaWeb/

## Pages
- `index.html` â€” home (hero, features, 31 QR types, workflow, benefits, screenshots, FAQ)
- `whats-new.html` â€” changelog with search
- `privacy.html` â€” Privacy Policy
- `terms.html` â€” Terms of Service

## Preview locally
```
python -m http.server 8080
```
then open http://localhost:8080.

## What to swap
- **Play Store URL** â€” currently `https://play.google.com/store/apps/details?id=com.qrnova.qrmaker` (correct once the listing is live).
- **Screenshots** â€” `assets/app-1.jpg` â€¦ `app-4.jpg` (591Ã—1280); `assets/og-image.jpg` for link previews.
- **Palette** â€” all colours are tokens at the top of `styles.css` (gold primary + royal purple accent).
- **New release** â€” copy the `<article class="release">` block at the top of the timeline in `whats-new.html`.

## Deploy
GitHub Pages serves the `main` branch root directly (branch deploy), so every push to `main` goes live in about a minute.
