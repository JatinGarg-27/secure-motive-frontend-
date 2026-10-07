import type { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router'
import type { ServiceAccent } from '@/types/service'
import { cn } from '@/utils/helpers'

/**
 * `primary`   — solid teal with a Rajdhani label ("Book Free Consultation").
 * `secondary` — same shape as primary, outlined ("Join Our Team").
 * `outline`   — technical mono-label outline ("Get Assessment", "Learn More").
 */
type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonBaseProps {
  variant?: ButtonVariant
  /** `outline` only: `sm` header button, `md` job "Apply now", `lg` service "Learn more". */
  size?: 'sm' | 'md' | 'lg'
  /** `outline` only: colour family, for the per-domain service buttons. */
  accent?: ServiceAccent
  fullWidth?: boolean
  /** Rendered after the label, e.g. an arrow. */
  icon?: ReactNode
  className?: string
  children: ReactNode
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  to?: undefined
  href?: undefined
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

/** Internal navigation — renders a React Router link. */
interface ButtonAsLinkProps extends ButtonBaseProps {
  to: string
  href?: undefined
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

/** External URL — renders a plain anchor that opens in a new tab. */
interface ButtonAsAnchorProps extends ButtonBaseProps {
  href: string
  to?: undefined
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps | ButtonAsAnchorProps

const BASE_CLASSES =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg text-center whitespace-nowrap uppercase transition disabled:pointer-events-none disabled:opacity-50'

const DISPLAY_LABEL = 'font-display text-btn tracking-button'

// Secondary has primary's padding plus its border, as in the design: 50px tall
// against primary's 48px (a primary beside it stretches to match).
const VARIANT_CLASSES: Record<Exclude<ButtonVariant, 'outline'>, string> = {
  primary: cn(
    DISPLAY_LABEL,
    'bg-cyber-teal px-8 py-3.5 font-bold text-cyber-bg hover:bg-cyber-teal/85 hover:shadow-glow',
  ),
  secondary: cn(
    DISPLAY_LABEL,
    'border border-cyber-teal/40 px-8 py-3.5 font-semibold text-cyber-teal hover:border-cyber-teal hover:bg-cyber-teal/10',
  ),
}

const OUTLINE_SIZE_CLASSES = {
  sm: 'px-5 py-2',
  md: 'px-5 py-2.5',
  lg: 'px-6 py-3',
} as const

// Written out in full so Tailwind can see every class name.
const OUTLINE_ACCENT_CLASSES: Record<ServiceAccent, string> = {
  teal: 'border-cyber-teal/40 text-cyber-teal',
  orange: 'border-cyber-orange text-cyber-orange',
  yellow: 'border-accent-yellow text-accent-yellow',
  red: 'border-accent-red text-accent-red',
  purple: 'border-accent-purple text-accent-purple',
}

// The header button is the one teal outline drawn with a full-strength border.
const OUTLINE_HEADER_CLASSES = 'border-cyber-teal text-cyber-teal'

function getClasses({
  variant = 'primary',
  size = 'lg',
  accent = 'teal',
  fullWidth,
  className,
}: ButtonBaseProps): string {
  const variantClasses =
    variant === 'outline'
      ? cn(
          'border font-code text-xs tracking-widest hover:bg-current/10',
          OUTLINE_SIZE_CLASSES[size],
          size === 'sm' && accent === 'teal'
            ? OUTLINE_HEADER_CLASSES
            : OUTLINE_ACCENT_CLASSES[accent],
        )
      : VARIANT_CLASSES[variant]

  return cn(BASE_CLASSES, variantClasses, fullWidth && 'w-full', className)
}

export default function Button(props: ButtonProps) {
  const classes = getClasses(props)
  const content = (
    <>
      {props.children}
      {props.icon}
    </>
  )

  if (props.to !== undefined) {
    return (
      <Link to={props.to} onClick={props.onClick} className={classes}>
        {content}
      </Link>
    )
  }

  if (props.href !== undefined) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes}
    >
      {content}
    </button>
  )
}
