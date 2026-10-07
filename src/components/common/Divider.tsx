import { cn } from '@/utils/helpers'

type DividerWidth = 'sm' | 'md' | 'full'

interface DividerProps {
  /** `sm` 192px under section headings, `md` 256px under page titles, `full` in the footer. */
  width?: DividerWidth
  className?: string
}

const WIDTH_CLASSES: Record<DividerWidth, string> = {
  sm: 'w-48',
  md: 'w-64',
  full: 'w-full',
}

/** The site's signature rule: a 1px teal line that fades out at both ends. */
export default function Divider({ width = 'sm', className }: DividerProps) {
  return <div aria-hidden="true" className={cn('gradient-line max-w-full', WIDTH_CLASSES[width], className)} />
}
