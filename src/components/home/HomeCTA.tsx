import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import SectionLabel from '@/components/common/SectionLabel'
import { ROUTES } from '@/routes/paths'

/** Closing call to action of the Home page. */
export default function HomeCTA() {
  return (
    <Container size="wide" className="flex flex-col items-center gap-4 py-14 text-center md:py-20">
      <SectionLabel tone="orange">Start your compliance journey</SectionLabel>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
        Ready to secure your vehicle platform?
      </h2>
      <p className="max-w-xl pt-2 pb-4 text-white/80">
        Schedule a complimentary assessment call with our automotive cybersecurity specialists.
      </p>
      <Button to={ROUTES.contact}>Book free consultation</Button>
    </Container>
  )
}
