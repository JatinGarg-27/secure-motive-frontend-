/** Joins class names, skipping falsy entries: cn('a', isActive && 'b'). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** Formats an ISO date or date-time the way the design shows it: "14 Aug 2026". */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.slice(0, 10).split('-')
  const monthName = MONTHS[Number(month) - 1]
  if (!year || !monthName || !day) return isoDate
  return `${day} ${monthName} ${year}`
}
