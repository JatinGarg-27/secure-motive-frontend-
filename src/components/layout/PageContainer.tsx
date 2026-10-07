import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'

const SITE_NAME = 'SecureXmotive'

interface PageContainerProps {
  /** Browser tab title; the site name is appended. Omit on Home. */
  title?: string
  /**
   * Start the page directly under the header (Home's full-bleed hero). Other
   * pages leave the 16px strip the design shows between header and hero band.
   */
  flush?: boolean
  className?: string
  children: ReactNode
}

/**
 * Wrapper every page renders at its root. It clears the fixed header, keeps
 * the page at least one viewport tall and sets the document title. Horizontal
 * alignment is handled by `Container` inside each section, so full-bleed bands
 * can sit next to contained content.
 */
export default function PageContainer({ title, flush = false, className, children }: PageContainerProps) {
  return (
    <div className={cn('min-h-screen', flush ? 'pt-16' : 'pt-20', className)}>
      <title>{title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Automotive Cybersecurity`}</title>
      {children}
    </div>
  )
}
