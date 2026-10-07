import type { ArticleBlock } from '@/types/article'

/** Body of "Post-Quantum Cryptography for Automotive Cybersecurity: A 2026–2028 Roadmap for UN R155 and R156 Compliance", as supplied by the client. Do not reword. */
const content: ArticleBlock[] = [
  {
    type: 'paragraph',
    text: 'Modern vehicles are designed to remain operational for many years, but the cryptographic technologies protecting them may have a much shorter useful life. A car, truck, tractor, or other connected vehicle manufactured today could still be operating 15 to 20 years from now. During that period, advances in quantum computing could fundamentally change the cybersecurity assumptions on which many automotive systems currently depend. This creates an important challenge for vehicle manufacturers. Cryptographically Relevant Quantum Computers could eventually threaten widely deployed public-key algorithms such as RSA and Elliptic Curve Cryptography (ECC). For an industry increasingly dependent on software-defined vehicles, connected services, over-the-air updates, and cloud communication, preparing for Post-Quantum Cryptography (PQC) is becoming an architectural consideration rather than simply a future cryptographic upgrade.',
  },
  {
    type: 'paragraph',
    text: 'Although UNECE UN R155 and UN R156 do not specifically mandate quantum-resistant cryptography, their lifecycle-oriented cybersecurity requirements make quantum readiness increasingly relevant. Manufacturers are expected to manage cybersecurity risks throughout the vehicle lifecycle and maintain secure mechanisms for software updates. If the cryptographic foundations protecting vehicle authentication or OTA updates become vulnerable, both cybersecurity and long-term compliance could be affected. The answer is not simply replacing one algorithm with another. The automotive industry needs to build crypto-agility into its future platforms.',
  },
  { type: 'heading', level: 2, text: 'Why Crypto-Agility Is the Foundation of Quantum Readiness' },
  {
    type: 'paragraph',
    text: 'Crypto-agility refers to the ability of a system to replace or modify cryptographic algorithms, keys, and security protocols without requiring a complete redesign of the underlying vehicle hardware. Traditional automotive platforms often embed cryptographic choices deeply into software, bootloaders, hardware security modules, and communication stacks. This approach creates a problem when an algorithm must be replaced. A vehicle fleet may remain in service for decades, while cryptographic standards can evolve much faster.',
  },
  {
    type: 'paragraph',
    text: 'A crypto-agile architecture allows OEMs to respond to emerging threats by introducing new cryptographic mechanisms through controlled software and firmware changes wherever technically possible. For automotive manufacturers, this flexibility is particularly important across four critical security areas: OTA updates, V2X communications, ECU secure boot, and vehicle-to-cloud connectivity.',
  },
  { type: 'heading', level: 2, text: 'OTA Updates: Protecting the Software Supply Chain' },
  {
    type: 'paragraph',
    text: 'Secure over-the-air updates are central to UN R156 compliance. Digital signatures ensure that a vehicle can verify whether a software package genuinely originated from an authorized source and has not been modified. Today, many update infrastructures depend on RSA or ECDSA-based signatures. A future weakness in these cryptographic systems could create a serious fleet-wide risk. An attacker capable of bypassing signature verification could potentially distribute unauthorized or malicious firmware.',
  },
  {
    type: 'paragraph',
    text: 'Post-quantum signature algorithms offer a possible long-term solution, but they also introduce engineering challenges. PQC signatures can be significantly larger than conventional elliptic-curve signatures, increasing demands on update metadata, communication bandwidth, storage, and flash memory. A practical transition strategy is a hybrid signing model. Firmware can be protected using both a conventional signature and a post-quantum signature. The vehicle verifies both mechanisms, creating a transition path that maintains compatibility while introducing quantum-resistant protection.',
  },
  { type: 'heading', level: 2, text: 'V2X Communications Face Performance Challenges' },
  {
    type: 'paragraph',
    text: 'Vehicle-to-everything communication presents a different set of problems. Safety-related V2X applications operate under strict timing and latency requirements. Messages may need to be authenticated and processed within milliseconds. Larger PQC public keys and signatures can increase packet sizes and computational requirements. This could contribute to packet fragmentation, communication congestion, and higher verification workloads, particularly in environments where many vehicles are exchanging safety-related messages simultaneously.',
  },
  {
    type: 'paragraph',
    text: 'As a result, automotive engineers cannot approach PQC adoption as a simple substitution of ECDSA with a larger algorithm. They must evaluate the impact on wireless channel capacity, processor performance, memory consumption, and real-time application requirements. Hybrid approaches and carefully selected algorithms will be essential during the transition period.',
  },
  { type: 'heading', level: 2, text: 'Secure Boot: A Major Challenge for Resource-Constrained ECUs' },
  {
    type: 'paragraph',
    text: 'The move toward post-quantum security becomes even more complicated in small and highly constrained ECUs. Secure boot mechanisms verify that the software loaded during startup is authentic and has not been manipulated. Many automotive microcontrollers, however, have limited ROM, RAM, processing power, and storage capacity. Large post-quantum key structures may not fit easily into existing hardware designs. For these systems, state-based hash signature technologies such as LMS and XMSS may provide useful alternatives because of their suitability for environments where public-key footprint and implementation constraints are critical. This highlights an important reality: there will not be one universal PQC solution for every vehicle subsystem. OEMs will need to select cryptographic mechanisms according to the capabilities and security requirements of individual ECUs.',
  },
  { type: 'heading', level: 2, text: 'Vehicle-to-Cloud Communication and the “Harvest Now, Decrypt Later” Threat' },
  {
    type: 'paragraph',
    text: 'Connected vehicles continuously exchange information with backend platforms through telematics systems and cloud services. These communications can include operational data, diagnostics, vehicle status, commands, and other information with long-term sensitivity. This creates exposure to the “Harvest Now, Decrypt Later” threat. An attacker may collect encrypted information today with the expectation that future quantum computing capabilities could make it possible to decrypt that information.',
  },
  {
    type: 'paragraph',
    text: 'A hybrid key exchange model can help address this transition risk. Combining conventional cryptography with post-quantum mechanisms such as ML-KEM allows organizations to begin introducing quantum-resistant protection while retaining compatibility with existing infrastructure. Telematics Control Units are therefore logical candidates for early PQC pilots.',
  },
  { type: 'heading', level: 2, text: 'Building a Crypto-Agile Vehicle Architecture' },
  {
    type: 'paragraph',
    text: 'A successful PQC strategy must begin with architecture. Automotive software should avoid directly tying applications to individual cryptographic algorithms. Instead, cryptographic services should be accessed through abstraction layers. Within AUTOSAR-based environments, technologies such as the Crypto Service Manager and Crypto Interface can help separate application software from specific cryptographic implementations. Software components can request security functions such as signature verification without being permanently linked to one particular algorithm. Hardware Security Modules must also evolve. Future automotive HSMs should support flexible cryptographic implementations and, where necessary, specialized capabilities for computationally demanding PQC operations. The objective is clear: the vehicle should be designed to change its cryptography without requiring the entire platform to be replaced.',
  },
  { type: 'heading', level: 2, text: 'A Practical 2026–2028 Automotive PQC Roadmap' },
  { type: 'heading', level: 2, text: 'Phase 1: 2026 – Create Visibility and Assess Risk' },
  {
    type: 'paragraph',
    text: 'The first priority is understanding where cryptography currently exists across the vehicle ecosystem. OEMs should create a Cryptographic Bill of Materials (CBOM) identifying the use of RSA, ECC, Diffie-Hellman, symmetric algorithms, certificates, and keys across ECUs, backend systems, and development environments. Manufacturers should also evaluate the impact of larger PQC messages on CAN-FD, Automotive Ethernet, gateways, and switch buffers. Risk assessments should prioritize long-life assets, remotely accessible components, and systems that may be difficult to update after vehicles enter service.',
  },
  { type: 'heading', level: 2, text: 'Phase 2: 2027 – Run Hybrid Pilots' },
  {
    type: 'paragraph',
    text: 'The next stage should focus on controlled deployment. OEMs can pilot hybrid ML-KEM-based key exchange for vehicle-to-cloud communication and introduce dual classical/PQC signatures into OTA update processes. Procurement requirements should also begin changing. Tier-1 suppliers should increasingly provide components with crypto-agile architectures, flexible HSM capabilities, and upgradeable security firmware.',
  },
  { type: 'heading', level: 2, text: 'Phase 3: 2028 – Move Toward Production Integration' },
  {
    type: 'paragraph',
    text: 'By 2028, organizations should be prepared to integrate PQC capabilities into central computing platforms, domain controllers, and high-performance compute environments. Quantum-related risks should also become part of cybersecurity governance. Threat analysis and risk assessment processes can incorporate quantum exposure into ISO/SAE 21434 activities and supporting UN R155 cybersecurity management evidence. Most importantly, manufacturers should test real-world cryptographic migration scenarios. Simulated OTA algorithm changes can demonstrate whether a fleet can successfully transition from one cryptographic technology to another.',
  },
  { type: 'heading', level: 2, text: 'The Road to Quantum-Resilient Vehicles' },
  {
    type: 'paragraph',
    text: 'Post-Quantum Cryptography is not merely another cybersecurity upgrade for the automotive industry. It represents a long-term design challenge that affects vehicle architecture, hardware selection, OTA infrastructure, connected services, and lifecycle cybersecurity management. The most successful OEMs will not wait until quantum computers become an immediate threat. They will begin building crypto-agility into their platforms today. A vehicle designed to adapt its cryptography can respond to vulnerabilities, changing regulations, and new technological threats throughout its operational life. In the era of software-defined and highly connected vehicles, that adaptability may become one of the most important foundations of long-term automotive cybersecurity.',
  },
]

export default content
