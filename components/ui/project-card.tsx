'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  project: {
    title: string
    desc: string
    visual: string
    bg: string
    links: { text: string; url: string }[]
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     

<div className={`h-48 flex items-center justify-center ${project.bg} relative overflow-hidden transition-all duration-300`}>
    
    <Image
        src={project.visual} 
        alt={project.title}  
        layout="fill"        
        objectFit="fill"  
        className={`z-10 transition-all duration-300 group-hover:scale-110`}
        
    />
    <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-0'}`} />
</div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-foreground-secondary mb-4 text-sm leading-relaxed line-clamp-3">
          {project.desc}
        </p>

        {/* Links with enhanced interaction */}
        <div className="flex flex-wrap gap-3">
          {project.links.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              className="text-sm text-primary hover:text-accent transition-all duration-300 font-semibold group/link"
            >
              {link.text}
              <span className="group-hover/link:translate-x-1 transition-transform duration-300 inline-block"> →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
