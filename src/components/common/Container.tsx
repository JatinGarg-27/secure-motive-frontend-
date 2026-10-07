import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'

type ContainerSize = 'page' | 'wide' | 'narrow'

interface ContainerProps {
  /**
   * `page` — the 1280px site grid shared by header, footer and sections.
   * `wide` — 896px centred column (closing CTAs, timeline).
   * `narrow` — 768px centred column (application form).
   */
  size?: ContainerSize
  className?: string
  children: ReactNode
}

// The narrow sizes cap the content box, so the 24px gutters sit outside the
// column — exactly as in the design, where those columns are a full 896/768px.
const SIZE_CLASSES: Record<ContainerSize, string> = {
  page: 'w-full max-w-7xl',
  wide: 'box-content max-w-4xl',
  narrow: 'box-content max-w-3xl',
}

/** Centres content on the site grid with the standard 24px side gutters. */
export default function Container({ size = 'page', className, children }: ContainerProps) {
  return <div className={cn('mx-auto px-6', SIZE_CLASSES[size], className)}>{children}</div>
}
