# SecureXmotive — Design Analysis

Phase 1 output. Written from the 14 design PDFs in `design/` and the Figma design file
(`tLtxRAMuUBzIspHsHotTZX`). Values marked **exact** come from Figma variables, Figma node
data, or the PDFs' vector data. Values marked **inferred** are my reading of a static
design and should be confirmed.

## Contents

1. [Project Overview](#project-overview)
2. [Sources and what could be accessed](#sources-and-what-could-be-accessed)
3. [Gaps and discrepancies](#gaps-and-discrepancies)
4. [Page Inventory](#page-inventory)
5. [Navigation Structure](#navigation-structure)
6. [Design System](#design-system)
7. [Typography](#typography)
8. [Color Palette](#color-palette)
9. [Spacing](#spacing)
10. [Borders / Radius](#borders--radius)
11. [Buttons](#buttons)
12. [Cards](#cards)
13. [Forms](#forms)
14. [Responsive Behavior](#responsive-behavior)
15. [Animation / Interaction Requirements](#animation--interaction-requirements)
16. [Asset Requirements](#asset-requirements)
17. [Reusable Component Inventory](#reusable-component-inventory)
18. [Data Architecture](#data-architecture)
19. [Routing Architecture](#routing-architecture)
20. [Backend Integration Boundary](#backend-integration-boundary)
21. [Potential Technical Challenges](#potential-technical-challenges)
22. [Implementation Plan for Prompts 2–7](#implementation-plan-for-prompts-27)

---

## Project Overview

SecureXmotive is an automotive cybersecurity consultancy. The site is a dark, technical,
B2B marketing site with seven designed pages: Home, Services, Service Detail, Knowledge
Centre, Career, Company and Contact.

The visual language is consistent across every page:

- Near-black background (`#121212`) with slightly lighter card surfaces (`#252525`).
- One primary accent (teal `#50c9b9`) and one secondary accent (orange `#ff6700`).
  Depth comes from opacity steps of those two colors, not from additional colors.
- Three typefaces with strict roles: Rajdhani for headings, Inter for reading text,
  JetBrains Mono for everything "technical" (labels, nav, tags, tickers, metadata).
- Uppercase mono eyebrow label → large two-tone Rajdhani heading (white + teal) → short
  fading teal rule. This trio opens almost every section.
- Rounded cards (14px) with a faint teal hairline border that brightens and glows on hover.
- Horizontal "technical tickers" separate major sections.

The job is to reproduce this design, not to reinterpret it.

## Sources and what could be accessed

| Source | Result |
| --- | --- |
| `design/1.zip` → 14 PDFs | Fully read. Every file is one tall page exported from a Figma section. |
| Figma design copy `tLtxRAMuUBzIspHsHotTZX` | Accessible. Read the full node tree, the variable definitions, and detailed specs for the Home page, header, footer, page hero, a service row, the Knowledge Centre tab bar, and two hover variants. |
| Figma Make `5j9R8zfC6rEPzRtzVeM0IZ` | Partially accessible. The file list is visible; the tools in this session could not open file contents. |
| Original Figma file and prototype `pyPcynZh8a8hPqISvFFu9M` | Not accessible ("no edit access"). Prototype interactions could not be inspected. |

### What each PDF is

| File | Content | Size (px) |
| --- | --- | --- |
| `1.pdf` | Home page | 1476 × 4272 |
| `2-1.pdf` | Services page | 1476 × 3128 |
| `3-1.pdf` | Service Detail page (Automotive Cybersecurity Consulting) | 1476 × 2247 |
| `4-1.pdf` | Knowledge Centre page (Articles tab) | 1476 × 2166 |
| `5-1.pdf` | Career page | 1476 × 4463 |
| `6-1.pdf` | Company page | 1476 × 3316 |
| `7-1.pdf` | Contact page | 1476 × 2142 |
| `01.pdf` | Home component sheet: framework cards, sector card, icons, service cards, edge cards, solid button — each as default and hover | 1229 × 6699 |
| `2.pdf` | Services component sheet: icons, service rows, solid button — default and hover | 2891 × 3533 |
| `3.pdf` | Service Detail component sheet: sidebar cards, button, icons, next-service card | 1189 × 1922 |
| `4.pdf` | Knowledge Centre component sheet: icons, article rows | 2890 × 2848 |
| `5.pdf` | Career component sheet: benefit cards, icons, job rows, button, form | 2890 × 6237 |
| `6.pdf` | Company component sheet: mission/vision cards, value cards, buttons | 1630 × 3010 |
| `7.pdf` | Contact component sheet: button, form, side cards | 1919 × 2573 |

Each page PDF is the 1276px-wide page frame with a 100px grey margin around it. The PDFs
are 1:1 with Figma pixels, so coordinates and font sizes read from them are exact.

### How the design was made (this matters)

The Figma design file is a **capture of the running Figma Make app**. Its layers are named
after the original Tailwind classes (`div.max-w-7xl`, `section.py-24`, `span.cyber-tag`,
`footer.bg-cyber-surface`, `p.text-cyber-muted`, `div.gradient-line`). Consequences:

- The design maps almost perfectly onto Tailwind's default scale — spacing, type sizes,
  line heights, letter-spacing and container widths are all Tailwind defaults.
- The frame is 1276px wide: a 1280px viewport minus the scrollbar.
- Fractional values such as `0.667px` borders and `19.667px` padding are capture artifacts
  (a 1px border and 20px padding at 1.5× device scale). Implement the clean values.
- The service accent colors `#fdc700`, `#ff6467`, `#c27aff` are Tailwind v4's
  `yellow-400`, `red-400`, `purple-400` — the original was built on Tailwind v4.
- The PDFs and the Figma file are the same thing, so there is no PDF-vs-Figma conflict.

### Figma node IDs (file `tLtxRAMuUBzIspHsHotTZX`)

Use these with `get_design_context` when implementing each part.

| Part | Node |
| --- | --- |
| Home page frame | `1001:1002` |
| Home hero | `1001:1220` (background image frame `1001:1222`) |
| Home framework section / grid | `1001:1008` / `1001:1023` |
| Home "What we deliver" section / grid | `1001:1094` / `1001:1101` |
| Home "Why choose" section | `1001:1162` |
| Home closing CTA | `1001:1208` |
| Home tickers | `1001:1341` (orange), `1001:1402` (grey) |
| Header | `1001:1562` |
| Footer | `1001:1450` |
| Services page frame | `1001:2238` — hero `1001:2242`, rows `1001:2320`, `2368`, `2416`, `2464`, `2512`, CTA `1001:2560`, ticker `1001:2573` |
| Service Detail page frame | `1001:2904` — hero `1001:2993`, body grid `1001:2908`, sidebar `1001:2935` |
| Knowledge Centre page frame | `1001:3540` — hero `1001:3665`, tab bar `1001:3728`, article list `1001:3544` |
| Career page frame | `1001:4595` — hero `1001:4903`, benefits `1001:4599`, jobs section `1001:4665`, form block `1001:4836` (form `1001:4845`) |
| Company page frame | `1001:5338` — hero `1001:5412`, mission/vision `1001:5342`, values `1001:5360`, journey `1001:5569`, CTA `1001:5401` |
| Contact page frame | `1001:6053` — hero `1001:6174`, body grid `1001:6057`, form `1001:6059`, side cards `1001:6117` |
| Hover variants | Symbols named `variant=N,:hover=true` in the component sections (`1001:916`, `2196`, `2873`, `3499`, `4519`, `5297`, `6022`). Example: framework card hover `1001:509`, solid button hover `1001:782`, service row hover `1001:1668`. |

## Gaps and discrepancies

Nothing below was resolved by guessing. Each item needs a decision or missing material.

| # | Finding | Impact |
| --- | --- | --- |
| 1 | **Only desktop (1280px) is designed.** No tablet or mobile frames, no hamburger menu, no open mobile navigation. | All responsive behaviour is derived. See [Responsive Behavior](#responsive-behavior). |
| 2 | **Pages listed in the brief but not designed:** Article Detail, Privacy Policy, Terms of Service, Security Disclosure page, 404. | Layout must be composed from existing components. Legal copy is not available. |
| 3 | **Knowledge Centre "Videos" and "Reports" tabs** exist as tab buttons only. No video card, report card, player or empty state is designed. | Phase 7 has no visual reference for these. |
| 4 | **Only one service detail page has content** (Automotive Cybersecurity Consulting). The other four share the template but their tagline, intro, sections, deliverables and standards are not in the PDFs. | Marked `CONTENT_PENDING` in `src/data/services.ts`. The copy probably exists in the Figma Make source (`ServiceDetail.tsx`), which could not be read. |
| 5 | **Open state of the Services dropdown** (the header shows a chevron beside "Services") is not designed. | Phase 2 must derive it. |
| 6 | **Sectors.** The brief names five sectors (Automotive, Agriculture, Off-Highway, Commercial, Industries & Manufacturing/OT). The design shows only "AUTOMOTIVE — Primary Sector Focus" (Home sector card, footer). | Following the design: Automotive only. Confirm if the other sectors should appear anywhere. |
| 7 | **Resume field.** The design's career form has a "Resume / CV Link" text input (placeholder `https://drive.google.com/... or portfolio URL`). The brief and backend describe resume *file upload* to S3. | Design says link, brief says upload. Needs a decision before Phase 6. |
| 8 | **Card corners.** The brief suggests cards may be sharp-edged. The design uses rounded corners throughout (14px cards, 8px buttons). | Following the design. |
| 9 | **Prototype interactions** could not be inspected (no access). Hover states are documented in the component sheets; everything else about motion is inferred. | See [Animation](#animation--interaction-requirements). |
| 10 | **Animated elements in the Make source.** Its file list includes `AnimatedBackground.tsx`, `AnimatedBanner.tsx`, `RadarAnimation.tsx`, `LogoCircleWatermark.tsx` and `Car.mp4`. The static PDFs cannot show what these do. The inner-page heroes show a faint glow on the right side that may be one of them. | Cannot be reproduced accurately without the Make code or a screen recording. |
| 11 | **Hero background.** The PDF shows a still image of a wireframe car; the Make project contains `Car.mp4`, so the live hero is probably a video. | Decide: video with poster image, or still image. |
| 12 | **Select options** are not visible: "Select a service" (Contact), "Select a role" and "Select experience level" (Career). | Service and role options are derived from existing data. Experience levels are `CONTENT_PENDING`. |
| 13 | **Risk row chips.** On the Services page, the capability chips of the "RISK" row render without the colored dot that every other row has. | Likely a capture glitch. Default plan: render the yellow dot like the other rows; confirm. |
| 14 | **Naming.** The nav says "Career" (singular) and "Contact Us"; the brief's routes are `/careers` and `/contact`. | Labels follow the design, URLs follow the brief. |
| 15 | **CTA destinations.** "Get Assessment", "Book Free Consultation", "Book a Free Assessment", "Get in Touch" have no visible destination. | Assumed to link to `/contact` (inferred). |
| 16 | **Backend not present.** `../backend` does not exist on this machine. | API paths, payloads and the dev port in `.env` are provisional. |
| 17 | **Empty band under every hero.** On all seven pages the first section starts 37px lower than its padding explains — exactly one ticker's height — and nothing is drawn there. | Reproduced as spacing. The live prototype may show an animated banner there. |
| 18 | **Content in the phase briefs that the design lacks.** Rotating hero backgrounds, five sector service previews, four "trust points", "Why leading global brands trust us", four service pillars, a longer Company introduction, a "Security check" form field. | Not built — no design and no copy. Listed in CLAUDE.md. |
| 19 | **Figma MCP allowance exhausted** (Starter plan) during Phase 3. | Exact values for Contact were read from the PDF's vector data instead; the result matches within about 2px. |
| 20 | **Services content replaced.** The design's five practice areas were prototype content. In Phase 4 the client supplied five domains (Automotive, Agriculture, Off-Highway, Commercial, Industries & Manufacturing) with 19 services and their technical points. | The designed layouts now carry the supplied content — see "Services" in CLAUDE.md. Gap 4 is superseded; gap 6 is resolved (the other sectors now appear as service domains). Row descriptions, taglines and intros are still not supplied. |
| 21 | **Career form reconciled.** The design's form has a résumé *link* field and an experience *select*; the client specified a résumé upload, numeric years of experience, and a different set of required fields. | Built as the design's layout with the client's requirements — see "Career form" in CLAUDE.md. Gap 7 is resolved (upload). The file limits (PDF/DOC/DOCX, 5 MB) are an assumption. |
| 22 | **Article bodies still missing.** | Article pages are built and show a clearly marked placeholder. Gap 2's Article Detail layout was derived from Service Detail. |
| 23 | **Videos and Reports built without a design** (gap 3). No card designs or direction arrived, and no reports or videos were supplied. | Both tabs reuse the designed article row. Reports hold two entries marked "[Report placeholder]"; Videos load from the backend and show an empty state until the API is switched on. No player, filters or search were added. See "Knowledge Centre" in CLAUDE.md. |
| 24 | **Legal pages have no copy** (gap 2). | Privacy Policy and Terms of Service are real pages showing "[Legal content placeholder]". Security Disclosure shows the Contact page's disclosure card, the only such copy in the design. |
| 25 | **Card arrows were white; the design's are `#aaaaaa`.** Found in the Phase 7 comparison with the PDFs (Home deliverable cards, Knowledge Centre rows). | Corrected. The "Next service" arrow is white in the design and stays white. |
| 26 | **The Figma prototype is publicly viewable** (found in the final QA pass). It holds 37 frames — the 7 pages and 30 hover sheets — and nothing else: no mobile frames, no animation, no extra pages. | Gaps 9 and 10 are narrowed: the prototype has no interactions beyond hover and shows the band under each hero empty (gap 17). Animated elements can only exist in the Make source, which still cannot be read. |
| 27 | **PDF sizes were misread for bordered elements.** The PDF draws a border as a box 1px larger on every side; earlier phases sized some controls from that outer box. | Corrected in the final QA pass against the prototype's pixels: form inputs 47px, selects 44px, textareas five/four lines, form rows 20px apart, solid buttons 48px, the outlined secondary button 50px, "Apply now" 38px with a 12px arrow. |
| 28 | **Brief vs Figma, final pass.** The QA brief expected a Contact "Security Check" field and a Careers "Full name" field. | Neither is in the prototype's Contact or Career frame. Not built; Figma wins. |

## Page Inventory

Header and footer are identical on every page and are not repeated below.

### 1. Home — `/` (`1.pdf`)

1. **Hero** (full-bleed, ~832px tall). Background vehicle image, darkened by a `#121212`
   65% overlay plus a top-to-bottom gradient that fades into the page. Centered content:
   - `h1` in three lines at 128px: "SECURING THE" (white), "CONNECTED", "VEHICLE" (each
     line filled with a teal → orange → teal horizontal gradient).
   - Intro paragraph, 20px, white 85%, max 672px.
   - Label "COMPLIANCES & FRAMEWORK COVERAGE" (mono 16px, teal).
   - Ten framework pill chips, centered and wrapping onto two rows (7 + 3).
2. **Compliance & Framework** — eyebrow "REGULATORY COVERAGE", heading, rule, then a
   5-column grid of ten framework cards and an eleventh orange "AUTOMOTIVE / Primary
   Sector Focus / SECTOR TAG" card on the third row.
3. **Ticker (orange)** — ten capability terms.
4. **What We Deliver** — eyebrow "CAPABILITIES", heading, rule, 3-column grid: five
   service cards plus a dashed "All Services / Explore full capabilities" tile.
5. **Ticker (grey)** — eight technology terms.
6. **Why Choose SecureXmotive** — tinted full-bleed band. Left: eyebrow "OUR EDGE",
   two-line heading, paragraph, "LEARN ABOUT US →" link. Right: 2 × 2 grid of small cards
   (Domain-Native, Regulation-Ready, End-to-End, Global Reach).
7. **Closing CTA** — centered: orange eyebrow "START YOUR COMPLIANCE JOURNEY", heading
   "READY TO SECURE YOUR VEHICLE PLATFORM?", paragraph, solid button "BOOK FREE CONSULTATION".

### 2. Services — `/services` (`2-1.pdf`)

1. **Page hero** — eyebrow "CAPABILITIES MATRIX", `h1` "OUR SERVICES" (96px), rule, intro.
2. **Service rows** — five stacked full-width cards, each with a colored header strip
   (index, category, name, "VIEW DETAILS →") and a body (icon tile, title, description,
   capability chips, "LEARN MORE →" outline button). Each row uses its own accent color.
3. **Ticker (orange)** — eight terms.
4. **CTA band** (surface background) — "NOT SURE WHERE TO START?", paragraph, solid button
   "BOOK A FREE ASSESSMENT".

### 3. Service Detail — `/services/:serviceSlug` (`3-1.pdf`)

1. **Detail hero** — back link "← ALL SERVICES", category tag, `h1` at 60px in title case
   (white, not two-tone), rule, italic teal tagline.
2. **Body**, two columns (≈803px + 377px, 48px gap):
   - Left: intro paragraph (18px) then four sections, each with a left teal border, a teal
     20px heading and a paragraph.
   - Right sidebar, stacked cards: "DELIVERABLES" (orange-bulleted list), "STANDARDS
     COVERED" (tags), "ENGAGE THIS SERVICE" (text + full-width "GET IN TOUCH" button),
     "NEXT SERVICE" (name + arrow, links to the next service).

### 4. Knowledge Centre — `/knowledge-centre` (`4-1.pdf`)

1. **Page hero** — eyebrow "INTELLIGENCE HUB", `h1` "KNOWLEDGE CENTRE", rule, intro.
2. **Tab bar** — ARTICLES (active), VIDEOS, REPORTS. Sticky under the header.
3. **Article list** — six stacked rows: icon tile, category tag, date, read time, title,
   excerpt, arrow at the top right.

Videos and Reports tabs: not designed. Built in Phase 7 from the article row (gap 23).

### 5. Article Detail — `/knowledge-centre/articles/:slug`

Not designed. No article body copy exists.

### 6. Career — `/careers` (`5-1.pdf`)

1. **Page hero** — eyebrow "JOIN THE TEAM", `h1` on two lines "CAREER AT" / "SECUREXMOTIVE".
2. **Why Choose SecureXmotive** — eyebrow "THE CASE FOR JOINING", 36px heading, rule,
   3 × 2 grid of numbered benefit cards.
3. **Ticker (orange)** — role and location terms.
4. **Current Positions** — tinted band. Eyebrow "OPEN ROLES", heading, rule, seven job
   rows: icon tile, department tag, optional HOT/NEW badge, title, location and type
   line, "APPLY NOW →" outline button.
5. **Ticker (grey)** — culture terms.
6. **Submit Resume** — narrow centered block (768px): eyebrow "OPEN APPLICATION", heading,
   rule, paragraph, then the application form card.

### 7. Company — `/company` (`6-1.pdf`)

1. **Page hero** — eyebrow "ABOUT US", `h1` "OUR COMPANY", rule, 18px intro.
2. **Mission / Vision** — two equal cards (teal accent line / orange accent line).
3. **Ticker (orange)** — values terms.
4. **Core Values** — tinted band. Eyebrow "WHAT DRIVES US", heading, rule, four numbered cards.
5. **Ticker (grey)** — years and milestones.
6. **Our Journey** — narrow centered block (896px): eyebrow "HISTORY", heading, rule,
   vertical timeline 2019 – 2026 (teal year, orange dot on a vertical line, text).
7. **CTA band** — "READY TO WORK WITH US?", paragraph, two buttons: solid "CONTACT US",
   outline "JOIN OUR TEAM".

### 8. Contact — `/contact` (`7-1.pdf`)

1. **Page hero** — eyebrow "REACH OUT", `h1` "CONTACT US", rule, intro.
2. **Body**, two columns (≈803px + 377px):
   - Left: contact form card.
   - Right: "RESPONSE TIME" card, three office cards (Pune, Munich, Singapore),
     orange-tinted "SECURITY DISCLOSURE" card.

### 9–11. Privacy Policy, Terms of Service, Security Disclosure

Linked from the footer. Not designed; no copy. Built in Phase 7 as the standard page
heading over a narrow column, with the missing copy clearly marked (gap 24).

### 12. Not Found — `*`

Not designed. Required for a working site.

## Navigation Structure

### Header (exact — node `1001:1562`)

- Fixed to the top, 64px tall, full width. Background `#121212` at 95% with a 6px backdrop
  blur; 1px bottom border, teal 10%.
- Inner container `max-w-7xl`, `px-6`, three groups spread with space-between.
- **Logo** (left, links home): shield outline icon 30 × 34 with a teal "X" inside
  (Rajdhani Bold 13px); wordmark "secure**X**motive" in Rajdhani Bold 16px, white with a
  teal X; tagline "AUTOMOTIVE CYBERSECURITY" in JetBrains Mono 8px, `#aaa`, tracking 0.8px.
- **Links** (center, 4px gap): HOME, SERVICES ⌄, KNOWLEDGE CENTRE, CAREER, COMPANY,
  CONTACT US. JetBrains Mono 12/16, tracking 1.2px, uppercase, `#aaa`; padding 16px × 8px;
  radius 8px.
  - Active page: teal text on a teal 8% background.
  - SERVICES carries a 12px chevron — it opens a menu of the five services.
- **CTA** (right): outline button "GET ASSESSMENT" (see [Buttons](#buttons)).

### Footer (exact — node `1001:1450`)

- Background `#252525`; a full-width fading teal rule at the very top. The lower third
  picks up a warm tint (from `#252525` to about `#322821` at the bottom edge) — an orange
  gradient overlay; exact stops to be read from the node in Phase 2.
- Container `max-w-7xl`, `px-6`, `py-16`. Four equal columns, 48px gap:
  1. Logo (shield 28 × 32, wordmark 18px), description (Inter 14/22.75, `#aaa`), status
     line: 8px orange dot + "SYSTEMS OPERATIONAL" (mono 12px, teal).
  2. "NAVIGATION" — Home, Services, Knowledge Centre, Career, Company, Contact Us.
  3. "SERVICES" — the five services by short name.
  4. "FRAMEWORKS" — eight tags; then a hairline, "Sector Focus" (mono 12px, `#aaa`) and
     "AUTOMOTIVE" (Rajdhani SemiBold 18px, orange).
- Column headings: Rajdhani SemiBold 14/20, tracking 1.4px, uppercase, teal. Links: Inter
  14/20, `#aaa`, 8px apart.
- The warm tint, measured from the PDF: orange at about 6.5% on the bottom edge, 4% at
  48px up, 2% at 96px, 1% at 144px, gone by about 190px. Implemented as a 192px overlay.
- A second fading teal rule, then the bottom bar: "© 2026 SecureXmotive. All rights
  reserved." on the left and Privacy Policy / Terms of Service / Security Disclosure on the
  right (mono 12px, `#aaa`, 24px gap).

### Link map

| From | To |
| --- | --- |
| Logo | `/` |
| Header and footer navigation | the six main pages |
| Services menu, footer services, Home service cards, service rows ("VIEW DETAILS", "LEARN MORE") | `/services/:serviceSlug` |
| Home "All Services" tile | `/services` |
| Home "LEARN ABOUT US" | `/company` |
| Service Detail "ALL SERVICES" | `/services` |
| Service Detail "NEXT SERVICE" | the next service's detail page |
| Article rows | `/knowledge-centre/articles/:slug` |
| Company CTA | `/contact` and `/careers` |
| Assessment / consultation / "Get in touch" buttons | `/contact` (inferred) |
| "APPLY NOW" | the application form on the same page, with that role preselected (inferred) |
| Footer legal links | the three legal pages |

## Design System

Tokens are implemented in `src/index.css`. This section records where they come from.

### Recurring building blocks

- **Eyebrow label** — JetBrains Mono 12/16, tracking 1.2px, uppercase, teal (orange on the
  Home closing CTA).
- **Two-tone heading** — Rajdhani Bold, uppercase, white with the last word or line in teal.
- **Gradient rule** — 1px tall, 192px wide under section headings and 256px under page
  titles; transparent → teal → transparent.
- **Section header** — eyebrow, heading, rule stacked with 12px gaps, then 56px (Home) or
  48px (inner pages) before the content.
- **Accent line** — a 2px bar at the top of a card: 32px wide (framework, mission/vision,
  values) or 24px (edge cards); teal or orange.
- **Icon tile** — 36 × 36, radius 12px, orange 12% fill, orange 25% border, 16px orange
  shield-check icon. Used on service rows, article rows and job rows. It is always orange,
  whatever the row's accent.
- **Tag** — small bordered mono label (see [Buttons](#buttons) → Tags and chips).
- **Ticker** — a full-bleed 37px strip of mono terms.

## Typography

Verified against the Figma variables: `font family/Font 1` = Rajdhani, `Font 2` = Inter,
`Font 3` = JetBrains Mono. The brief's assumption is correct.

The PDFs embed text as Type 3 glyphs, so font names cannot be read from them; sizes and
positions can.

### Roles

| Family | Weights used | Used for |
| --- | --- | --- |
| Rajdhani | 600, 700 | All headings, card titles, logo wordmark, footer column headings, solid-button labels, timeline years |
| Inter | 400 (+ italic) | Paragraphs, card descriptions, list items, form values and placeholders, footer links |
| JetBrains Mono | 400, 500, 600, 700 | Eyebrows, navigation, tags, tickers, dates and metadata, outline buttons, form labels, copyright |

### Scale (exact)

| Element | Family / weight | Size / line height | Tracking | Case | Color |
| --- | --- | --- | --- | --- | --- |
| Home hero `h1` | Rajdhani 700 | 128 / 128 | −3.2px | upper | white / gradient |
| Page title `h1` | Rajdhani 700 | 96 / 96 | −2.4px | upper | white + teal |
| Service detail `h1` | Rajdhani 700 | 60 / 60 | tight | title | white |
| Section `h2` (Home) | Rajdhani 700 | 60 / 60 | −1.5px | upper | white + teal |
| Section `h2` (inner pages) | Rajdhani 700 | 36 / 40 | tight | upper | white + teal |
| CTA band heading / mission heading | Rajdhani 700 | 30 / 36 | wide | upper / title | white |
| Service row title | Rajdhani 700 | 24 / 32 | 0.6px | title | white |
| Card title (large) | Rajdhani 600–700 | 20 / 28 | 0.5px | title | white or teal |
| Card title (medium) | Rajdhani 600 | 18 / 28 | 0.45px | title | white |
| Card title (small) | Rajdhani 600 | 16 / 24 | 0.4px | title | white |
| Footer column heading | Rajdhani 600 | 14 / 20 | 1.4px | upper | teal |
| Solid button label | Rajdhani 700 | 13 / 19.5 | 1.56px | upper | `#121212` |
| Hero intro | Inter 400 | 20 / 32.5 | 0 | — | white 85% |
| Lead paragraph | Inter 400 | 18 / ~29 | 0 | — | `#aaa` / white 80% |
| Body | Inter 400 | 16 / 26 | 0 | — | `#aaa` or white 80% |
| Card description | Inter 400 | 14 / 22.75 | 0 | — | white 75–80% or `#aaa` |
| Small description | Inter 400 | 12 / 19.5 | 0 | — | white 75% / `#aaa` |
| Hero framework label | JetBrains Mono 400 | 16 / 24 | 1.6px | upper | teal |
| Hero chip | JetBrains Mono 400 | 14 / 20 | 0.35px | as typed | white 70% |
| Eyebrow, nav, outline button, tab | JetBrains Mono 400 | 12 / 16 | 1.2px | upper | teal or `#aaa` |
| Ticker item | JetBrains Mono 500 | 12 / 16 | 1.2px | upper | orange 80% or `#aaa` 70% |
| Service row index | JetBrains Mono 700 | 24 / 24 | 0 | — | white 10% |
| Service row category | JetBrains Mono 600 | 12 / 16 | 1.2px | upper | row accent |
| Metadata (dates, locations, copyright) | JetBrains Mono 400 | 12 / 16 | 0 | as typed | `#aaa` |
| Tag | JetBrains Mono 400 | 11 / 16.5 | 1.1px | upper | teal 75% |
| Logo tagline | JetBrains Mono 400 | 8 / 8 | 0.8px | upper | `#aaa` |

In Tailwind terms: line height of reading text is `leading-relaxed` (1.625); mono labels
use `tracking-widest` (0.1em); Rajdhani titles use `tracking-wide` (0.025em); large
headings use `tracking-tight` (−0.025em).

### Responsive typography (inferred)

No small-screen frames exist. Proposed scaling that keeps the proportions:

| Element | ≥1280 | 1024 | 768 | <640 |
| --- | --- | --- | --- | --- |
| Home hero `h1` | 128 | 96 | 72 | 48 |
| Page title `h1` | 96 | 72 | 60 | 44 |
| Section `h2` (Home) | 60 | 48 | 40 | 32 |
| Section `h2` (inner) | 36 | 36 | 30 | 28 |
| Hero intro | 20 | 20 | 18 | 16 |

Body, card and label sizes do not change.

## Color Palette

### Base colors (exact — Figma variables)

| Token | Hex | Figma name | Use |
| --- | --- | --- | --- |
| `cyber-bg` | `#121212` | grey/7 "Cod Gray" | Page background, text on solid buttons |
| `cyber-surface` | `#252525` | grey/15 "Mine Shaft" | Cards, footer, CTA bands |
| `cyber-field` | `#1a1a1a` | — (PDF vector data) | Form fields |
| `cyber-teal` | `#50c9b9` | cyan/55 "Puerto Rico" | Primary accent |
| `cyber-orange` | `#ff6700` | orange/50 "Blaze Orange" | Secondary accent |
| `cyber-muted` | `#aaaaaa` | grey/67 "Silver Chalice" | Secondary text |
| `cyber-placeholder` | `#888888` | — (PDF vector data) | Placeholder text at 50% |
| white | `#ffffff` | white/solid | Primary text |
| — | `#f0f0f0` | — (PDF vector data) | Select placeholder text ("Select a service") |

### Service accents (exact)

| Service | Token | Hex |
| --- | --- | --- |
| 01 Strategy | `accent-strategy` | `#50c9b9` |
| 02 Compliance | `accent-compliance` | `#ff6700` |
| 03 Risk | `accent-risk` | `#fdc700` |
| 04 Offensive | `accent-offensive` | `#ff6467` |
| 05 Design | `accent-design` | `#c27aff` |

### Opacity steps in use (exact)

| Color | Step → use |
| --- | --- |
| Teal | 5% tag fill · 8% active nav item, band borders, service-row header divider · 10% header/footer/hero borders · 12% logo shield fill · 15% card borders, small dividers · 20% tag borders, hero chip borders, dashed tile border · 30% circle border · 45% card border on hover · 75% tag text · 85% solid button on hover |
| Orange | 5% ticker fill, chip fill, security card fill · 8% service-row header gradient start · 12% icon tile fill · 15% ticker border · 25% icon tile border · 30% ticker separator · 50% "SECTOR TAG" text · 80% ticker text |
| White | 5% chip border · 10% service row index · 60% small caption · 70% hero chip text, row header name · 75% card description · 80% body text · 85% hero intro |
| `#aaa` | 25% grey ticker separator · 40% form footnote · 70% grey ticker text |
| `#252525` | 30% tinted section band · 50% hero chip fill, page-hero gradient · 60% grey ticker fill |
| `#121212` | 65% hero image overlay · 95% header and tab bar background |

### Gradients (exact unless noted)

- **Hero headline:** left → right, teal → orange (50%) → teal, clipped to the text, applied
  per line.
- **Hero overlay:** flat `#121212` 65%, plus top → bottom `#121212` 50% → transparent
  (50%) → `#121212`.
- **Page hero wash:** ~163° linear, `#252525` 50% → transparent at 50%.
- **Gradient rule:** left → right, transparent → teal → transparent.
- **Service row header:** left → right, accent 8% → transparent.
- **Service row side bar:** top → bottom, accent → accent 30% (4px wide).
- **Ticker edge fades:** 64px, `#121212` → transparent, both ends.
- **Footer warm tint:** orange overlay growing toward the bottom (stops inferred).

### State colors

- Hover: teal border 45% + teal glow; titles and arrows turn teal.
- Warning / security disclosure: orange label on an orange-tinted card (≈ orange 5% fill,
  orange ~20% border). There is no red error color in the design; `#ff6467` exists only as
  the "Offensive" service accent.
- Form error, success and disabled states are **not designed**.

## Spacing

All spacing sits on Tailwind's 4px scale.

| What | Value |
| --- | --- |
| Page horizontal padding | 24px (`px-6`) |
| Container | 1280px (`max-w-7xl`) → 1228px of content at the design width |
| Narrow containers | 896px (`max-w-4xl`: Home CTA, timeline) · 768px (`max-w-3xl`: CTA bands, career form) · 672px (`max-w-2xl`: intro paragraphs) · 576px (`max-w-xl`: CTA paragraph) |
| Header height | 64px |
| Home hero | ~832px tall; content `pt-20 pb-[120px]`, 20px between blocks |
| Page hero | `py-20` (80px), 16px between eyebrow / title / rule / intro |
| Section vertical rhythm | ≈112–116px between major blocks; tinted bands use `py-24` (Home) or `py-20`; CTA bands `py-16` |
| Section header → content | 56px on Home (`mb-14`), 48px on inner pages (`mb-12`) |
| Eyebrow → heading → rule | 12px each |
| Framework grid | 5 columns, 16px gap |
| Service card grid | 3 columns, 20px gap |
| Edge cards / benefit / value grids | 16–20px gap |
| Stacked rows (articles, jobs) | 12px (`space-y-3`); service rows 24px |
| Two-column body (Service Detail, Contact) | ≈803px + 377px, 48px gap; sidebar cards 20px apart |
| Detail sections | 48px apart (`space-y-12`) |
| Timeline rows | 32px apart (`space-y-8`) |
| Card padding | 20px (small cards) · 24px (service cards, rows, sidebar cards) · 32px (mission/vision, form cards) |
| Footer | `py-16`, 48px column gap, 20px heading → list, 8px between links |
| Ticker | 37px tall (`py-2.5`), 12px between term and separator |

### Mobile spacing (inferred)

Keep `px-6` (or `px-4` under 400px). Reduce large vertical paddings by roughly a third
(`py-24` → `py-16`, `py-20` → `py-14`). Card padding stays the same.

## Borders / Radius

| Element | Radius | Border |
| --- | --- | --- |
| Cards, rows, form cards, sidebar cards | 14px (`rounded-card`) | 1px teal 15% |
| Dashed "All Services" tile | 12px | 2px dashed teal 20% |
| Icon tile | 12px | 1px orange 25% |
| Buttons, inputs, selects, nav items, tabs, capability chips | 8px | 1px where outlined |
| Tags | 6px | 1px teal 20% |
| Hero chips, HOT/NEW badges, dots, the "+" circle | full | 1px teal 20–30% where outlined |
| Section bands, header, footer, tickers | 0 | 1px top/bottom hairlines (teal 8–10%, orange 15% on orange tickers) |
| Service detail sections | — | 2px left border, teal (low opacity) |

There are no sharp-cornered cards and no thick borders. Hover replaces the border color
(teal 45%) and adds a soft outer glow; it does not change the width.

## Buttons

| Variant | Spec | Used for |
| --- | --- | --- |
| **Solid** (exact) | Teal fill, `#121212` label; Rajdhani Bold 13/19.5, tracking 1.56px, uppercase; padding 32px × 14px; radius 8px. Hover: teal 85% + shadow `0 0 20px rgba(80,201,185,0.35)`. Has a full-width form. | Book Free Consultation, Book a Free Assessment, Get in Touch, Contact Us, Send Message, Submit Application |
| **Outline** (exact) | 1px teal border, teal label; JetBrains Mono 12/16, tracking 1.2px, uppercase; padding 20px × 8px; radius 8px. | Header "Get Assessment" |
| **Outline, large** (visual) | Same shape as Solid but with a teal border and teal label on a transparent fill. | Company "Join Our Team" |
| **Accent outline** (exact) | 1px border and label in the row accent; JetBrains Mono 12/16, tracking 1.2px, uppercase; padding 24px × 12px; radius 8px; 16px arrow after an 8px gap. | Service row "Learn More →" |
| **Apply** (visual) | Outline in teal (softer border), mono 12px uppercase label with arrow. | Job row "Apply Now →" |
| **Text link** (exact) | JetBrains Mono 12/16, tracking 1.2px, teal, optional 16px arrow. "VIEW DETAILS" is shown at 60% opacity in the row accent. | Learn About Us, View Details, ← All Services |
| **Nav item** (exact) | Mono 12/16 uppercase `#aaa`, padding 16px × 8px, radius 8px. Active: teal on teal 8%. | Header links |
| **Tab** (exact) | Mono 12/16 uppercase, padding 24px × 10px, radius 8px. Active: teal fill, `#121212` label. Inactive: `#aaa`, no fill. | Knowledge Centre tabs |
| **Tile button** (exact) | Dashed 2px teal 20% border, radius 12px; 40px circle with a 20px plus; "All Services" (Rajdhani SemiBold 18, teal); caption (Inter 12, white 60%). | Home "All Services" |

### Tags and chips

| Variant | Spec |
| --- | --- |
| **Tag** (exact) | Teal 5% fill, 1px teal 20% border, radius 6px, padding 10px × 4px; mono 11/16.5, tracking 1.1px, uppercase, teal 75%. Service categories, article categories, departments, footer frameworks, standards covered. |
| **Hero chip** (exact) | `#252525` 50% fill, 1px teal 20% border, fully rounded, padding 16px × 8px; mono 14/20, tracking 0.35px, white 70%. They are buttons in the source. |
| **Capability chip** (exact) | Accent 5% fill, 1px white 5% border, radius 8px, padding 12px × 6px; 6px accent dot; Inter 14/20, `#aaa`. |
| **Badge** (visual) | Solid orange pill, dark mono label ("HOT", "NEW"). |
| **Status dot** | 8px orange circle (footer); 6px bullets (lists, chips); 16px orange timeline dot. |

## Cards

All cards share: `#252525` fill, 1px teal 15% border, 14px radius. On hover the border goes
to teal 45% with a `0 0 12px rgba(80,201,185,0.15)` glow (exact, from node `1001:509`).

| Card | Content and specifics |
| --- | --- |
| **Framework card** | 2px × 32px teal accent line (widens to 48px on hover — exact); code in Rajdhani Bold 20 teal; name in Inter 14 white 80%. Padding 20px. |
| **Sector card** | As above in orange, plus "SECTOR TAG" (mono 12, orange 50%) pinned to the bottom. |
| **Service card** (Home) | Tag + arrow row; title Rajdhani SemiBold 20 white; description Inter 14 white 75%. Padding 24px. Hover: title and arrow turn teal. |
| **Edge card** (Home) | 2px × 24px orange line; title Rajdhani SemiBold 16; description Inter 12 white 75%. |
| **Service row** (Services) | Header strip (accent gradient, 4px accent side bar, index, category, name, "VIEW DETAILS →") + body (icon tile, 24px title, description max 672px, capability chips, "LEARN MORE →"). `overflow-hidden`. |
| **Sidebar card** (Service Detail) | Mono teal heading; orange-bulleted list or a tag cluster. Padding 24px. |
| **Engage card** | Darker fill (≈ teal 4% over the page background), orange mono heading, text, full-width solid button. Radius 12–14px. |
| **Next-service card** | Mono `#aaa` label "NEXT SERVICE", name in Rajdhani SemiBold 16, arrow. Hover: name and arrow teal, border glow. |
| **Article row** | Icon tile; tag, date, read time; title Rajdhani SemiBold 18; excerpt Inter 14 `#aaa`; arrow top right. Hover: title and arrow teal. |
| **Benefit card** (Career) | Index (mono 12, dim teal) followed by a hairline that fills the row; title Rajdhani SemiBold 18; description Inter 14 `#aaa`. |
| **Job row** | Icon tile; department tag + optional badge; title Rajdhani SemiBold 20; pin icon + locations and type (mono 12 `#aaa`); "APPLY NOW →". ~117px tall. Hover: title teal. |
| **Statement card** (Company) | Accent line; mono label (teal for Mission, orange for Vision); heading Rajdhani Bold 30/36; body Inter 16/26 `#aaa`. Padding 32px. |
| **Value card** (Company) | Index (mono, dim teal); teal accent line; title Rajdhani SemiBold 18; description Inter 12–13 `#aaa`. |
| **Office card** (Contact) | City Rajdhani SemiBold 18 + country (mono 12 teal, right-aligned); address Inter 12 `#aaa`; email mono 12 teal; phone mono 12 `#aaa`. |
| **Response-time card** | Mono teal heading; two lines with an orange and a teal dot. |
| **Security-disclosure card** | Orange-tinted fill and border; orange mono heading; text; teal mono email link. |
| **Form card** | See [Forms](#forms). |

## Forms

Two forms, same components.

**Field anatomy (exact sizes from the PDFs):**

- Label: JetBrains Mono 12px, tracking 1.2px, uppercase, `#aaa`; required fields end with
  ` *`. ~8px above the control.
- Input: 47px tall, `#1a1a1a` fill, 1px teal ~15% border, 8px radius, 16px horizontal
  padding. Value in Inter 14px; placeholder `#888` at 50%.
- Select: same box; shows "Select a …" in Inter 14px, `#f0f0f0`. The closed state is all
  that is designed.
- Textarea: same styling, ~110–120px tall.
- Rows are ~20px apart; paired fields sit in two equal columns with a 16px gap.
- Submit: full-width solid button.
- Form card hover: border glow like any card.

**Contact form** (card heading "CONTACT FORM", mono teal):

| Field | Type | Required | Placeholder |
| --- | --- | --- | --- |
| First Name / Last Name | text (paired) | yes / yes | Rahul / Gupta |
| Business Email / Phone Number | email / tel (paired) | yes / no | r.gupta@oem.com / +49 160 1234 5678 |
| Company / Job Title | text (paired) | yes / no | Automotive OEM GmbH / VP Cybersecurity |
| Service of Interest | select | no | Select a service |
| Message | textarea | yes | Describe your project, regulatory timeline, and specific challenges you want to address... |

Button "SEND MESSAGE". Footnote below it: "All communications are handled under strict
confidentiality." (mono 12px, `#aaa` 40%, centered).

**Career form** (no card heading):

| Field | Type | Required | Placeholder |
| --- | --- | --- | --- |
| First Name / Last Name | text (paired) | yes / yes | Aditya / Sharma |
| Email Address | email | yes | aditya@email.com |
| Phone Number | tel | no | +91 98765 43210 |
| LinkedIn Profile | text | no | linkedin.com/in/yourname |
| Role of Interest | select | no | Select a role |
| Years of Experience | select | no | Select experience level |
| Cover Note / Message | textarea | no | Tell us about your background, what motivates you, and what you are looking for... |
| Resume / CV Link | text | no | https://drive.google.com/... or portfolio URL |

Button "SUBMIT APPLICATION".

**Not designed:** focus, filled, error, disabled, loading and success states; open select
menus; validation messages. Proposal consistent with the system: focus = teal border +
soft teal glow; error = orange border with an orange mono message under the field;
submitting = button disabled with a changed label; success = an inline confirmation inside
the card. Confirm before Phase 5.

## Responsive Behavior

**Everything in this section is inferred.** The source uses Tailwind's responsive
utilities (layers named `div.hidden` wrap the desktop navigation and the header CTA, which
means they are hidden below a breakpoint), but the small-screen layouts were not captured.

Breakpoints: Tailwind defaults — `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.

### Principles

1. The 1280px design is the reference. At `xl` and above, match it exactly.
2. Above 1280px the container stays 1280px and centered; full-bleed bands stretch.
3. Below `lg`, multi-column layouts collapse progressively; nothing is removed.
4. Typography scales only for the large display headings.
5. Cards keep their padding, radius, borders and hover behaviour at every size.
6. No horizontal scrolling of the page. Tickers and the tab bar may scroll inside themselves.

### By component

| Component | ≥1024 (`lg`) | 768–1023 (`md`) | <768 |
| --- | --- | --- | --- |
| Header | Logo · links · CTA | Logo · hamburger | Logo · hamburger |
| Mobile navigation | — | Panel under the header listing the six links, the services as an expandable group, and the CTA | Same, full width |
| Home hero | As designed | Smaller headline; chips wrap | Headline ~48px; chips wrap to 3–4 rows; height follows content |
| Framework grid | 5 columns | 3 columns | 2 columns |
| Service cards (Home) | 3 columns | 2 columns | 1 column |
| "Why choose" band | Text left, 2 × 2 cards right | Stacked; cards 2 × 2 | Stacked; cards 1 column |
| Service row | Header strip in one line; button at right | Name in the strip may truncate; button at right | Strip keeps index + category + "VIEW DETAILS"; body stacks; button under the chips |
| Service Detail body | Content + 377px sidebar | Stacked: content, then sidebar cards in 2 columns | Stacked, 1 column |
| Knowledge Centre tabs | Left-aligned row, sticky | Same | Same; scrolls horizontally if needed |
| Article row | One line of metadata | Same | Metadata wraps; arrow stays top right |
| Benefit cards | 3 columns | 2 columns | 1 column |
| Job row | Button at right | Button at right | Button under the metadata, full width |
| Career form | 768px centered | Full width | Paired fields stack |
| Mission / Vision | 2 columns | 2 columns | 1 column |
| Core values | 4 columns | 2 columns | 1 column |
| Timeline | Year · dot · text | Same | Same with tighter gaps; text wraps |
| Contact body | Form + 377px sidebar | Stacked: form, then side cards in 2 columns | Stacked, 1 column |
| CTA bands | Centered; buttons in a row | Same | Buttons stack, full width |
| Footer | 4 columns | 2 × 2 | 1 column; bottom bar stacks |
| Tickers | Continuous scroll | Same | Same |

### Images

Hero media uses `object-cover`, anchored so the vehicle's wheel and body stay visible on
narrow screens. No other raster images appear in the design.

## Animation / Interaction Requirements

### Documented in the component sheets (exact or visually confirmed)

| Element | Hover behaviour |
| --- | --- |
| All cards and rows | Border → teal 45%; glow `0 0 12px rgba(80,201,185,0.15)` |
| Framework and sector cards | Accent line grows from 32px to 48px |
| Service card, article row, job row, next-service card | Title turns teal; arrow turns from white to teal |
| Service row | Glowing border; title takes the highlight color; "VIEW DETAILS" goes to full opacity |
| Solid button | Fill → teal 85%; glow `0 0 20px rgba(80,201,185,0.35)` |
| Form card | Border glow |

Transition timing is not specified. Proposal: 200–300ms ease on color, border, shadow and
width.

### Inferred from structure

- **Tickers** — the item strip is 4,600–6,800px wide inside a 1276px clip with faded
  edges, so it scrolls continuously (marquee). Direction and speed are unknown; default:
  right-to-left, ~40s per loop, paused under `prefers-reduced-motion`.
- **Header** — fixed with a blurred translucent background; content scrolls under it.
- **Knowledge Centre tab bar** — sticky below the header (its layer is `div.sticky`), with
  the same blurred background.
- **Services menu** — opens from the "SERVICES" nav item (chevron). Appearance not designed.
- **Tabs** — switch the list below without a page load; whether the tab is reflected in
  the URL is undecided.
- **Service rows** — the brief mentions "expanding service rows". The design shows every
  row fully open and there is no collapsed state, so rows are not accordions.
- **Apply Now** — scrolls to the application form and preselects the role.
- **Page change** — scroll resets to the top (already wired with `ScrollRestoration`).

### Present in the Make source but not visible in the design

`AnimatedBackground`, `AnimatedBanner`, `RadarAnimation`, `LogoCircleWatermark`, and the
`Car.mp4` hero video. Their look and motion cannot be recovered from static PDFs. They
are **not** to be invented; they need the Make code or a recording.

### Not present

No scroll-triggered reveals, parallax, page transitions or accordions are evidenced.
Do not add them unless requested.

## Asset Requirements

Nothing has been downloaded into `public/` yet. Everything below is either exportable from
the Figma copy or still missing.

| Asset | Where it appears | Target path | Status |
| --- | --- | --- | --- |
| Shield logo mark (SVG) with "X" | Header, footer | `public/logos/securexmotive-shield.svg` | **Added in Phase 2** (Figma export). One file serves both sizes; the "X" is live Rajdhani text. |
| Wordmark | Header, footer | — | Not an image: live text "secureXmotive". |
| `Logo.png`, `Text.png` | In the Make project | `public/logos/` | In the Make file list; not retrievable here. Purpose unconfirmed. |
| Hero vehicle image | Home hero | `public/images/home/` | Exportable from Figma (node `1001:1222`). |
| Hero video `Car.mp4` | Home hero (probably) | `public/images/home/` | PLACEHOLDER_ASSET — in the Make project, not retrievable here. |
| Favicon / app icons | Browser tab | `public/` | PLACEHOLDER_ASSET — not in the design. The shield mark is used as a temporary favicon. |
| Open Graph share image | Link previews | `public/images/` | PLACEHOLDER_ASSET — not in the design. |
| Icons: arrow right, arrow left, plus, chevron down, shield-check, map pin | Throughout | `src/components/common/icons.tsx` | Arrow, chevron and shield-check **added in Phase 2** from the Figma exports (they are not Lucide glyphs, so no icon library is used). Plus and map pin are added with the pages that use them. |
| Article images, video thumbnails, report covers | Knowledge Centre | `public/images/knowledge/` | Not in the design (article rows have no imagery). Needed only if Videos/Reports get thumbnails. |
| Service, career and company images | — | `public/images/{services,careers,company}/` | None in the design. Folders exist for future use. |
| Fonts | Global | — | Loaded from Fontsource packages. `public/fonts/` stays empty unless brand font files are supplied. |

The design is almost entirely typographic: the Home hero is the only photographic or video
element on the site.

## Reusable Component Inventory

Identified only — none of these are implemented yet.

### Layout (`components/layout/`)

| Component | Notes |
| --- | --- |
| `RootLayout` | Exists as a shell; receives Header and Footer in Phase 2. |
| `Header` | Fixed bar: Logo, DesktopNav, CTA, mobile toggle. |
| `DesktopNav` / `NavItem` | Active state from the router. |
| `ServicesMenu` | Dropdown under "Services". |
| `MobileNav` | Hamburger + panel. |
| `Footer` | Brand column, link columns, frameworks, bottom bar. |
| `Container` | `max-w-7xl px-6` wrapper with size variants. |

### Common (`components/common/`)

| Component | Used on |
| --- | --- |
| `Logo` (mark + wordmark + tagline, two sizes) | Header, footer |
| `Button` (solid, outline, accent-outline; link or button; full-width) | Everywhere |
| `TextLink` (mono link with optional arrow) | Home, Services, Service Detail |
| `Eyebrow` | Every section |
| `SectionHeading` (eyebrow + two-tone heading + rule; sizes for Home and inner pages; left or centered) | Every section |
| `GradientLine` (or the `gradient-line` utility) | Headings, footer |
| `PageHero` (eyebrow, title, rule, intro, background wash) | Services, Knowledge Centre, Career, Company, Contact |
| `Tag` | Services, articles, jobs, footer, standards |
| `Badge` (HOT / NEW) | Jobs |
| `FrameworkChip` (hero pill) | Home hero |
| `Ticker` (orange and grey tones, separator glyph) | Home, Services, Career, Company |
| `Card` (base surface with hover glow) | Base of every card |
| `AccentLine` | Framework, edge, statement and value cards |
| `IconTile` | Service rows, article rows, job rows |
| `CtaBand` (heading, text, one or two buttons) | Services, Company |
| `BulletList` (orange dots) | Service Detail deliverables |
| Form primitives: `FormField`, `TextInput`, `Select`, `Textarea` | Contact, Career |
| Icons | Everywhere |

### Page sections

| Folder | Components |
| --- | --- |
| `home/` | `HomeHero`, `FrameworkGrid` + `FrameworkCard` + `SectorCard`, `ServicesPreview` + `ServiceCard` + `AllServicesTile`, `WhyChoose` + `EdgeCard`, `HomeCta` |
| `services/` | `ServiceRow`, `CapabilityChip`, `ServiceDetailHero`, `ServiceSection`, `DeliverablesCard`, `StandardsCard`, `EngageCard`, `NextServiceCard` |
| `knowledge/` | `KnowledgeTabs`, `ArticleRow`, `ArticleList`, `ArticleBody`, `VideoCard`, `ReportCard` |
| `careers/` | `BenefitCard`, `JobRow`, `ApplicationForm` |
| `company/` | `StatementCard`, `ValueCard`, `Timeline` + `TimelineItem` |
| `contact/` | `ContactForm`, `ResponseTimeCard`, `OfficeCard`, `SecurityDisclosureCard` |

## Data Architecture

Static content is typed and lives in `src/data/`. It has already been transcribed from
the design.

| File | Exports | Complete? |
| --- | --- | --- |
| `services.ts` | `serviceDomains`, `getServiceDomain`, `getNextServiceDomain` | Five domains, 19 services, all technical points (client-supplied in Phase 4). `summary`, `tagline` and `intro` are `CONTENT_PENDING`. |
| `frameworks.ts` | `frameworks`, `footerFrameworkCodes`, `sectorFocus` | Yes |
| `articles.ts` | `articles`, `getArticleBySlug` | Listing data for six articles. Bodies `CONTENT_PENDING`. |
| `videos.ts` | `videos` | Empty by design — backend-driven. |
| `reports.ts` | `reports` | Empty — `CONTENT_PENDING`. |
| `careers.ts` | `benefits`, `jobs`, `roleOptions`, `experienceOptions` | Yes, except `experienceOptions` (`CONTENT_PENDING`). |
| `offices.ts` | `offices`, `responseTimes`, `securityDisclosure` | Yes |
| `company.ts` | `companyIntro`, `statements`, `coreValues`, `timeline` | Yes |
| `tickers.ts` | `tickers` (seven lists) | Yes |
| `navigation.ts` | `primaryNav`, `headerCta`, `legalNav`, `footerTagline` | Yes |

Types are in `src/types/` (`service`, `article`, `career`, `video`, `contact`, `company`).

Section-level copy that appears once (headings, intros, CTA text) can stay in the section
component; anything that is a list, is reused, or may later come from the backend belongs
in `src/data/`.

### Static vs backend-connected

| Stays static | Connects to the backend later |
| --- | --- |
| Navigation, footer, frameworks, tickers | Contact form submission |
| Services listing and detail content | Career application submission (and resume, see gap 7) |
| Company content, offices | Knowledge Centre videos |
| Benefits | Possibly later: jobs, articles, reports (static for now) |
| Articles (static for now) | |

`getNextService` wraps from the fifth service back to the first — the design only shows
01 → 02, so the wrap is inferred.

## Routing Architecture

React Router 8 data router, defined in `src/routes/router.tsx`. One root route renders
`RootLayout`; every page is a lazy-loaded child, so each page ships as its own chunk.

| Path | Page | Phase |
| --- | --- | --- |
| `/` | `Home` | 3 |
| `/services` | `Services` | 4 |
| `/services/:serviceSlug` | `ServiceDetail` | 4 |
| `/knowledge-centre` | `KnowledgeCentre` | 6–7 |
| `/knowledge-centre/articles/:slug` | `ArticleDetail` | 6 |
| `/careers` | `Careers` | 6 |
| `/company` | `Company` | 5 |
| `/contact` | `Contact` | 5 |
| `/privacy-policy` | `PrivacyPolicy` | 5 |
| `/terms-of-service` | `TermsOfService` | 5 |
| `/security-disclosure` | `SecurityDisclosure` | 5 |
| `*` | `NotFound` | 2 |

Service slugs: `automotive`, `agriculture`, `off-highway`, `commercial`, `industrial-ot`
(one page per domain; the services inside a domain are anchored sections).

Paths are centralised in `src/routes/paths.ts`. Unknown service or article slugs should
render the Not Found page. The site is a client-rendered SPA, so the host must serve
`index.html` for every path.

## Backend Integration Boundary

- The backend is a separate project. This repository contains no backend code and does not
  modify it. No admin UI is part of these seven phases.
- `src/services/api.ts` is the only place that calls `fetch`. It reads
  `VITE_API_BASE_URL`, sends JSON (or multipart for `FormData`), and throws `ApiError`.
- `contactService`, `careerService` and `videoService` wrap one endpoint each.
- `useContactForm` and `useCareerForm` own form state and validation and call the service
  on submit. `useVideos` loads the published videos, with loading, error and retry.
- **Provisional, to verify against the real backend:** endpoint paths, request field
  names, response shapes (including whether the video list is wrapped in an envelope),
  the dev port (`5000` in `.env`), CORS, and how resumes are sent.
- All three calls are written and switched off by `VITE_ENABLE_API`. While it is off the
  site makes no network request. In Phase 7 each call was exercised against a throwaway
  local mock (success, server error, slow, empty and wrong-shape responses), never
  against a real backend.

## Potential Technical Challenges

1. **No responsive design.** The largest risk to "exactness": mobile and tablet layouts
   will be judgement calls unless frames are provided.
2. **Missing content.** Four service detail pages, all article bodies, legal pages, videos
   and reports have no copy.
3. **Undesigned pages and states.** Article Detail, legal pages, 404, Videos/Reports tabs,
   mobile menu, services dropdown, form states.
4. **128px hero headline.** Needs careful fluid scaling so it never overflows; the
   per-line gradient uses `background-clip: text`.
5. **Hero media.** Video vs image, file weight, poster, reduced-motion fallback, and
   keeping the text contrast the overlay provides.
6. **Tickers.** Seamless looping requires duplicating the list and animating by exactly
   half; must be decorative for assistive tech (`aria-hidden`) and respect reduced motion.
7. **Dynamic accent colors.** Service rows switch among five accents. Tailwind cannot see
   class names built at runtime — use a static accent → class map or CSS variables.
8. **Sticky tab bar under a fixed header.** Offsets must line up; anchor targets need
   `scroll-margin-top`.
9. **Capture artifacts.** Fractional values (0.667px, 19.667px) and absolutely positioned
   chips in the Figma output must be translated into clean flex/grid layouts, not copied.
10. **Glow on hover.** Figma uses `drop-shadow` on cards and `box-shadow` on buttons; use
    the two tokens provided so it stays consistent.
11. **Accessibility on a dark, low-contrast palette.** `#aaa` on `#252525` passes AA for
    body text; teal 75% tag text at 11px and white 10% index numerals are decorative and
    need care. Focus states are not designed and are required.
12. **Backend contract unknown.** Integration cannot be finalised until the backend is
    available.
13. **Animated elements in the Make source** (gap 10) that cannot be seen in the PDFs.

## Implementation Plan for Prompts 2–7

Each phase starts by fetching the relevant Figma nodes and ends with `npm run build` and
`npm run lint` passing and a visual check against the PDF at 1280px.

### Phase 2 — Global / common components (done)

Outcome and the decisions taken are recorded in CLAUDE.md ("Shared components"). Measured
against the PDF at 1276px: header 64px, logo 174 × 34, nav items within 1px of the design,
footer columns at the design's x-positions, footer tint matching the PDF's pixel profile.
Original plan, for reference:

- `Container`, `Logo`, icon strategy (Lucide vs exported SVG), `Button` (all variants),
  `TextLink`, `Eyebrow`, `SectionHeading`, `GradientLine`, `Tag`, `Badge`, `FrameworkChip`,
  `Card`, `AccentLine`, `IconTile`, `Ticker`, `PageHero`, `CtaBand`.
- `Header` with desktop navigation, active states, the Services menu, and the CTA.
- `MobileNav` (hamburger + panel) — derived design.
- `Footer`, including the warm bottom tint.
- `RootLayout` wired with header, footer and the header offset.
- `NotFound` page (derived design).
- Per-page document titles.
- Export and add the logo mark and icons.
- Global hover/transition conventions and responsive container behaviour.
- **Added to this phase:** 404 page, page titles, icon decision, asset export — not in the
  original list but nothing else covers them.

### Phase 3 — Home, Company, Contact (done)

The user combined Home with the Company and Contact pages. Checked against the PDFs at
1276px: section positions are within 3px on Home and Company and within 6px on Contact
(the differences are 1px borders that the design capture drew thinner). The hero gradient
matches the PDF's colours to within 2 RGB units. Form primitives were built here.
Privacy Policy and Terms of Service were not part of this phase and remain stubs.
Original plans, for reference:

#### Home

Hero (image or video per decision), framework grid with sector card, both tickers,
service cards with the "All Services" tile, "Why choose" band, closing CTA; responsive
behaviour for all of it. Remove the Home stub.

### Phase 4 — Services (done)

Built with the client's five-domain content on the designed templates. Row and sidebar
geometry was taken from the PDFs' vector data (Figma was unavailable): the row header,
icon tile, title, chips, button and sidebar cards sit within 1–2px of the design. Page
heights differ from the PDFs because the content is different. All 19 services and their
59 technical points were checked on their pages. Original plan, for reference:

Services listing (hero, five accent-colored rows, ticker, CTA band) and the Service Detail
template (hero, sections, deliverables, standards, engage card, next-service card), slug
routing with a not-found fallback, navigation between services. **Needs the content for
services 02–05** (gap 4) and a decision on the risk-row chip dots (gap 13).

### Phase 5 — Company, Contact, legal pages

Company and Contact were delivered in Phase 3. The legal pages are still outstanding.

Company (hero, mission/vision, ticker, core values, ticker, timeline, CTA with two
buttons). Contact (hero, form with validation and all states, response-time card, office
cards, security-disclosure card). Form primitives are built here and reused in Phase 6.
**Added to this phase:** Privacy Policy and Terms of Service pages alongside Security
Disclosure — they are linked from the footer and were otherwise unassigned. **Needs** the
legal copy and a decision on form states.

### Phase 6 — Careers and Knowledge Centre articles (done)

Checked against the PDFs at 1276px: Careers sections sit within 2px until the job list
(seven rows each about 1px taller), the form's height matches exactly, and the Knowledge
Centre tab bar and first article row are on the design's positions. Original plan, for
reference:

Careers (hero, benefits, ticker, job rows with badges, ticker, application form with
validation, "Apply Now" → form with role preselected). Knowledge Centre article listing
(hero, tab bar with Articles active, article rows) and Article Detail (derived layout,
routing, content structure). **Needs** a decision on resume link vs file upload (gap 7),
the experience-level options, and article body copy.

### Phase 7 — Complete Knowledge Centre and final polish (done)

Outcome: Reports and Videos tabs, legal page shells, `PagePlaceholder` removed, and a
whole-site QA pass — every route at 375, 390, 480, 640, 768, 1024, 1280, 1440 and 1600px
(no horizontal overflow, one `h1`, no skipped heading levels, no unnamed controls, no
unlabelled fields, no console output), every internal link, both forms in preview mode
and against a local mock, the mobile menu, tab and dropdown keyboard behaviour, reduced
motion, and the production build. Results and what remains are in FRONTEND_STATUS.md.
Not done because nothing was supplied: card designs, report and video content, legal
copy, and the backend contract check. Original plan, for reference:

Videos tab (cards, player or link-out, loading/empty/error states, backend integration
through `videoService`), Reports tab (cards, download), tab switching and any
search/filter (none is designed), final responsive pass on every page, accessibility pass
(keyboard, focus, contrast, reduced motion), removal of `PagePlaceholder`, verification of
API contracts for the contact and career forms if the backend is available by then.
**Needs** designs or direction for video and report cards.

### Open decisions to settle before the relevant phase

| Decision | Needed by |
| --- | --- |
| Mobile / tablet designs, or approval of the derived behaviour | Phase 2 |
| Services dropdown and mobile menu appearance | Phase 2 |
| Access to the Figma Make source code (export as a zip into `design/`) | Phase 2–4 |
| Hero: video or still image | Phase 3 |
| Content for service detail pages 02–05 | Phase 4 |
| Additional sectors beyond Automotive | Phase 3–4 |
| Legal page copy; form state styling | Phase 5 |
| Resume link vs upload; experience options; article bodies | Phase 6 |
| Video and report card designs; backend availability | Phase 7 |
