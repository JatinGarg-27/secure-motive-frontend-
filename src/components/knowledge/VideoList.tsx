import Button from '@/components/common/Button'
import { useVideos } from '@/hooks/useVideos'
import TabMessage from './TabMessage'
import VideoCard from './VideoCard'

/** The Videos tab: published videos from the backend, with loading, error and empty states. */
export default function VideoList() {
  const { status, videos, retry } = useVideos()

  if (status === 'loading') return <TabMessage>Loading videos…</TabMessage>

  if (status === 'error') {
    return (
      <div className="flex flex-col items-start gap-4">
        <TabMessage tone="error">Videos could not be loaded. Please try again.</TabMessage>
        <Button variant="outline" size="md" onClick={retry}>
          Retry
        </Button>
      </div>
    )
  }

  if (videos.length === 0) return <TabMessage>No videos have been published yet.</TabMessage>

  return (
    <ul className="flex flex-col gap-3">
      {videos.map((video) => (
        <li key={video.id}>
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
  )
}
