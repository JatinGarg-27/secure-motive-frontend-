import { cn } from '@/utils/helpers'

interface LogoProps {
  /** The footer lockup has a slightly smaller mark and a larger wordmark. */
  size?: 'header' | 'footer'
  className?: string
}

/**
 * SecureXmotive lockup: shield mark, wordmark and tagline.
 *
 * The shield is the vector exported from Figma (`public/logos/`); the letters
 * are live text, as in the design. To swap in a final logo, replace the mark
 * here — the header and footer only depend on this component.
 */
export default function Logo({ size = 'header', className }: LogoProps) {
  const isFooter = size === 'footer'

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'relative flex shrink-0 items-center justify-center',
          isFooter ? 'h-8 w-7' : 'h-[34px] w-[30px]',
        )}
      >
        {/* The export includes the stroke, so it is a touch taller than its box. */}
        <img
          src="/logos/securexmotive-shield.svg"
          alt=""
          className="absolute top-1/2 left-1/2 h-[104.85%] w-[91.67%] max-w-none -translate-1/2"
        />
        <span
          className={cn(
            'relative font-display leading-none font-bold text-cyber-teal',
            isFooter ? 'text-xs' : 'text-btn',
          )}
        >
          X
        </span>
      </span>
      <span className="flex flex-col items-center">
        <span
          className={cn(
            'font-display font-bold tracking-wide text-white',
            isFooter ? 'text-lg' : 'text-base',
          )}
        >
          secure<span className="text-cyber-teal">X</span>motive
        </span>
        <span className="mt-0.5 font-code text-3xs tracking-widest text-cyber-muted">
          AUTOMOTIVE CYBERSECURITY
        </span>
      </span>
    </span>
  )
}
