'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ui/project-card'
import { projectsData } from '@/lib/projects-data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('marketing')
  const categories = Object.entries(projectsData)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className={`section-title mb-4 sm:mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured Work
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-foreground-secondary transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '0.1s' }}>
            Campaigns that drove real results and meaningful engagement
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {categories.map(([key, data], idx) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all transform hover:scale-105 active:scale-95 duration-300 smooth-enter ${
                activeCategory === key
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'border-2 border-foreground-tertiary/30 text-foreground-secondary hover:border-primary/60 hover:text-primary'
              }`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {data.icon} <span className="hidden sm:inline">{data.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {projectsData[activeCategory as keyof typeof projectsData].cards.map((project, idx) => (
            <div 
              key={idx}
              className="smooth-enter"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
