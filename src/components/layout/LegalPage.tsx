import type { ReactNode } from 'react'
import Container from '@/components/common/Container'
import PageHeading from '@/components/common/PageHeading'
import PageContainer from './PageContainer'

interface LegalPageProps {
  /** White part of the page title. */
  title: string
  /** Teal part of the page title. */
  highlight: string
  children: ReactNode
}

/**
 * Shell of the pages linked from the footer's legal bar. The design has no
 * legal pages, so this is the standard page heading over a narrow text column.
 */
export default function LegalPage({ title, highlight, children }: LegalPageProps) {
  return (
    <PageContainer title={`${title} ${highlight}`}>
      <PageHeading label="Legal" title={title} highlight={highlight} />
      {/* The top padding includes the empty 37px band the design leaves under every hero. */}
      <Container size="narrow" className="pt-14 pb-14 md:pt-25 md:pb-16">
        {children}
      </Container>
    </PageContainer>
  )
}
