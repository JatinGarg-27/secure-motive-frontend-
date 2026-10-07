import { heroIntro, heroMedia } from '@/data/home'
import FrameworkCoverage from './FrameworkCoverage'

// Interpolated in sRGB, like the design; Tailwind's default (oklab) gives peach mid-tones instead of olive.
const GRADIENT_LINE =
  'block bg-linear-to-r/srgb from-cyber-teal via-cyber-orange to-cyber-teal bg-clip-text text-transparent'

/** Still image, with the optional video playing over it. Both are decorative. */
function HeroBackground() {
  const mediaClasses = 'absolute inset-0 size-full object-cover'

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <img
        src={heroMedia.image}
        alt=""
        width={heroMedia.width}
        height={heroMedia.height}
        fetchPriority="high"
        className={mediaClasses}
      />
      {heroMedia.video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroMedia.image}
          className={`${mediaClasses} motion-reduce:hidden`}
        >
          <source src={heroMedia.video} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-cyber-bg/65" />
      <div className="absolute inset-0 bg-linear-to-b from-cyber-bg/50 via-transparent to-cyber-bg" />
    </div>
  )
}

/** Home hero: darkened vehicle backdrop, 128px headline, intro and framework chips. */
export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative flex w-full max-w-5xl flex-col items-center gap-5 px-6 pt-16 pb-20 text-center md:pt-20 md:pb-30">
        {/* The heading shrinks to its widest line and each coloured line fills
            it, so both gradients span "SECURING THE" — as in the design. */}
        <h1 className="font-display text-5xl font-bold tracking-tight text-white uppercase sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="block">Securing the</span>
          <span className={GRADIENT_LINE}>Connected</span>
          <span className={GRADIENT_LINE}>Vehicle</span>
        </h1>
        <p className="max-w-2xl pt-1 text-lg leading-relaxed text-white/85 sm:text-xl">
          {heroIntro}
        </p>
        <FrameworkCoverage />
      </div>
    </section>
  )
}
