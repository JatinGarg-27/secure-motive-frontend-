import type { ReactNode } from 'react'
import SectionLabel from './SectionLabel'

interface ContentPlaceholderProps {
  /** Bracketed marker, e.g. "[Article content placeholder]". */
  label: string
  children: ReactNode
}

/**
 * Stands in for content the client has not supplied yet. Deliberately obvious,
 * so missing content is never mistaken for the finished page.
 */
export default function ContentPlaceholder({ label, children }: ContentPlaceholderProps) {
  return (
    <div className="rounded-xl border-2 border-dashed border-cyber-orange/30 p-6">
      <SectionLabel tone="orange">{label}</SectionLabel>
      <p className="mt-3 text-sm leading-relaxed text-cyber-muted">{children}</p>
    </div>
  )
}
