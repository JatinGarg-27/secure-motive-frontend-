import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { jobs } from '@/data/careers'
import type { Job } from '@/types/career'
import JobCard from './JobCard'

interface JobListProps {
  applyTo: string
  onApply: (job: Job) => void
}

/** "Current positions": the open roles on a tinted band. */
export default function JobList({ applyTo, onApply }: JobListProps) {
  return (
    <section className="border-y border-cyber-teal/10 bg-cyber-surface/30 py-14 md:py-20">
      <Container>
        <SectionHeading label="Open roles" title="Current" highlight="Positions" className="mb-12" />
        <ul className="flex flex-col gap-3">
          {jobs.map((job) => (
            <li key={job.id}>
              <JobCard job={job} applyTo={applyTo} onApply={onApply} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
