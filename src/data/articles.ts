import type { Article } from '@/types/article'

/**
 * Knowledge Centre articles, newest first. Titles, dates, read times and
 * excerpts are from the design.
 *
 * The design covers the listing only, so no article has a body yet
 * (CONTENT_PENDING). The detail page shows a clearly marked placeholder until
 * `content` is added here — do not write stand-in articles.
 */
export const articles: Article[] = [
  {
    slug: 'unece-r155-in-practice',
    category: 'REGULATION',
    publishedAt: '2026-08-14',
    readMinutes: 8,
    title: 'UNECE R155 in Practice: What OEMs Must Deliver for CSMS Type Approval',
    excerpt:
      'A practical walkthrough of the CSMS documentation package, audit interview preparation, and the common gaps that cause type approval delays.',
  },
  {
    slug: 'secure-boot-architecture-for-automotive-microcontrollers',
    category: 'ENGINEERING',
    publishedAt: '2026-08-02',
    readMinutes: 12,
    title: 'Secure Boot Architecture for Automotive Microcontrollers: A Field Guide',
    excerpt:
      'From root of trust to application verification — designing multi-stage secure boot chains for constrained automotive MCUs with limited flash and RAM.',
  },
  {
    slug: 'india-ais-189-ais-190-key-differences',
    category: 'COMPLIANCE',
    publishedAt: '2026-07-18',
    readMinutes: 6,
    title: "India's AIS 189 & AIS 190: Key Differences from UNECE R155/R156",
    excerpt:
      'AIS 189 and 190 track closely to UNECE but carry India-specific test procedures and ARAI submission requirements. Here is what changes.',
  },
  {
    slug: 'automotive-ransomware-telematics-attack-vector',
    category: 'THREAT INTEL',
    publishedAt: '2026-07-05',
    readMinutes: 10,
    title: 'Automotive Ransomware: How Telematics Units Became a Tier-1 Attack Vector',
    excerpt:
      'Analysis of real-world telematics exploitation patterns and the specific architecture decisions that reduce exposure in production vehicle programs.',
  },
  {
    slug: 'cyber-resilience-act-vehicle-software',
    category: 'REGULATION',
    publishedAt: '2026-06-22',
    readMinutes: 9,
    title: 'Cyber Resilience Act: Scope, Obligations, and What It Means for Vehicle Software',
    excerpt:
      'Regulation 2024/2847 imposes cybersecurity requirements on products with digital elements. We unpack how connected vehicle ECUs fit within CRA scope.',
  },
  {
    slug: 'tara-methodology-comparison',
    category: 'METHODOLOGY',
    publishedAt: '2026-06-10',
    readMinutes: 11,
    title: 'TARA Methodology Comparison: STRIDE vs EVITA vs Attack Trees in ISO 21434 Context',
    excerpt:
      'A practitioner comparison of the three dominant threat modeling approaches applied to automotive systems, with tradeoff analysis for each methodology.',
  },
]

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((article) => article.slug === slug)

/** The newer and older neighbours of an article in the list; either may be undefined. */
export function getAdjacentArticles(slug: string): { newer?: Article; older?: Article } {
  const position = articles.findIndex((article) => article.slug === slug)
  if (position === -1) return {}
  return { newer: articles[position - 1], older: articles[position + 1] }
}
