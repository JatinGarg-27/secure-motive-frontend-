import type { Article } from '@/types/article'
import ItemMeta from './ItemMeta'

/** Category tag, publication date and read time of an article. */
export default function ArticleMeta({ article }: { article: Article }) {
  return (
    <ItemMeta
      category={article.category}
      publishedAt={article.publishedAt}
      detail={`${article.readMinutes} min read`}
    />
  )
}
