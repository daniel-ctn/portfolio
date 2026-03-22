'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { WordRotate } from '@/components/ui/text-animations'

gsap.registerPlugin(ScrollTrigger)

const roles = ['agentic engineering', 'AI product building', 'real-time intelligence', 'AI-assisted delivery']

const metrics = [
  { value: '9+', label: 'Years in frontend' },
  { value: '3+', label: 'AI product shipped' },
  { value: 'Now', label: 'Building AI Planner app' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/daniel-ctn', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/daniel-ctn', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:danielnguyen5201@gmail.com', label: 'Email' },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 })
  const glowLeft = useTransform(springX, (v) => v)
  const glowTop = useTransform(springY, (v) => v)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      gsap.set(
        [
          '.hero-status',
          '.hero-line',
          '.hero-name-1',
          '.hero-name-2',
          '.hero-role',
          '.hero-desc',
          '.hero-metric',
          '.hero-social',
          '.hero-scroll-hint',
        ],
        { visibility: 'visible' }
      )

      const entrance = gsap.timeline({ delay: 0.2 })

      entrance
        .from('.hero-line', {
          scaleX: 0,
          duration: 0.9,
          ease: 'power2.inOut',
        })
        .from(
          '.hero-status',
          {
            opacity: 0,
            y: -15,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .from(
          '.hero-name-1',
          {
            opacity: 0,
            y: 100,
            skewY: 4,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.2'
        )
        .from(
          '.hero-name-2',
          {
            opacity: 0,
            y: 100,
            skewY: 4,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.7'
        )
        .from(
          '.hero-role',
          {
            opacity: 0,
            x: -40,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .from(
          '.hero-desc',
          {
            opacity: 0,
            y: 25,
            filter: 'blur(8px)',
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .from(
          '.hero-metric',
          {
            opacity: 0,
            y: 30,
            stagger: 0.08,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        .from(
          '.hero-social',
          {
            opacity: 0,
            y: 15,
            stagger: 0.05,
            duration: 0.35,
            ease: 'power2.out',
          },
          '-=0.15'
        )
        .from('.hero-scroll-hint', {
          opacity: 0,
          duration: 0.6,
        })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=80%',
            scrub: 1.2,
            pin: true,
            pinSpacing: true,
          },
        })
        .to('.hero-name-1', { x: '-18%', opacity: 0, filter: 'blur(12px)', duration: 1 })
        .to('.hero-name-2', { x: '18%', opacity: 0, filter: 'blur(12px)', duration: 1 }, '<')
        .to('.hero-role', { opacity: 0, y: -30, duration: 0.6 }, '<0.1')
        .to('.hero-desc', { opacity: 0, y: 50, filter: 'blur(6px)', duration: 0.5 }, '<')
        .to('.hero-metric', { opacity: 0, y: 50, stagger: 0.04, duration: 0.4 }, '<0.05')
        .to('.hero-social', { opacity: 0, y: 25, stagger: 0.03, duration: 0.3 }, '<')
        .to('.hero-status', { opacity: 0, y: -25, duration: 0.3 }, '<')
        .to('.hero-line', { scaleX: 0, duration: 0.3 }, '<')
        .to('.hero-scroll-hint', { opacity: 0, duration: 0.2 }, '<')
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id='hero' className='motion-section relative h-screen'>
      <motion.div
        className='pointer-events-none absolute h-[600px] w-[600px] rounded-full opacity-[0.06]'
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          left: glowLeft,
          top: glowTop,
          x: '-50%',
          y: '-50%',
          filter: 'blur(100px)',
        }}
      />

      <div className='section-inner relative z-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='hero-status invisible mb-14 flex items-center gap-3'>
            <div className='hero-line h-px w-12 origin-left bg-primary' />
            <span className='flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.22em] text-muted'>
              <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-primary' />
              Available for work
            </span>
            <span className='hidden text-[0.62rem] uppercase tracking-[0.22em] text-muted sm:inline'>
              Portfolio 2026
            </span>
          </div>

          <div className='overflow-hidden'>
            <h1 className='hero-name-1 invisible font-display text-[clamp(4rem,11vw,9.5rem)] leading-[0.87] tracking-[-0.04em] text-foreground'>
              Daniel
            </h1>
          </div>
          <div className='overflow-hidden'>
            <h1 className='hero-name-2 invisible font-display text-[clamp(4rem,11vw,9.5rem)] italic leading-[0.87] tracking-[-0.04em] text-foreground'>
              Nguyen
            </h1>
          </div>

          <div className='hero-role invisible mt-8 flex items-center gap-4 text-sm'>
            <span className='text-foreground-soft'>Senior Frontend Developer</span>
            <span className='h-px w-10 bg-primary' />
            <WordRotate words={roles} className='font-medium text-primary' />
          </div>

          <p className='hero-desc invisible mt-6 max-w-lg text-base leading-relaxed text-foreground-soft'>
            Building AI-powered products, exploring agentic engineering, and shipping polished frontend experiences for
            the AI era.
          </p>

          <div className='mt-12 flex gap-8 lg:gap-12'>
            {metrics.map((m) => (
              <div key={m.label} className='hero-metric invisible border-l border-card-border pl-4'>
                <p className='font-mono text-2xl font-medium text-foreground'>{m.value}</p>
                <p className='mt-1 text-xs text-muted'>{m.label}</p>
              </div>
            ))}
          </div>

          <div className='mt-8 flex gap-3'>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                className='hero-social invisible flex h-10 w-10 items-center justify-center rounded-lg border border-card-border text-muted transition-colors hover:border-primary/30 hover:text-primary'
                aria-label={s.label}
              >
                <s.icon className='h-4 w-4' />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='hero-scroll-hint invisible absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2'>
        <span className='text-[0.58rem] uppercase tracking-[0.25em] text-muted'>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className='h-4 w-4 text-muted' />
        </motion.div>
      </div>
    </section>
  )
}
