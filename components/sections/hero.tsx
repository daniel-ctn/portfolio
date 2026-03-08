'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Briefcase, Code2, Cpu, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { WordRotate } from '@/components/ui/text-animations'
import { GlowingOrb } from '@/components/ui/parallax'

const socialLinks = [
  { icon: Github, href: 'https://github.com/daniel-ctn', label: 'GitHub', meta: 'code + experiments' },
  { icon: Linkedin, href: 'https://linkedin.com/in/daniel-ctn', label: 'LinkedIn', meta: 'career + network' },
  { icon: Mail, href: 'mailto:danielnguyen5201@gmail.com', label: 'Email', meta: 'open for selected work' },
]

const roles = ['agentic engineering', 'AI product building', 'real-time intelligence apps', 'AI-assisted delivery']

const heroMetrics = [
  { value: '9+', label: 'years in frontend engineering' },
  { value: '1', label: 'AI-powered NFT product shipped' },
  { value: 'Now', label: 'building a real-time stock chart app with AI insight' },
]

const heroCapabilities = [
  {
    icon: Code2,
    title: 'AI product builder',
    description: 'I use AI to turn ideas into real product experiences instead of stopping at demos or experiments.',
  },
  {
    icon: Cpu,
    title: 'Agentic engineer path',
    description: 'I am actively exploring how AI can become a stronger collaborator across research, implementation, and iteration.',
  },
  {
    icon: Briefcase,
    title: 'Continuous learning',
    description: 'AI helps me expand into Python, PostgreSQL, and the broader skills needed for the AI-era industry.',
  },
]

