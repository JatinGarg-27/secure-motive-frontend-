# SecureXmotive Frontend QA Report

Final quality-control pass, 7 October 2026. Everything below was run against the live
application in this pass — nothing is carried over on trust from earlier phases.
Companion documents: [FRONTEND_STATUS.md](FRONTEND_STATUS.md) (state and deployment),
[CLAUDE.md](CLAUDE.md) (rules and architecture).

> **Later change.** After this pass the six demo articles were replaced by the client's
> twelve. The six article URLs in §3 no longer exist, and "article bodies" is no longer
> an open item. That work and its own verification are in
> [ARTICLE_CONTENT.md](ARTICLE_CONTENT.md).

## 1. Overall Status

**PASS WITH MINOR REMAINING ITEMS**

- The application builds, lints and type-checks cleanly, and all 27 tested URLs work at
  ten viewport widths with no console output.
- Every designed page was compared with the real Figma prototype frame and with the
  design's vector data, element by element. Nine implementation mismatches were found —
  all between 0.5 and 3 pixels, all in form fields and buttons — and all nine were fixed
  and re-measured.
- What remains cannot be completed inside this repository: client content and assets
  that were never supplied, and verification against the real backend, which is not
  available on this machine. Those are listed in §7.

"Pass" here means the implementation is correct and faithful. It does **not** mean the
site can launch: article bodies, reports and legal text are still marked placeholders,
and the forms do not deliver until the API is verified and switched on.

## 2. Environment

| | |
| --- | --- |
| Framework | React 19.3, TypeScript 6.0 (strict) |
| Build tool | Vite 8.3 |
| Styling | Tailwind CSS 4.3 (CSS-first tokens in `src/index.css`), no UI framework |
| Router | React Router 8.4 (data router, one lazy chunk per page) |
| Fonts | Rajdhani, Inter, JetBrains Mono — self-hosted through Fontsource |
| Lint | oxlint 1.87 |
| Node / npm | 24.18 / 12.0 |
| Dependencies | `npm ls` clean, nothing missing or extraneous |
| API integration | Written for three public endpoints; **switched off** (`VITE_ENABLE_API=false`). The backend project is not present on this machine, so the contract is unverified. Tested against a local mock only. |

**Design sources actually reachable in this pass**

| Source | Result |
| --- | --- |
| Figma prototype (`/proto/pyPcynZh8a8hPqISvFFu9M`) | **Opened.** Publicly viewable. All 37 frames captured at 100% in headless Chrome: 7 pages and 30 default/hover component sheets. This was the pixel reference. |
| Design PDFs (`design/*.pdf`, 14 files) | Read as vector data for exact positions, sizes and colours. Same design as the prototype (frame heights are identical). |
| Figma design file via MCP (`pyPcynZh8a8hPqISvFFu9M`) | Refused: the connected account has no edit access. |
| Figma copy via MCP (`tLtxRAMuUBzIspHsHotTZX`) | Refused: the Starter plan's call allowance is used up. |
| Figma Make (`/make/5j9R8zfC6rEPzRtzVeM0IZ`) | Not viewable: it asks for a Figma login. Its source and live preview were never readable. |

The prototype contains **no** mobile or tablet frames, no open menu, no article, legal,
report or video designs, and no animated elements. It is seven static pages plus hover
states.

## 3. Routes Tested

Each URL was loaded directly (the same as a browser refresh) at 375, 390, 430, 480, 640,
768, 1024, 1280, 1440 and 1600px and checked for: rendering, horizontal overflow, clipped
text, one `h1`, heading order, image `alt`, broken images, empty links, unnamed controls,
unlabelled fields, console errors and warnings, and failed requests.

