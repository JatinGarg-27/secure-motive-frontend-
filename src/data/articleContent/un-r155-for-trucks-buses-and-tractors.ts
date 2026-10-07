import type { ArticleBlock } from '@/types/article'

/** Body of "UN R155 for Trucks, Buses and Tractors: What Does It Really Mean for Commercial Vehicle Cybersecurity?", as supplied by the client. Do not reword. */
const content: ArticleBlock[] = [
  {
    type: 'paragraph',
    text: 'Imagine a cyberattack taking control of a passenger car. The consequences could be serious. Now consider the same scenario involving a 40-tonne truck carrying hazardous cargo, a city bus filled with passengers, or a connected tractor operating critical agricultural equipment. The potential impact is far greater.',
  },
  {
    type: 'paragraph',
    text: 'Today’s commercial and agricultural vehicles are becoming sophisticated connected machines. Telematics, remote diagnostics, GPS guidance, autonomous functions, wireless connectivity, and software-controlled systems are transforming trucks, buses, and tractors into highly digital platforms. But greater connectivity also creates more opportunities for cybercriminals.',
  },
  {
    type: 'paragraph',
    text: 'This is where UN Regulation No. 155 (UN R155) becomes increasingly important. For manufacturers, suppliers, and fleet operators, however, understanding UN R155 can be difficult. Terms such as Cyber Security Management System (CSMS), vehicle type approval, threat analysis, and lifecycle security can make the regulation appear more complicated than it really is. So, what does UN R155 actually mean for trucks, buses, and tractors? Let’s take a practical look.',
  },
  { type: 'heading', level: 2, text: 'What is UN R155?' },
  {
    type: 'paragraph',
    text: 'At its core, UN R155 establishes cybersecurity requirements for vehicle manufacturers. Rather than treating cybersecurity as a one-time engineering activity, the regulation requires manufacturers to demonstrate that cybersecurity is managed throughout the vehicle’s lifecycle. Two elements are particularly important. First is the Cyber Security Management System (CSMS). Manufacturers need an organizational and technical process for identifying cybersecurity risks, implementing controls, managing incidents, and continuously improving vehicle security. Second is vehicle type approval. Individual vehicle types must demonstrate that relevant cybersecurity risks have been assessed and appropriately addressed. The regulation considers a broad range of potential cyber threats rather than focusing on a single attack technique. For commercial vehicle manufacturers, this represents a significant change in mindset. Cybersecurity is no longer something that can simply be added toward the end of vehicle development.',
  },
  { type: 'heading', level: 2, text: 'Why Trucks, Buses and Tractors Present Different Cybersecurity Challenges' },
  {
    type: 'paragraph',
    text: 'A cybersecurity strategy designed for a passenger car cannot simply be copied and applied to a heavy-duty truck or agricultural machine.',
  },
  { type: 'heading', level: 3, text: '1. Vehicles Have Much Longer Lifecycles' },
  {
    type: 'paragraph',
    text: 'Passenger vehicles may typically remain with their first owners for several years, but commercial vehicles often operate for 15 to 20 years or longer. Trucks can accumulate more than a million kilometres, while agricultural machinery can remain operational for decades. That creates a fundamental cybersecurity challenge. A vehicle designed today could still be operating well into the 2040s. Manufacturers therefore need security mechanisms that can evolve as threats, software, cryptographic requirements, and attack techniques change. Cybersecurity must survive the vehicle—not just the product launch.',
  },
  { type: 'heading', level: 3, text: '2. Multiple Suppliers Create a Larger Attack Surface' },
  {
    type: 'paragraph',
    text: 'Modern commercial vehicles are rarely built as completely closed systems. A truck may contain electronic control units from several suppliers, while a trailer could have separate braking, refrigeration, or monitoring systems. Telematics gateways and other connected components may come from yet another supplier. These systems must communicate with one another, often through vehicle networks such as CAN and J1939. The result is a complex ecosystem in which a weakness in one component can potentially create cybersecurity risks elsewhere. UN R155 therefore pushes manufacturers to take a much closer look at cybersecurity throughout their supply chain.',
  },
  { type: 'heading', level: 3, text: '3. Cyberattacks Can Cause Major Operational Disruption' },
  {
    type: 'paragraph',
    text: 'The consequences of a cyberattack against a commercial fleet can extend far beyond an individual vehicle. If ransomware or another cyberattack disables a logistics fleet, deliveries could stop, supply chains could be disrupted, and operators could face substantial financial losses. For public transportation, a cyber incident can affect passenger safety and service availability. For agricultural equipment, timing can be equally critical. Disabling connected harvesting or farming machinery during a narrow seasonal window could result in significant operational and economic consequences.',
  },
  { type: 'heading', level: 2, text: 'What Does UN R155 Mean for Different Vehicle Segments?' },
  { type: 'heading', level: 3, text: 'Trucks and Logistics Vehicles' },
  {
    type: 'paragraph',
    text: 'For medium- and heavy-duty trucks, cybersecurity extends deeply into the supply chain. Modern trucks depend on numerous ECUs, sensors, gateways, and connected systems. Manufacturers therefore need greater visibility into the cybersecurity practices of their Tier-1 suppliers and, increasingly, the wider supply chain. A cybersecurity weakness in a critical component can become a vehicle-level problem. The message is straightforward: an OEM’s cybersecurity posture is only as strong as the ecosystem supporting its vehicle.',
  },
  { type: 'heading', level: 3, text: 'Buses and Coaches' },
  {
    type: 'paragraph',
    text: 'Buses introduce another important dimension: the coexistence of passenger-facing and vehicle-critical systems. Modern buses can include Wi-Fi, digital ticketing, passenger-counting systems, CCTV, infotainment, and other connected technologies. These systems must not provide an unintended pathway into safety-critical vehicle functions. Network segmentation and strong security controls are therefore essential. A compromise of a passenger-facing system should not provide access to systems responsible for propulsion, steering, braking, or other critical functions.',
  },
  { type: 'heading', level: 3, text: 'Tractors and Agricultural Machinery' },
  {
    type: 'paragraph',
    text: 'Agricultural machinery is also becoming increasingly connected. GPS-guided steering, telematics, remote diagnostics, precision farming, and autonomous functions are turning tractors and other agricultural machines into sophisticated cyber-physical systems. The cybersecurity risk is not limited to data theft. An attack that disrupts machinery during critical farming operations could have serious economic consequences and potentially affect food production. For agricultural OEMs, cybersecurity is therefore becoming an operational resilience issue—not simply an IT concern.',
  },
  { type: 'heading', level: 2, text: 'Four Practical Priorities for UN R155 Compliance' },
  {
    type: 'paragraph',
    text: 'Rather than viewing UN R155 as a mountain of documentation, manufacturers can focus on four practical areas.',
  },
  {
    type: 'paragraph',
    text: [
      { text: '1. Build cybersecurity into engineering from the beginning', bold: true },
    ],
  },
  {
    type: 'paragraph',
    text: 'Security needs to start during architecture and design, not after the vehicle has been developed. Threat Analysis and Risk Assessment (TARA) should help identify risks associated with ECUs, software functions, interfaces, and vehicle systems early in development.',
  },
  {
    type: 'paragraph',
    text: [
      { text: '2. Monitor vehicles after production', bold: true },
    ],
  },
  {
    type: 'paragraph',
    text: 'Cybersecurity does not end when a vehicle leaves the factory. Connected fleets require continuous monitoring for emerging threats and abnormal behaviour. This is driving the adoption of Vehicle Security Operations Centres (VSOCs), which can support detection and response throughout the vehicle lifecycle.',
  },
  {
    type: 'paragraph',
    text: [
      { text: '3. Prepare for incidents and secure OTA updates', bold: true },
    ],
  },
  {
    type: 'paragraph',
    text: 'When vulnerabilities are discovered, manufacturers need a mechanism to investigate them, develop a fix, test the solution, and deploy the fixes efficiently. Secure over-the-air (OTA) updates can become particularly valuable for large commercial fleets because they can reduce dependence on physical service campaigns while allowing security fixes to reach vehicles more efficiently.',
  },
  {
    type: 'paragraph',
    text: [
      { text: '4. Address cybersecurity limitations in legacy vehicle networks', bold: true },
    ],
  },
  {
    type: 'paragraph',
    text: 'Many commercial vehicles continue to rely heavily on CAN-based networks, which were not originally designed with modern cybersecurity requirements such as authentication and encryption in mind. Security mechanisms such as Secure Onboard Communication (SecOC) can help provide stronger assurance that messages received by ECUs originate from trusted sources.',
  },
  { type: 'heading', level: 2, text: 'UN R155: Regulation or Competitive Advantage?' },
  {
    type: 'paragraph',
    text: [
      'UN R155 may initially appear to manufacturers as another regulatory requirement. But its implications go beyond obtaining approval. A cybersecurity-focused vehicle can offer fleet operators greater confidence in uptime, resilience, safety, and protection against operational disruption. For logistics companies, public transportation operators, and agricultural businesses, these factors can directly influence the value of a vehicle. The real question is therefore not simply, ',
      { text: '“How do we comply with UN R155?” ', bold: true },
      'It is ',
      { text: '“How do we use UN R155 to build vehicles that remain secure throughout their working lives?” ', bold: true },
      'As trucks, buses, and tractors become increasingly connected and software-defined, cybersecurity will become an integral part of vehicle engineering. Manufacturers that embed security into product development, supplier management, monitoring, incident response, and lifecycle maintenance will be better positioned for the connected-vehicle era.',
    ],
  },
  {
    type: 'paragraph',
    text: 'UN R155 is not merely about checking a regulatory box. It is about protecting the digital systems behind the machines that keep people moving, goods flowing, and agriculture operating.',
  },
]

export default content
