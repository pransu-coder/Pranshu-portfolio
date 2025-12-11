'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/xpwkzrnw', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'pransu145@gmail.com', href: 'mailto:pransu145@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7518 928 670', href: 'tel:+917518928670' },
    { icon: MapPin, label: 'Location', value: 'Uttar Pradesh, India', href: '#' },
  ]

  return (
    <section ref={ref} id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className={`section-title mb-4 sm:mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Let's Talk
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-foreground-secondary transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '0.1s' }}>
            Have a project or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {contactItems.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <a 
                    key={idx}
                    href={item.href}
                    className="flex gap-3 sm:gap-4 items-start group transition-all duration-300 hover:-translate-x-2"
                    style={{
                      animation: `smoothEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                      animationDelay: `${0.2 + idx * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <IconComponent className="text-primary mt-0.5 sm:mt-1 flex-shrink-0 group-hover:text-accent transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                    <div>
                      <p className="text-xs sm:text-sm text-foreground-tertiary font-semibold mb-0.5 sm:mb-1 uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-lg font-medium group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className={`bg-background-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 transition-all duration-700 hover:shadow-lg hover:shadow-primary/10 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Message</h3>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground-secondary mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-foreground-tertiary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground-secondary mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-foreground-tertiary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground-secondary mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-foreground-tertiary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {status === 'sending' ? (
                  <>
                    <span className="animate-spin">⚙️</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="hidden sm:inline" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-success text-xs sm:text-sm text-center font-semibold">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-xs sm:text-sm text-center font-semibold">
                  Error sending message. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