const profileRows = [
  { label: 'Location', value: 'Ho Chi Minh City, Vietnam' },
  { label: 'Current focus', value: 'AI-native product building and the path toward agentic engineering' },
  { label: 'Learning now', value: 'Python, PostgreSQL, and more AI-era backend knowledge' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section className='relative overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36'>
      <div className='absolute inset-0 pointer-events-none'>
        <GlowingOrb color='var(--primary)' size='360px' className='left-[8%] top-20 opacity-[0.22]' blur='150px' />
        <GlowingOrb
          color='var(--secondary)'
          size='420px'
          className='right-[8%] top-[18%] opacity-[0.15]'
          blur='180px'
        />
        <GlowingOrb color='var(--accent)' size='280px' className='bottom-[8%] left-[46%] opacity-[0.12]' blur='130px' />
        <div
          className='absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className='absolute left-[6%] top-26 h-px w-28 bg-linear-to-r from-primary/80 to-transparent' />
        <div className='absolute right-[7%] top-40 h-px w-36 bg-linear-to-l from-secondary/80 to-transparent' />
        <div className='absolute bottom-16 left-[12%] h-px w-44 bg-linear-to-r from-accent/70 to-transparent' />
      </div>

      <motion.div
        className='relative z-10 mx-auto max-w-7xl'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          variants={itemVariants}
          className='flex flex-wrap items-center justify-between gap-4 border-y border-card-border/80 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-muted'
        >
          <div className='flex flex-wrap items-center gap-4'>
            <span className='inline-flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-secondary' />
              Available for selected work
            </span>
            <span className='inline-flex items-center gap-2'>
              <MapPin className='h-3.5 w-3.5 text-primary' />
              Ho Chi Minh City
            </span>
          </div>
          <span>Daniel Nguyen / Frontend Systems</span>
        </motion.div>

        <div className='mt-10 grid gap-8 lg:grid-cols-12 lg:items-start'>
          <motion.aside variants={itemVariants} className='lg:col-span-2'>
            <div className='space-y-3'>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-between rounded-2xl border border-card-border bg-background/42 px-4 py-3 text-foreground transition-colors hover:border-frame-border'
                  whileHover={{ x: 4 }}
                >
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/3'>
                      <social.icon className='h-4 w-4' />
                    </div>
                    <div>
                      <p className='text-sm font-semibold uppercase tracking-[0.14em]'>{social.label}</p>
                      <p className='text-[0.62rem] uppercase tracking-[0.12em] text-muted'>{social.meta}</p>
                    </div>
                  </div>
                  <ArrowUpRight className='h-4 w-4 text-muted' />
                </motion.a>
              ))}
            </div>
          </motion.aside>

          <motion.div variants={itemVariants} className='lg:col-span-6'>
            <p className='text-xs uppercase tracking-[0.3em] text-muted/80'>Portfolio 2026</p>

            <h1 className='mt-5'>
              <span className='block font-display text-[clamp(4.4rem,8vw,7.6rem)] leading-[0.86] tracking-[-0.07em] text-foreground'>
                Building products
              </span>
              <span className='block text-[clamp(2.2rem,5vw,4.8rem)] font-semibold tracking-[-0.06em] text-foreground'>
                for the AI era
              </span>
              <span className='block text-[clamp(2.2rem,5vw,4.8rem)] font-semibold tracking-[-0.06em] text-primary'>
                with AI as a real collaborator.
              </span>
            </h1>

            <div className='mt-6 inline-flex flex-wrap items-center gap-3 rounded-full border border-card-border bg-background-alt/65 px-4 py-3 text-sm text-foreground-soft'>
              <span className='text-[0.68rem] uppercase tracking-[0.24em] text-muted'>Focused on</span>
              <WordRotate words={roles} className='font-semibold text-foreground' />
            </div>

            <p className='mt-6 max-w-2xl text-base leading-relaxed text-foreground-soft md:text-lg'>
              I&apos;m a senior frontend developer currently focused on growing into an agentic engineer. I use AI to
              build real products, expand my technical range, and work more effectively across frontend, product, and
              emerging AI-native workflows.
            </p>

            <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap'>
              <motion.a
                href='#projects'
                className='inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-linear-to-r from-primary to-primary-light px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-primary/20'
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Selected work
                <ArrowUpRight className='h-4 w-4' />
              </motion.a>

              <motion.a
                href='#contact'
                className='inline-flex items-center justify-center gap-2 rounded-2xl border border-card-border bg-background/40 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground'
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a conversation
              </motion.a>
            </div>

            <div className='mt-10 grid gap-4 sm:grid-cols-3'>
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className='rounded-2xl border border-card-border bg-background-alt/65 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.14)]'
                >
                  <p className='font-display text-4xl leading-none text-foreground'>{metric.value}</p>
                  <p className='mt-2 text-sm leading-relaxed text-foreground-soft'>{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='lg:col-span-4'>
            <div className='rounded-3xl border border-frame-border bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.26)]'>
              <div className='relative overflow-hidden rounded-3xl border border-white/10'>
                <div className='relative aspect-4/5'>
                  <Image src='/daniel-chibi.jpg' alt='Daniel Nguyen' fill className='object-cover object-center' priority />
                </div>
                <div className='absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent' />
                <div className='absolute inset-x-0 bottom-0 p-6'>
                  <p className='text-[0.65rem] uppercase tracking-[0.24em] text-primary-light'>Daniel Nguyen</p>
                  <p className='mt-2 font-display text-4xl leading-none text-foreground'>Senior Frontend Developer</p>
                </div>
              </div>

              <div className='mt-4 space-y-3'>
                {profileRows.map((row) => (
                  <div key={row.label} className='rounded-2xl border border-card-border bg-background-alt/70 px-4 py-4'>
                    <p className='text-[0.65rem] uppercase tracking-[0.24em] text-muted'>{row.label}</p>
                    <p className='mt-2 text-sm font-medium leading-relaxed text-foreground'>{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='lg:col-span-12'>
            <div className='grid gap-4 md:grid-cols-3'>
              {heroCapabilities.map((capability) => (
                <div
                  key={capability.title}
                  className='rounded-2xl border border-card-border bg-background/38 px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.14)]'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-card-border bg-background-alt/70'>
                    <capability.icon className='h-5 w-5 text-foreground' />
                  </div>
                  <p className='mt-5 text-[0.68rem] uppercase tracking-[0.22em] text-muted'>Capability</p>
                  <h3 className='mt-2 text-xl font-semibold text-foreground'>{capability.title}</h3>
                  <p className='mt-3 text-sm leading-relaxed text-foreground-soft'>{capability.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='lg:col-span-12'>
            <div className='flex flex-wrap gap-2 rounded-2xl border border-card-border bg-background/30 px-4 py-4 md:px-6'>
              {['Next.js', 'TypeScript', 'Framer Motion', 'Web3 UI', 'AI workflows'].map((tag) => (
                <span key={tag} className='tech-tag'>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
