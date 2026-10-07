import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'
import Divider from './Divider'
import HeroBand from './HeroBand'
import SectionLabel from './SectionLabel'

interface PageHeadingProps {
  label: string
  /** White part of the title. */
  title: string
  /** Teal part of the title. */
  highlight?: string
  /** Puts the highlight on its own line ("CAREER AT" / "SECUREXMOTIVE"). */
  stacked?: boolean
  description?: ReactNode
  /** `lg` is the 18px intro used on the Company page. */
  descriptionSize?: 'base' | 'lg'
  /** Extra background layers for the band (e.g. the Company page glow). */
  background?: ReactNode
  /** Supporting content rendered under the description. */
  children?: ReactNode
}

/** Title block that opens an inner page: label, 96px two-tone title, rule, intro. */
export default function PageHeading({
  label,
  title,
  highlight,
  stacked = false,
  description,
  descriptionSize = 'base',
  background,
  children,
}: PageHeadingProps) {
  return (
    <HeroBand background={background}>
      <SectionLabel>{label}</SectionLabel>
      <h1 className="font-display text-[2.5rem] leading-none font-bold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
        {title}
        {highlight && (
          <span className={cn('text-cyber-teal', stacked && 'block')}>
            {!stacked && ' '}
            {highlight}
          </span>
        )}
      </h1>
      <Divider width="md" />
      {description && (
        <p
          className={cn(
            'max-w-2xl pt-2 leading-relaxed text-cyber-muted',
            descriptionSize === 'lg' && 'text-lg',
          )}
        >
          {description}
        </p>
      )}
      {children}
    </HeroBand>
  )
}
