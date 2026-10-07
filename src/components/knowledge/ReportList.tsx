import { reports } from '@/data/reports'
import ReportCard from './ReportCard'
import TabMessage from './TabMessage'

/** The Reports tab: every report as a stacked row. */
export default function ReportList() {
  if (reports.length === 0) return <TabMessage>No reports have been published yet.</TabMessage>

  return (
    <ul className="flex flex-col gap-3">
      {reports.map((report) => (
        <li key={report.slug}>
          <ReportCard report={report} />
        </li>
      ))}
    </ul>
  )
}
