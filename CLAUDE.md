# SecureXmotive Frontend

Marketing website for **SecureXmotive**, a cybersecurity company for connected vehicles
and adjacent industrial sectors. Professional, technical, premium, B2B.

This file holds the permanent rules for every session. The full design write-up is in
[design-analysis.md](design-analysis.md) — read the relevant section before building anything.
What is finished, what is still a placeholder and what a deployment needs is in
[FRONTEND_STATUS.md](FRONTEND_STATUS.md) — keep it true when either changes. The final
quality-control pass (what was compared with Figma, what was fixed, what is still open)
is in [FRONTEND_QA_REPORT.md](FRONTEND_QA_REPORT.md).

## The one rule

> Do not make visual/design decisions that contradict the provided Figma/PDF unless
> explicitly instructed by the user.

The job is **implementation, not redesign**. The design already exists. Reproduce it as
closely as possible. If something looks unusual, keep it unusual. If something is unclear
or missing, document it and ask — never fill the gap with a generic "cybersecurity
template" look.

## Design source of truth

| Source | Where | Status |
| --- | --- | --- |
| Design PDFs | `design/*.pdf` (14 files, **not in git** — the repository is public, so they are kept locally and ignored) | Primary visual reference. `1.pdf`, `2-1` … `7-1.pdf` are the pages at 1280px; `01.pdf`, `2` … `7.pdf` are component sheets showing default vs hover states. |
| Figma design file | file key `tLtxRAMuUBzIspHsHotTZX` ("1 (Copy)") | Accessible through the Figma MCP. Exact values (colors, sizes, spacing). Node IDs per page are listed in design-analysis.md. |
| Figma Make project | file key `5j9R8zfC6rEPzRtzVeM0IZ` | File list is visible; file contents were **not** readable with the tools available in Phase 1. |
| Original Figma file | file key `pyPcynZh8a8hPqISvFFu9M` | **No access** through the Figma MCP (needs edit rights). |
| Figma prototype | `figma.com/proto/pyPcynZh8a8hPqISvFFu9M/1?node-id=1001-1002` | **Publicly viewable, no login.** 37 frames: the 7 pages and 30 default/hover component sheets — the same design as the PDFs, rendered by Figma. The pixel reference. |

The PDFs and the Figma copy are the same design (the PDFs are exports of its sections), so
they do not disagree. If they ever do: document it, prefer Figma when it is clearly newer,
otherwise keep the PDF.

When implementing a section, fetch that node with the Figma MCP (`get_design_context`) and
compare against the PDF — do not work from memory of the design.

The Figma account is on the Starter plan and its MCP call allowance ran out during
Phase 3. When Figma refuses, read the exact values from the PDFs instead: they are vector
files, so PyMuPDF's `page.get_drawings()` gives every box with its position, size, fill and
opacity, and `page.get_text("dict")` gives every text run with its position and size —
all 1:1 with CSS pixels (subtract the 100px page margin). Only font family and weight are
missing, and those follow the roles in Typography.

Two traps in the PDFs, both found by checking against the prototype's pixels:

- **A bordered element is drawn as two boxes, and the outer one is not its size.** The
  border-coloured box is 1px larger on every side than the element; the element is the
  inner box (or, for a transparent element, the outer box minus 2px). Sizing from the
  outer box makes things 1–3px too big.
- **Group opacity is invisible.** A link at 60% opacity reads as 100% in
  `get_drawings()`. Colours in the vector data are upper bounds; confirm faded text
  against the prototype render.

**Only desktop (1280px) is designed.** There are no tablet or mobile frames, no open mobile
menu, no open Services dropdown. Responsive behaviour is derived (see design-analysis.md)
and must stay visually consistent with the desktop design.

**Not designed at all:** Article Detail, Privacy Policy, Terms of Service, Security
Disclosure page, Knowledge Centre "Videos" and "Reports" tabs, the 404 page, the mobile
menu and the Services dropdown. All of these now exist, built only from existing
components and tokens — see "Derived, not designed" below. If designs for them arrive,
the designs win; until then do not elaborate them further without asking.

## Technology

- Vite 8 · React 19 · TypeScript 6 (strict) · TSX
- Tailwind CSS v4 via `@tailwindcss/vite`
- React Router 8 (`react-router`, data router)
- Fonts self-hosted through Fontsource packages
- Lint: `oxlint`

