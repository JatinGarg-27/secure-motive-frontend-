import ContentPlaceholder from '@/components/common/ContentPlaceholder'
import LegalPage from '@/components/layout/LegalPage'

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of" highlight="Service">
      <ContentPlaceholder label="[Legal content placeholder]">
        The terms of service have not been supplied yet. Their text will appear here.
      </ContentPlaceholder>
    </LegalPage>
  )
}
