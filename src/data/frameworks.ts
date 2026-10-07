import type { Framework } from '@/types/service'

/** Compliance & framework coverage, in the order the Home page shows it. */
export const frameworks: Framework[] = [
  { id: 'unece-r155', code: 'UNECE R155', name: 'Vehicle Cybersecurity Management' },
  { id: 'unece-r156', code: 'UNECE R156', name: 'Software Update Management' },
  { id: 'ais-189', code: 'AIS 189', name: 'India Cybersecurity Regulation' },
  { id: 'ais-190', code: 'AIS 190', name: 'India SUMS Regulation' },
  { id: 'iso-21434', code: 'ISO 21434', name: 'Road Vehicle Cybersecurity' },
  { id: 'iso-24089', code: 'ISO 24089', name: 'Software Update Engineering' },
  { id: 'iec-62443', code: 'IEC 62443', name: 'Industrial Cybersecurity' },
  { id: 'reg-2024-2847', code: 'Reg. 2024/2847', name: 'Cyber Resilience Act' },
  { id: 'iso-24882', code: 'ISO 24882', name: 'Agricultural Machinery Cybersecurity' },
  { id: 'tisax', code: 'TISAX', name: 'Automotive Info Security Assessment' },
]

/** The footer lists a subset, in its own order. */
export const footerFrameworkCodes: string[] = [
  'UNECE R155',
  'UNECE R156',
  'ISO 21434',
  'ISO 24089',
  'IEC 62443',
  'AIS 189',
  'AIS 190',
  'TISAX',
]

/** Sector card that follows the framework grid, and the footer "Sector Focus". */
export const sectorFocus = {
  name: 'AUTOMOTIVE',
  description: 'Primary Sector Focus',
  tag: 'SECTOR TAG',
} as const
