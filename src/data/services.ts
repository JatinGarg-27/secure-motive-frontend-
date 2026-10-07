import type { ServiceDomain } from '@/types/service'

/**
 * The five service domains, in display order. This file is the single source
 * for the Services page, the domain pages, the Home previews, the navigation
 * menus, the footer and the Contact form's service list.
 *
 * The wording is the client's supplied technical content and must not be
 * paraphrased. Where the source breaks a sentence around a list, the same
 * shape is kept here (see `PointBlock`).
 *
 * Not supplied yet (CONTENT_PENDING), so left unset rather than invented:
 * `summary`, `tagline` and `intro` for every domain.
 */
export const serviceDomains: ServiceDomain[] = [
  {
    slug: 'automotive',
    index: '01',
    label: 'AUTOMOTIVE',
    name: 'Automotive',
    accent: 'teal',
    standards: ['ISO/SAE 21434', 'MISRA', 'SPDX', 'CycloneDX'],
    items: [
      {
        slug: 'threat-analysis-risk-assessment',
        title: 'Threat Analysis and Risk Assessment (TARA)',
        points: [
          {
            title: 'Asset Mapping',
            body: [
              'Identification of ECUs, gateways, and interfaces, detailing boundary trust zones and CIA anchors.',
            ],
          },
          {
            title: 'Threat Modeling Vectors',
            body: [
              'Execution of STRIDE/HEAVENS modeling across internal vehicle buses including:',
              ['CAN', 'LIN', 'Automotive Ethernet'],
            ],
          },
          {
            title: 'Feasibility and Impact Ratings',
            body: [
              'Scoring attack feasibility against parameters such as:',
              ['expertise', 'access windows'],
              'versus:',
              ['safety impacts', 'financial impacts'],
            ],
          },
          {
            title: 'Risk Treatment Formulation',
            body: [
              'Creating operational matrices to choose:',
              ['mitigation', 'avoidance', 'acceptance'],
            ],
          },
        ],
      },
      {
        slug: 'secure-development-lifecycle-integration',
        title: 'Secure Development Lifecycle (SDLC) Integration',
        points: [
          {
            title: 'Requirements Ingestion',
            body: ['Deriving discrete technical requirements from initial risk assessments.'],
          },
          {
            title: 'Cryptographic Architecture',
            body: [
              'Implementation layouts for:',
              ['Hardware Security Modules (HSMs)', 'secure boot operations'],
            ],
          },
          {
            title: 'Code Assurance Pipelines',
            body: ['Automated enforcement of:', ['MISRA guidelines', 'SAST', 'DAST']],
          },
        ],
      },
      {
        slug: 'verification-validation-testing',
        title: 'Verification and Validation (V&V) Testing',
        points: [
          {
            title: 'Automated Bus Fuzzing',
            body: [
              'Generating boundary-condition malformed packet streams directly onto internal networks.',
            ],
          },
          {
            title: 'Physical ECU Penetration',
            body: [
              'Attacking local debugging vectors including:',
              ['JTAG extraction', 'UDS diagnostic bypass strategies'],
            ],
          },
          {
            title: 'Automated Regression Matrices',
            body: [
              'Wrapping automated vulnerability regression scripts into Hardware-in-the-Loop (HIL) setups.',
            ],
          },
        ],
      },
      {
        slug: 'supply-chain-security-sbom-management',
        title: 'Supply Chain Security & SBOM Management',
        points: [
          {
            title: 'Supplier Capability Auditing',
            body: [
              'Auditing third-party vendor processes against ISO/SAE 21434 Tier-1 expectations.',
            ],
          },
          {
            title: 'Manifest Assembly',
            body: ['Exporting standardized SBOM catalogs utilizing:', ['SPDX', 'CycloneDX']],
          },
          {
            title: 'Vulnerability Cross-Referencing',
            body: ['Linking live manifests to public vulnerability registries such as:', ['NVD']],
          },
        ],
      },
    ],
  },
  {
    slug: 'agriculture',
    index: '02',
    label: 'AGRICULTURE',
    name: 'Agriculture',
    accent: 'orange',
    standards: ['ISO 11783'],
    items: [
      {
        slug: 'isobus-security-architecture',
        title: 'ISOBUS (ISO 11783) Security Architecture',
        points: [
          {
            title: 'Cross-Authentication',
            body: [
              'Formulating localized trust authentication protocols for attachments connecting to the tractor bus.',
            ],
          },
          {
            title: 'Command Validation Filtering',
            body: [
              'Creating message-handling layers that check external implement operations against operator states.',
            ],
          },
          {
            title: 'Legacy Implement Interoperability',
            body: [
              'Building isolating bridges to link insecure classic implements into verified control systems safely.',
            ],
          },
        ],
      },
      {
        slug: 'autonomous-guidance-protection',
        title: 'Autonomous Guidance Protection',
        points: [
          {
            title: 'GNSS & RTK Anti-Spoofing',
            body: [
              'Deploying multi-frequency cross-checks to discover artificial coordinate shifts or malicious signals.',
            ],
          },
          {
            title: 'Field Map Data Attestation',
            body: [
              'Encrypting boundary prescription maps and operational farm layouts against out-of-bounds alterations.',
            ],
          },
          {
            title: 'Sensor Fusion Validation',
            body: [
              'Correlating:',
              ['camera', 'IMU', 'LiDAR'],
              'feeds to flag anomalous movements during driverless field routines.',
            ],
          },
        ],
      },
      {
        slug: 'smart-sensor-array-audits',
        title: 'Smart Sensor Array Audits',
        points: [
          {
            title: 'Telemetry Feed Validation',
            body: [
              'Protecting local wireless telemetry feeds involving:',
              ['moisture', 'yield', 'soil'],
              'against data injection.',
            ],
          },
          {
            title: 'Sensor Firmware Verification',
            body: [
              'Deploying signature verification at the micro-sensor cluster level to ensure baseline integrity.',
            ],
          },
          {
            title: 'Localized Harvester Cryptography',
            body: [
              'Securing internal operational telemetry arrays to prevent yield data tracking manipulation.',
            ],
          },
        ],
      },
      {
        slug: 'ruggedized-legacy-patching',
        title: 'Ruggedized Legacy Patching',
        points: [
          {
            title: 'Drop-in Hardware Wrappers',
            body: [
              'Creating external microcontrollers that wrap legacy agricultural electronics inside encrypted wrappers.',
            ],
          },
          {
            title: 'Operational Profile Baselining',
            body: [
              'Observing older hardware outputs to map static normal footprints and alert on variance.',
            ],
          },
          {
            title: 'Physical Enclosure Isolation',
            body: [
              'Implementing physical lockouts for exposed connections vulnerable to outdoor environment manipulation.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'off-highway',
    index: '03',
    label: 'OFF-HIGHWAY',
    name: 'Off-Highway',
    accent: 'yellow',
    standards: [],
    items: [
      {
        slug: 'ot-machinery-domain-separation',
        title: 'OT/Machinery Domain Separation',
        points: [
          {
            title: 'Core Propulsion Segregation',
            body: [
              'Isolating:',
              ['engine', 'transmission', 'hydraulic networks'],
              'behind rigid secure network gateways.',
            ],
          },
          {
            title: 'Peripheral Communications Isolation',
            body: [
              'Ensuring exterior:',
              ['Wi-Fi', 'operator infotainment', 'site radios'],
              'operate on disconnected subnet layers.',
            ],
          },
          {
            title: 'Gateway Firewalls',
            body: [
              'Designing hardware-integrated firewalls to police communications moving between vehicle sub-networks.',
            ],
          },
        ],
      },
      {
        slug: 'autonomous-hauling-safeguards',
        title: 'Autonomous Hauling Safeguards',
        points: [
          {
            title: 'Site System Attestation',
            body: [
              'Constructing cryptographically signed wireless control links for autonomous mining hauling units.',
            ],
          },
          {
            title: 'Emergency Remote Stop Safety',
            body: [
              'Fortifying remote-kill wireless triggers against:',
              ['signal jamming', 'malicious activation'],
            ],
          },
          {
            title: 'Path Plan Verification',
            body: [
              'Validating incoming path matrices against physical dynamic constraints to avoid machine damage.',
            ],
          },
        ],
      },
      {
        slug: 'field-isolated-incident-management',
        title: 'Field-Isolated Incident Management',
        points: [
          {
            title: 'Disconnected Local Logging',
            body: [
              'Setting up local, circular, tamper-resistant log repositories for isolated operation.',
            ],
          },
          {
            title: 'Technician Safety Playbooks',
            body: [
              'Establishing physical bootstrap procedures for field recovery teams when remote access drops.',
            ],
          },
          {
            title: 'Bandwidth-Efficient Forensics',
            body: [
              'Developing lightweight metadata extraction rules for parsing critical fault events over satellite links.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'commercial',
    index: '04',
    label: 'COMMERCIAL',
    name: 'Commercial',
    accent: 'red',
    standards: ['SAE J1939'],
    items: [
      {
        slug: 'sae-j1939-can-bus-hardening',
        title: 'SAE J1939 CAN Bus Hardening',
        points: [
          {
            title: 'Protocol Filtering & Diagnostics',
            body: [
              'Creating inline cryptographic or rules-based message filtering modules to shield unprotected J1939 backbones.',
            ],
          },
          {
            title: 'Exposed Node Mitigation',
            body: [
              'Restricting standard terminal capabilities at physical diagnostic links and onboard diagnostic ports.',
            ],
          },
          {
            title: 'Frame Spoofing Defenses',
            body: [
              'Engineering cycle-time validation to immediately reject rogue parameter group numbers (PGNs).',
            ],
          },
        ],
      },
      {
        slug: 'telematics-gateway-defense',
        title: 'Telematics & Gateway Defense',
        points: [
          {
            title: 'Fleet Interface Hardening',
            body: [
              'Auditing:',
              [
                'cellular transceivers',
                'embedded SIM (eSIM) profiles',
                'internal Wi-Fi access configurations',
              ],
            ],
          },
          {
            title: 'ELD Integration Safety',
            body: [
              'Structuring cryptographic separations between Electronic Logging Devices and critical control components.',
            ],
          },
          {
            title: 'Logistical Data Isolation',
            body: [
              'Segmenting back-end corporate telemetry reporting pipelines from active operational control frames.',
            ],
          },
        ],
      },
      {
        slug: 'secure-over-the-air-updates',
        title: 'Secure Over-the-Air (OTA) Updates',
        points: [
          {
            title: 'Signature Validation Frameworks',
            body: [
              'Structuring dual-bank image deployment loops validated via root-of-trust signatures.',
            ],
          },
          {
            title: 'Fail-Safe Rollback Engineering',
            body: [
              'Provisioning verified image recovery targets to prevent vehicle bricking during remote updates.',
            ],
          },
          {
            title: 'Bandwidth-Optimized Encryption',
            body: [
              'Constructing differential payload encryption algorithms for low-throughput transit areas.',
            ],
          },
        ],
      },
      {
        slug: 'anti-tampering-controls',
        title: 'Anti-Tampering Controls',
        points: [
          {
            title: 'Regulatory Limiter Protection',
            body: [
              'Guarding drive-by-wire operational parameters controlling mandated speed limiters.',
            ],
          },
          {
            title: 'Digital Tachograph Cryptography',
            body: [
              'Hardening cryptographic storage modules preserving legal operational driving record logs.',
            ],
          },
          {
            title: 'Hardware Sensor Attestation',
            body: [
              'Deploying sensor-to-ECU authentication states to block hardware pulse generator manipulation.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'industrial-ot',
    index: '05',
    label: 'INDUSTRIAL OT',
    name: 'Industries & Manufacturing',
    accent: 'purple',
    standards: ['Modbus', 'PROFINET', 'OPC UA'],
    items: [
      {
        slug: 'purdue-model-network-isolation',
        title: 'Purdue Model Network Isolation',
        points: [
          {
            title: 'Level-Based Segmentation',
            body: [
              'Setting up perimeter firewalls between process lines:',
              ['Levels 0–2'],
              'and corporate spaces:',
              ['Levels 4–5'],
            ],
          },
          {
            title: 'Conduit Architecture Design',
            body: [
              'Building rule sets for industrial routing conduits across distinct production cells.',
            ],
          },
          {
            title: 'Automation Micro-segmentation',
            body: ['Isolating individual PLC clusters using targeted internal routing controls.'],
          },
        ],
      },
      {
        slug: 'passive-asset-monitoring',
        title: 'Passive Asset Monitoring',
        points: [
          {
            title: 'Non-Intrusive Tap Engineering',
            body: [
              'Deploying passive mirror ports to audit traffic without adding operational latency.',
            ],
          },
          {
            title: 'PLC Baseline Comparison',
            body: [
              'Cross-checking active PLC software states against clean master images to spot variations.',
            ],
          },
          {
            title: 'Vulnerability Correlation Mapping',
            body: [
              'Linking discovered automation hardware inventories to modern exploit databases.',
            ],
          },
        ],
      },
      {
        slug: 'secure-vendor-remote-access',
        title: 'Secure Vendor Remote Access',
        points: [
          {
            title: 'Dedicated Jump Host Setup',
            body: [
              'Configuring identity-validated access steps for internal teams and maintenance partners.',
            ],
          },
          {
            title: 'Operational Command Guardrails',
            body: [
              'Creating deep-packet inspections to block sensitive engineering updates during operational runs.',
            ],
          },
          {
            title: 'Auditable Session Records',
            body: [
              'Storing searchable video logs and control frame traces for all remote activities.',
            ],
          },
        ],
      },
      {
        slug: 'continuous-threat-monitoring',
        title: 'Continuous Threat Monitoring',
        points: [
          {
            title: 'Deep Packet Inspection (DPI)',
            body: [
              'Decoding industrial protocols such as:',
              ['Modbus', 'PROFINET', 'OPC UA'],
              'to trace raw values.',
            ],
          },
          {
            title: 'SIEM/SOC Integration Hubs',
            body: [
              'Translating distinct industrial log structures into standardized alert schemas.',
            ],
          },
          {
            title: 'Machine-Learning Baselines',
            body: [
              'Creating real-time anomaly alerts for network shifts away from standard plant routines.',
            ],
          },
        ],
      },
    ],
  },
]

export const getServiceDomain = (slug: string): ServiceDomain | undefined =>
  serviceDomains.find((domain) => domain.slug === slug)

/** The domain after `slug`, or undefined for the last one — the design shows no wrap-around. */
export const getNextServiceDomain = (slug: string): ServiceDomain | undefined => {
  const position = serviceDomains.findIndex((domain) => domain.slug === slug)
  return position === -1 ? undefined : serviceDomains[position + 1]
}
