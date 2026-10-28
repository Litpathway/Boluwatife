---
name: Daniel Folorunsho Portfolio
description: A reference-led founder portfolio with real product evidence.
colors:
  teal: "#00bfa6"
  teal-deep: "#008f7a"
  page: "#f7f7f7"
  white: "#ffffff"
  black: "#050505"
  ink: "#050505"
  accent: "#00bfa6"
  accent-text: "#008f7a"
  muted: "#777777"
  chip: "#777777"
  focus: "#008f7a"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(54px, 5.5556vw, 88px)"
    fontWeight: 750
    lineHeight: 1.18
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "48px"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "31px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "17px"
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 550
rounded:
  pill: "999px"
  row: "24px"
  row-mobile: "18px"
spacing:
  gutter: "8.213%"
  accordion-gap: "24px"
  accordion-gap-mobile: "14px"
components:
  contact-button:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    height: "56px"
  contact-button-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
  navigation:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  accordion-row:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.row}"
  accordion-row-open:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    rounded: "{rounded.row}"
  skill-chip:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
---

## Overview

**Creative North Star: "Daniel's work in the reference's composition."**

The user selected an adaptation of the supplied Oliver Scott reference. Its light gray hero, centered portrait, independent side elements, black ticker and rounded accordion establish the page's character. Daniel's longer name, close-up portrait, actual products and factual copy intentionally differ from the reference. This direction supersedes the earlier cream and amber treatment.

**Key Characteristics:**

- Soft-white and white surfaces, near-black structure and teal accents.
- Manrope throughout, with a large italic name and selected italic heading words.
- Layered portrait composition, capsule controls and large open accordion rows.
- Real product screenshots and direct founder language.

## Colors

The six palette primitives are bright teal #00BFA6, deep teal #008F7A, near-black #050505, soft white #F7F7F7, white #FFFFFF and muted gray #777777. Semantic roles map ink to near-black, accent to bright teal, accent-text and focus to deep teal, and chip to muted gray. Bright teal colors the portrait disc, decorative symbols and highlighted skill chips; deep teal colors italic heading words and circular controls with white icons. Soft white separates the hero and closed rows from white sections; near-black anchors the ticker, main actions and expanded row. Small text on light surfaces uses near-black. Muted gray supports secondary text on near-black and service chips with near-black labels. The current site has a single light color scheme.

**The Accent Rule.** Keep bright teal concentrated in the same prominent details and use near-black labels on bright-teal fills. Use deep teal for heading emphasis, focus outlines and circular controls with white icons. Keep secondary gray text on near-black surfaces; use near-black for small text on light surfaces.

## Typography

Manrope is a locally embedded variable TrueType font, with weights from 200 to 800. Italic display text uses the browser's synthesized italic. Desktop headline, title, body and label roles are captured above; responsive rules reduce sizes and allow Daniel's name to wrap on small screens. A Georgia quotation mark is the sole decorative type exception.

**The Name Rule.** Keep Daniel's full name, italic treatment and tight display tracking; accommodate its length through responsive sizing and wrapping.

## Layout

At 1440px wide, the hero is 1000px high and the black ticker is approximately 87px high. Navigation sits above a centered greeting and name. The portrait overlaps a bright-teal disc, with approach and product proof on the left, skills and social links on the right, and a joined two-action capsule near the bottom. The white work section contains an introduction, five accordion rows and a contact action.

The refined desktop portrait renders at 516×516px, centered at x720 with its top at y360: 14% smaller and 40px higher than the initial build. A straight side crop keeps the shoulder ends behind the rounded CTA. At 901–1200px, a gentler 12px lift avoids the subtitle; phones use a 12% reduction and 12px lift to preserve CTA overlap. The bright-teal disc, CTA and surrounding layout retain their original geometry. The supplied portrait pixels remain unchanged.

Desktop content uses percentage gutters. Layout changes occur at 1200px, 900px, 600px and 375px; wide-screen placement is capped above 1600px. At 900px the navigation becomes a menu; on smaller screens the side elements join the document flow and the accordion remains a single column. Product previews keep their natural image ratio inside clipped preview frames.

## Elevation & Depth

The system is flat and uses contrasting surfaces, overlap and thin outlines for separation. No shadows are applied. The portrait, disc, side elements and joined action create depth through stacking. The About dialog uses a translucent black backdrop.

## Shapes

Capsules connect navigation, actions and tags. Circular social controls, arrow buttons, the contact seal and portrait disc echo the reference. Accordion corners are softly rounded, reducing on small screens. Keep the original portrait's transparent pixels intact; the bright-teal disc is a separate CSS layer.

## Components

- **Navigation:** white capsule, deep-teal active underline, black contact action with a bright-teal hover and near-black label. The mobile menu supports Escape, outside dismissal and keyboard focus.
- **Hero actions:** two joined capsule links; the black work action includes a deep-teal circular control with a white arrow, and the conversation action has a thin outline.
- **Skill chips:** black capsules with white labels and bright-teal capsules with near-black labels, slightly angled as a group on desktop.
- **Ticker:** static white skill text and bright-teal symbols on black; it does not continuously animate.
- **Accordion:** five native disclosure rows with Kova initially open. An open row changes to black, exposes muted-gray tags with near-black labels and gray explanatory content, and has a deep-teal control with a white arrow. Arrow keys, Home and End move between summaries. Actual Hub and Kova previews retain honest empty-state captions.
- **About dialog:** native modal with founder background and education, close button, Escape dismissal and focus restoration.
- **Focus and motion:** a visible deep-teal focus outline (3px, 5px offset), short state transitions and a brief accordion reveal. Reduced-motion preferences disable transitions and animation.

## Do's and Don'ts

### Do:

- **Do** preserve the selected reference composition while using Daniel's full identity and factual product evidence.
- **Do** retain the supplied portrait and product screenshots without image edits.
- **Do** preserve visible keyboard focus, semantic disclosure controls and reduced-motion behavior.

### Don't:

- **Don't** restore the superseded cream, amber or two-font system.
- **Don't** replace actual screenshots with fictional product states or the reference's stock imagery.
- **Don't** copy reference testimonials, availability claims or services into Daniel's portfolio.
