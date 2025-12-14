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
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`transition-all duration-300 ${
              i < 5 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300 dark:text-gray-600'
            } ${isHovered ? 'scale-105' : 'scale-100'}`}
            style={{ transitionDelay: `${i * 30}ms` }}
          />
        ))}
      </div>

      <blockquote className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-base mb-1">
            {testimonial.author}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  )
}
