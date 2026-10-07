import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'
import { ShieldCheckIcon } from './icons'

interface IconTileProps {
  /** Defaults to the shield-check icon the design uses everywhere. */
  children?: ReactNode
  className?: string
}

/** 36px orange icon tile that leads service rows, article rows and job rows. */
export default function IconTile({ children, className }: IconTileProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-9 shrink-0 items-center justify-center rounded-xl border border-cyber-orange/25 bg-cyber-orange/12 text-cyber-orange',
        className,
      )}
    >
      {children ?? <ShieldCheckIcon className="size-4" />}
    </span>
  )
}
