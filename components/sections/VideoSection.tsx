'use client'

import Video from '@/components/sections/video'

export default function VideoSection() {
  return (
    <section
      id="videos"
      className="py-12 sm:py-16 lg:py-20 bg-background-secondary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground-primary">
            Video Edits / Reels
          </h2>
          <p className="text-foreground-secondary mt-2 text-sm sm:text-base">
            Short edits, product reels, social media content and more.
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <Video 
            src="/videos/editing.mp4" 
            poster="/videos/reel1.jpg" 
            title="Art of Editing"
          />

          <Video 
            src="/videos/promo.mp4" 
            poster="/videos/reel.jpg" 
            title="Earning Promo"
          />

          <Video 
            src="/videos/3dicons .mp4" 
            poster="/videos/reel3.jpg" 
            title="3D Icons Reel"
          />

        </div>
      </div>
    </section>
  )
}
