import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '@/utils/helpers'
import Tag from './Tag'

interface FrameworkChipProps {
  /**
   * `pill` — the rounded chip in the Home hero.
   * `tag` — the compact tag used in the footer and "Standards covered" lists.
   */
  variant?: 'pill' | 'tag'
  /** Makes the pill a link. */
  to?: string
  className?: string
  children: ReactNode
}

const PILL_CLASSES =
  'inline-flex items-center rounded-full border border-cyber-teal/20 bg-cyber-surface/50 px-4 py-2 font-code text-sm tracking-wide whitespace-nowrap text-white/70'

/** A regulation or standard, e.g. "UNECE R155". */
export default function FrameworkChip({
  variant = 'pill',
  to,
  className,
  children,
}: FrameworkChipProps) {
  if (variant === 'tag') return <Tag className={className}>{children}</Tag>

  if (to) {
    return (
      <Link
        to={to}
        className={cn(
          PILL_CLASSES,
          'transition-colors hover:border-cyber-teal/45 hover:text-cyber-teal',
          className,
        )}
      >
        {children}
      </Link>
    )
  }

  return <span className={cn(PILL_CLASSES, className)}>{children}</span>
}