No UI component framework (no Material UI, Bootstrap, shadcn, etc.). All UI is our own
components + Tailwind. Add a dependency only when it is genuinely necessary. No icon
library is installed: the design's icons are exported Figma vectors kept as small React
components in `src/components/common/icons.tsx` — add new icons there the same way.

```bash
npm run dev        # dev server (http://localhost:5173)
npm run build      # type-check + production build
npm run typecheck  # type-check only
npm run lint       # oxlint
```

## Backend boundary

A separate backend exists (Node.js, Express, Prisma, PostgreSQL/Neon, JWT, AWS S3 for
resumes). It is expected at `../backend` but was **not present on this machine** during
Phase 1.

- Never create, modify, or recreate backend code. No database logic in this repo.
- No admin dashboard in this frontend.
- All HTTP goes through `src/services/api.ts` (`apiRequest`). Components never call `fetch`.
- `API_ENDPOINTS` in `api.ts` and the payload/response types are **provisional guesses**.
  Verify them against the real backend before switching the API on.
- Base URL comes from `VITE_API_BASE_URL` (`.env`, template in `.env.example`).
- `VITE_ENABLE_API` is the single switch. While it is not `true` the site makes **no
  network requests at all**: forms run in preview mode and the Videos tab shows its empty
  state. With it on, three calls exist — `POST /api/contact`, `POST
  /api/careers/applications` (multipart) and `GET /api/videos`.
- Public endpoints only. No admin routes, no auth headers, no tokens, nothing stored in
  the browser. Every `VITE_` variable is public in the built files — never put a secret
  in one.
- Error messages shown to visitors are fixed strings. Never render a server message,
  status code, URL or stack trace.

## Design system

Tokens live in the `@theme` block of [src/index.css](src/index.css). Tailwind v4 is
CSS-first, so there is **no `tailwind.config.ts`** — add or change tokens in `index.css`.

### Color

| Token | Value | Use |
| --- | --- | --- |
| `cyber-bg` | `#121212` | Page background |
| `cyber-surface` | `#252525` | Cards, footer |
| `cyber-field` | `#1a1a1a` | Inputs, selects, textareas |
| `cyber-teal` | `#50c9b9` | Primary accent: highlights, borders, links, solid buttons |
| `cyber-orange` | `#ff6700` | Secondary accent: accent lines, bullets, icon tiles, badges |
| `cyber-muted` | `#aaaaaa` | Secondary text |
| `cyber-placeholder` | `#888888` | Placeholder text (at 50%) |
| `accent-yellow` / `accent-red` / `accent-purple` | `#fdc700` / `#ff6467` / `#c27aff` | Services rows 03–05 (rows 01–02 use teal and orange) |

The design gets its depth from **opacity steps of these few colors**, not from extra
colors. Use Tailwind's slash syntax (`border-cyber-teal/15`, `bg-cyber-teal/5`,
`text-white/80`). Common steps — teal: 5, 8, 10, 15, 20, 30, 45, 75; white text: 60, 70,
75, 80, 85; surface: 30, 50, 60.

### Typography

| Utility | Family | Role |
| --- | --- | --- |
| `font-display` | Rajdhani (600, 700) | Headings, card titles, logo wordmark, solid-button labels |
| `font-body` | Inter (400; italic for the service tagline) | Paragraphs, descriptions, form values |
| `font-code` | JetBrains Mono (400, 500, 600, 700) | Eyebrow labels, nav, tags, tickers, metadata, outline buttons |

Fonts are verified against the Figma variables. They are loaded in `src/main.tsx` from
Fontsource (self-hosted, bundled by Vite). `public/fonts/` is reserved for font files the
client supplies later; nothing loads from it today. Do not substitute fonts.

Sizes follow Tailwind's default scale (12, 14, 16, 18, 20, 24, 30, 36, 60, 96, 128px) plus
three custom ones: `text-3xs` (8px), `text-2xs` (11px), `text-btn` (13px). Body copy uses
`leading-relaxed`. Tracking: mono labels `tracking-widest`, Rajdhani titles `tracking-wide`,
large headings `tracking-tight`, solid buttons `tracking-button`.

### Shape and effects

- Cards: `rounded-card` (14px), `bg-cyber-surface`, `border border-cyber-teal/15`.
- Buttons, inputs, nav items, tabs: `rounded-lg` (8px). Tags: `rounded-md` (6px).
  Icon tiles: `rounded-xl` (12px). Hero chips and badges: `rounded-full`.
