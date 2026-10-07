/**
 * Single source of truth for URLs. Components link through these helpers
 * instead of hardcoding path strings.
 */
export const ROUTES = {
  home: '/',
  services: '/services',
  serviceDetail: '/services/:serviceSlug',
  knowledgeCentre: '/knowledge-centre',
  articleDetail: '/knowledge-centre/articles/:slug',
  careers: '/careers',
  company: '/company',
  contact: '/contact',
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
  securityDisclosure: '/security-disclosure',
} as const

export const serviceDetailPath = (serviceSlug: string) => `/services/${serviceSlug}`

export const articleDetailPath = (slug: string) => `/knowledge-centre/articles/${slug}`
