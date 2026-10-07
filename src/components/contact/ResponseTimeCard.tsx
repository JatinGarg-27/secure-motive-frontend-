import Card from '@/components/common/Card'
import SectionLabel from '@/components/common/SectionLabel'
import { responseTimes } from '@/data/offices'
import { cn } from '@/utils/helpers'

/** "Response time" card at the top of the Contact sidebar. */
export default function ResponseTimeCard() {
  return (
    <Card interactive className="p-6">
      <SectionLabel as="h2">Response time</SectionLabel>
      <ul className="mt-4 flex flex-col gap-3">
        {responseTimes.map((item) => (
          <li key={item.label} className="flex items-center gap-3 text-sm text-white">
            <span
              aria-hidden="true"
              className={cn(
                'size-2 shrink-0 rounded-full',
                item.tone === 'orange' ? 'bg-cyber-orange' : 'bg-cyber-teal',
              )}
            />
            {item.label}
          </li>
        ))}
      </ul>
    </Card>
  )
}
