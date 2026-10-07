# SecureXmotive Article Content

## Source

12 client-provided DOCX files, delivered on 7 October 2026. They are kept outside git in
`design/articles/` (the repository is public and `design/` is ignored).

## Article Count

12

The six articles that were on the site before came from the Figma design and were demo
content. All six were removed; none of their titles, slugs or excerpts remain.

## Architecture

Static React/TypeScript article data. Nothing is fetched: there is no article API, no
database model, no seed file and no admin editing.

```
12 DOCX files
   -> converted once
src/data/articles.ts                 the list: slug, category, read time, title, excerpt
src/data/articleContent/<slug>.ts    one article body per file
src/data/articleContent/index.ts     slug -> body (imported only by the article page)
   -> src/components/knowledge/ArticleCard.tsx     the row in the Knowledge Centre
   -> src/pages/ArticleDetail.tsx                  one page template for every article
   -> src/components/knowledge/ArticleContent.tsx  renders the body
```

The Knowledge Centre page loads only the list (4 kB). The twelve bodies are a separate
bundle (141 kB, 42 kB compressed) loaded when an article is opened.

## Route

`/knowledge-centre/articles/:slug`

One reusable page. An unknown slug — including the six old ones — shows the site's
Not Found page.

## Editing

Articles are not editable through the application. To change one, edit its file in
`src/data/articleContent/` (or its entry in `src/data/articles.ts`) and redeploy. To add
one, add an entry to `articles.ts`, a body file, and a line in `articleContent/index.ts`.

## Source of Truth

The client-provided DOCX files. The wording on the site must match them exactly.

## The 12 articles

In the order they appear on the site (the order of the delivered files).

| # | Title | Slug | Category | Words | Read time | Source file |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | The AI Arms Race in Automotive Cybersecurity: Defensive Systems, Offensive Threats, and Quantum Computing | `ai-arms-race-in-automotive-cybersecurity` | THREAT INTEL | 1327 | 7 min | `AI Arms Race_AI vs AI.docx` |
| 2 | Automotive Cybersecurity Management System (CSMS): A Scalable Security Foundation for OEMs and Tier-1 suppliers | `automotive-cybersecurity-management-system-csms` | COMPLIANCE | 1235 | 7 min | `Automotive Cybersecurity Management System.docx` |
| 3 | Vehicle Diagnostic Security: The Growing Cybersecurity Risk of Aftermarket Diagnostic Tools | `vehicle-diagnostic-security` | ENGINEERING | 1325 | 7 min | `Automotive Diagnostic Security.docx` |
| 4 | Can One Compromised ECU Take Down an Entire Machine? Why Network Segmentation Matters | `can-one-compromised-ecu-take-down-an-entire-machine` | ENGINEERING | 1456 | 8 min | `Can one compromised ECU take down an entire machine.docx` |
| 5 | IEC 62443 Compliance: How Indian Manufacturers Can Secure Their OT Systems and Meet Global Cybersecurity Requirements | `iec-62443-compliance-for-indian-manufacturers` | COMPLIANCE | 1293 | 7 min | `IEC 62443 Compliance for Indian Manufacturers.docx` |
| 6 | Legacy PLCs Under Attack: The Hidden Cybersecurity Risks of Connected Industrial Networks | `legacy-plcs-under-attack` | THREAT INTEL | 1357 | 7 min | `Legacy PLCs under attack.docx` |
| 7 | OTA Update Security: Best Practices for Reliable Fleet Management | `ota-update-security` | ENGINEERING | 1456 | 8 min | `OTA Update Security.docx` |
| 8 | Post-Quantum Cryptography for Automotive Cybersecurity: A 2026–2028 Roadmap for UN R155 and R156 Compliance | `post-quantum-cryptography-for-automotive-cybersecurity` | ENGINEERING | 1300 | 7 min | `Post-Quantum Cryptography Roadmap for Automotive Cybersecurity.docx` |
| 9 | SBOMs for Vehicles: The Software Ingredient List Regulators Want—and Hackers Love | `sboms-for-vehicles` | COMPLIANCE | 1538 | 8 min | `SBOMs for Vehicles.docx` |
| 10 | Software-Defined Trucks under Attack: 6 Cybersecurity Weaknesses Hackers can Exploit | `software-defined-trucks-under-attack` | THREAT INTEL | 1493 | 8 min | `Software-Defined Trucks Under Attack.docx` |
| 11 | UN R155 for Trucks, Buses and Tractors: What Does It Really Mean for Commercial Vehicle Cybersecurity? | `un-r155-for-trucks-buses-and-tractors` | REGULATION | 1230 | 7 min | `UN R155 Commercial Vehicle Cybersecurity.docx` |
| 12 | When Implements Become Attack Vectors: The Cyber security Challenge for Tractor Manufacturers | `when-implements-become-attack-vectors` | THREAT INTEL | 1542 | 8 min | `When Implements become attack vectors.docx` |

