import FrameworkChip from '@/components/common/FrameworkChip'
import { frameworks } from '@/data/frameworks'

/** Label and framework chips at the foot of the Home hero. */
export default function FrameworkCoverage() {
  return (
    <>
      <p className="pt-3 font-code tracking-widest text-cyber-teal uppercase">
        Compliances &amp; Framework Coverage
      </p>
      <ul className="flex flex-wrap justify-center gap-2">
        {frameworks.map((framework) => (
          <li key={framework.id} className="flex">
            <FrameworkChip>{framework.code}</FrameworkChip>
          </li>
        ))}
      </ul>
    </>
  )
}
