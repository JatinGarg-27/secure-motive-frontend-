import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import IconTile from '@/components/common/IconTile'
import { ArrowRightIcon, MapPinIcon } from '@/components/common/icons'
import Tag from '@/components/common/Tag'
import type { Job } from '@/types/career'

interface JobCardProps {
  job: Job
  /** In-page target of "Apply now", e.g. "#apply". */
  applyTo: string
  /** Called when "Apply now" is used, so the form can preselect this role. */
  onApply: (job: Job) => void
}

/** One open role: department tag, optional badge, title, location and type, "Apply now". */
export default function JobCard({ job, applyTo, onApply }: JobCardProps) {
  return (
    <Card interactive className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
      <IconTile />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <Tag>{job.department}</Tag>
          {job.badge && (
            <span className="rounded-full bg-cyber-orange px-2.5 py-0.5 font-code text-xs font-semibold text-cyber-bg">
              {job.badge}
            </span>
          )}
        </div>
        <h3 className="mt-0.5 font-display text-xl font-semibold tracking-wide text-white transition-colors group-hover:text-cyber-teal">
          {job.title}
        </h3>
        <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-code text-xs text-cyber-muted">
          <span className="flex items-center gap-1">
            <MapPinIcon className="size-3" />
            {job.locations.join(' / ')}
          </span>
          <span>{job.employmentType}</span>
        </p>
      </div>
      <div className="shrink-0">
        <Button
          variant="outline"
          size="md"
          to={applyTo}
          onClick={() => onApply(job)}
          icon={<ArrowRightIcon className="size-3" strokeWidth={4 / 3} />}
        >
          Apply now
        </Button>
      </div>
    </Card>
  )
}
