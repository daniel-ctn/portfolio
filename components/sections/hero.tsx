'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { WordRotate } from '@/components/ui/text-animations'
import { useEffect, useRef } from 'react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/daniel-ctn', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/daniel-ctn', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:danielnguyen5201@gmail.com', label: 'Email' },
]

const roles = ['agentic engineering', 'AI product building', 'real-time intelligence apps', 'AI-assisted delivery']

const heroMetrics = [
  { value: '9+', label: 'Years in frontend' },
  { value: '1', label: 'AI product shipped' },
  { value: 'Now', label: 'Building stock AI app' },
]

const profileRows = [
  { label: 'Location', value: 'Ho Chi Minh City, Vietnam' },
  { label: 'Current focus', value: 'AI-native product building and agentic engineering' },
  { label: 'Learning now', value: 'Python, PostgreSQL, AI-era backend skills' },
]

const blurInVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left) / rect.width)
      mouseY.set((e.clientY - rect.top) / rect.height)
    }

    const el = heroRef.current
    el?.addEventListener('mousemove', handleMouseMove)
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section ref={heroRef} className='relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36'>
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          className='absolute h-[500px] w-[500px] rounded-full opacity-[0.07]'
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
            left: springX,
            top: springY,
            x: '-50%',
            y: '-50%',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <motion.div
        className='relative z-10 mx-auto max-w-6xl'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          variants={blurInVariants}
          className='flex items-center justify-between border-b border-card-border pb-4 text-[0.65rem] uppercase tracking-[0.2em] text-muted'
        >
          <div className='flex items-center gap-4'>
            <span className='inline-flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-primary' />
              Available for work
            </span>
            <span className='hidden sm:inline'>Ho Chi Minh City</span>
          </div>
          <span>Portfolio 2026</span>
        </motion.div>

        <div className='mt-12 grid gap-12 lg:grid-cols-[1fr_340px] lg:items-start'>
          <div>
            <motion.h1 variants={blurInVariants}>
              <span className='block font-display text-[clamp(3.5rem,7.5vw,6.5rem)] leading-[0.9] tracking-[-0.03em] text-foreground'>
                Building products
              </span>
              <span className='block font-display text-[clamp(3.5rem,7.5vw,6.5rem)] italic leading-[0.9] tracking-[-0.03em] text-foreground'>
                for the AI era
              </span>
            </motion.h1>

            <motion.div
              variants={blurInVariants}
              className='mt-8 flex items-center gap-3 text-sm text-muted'
            >
              <span className='text-[0.65rem] uppercase tracking-[0.2em]'>Focused on</span>
              <WordRotate words={roles} className='font-medium text-primary' />
            </motion.div>

            <motion.p
              variants={blurInVariants}
              className='mt-6 max-w-xl text-base leading-relaxed text-foreground-soft md:text-lg'
            >
              Senior frontend developer growing into an agentic engineer. I use AI to build real products, expand my
              technical range, and work more effectively across frontend, product, and emerging AI-native workflows.
            </motion.p>

            <motion.div variants={blurInVariants} className='mt-8 flex flex-wrap gap-3'>
              <motion.a
                href='#projects'
                className='inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-widest text-background'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Selected work
                <ArrowUpRight className='h-4 w-4' />
              </motion.a>

              <motion.a
                href='#contact'
                className='inline-flex items-center gap-2 rounded-lg border border-card-border px-5 py-3 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:border-primary/30'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a conversation
              </motion.a>
            </motion.div>

            <motion.div variants={blurInVariants} className='mt-10 flex items-center gap-4'>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-10 w-10 items-center justify-center rounded-lg border border-card-border text-muted transition-colors hover:border-primary/30 hover:text-primary'
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className='h-4 w-4' />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={blurInVariants} className='mt-12 grid gap-4 sm:grid-cols-3'>
              {heroMetrics.map((metric) => (
                <div key={metric.label} className='border-l border-card-border pl-4'>
                  <p className='font-mono text-2xl font-medium text-foreground'>{metric.value}</p>
                  <p className='mt-1 text-sm text-muted'>{metric.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={blurInVariants} className='lg:sticky lg:top-28'>
            <div className='overflow-hidden rounded-xl border border-card-border'>
              <div className='relative aspect-4/5'>
                <Image src='/daniel-chibi.jpg' alt='Daniel Nguyen' fill className='object-cover object-center' priority />
                <div className='absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent' />
                <div className='absolute inset-x-0 bottom-0 p-5'>
                  <p className='text-[0.62rem] uppercase tracking-[0.2em] text-primary'>Daniel Nguyen</p>
                  <p className='mt-1 font-display text-2xl text-foreground'>Senior Frontend Developer</p>
                </div>
              </div>

              <div className='space-y-px bg-card-border'>
                {profileRows.map((row) => (
                  <div key={row.label} className='bg-background-alt px-5 py-3.5'>
                    <p className='text-[0.62rem] uppercase tracking-[0.18em] text-muted'>{row.label}</p>
                    <p className='mt-1 text-sm text-foreground'>{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
