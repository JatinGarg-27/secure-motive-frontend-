import type { Article } from '@/types/article'

/**
 * The Knowledge Centre's articles: the twelve supplied by the client, in the
 * order they were delivered. Titles and excerpts are the client's own words —
 * each excerpt is the article's opening sentence. Bodies are in
 * `articleContent/`, one file per article.
 *
 * Not supplied, so decided here: the category (from the design's existing
 * set) and the read time (the body's word count at 200 words a minute). No
 * publication dates were supplied, so none are shown.
 */
export const articles: Article[] = [
  {
    slug: 'ai-arms-race-in-automotive-cybersecurity',
    category: 'THREAT INTEL',
    readMinutes: 7,
    title: 'The AI Arms Race in Automotive Cybersecurity: Defensive Systems, Offensive Threats, and Quantum Computing',
    excerpt:
      'The automotive industry is going through a fundamental transformation.',
  },
  {
    slug: 'automotive-cybersecurity-management-system-csms',
    category: 'COMPLIANCE',
    readMinutes: 7,
    title: 'Automotive Cybersecurity Management System (CSMS): A Scalable Security Foundation for OEMs and Tier-1 suppliers',
    excerpt:
      'The automotive industry is undergoing one of the most significant technological transformations in its history.',
  },
  {
    slug: 'vehicle-diagnostic-security',
    category: 'ENGINEERING',
    readMinutes: 7,
    title: 'Vehicle Diagnostic Security: The Growing Cybersecurity Risk of Aftermarket Diagnostic Tools',
    excerpt:
      'Diagnostic tools are indispensable to the automotive industry.',
  },
  {
    slug: 'can-one-compromised-ecu-take-down-an-entire-machine',
    category: 'ENGINEERING',
    readMinutes: 8,
    title: 'Can One Compromised ECU Take Down an Entire Machine? Why Network Segmentation Matters',
    excerpt:
      'Modern commercial vehicles and agricultural machines are no longer purely mechanical systems.',
  },
  {
    slug: 'iec-62443-compliance-for-indian-manufacturers',
    category: 'COMPLIANCE',
    readMinutes: 7,
    title: 'IEC 62443 Compliance: How Indian Manufacturers Can Secure Their OT Systems and Meet Global Cybersecurity Requirements',
    excerpt:
      'As Indian manufacturers expand their presence in Europe and other international markets, cybersecurity is becoming an increasingly important part of business competitiveness.',
  },
  {
    slug: 'legacy-plcs-under-attack',
    category: 'THREAT INTEL',
    readMinutes: 7,
    title: 'Legacy PLCs Under Attack: The Hidden Cybersecurity Risks of Connected Industrial Networks',
    excerpt:
      'For decades, the air gap was considered one of the strongest defenses in industrial cybersecurity.',
  },
  {
    slug: 'ota-update-security',
    category: 'ENGINEERING',
    readMinutes: 8,
    title: 'OTA Update Security: Best Practices for Reliable Fleet Management',
    excerpt:
      'Over-the-air (OTA) updates have become an essential capability for modern connected vehicles, IoT devices, smart infrastructure, and industrial fleets.',
  },
  {
    slug: 'post-quantum-cryptography-for-automotive-cybersecurity',
    category: 'ENGINEERING',
    readMinutes: 7,
    title: 'Post-Quantum Cryptography for Automotive Cybersecurity: A 2026–2028 Roadmap for UN R155 and R156 Compliance',
    excerpt:
      'Modern vehicles are designed to remain operational for many years, but the cryptographic technologies protecting them may have a much shorter useful life.',
  },
  {
    slug: 'sboms-for-vehicles',
    category: 'COMPLIANCE',
    readMinutes: 8,
    title: 'SBOMs for Vehicles: The Software Ingredient List Regulators Want—and Hackers Love',
    excerpt:
      'Modern vehicles, commercial fleets, agricultural machines, and heavy off-highway equipment are becoming increasingly software-driven.',
  },
  {
    slug: 'software-defined-trucks-under-attack',
    category: 'THREAT INTEL',
    readMinutes: 8,
    title: 'Software-Defined Trucks under Attack: 6 Cybersecurity Weaknesses Hackers can Exploit',
    excerpt:
      'The commercial trucking industry is undergoing a fundamental transformation.',
  },
  {
    slug: 'un-r155-for-trucks-buses-and-tractors',
    category: 'REGULATION',
    readMinutes: 7,
    title: 'UN R155 for Trucks, Buses and Tractors: What Does It Really Mean for Commercial Vehicle Cybersecurity?',
    excerpt:
      'Imagine a cyberattack taking control of a passenger car.',
  },
  {
    slug: 'when-implements-become-attack-vectors',
    category: 'THREAT INTEL',
    readMinutes: 8,
    title: 'When Implements Become Attack Vectors: The Cyber security Challenge for Tractor Manufacturers',
    excerpt:
      'Modern tractors are no longer isolated mechanical machines.',
  },
]

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((article) => article.slug === slug)

/** The articles before and after one in the list; either may be undefined. */
export function getAdjacentArticles(slug: string): { previous?: Article; next?: Article } {
  const position = articles.findIndex((article) => article.slug === slug)
  if (position === -1) return {}
  return { previous: articles[position - 1], next: articles[position + 1] }
}