- [x] `/`
- [x] `/services`
- [x] `/services/automotive`
- [x] `/services/agriculture`
- [x] `/services/off-highway`
- [x] `/services/commercial`
- [x] `/services/industrial-ot`
- [x] `/knowledge-centre`
- [x] `/knowledge-centre?tab=videos`
- [x] `/knowledge-centre?tab=reports`
- [x] `/knowledge-centre/articles/unece-r155-in-practice`
- [x] `/knowledge-centre/articles/secure-boot-architecture-for-automotive-microcontrollers`
- [x] `/knowledge-centre/articles/india-ais-189-ais-190-key-differences`
- [x] `/knowledge-centre/articles/automotive-ransomware-telematics-attack-vector`
- [x] `/knowledge-centre/articles/cyber-resilience-act-vehicle-software`
- [x] `/knowledge-centre/articles/tara-methodology-comparison`
- [x] `/careers` (and `/careers#apply`)
- [x] `/company`
- [x] `/contact`
- [x] `/privacy-policy`
- [x] `/terms-of-service`
- [x] `/security-disclosure`
- [x] `/no-such-page` → Not Found
- [x] `/services/no-such-domain` → Not Found
- [x] `/knowledge-centre/articles/no-such-article` → Not Found
- [x] `/knowledge-centre/nonsense` → Not Found
- [x] `/knowledge-centre?tab=nonsense` → falls back to Articles

27 URLs × 10 widths = 270 page loads, **0 problems**. All 41 distinct internal links and
anchors found across the site resolve; every `#anchor` has a target. The header and
footer are present and working on every route. `/dev/components` (development gallery)
exists only in the dev server and returns Not Found in the production build.

## 4. Figma Comparison

Method: each page was screenshotted at the design's own width (1276px) and compared with
the prototype frame; then every text run, box and icon in the design's vector data was
matched to the built element and compared for position, size, font size and colour.
Hover states were captured and compared with the 30 component sheets.

Two things were learnt about the PDFs and are worth knowing: a bordered element appears
in the PDF as a box 1px larger on every side than it really is, and opacity applied to a
group is not visible in the vector data. Both were checked against the prototype render.
The first is what caused most of the mismatches fixed in this pass.

| Page | Figma structure | Implementation | Visual accuracy | Remaining differences |
| --- | --- | --- | --- | --- |
| **Home** | Hero, compliance grid, ticker, service previews, ticker, why-choose, CTA, footer | Complete | 132 of 166 design text lines found at the designed size and colour; the other 34 are the service-preview copy the client replaced. Hero image registers within 1px and 0.3 brightness. | Service previews show the client's five domains. Hero is a still image (video not supplied). |
| **Services** | Hero, five numbered rows, ticker, CTA | Complete | Row structure, header strip, accents, chips and buttons match the frame. | Rows carry the client's domains; row descriptions and the page intro are not supplied; the header no longer repeats the title. |
| **Service details** | Hero, sections with accent rule, sidebar cards, next service | Complete, one template for five domains | Structure and all sidebar cards match. | Content is the client's (titled technical points). Tagline and intro not supplied, so the hero is shorter. |
| **Company** | Hero, mission/vision, ticker, values, ticker, timeline, CTA | Complete | 120 of 136 text lines matched; the rest are extraction artifacts and replaced footer links. No colour or size difference. | None beyond hairlines. |
| **Contact** | Hero, form, response time, three offices, disclosure | Complete | 85 of 91 text lines matched, including every placeholder. After the fixes the form tracks the frame to the pixel. | None beyond hairlines. |
| **Careers** | Hero, benefits, ticker, seven jobs, ticker, application form | Complete | 144 of 168 text lines matched. | The form follows the client's requirements: years of experience is a number field (design: select) and the résumé is a file upload (design: link field). |
| **Knowledge Centre** | Hero, three tabs, six article rows | Complete | 78 of 85 text lines matched; rows identical. | None beyond hairlines. |
| **Articles** | *Not designed* | Built from the Service Detail layout | — | Bodies are marked placeholders. |
| **Reports** | *Not designed* (a tab label only) | Built from the article row | — | Two marked placeholder rows. |
| **Videos** | *Not designed* (a tab label only) | Built from the article row, loads from the API | — | Empty until the API is on. Opens YouTube in a new tab. |
| **Legal pages** | *Not designed* | Built from the page heading | — | Privacy and Terms are marked placeholders. |

**Differences that remain on designed pages, and why they were left**

