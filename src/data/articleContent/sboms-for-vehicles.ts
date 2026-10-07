import type { ArticleBlock } from '@/types/article'

/** Body of "SBOMs for Vehicles: The Software Ingredient List Regulators Want—and Hackers Love", as supplied by the client. Do not reword. */
const content: ArticleBlock[] = [
  {
    type: 'paragraph',
    text: 'Modern vehicles, commercial fleets, agricultural machines, and heavy off-highway equipment are becoming increasingly software-driven. What was once primarily a combination of mechanical components, hydraulics, and engines has evolved into a complex ecosystem of Electronic Control Units (ECUs), telematics systems, sensors, gateways, and connected software platforms. This transformation has created enormous opportunities for manufacturers. Software enables remote diagnostics, over-the-air updates, autonomous functions, precision agriculture, fleet monitoring, and continuous feature improvements. However, it has also introduced a growing cybersecurity challenge: Do manufacturers really know every piece of software running inside their vehicles and machines?',
  },
  {
    type: 'paragraph',
    text: 'When a major vulnerability is discovered in an open-source library, operating system component, or third-party software package, identifying the affected products can become a major challenge. An OEM may need to determine which vehicle models, ECU variants, software versions, and supplier components contain the vulnerable software. Without accurate visibility, this process can take weeks or even months. This is where the Software Bill of Materials (SBOM) becomes increasingly important. For connected vehicles and industrial machinery, an SBOM is rapidly moving from a useful software-management practice to a critical component of cybersecurity, vulnerability response, supply-chain management, and regulatory readiness.',
  },
  { type: 'heading', level: 2, text: 'What Exactly Is an SBOM?' },
  {
    type: 'paragraph',
    text: 'The simplest way to understand an SBOM is to think of it as an ingredient list for software. Just as a food product identifies the ingredients used to create it, an SBOM provides an inventory of the software components contained within a product. It can document proprietary software, third-party packages, open-source libraries, firmware components, and the relationships between different software dependencies. A well-structured SBOM can include information such as:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      'The name and version of each software component',
      'The supplier, developer, or author',
      'Unique identifiers used to identify components',
      'Relationships between applications and their dependencies',
      'Information that can help match software components against known vulnerabilities',
    ],
  },
  {
    type: 'paragraph',
    text: 'Machine-readable formats such as CycloneDX and SPDX allow this information to be processed automatically rather than maintained as a manual document. This makes it possible to connect software inventories with vulnerability databases and security monitoring systems. The real value of an SBOM, however, is not simply knowing what software exists. Its value becomes clear when something goes wrong.',
  },
  { type: 'heading', level: 2, text: 'When the Next Log4j-Style Vulnerability Appears, What Happens?' },
  {
    type: 'paragraph',
    text: 'Imagine that a critical vulnerability is publicly disclosed. Security teams around the world immediately begin asking whether their systems are affected. For a vehicle or machinery manufacturer without a reliable software inventory, the response may involve contacting multiple suppliers, reviewing engineering records, checking individual ECU software versions, and manually tracing dependencies through several levels of the supply chain. This creates a dangerous delay. A manufacturer may know that it uses software from a Tier-1 supplier, but the Tier-1 supplier may itself use components from multiple Tier-2 and Tier-3 suppliers. Those components may contain dozens of open-source libraries, each with its’ own vulnerabilities and dependencies. Without visibility, the first challenge is often not fixing the vulnerability—it is simply answering the question:',
  },
  {
    type: 'paragraph',
    text: '“Where is this vulnerable component actually being used?”',
  },
  {
    type: 'paragraph',
    text: 'A dynamic and well-maintained SBOM can significantly improve this process. Instead of manually searching through multiple software systems, security teams can query a central inventory to identify potentially affected vehicle models, ECU variants, hardware revisions, or software configurations. The difference between identifying an issue in minutes rather than months can have a major impact on cybersecurity response and operational continuity.',
  },
  { type: 'heading', level: 2, text: 'Why SBOMs Matter More in Vehicles and Heavy Machinery' },
  {
    type: 'paragraph',
    text: 'In a traditional IT environment, a software vulnerability may result in data theft, service disruption, or downtime. In connected vehicles and industrial machinery, the consequences can extend into the physical world. Connected telematics systems, infotainment platforms, cellular modules, and wireless interfaces may create entry points into the wider vehicle environment. If a vulnerable third-party software component is present in an externally connected system, it could potentially become the starting point for further movement within the vehicle architecture. The risks are equally important in agriculture and off-highway applications. Autonomous tractors, combine harvesters, mining equipment, and other heavy machines increasingly depend on satellite positioning, remote connectivity, telematics, and specialized communication networks.',
  },
  {
    type: 'paragraph',
    text: 'A cybersecurity incident involving an unpatched software component could result in operational disruption at a critical time. In agriculture, for example, machine downtime during a narrow planting or harvesting period can have significant financial consequences. The challenge is therefore not limited to protecting information—it also involves protecting machine availability, productivity, and potentially physical safety.',
  },
  { type: 'heading', level: 2, text: 'SBOMs Can Transform Vulnerability Response' },
  {
    type: 'paragraph',
    text: 'One of the strongest arguments for SBOM adoption is the ability to improve vulnerability management. When an organization knows exactly which software components are embedded in its products, a newly disclosed Common Vulnerabilities and Exposures (CVE) can be checked against the software inventory. Security teams can then focus their investigation on the products that are potentially affected. This can support more targeted mitigation and remediation. Rather than treating every vehicle or machine as potentially vulnerable, manufacturers can identify the relevant software versions and focus resources accordingly. This visibility can also support more targeted over-the-air updates.',
  },
  {
    type: 'paragraph',
    text: 'Instead of distributing a large software update across an entire vehicle platform, detailed software mappings can help manufacturers identify where a specific correction is required. This may reduce unnecessary update size, bandwidth requirements, and machine downtime. SBOMs can also improve supplier accountability. OEMs depend on a complex global ecosystem of software and hardware suppliers. Requiring suppliers to provide machine-readable SBOMs creates greater transparency into the software being delivered and encourages suppliers to understand and manage their own dependencies. In other words, an SBOM helps extend cybersecurity visibility beyond the OEM and deeper into the software supply chain.',
  },
  { type: 'heading', level: 2, text: 'From Best Practice to Regulatory and Compliance Expectation' },
  {
    type: 'paragraph',
    text: 'Software transparency is also becoming increasingly relevant to regulatory and cybersecurity frameworks. The article highlights regulations and standards including UN Regulation R155/R156, ISO/SAE 21434, and the EU Cyber Resilience Act, all of which contribute to a broader focus on cybersecurity management, software lifecycle visibility, supply-chain security, and vulnerability handling. For vehicle manufacturers, cybersecurity can no longer be treated as a one-time activity performed before production. Software continues to evolve throughout the operational life of a vehicle through updates, servicing, repairs, and component replacement. A lack of software visibility can therefore create challenges during regulatory audits and product lifecycle management. Depending on the applicable regulatory framework, manufacturers may need to demonstrate that they understand and manage the cybersecurity of their products throughout their lifecycle.',
  },
  { type: 'heading', level: 2, text: 'The Real Challenge: Keeping the SBOM Accurate' },
  {
    type: 'paragraph',
    text: 'Creating an SBOM is only the beginning. Maintaining it throughout the lifecycle of a vehicle or machine is significantly more difficult. Modern supply chains are deeply layered. A single ECU supplier may depend on multiple sub-suppliers, each using their own proprietary and open-source software components. Obtaining complete and standardized information across the entire supply chain can therefore be challenging. Legacy systems present another difficulty. Older embedded hardware may not support continuous monitoring or modern software inventory mechanisms, requiring alternative approaches such as binary analysis.',
  },
  {
    type: 'paragraph',
    text: 'The vehicle lifecycle creates an additional challenge. Commercial vehicles and agricultural machines may remain operational for 15 to 25 years. During this period, software may be updated, components replaced, machines repaired, and aftermarket products installed. If the SBOM is not continuously updated, it can quickly become outdated. The real objective is therefore not simply to create an SBOM at the time of production, but to maintain an accurate record of the software configuration throughout the machine’s lifecycle.',
  },
  { type: 'heading', level: 2, text: 'How Should Manufacturers Begin?' },
  {
    type: 'paragraph',
    text: 'Manufacturers do not need to solve the entire software supply-chain problem at once. A practical approach is to begin with the highest-risk systems, particularly externally connected components such as telematics gateways, OTA update systems, and infotainment platforms. These systems often represent important entry points from external networks into the vehicle environment. The next step is standardization. OEMs can establish common machine-readable formats such as CycloneDX or SPDX and require suppliers to deliver SBOM information in a format that can be automatically processed. Automated vulnerability monitoring can then be connected to the SBOM repository, allowing newly disclosed vulnerabilities to be checked against known software components.',
  },
  {
    type: 'paragraph',
    text: 'Finally, SBOM requirements can become part of supplier procurement and product-delivery processes. Instead of treating software transparency as optional documentation, manufacturers can establish it as a defined cybersecurity deliverable.',
  },
  { type: 'heading', level: 2, text: 'Conclusion: You Cannot Secure Software You Cannot See' },
  {
    type: 'paragraph',
    text: 'As vehicles, tractors, commercial trucks, and heavy machinery become increasingly connected and software-defined, manufacturers face a fundamental cybersecurity challenge: How can you protect software when you do not have a complete record of what is inside your product?',
  },
  {
    type: 'paragraph',
    text: [
      'An SBOM provides a foundation for answering that question. It gives manufacturers greater visibility into their embedded software, improves vulnerability response, strengthens supplier accountability, supports targeted software updates, and contributes to cybersecurity and compliance management throughout the product lifecycle. The next major software vulnerability is not a question of ',
      { text: 'if', italic: true },
      ', but ',
      { text: 'when', italic: true },
      '. When it happens, manufacturers will need to know more than whether their products are potentially exposed. They will need to know exactly which vehicles, machines, ECUs, software versions, and components are affected—and they will need to know quickly. That is the real value of the Software Bill of Materials. In the era of connected and software-defined machines, an SBOM is no longer just an inventory document. It is the map that helps manufacturers find the vulnerability before the vulnerability finds the vehicle.',
    ],
  },
]

export default content
