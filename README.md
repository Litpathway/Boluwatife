# Daniel Folorunsho portfolio

Open `dist/index.html` directly in a browser. The page embeds its CSS, JavaScript, font and images; it has no runtime dependencies. External profile links need an internet connection.

To rebuild after editing the source:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/build.ps1
```

The build writes `dist/index.html` and `dist/FONT-LICENSE.txt`. Keep the font license with distributed copies.

Source files are `src/index.html`, `src/styles.css` and `src/app.js`. `PRODUCT.md` preserves the founder and product constraints, `research.md` holds the source ledger, and `DESIGN.md` documents the implemented visual system. The selected reference direction is recorded in `.impeccable/portfolio-reference-brief.md`.

The design adapts the user-supplied Oliver Scott reference, with the user-directed bright-teal, deep-teal, near-black, soft-white, white and muted-gray palette. Daniel's original close-up portrait, longer name, actual Hub/Kova screenshots and factual copy are intentional differences. The supplied images remain unchanged; the bright-teal disc behind the transparent portrait is CSS.

## Asset inventory

| Exact path | Provenance and use |
| --- | --- |
| `assets/daniel-cutout.png` | User-supplied transparent Daniel portrait; embedded unchanged. |
| `assets/Hub-screen.png` | User-supplied actual Hub dashboard screenshot; embedded unchanged with an empty-state caption. |
| `assets/kova-screen.png` | User-supplied actual Kova workspace screenshot; embedded unchanged with an empty-state caption. |
| `assets/fonts/manrope.ttf` | Variable Manrope from the [official Google Fonts distribution](https://github.com/google/fonts/tree/main/ofl/manrope); embedded locally. |
| `assets/fonts/manrope-OFL.txt` | Official Manrope SIL Open Font License; copied to `dist/FONT-LICENSE.txt`. |
| `assets/fonts/bricolage-grotesque.woff2` | Earlier Google Fonts font asset; retained, unused by the current build. |
| `assets/fonts/bricolagegrotesque-OFL.txt` | License for the retained Bricolage Grotesque asset. |
| `assets/fonts/instrument-sans.woff2` | Earlier Google Fonts font asset; retained, unused by the current build. |
| `assets/fonts/instrumentsans-OFL.txt` | License for the retained Instrument Sans asset. |
| `assets/fonts/google-fonts.css` | Earlier Google Fonts stylesheet; retained, unused by the current build. |
