import { useParams } from 'react-router'
import Container from '@/components/common/Container'
import PageContainer from '@/components/layout/PageContainer'
import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceItemSection from '@/components/services/ServiceItemSection'
import ServiceSidebar from '@/components/services/ServiceSidebar'
import { getServiceDomain } from '@/data/services'
import NotFound from './NotFound'

/** One template for all five domains; the content comes from `serviceDomains`. */
export default function ServiceDetail() {
  const { serviceSlug = '' } = useParams()
  const domain = getServiceDomain(serviceSlug)

  if (!domain) return <NotFound />

  return (
    <PageContainer title={`${domain.name} services`}>
      <ServiceDetailHero domain={domain} />
      {/* The top padding includes the empty 37px band the design leaves under every hero. */}
      <Container className="grid items-start gap-12 pt-14 pb-14 md:pt-25 md:pb-16 lg:grid-cols-3">
        <div className="flex flex-col gap-12 lg:col-span-2">
          {domain.intro && (
            <p className="text-lg leading-relaxed text-cyber-muted">{domain.intro}</p>
          )}
          {domain.items.map((item) => (
            <ServiceItemSection key={item.slug} item={item} />
          ))}
        </div>
        <ServiceSidebar domain={domain} />
      </Container>
    </PageContainer>
  )
}
