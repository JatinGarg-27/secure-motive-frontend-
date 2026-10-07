import { useEffect, useState } from 'react'
import { videos as localVideos } from '@/data/videos'
import { API_ENABLED } from '@/services/api'
import { fetchPublishedVideos } from '@/services/videoService'
import type { Video } from '@/types/video'

interface UseVideosResult {
  status: 'loading' | 'ready' | 'error'
  videos: Video[]
  /** Tries the request again after a failure. */
  retry: () => void
}

interface LoadResult {
  /** The attempt this result belongs to; older results are ignored. */
  attempt: number
  videos: Video[] | null
}

/**
 * Knowledge Centre videos.
 *
 * With the API enabled, loads the published videos once per mount (and again
 * on `retry`). With it disabled, returns the local list straight away, so the
 * tab shows its empty state instead of a request that cannot succeed.
 */
export function useVideos(): UseVideosResult {
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState<LoadResult | null>(null)

  useEffect(() => {
    if (!API_ENABLED) return

    const controller = new AbortController()
    fetchPublishedVideos(controller.signal)
      .then((videos) => setResult({ attempt, videos }))
      .catch(() => {
        // An aborted request belongs to an unmounted or superseded attempt.
        if (!controller.signal.aborted) setResult({ attempt, videos: null })
      })
    return () => controller.abort()
  }, [attempt])

  const retry = () => setAttempt((current) => current + 1)

  if (!API_ENABLED) return { status: 'ready', videos: localVideos, retry }

  // Loading is derived: there is no result yet for the current attempt.
  if (result?.attempt !== attempt) return { status: 'loading', videos: [], retry }
  if (result.videos === null) return { status: 'error', videos: [], retry }
  return { status: 'ready', videos: result.videos, retry }
}
