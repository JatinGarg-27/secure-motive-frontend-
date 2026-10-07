import Button from '@/components/common/Button'
import CtaBand from '@/components/common/CtaBand'
import { ROUTES } from '@/routes/paths'

/** Closing band of the Company page: contact, or join the team. */
export default function CompanyCTA() {
  return (
    <CtaBand
      title="Ready to work with us?"
      description="Whether you need a TARA, a penetration test, or a full CSMS — our team is ready."
    >
      <Button to={ROUTES.contact}>Contact us</Button>
      <Button variant="secondary" to={ROUTES.careers}>
        Join our team
      </Button>
    </CtaBand>
  )
}
