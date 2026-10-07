import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '@/utils/helpers'
import { ArrowLeftIcon, ArrowRightIcon } from './icons'

interface TextLinkProps {
  to: string
  /** Adds an arrow: after the label (`right`) or before it (`left`, for "back" links). */
  arrow?: 'right' | 'left'
  /** `muted` is the grey used by back links; it turns teal on hover. */
  tone?: 'teal' | 'muted'
  className?: string
  children: ReactNode
}

const TONE_CLASSES = {
  teal: 'text-cyber-teal underline-offset-4 hover:underline',
  muted: 'text-cyber-muted transition-colors hover:text-cyber-teal',
} as const

/** Inline mono link — "LEARN ABOUT US →", "← ALL SERVICES". */
export default function TextLink({ to, arrow, tone = 'teal', className, children }: TextLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center gap-2 font-code text-xs tracking-widest uppercase',
        TONE_CLASSES[tone],
        className,
      )}
    >
      {arrow === 'left' && <ArrowLeftIcon className="size-4" />}
      {children}
      {arrow === 'right' && <ArrowRightIcon className="size-4" />}
    </Link>
  )
}
