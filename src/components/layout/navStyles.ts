import { cn } from '@/utils/helpers'

/** Typography shared by every primary navigation label. */
export const NAV_LABEL_CLASSES = 'font-code text-xs tracking-widest uppercase'

/** Colours of a primary navigation item: muted by default, teal on a teal wash when active. */
export function navItemColors(isActive: boolean): string {
  return cn(
    'rounded-lg transition-colors',
    isActive ? 'bg-cyber-teal/8 text-cyber-teal' : 'text-cyber-muted hover:text-cyber-teal',
  )
}
