'use client'

import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

type Props = {
  src: string
  poster?: string
  title?: string
  className?: string
}

export default function Video({ src, poster, title, className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  // Toggle play/pause on user click
  const handleTogglePlay = async () => {
    const v = videoRef.current
    if (!v) return

    try {
      if (v.paused) {
        // enable/keep sound based on muted state
        v.muted = muted
        const p = v.play()
        if (p) await p.catch(() => {}) // attempt play, ignore rejection
        setIsPlaying(true)
      } else {
        v.pause()
        setIsPlaying(false)
      }
    } catch (err) {
      console.warn('[Video] play error', err)
    }
  }

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    const v = videoRef.current
    if (!v) return
    const nm = !muted
    v.muted = nm
    setMuted(nm)
  }

  return (
    <div
      ref={containerRef}
      onClick={handleTogglePlay}
      className={`relative rounded-xl overflow-hidden bg-black group ${className}`}
      role="button"
      tabIndex={0}
      aria-label={title ?? 'Video — click to play'}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleTogglePlay()
        }
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        // no autoplay, loop optional (kept true for reels feel; remove loop if you prefer)
        loop
        className="w-full h-screen sm:h-[520px] md:h-[560px] lg:h-[620px] object-cover"
      />

      {/* Title pill */}
      {title && (
        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur px-3 py-1 rounded-full text-xs text-white/90">
          {title}
        </div>
      )}

      {/* Center big Play/Pause overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="pointer-events-auto bg-black/30 p-3 rounded-full transition transform hover:scale-105"
          onClick={(e) => { e.stopPropagation(); handleTogglePlay() }}
        >
          {isPlaying ? <Pause size={28} className="text-white" /> : <Play size={28} className="text-white" />}
        </div>
      </div>

      {/* Bottom-right controls (mute) */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 pointer-events-auto">
        <button
          onClick={(e) => { e.stopPropagation(); toggleMute(e) }}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="bg-black/40 p-2 rounded-full backdrop-blur hover:bg-black/60 transition"
        >
          {muted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
        </button>
      </div>

      {/* Small status */}
      <div className="absolute top-4 right-4">
        <span className={`px-2 py-1 text-xs rounded-full text-white/90 backdrop-blur ${isPlaying ? 'bg-green-600/60' : 'bg-rose-600/40'}`}>
          {isPlaying ? 'Playing' : 'Paused'}
        </span>
      </div>
    </div>
  )
}
