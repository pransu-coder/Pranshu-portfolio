'use client'

import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranshu-sharma-763910216/' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/p_0564?igsh=NjI2OTNoZWc2YTB3&utm_source=qr' },
  ]

  return (
    <footer role="contentinfo" className="border-t border-foreground-tertiary/10 bg-background-secondary py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
          
          {/* Profile Info */}
          <div className="text-center sm:text-left">
            <p className="text-foreground-primary font-semibold text-sm sm:text-base">Pranshu Sharma</p>
            <p className="text-foreground-tertiary text-xs sm:text-sm">Social Media Manager · Content & Strategy</p>
            <p className="text-foreground-tertiary font-medium text-xs sm:text-sm mt-2">
              © {currentYear} Pranshu Sharma. All rights reserved.
            </p>
          </div>

          {/* Social Icons Only */}
          <div className="flex gap-3 sm:gap-4 items-center">
            {socialLinks.map(({ icon: Icon, label, href }, idx) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-foreground-tertiary hover:text-primary transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label={label}
                style={{
                  animation: `smoothEnter 0.5s ease-out forwards`,
                  animationDelay: `${idx * 0.07}s`,
                  opacity: 0,
                }}
              >
                <Icon size={18} aria-hidden />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
