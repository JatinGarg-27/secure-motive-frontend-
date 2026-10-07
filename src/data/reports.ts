import type { Report } from '@/types/report'

/**
 * Knowledge Centre reports.
 *
 * CONTENT_PENDING — no reports have been supplied, and the design has no
 * Reports content. The entries below are marked placeholders that only show
 * how a report will look. Replace them with real reports (and their files in
 * `public/`) or empty the list before launch; with an empty list the tab shows
 * "No reports have been published yet." Never write stand-in reports.
 */
export const reports: Report[] = [
  {
    slug: 'report-placeholder-1',
    category: 'PLACEHOLDER',
    title: '[Report placeholder] Report title',
    summary:
      '[Report content placeholder] A short summary of the report will appear here once the report has been supplied.',
  },
  {
    slug: 'report-placeholder-2',
    category: 'PLACEHOLDER',
    title: '[Report placeholder] Report title',
    summary:
      '[Report content placeholder] A short summary of the report will appear here once the report has been supplied.',
  },
]
