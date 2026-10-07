import type { ServiceAccent } from '@/types/service'

interface AccentClasses {
  /** Category label and "View details" link. */
  text: string
  /** 4px bar down the left edge of the row header (top to bottom). */
  bar: string
  /** Start colour of the row header's fading wash. */
  wash: string
  /** Capability chip fill. */
  chip: string
  /** Capability chip dot. */
  dot: string
  /**
   * Row title colour on hover. In the design only the teal row's title
   * changes; the others stay white.
   */
  titleHover: string
}

// Every class name is written out in full so Tailwind can find it.
export const ACCENT_CLASSES: Record<ServiceAccent, AccentClasses> = {
  teal: {
    text: 'text-cyber-teal',
    bar: 'from-cyber-teal to-cyber-teal/30',
    wash: 'from-cyber-teal/8',
    chip: 'bg-cyber-teal/5',
    dot: 'bg-cyber-teal',
    titleHover: 'group-hover:text-cyber-teal',
  },
  orange: {
    text: 'text-cyber-orange',
    bar: 'from-cyber-orange to-cyber-orange/30',
    wash: 'from-cyber-orange/8',
    chip: 'bg-cyber-orange/5',
    dot: 'bg-cyber-orange',
    titleHover: '',
  },
  yellow: {
    text: 'text-accent-yellow',
    bar: 'from-accent-yellow to-accent-yellow/30',
    wash: 'from-accent-yellow/8',
    chip: 'bg-accent-yellow/5',
    dot: 'bg-accent-yellow',
    titleHover: '',
  },
  red: {
    text: 'text-accent-red',
    bar: 'from-accent-red to-accent-red/30',
    wash: 'from-accent-red/8',
    chip: 'bg-accent-red/5',
    dot: 'bg-accent-red',
    titleHover: '',
  },
  purple: {
    text: 'text-accent-purple',
    bar: 'from-accent-purple to-accent-purple/30',
    wash: 'from-accent-purple/8',
    chip: 'bg-accent-purple/5',
    dot: 'bg-accent-purple',
    titleHover: '',
  },
}
