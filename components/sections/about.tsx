'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Code2, Rocket, Brain } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const strengths = [
  {
    icon: Code2,
    title: 'AI product building',
    description: 'Turning ideas into real product experiences with AI at the core, not just as a bolted-on feature.',
  },
  {
    icon: Rocket,
    title: 'Agentic engineer path',
    description: 'Learning to leverage AI deeply across research, implementation, and faster iteration loops.',
  },
  {
    icon: Brain,
    title: 'Continuous learning',
    description: 'Using AI to accelerate growth in Python, PostgreSQL, and emerging AI-era skills.',
  },
]

const profileFacts = [
  { label: 'Base', value: 'Ho Chi Minh City' },
  { label: 'Experience', value: 'Since 2017' },
  { label: 'Direction', value: 'Agentic engineering' },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 15%',
          scrub: 1,
        },
      })

      tl.from('.about-label', { opacity: 0, x: -30, duration: 0.3 })
        .from('.about-title', { opacity: 0, y: 50, filter: 'blur(8px)', duration: 0.6 })
        .from('.about-bio', { opacity: 0, y: 30, duration: 0.5 }, '-=0.3')
        .from('.about-fact', { opacity: 0, y: 25, stagger: 0.08, duration: 0.4 }, '-=0.2')
        .from('.about-strength', { opacity: 0, x: 50, filter: 'blur(4px)', stagger: 0.12, duration: 0.5 }, '-=0.3')

      gsap.from('.about-quote', {
        scrollTrigger: {
          trigger: '.about-quote',
          start: 'top 85%',
          end: 'top 55%',
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id='about' className='motion-section relative'>
      <div className='section-inner'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]'>
            <div>
              <div className='about-label section-label'>About</div>

              <h2 className='about-title font-display text-5xl tracking-[-0.03em] text-foreground lg:text-6xl'>
                Frontend developer
                <br />
                <span className='italic text-primary'>building for AI</span>
              </h2>

              <p className='about-bio mt-7 max-w-lg text-base leading-[1.8] text-foreground-soft'>
                I&apos;m Daniel Nguyen, a senior frontend developer focused on leveraging AI to build real products. I
                use AI to ship complete experiences, expand my technical range, and prepare myself for an AI-driven
                industry.
              </p>

              <div className='mt-8 grid grid-cols-3 gap-4'>
                {profileFacts.map((fact) => (
                  <div key={fact.label} className='about-fact border-l border-card-border pl-3'>
                    <p className='text-sm font-medium text-foreground'>{fact.value}</p>
                    <p className='mt-0.5 text-[0.6rem] uppercase tracking-[0.16em] text-muted'>{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              {strengths.map((strength) => (
                <div
                  key={strength.title}
                  className='about-strength group rounded-xl border border-card-border p-5 transition-colors hover:border-primary/20'
                >
                  <div className='flex items-start gap-4'>
                    <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                      <strength.icon className='h-4 w-4' />
                    </div>
                    <div>
                      <h3 className='text-base font-semibold text-foreground'>{strength.title}</h3>
                      <p className='mt-1.5 text-sm leading-relaxed text-foreground-soft'>{strength.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='about-quote mt-14 border-l-2 border-primary/30 pl-6'>
            <p className='max-w-xl text-base leading-relaxed text-foreground-soft'>
              My goal is to combine strong frontend fundamentals with AI-native workflows, becoming the kind of
              engineer who can learn, build, and iterate faster with AI as a real working partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
