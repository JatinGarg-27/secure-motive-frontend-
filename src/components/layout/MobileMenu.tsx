import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import { ChevronDownIcon } from '@/components/common/icons'
import { headerCta, primaryNav } from '@/data/navigation'
import { serviceDomains } from '@/data/services'
import { ROUTES, serviceDetailPath } from '@/routes/paths'
import { cn } from '@/utils/helpers'
import { NAV_LABEL_CLASSES, navItemColors } from './navStyles'

interface MobileMenuProps {
  id: string
  isOpen: boolean
  onClose: () => void
}

/**
 * Navigation panel for viewports below `lg`. It drops down from the header and
 * covers the page. The design has no mobile frames, so it reuses the desktop
 * navigation's typography and states.
 */
export default function MobileMenu({ id, isOpen, onClose }: MobileMenuProps) {
  const [showServices, setShowServices] = useState(false)

  return (
    <div
      id={id}
      inert={!isOpen}
      className={cn(
        'absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-cyber-teal/10 bg-cyber-bg transition-[opacity,translate,visibility] lg:hidden',
        isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
      )}
    >
      <Container className="flex flex-col gap-6 py-6">
        <nav aria-label="Primary">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => {
              const isServices = item.to === ROUTES.services
              return (
                <li key={item.to}>
                  <div className="flex items-stretch gap-1">
                    <NavLink
                      to={item.to}
                      end={item.to === ROUTES.home}
                      onClick={onClose}
                      className={({ isActive }) =>
                        cn(NAV_LABEL_CLASSES, 'flex-1 px-4 py-3.5', navItemColors(isActive))
                      }
                    >
                      {item.label}
                    </NavLink>
                    {isServices && (
                      <button
                        type="button"
                        aria-expanded={showServices}
                        aria-controls={`${id}-services`}
                        aria-label="Services list"
                        onClick={() => setShowServices((shown) => !shown)}
                        className={cn('cursor-pointer px-4', navItemColors(false))}
                      >
                        <ChevronDownIcon
                          className={cn('size-3 transition-transform', showServices && 'rotate-180')}
                        />
                      </button>
                    )}
                  </div>
                  {isServices && (
                    <ul
                      id={`${id}-services`}
                      hidden={!showServices}
                      className="mt-1 ml-4 flex flex-col border-l border-cyber-teal/15 pl-2"
                    >
                      {serviceDomains.map((domain) => (
                        <li key={domain.slug}>
                          <Link
                            to={serviceDetailPath(domain.slug)}
                            onClick={onClose}
                            className="block rounded-lg px-4 py-2.5 text-sm text-cyber-muted transition-colors hover:text-cyber-teal"
                          >
                            {domain.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
        <Button variant="outline" size="lg" fullWidth to={headerCta.to} onClick={onClose}>
          {headerCta.label}
        </Button>
      </Container>
    </div>
  )
}
