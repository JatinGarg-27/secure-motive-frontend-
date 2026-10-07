import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'

// Must match the `lg` breakpoint at which the header switches to desktop navigation.
const DESKTOP_QUERY = '(min-width: 64rem)'

/**
 * Open/close state for the mobile navigation.
 *
 * The menu is tied to the navigation entry it was opened on, so any route
 * change closes it without an effect. While open it locks page scroll, closes
 * on Escape (returning focus to the toggle) and closes if the viewport grows
 * to desktop width.
 */
export function useMobileMenu() {
  const { key } = useLocation()
  const [openOnKey, setOpenOnKey] = useState<string | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const isOpen = openOnKey === key
  const close = useCallback(() => setOpenOnKey(null), [])
  const toggle = () => setOpenOnKey(isOpen ? null : key)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      close()
      toggleRef.current?.focus()
    }
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onViewportChange = () => {
      if (desktop.matches) close()
    }

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onViewportChange)
    document.documentElement.classList.add('overflow-hidden')

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onViewportChange)
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [isOpen, close])

  return { isOpen, toggle, close, toggleRef }
}

export type MobileMenuState = ReturnType<typeof useMobileMenu>
