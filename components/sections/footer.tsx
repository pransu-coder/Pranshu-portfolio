'use client'

import { Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranshu-sharma-763910216/' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/p_0564?igsh=NjI2OTNoZWc2YTB3&utm_source=qr' },
    
  ]

  return (
    <footer className="border-t border-foreground-tertiary/10 bg-background-secondary py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          <p className="text-foreground-tertiary font-medium text-xs sm:text-base text-center sm:text-left">
            © {currentYear} Pranshu Sharma. All rights reserved.
          </p>
          
          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map(({ icon: Icon, label, href }, idx) => (
              <a 
                key={label}
                href={href} 
                className="text-foreground-tertiary hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 will-change-transform"
                aria-label={label}
                style={{
                  animation: `smoothEnter 0.6s ease-out forwards`,
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
