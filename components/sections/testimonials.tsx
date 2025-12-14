'use client'

import TestimonialCard from '@/components/ui/testimonial-card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'





const testimonials = [


  {
    quote: 'Pranshu built an outstanding crypto exchange platform with real-time trading and secure wallet integration. The interface improved our user experience.',
    author: 'Pixlpe',
    role: 'Tech Team',
    initials: 'PX',
  },

  {
    quote: 'The portfolio website Pranshu created showcases incredible 3D animations and smooth interactions. The modern design perfectly represents our creative vision.',
    author: 'Algocifer',
    role: 'Creative Team',
    initials: 'AL',
  },
  {
    quote: 'Pranshu created an outstanding billing system that streamlined our payment processes. The secure interface reduced our processing time by 50%.',
    author: 'BILLKIT',
    role: 'Finance Team',
    initials: 'BK',
  }
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
            Team Feedback
          </h2>

          <p className={`text-base sm:text-lg md:text-xl text-foreground-secondary transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '0.1s' }}>
            Professional testimonials from the Pixlpe and Algocifer teams on our development projects
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

