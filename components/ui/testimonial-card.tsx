'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: {
    quote: string
    author: string
    role: string
    initials: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="glass rounded-2xl p-8 hover:border-primary/50 transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`transition-all duration-300 ${
              i < 5 
                ? 'fill-accent text-accent' 
                : 'text-foreground-tertiary'
            } ${isHovered ? 'scale-110' : 'scale-100'}`}
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>

      <blockquote className="text-lg text-foreground-secondary italic mb-6 leading-relaxed transition-all duration-300 group-hover:text-foreground">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold transition-transform duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {testimonial.author}
          </p>
          <p className="text-sm text-foreground-tertiary transition-colors duration-300 group-hover:text-foreground-secondary">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  )
}
