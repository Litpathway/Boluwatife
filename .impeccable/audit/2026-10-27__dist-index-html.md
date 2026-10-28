> Current refinement: see [refinement browser QA](../../qa/refinement/README.md) for the latest page and verification. This audit and its rebuild follow-up are retained as history.

> **Rebuild follow-up — 27 October 2026:** This report describes the previous implementation. The page has since been rebuilt in the user-confirmed cream, ink, and amber direction. The portrait has no added background. Dark-theme contrast and small mobile text were corrected. Real-browser navigation checks pass, including Contact at the document bottom; the old Work assertion was a virtual-time harness scheduling false negative. The originally requested body font is intentionally retained and embedded for offline rendering. Final light/dark, responsive, 200% text, keyboard, screenshot-viewer, no-JavaScript, reduced-motion, and storage-failure checks passed. See [final browser QA](</F:/skj'/daniel-folorunsho/qa/rebuild/BROWSER-QA.md>).
>
> Verified source SHA-256: `B11C64263E3895498AD17E2CF93EE3F5748BEF1D82B94015FB72D47F48C8F7E9`.

# Impeccable technical audit — dist/index.html

Date: 2026-10-27  
Surface: Daniel Folorunsho founder portfolio  
Scope: Accessibility, performance, theming, responsive behavior, implementation integrity. The user-requested photo cutout refinement was applied before this audit; unrelated findings are documented without modification.

## Audit Health Score

| Dimension | Score | Finding |
|---|---:|---|
| Accessibility | 2/4 | Good landmarks, labels, focus support, and alt text; a dark-theme contrast failure and microtext remain. |
| Performance | 3/4 | Lean standalone page with embedded assets; the browser audit did not produce timing or network metrics. |
| Theming | 2/4 | Token-based light/dark palettes and a working theme control; pale text remains on amber in dark mode. |
| Responsive Design | 3/4 | 320, 375, and 1440 px captures show no horizontal overflow; one section-current assertion fails. |
| Implementation Integrity | 3/4 | Product-specific copy and actual Hub/Kova captures; the detector reports several low-confidence layout/font findings. |
| **Total** | **13/20** | **Acceptable — address the contrast issue first.** |

## Implementation Integrity Verdict

**Pass.** The page uses Daniel’s supplied cutout portrait, actual Hub and Kova screenshots, his stated China–Nigeria trade focus, and links to his supplied social profiles. The portrait PNG is 500×500 RGBA and contains fully transparent pixels. The CSS arch was removed; the image now sits on the page surface and its caption is below it. The detector’s four cramped-padding warnings do not match the rendered result: the ribbon content has side insets, sections retain vertical spacing, and the manifest row no longer has the border the static detector associates with it.

## Executive Summary

- Audit Health Score: **13/20 (Acceptable)**
- Issues: **0 P0, 1 P1, 2 P2, 1 P3**
- Main concern: text can fall below WCAG AA contrast in dark mode when it sits on amber.
- Responsive browser checks passed at 320, 375, and 1440 px for width, overflow, image decoding/alt text, and theme controls. The desktop Work-section current-navigation assertion failed.
- The repo’s Chrome DevTools audit harness stopped at a canceled WebSocket connection, so hover states were not independently exercised there. The installed Impeccable CLI exposes `detect` but not the documented `audit` command; this report combines the detector, the project’s browser QA, and source-level checks.

## Detailed Findings

### P1 — Dark-theme text contrast on amber surfaces

- **Location:** [dist/index.html](/F:/skj'/daniel-folorunsho/dist/index.html:37), [dist/index.html](/F:/skj'/daniel-folorunsho/dist/index.html:247), [dist/index.html](/F:/skj'/daniel-folorunsho/dist/index.html:307)
- **Category:** Accessibility / Theming
- **Impact:** In dark mode, `--ink` becomes pale cream while `.follow-section` keeps the amber `--yellow` background. The Updates heading and social handle inherit the pale text. The “Get in touch” text link also inherits pale ink on amber when hovered. The detector measured this combination at **1.8:1**, below WCAG 2.2 SC 1.4.3’s 3:1 large-text and 4.5:1 normal-text thresholds.
- **Recommendation:** Set a dark foreground for text on amber surfaces and hover states in dark mode, then verify both themes and focus states.
- **Suggested command:** `$impeccable colorize`, followed by `$impeccable polish`.

### P2 — Work navigation state is not observed after scripted scrolling

- **Location:** [dist/index.html](/F:/skj'/daniel-folorunsho/dist/index.html:474)
- **Category:** Accessibility / Responsive
- **Impact:** The project browser QA harness reports `scrolledSectionNavCurrent: false` when it scrolls to Work. This affects the current-section cue; the section link itself remains usable. The DevTools-based harness could not complete its independent interaction check.
- **Recommendation:** Verify the observer’s active-section selection in a normal browser and keep `aria-current="location"` synchronized with the section occupying the reading position.
- **Suggested command:** `$impeccable harden`.

### P2 — Some mobile labels and profile links are very small

- **Location:** [dist/index.html](/F:/skj'/daniel-folorunsho/dist/index.html:337), [dist/index.html](/F:/skj'/daniel-folorunsho/dist/index.html:342), [dist/index.html](/F:/skj'/daniel-folorunsho/dist/index.html:353)
- **Category:** Accessibility / Responsive
- **Impact:** At 320–375 px, social links render at 10.88–11.52 px and manifest labels at 9.92 px. The detector’s 11 px floor is a legibility heuristic rather than a WCAG minimum, but these labels are harder to scan on high-density screens. Social links retain 30 px minimum height, above WCAG 2.2 SC 2.5.8’s 24 px minimum.
- **Recommendation:** Keep labels at least 11–12 px and allow the mobile profile links more vertical space where practical.
- **Suggested command:** `$impeccable typeset`.

### P3 — Body typeface is less distinctive than the display pair

- **Location:** [dist/index.html](/F:/skj'/daniel-folorunsho/dist/index.html:31)
- **Category:** Implementation Integrity
- **Impact:** The detector flags Instrument Sans as an overused body face. The page’s Bricolage Grotesque and DM Serif Display still provide a recognizable display voice, so this is polish rather than a blocker.
- **Recommendation:** Keep the current body face if readability and loading behavior matter more; otherwise compare a more characterful body face against real copy.
- **Suggested command:** `$impeccable typeset`.

## Detector Findings Reviewed

- **Confirmed:** pale text on amber in dark mode, as described above.
- **Low-confidence contrast warning:** the detector also reported pale text on paper in a hover state. The screenshot/browser harness did not verify that exact state, so confirm it during the contrast follow-up rather than treating it as a separate proven failure.
- **Likely false positives:** four “cramped padding” warnings on the manifest, ribbon, story section, and social note. The rendered spacing and winning CSS rules provide the expected inset/section padding.
- **Subjective warning:** Instrument Sans flagged as overused; the overall page does not rely on a generic display-font template.

## Positive Findings

- The portrait source has a real alpha channel; no fake background has been baked into the PNG.
- All images decode, have alt text, and are embedded for the standalone page.
- The 320, 375, and 1440 px QA cases report no horizontal overflow, text overflow, out-of-bounds content, or runtime errors.
- The theme control updates its pressed state and persists the selection. The mobile navigation exposes its expanded state and supports Escape and focus restoration in the existing QA checks.
- Landmark structure, skip link, visible focus treatment, and descriptive product screenshot text are present.

## Recommended Actions

1. **[P1] `$impeccable colorize`**: Correct pale-on-amber text in dark theme and verify hover/focus contrast.
2. **[P2] `$impeccable harden`**: Recheck active navigation state after scrolling to Work.
3. **[P2] `$impeccable typeset`**: Raise the smallest mobile labels and links.
4. **[P3] `$impeccable typeset`**: Consider a more distinctive body typeface if desired.
5. **`$impeccable polish`**: Run after the recommended fixes.

> You can ask me to run these one at a time, all at once, or in any order you prefer.
>
> Re-run `$impeccable audit` after fixes to see your score improve.