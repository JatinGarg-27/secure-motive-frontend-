const ID_PATTERN = /^[\w-]{11}$/

/** Extracts the video id from a YouTube link (watch, youtu.be, embed or shorts form). */
export function getYouTubeId(link: string): string | undefined {
  let url: URL
  try {
    url = new URL(link)
  } catch {
    return undefined
  }
  const { hostname, pathname, searchParams } = url
  const host = hostname.replace(/^www\./, '')

  let id: string | null | undefined
  if (host === 'youtu.be') {
    id = pathname.split('/')[1]
  } else if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
    const [, first, second] = pathname.split('/')
    id = first === 'watch' ? searchParams.get('v') : first === 'embed' || first === 'shorts' ? second : null
  }
  return id && ID_PATTERN.test(id) ? id : undefined
}

/** YouTube's own still for a video, or undefined when the link is not a YouTube video. */
export function getYouTubeThumbnail(link: string): string | undefined {
  const id = getYouTubeId(link)
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined
}
