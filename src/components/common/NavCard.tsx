import Card from './Card'
import { ArrowLeftIcon, ArrowRightIcon } from './icons'
import SectionLabel from './SectionLabel'

interface NavCardProps {
  /** Small grey label, e.g. "Next service". */
  label: string
  title: string
  to: string
  /** `back` puts the arrow on the left, for "previous" links. */
  direction?: 'forward' | 'back'
}

/** Compact link card that moves to a neighbouring page ("NEXT SERVICE →"). */
export default function NavCard({ label, title, to, direction = 'forward' }: NavCardProps) {
  const arrowClasses = 'size-4 shrink-0 text-white transition-colors group-hover:text-cyber-teal'

  return (
    <Card to={to} className="p-4">
      <SectionLabel tone="muted" as="span" className="block">
        {label}
      </SectionLabel>
      <span className="mt-1 flex items-center justify-between gap-4">
        {direction === 'back' && <ArrowLeftIcon className={arrowClasses} />}
        <span className="flex-1 font-display font-semibold tracking-wide text-white transition-colors group-hover:text-cyber-teal">
          {title}
        </span>
        {direction === 'forward' && <ArrowRightIcon className={arrowClasses} />}
      </span>
    </Card>
  )
}
