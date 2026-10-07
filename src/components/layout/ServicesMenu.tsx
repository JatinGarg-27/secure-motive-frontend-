import { useRef, useState } from 'react'
import type { FocusEvent, KeyboardEvent } from 'react'
import { Link, useMatch } from 'react-router'
import { ChevronDownIcon } from '@/components/common/icons'
import { serviceDomains } from '@/data/services'
import { ROUTES, serviceDetailPath } from '@/routes/paths'
import { cn } from '@/utils/helpers'
import { NAV_LABEL_CLASSES, navItemColors } from './navStyles'

/**
 * "Services" item of the desktop navigation.
 *
 * The label links to the Services page; the chevron (and hovering the item)
 * opens a menu of the five service domains. The design shows only the closed
 * item, so the panel is composed from existing tokens.
 */
export default function ServicesMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const isActive = useMatch({ path: ROUTES.services, end: false }) !== null
  const linkRef = useRef<HTMLAnchorElement>(null)

  const closeWhenFocusLeaves = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
  }

  const closeOnEscape = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Escape' || !isOpen) return
    setIsOpen(false)
    linkRef.current?.focus()
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={closeWhenFocusLeaves}
      onKeyDown={closeOnEscape}
    >
      <div className={cn('flex items-center', navItemColors(isActive))}>
        <Link
          ref={linkRef}
          to={ROUTES.services}
          aria-current={isActive ? 'page' : undefined}
          className={cn(NAV_LABEL_CLASSES, 'rounded-l-lg py-2 pr-1 pl-2.5 nav:pl-4')}
        >
          Services
        </Link>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="services-menu"
          aria-label="Services menu"
          onClick={() => setIsOpen((open) => !open)}
          className="cursor-pointer rounded-r-lg py-2.5 pr-2.5 nav:pr-4"
        >
          <ChevronDownIcon
            className={cn('size-3 transition-transform', isOpen && 'rotate-180')}
          />
        </button>
      </div>

      {/* pt-2 keeps the pointer inside the hover area while crossing the gap. */}
      <div
        id="services-menu"
        className={cn(
          'absolute top-full left-0 pt-2 transition-[opacity,visibility]',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <ul className="rounded-card border border-cyber-teal/15 bg-cyber-surface p-2">
          {serviceDomains.map((domain) => (
            <li key={domain.slug}>
              <Link
                to={serviceDetailPath(domain.slug)}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm whitespace-nowrap text-cyber-muted transition-colors hover:bg-cyber-teal/8 hover:text-cyber-teal"
              >
                {domain.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