- Hairlines are 1px. (Figma shows 0.667px — an artifact of how the file was captured.)
- Hover on a card: border becomes `cyber-teal/45` + `drop-shadow-glow`; titles and arrows
  turn teal. Hover on a solid button: `bg-cyber-teal/85` + `shadow-glow`.
- `gradient-line`: the thin teal rule that fades at both ends (under headings, in footer).
  Use the `Divider` component rather than the utility directly.

### Motion

- `transition-*` utilities default to 200ms (`--default-transition-duration`). Cards use
  `duration-300` for the glow. The design specifies no timings; these are the convention.
- Hover means "turn teal": borders brighten, titles and arrows go teal, solid buttons dim
  slightly and glow. No movement, scaling or scroll-triggered effects — none are designed.
- The only continuous animation is the ticker (`animate-marquee`, CSS only).
- `prefers-reduced-motion` is honoured globally in `index.css`; the ticker also stops.

### Layout

- Horizontal alignment always comes from `Container` (`page` 1280px, `wide` 896px,
  `narrow` 768px), each with 24px gutters. Do not hand-write `max-w-7xl mx-auto px-6`.
- Every page renders `PageContainer` at its root: it clears the fixed 64px header, keeps
  the page a viewport tall and sets the tab title. Inner pages leave the 16px strip the
  design shows between header and hero (`pt-20`); Home passes `flush` (`pt-16`).
- Full-bleed bands (hero, tickers, tinted sections, footer) span the viewport; their
  content sits in a `Container`.

### Breakpoints

Tailwind defaults (`sm` 640, `md` 768, `lg` 1024) plus one custom breakpoint, `nav`
(1100px), below which the desktop navigation tightens its padding.

- `lg` is the desktop/mobile switch: full navigation from 1024px, menu toggle below.
- **Do not use `xl:` to reach the designed look.** The design frame is 1276px wide (a
  1280px window minus its scrollbar), so anything gated on `xl` (1280px) would miss the
  design's own width. The full desktop layout must be complete at `lg`.

## Architecture

```
public/
  images/{home,services,knowledge,careers,company}/   page imagery
  logos/                                              brand marks
  fonts/                                              reserved (see Typography)
src/
  components/
    common/     reusable UI used across pages (buttons, tags, cards, tickers…)
    layout/     RootLayout, header, footer, navigation
    home/ services/ knowledge/ careers/ company/ contact/   page-specific sections
  pages/        one component per route — composition only, no styling logic
                (DevComponents.tsx is a dev-only gallery, not a page)
  routes/       router.tsx (route table) and paths.ts (URL constants + builders)
  data/         static content, typed
  types/        shared TypeScript types
  services/     api.ts + one module per backend resource
  hooks/        form, data and menu hooks
  utils/        validation.ts, helpers.ts
  index.css     Tailwind import + design tokens
design/         reference PDFs (never imported by the app)
```

### Shared components (built in Phase 2)

`components/common/` — generic UI:

| Component | Use |
| --- | --- |
| `Container` | Site grid: `size` is `page`, `wide` or `narrow`. |
| `Button` | `variant="primary"` (solid teal, 48px tall), `"secondary"` (outlined; the same padding plus its border, so 50px — a primary beside it stretches to match) or `"outline"` (mono technical; `size="sm"` 34px header, `"md"` 38px job "Apply now", `"lg"` 42px service "Learn more"; `accent` for per-domain colours). Pass `to` for internal links, `href` for external ones, neither for a real `<button>`. `icon` adds a trailing arrow. |
| `TextLink` | Inline mono link with an optional `arrow` (`right` or `left`). `tone="muted"` is the grey back link. |
| `SectionLabel` | Mono eyebrow / card label. `tone` is `teal`, `orange` or `muted`; `as` sets heading semantics. |
| `SectionHeading` | Label + two-tone `h2` + rule. `size="lg"` (60px, Home) or `"md"` (36px, inner pages). |
| `PageHeading` | Inner-page hero: label, 96px two-tone `h1`, rule, intro. `stacked` puts the teal part on its own line; `background` and `children` are slots. |
| `HeroBand` | The hero's band alone (wash + hairline), for heroes with a different layout (Service Detail). |
| `Divider` | Fading teal rule: `width` is `sm`, `md` or `full`. |
| `Tag` | Small bordered mono tag (categories, departments, standards). |
| `FrameworkChip` | `variant="pill"` (Home hero) or `"tag"` (footer, standards lists). |
| `TechnicalTicker` | Scrolling term strip: `items`, `tone` (`orange` or `grey`). |
| `Card` | Card surface; `interactive` adds the hover glow and a `group` for children. `to` makes the whole card an internal link, `href` an external one (new tab). The caller sets padding. |
| `IconTile` | 36px orange icon tile (service, article and job rows). |
| `CtaBand` | Closing call-to-action band; buttons go in `children`. |
| `Logo` | Shield + wordmark + tagline; `size` is `header` or `footer`. |
| `NavCard` | Small link card to a neighbouring page ("Next service", "Next article"). |
| `FormFields` | `TextField`, `SelectField`, `TextAreaField`, plus `FieldShell` for custom controls. |
| `FormStatus` | Result line under a submit button (success, preview, error). |
| `ContentPlaceholder` | Dashed orange box that marks content the client has not supplied (`label` is the bracketed marker). Use it instead of writing stand-in copy. |
| `icons.tsx` | Arrow, chevron, shield-check, menu, close, play. |

