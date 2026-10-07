import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'

interface TabMessageProps {
  /** `error` is announced immediately and drawn in orange. */
  tone?: 'info' | 'error'
  children: ReactNode
}

/** One-line status of a Knowledge Centre tab: loading, empty or failed. */
export default function TabMessage({ tone = 'info', children }: TabMessageProps) {
  return (
    <p
      role={tone === 'error' ? 'alert' : 'status'}
      className={cn('font-code text-xs', tone === 'error' ? 'text-cyber-orange' : 'text-cyber-muted')}
    >
      {children}
    </p>
  )
}
