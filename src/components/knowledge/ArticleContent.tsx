import ContentPlaceholder from '@/components/common/ContentPlaceholder'
import type { Article } from '@/types/article'

/** The body of an article: optional headings, paragraphs and bullet lists. */
export default function ArticleContent({ article }: { article: Article }) {
  if (!article.content) {
    return (
      <ContentPlaceholder label="[Article content placeholder]">
        The text of this article has not been supplied yet. It will appear here once it is added
        to the article data.
      </ContentPlaceholder>
    )
  }

  return (
    <div className="flex flex-col gap-12">
      {article.content.map((section, index) => (
        <section key={section.heading ?? index}>
          {section.heading && (
            <h2 className="mb-3 font-display text-xl font-semibold tracking-wide text-cyber-teal">
              {section.heading}
            </h2>
          )}
          <div className="flex flex-col gap-4 leading-relaxed text-cyber-muted">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul className="flex flex-col gap-2.5">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyber-orange"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