- **Page heights run 6–30px over the frames** (Contact +6, Company +7, Knowledge Centre
  +14, Careers +25, Home +30). The Figma file was captured from a browser at 150%
  scaling, where a 1px border measures 0.667px; here borders are 1px. Each bordered box
  is therefore 0.67px taller. On Home and Careers part of the difference is the client's
  content.
- **Header navigation labels sit up to 3px left of the frame** (Home −3, Services −2,
  Career −1, Contact +0.4). Each label measures about 0.6px narrower in the capture than
  the same CSS renders today — half a letter-space. It is a text-measurement difference,
  not a spacing value, so it was not "corrected" with an arbitrary offset.
- **Hero height follows the viewport** (`100vh − 64px`). It equals the frame's 832px in a
  896px-tall window, which is the window the design was captured in.

**Responsive accuracy.** Cannot be measured against Figma: there are no tablet or mobile
frames. The derived layouts keep the desktop design's components, tokens and order.

**Interactions.** All hover states match the component sheets: cards brighten their
border and glow, titles and arrows turn teal where the sheet shows it, solid buttons dim
and glow, outlined buttons take a faint fill. The prototype defines no other interaction.

**Asked for in the brief but absent from Figma — not built, because Figma wins:**
a "Security Check" field on the Contact form (the designed fields are First name, Last
name, Business email, Phone, Company, Job title, Service of interest, Message); a single
"Full name" field on the Careers form (the design has First and Last name); service
pillars and trust statements on Company; expand/collapse service rows; previous-service
navigation; article images; report detail pages.

## 5. Issues Found

| Issue | Page | Severity | Status | Fix |
|------|------|----------|--------|-----|
| Text inputs 48px tall; design 47px | Contact, Careers | LOW | Fixed | 12px padding and the design's 21px line |
| Selects 46px tall; design 44px | Contact, Careers | LOW | Fixed | Padding reduced to 11px |
| Textareas 132px / 112px; design 131px / 110px | Contact, Careers | LOW | Fixed | Sized as five and four 21px lines |
| Rows 18px apart; design 20px (form drifted 2px per row) | Contact, Careers | MEDIUM | Fixed | Row gap and button gap set to 20px |
| Solid buttons 47.5px tall; design 48px | All pages | LOW | Fixed | Button label line set to 20px |
| Outlined "Join our team" 47.5px tall; design 50px, with the solid button beside it stretching to match | Company | LOW | Fixed | Same padding as the solid button, border added on top |
| "Apply now" button 140 × 40; design 137 × 38 | Careers | MEDIUM | Fixed | Vertical padding 10px |
| "Apply now" arrow 14px; design 12px | Careers | LOW | Fixed | Icon size corrected (report rows follow) |
| Résumé box 48px, 1px taller than the inputs it sits with | Careers | LOW | Fixed | 47px |
| Navigation labels up to 3px left of the frame | All pages | LOW | Not changed | Text-measurement artifact of the capture — see §4 |
| Page heights 6–30px over the frames | All designed pages | LOW | Not changed | 1px hairlines vs 0.667px in the capture — see §4 |
| Eleven text styles below WCAG AA contrast | Several | LOW | Not changed | They are the design's own values — see §10 |
| API contract unverified | Contact, Careers, Videos | HIGH | Open — external | Needs the backend — see §7 |
| Placeholder content | Articles, Reports, Legal | HIGH for launch | Open — external | Needs client copy — see §7 |

No CRITICAL issue was found: nothing is broken, blank, or unreachable.

Found and fixed earlier the same day (Phase 7), for completeness: card arrows white
instead of the design's grey; video links not restricted to web addresses; a URL check
that older Safari does not support.

## 6. Issues Fixed

1. **Form fields resized to the design** — inputs 47px, selects 44px, textareas five and
   four lines. `src/components/common/FormFields.tsx`.
2. **Form rhythm corrected to 20px** between rows and before the submit button. Measured
   against the Contact frame after the change: every field, gap and the button start on
   the same pixel row as in Figma. `ContactForm.tsx`, `CareerForm.tsx`.
