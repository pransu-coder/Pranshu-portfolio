'use client'

import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'ReactJS',
  'Next.js',
  'Shadcn/ui',
  'TypeScript',
  'Tailwind CSS',
  'Bootstrap',
  'Framer Motion',
  'Three.js',
  'GSAP',
  'NPM, PNPM',
  'GitHub',
  'Vite',
  'Vercel',
  
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section 
      ref={ref}
      id="about" 
      className="section-padding bg-background-secondary transition-all duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className={`section-title mb-4 sm:mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            AboutMe
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-foreground-secondary transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '0.1s' }}>
            I blend clean UI architecture with performance-driven development to craft interfaces that truly connect with users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Left Column - About Text */}
          <div className={`space-y-4 sm:space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {[
              'With 3+ years of product-focused frontend experience, I bridge the gap between user-centric interface design and high-performance web engineering. I specialize in taking ideas and transforming them into two synchronized outcomes:',
              'Interactive User Engagement: Designing and developing seamless interfaces with React & Next.js, crafting responsive layouts with Tailwind CSS, enhancing usability through design systems, and leveraging motion libraries for intuitive, meaningful user interaction.',
              "Scalable Digital Experiences: Building and optimizing production-ready frontends using the modern React ecosystem — ensuring speed, accessibility, SEO-readiness, and performance through SSR/ISR, code-splitting, and client-server optimized architecture."
            ].map((text, idx) => (
              <p 
                key={idx}
                className="text-base sm:text-lg text-foreground-secondary leading-relaxed transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${idx * 0.1}s`
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Right Column - Skills */}
          <div 
            className={`bg-gradient-to-br from-background to-background-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 transition-all duration-700 hover:shadow-lg hover:shadow-primary/10 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient">Core Skills</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, idx) => (
                <Badge 
                  key={skill} 
                  className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110 smooth-enter text-xs sm:text-sm"
                   style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
