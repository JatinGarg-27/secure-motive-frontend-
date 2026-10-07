import type { ReactNode } from 'react'
import Container from './Container'

interface CtaBandProps {
  title: string
  description: string
  /** One or two buttons. */
  children: ReactNode
}

/** Closing call-to-action band on a surface background ("NOT SURE WHERE TO START?"). */
export default function CtaBand({ title, description, children }: CtaBandProps) {
  return (
    <section className="border-t border-cyber-teal/10 bg-cyber-surface py-16">
      <Container size="narrow" className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-display text-3xl font-bold tracking-wide text-white uppercase">
          {title}
        </h2>
        <p className="pb-4 text-cyber-muted">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">{children}</div>
      </Container>
    </section>
  )
}
