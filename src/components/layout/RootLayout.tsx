import { Outlet, ScrollRestoration } from 'react-router'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import Footer from './Footer'
import Header from './Header'

/** Shell shared by every route: fixed header, routed page, footer. */
export default function RootLayout() {
  const menu = useMobileMenu()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-lg focus:bg-cyber-teal focus:px-4 focus:py-2 focus:font-code focus:text-xs focus:text-cyber-bg"
      >
        Skip to content
      </a>
      <Header menu={menu} />
      {/* While the mobile menu covers the page, keep focus and clicks out of it. */}
      <div inert={menu.isOpen} className="flex flex-1 flex-col">
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollRestoration />
    </div>
  )
}
