import { ROUTES } from '@/routes/paths'

export interface NavItem {
  label: string
  to: string
}

/** Primary navigation, in header order. "Services" also opens the services menu. */
export const primaryNav: NavItem[] = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Services', to: ROUTES.services },
  { label: 'Knowledge Centre', to: ROUTES.knowledgeCentre },
  { label: 'Career', to: ROUTES.careers },
  { label: 'Company', to: ROUTES.company },
  { label: 'Contact Us', to: ROUTES.contact },
]

/** Header call-to-action button. */
export const headerCta: NavItem = { label: 'Get Assessment', to: ROUTES.contact }

/** Legal links in the footer's bottom bar. */
export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', to: ROUTES.privacyPolicy },
  { label: 'Terms of Service', to: ROUTES.termsOfService },
  { label: 'Security Disclosure', to: ROUTES.securityDisclosure },
]

export const footerTagline =
  'Automotive cybersecurity specialists delivering compliance, resilience, and trust for the connected vehicle ecosystem.'
