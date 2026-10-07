import NavCard from '@/components/common/NavCard'
import { getNextServiceDomain } from '@/data/services'
import { serviceDetailPath } from '@/routes/paths'

/**
 * "Next service" card linking to the domain that follows `slug` in the data.
 * Renders nothing on the last domain: the design shows no wrap-around.
 */
export default function NextService({ slug }: { slug: string }) {
  const next = getNextServiceDomain(slug)
  if (!next) return null

  return <NavCard label="Next service" title={next.name} to={serviceDetailPath(next.slug)} />
}