3. **Solid buttons are 48px** everywhere, through one token
   (`--text-btn--line-height` in `src/index.css`).
4. **Outlined secondary button is 50px**, and a solid button beside it stretches to
   match, as in the Company frame. `src/components/common/Button.tsx`.
5. **"Apply now" is 138 × 38 with a 12px arrow.** `Button.tsx`, `JobCard.tsx`; the
   derived report row uses the same arrow.
6. **Résumé upload box is 47px**, level with the inputs. `ResumeUpload.tsx`.

After the fixes: the size comparison reports no box more than 1px from the design on
Contact, Company, Careers, Services or Service Detail, with three understood
exceptions — containers whose height is the sum of their hairlines, the "Years of
experience" field (a 47px text input where the design has a 44px select), and the solid
button beside "Join our team", which stretches to 50px as it does in the frame.

## 7. Remaining Items

Only things that need something from outside this repository.

**Content**

- Article bodies for all six articles (each page shows "[Article content placeholder]").
- Reports: titles, summaries and files (the tab shows two "[Report placeholder]" rows).
- Privacy Policy and Terms of Service text; a security disclosure policy.
- For each service domain: row description, tagline and introduction; the Services page
  introduction.
- Videos: none exist yet; they will come from the backend.
- Confirmation that the design's office addresses, phone numbers, job listings and
  article list are real and current — they were reproduced from Figma.

**Assets**

- Hero video (`Car.mp4`). The hero plays one as soon as it is set in `src/data/home.ts`.
- Favicons and app icons (the shield SVG is a stand-in), and a social share image.
- A larger hero still, if one exists (the design's own is 1024 × 468).

**Backend**

- The backend project is not on this machine (`../backend` does not exist), so the three
  endpoint paths, field names and response shapes are still assumptions. They must be
  checked against the real code before `VITE_ENABLE_API` is set to `true`.
- The production API URL (`VITE_API_BASE_URL`) is not configured; `.env` points at
  `http://localhost:5000` for development.

**Decisions**

- Approval of the layouts that have no design: tablet and mobile, the mobile menu and
  Services dropdown, Articles, Reports, Videos, legal pages, 404, and all form states.
- Whether a "Security Check" is wanted on the Contact form. It is not in the design; if
  it is, it needs a design and a backend contract.

## 8. Forms Tested

Driven in a real browser, in both modes.

**Contact**

| Check | Result |
| --- | --- |
| Empty submission | Five required-field messages; each field marked invalid and linked to its message |
| Whitespace-only name, invalid email | Rejected with the right messages |
| Valid submission, preview mode (API off) | Button shows "Sending…" and is disabled; then says plainly that nothing was sent; values kept |
| Valid submission, API on (local mock) | `POST /api/contact` with JSON body received; "Message sent…"; form resets |
| Server error, API on (local mock, HTTP 500 with a stack-trace message) | Fixed message "Your message could not be sent. Please try again."; values kept; nothing from the server shown |
| Real backend | **Not tested** — not available |

**Career**

| Check | Result |
| --- | --- |
| Empty submission | Six messages, including the résumé |
| Phone, years of experience (0–60), LinkedIn link | Invalid values rejected; LinkedIn, role and cover note are optional |
| Résumé: `.txt` file, 6 MB PDF, valid PDF | Wrong type rejected; oversize rejected; valid file shows its name and size, with Replace and Remove |
| "Apply now" on a job | Jumps to the form with that role selected |
| Valid submission, preview mode | Same honest preview message |
| Valid submission, API on (local mock) | `POST /api/careers/applications` as multipart with eight fields and the file under `resume`; success message; form and file cleared |
| Real backend and S3 upload | **Not tested** — not available |

**Videos**

| Response from the local mock | Result |
| --- | --- |
| List of videos | Cards render; an unpublished entry and one with a `javascript:` link are dropped |
| Slow | "Loading videos…" |
| HTTP 500 | Generic error and a Retry button (pressing Retry was exercised in the Phase 7 run earlier the same day, not repeated here) |
| Empty list | "No videos have been published yet." |
| Wrong shape (wrapped object) | Error state, no crash |
| Thumbnail missing or failing | Empty 16:9 box with the play mark; no layout movement |

No test request was ever sent to a real or production service.

## 9. Responsive Testing

| Range | Widths | Result |
| --- | --- | --- |
| Desktop | 1600, 1440, 1280 | No overflow or clipping on any route. At 1276px the layout is the Figma frame. |
| Tablet | 1024, 768 | Full navigation from 1024px, menu button below. No overflow. |
| Mobile | 640, 480, 430, 390, 375 | Single-column layouts; headings scale down; forms and cards fit. No overflow. |

Mobile menu: opens and closes, closes on Escape (focus returns to the button), on
choosing a link and on widening the window; the page behind is inert and does not scroll
while it is open. Screenshots of Home, Services, Contact and Careers at 390px were
reviewed by eye.

Remaining difference: none measurable — there is no mobile or tablet design to differ
from. These layouts are derived and unapproved.

## 10. Accessibility

Checked on every route and width: one `h1`, no skipped heading level, `alt` on every
image, a name on every link and button, a label on every field, no empty links.

Checked by keyboard: skip link (first stop; jumps to the main content), tab order,
visible 2px teal focus outline, Knowledge Centre tabs (arrow keys, wrap-around, correct
`aria-selected` and panel labelling), Services dropdown (Enter opens, Escape closes),
mobile menu (see §9). Form errors are tied to their fields with `aria-invalid` and
`aria-describedby`; results are announced through `role="status"` / `role="alert"`.
With reduced motion requested, no animation runs.

Contrast: body text, headings and labels pass AA. Eleven text styles do not, and all
are the design's own values, left as designed: the decorative row numerals (white at
10%), placeholder text, the form's fine print (40%), "Sector tag", and the "View details"
links at 60% of their accent colour.

