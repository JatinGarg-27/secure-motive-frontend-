import { cn } from '@/utils/helpers'
import Divider from './Divider'
import SectionLabel from './SectionLabel'

interface SectionHeadingProps {
  label: string
  /** White part of the heading. */
  title: string
  /** Teal part of the heading, shown after the title. */
  highlight?: string
  /** Puts the highlight on its own line ("WHY CHOOSE" / "SECUREXMOTIVE"). */
  stacked?: boolean
  /** `lg` (60px) is used on Home, `md` (36px) on the inner pages. */
  size?: 'lg' | 'md'
  /** The fading rule under the heading. Off where text follows directly. */
  divider?: boolean
  className?: string
}

const SIZE_CLASSES = {
  lg: 'text-4xl md:text-5xl lg:text-6xl',
  md: 'text-3xl sm:text-4xl',
} as const

/** Section opener: mono label, two-tone uppercase heading, fading rule. */
export default function SectionHeading({
  label,
  title,
  highlight,
  stacked = false,
  size = 'md',
  divider = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <SectionLabel>{label}</SectionLabel>
      <h2
        className={cn(
          'font-display font-bold tracking-tight text-white uppercase',
          divider && 'pb-2',
          SIZE_CLASSES[size],
        )}
      >
        {title}
        {highlight && (
          <span className={cn('text-cyber-teal', stacked && 'block')}>
            {!stacked && ' '}
            {highlight}
          </span>
        )}
      </h2>
      {divider && <Divider width="sm" />}
    </div>
  )
}
