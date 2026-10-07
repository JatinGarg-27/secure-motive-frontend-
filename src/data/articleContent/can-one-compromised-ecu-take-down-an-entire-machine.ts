import type { ArticleBlock } from '@/types/article'

/** Body of "Can One Compromised ECU Take Down an Entire Machine? Why Network Segmentation Matters", as supplied by the client. Do not reword. */
const content: ArticleBlock[] = [
  {
    type: 'paragraph',
    text: 'Modern commercial vehicles and agricultural machines are no longer purely mechanical systems. A modern tractor, combine harvester, construction machine, or heavy-duty truck may contain dozens—or even hundreds—of Electronic Control Units (ECUs), connected through CAN, CAN FD, Automotive Ethernet, LIN, and other communication networks. Cloud telematics, remote diagnostics, over-the-air software updates, precision agriculture, autonomous functions, and connected implements have transformed these machines into highly connected cyber-physical systems.',
  },
  {
    type: 'paragraph',
    text: 'This connectivity delivers significant benefits. Manufacturers can remotely monitor machine health, deploy software updates, optimize fleet performance, and support customers more efficiently. Operators benefit from improved productivity, reduced downtime, and increasingly automated operations. However, connectivity also creates a critical cybersecurity question: if an attacker compromises one connected ECU or external interface, how far can they move inside the machine? The answer depends largely on how the in-vehicle network has been designed.',
  },
  { type: 'heading', level: 2, text: 'The Hidden Risk of Flat Vehicle Networks' },
  {
    type: 'paragraph',
    text: 'Traditional vehicle networks were developed in an era when cybersecurity was not a primary design requirement. CAN networks, for example, were designed for efficient and reliable communication between trusted ECUs. Every node connected to the network could observe messages being broadcast across the bus, and a compromised node could potentially transmit messages that other ECUs interpret as legitimate. In a flat or poorly segmented network, compromising a relatively low-criticality component could create a pathway toward far more sensitive systems. A telematics unit, infotainment display, diagnostic interface, or connected agricultural implement may initially appear unrelated to steering, braking, or powertrain functions. But if all these components can communicate freely across the internal network, the compromise of one system can become the starting point for lateral movement.',
  },
  {
    type: 'paragraph',
    text: 'For a passenger vehicle, such a breach is concerning. For a 25-ton combine harvester operating during a narrow harvesting window, an articulated dump truck working in a mine, or a commercial truck transporting goods across long distances, the consequences may be even more significant. A successful attack could result in machine downtime, operational disruption, financial loss, unintended behaviour, or potentially unsafe control actions. The key problem is therefore not simply preventing an attacker from entering the vehicle. It is preventing that attacker from reaching everything once entry has been achieved.',
  },
  { type: 'heading', level: 2, text: 'Every Connection Can Become an Attack Path' },
  {
    type: 'paragraph',
    text: 'Commercial and agricultural machines have cybersecurity challenges that differ from conventional passenger cars. They often have long operational lifecycles, support third-party equipment, and operate in remote environments where maintenance and connectivity requirements are complex.One major entry point is the telematics gateway. These devices connect the machine to cellular and cloud infrastructure, enabling fleet management, remote diagnostics, and software updates. Because they are externally connected, they represent an important boundary between the outside world and the vehicle network.',
  },
  {
    type: 'paragraph',
    text: 'Another major challenge exists in agricultural equipment through ISOBUS and implement connections. Implements such as planters, sprayers, and other agricultural equipment may be connected dynamically to the tractor. A compromised or malicious third-party implement could potentially introduce an untrusted ECU directly into the machine’s communication environment and attempt to inject unauthorized commands. Diagnostic and service ports present another potential pathway. Heavy-duty vehicles commonly rely on interfaces such as J1939 for maintenance and diagnostics. Service tools, aftermarket devices, or unauthorized dongles can create risks if authentication and access controls are insufficient.',
  },
  {
    type: 'paragraph',
    text: 'Wireless interfaces such as Wi-Fi and Bluetooth add further complexity. While they improve usability and connectivity for operator displays, calibration tools, and local applications, they also expand the attack surface. The challenge is clear: the more connected the machine becomes, the more important it becomes to control where that connectivity is allowed to go.',
  },
  { type: 'heading', level: 2, text: 'Network Segmentation: Limiting the Blast Radius' },
  {
    type: 'paragraph',
    text: 'Network segmentation provides a practical answer to this problem. Instead of allowing every ECU and domain to communicate freely, the vehicle architecture is divided into controlled zones based on safety criticality, functional requirements, latency needs, and exposure to external threats.',
  },
  {
    type: 'paragraph',
    text: 'For example, highly critical domains such as:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      'Braking',
      'Steering',
      'Powertrain',
      'Autonomous control functions',
    ],
  },
  {
    type: 'paragraph',
    text: 'can be isolated from less trusted or externally exposed domains such as:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      'Telematics',
      'Infotainment and displays',
      'Wireless interfaces',
      'Diagnostic systems',
      'Connected implements',
    ],
  },
  {
    type: 'paragraph',
    text: 'Communication between these domains should not occur automatically. It should pass through defined and controlled security boundaries.',
  },
  {
    type: 'paragraph',
    text: 'This approach changes the impact of a compromise. If an attacker gains access to a telematics ECU, segmentation should prevent that compromise from automatically becoming access to the powertrain or braking network. Similarly, a compromised agricultural implement should not have unrestricted communication with the tractor’s critical control systems. In cybersecurity terms, segmentation reduces the blast radius of an attack. A compromise may still occur, but its ability to spread is significantly restricted.',
  },
  { type: 'heading', level: 2, text: 'The Central Security Gateway: The Machine’s Security Checkpoint' },
  {
    type: 'paragraph',
    text: 'A key component in this architecture is the Central Security Gateway (CSG). Rather than allowing unrestricted communication between different networks, the gateway acts as a controlled checkpoint. Traffic moving between Automotive Ethernet, CAN FD, LIN, and other network domains can be inspected and filtered according to predefined security rules.',
  },
  {
    type: 'paragraph',
    text: 'The gateway can determine:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      'Which ECU is permitted to communicate with another ECU',
      'Which CAN identifiers are authorized',
      'What type of data is allowed',
      'How frequently messages may be transmitted',
      'Whether a message conforms to expected parameters',
      'Whether communication should be blocked entirely',
    ],
  },
  {
    type: 'paragraph',
    text: 'For example, an air-conditioning controller may need access to specific environmental signals, but it has no legitimate operational reason to transmit commands to a braking controller. Under a least-privilege architecture, that communication path should simply not exist. This represents a major shift from the traditional assumption that all ECUs connected to a vehicle network can be trusted.',
  },
  { type: 'heading', level: 2, text: 'Filtering Messages Is Not Enough' },
  {
    type: 'paragraph',
    text: 'Segmentation must be supported by strong message-level security. A gateway can filter unauthorized messages based on identifiers, payload characteristics, or transmission frequency. Rate limiting can also help reduce the impact of message flooding and denial-of-service attacks. However, attackers may attempt to imitate legitimate ECUs. This is where mechanisms such as AUTOSAR Secure Onboard Communication (SecOC) become important.',
  },
  {
    type: 'paragraph',
    text: [
      'SecOC uses security mechanisms including Message Authentication Codes (MACs) and Freshness Values to help verify that a message originates from an authorized source and is not simply a replay of an earlier legitimate message. This can strengthen protection against spoofing and replay attacks affecting critical control communications. The objective is to move beyond simply asking, ',
      { text: '“Is this message coming through an allowed network?”', italic: true },
      ' and toward asking, ',
      { text: '“Is this message authentic, current, and authorized?”', italic: true },
    ],
  },
  { type: 'heading', level: 2, text: 'Security Requires Visibility Too' },
  {
    type: 'paragraph',
    text: 'Segmentation reduces the opportunities for attackers to move across the network, but no security architecture can assume that every attack will be blocked. This is why In-Vehicle Intrusion Detection Systems (IDPS) are increasingly important. These systems monitor communication patterns and establish a baseline for normal behaviour. They can observe CAN message timing, transmission frequency, payload characteristics, and Ethernet traffic to identify unusual activity.',
  },
  {
    type: 'paragraph',
    text: 'For example, an unexpected burst of steering messages, an abnormal message frequency, or an out-of-sequence counter could indicate a potential attack or compromised ECU. Security events can then be sent to a centralized Vehicle Security Operations Center (VSOC), allowing manufacturers or fleet operators to monitor threats across an entire deployed machine population and respond more quickly.',
  },
  { type: 'heading', level: 2, text: 'Security Must Not Prevent Serviceability' },
  {
    type: 'paragraph',
    text: 'One of the biggest challenges for heavy-duty and agricultural equipment manufacturers is balancing cybersecurity with operational reality. These machines often operate in remote locations and may require immediate servicing by dealers, technicians, or independent repair providers. A security architecture that makes legitimate diagnostics impossible could create unacceptable downtime during critical planting, harvesting, or commercial operations. The answer is not to weaken security permanently. Instead, manufacturers need controlled access mechanisms, robust identity management, and temporary authorization methods that allow legitimate service activities without creating permanent backdoors or relying on static master keys.',
  },
  { type: 'heading', level: 2, text: 'Conclusion' },
  {
    type: 'paragraph',
    text: 'As commercial vehicles and agricultural machines become increasingly autonomous, connected, and software-defined, the cybersecurity of the in-vehicle network becomes a fundamental engineering requirement. The critical question is no longer simply whether an attacker can compromise an ECU. The more important question is: what happens next? If a compromised telematics unit, diagnostic device, wireless interface, or connected implement can freely communicate with safety-critical systems, the entire machine may be exposed. Network segmentation changes this equation by creating controlled boundaries, enforcing least privilege, authenticating critical communications, and continuously monitoring for suspicious activity.',
  },
  {
    type: 'paragraph',
    text: 'For manufacturers, the message is clear: do not design vehicle networks on the assumption that every connected ECU will always remain trustworthy. Design the architecture so that when one component is compromised, the rest of the machine does not have to be. The future of automotive and off-highway cybersecurity will therefore depend not only on building stronger individual ECUs, but also on controlling how those ECUs communicate. In an increasingly connected machine, security is not just about protecting the entry point—it is about making sure that one breach does not become a path to the entire vehicle.',
  },
]

export default content
