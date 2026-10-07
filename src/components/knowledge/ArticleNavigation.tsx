import NavCard from '@/components/common/NavCard'
import { getAdjacentArticles } from '@/data/articles'
import { articleDetailPath } from '@/routes/paths'

/**
 * Links to the neighbouring articles, taken from the order of the article
 * data. At either end of the list the missing side is simply left out.
 */
export default function ArticleNavigation({ slug }: { slug: string }) {
  const { previous, next } = getAdjacentArticles(slug)
  if (!previous && !next) return null

  return (
    <nav aria-label="More articles" className="flex flex-col gap-5">
      {next && (
        <NavCard label="Next article" title={next.title} to={articleDetailPath(next.slug)} />
      )}
      {previous && (
        <NavCard
          label="Previous article"
          title={previous.title}
          to={articleDetailPath(previous.slug)}
          direction="back"
        />
      )}
    </nav>
  )
}
