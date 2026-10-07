/** Part of a line of article text, with the emphasis it has in the source document. */
export type ArticleRun = string | { text: string; bold?: boolean; italic?: boolean }

/** A line of article text: plain, or a mix of plain and emphasised runs. */
export type ArticleText = string | ArticleRun[]

/** One block of an article body, in reading order. */
export type ArticleBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: ArticleText }
  | { type: 'list'; ordered: boolean; items: ArticleText[] }

export interface Article {
  slug: string
  /** Uppercase tag, e.g. "REGULATION". */
  category: string
  /** ISO date (YYYY-MM-DD). The supplied articles carry no dates, so it is unset. */
  publishedAt?: string
  /** Reading time in minutes, from the body's word count. */
  readMinutes: number
  title: string
  /** The article's opening sentence, verbatim. */
  excerpt: string
}
