import Card from '@/components/common/Card'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { benefits } from '@/data/careers'

/** "Why choose SecureXmotive": six numbered benefit cards. */
export default function WhyChooseUs() {
  return (
    // The top padding includes the empty 37px band the design leaves under every hero.
    <Container className="pt-16 pb-14 md:pt-29 md:pb-20">
      <SectionHeading
        label="The case for joining"
        title="Why choose"
        highlight="SecureXmotive"
        className="mb-12"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <li key={benefit.index}>
            <Card interactive className="h-full p-6">
              <div className="flex items-center gap-3">
                <span className="font-code text-xs text-cyber-teal/40">{benefit.index}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-cyber-teal/12" />
              </div>
              <h3 className="mt-3.5 font-display text-lg font-semibold tracking-wide text-white">
                {benefit.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-cyber-muted">
                {benefit.description}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  )
}
