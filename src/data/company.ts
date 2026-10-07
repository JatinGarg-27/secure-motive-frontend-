import type { CompanyStatement, CoreValue, TimelineEntry } from '@/types/company'

export const companyIntro =
  'SecureXmotive was founded with a single conviction: automotive cybersecurity must be practiced by people who understand vehicles, not just networks.'

export const statements: CompanyStatement[] = [
  {
    label: 'MISSION',
    heading: 'Making Every Vehicle a Cyber-Resilient Platform',
    body: 'We exist to close the gap between ambitious vehicle connectivity roadmaps and the cybersecurity engineering discipline required to execute them safely. By embedding automotive domain expertise into every engagement, we help OEMs and suppliers achieve genuine security — not checkbox compliance.',
    tone: 'teal',
  },
  {
    label: 'VISION',
    heading: 'A World Where Connected Vehicles Cannot Be Weaponized',
    body: 'We envision a future where every vehicle on the road has been built with security rigor comparable to the engineering excellence the automotive industry applies to safety — because in connected vehicles, the two are inseparable.',
    tone: 'orange',
  },
]

export const coreValues: CoreValue[] = [
  {
    index: '01',
    title: 'Technical Integrity',
    description:
      'We never compromise on technical quality. Our work is verifiable, reproducible, and defensible under regulatory scrutiny.',
  },
  {
    index: '02',
    title: 'Domain Depth',
    description:
      'Generic cybersecurity is not enough. We invest continuously in automotive-specific knowledge — ECUs, buses, protocols, and standards.',
  },
  {
    index: '03',
    title: 'Client Partnership',
    description:
      'We work as embedded partners, not arms-length consultants. Your program outcomes are our outcomes.',
  },
  {
    index: '04',
    title: 'Transparency',
    description:
      'We report findings, gaps, and risks accurately — including the difficult ones. Sanitized reports do not protect vehicles.',
  },
]

export const timeline: TimelineEntry[] = [
  {
    year: '2019',
    event: 'SecureXmotive founded in Pune, India, with a focus on ISO 21434 pre-publication work.',
  },
  { year: '2020', event: 'First OEM CSMS implementation completed. Team expands to Munich.' },
  {
    year: '2021',
    event:
      'ISO 21434 published. SecureXmotive supports three Tier-1 suppliers with immediate gap assessments.',
  },
  {
    year: '2022',
    event:
      'UNECE R155/R156 enforcement begins. First type approval support engagements completed.',
  },
  {
    year: '2023',
    event:
      'Singapore office opens. Penetration Testing practice established under dedicated leadership.',
  },
  {
    year: '2024',
    event: 'AIS 189/190 India compliance practice launched. CRA readiness service introduced.',
  },
  {
    year: '2025',
    event:
      '200th vehicle platform secured. TARA practice recognized as ISO 21434 reference methodology.',
  },
  {
    year: '2026',
    event:
      'Expansion to Brussels. Knowledge Centre launched to serve the broader automotive security community.',
  },
]
