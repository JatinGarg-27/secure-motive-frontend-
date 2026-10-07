/** A card in the Home "Why choose SecureXmotive" grid. */
export interface EdgePoint {
  title: string
  description: string
}

/** Background of the Home hero. */
export interface HeroMedia {
  /** Still image; also the poster and reduced-motion fallback when a video is set. */
  image: string
  /** Intrinsic size of the image, to reserve its space before it loads. */
  width: number
  height: number
  /** Optional looping background video (MP4). */
  video?: string
}
