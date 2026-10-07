import SecurityDisclosureCard from '@/components/contact/SecurityDisclosure'
import LegalPage from '@/components/layout/LegalPage'

// The only disclosure copy that exists is the Contact page's card, so the page shows that card.
export default function SecurityDisclosure() {
  return (
    <LegalPage title="Security" highlight="Disclosure">
      <SecurityDisclosureCard />
    </LegalPage>
  )
}
