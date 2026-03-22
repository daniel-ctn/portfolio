'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Code2, Sparkles, Database, Server, GraduationCap, Wrench, Blocks } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'TanStack Start', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Framer Motion'],
  },
  {
    title: 'Web3',
    icon: Blocks,
    skills: ['Web3.js', 'Ethers.js', 'wagmi', 'RainbowKit', 'Wallet Integration', 'Smart Contracts', 'DeFi', 'NFTs'],
  },
  {
    title: 'Tools & Libraries',
    icon: Wrench,
    skills: ['Git', 'GitHub Actions', 'TanStack Query', 'Redux', 'Zustand', 'GraphQL', 'REST APIs', 'Jest'],
  },
  {
    title: 'Currently Learning',
    icon: GraduationCap,
    skills: ['Python', 'NestJS', 'PostgreSQL', 'Agentic Systems', 'Realtime Data Apps', 'Backend Foundations', 'AI/ML APIs'],
  },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      gsap.from('.skills-label', {
        scrollTrigger: { trigger: section, start: 'top 78%', end: 'top 58%', scrub: 1 },
        opacity: 0,
        x: -30,
        duration: 0.3,
      })

      gsap.from('.skills-title', {
        scrollTrigger: { trigger: section, start: 'top 75%', end: 'top 52%', scrub: 1 },
        opacity: 0,
        y: 40,
        filter: 'blur(8px)',
        duration: 0.5,
      })

      gsap.from('.skills-intro', {
        scrollTrigger: { trigger: section, start: 'top 72%', end: 'top 50%', scrub: 1 },
        opacity: 0,
        y: 20,
        duration: 0.4,
      })

      gsap.utils.toArray<HTMLElement>('.skill-category').forEach((cat, i) => {
        gsap.from(cat, {
          scrollTrigger: { trigger: cat, start: 'top 88%', end: 'top 62%', scrub: 1 },
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: 'blur(4px)',
          duration: 0.5,
          delay: i * 0.05,
        })
      })

      gsap.utils.toArray<HTMLElement>('.skill-tag-animated').forEach((tag, i) => {
        gsap.from(tag, {
          scrollTrigger: { trigger: tag.parentElement!, start: 'top 85%', end: 'top 55%', scrub: 1 },
          opacity: 0,
          y: 15,
          scale: 0.8,
          duration: 0.3,
          delay: i * 0.02,
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id='skills' className='motion-section relative'>
      <div className='section-inner'>
        <div className='mx-auto max-w-7xl'>
          <div className='skills-label section-label'>Capabilities</div>
          <h2 className='skills-title font-display text-5xl tracking-[-0.03em] text-foreground lg:text-6xl'>
            Stack & Tools
          </h2>

          <p className='skills-intro mt-5 max-w-xl text-base leading-relaxed text-foreground-soft'>
            The stack here is pulled from the products above, spanning AI features, modern frontend work, auth,
            databases, and backend frameworks used across real builds.
          </p>

          <div className='mt-12 grid gap-5 md:grid-cols-2'>
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className='skill-category group rounded-xl border border-card-border p-6 transition-colors hover:border-primary/20'
              >
                <div className='flex items-center gap-3'>
                  <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                    <category.icon className='h-4 w-4' />
                  </div>
                  <h3 className='text-lg font-semibold text-foreground'>{category.title}</h3>
                </div>

                <div className='mt-5 flex flex-wrap gap-1.5'>
                  {category.skills.map((skill) => (
                    <span key={skill} className='skill-tag-animated tech-tag'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
