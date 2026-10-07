import NavCard from '@/components/common/NavCard'
import { getAdjacentArticles } from '@/data/articles'
import { articleDetailPath } from '@/routes/paths'

/**
 * Links to the neighbouring articles, taken from the order of the article
 * data. At either end of the list the missing side is simply left out.
 */
export default function ArticleNavigation({ slug }: { slug: string }) {
  const { newer, older } = getAdjacentArticles(slug)
  if (!newer && !older) return null

  return (
    <nav aria-label="More articles" className="flex flex-col gap-5">
      {older && (
        <NavCard label="Next article" title={older.title} to={articleDetailPath(older.slug)} />
      )}
      {newer && (
        <NavCard
          label="Previous article"
          title={newer.title}
          to={articleDetailPath(newer.slug)}
          direction="back"
        />
      )}
    </nav>
  )
}
