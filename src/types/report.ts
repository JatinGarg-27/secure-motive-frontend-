/** A downloadable Knowledge Centre report. */
export interface Report {
  slug: string
  /** Uppercase tag, e.g. "WHITE PAPER". */
  category: string
  /** ISO date (YYYY-MM-DD). */
  publishedAt?: string
  title: string
  summary: string
  /** Location of the file. Leave unset until it exists — the card then offers no download. */
  fileUrl?: string
}
