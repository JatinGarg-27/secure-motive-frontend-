import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'

const SITE_NAME = 'SecureXmotive'

const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
/** The site-wide description from index.html, used by pages that set none. */
const SITE_DESCRIPTION = descriptionTag?.content ?? ''

interface PageContainerProps {
  /** Browser tab title; the site name is appended. Omit on Home. */
  title?: string
  /** Page description for search engines and link previews; defaults to the site's. */
  description?: string
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
 * the page at least one viewport tall and sets the document title and
 * description. Horizontal alignment is handled by `Container` inside each
 * section, so full-bleed bands can sit next to contained content.
 */
export default function PageContainer({
  title,
  description,
  flush = false,
  className,
  children,
}: PageContainerProps) {
  useEffect(() => {
    if (descriptionTag) descriptionTag.content = description ?? SITE_DESCRIPTION
  }, [description])

  return (
    <div className={cn('min-h-screen', flush ? 'pt-16' : 'pt-20', className)}>
      <title>{title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Automotive Cybersecurity`}</title>
      {children}
    </div>
  )
}
