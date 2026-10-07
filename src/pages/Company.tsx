import PageHeading from '@/components/common/PageHeading'
import TechnicalTicker from '@/components/common/TechnicalTicker'
import CompanyCTA from '@/components/company/CompanyCTA'
import CompanyTimeline from '@/components/company/CompanyTimeline'
import CoreValues from '@/components/company/CoreValues'
import MissionVision from '@/components/company/MissionVision'
import PageContainer from '@/components/layout/PageContainer'
import { companyIntro } from '@/data/company'
import { tickers } from '@/data/tickers'

/** Soft teal glow in the top-right corner of the Company hero. */
const heroGlow = (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute top-0 right-0 size-125 rounded-full bg-cyber-teal/3 blur-[32px]"
  />
)

export default function Company() {
  return (
    <PageContainer title="Company">
      <PageHeading
        label="About us"
        title="Our"
        highlight="Company"
        description={companyIntro}
        descriptionSize="lg"
        background={heroGlow}
      />
      <MissionVision />
      <TechnicalTicker items={tickers.companyValues} />
      <CoreValues />
      <TechnicalTicker items={tickers.companyMilestones} tone="grey" />
      <CompanyTimeline />
      <CompanyCTA />
    </PageContainer>
  )
}
