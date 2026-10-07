import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import IconTile from '@/components/common/IconTile'
import { ArrowRightIcon } from '@/components/common/icons'
import type { Report } from '@/types/report'
import ItemMeta from './ItemMeta'

/**
 * One report in the Knowledge Centre list. The design has no report card, so
 * this follows the article row and puts the action where the job row has its
 * button. The file opens in a new tab; without a file there is no button.
 */
export default function ReportCard({ report }: { report: Report }) {
  return (
    <Card interactive className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start">
      <IconTile className="mt-0.5" />
      <div className="min-w-0 flex-1">
        <ItemMeta category={report.category} publishedAt={report.publishedAt} />
        <h2 className="mt-1 font-display text-lg font-semibold tracking-wide text-white transition-colors group-hover:text-cyber-teal">
          {report.title}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-cyber-muted">{report.summary}</p>
      </div>
      <div className="shrink-0 sm:self-center">
        {report.fileUrl ? (
          <Button
            variant="outline"
            size="md"
            href={report.fileUrl}
            icon={<ArrowRightIcon className="size-3" strokeWidth={4 / 3} />}
          >
            Download
          </Button>
        ) : (
          <span className="font-code text-xs tracking-widest text-cyber-muted/40 uppercase">
            File pending
          </span>
        )}
      </div>
    </Card>
  )
}
