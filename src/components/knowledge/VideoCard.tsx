import { useState } from 'react'
import Card from '@/components/common/Card'
import { ArrowRightIcon, PlayIcon } from '@/components/common/icons'
import type { Video } from '@/types/video'
import { getYouTubeId, getYouTubeThumbnail } from '@/utils/youtube'
import ItemMeta from './ItemMeta'

/**
 * One video in the Knowledge Centre list. The design has no video card, so this
 * follows the article row with a thumbnail in place of the icon tile. The whole
 * card opens the video on YouTube in a new tab — no embedded player is designed.
 */
export default function VideoCard({ video }: { video: Video }) {
  const [thumbnailFailed, setThumbnailFailed] = useState(false)
  const thumbnail = video.thumbnailUrl ?? getYouTubeThumbnail(video.youtubeUrl)
  const destination = getYouTubeId(video.youtubeUrl) ? 'opens on YouTube in a new tab' : 'opens in a new tab'

  return (
    <Card href={video.youtubeUrl} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start">
      {/* Fixed 16:9 box, so the list does not move when a thumbnail loads or fails. */}
      <span className="relative block aspect-video w-full shrink-0 overflow-hidden rounded-lg border border-cyber-teal/15 bg-cyber-field sm:w-56">
        {thumbnail && !thumbnailFailed && (
          <img
            src={thumbnail}
            alt=""
            loading="lazy"
            onError={() => setThumbnailFailed(true)}
            className="size-full object-cover"
          />
        )}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-10 items-center justify-center rounded-full border border-cyber-teal/30 bg-cyber-bg/65 text-cyber-teal">
            <PlayIcon className="size-5" />
          </span>
        </span>
      </span>
      <div className="min-w-0 flex-1">
        <ItemMeta publishedAt={video.publishedAt} />
        <h2 className="mt-1 font-display text-lg font-semibold tracking-wide text-white transition-colors group-hover:text-cyber-teal">
          {video.title}
          <span className="sr-only"> ({destination})</span>
        </h2>
        {video.description && (
          <p className="mt-1 text-sm leading-relaxed text-cyber-muted">{video.description}</p>
        )}
      </div>
      <ArrowRightIcon className="mt-1 hidden size-4 shrink-0 text-cyber-muted transition-colors group-hover:text-cyber-teal sm:block" />
    </Card>
  )
}
