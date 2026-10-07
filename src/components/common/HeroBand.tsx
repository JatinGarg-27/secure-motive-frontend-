import type { ReactNode } from 'react'
import { cn } from '@/utils/helpers'
import Container from './Container'

interface HeroBandProps {
  /** Extra background layers, rendered behind the content (e.g. a glow). */
  background?: ReactNode
  className?: string
  children: ReactNode
}

/**
 * Full-width band that opens every inner page: a soft diagonal wash from the
 * top-left corner and a hairline along the bottom edge.
 */
export default function HeroBand({ background, className, children }: HeroBandProps) {
  return (
    <section className="relative overflow-hidden border-b border-cyber-teal/10 py-14 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyber-surface/50 via-transparent to-transparent"
      />
      {background}
      <Container className={cn('relative flex flex-col items-start gap-4', className)}>
        {children}
      </Container>
    </section>
  )
}
