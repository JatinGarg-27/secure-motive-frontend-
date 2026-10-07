import type { Benefit, Job } from '@/types/career'

/** "Why choose SecureXmotive" cards on the Careers page. */
export const benefits: Benefit[] = [
  {
    index: '01',
    title: 'Frontier Technology',
    description:
      'Work on cutting-edge automotive cybersecurity challenges — the intersection of safety-critical embedded systems and modern threat landscapes.',
  },
  {
    index: '02',
    title: 'Regulatory Influence',
    description:
      'Contribute to shaping how automotive cybersecurity standards are interpreted and applied across OEMs, suppliers, and regulators.',
  },
  {
    index: '03',
    title: 'Continuous Growth',
    description:
      'Dedicated training budget, conference attendance, certification sponsorship for ISO/SAE credentials, and mentorship from senior specialists.',
  },
  {
    index: '04',
    title: 'Remote-First Culture',
    description:
      'Work from anywhere with optional hub access in Munich, Pune, and Singapore. Flexible hours built around deliverable accountability.',
  },
  {
    index: '05',
    title: 'Meaningful Impact',
    description:
      'Your work directly protects vehicle platforms used by millions of drivers globally — cybersecurity with a human cost to get wrong.',
  },
  {
    index: '06',
    title: 'Competitive Package',
    description:
      'Above-market base compensation, performance bonus, equity options, and comprehensive benefits aligned with your home country.',
  },
]

/** Open roles, in display order. */
export const jobs: Job[] = [
  {
    id: 'senior-automotive-cybersecurity-engineer',
    department: 'ENGINEERING',
    badge: 'HOT',
    title: 'Senior Automotive Cybersecurity Engineer',
    locations: ['Munich', 'Remote'],
    employmentType: 'Full-Time',
  },
  {
    id: 'tara-specialist-iso-21434',
    department: 'RISK',
    title: 'TARA Specialist — ISO 21434',
    locations: ['Pune', 'Remote'],
    employmentType: 'Full-Time',
  },
  {
    id: 'automotive-penetration-tester',
    department: 'OFFENSIVE',
    badge: 'HOT',
    title: 'Automotive Penetration Tester',
    locations: ['Remote'],
    employmentType: 'Full-Time',
  },
  {
    id: 'compliance-consultant-unece-r155-r156',
    department: 'COMPLIANCE',
    title: 'Compliance Consultant — UNECE R155/R156',
    locations: ['Brussels', 'Remote'],
    employmentType: 'Full-Time',
  },
  {
    id: 'security-architect-ee-systems',
    department: 'ARCHITECTURE',
    title: 'Security Architect — E/E Systems',
    locations: ['Stuttgart', 'Remote'],
    employmentType: 'Full-Time',
  },
  {
    id: 'graduate-cybersecurity-analyst',
    department: 'ANALYST',
    badge: 'NEW',
    title: 'Graduate Cybersecurity Analyst',
    locations: ['Pune', 'Munich'],
    employmentType: 'Full-Time',
  },
  {
    id: 'automotive-cybersecurity-intern',
    department: 'ENGINEERING',
    badge: 'NEW',
    title: 'Automotive Cybersecurity Intern',
    locations: ['Pune'],
    employmentType: 'Internship',
  },
]

/**
 * Options of the "Role of interest" select. The design shows the closed
 * select only, so the open roles are used as its options (inferred).
 */
export const roleOptions: string[] = jobs.map((job) => job.title)
