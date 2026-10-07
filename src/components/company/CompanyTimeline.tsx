import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { timeline } from '@/data/company'

/** "Our journey": year, marker on a vertical rule, and the milestone. */
export default function CompanyTimeline() {
  return (
    <Container size="wide" className="py-14 md:py-20">
      <SectionHeading label="History" title="Our" highlight="Journey" className="mb-12" />
      <div className="relative">
        {/* The rule runs midway between the year column (48px) and the markers. */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-14 w-px bg-cyber-teal/15 sm:left-16"
        />
        <ol className="flex flex-col gap-8">
          {timeline.map((entry) => (
            <li key={entry.year} className="flex items-start gap-4 sm:gap-8">
              <span className="w-12 shrink-0 text-right font-display text-lg font-bold text-cyber-teal">
                {entry.year}
              </span>
              <span
                aria-hidden="true"
                className="relative mt-1.5 flex size-4 shrink-0 items-center justify-center"
              >
                <span className="size-3 rounded-full bg-cyber-orange" />
                <span className="absolute inset-0 rounded-full bg-cyber-orange/20" />
              </span>
              <p className="pt-0.5 text-sm leading-relaxed text-cyber-muted">{entry.event}</p>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  )
}
