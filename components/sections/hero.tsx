'use client'

import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import { useMousePosition } from '@/hooks/use-mouse-position'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const mousePosition = useMousePosition()
  const glowRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!glowRef.current) return
    
    const handleMouseMove = () => {
      if (glowRef.current) {
        const rect = glowRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const rotationX = (mousePosition.y - centerY) * 0.02
        const rotationY = (mousePosition.x - centerX) * 0.02
        
        setRotation({ x: rotationX, y: rotationY })
      }
    }
    
    handleMouseMove()
  }, [mousePosition])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16 md:pb-20">
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column */}
          <div className="smooth-enter">
            <p className="text-primary text-xs sm:text-sm font-bold mb-3 sm:mb-4 blur-fade tracking-widest uppercase" style={{ animationDelay: '0.2s' }}>
              Welcome, I'm
            </p>
           <h1 className="section-title mb-4 blur-fade leading-tight text-2xl sm:text-3xl" style={{ animationDelay: '0.3s' }}>
    <span className="text-orange-500">
        Pranshu 
    </span>Sharma
   
</h1>
            <p className="text-xl sm:text-2xl font-medium text-foreground-secondary mb-4 sm:mb-6 blur-fade" 
              style={{ animationDelay: '0.4s' }}>
              Social Media Manager <span className="text-primary font-bold">&</span> <span className="text-gradient-secondary">Frontend Developer</span>
            </p>
          <p className="text-base sm:text-lg text-foreground-secondary mb-6 sm:mb-8 max-w-xl leading-relaxed blur-fade"
    style={{ animationDelay: '0.5s' }}>
    I specialize in both <strong>strategic Social Media Management</strong> and <strong>Frontend Development</strong> using <strong>Next.js</strong>. My approach is to take compelling <strong>brand narratives</strong> and transform them into two things: <strong>authentic online communities</strong> that drive engagement, and <strong>high-performance, scalable web experiences</strong> built with Next.js. I ensure that both my technical solutions and content strategies are centered around delivering real, <strong>measurable growth</strong> and meaningful user interaction.
</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 blur-fade" style={{ animationDelay: '0.6s' }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30 text-sm sm:text-base"
              >
                View My Work
                <ArrowRight size={18} className="hidden sm:inline" />
              </a>
              <a
                href="/Pranshu Resume1.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-primary text-primary hover:bg-primary/5 font-bold rounded-full transition-all hover:shadow-md text-sm sm:text-base"
              >
                Download CV
                <Download size={18} className="hidden sm:inline" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div 
            ref={glowRef}
            className="relative h-64 sm:h-80 md:h-96 smooth-enter" 
            style={{ 
              animationDelay: '0.1s',
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl blur-2xl" />
            <div 
              className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary/20 flex items-center justify-center bg-background-secondary"
              style={{
                boxShadow: '0 20px 40px rgba(255, 107, 53, 0.15)'
              }}
            >
              <Image
                src="/Pranshu.jpeg"
                alt="Pranshu Sharma"
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
