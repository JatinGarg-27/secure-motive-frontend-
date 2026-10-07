import Card from '@/components/common/Card'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import TextLink from '@/components/common/TextLink'
import { edgeIntro, edgePoints } from '@/data/home'
import { ROUTES } from '@/routes/paths'

/** "Why choose SecureXmotive": intro on the left, four edge cards on the right. */
export default function WhyChooseSection() {
  return (
    <section className="border-y border-cyber-teal/8 bg-cyber-surface/30 py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            size="lg"
            label="Our edge"
            title="Why choose"
            highlight="SecureXmotive"
            stacked
            divider={false}
          />
          <p className="pt-6 leading-relaxed text-white/80">{edgeIntro}</p>
          <TextLink to={ROUTES.company} arrow="right" className="mt-9">
            Learn about us
          </TextLink>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {edgePoints.map((point) => (
            <li key={point.title}>
              <Card interactive className="flex h-full flex-col gap-2 p-5">
                <span aria-hidden="true" className="h-0.5 w-6 bg-cyber-orange" />
                <h3 className="pt-1 font-display font-semibold tracking-wide text-white">
                  {point.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/75">{point.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
