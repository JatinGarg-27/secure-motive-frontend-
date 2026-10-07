import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import type { CareerFormState } from '@/hooks/useCareerForm'
import CareerForm from './CareerForm'

interface SubmitResumeProps {
  /** Anchor id that "Apply now" jumps to. */
  id: string
  form: CareerFormState
}

/** "Submit resume": the open-application heading, intro and form. */
export default function SubmitResume({ id, form }: SubmitResumeProps) {
  return (
    <Container size="narrow" className="py-14 md:py-20">
      <section id={id} className="scroll-mt-24">
        <SectionHeading label="Open application" title="Submit" highlight="Resume" />
        <p className="mt-3 mb-12 leading-7 text-cyber-muted">
          Do not see a match above? Submit your details and we will reach out when a suitable role
          opens.
        </p>
        <CareerForm form={form} />
      </section>
    </Container>
  )
}
