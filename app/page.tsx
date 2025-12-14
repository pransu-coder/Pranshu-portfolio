import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Projects from '@/components/sections/projects'
import Testimonials from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

