import type { Office, ResponseTime } from '@/types/contact'

export const offices: Office[] = [
  {
    city: 'Pune',
    country: 'India',
    address: 'Cybercity, Magarpatta Township, Hadapsar, Pune 411013',
    email: 'pune@securexmotive.com',
    phone: '+91 20 4852 7200',
  },
  {
    city: 'Munich',
    country: 'Germany',
    address: 'Parkring 6, 85748 Garching bei München, Germany',
    email: 'munich@securexmotive.com',
    phone: '+49 89 215 3480',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Fusionopolis Place, Galaxis #07-08, Singapore 138522',
    email: 'sg@securexmotive.com',
    phone: '+65 6327 4800',
  },
]

export const responseTimes: ResponseTime[] = [
  { label: 'Initial response: 1 business day', tone: 'orange' },
  { label: 'Assessment proposal: 3–5 business days', tone: 'teal' },
]

/** Contact-page "Security disclosure" card. */
export const securityDisclosure = {
  heading: 'SECURITY DISCLOSURE',
  body: 'Found a vulnerability in automotive infrastructure? Use our responsible disclosure process.',
  email: 'security@securexmotive.com',
} as const