`components/layout/` — site structure:

| Component | Use |
| --- | --- |
| `RootLayout` | Skip link, `Header`, routed page, `Footer`, scroll restoration. Owns the mobile menu state (`useMobileMenu`) and makes the page `inert` while the menu is open. |
| `Header` | Fixed bar: logo, desktop nav, "Get Assessment", mobile toggle. |
| `ServicesMenu` | The "Services" nav item: a link plus a chevron button that opens the services list (hover or click). |
| `MobileMenu` | Panel under the header below `lg`; closes on navigation, Escape, or when the viewport reaches `lg`. |
| `Footer` | Brand, Navigation, Services, Frameworks + Sector Focus, legal bar. |
| `PageContainer` | Root wrapper of every page (see Layout). |
| `LegalPage` | Shell of the three legal pages: `PageHeading` ("Legal") over a narrow column. |

Navigation data lives once in `src/data/navigation.ts` and is shared by header, mobile
menu and footer. Nav label typography and active/hover colours live once in
`layout/navStyles.ts`.

**Derived, not designed** (built from existing tokens; change freely if designs arrive):
Services dropdown panel, mobile menu, menu toggle icons, 404 page, nav-link hover (text
turns teal), outline-button hover (10% fill of its own colour), text-link hover
(underline), ticker speed (40px/s), focus outlines, the skip link, the Article Detail
page, the Reports and Videos lists (rows, thumbnail box, play mark, loading / error /
empty lines), the legal page shell, the content-placeholder box, and every form state.

**`className` on shared components adds classes; it cannot override them.** There is no
class-merging library, so a passed utility that conflicts with a built-in one (e.g.
`hidden` on a `Button`, which is `inline-flex`) has an undefined winner. Wrap the component
in an element that carries the conflicting utility instead.

`pages/DevComponents.tsx` is a development-only gallery at `/dev/components` (the route is
not registered in production builds). Use it to check shared components; it is not a page.

### Pages

Each page file only composes sections; markup lives in the page's component folder.

| Page | Composition |
| --- | --- |
| Home (`PageContainer flush`) | `home/Hero` (with `FrameworkCoverage` chips) → `ComplianceSection` → ticker → `DeliverablesSection` → ticker → `WhyChooseSection` → `HomeCTA` |
| Company | `PageHeading` (18px intro, corner glow) → `company/MissionVision` → ticker → `CoreValues` → ticker → `CompanyTimeline` → `CompanyCTA` |
| Contact | `PageHeading` → two-column grid: `contact/ContactForm` (two thirds) and a sidebar of `ResponseTimeCard`, `OfficeCard` × 3, `SecurityDisclosure` |
| Services | `PageHeading` → one `services/ServiceRow` per domain → ticker → `CtaBand` |
| Careers | `PageHeading` (stacked) → `careers/WhyChooseUs` → ticker → `JobList` of `JobCard` → ticker → `SubmitResume` (heading + `CareerForm` with `ResumeUpload`) |
| Knowledge Centre | `PageHeading` → `knowledge/KnowledgeTabs` (sticky) → tab panel: `ArticleList` of `ArticleCard`, `VideoList` of `VideoCard`, or `ReportList` of `ReportCard` |
| Article detail (`/knowledge-centre/articles/:slug`) | `HeroBand` (back link, `ArticleMeta`, title) → two-column grid: excerpt + `ArticleContent` (two thirds) and `ArticleNavigation` |
| Service detail (`/services/:serviceSlug`) | `services/ServiceDetailHero` → two-column grid: one `ServiceItemSection` per service (two thirds) and `ServiceSidebar` (services jump list, standards, "Engage this service", `NextService`) |
| Privacy Policy, Terms of Service | `layout/LegalPage` → `ContentPlaceholder` ("[Legal content placeholder]") — no copy has been supplied |
| Security Disclosure | `layout/LegalPage` → the Contact page's `contact/SecurityDisclosure` card, the only disclosure copy that exists |
| Not found (`*`, unknown service or article slug) | `PageHeading` with a "Back to home" button |

