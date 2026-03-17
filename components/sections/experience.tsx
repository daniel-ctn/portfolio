'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Blockpixels',
    location: 'Remote',
    period: '2022 — Present',
    description: 'Leading frontend development for a comprehensive Web3 ecosystem with multiple interconnected products.',
    highlights: [
      'Architected frontend for 5+ interconnected dApps',
      'Improved code quality and team practices',
      'Led a team of 4 developers',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Viem', 'TailwindCSS', 'GraphQL'],
    current: true,
  },
  {
    title: 'Frontend Developer',
    company: '2359 Media',
    location: 'Ho Chi Minh City',
    period: '2020 — 2021',
    description: 'Developed and maintained multiple client-facing web applications with focus on performance.',
    highlights: ['Built 2+ production apps', 'Introduced component library', 'Mentored junior developers'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux'],
    current: false,
  },
  {
    title: 'Junior Frontend Developer',
    company: 'FPT Software',
    location: 'Ho Chi Minh City',
    period: '2017 — 2019',
    description: 'Started professional journey building websites and web applications for various clients.',
    highlights: ['Delivered 10+ client projects', 'Built responsive design skills', 'Strong JS fundamentals'],
    technologies: ['JavaScript', 'React', 'HTML5', 'CSS3'],
    current: false,
  },
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      gsap.from('.exp-label', {
        scrollTrigger: { trigger: section, start: 'top 78%', end: 'top 55%', scrub: 1 },
        opacity: 0,
        x: -30,
        duration: 0.3,
      })

      gsap.from('.exp-title', {
        scrollTrigger: { trigger: section, start: 'top 75%', end: 'top 50%', scrub: 1 },
        opacity: 0,
        y: 40,
        filter: 'blur(8px)',
        duration: 0.5,
      })

      gsap.from('.exp-timeline-line', {
        scrollTrigger: { trigger: '.exp-timeline', start: 'top 80%', end: 'bottom 40%', scrub: 1 },
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1,
      })

      gsap.utils.toArray<HTMLElement>('.exp-entry').forEach((entry, i) => {
        gsap.from(entry, {
          scrollTrigger: { trigger: entry, start: 'top 82%', end: 'top 55%', scrub: 1 },
          opacity: 0,
          x: -40,
          filter: 'blur(4px)',
          duration: 0.5,
          delay: i * 0.05,
        })
      })

      gsap.utils.toArray<HTMLElement>('.exp-dot').forEach((dot) => {
        gsap.from(dot, {
          scrollTrigger: { trigger: dot, start: 'top 80%', end: 'top 65%', scrub: 1 },
          scale: 0,
          duration: 0.3,
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id='experience' className='motion-section relative'>
      <div className='section-inner'>
        <div className='mx-auto max-w-7xl'>
          <div className='exp-label section-label'>The Journey</div>
          <h2 className='exp-title mb-12 font-display text-5xl tracking-[-0.03em] text-foreground lg:text-6xl'>
            Experience
          </h2>

          <div className='exp-timeline relative'>
            <div className='exp-timeline-line absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:block' />

            <div className='space-y-10'>
              {experiences.map((exp) => (
                <article key={exp.company} className='exp-entry relative md:pl-10'>
                  <div className='exp-dot absolute -left-[5px] top-1.5 hidden h-[10px] w-[10px] rounded-full border-2 border-primary bg-background md:block' />

                  <div className='flex flex-wrap items-baseline gap-x-4 gap-y-1'>
                    <h3 className='font-display text-3xl tracking-[-0.02em] text-foreground'>{exp.title}</h3>
                    {exp.current && (
                      <span className='rounded-md bg-primary/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-primary'>
                        Current
                      </span>
                    )}
                  </div>

                  <div className='mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted'>
                    <span className='font-medium text-primary'>{exp.company}</span>
                    <span className='hidden h-1 w-1 rounded-full bg-muted sm:block' />
                    <span>{exp.location}</span>
                    <span className='hidden h-1 w-1 rounded-full bg-muted sm:block' />
                    <span className='font-mono text-[0.78rem]'>{exp.period}</span>
                  </div>

                  <p className='mt-3 max-w-2xl text-sm leading-relaxed text-foreground-soft'>{exp.description}</p>

                  <div className='mt-3 space-y-1'>
                    {exp.highlights.map((h) => (
                      <div key={h} className='flex items-start gap-2 text-sm text-foreground-soft'>
                        <ArrowRight className='mt-0.5 h-3 w-3 shrink-0 text-primary/60' />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className='mt-4 flex flex-wrap gap-1.5'>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className='tech-tag'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
