'use client'

import TestimonialCard from '@/components/ui/testimonial-card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const testimonials = [
  {
    quote: 'Since bringing Pranshu on, our organic engagement skyrocketed by 65%! Their strategy was focused, insightful, and perfectly captured our brand.',
    author: 'Jenna K.',
    role: 'Marketing Director, Evolve Fitness',
    initials: 'J',
  },
  {
    quote: 'The content is consistently high-quality, relevant, and stunning. Pranshu handles everything from concept to execution flawlessly.',
    author: 'Aaron S.',
    role: 'Owner, The Artisan Coffee Co.',
    initials: 'A',
  },
  {
    quote: 'Professional, punctual, and highly skilled in paid social. Our campaign saw 25% lower CPA than previous attempts. Finally, clear ROI.',
    author: 'Mark G.',
    role: 'Head of Sales, Global Software',
    initials: 'M',
  },
]

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className={`section-title mb-4 sm:mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Client Stories
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-foreground-secondary transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '0.1s' }}>
            Feedback from brands I've worked with
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 smooth-enter ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
