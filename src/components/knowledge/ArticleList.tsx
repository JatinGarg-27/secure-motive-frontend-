import { articles } from '@/data/articles'
import ArticleCard from './ArticleCard'

/** The Articles tab: every article as a stacked row, in the order of the article data. */
export default function ArticleList() {
  return (
    <ul className="flex flex-col gap-3">
      {articles.map((article) => (
        <li key={article.slug}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  )
}