Patterns to reuse on the remaining pages:

- **First section after a hero** gets 37px of extra top padding (`pt-33`, `pt-29`,
  `pt-25` = the section's own 96/80/64px + 37px). Every designed page leaves this empty
  band under its hero; it is the height of a ticker and may be an animated banner in the
  live prototype that the static export did not capture.
- **Section rhythm:** `py-24` on Home, `py-20` on inner pages, `py-16` for CTA bands and
  the Contact body. Below `md` these drop by about a third (`py-16`, `py-14`). Tinted
  bands are `bg-cyber-surface/30` with a teal hairline top and bottom.
- **Card grids** are `<ul>` lists; each `<li>` holds a `Card` with `h-full` so rows are
  equal height. Whole-card links use `Card to=…`.
- **Two-column pages** (Contact, and Service Detail next) use `grid lg:grid-cols-3
  gap-12` with the main column spanning two.
- **Card arrows** are `text-cyber-muted` (`#aaaaaa`) and turn teal on hover — Home
  deliverable cards and Knowledge Centre rows. Only the "Next service" card's arrow is
  white.
- **Hero headline gradient** uses `bg-linear-to-r/srgb`. Tailwind interpolates in oklab
  by default, which gives peach mid-tones; the design's are olive (sRGB). The heading
  shrinks to its widest line, so both gradient lines span "SECURING THE".

### Services

**The design's visuals, the client's content.** The Figma/PDF shows five practice areas
(Consulting, Compliance, TARA, Penetration Testing, Security Architecture). The client
then supplied different content: five **domains** — Automotive, Agriculture, Off-Highway,
Commercial, Industries & Manufacturing — each with three or four services, each service
with named technical points. The pages keep the designed layouts and carry the supplied
content. The practice-area copy from the design is no longer used anywhere.

- **One source:** `serviceDomains` in `src/data/services.ts` (types in
  `src/types/service.ts`: `ServiceDomain` → `ServiceItem` → `TechnicalPoint`). The Services
  page, domain pages, Home previews, header and mobile menus, footer and the Contact
  form's service list all read from it. Add or edit a service there and nowhere else.
- **Wording is the client's and must stay verbatim.** A point's `body` is a list of
  blocks: a string is a line of text, an array is a bullet list. Where the supplied text
  breaks a sentence around a list ("Correlating: • camera • IMU • LiDAR — feeds to
  flag…"), the data keeps that shape instead of rewriting the sentence.
- **Routes:** one page per domain — `/services/automotive`, `/agriculture`,
  `/off-highway`, `/commercial`, `/industrial-ot`. Services inside a domain are sections
  of that page with anchor ids (`/services/automotive#threat-analysis-risk-assessment`),
  not routes. An unknown slug renders the Not Found page.
- **One template:** `pages/ServiceDetail.tsx` serves every domain. Do not add per-domain
  page components.
- **Accents** follow position: 01 teal, 02 orange, 03 yellow, 04 red, 05 purple. The class
  names for each live in `services/serviceAccents.ts`, written out in full because Tailwind
  cannot see class names assembled at runtime.
- **Row hover** follows the design literally: every row's border brightens and glows and
  "View details" goes to full strength, but only the teal row's title changes colour.
- **Next service** comes from the data order and is absent on the last domain; the design
  shows no wrap-around and no "previous" link.
- **Standards card** lists only standards and protocols that the domain's own supplied
  text names (ISO/SAE 21434, ISO 11783, SAE J1939, Modbus…). Off-Highway names none, so it
  has no card. Do not add framework associations the content does not make.
- **Still missing (`CONTENT_PENDING`):** each domain's `summary` (row description),
  `tagline` and `intro`, and the Services page intro. The components render these when
  present. Meanwhile the Home cards list each domain's service titles as their body text.

Adapted from the design to fit the new content: the row header shows number and label
only (the design repeated the title there); a service section holds titled points instead
of one paragraph; the sidebar's "Deliverables" card became a jump list of the domain's
services; "Standards covered" became "Standards & protocols".

### Forms

- Controls come from `common/FormFields` (`TextField`, `SelectField`, `TextAreaField`):
  each renders its label, control and error and links them with `aria-describedby`.
- State lives in a hook per form (`useContactForm`, `useCareerForm`), both built on
  `useFormSubmission`: values, per-field errors, and a status of `idle`, `submitting`,
  `success`, `preview` or `error`. Rules are in `utils/validation.ts`; required fields
  follow the asterisks in the design.
- **Preview mode.** `VITE_ENABLE_API` is `false`, so `submitOrPreview` in `api.ts` does not
  call the backend: a valid form reports `preview` and says plainly that nothing was sent.
  It never shows a success message for a submission that was not delivered. Turning the
  flag on makes the same code call the real endpoint — after the contract is verified.
- Not designed, so derived: error text and border in orange, the status line under the
  button, the "Sending…" label, focus ring, and the chevron on selects.
- Form rhythm (measured on the prototype frames): 20px between rows and before the
  submit button, 8px label to control, 7px extra under a textarea. Controls have 12px
  vertical padding and a 21px line: inputs 47px, textareas five lines (131px, Contact)
  or four (110px, Careers). Selects are 44px.

**Career form.** The design and the client's field list differ, so the form is the
design's layout with the client's requirements applied:

- Fields, in the design's order: First name, Last name, Email address, Phone number,
  LinkedIn profile, Role of interest, Years of experience, Cover note / message, Resume / CV.
- Required per the client: name, email, phone, years of experience, resume. LinkedIn, role
  and cover note are optional. (The design marks only name and email.)
- "Years of experience" is a number typed into a text field (0–60), not the design's
  select — its options were never designed and the client asked for numeric validation.
- "Resume / CV" is a file upload (`careers/ResumeUpload`), not the design's link field.
  Accepted: PDF, DOC, DOCX up to 5 MB — an assumption, set by `RESUME_EXTENSIONS` and
  `RESUME_MAX_BYTES` in `utils/validation.ts`. The file is checked when chosen and sent
  with the form as multipart data; it is not uploaded on its own.
- The form's state lives in `pages/Careers.tsx` (`useCareerForm`) so that "Apply now" on a
  job can preselect the role before jumping to `#apply`. Jobs have no detail view or modal;
  the design shows none.

### Knowledge Centre

- **Tabs** (`knowledge/tabs.ts`, `KnowledgeTabs`): Articles, Videos, Reports, in the
  design's order. The open tab is in the URL (`?tab=videos`; Articles is the default with
  no parameter), so tabs can be linked and survive a reload. Proper tab semantics, arrow
  keys move between tabs, and the bar sticks under the header. To add a tab's content,
  render it in the matching branch of `pages/KnowledgeCentre.tsx`.
- **Articles** are static: `src/data/articles.ts`, newest first. The list rows have no
  images, filters, search or featured article because the design has none.
- **Rows share one pattern.** Article, video and report rows are the designed article
  row; `knowledge/ItemMeta` is their metadata line (tag, date, one detail) and
  `knowledge/TabMessage` the one-line loading / empty / error text.
- **Reports** are static: `src/data/reports.ts` (`types/report.ts`). No reports have been
  supplied, so the file holds **two entries that say "[Report placeholder]" on the page**
  — replace them, or empty the array (the tab then says "No reports have been published
  yet."). A report with a `fileUrl` gets a "Download" button that opens the file in a new
  tab; without one the row says "File pending". Reports have no detail page.
- **Videos** come from the backend, never from invented data. `hooks/useVideos` →
  `services/videoService.fetchPublishedVideos` → `GET /api/videos`. The service maps the
  response to `types/video.ts` in one function (`toVideo`), drops anything marked
  `published: false` and anything whose link is not `http(s)`. Field names are a guess
  until the backend is checked — change `ApiVideo`/`toVideo` and nothing else.
  - With the API off (today) the tab reads `src/data/videos.ts`, which is empty, and
    shows "No videos have been published yet." No request is made.
  - States: "Loading videos…", the list, the empty line, or "Videos could not be loaded.
    Please try again." with a Retry button. A response of the wrong shape is an error,
    not a crash.
  - A card opens the video on YouTube in a new tab; there is no embedded player or modal
    because none is designed. Thumbnail: the backend's `thumbnail` if present, otherwise
    YouTube's own still derived from the link (`utils/youtube.ts`, loaded from
    `i.ytimg.com`), otherwise an empty 16:9 box with the play mark. The box has a fixed
    ratio so nothing moves while images load or fail.
- **Article bodies are not supplied.** `content` (sections of heading, paragraphs,
  bullets) is unset for all six articles, and the detail page shows a deliberately obvious
  "[Article content placeholder]" box. Never write stand-in articles; add real text to
  `content` and the placeholder disappears.
- **Article detail is not designed.** It reuses the Service Detail layout. "Next article"
  and "Previous article" come from the data order and are left out at either end.

### Components

- Reuse before you write. A pattern that appears on two pages belongs in
  `components/common/`; do not duplicate markup across pages.
- Page-specific sections live in the matching `components/<page>/` folder.
- Pages compose sections and pass data down. Content is never hardcoded in JSX when it
  belongs in `src/data/`.
- Small focused files; functional components; typed props; no giant components.
- Use design tokens, not arbitrary values. An arbitrary value (`w-[37px]`) needs a
  design reason.

### Routing

Routes are defined once in `src/routes/router.tsx` and lazy-loaded per page. URLs come
from `ROUTES` / `serviceDetailPath()` / `articleDetailPath()` in `src/routes/paths.ts` —
never hardcode a path string in a component.

```
/                                  Home
/services                          Services
/services/:serviceSlug             Service domain (automotive, agriculture, off-highway,
                                   commercial, industrial-ot)
/knowledge-centre                  Knowledge Centre
/knowledge-centre/articles/:slug   Article detail
/careers                           Careers
/company                           Company
/contact                           Contact
/privacy-policy  /terms-of-service  /security-disclosure
*                                  Not found
```

### Data

Content that does not need the backend is static, typed, and lives in `src/data/`.
Components read it through the exported arrays and lookup helpers
(`getServiceDomain`, `getNextServiceDomain`, `getArticleBySlug`).

Content that has not been supplied is marked `CONTENT_PENDING` in the data files
(service domain summaries, taglines and intros, article bodies, reports, videos).
**Do not invent this copy.** Ask for it.

Backend-connected (code written, switched off by `VITE_ENABLE_API` until the contract
is verified): Contact form, Career application form, Knowledge Centre videos. Everything
else is static.

### Assets

- `public/images/<page>/`, `public/logos/`, referenced by absolute URL (`/images/…`).
- If a design asset is not available, use a clearly named placeholder
  (`PLACEHOLDER_ASSET`) and keep the layout ready for the real file. Never use stock
  imagery or generate a "final" asset.
- Exported from Figma so far: the shield mark (`public/logos/securexmotive-shield.svg`,
  also used as a temporary favicon) and the icon vectors (in `icons.tsx`). The hero vehicle
  image (`public/images/home/hero-vehicle.jpg`, 1024 × 468 — that is the design's own
  resolution; it sits under a 65% overlay). The wordmark is live text, not an image.
- The hero is ready for a video: set `heroMedia.video` in `src/data/home.ts` and it plays
  over the still, which stays as poster and reduced-motion fallback. `Car.mp4` from the
  Make project has not been supplied (PLACEHOLDER_ASSET).
- Every meaningful image gets descriptive `alt` text; decorative images get `alt=""`.

## Code quality

- TypeScript strict; no `any`; `import type` for type-only imports
  (`verbatimModuleSyntax`); no enums or parameter properties (`erasableSyntaxOnly`).
- Import through the `@/` alias (`@/components/...`).
- Semantic HTML: one `h1` per page, real `button`/`a`/`nav`/`main`/`footer`, labelled
  form controls.
- Every interactive element is keyboard reachable and has a visible focus state
  (a global `:focus-visible` outline is defined in `index.css`).
- Honour `prefers-reduced-motion` (handled globally; keep it working).
- `npm run build` and `npm run lint` must pass before a phase is called done.

## Do not

- Do not redesign, "modernize", simplify, reorder, add, or remove sections.
- Do not change colors, typography, spacing, or radii away from the design.
- Do not use generic SaaS / cybersecurity template styling.
- Do not add a UI framework or unnecessary dependencies.
- Do not touch the backend, add database logic, or build admin features.
- Do not invent content, assets, or API contracts — mark them pending and ask.
- Do not leave temporary stubs behind. (`PagePlaceholder` is gone. The only
  development-only file is `pages/DevComponents.tsx`, which production builds exclude.)
- Do not replace a marked placeholder with invented copy. Placeholders are listed in
  FRONTEND_STATUS.md; they disappear when the real content is added to `src/data/`.

## Checking work against the design

The design frame is 1276px wide. Compare at exactly that width: take a headless-Chrome
screenshot of the running dev server at 1276px and set it beside the prototype frame, or
the matching crop of the PDF (the page PDFs are 1:1 with CSS pixels, offset by a 100px
margin). The in-app browser pane is narrower than the design, so use it for interaction
and mobile checks, not for desktop pixel comparison. Check 1600, 1440, 1280, 1024, 768,
640, 480, 430, 390 and 375px for overflow.

The prototype renders in headless Chrome when WebGL is available (`--use-angle=swiftshader
--enable-unsafe-swiftshader`, without `--disable-gpu`). Add `&hide-ui=1` to its URL, use a
1280px-wide window tall enough for the whole frame, and step through frames with the
right-arrow key. A 1px border in the frame is the element's own edge, so measuring pixel
rows there gives true sizes.

Expected differences, not defects: heights run a little over the frames (about 0.7px per
bordered box) because hairlines are 1px here and 0.667px in the capture — the design was
captured from a browser at 150% scaling — and tracked mono labels measure about half a
letter-space narrower in the capture, which puts the header navigation up to 3px left of
the frame. Anything larger is a real difference.

Do not combine a full-page capture with emulated reduced motion: the global
reduced-motion rule gives every element a 0.01ms transition, the capture freezes it at
its start, and responsive type is drawn at its smallest size. Freeze the ticker by
script instead.

To exercise the API code without a backend, run a second dev server with
`VITE_ENABLE_API=true` and `VITE_API_BASE_URL` pointing at a throwaway local mock. Never
point a test at a real backend, and never submit test data to production.

## Delivery plan

Seven build phases and a final QA pass, one prompt each. Do not start new work until
asked.

1. **Done** — design analysis and project foundation.
2. **Done** — global/common components: header, navigation (desktop + mobile), footer,
   buttons, labels, headings, chips, tickers, containers, 404.
3. **Done** — Home, Company and Contact pages (the user merged these into one phase).
4. **Done** — Services listing and the five service domain pages.
5. (No separate phase 5 was issued.)
6. **Done** — Careers, and the Articles side of the Knowledge Centre with article pages.
7. **Done** — Knowledge Centre Reports and Videos, legal page shells, whole-site QA.
8. **Done** — final QA pass against the Figma prototype: 27 URLs at ten widths, every
   designed page compared element by element, nine 0.5–3px mismatches in form fields
   and buttons fixed. Result: pass with remaining items that are all external.

The public frontend is implementation-complete; it is **not** content-complete. What is
left needs input from outside this repo: the pending copy and assets, and checking the
API contract against the real backend before `VITE_ENABLE_API` is turned on. The list is
in FRONTEND_STATUS.md. No admin portal belongs in this project.

Details and open questions for each phase are in design-analysis.md.

### Asked for in a brief but absent from the design — not built

Phase briefs sometimes describe content that the Figma/PDF does not contain. The design
wins, so these were left out and need a design or copy before they can exist:

- Home: rotating hero backgrounds (cars, tractors, trucks, industrial); service previews
  for five sectors (Automotive, Agriculture, Off-Highway, Commercial, Industrial OT) — the
  design previews the five practice areas instead; "Decade of Proven Engineering Lineage"
  and the other three trust points.
- Company: "Why leading global brands trust us"; the four core service pillars; the
  longer introduction about physical dynamics and signalling protocols.
- Contact: a "Security check" field. The designed fields are First name, Last name,
  Business email, Phone number, Company, Job title, Service of interest, Message.
- Services: expand/collapse rows (the designed rows are always open), a "previous
  service" link, separate URLs per sub-service, and per-domain images. None are designed.
- Careers: a single "Full name" field (the design has First and Last name, which is what
  was built), job detail views or modals.
- Articles: images, tags beyond the category, filters, search, related articles, authors.
- Reports and Videos: filters, search, categories for videos, an embedded player or
  modal, report cover images, report detail pages.
