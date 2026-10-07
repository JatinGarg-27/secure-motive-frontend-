import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'

interface TagProps {
  className?: string
  children: ReactNode
}

/** Small bordered mono tag: service categories, article categories, standards. */
export default function Tag({ className, children }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-md border border-cyber-teal/20 bg-cyber-teal/5 px-2.5 py-1 font-code text-2xs tracking-widest whitespace-nowrap text-cyber-teal/75 uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}
