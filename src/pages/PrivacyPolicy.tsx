import ContentPlaceholder from '@/components/common/ContentPlaceholder'
import LegalPage from '@/components/layout/LegalPage'

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy" highlight="Policy">
      <ContentPlaceholder label="[Legal content placeholder]">
        The privacy policy has not been supplied yet. Its text will appear here.
      </ContentPlaceholder>
    </LegalPage>
  )
}
