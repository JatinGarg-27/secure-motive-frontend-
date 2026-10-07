import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'

type SectionLabelTone = 'teal' | 'orange' | 'muted'

interface SectionLabelProps {
  tone?: SectionLabelTone
  /** Element to render. Use a heading when the label titles a card. */
  as?: 'p' | 'span' | 'h2' | 'h3'
  /** For `aria-labelledby` when the label names a region or form. */
  id?: string
  className?: string
  children: ReactNode
}

const TONE_CLASSES: Record<SectionLabelTone, string> = {
  teal: 'text-cyber-teal',
  orange: 'text-cyber-orange',
  muted: 'text-cyber-muted',
}

/** Small uppercase mono label that sits above headings and titles cards. */
export default function SectionLabel({
  tone = 'teal',
  as: Element = 'p',
  id,
  className,
  children,
}: SectionLabelProps) {
  return (
    <Element
      id={id}
      className={cn('font-code text-xs tracking-widest uppercase', TONE_CLASSES[tone], className)}
    >
      {children}
    </Element>
  )
}