## How the content is structured

A body is an ordered list of blocks, in the document's reading order:

```ts
{ type: 'heading', level: 2, text: '...' }            // section heading (level 3 = sub-heading)
{ type: 'paragraph', text: '...' }
{ type: 'list', ordered: false, items: ['...', '...'] }
```

`text` and list items are plain strings, or a list of runs where the document has bold
or italic words: `['The real question is ', { text: '“How do we comply?”', bold: true }]`.

| # | Slug | Section headings | Sub-headings | Paragraphs | Bullet items | Numbered items |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `ai-arms-race-in-automotive-cybersecurity` | 10 | 0 | 41 | 0 | 0 |
| 2 | `automotive-cybersecurity-management-system-csms` | 7 | 0 | 20 | 0 | 0 |
| 3 | `vehicle-diagnostic-security` | 8 | 0 | 22 | 5 | 0 |
| 4 | `can-one-compromised-ecu-take-down-an-entire-machine` | 8 | 0 | 22 | 15 | 0 |
| 5 | `iec-62443-compliance-for-indian-manufacturers` | 7 | 4 | 25 | 7 | 0 |
| 6 | `legacy-plcs-under-attack` | 9 | 0 | 23 | 0 | 0 |
| 7 | `ota-update-security` | 5 | 10 | 25 | 20 | 5 |
| 8 | `post-quantum-cryptography-for-automotive-cybersecurity` | 11 | 0 | 16 | 0 | 0 |
| 9 | `sboms-for-vehicles` | 8 | 0 | 18 | 5 | 0 |
| 10 | `software-defined-trucks-under-attack` | 9 | 0 | 21 | 0 | 0 |
| 11 | `un-r155-for-trucks-buses-and-tractors` | 5 | 6 | 22 | 0 | 0 |
| 12 | `when-implements-become-attack-vectors` | 9 | 0 | 22 | 0 | 0 |

None of the documents contains an image, a data table, a link, a footnote, an author
or a date.

## What was interpreted, and how

Only formatting. No sentence was rewritten, shortened, corrected or added.

- **Title** — the document's own title: its first heading, or the bold first line, or (in
  three documents) the line in the banner box at the top. It is the page's `h1` and is
  not repeated in the body. Spellings are kept as written, for example "Cyber security"
  and "Tier-1 suppliers".
- **Headings** — a document's top heading level becomes a section heading (`h2`) and its
  next level a sub-heading (`h3`), whatever Word style was used. In the documents that
  mark sections with a bold line instead of a heading style, that line is the section
  heading.
- **Bold lines inside a section** — kept as bold paragraphs, not turned into headings
  (the four numbered priorities in the UN R155 article; one question in the implements
  article).
- **Lists** — Word bullet and numbered lists become lists. Lines that are only *typed*
  like a list ("1. Authenticated Access: …", or the short lines under "This includes:"
  in the AI article) stay as the paragraphs they are in the document.
- **Emphasis** — bold and italic words are kept. Bold applied only to punctuation (stray
  formatting in one document) is ignored.
- **Whitespace** — trimmed and collapsed. Nothing else is normalised: curly quotes, dashes
  and numbering typed into headings are as supplied.

## What the documents do not contain

Decided as follows, and worth confirming with the client:

| Field | Decision |
| --- | --- |
| Excerpt (shown on the card and used as the page description) | The article's opening sentence, word for word. Nothing was written for it. |
| Category | One of the tags the design already uses — THREAT INTEL, COMPLIANCE, ENGINEERING, REGULATION — chosen from the title and subject. **This is an editorial assignment, not the client's.** |
| Read time | Word count ÷ 200 words a minute, rounded up. |
| Date | **None shown.** No dates were supplied and none were invented. Add `publishedAt` to an entry in `articles.ts` and the date appears on the card and the page. |
| Order | The order of the delivered files (alphabetical by file name). "Next" and "Previous" follow it. |
| Image | None. The documents have no images and the design's article row has none. |
| Author | None. |

## Verification (7 October 2026)

- Every character in each DOCX is accounted for in the converted text (12 of 12).
- Each article page was rendered and its text compared block by block with its
  document: title, every heading, paragraph and list item, their order, heading levels,
  and the number of bold and italic runs (12 of 12 identical).
- The listing shows exactly 12 cards, in order, each linking to its own page; each
  excerpt is the start of its article.
- The listing, all 12 pages and an invalid slug were loaded at 375, 390, 430, 768, 1024,
  1280 and 1440px: no overflow, one `h1`, no console errors. All 47 internal links on
  the site resolve.
- Build, type-check and lint pass.
