'use client'

import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const skills = [
  'Content Strategy',
  'Social Media Management',
  'Instagram Growth',
  'Reels Editing',
  'Short-Form Video Editing',
  'Canva',
  'CapCut / VN Editor',
  'Content Planning',
  'Trend Research',
  'Copywriting',
  'Brand Identity',
  'Analytics & Insights',
  'Hashtag Strategy',
  'Meta Business Suite',
  'Creator Studio',
  'Scheduling Tools',
  'Community Engagement',
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
        About Me
      </h2>
      <p className={`text-base sm:text-lg md:text-xl text-foreground-secondary transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} style={{ transitionDelay: '0.1s' }}>
        I blend creative storytelling with strategy-driven content to build social media experiences that connect, engage, and convert.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">

      {/* Left Column - About Text */}
      <div className={`space-y-4 sm:space-y-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        {[
          'With hands-on experience in creating high-impact content, I specialize in crafting platform-optimized social media strategies that strengthen brand identity and audience connection. My approach blends creativity with data-backed decision-making to achieve consistent growth.',
          
          'Engagement-Driven Content: I conceptualize and edit impactful Reels/Shorts, design clean visuals with Canva, research trends, write compelling captions, and strategically plan content that resonates with the target audience across platforms like Instagram, YouTube, and LinkedIn.',
          
          'Growth-Focused Social Presence: I plan, manage, and optimize full content pipelines — from scheduling through Meta Business Suite to analyzing insights, running A/B variations, and refining performance to deliver consistent reach, retention, and measurable results.'
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
