import { SmoothScroll } from '@/components/motion/smooth-scroll'
import { ScrollProgress } from '@/components/motion/scroll-progress'
import { Navbar } from '@/components/layout/navbar'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <ScrollProgress />
      <main className='relative'>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
