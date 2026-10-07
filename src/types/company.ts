/** Mission / Vision card on the Company page. */
export interface CompanyStatement {
  label: string
  heading: string
  body: string
  tone: 'teal' | 'orange'
}

export interface CoreValue {
  /** Two-digit position, e.g. "01". */
  index: string
  title: string
  description: string
}

export interface TimelineEntry {
  year: string
  event: string
}