Not done: testing with a screen reader, and on real devices.

## 11. Performance

- Main script 344 kB (109 kB gzipped): React, the router and the shared layout. Each page
  is its own chunk of 0.3–11 kB. Stylesheet 69 kB (13 kB gzipped).
- One image on the site: the hero, 48 kB, with explicit dimensions and high fetch
  priority. Video thumbnails load lazily into a fixed-ratio box.
- Fonts are self-hosted and split by script, so a browser downloads only the Latin files
  it needs. No third-party scripts, analytics or trackers.
- One continuous animation (the ticker), in CSS only. No scroll listeners.
- No source maps and no development-only code in the production bundle.

Not run: Lighthouse. No optimisation was needed or attempted beyond what is listed.

## 12. Build Verification

Run after the last change in this pass.

| Command | Result |
| --- | --- |
| `npm run build` (`tsc -b && vite build`) | **Pass** — built in about 1 second, no warnings |
| `npm run typecheck` (`tsc -b`) | **Pass** — 0 errors (strict mode) |
| `npm run lint` (`oxlint`) | **Pass** — 0 warnings, 0 errors |
| `npm ls` | Clean |
| Development server | Starts without errors; no runtime exceptions on any route |

Code review: no `any`, no `@ts-ignore`, no lint suppressions, no `console` calls, no
commented-out code, no unused modules or exports, no `TODO` / `FIXME`. One `fetch` call
in the whole application (`src/services/api.ts`). Configuration: two environment
variables, both public settings; no secrets, tokens or credentials anywhere in the
source, the `.env` files or the built output.

## 13. Final Recommendation

**READY FOR CLIENT REVIEW**

The build is suitable to put in front of the client as the implemented design: every
designed page matches the Figma prototype, every route works, and it is responsive and
keyboard-accessible.

The client should be told three things when they open it:

1. Content marked "placeholder" (articles, reports, privacy policy, terms) is waiting on
   them, as are the service descriptions and the hero video.
2. The forms validate but deliberately do not send, and say so on screen; the Videos tab
   is empty. Both change when the backend is checked and the API is switched on.
3. Mobile and tablet layouts, and the pages Figma does not contain, are proposals that
   need their approval.

It is **not ready for public launch** until §7 is closed.
