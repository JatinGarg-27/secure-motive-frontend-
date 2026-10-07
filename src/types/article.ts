/** One section of an article body. */
export interface ArticleSection {
  /** Optional heading; omit it for an opening section. */
  heading?: string
  paragraphs: string[]
  /** Optional bullet list shown after the paragraphs. */
  bullets?: string[]
}

export interface Article {
  slug: string
  /** Uppercase tag, e.g. "REGULATION". */
  category: string
  /** ISO date (YYYY-MM-DD). Format for display with formatDate(). */
  publishedAt: string
  readMinutes: number
  title: string
  excerpt: string
  /** The article body. Undefined until the text is supplied — never invent it. */
  content?: ArticleSection[]
}
