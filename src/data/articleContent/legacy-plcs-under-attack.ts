import type { ArticleBlock } from '@/types/article'

/** Body of "Legacy PLCs Under Attack: The Hidden Cybersecurity Risks of Connected Industrial Networks", as supplied by the client. Do not reword. */
const content: ArticleBlock[] = [
  {
    type: 'paragraph',
    text: 'For decades, the air gap was considered one of the strongest defenses in industrial cybersecurity. If a factory’s Programmable Logic Controllers (PLCs), Supervisory Control and Data Acquisition (SCADA) systems, and Distributed Control Systems (DCS) were physically separated from corporate IT networks and the internet, they were assumed to be safe. That assumption no longer holds.',
  },
  {
    type: 'paragraph',
    text: 'The rise of Industry 4.0, Industrial IoT (IIoT), edge computing, predictive maintenance, remote diagnostics, and enterprise integration has steadily connected previously isolated operational technology (OT) environments. Modern plants are increasingly placing edge gateways, sensors and connected devices alongside legacy control systems. The result is a growing cybersecurity paradox: the systems that control some of the most critical physical processes in a facility may be running technology designed for a world in which cybersecurity was barely considered.',
  },
  { type: 'heading', level: 2, text: 'The Legacy PLC Problem' },
  {
    type: 'paragraph',
    text: 'Many PLCs and Remote Terminal Units (RTUs) installed in industrial environments were designed 15, 20 or even 25 years ago. Their priorities were straightforward: reliability, deterministic performance, availability and long operational lifecycles. Cybersecurity was often not part of the original design because network connectivity was limited and physical isolation was considered sufficient protection. Today, that environment has changed. Legacy controllers are increasingly connected to modern networks through industrial gateways, engineering workstations, historians, remote-access systems and IIoT platforms. A PLC that was once accessible only from a local control room can now potentially be reached through multiple digital pathways. This creates a fundamental question for plant operators:',
  },
  {
    type: 'paragraph',
    text: 'What happens when a controller designed to trust its network suddenly finds itself inside a connected digital ecosystem?',
  },
  { type: 'heading', level: 2, text: 'Why Traditional PLCs Are Vulnerable' },
  {
    type: 'paragraph',
    text: 'The problem is not necessarily that legacy PLCs are poorly engineered. They were simply engineered for a different threat environment. One major weakness is the use of insecure industrial protocols. Technologies such as Modbus RTU/TCP, EtherNet/IP and Profibus can lack modern authentication, encryption and message-integrity protections. Depending on the implementation and architecture, an attacker who gains network access may be able to send unauthorized commands or manipulate control data. Legacy controllers may also lack modern firmware integrity mechanisms and secure boot capabilities. Without cryptographic verification of firmware, compromised software can potentially become a serious persistence mechanism.',
  },
  {
    type: 'paragraph',
    text: 'Another concern is static credentials and shared access mechanisms. Engineering workstations and maintenance tools may retain passwords or rely on credentials intended for servicing. If those credentials are compromised, attackers may gain a pathway deeper into the OT environment. Even vulnerability assessment itself can present a challenge. Some older PLC network interfaces and protocol stacks are fragile enough that aggressive port scans, vulnerability scanners or malformed packets can cause instability or unexpected interruptions. In OT, that distinction matters enormously. A failed IT server may be inconvenient. A disrupted PLC can potentially stop a physical production process.',
  },
  { type: 'heading', level: 2, text: 'How the Air Gap Actually Breaks' },
  {
    type: 'paragraph',
    text: 'Many organizations still believe they operate air-gapped plants. In reality, the gap can be crossed in ways that are surprisingly ordinary.',
  },
  {
    type: 'paragraph',
    text: 'Industrial edge gateways are one example. These devices may connect legacy serial or fieldbus networks to MQTT brokers, cloud platforms or other modern services. An edge device intended to enable predictive maintenance can therefore become a bridge between an old control environment and a new digital ecosystem.',
  },
  {
    type: 'paragraph',
    text: 'Engineering laptops represent another significant pathway. A third-party vendor or technician may connect a maintenance computer directly to an OT switch or controller. If that laptop is compromised, the connection can introduce malware into an otherwise protected environment.',
  },
  {
    type: 'paragraph',
    text: 'Dual-homed workstations create another risk. An operator workstation or historian connected simultaneously to OT and IT networks can potentially provide attackers with a route from a compromised corporate environment toward industrial control systems.',
  },
  {
    type: 'paragraph',
    text: 'Then there is the humble USB drive.',
  },
  {
    type: 'paragraph',
    text: 'Engineers may use removable media to transfer firmware, ladder logic backups, configurations or recipes. Without appropriate controls, removable media can bypass network security mechanisms entirely and introduce malicious content directly into the control environment. The attached article identifies these transient and permanent pathways as critical mechanisms by which supposedly isolated OT environments become exposed.',
  },
  { type: 'heading', level: 2, text: 'Why Replacing Everything Is Not the Answer' },
  {
    type: 'paragraph',
    text: 'If legacy PLCs are vulnerable, why not simply replace them? In many industrial environments, that is easier said than done. Legacy control systems can represent significant investments and may operate critical processes that cannot simply be shut down for an extended modernization project. Replacing functioning equipment can require substantial capital expenditure, engineering effort and production downtime. Consequently, organizations need a risk-based defense-in-depth strategy rather than assuming that every legacy asset can immediately be replaced. The objective is not necessarily to make a 20-year-old PLC behave like a modern secure controller. It is to place effective security controls around the asset and reduce the consequences of compromise.',
  },
  { type: 'heading', level: 2, text: 'Build Security Around the Legacy Asset' },
  {
    type: 'paragraph',
    text: 'Network segmentation should be one of the first priorities. Industrial networks should be divided into appropriate security zones and conduits, with firewalls and security gateways controlling communication between them. Protocol-aware inspection can help distinguish legitimate read operations from potentially dangerous write or programming activities. Remote maintenance also requires particular attention.',
  },
  {
    type: 'paragraph',
    text: 'Instead of allowing vendors or engineers to connect directly to operator workstations, organizations should use dedicated OT jump servers with multi-factor authentication, controlled access and session monitoring. This creates a controlled gateway for remote support rather than exposing critical systems directly.',
  },
  {
    type: 'paragraph',
    text: 'The attached article specifically recommends micro-segmentation, protocol-aware firewalls and MFA-protected jump hosts as practical measures for protecting legacy assets without disrupting production.',
  },
  { type: 'heading', level: 2, text: 'Monitor Without Breaking the Plant' },
  {
    type: 'paragraph',
    text: 'One of the most important differences between IT and OT cybersecurity is the potential impact of security testing. Aggressive vulnerability scanning may be acceptable for many IT systems. It can be dangerous when applied indiscriminately to fragile industrial controllers. For legacy PLC environments, passive network monitoring can provide a safer alternative. By analyzing mirrored network traffic without injecting packets into the control network, security teams can identify connected assets, establish normal communication patterns and detect anomalies. This allows organizations to improve visibility without unnecessarily disrupting production.',
  },
  {
    type: 'paragraph',
    text: 'The practical rule is straightforward:',
  },
  {
    type: 'paragraph',
    text: 'Do not scan fragile Level 1 PLCs aggressively during live production. Observe first, understand the environment, and then determine the safest remediation strategy.',
  },
  { type: 'heading', level: 2, text: 'Secure the Edge Before It Becomes the Weakest Link' },
  {
    type: 'paragraph',
    text: 'As factories deploy more edge computing for analytics and predictive maintenance, the edge itself must become part of the security architecture. Where possible, edge systems should minimize inbound connectivity and use tightly controlled outbound communication. Unidirectional gateways or data-diode architectures can provide additional protection where the operational requirement permits them. Edge infrastructure should also incorporate appropriate protections for stored data, hardware security and centralized management. The objective is simple: an edge gateway should enable industrial connectivity without becoming an uncontrolled bridge into the control network.',
  },
  { type: 'heading', level: 2, text: 'OT Cybersecurity Is Also a Governance Problem' },
  {
    type: 'paragraph',
    text: 'Technology alone cannot solve the air-gap problem. IT security teams typically prioritize confidentiality, rapid patching and data protection. Plant engineers prioritize safety, availability, deterministic operation and uptime. Neither perspective is wrong. The challenge is bringing them together. Organizations need joint IT/OT incident-response procedures, clearly defined ownership, risk-management processes and security controls designed around operational realities. A cybersecurity measure that protects a network but unexpectedly shuts down production is not necessarily a successful OT security solution. The attached article emphasizes this need for collaboration between IT cybersecurity teams and OT engineering teams, particularly around incident response and operational risk ownership.',
  },
  { type: 'heading', level: 2, text: 'The New Reality: Trust Nothing, Expose as Little as Possible' },
  {
    type: 'paragraph',
    text: 'The biggest lesson for industrial organizations is that physical isolation can no longer be treated as a cybersecurity strategy by itself. Industry 4.0 has changed the architecture of modern plants. Legacy PLCs and SCADA systems are increasingly surrounded by cloud platforms, IIoT sensors, edge gateways, remote-access tools and enterprise applications. That does not mean every legacy controller must immediately be replaced. It means organizations must understand exactly how their legacy assets are connected, what can communicate with them, who can access them, and what happens if one of those connections is compromised.',
  },
  {
    type: 'paragraph',
    text: 'The path forward is practical: map the OT environment, identify hidden connections, segment critical systems, control remote access, harden edge gateways and continuously monitor network behavior. The air gap may be dead—but defense-in-depth can keep legacy industrial systems alive, productive and secure.',
  },
]

export default content
