import SectionLabel from '@/components/common/SectionLabel'
import { securityDisclosure } from '@/data/offices'

/** Orange-tinted card pointing researchers to the disclosure mailbox. */
export default function SecurityDisclosure() {
  return (
    <div className="rounded-xl border border-cyber-orange/20 bg-cyber-orange/5 p-6 pb-7">
      <SectionLabel as="h2" tone="orange">
        {securityDisclosure.heading}
      </SectionLabel>
      <p className="mt-3 text-xs leading-relaxed text-cyber-muted">{securityDisclosure.body}</p>
      <a
        href={`mailto:${securityDisclosure.email}`}
        className="mt-4 block w-fit font-code text-xs text-cyber-teal underline-offset-4 hover:underline"
      >
        {securityDisclosure.email}
      </a>
    </div>
  )
}
