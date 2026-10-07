import Tag from '@/components/common/Tag'
import { formatDate } from '@/utils/helpers'

interface ItemMetaProps {
  category?: string
  /** ISO date or date-time. */
  publishedAt?: string
  /** Extra fact after the date, e.g. "8 min read". */
  detail?: string
}

/** Metadata line shared by articles, reports and videos: tag, date, one detail. */
export default function ItemMeta({ category, publishedAt, detail }: ItemMetaProps) {
  if (!category && !publishedAt && !detail) return null

  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-code text-xs text-cyber-muted">
      {category && <Tag>{category}</Tag>}
      {publishedAt && <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>}
      {detail && <span>{detail}</span>}
    </p>
  )
}
