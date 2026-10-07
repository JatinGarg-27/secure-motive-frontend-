import type { Video } from '@/types/video'

/**
 * Videos shown while the API is switched off (`VITE_ENABLE_API` is not "true").
 *
 * Empty on purpose: videos are managed in the backend and none have been
 * supplied as static content, so the tab shows its empty state. Do not add
 * invented entries.
 */
export const videos: Video[] = []
