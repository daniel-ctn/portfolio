'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Blocks,
  Wrench,
  GraduationCap,
  MapPin,
  Briefcase,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import { BentoCard } from '@/components/bento/bento-card'
import { AIChat } from '@/components/bento/ai-chat'
import { TechBadge } from '@/components/ui/tech-badge'

// ─── DATA ────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'project-artflow',
    title: 'Art Flow',
    subtitle: 'AI-Powered NFT Product',
    description:
      'AI generates NFT artwork from user input, then lets users mint those images on-chain inside one connected experience.',
    technologies: ['Next.js', 'TypeScript', 'Wagmi', 'Vercel AI SDK', 'Gemini', 'TailwindCSS', 'Prisma', 'Supabase'],
    liveUrl: 'https://nft-ai-gen-pearl.vercel.app/',
    githubUrl: '#',
    image: '/projects/art-flow-2.png',
    stats: [
      { label: 'NFTs', value: '500+' },
      { label: 'Transactions', value: '10k+' },
    ],
  },
  {
    id: 'project-promptexpert',
    title: 'Prompt Expert',
    subtitle: 'AI Agent Prompt Builder',
    description:
      'Helps users create efficient prompts for AI agents with a smoother workflow for drafting, refining, and organizing prompt ideas.',
    technologies: ['Next.js 16', 'TypeScript', 'OpenAI', 'Tailwind CSS', 'Zustand', 'Auth.js', 'Neon', 'Drizzle'],
    liveUrl: 'https://prompt-expert-rust.vercel.app/',
    githubUrl: 'https://github.com/daniel-ctn/prompt-expert',
    image: '/projects/prompt-expert.png',
    stats: [
      { label: 'Focus', value: 'Agents' },
      { label: 'Database', value: 'Neon' },
    ],
  },
  {
    id: 'project-aicommercial',
    title: 'AI Commercial',
    subtitle: 'AI-Powered Commerce',
    description:
      'AI-assisted shopping with chatbot for faster product discovery and AI-powered product comparison flows.',
    technologies: ['TanStack Start', 'FastAPI', 'SQLAlchemy', 'NestJS', 'TypeORM'],
    liveUrl: 'https://ai-commercial-mu.vercel.app/',
    githubUrl: 'https://github.com/daniel-ctn/ai-commercial',
    image: null,
    stats: [
      { label: 'Frontend', value: 'TanStack' },
      { label: 'Backends', value: '2' },
    ],
  },
]

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Blockpixels',
    period: '2022 — Present',
    tech: ['React', 'Next.js', 'TypeScript', 'Viem', 'GraphQL'],
    current: true,
  },
  {
    title: 'Frontend Developer',
    company: '2359 Media',
    period: '2020 — 2021',
    tech: ['React', 'Next.js', 'TypeScript', 'Redux'],
    current: false,
  },
  {
    title: 'Junior Frontend Developer',
    company: 'FPT Software',
    period: '2017 — 2019',
    tech: ['JavaScript', 'React', 'HTML5', 'CSS3'],
    current: false,
  },
]

const skillGroups = [
  { title: 'Frontend', icon: Code2, items: ['React', 'Next.js', 'TanStack Start', 'TypeScript', 'TailwindCSS', 'Framer Motion'] },
  { title: 'Web3', icon: Blocks, items: ['wagmi', 'Ethers.js', 'Smart Contracts', 'DeFi', 'NFTs'] },
  { title: 'Tools', icon: Wrench, items: ['Git', 'TanStack Query', 'Zustand', 'GraphQL', 'Vitest', 'Claude Code', 'Codex'] },
  { title: 'Learning', icon: GraduationCap, items: ['Python', 'NestJS', 'PostgreSQL', 'Agentic Systems'] },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/daniel-ctn', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/daniel-ctn', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:danielnguyen5201@gmail.com', label: 'Email' },
]

// ─── STAGGER ANIMATION ──────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

// ─── ROLE ROTATOR ────────────────────────────────────────────────────────────

const roles = ['Agentic Engineering', 'AI Product Building', 'Real-time Intelligence']

function RoleRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setIndex((p) => (p + 1) % roles.length), 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode='wait'>
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4 }}
        className='gradient-text font-display'
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)

  const project = projects[activeProject]

  return (
    <main className='relative'>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — Full width, no card, dramatic
      ════════════════════════════════════════════════════════════════════ */}
      <motion.section
        variants={stagger}
        initial='hidden'
        animate='show'
        className='relative mx-auto flex min-h-[92vh] max-w-[1400px] items-center px-6 lg:px-12'
      >
        {/* Orb */}
        <div className='hero-orb' />

        {/* Profile image */}
        <motion.div
          variants={fadeUp}
          className='absolute right-[12%] top-1/2 z-10 hidden -translate-y-1/2 lg:block'
        >
          <div className='relative'>
            <div className='absolute -inset-3 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl' />
            <div className='relative h-80 w-80 overflow-hidden rounded-full border-2 border-border ring-1 ring-primary/10 ring-offset-4 ring-offset-background'>
              <Image
                src='/daniel-chibi.jpg'
                alt='Daniel Nguyen'
                fill
                className='object-cover'
                sizes='320px'
                priority
              />
            </div>
          </div>
        </motion.div>

        <div className='relative z-10 max-w-3xl'>
          <motion.h1
            variants={fadeUp}
            className='font-display text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]'
          >
            Daniel
            <br />
            Nguyen
          </motion.h1>

          <motion.div variants={fadeUp} className='mt-6 flex items-center gap-3 text-lg'>
            <span className='text-foreground-soft'>Senior Frontend Developer</span>
            <span className='h-px w-10 bg-primary/40' />
            <RoleRotator />
          </motion.div>

          <motion.p variants={fadeUp} className='mt-5 max-w-lg text-base leading-relaxed text-foreground-soft'>
            Building AI-powered products, exploring agentic engineering, and shipping polished frontend experiences for
            the AI era.
          </motion.p>

          {/* Metrics inline */}
          <motion.div variants={fadeUp} className='mt-10 flex gap-10'>
            {[
              { v: '9+', l: 'Years Frontend' },
              { v: '3+', l: 'AI Products' },
              { v: '5+', l: 'dApps Built' },
            ].map((m) => (
              <div key={m.l}>
                <p className='font-display text-3xl font-bold text-foreground'>{m.v}</p>
                <p className='mt-0.5 text-xs text-foreground-soft'>{m.l}</p>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className='mt-8 flex gap-3'>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground-soft transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-[0_0_20px_rgba(94,234,212,0.08)]'
                aria-label={s.label}
              >
                <s.icon className='h-4 w-4' />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════════════════════
          GRID — Only 4 large cards
      ════════════════════════════════════════════════════════════════════ */}
      <div className='mx-auto max-w-[1400px] px-6 pb-20 lg:px-12'>
        <div className='grid gap-5 lg:grid-cols-12'>
          {/* ─── AI CHAT ─── 5 cols */}
          <BentoCard className='lg:col-span-5 lg:row-span-1' delay={0.1}>
            <AIChat />
          </BentoCard>

          {/* ─── PROJECTS SHOWCASE ─── 7 cols, tabbed */}
          <BentoCard className='lg:col-span-7 p-0' delay={0.2} sectionId={projects.map((p) => p.id)}>
            <div className='p-6 pb-0 lg:p-8 lg:pb-0'>
              {/* Project tabs */}
              <div className='mb-6 flex items-center gap-1'>
                <span className='mr-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-foreground-soft'>
                  Selected Work
                </span>
                {projects.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProject(i)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                      i === activeProject
                        ? 'bg-primary/12 text-primary'
                        : 'text-foreground-soft hover:text-foreground'
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>

              {/* Active project */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className='flex items-start justify-between'>
                    <div>
                      <h3 className='font-display text-2xl font-bold text-foreground'>{project.title}</h3>
                      <p className='text-xs uppercase tracking-[0.12em] text-foreground-soft'>
                        {project.subtitle}
                      </p>
                    </div>
                    <div className='flex gap-3'>
                      {project.stats.map((s) => (
                        <div key={s.label} className='text-right'>
                          <p className='font-mono text-sm font-semibold text-foreground'>{s.value}</p>
                          <p className='text-[0.55rem] uppercase tracking-wider text-muted'>{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className='mt-3 max-w-xl text-sm leading-relaxed text-foreground-soft'>
                    {project.description}
                  </p>

                  <div className='mt-4 flex flex-wrap gap-1.5'>
                    {project.technologies.map((tech) => (
                      <span key={tech} className='tech-tag'>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className='mt-5 flex gap-2.5'>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-background transition-transform hover:scale-[1.02]'
                      >
                        View Live
                        <ArrowUpRight className='h-3 w-3' />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-primary/25'
                      >
                        <Github className='h-3 w-3' />
                        Source
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project image */}
            <div className='mt-6 overflow-hidden rounded-b-2xl border-t border-border'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={project.id + '-img'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='relative aspect-[16/8] bg-background-alt'
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className='object-cover object-top'
                      sizes='(max-width: 768px) 100vw, 60vw'
                    />
                  ) : (
                    <div className='flex h-full items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-transparent'>
                      <span className='font-display text-7xl font-bold text-white/[0.03]'>
                        {project.title}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </BentoCard>

          {/* ─── CAREER ─── 7 cols — Experience + Skills merged */}
          <BentoCard className='lg:col-span-7' delay={0.3} sectionId={['experience', 'skills']}>
            <div className='grid gap-8 md:grid-cols-2'>
              {/* Experience side */}
              <div>
                <div className='mb-4 flex items-center gap-2'>
                  <Briefcase className='h-4 w-4 text-primary' />
                  <h3 className='font-display text-lg font-bold text-foreground'>Experience</h3>
                </div>

                <div className='relative space-y-5'>
                  <div className='absolute left-[4px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-primary/30 to-transparent md:block' />

                  {experiences.map((exp) => (
                    <div key={exp.company} className='relative md:pl-6'>
                      <div className='absolute left-0 top-1.5 hidden h-[9px] w-[9px] rounded-full border-2 border-primary bg-background md:block' />
                      <div className='flex items-baseline gap-2'>
                        <h4 className='text-sm font-semibold text-foreground'>{exp.title}</h4>
                        {exp.current && (
                          <span className='rounded bg-primary/10 px-1.5 py-0.5 text-[0.5rem] font-bold uppercase tracking-wider text-primary'>
                            Now
                          </span>
                        )}
                      </div>
                      <p className='mt-0.5 flex items-center gap-1.5 text-xs text-foreground-soft'>
                        <span className='font-medium text-primary'>{exp.company}</span>
                        <span className='text-muted'>&middot;</span>
                        <span className='font-mono text-[0.65rem]'>{exp.period}</span>
                      </p>
                      <div className='mt-2 flex flex-wrap gap-2'>
                        {exp.tech.map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills side */}
              <div>
                <div className='mb-4 flex items-center gap-2'>
                  <Zap className='h-4 w-4 text-accent' />
                  <h3 className='font-display text-lg font-bold text-foreground'>Stack & Tools</h3>
                </div>

                <div className='grid grid-cols-2 gap-3'>
                  {skillGroups.map((group) => (
                    <div key={group.title}>
                      <div className='mb-1.5 flex items-center gap-2'>
                        <group.icon className='h-3.5 w-3.5 text-foreground-soft' />
                        <span className='text-xs font-semibold text-foreground'>{group.title}</span>
                      </div>
                      <div className='flex flex-wrap gap-1.5'>
                        {group.items.map((skill) => (
                          <TechBadge key={skill} name={skill} variant='tile' />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* ─── CONNECT ─── 5 cols — About + Contact merged */}
          <BentoCard className='lg:col-span-5' delay={0.4} sectionId={['about', 'contact']}>
            <div className='flex h-full flex-col'>
              <h3 className='font-display text-lg font-bold text-foreground'>
                Building for the <span className='text-primary'>AI era</span>
              </h3>

              <p className='mt-3 text-sm leading-relaxed text-foreground-soft'>
                I&apos;m Daniel Nguyen — a senior frontend developer in Ho Chi Minh City focused on leveraging AI to
                build real products. I combine strong frontend fundamentals with AI-native workflows.
              </p>

              <div className='mt-5 grid grid-cols-3 gap-3'>
                {[
                  { icon: MapPin, label: 'Base', value: 'HCMC' },
                  { icon: Briefcase, label: 'Since', value: '2017' },
                  { icon: Zap, label: 'Focus', value: 'AI + Web3' },
                ].map((f) => (
                  <div key={f.label} className='rounded-xl border border-border bg-surface p-3 text-center'>
                    <f.icon className='mx-auto mb-1 h-4 w-4 text-primary/50' />
                    <p className='text-sm font-semibold text-foreground'>{f.value}</p>
                    <p className='text-[0.55rem] uppercase tracking-wider text-muted'>{f.label}</p>
                  </div>
                ))}
              </div>

              <div className='mt-auto pt-6'>
                <div className='h-px w-full bg-border' />
                <div className='mt-5 flex items-center justify-between'>
                  <div className='flex gap-2.5'>
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground-soft transition-all hover:border-primary/25 hover:text-primary'
                        aria-label={s.label}
                      >
                        <s.icon className='h-4 w-4' />
                      </a>
                    ))}
                  </div>
                  <motion.a
                    href='mailto:danielnguyen5201@gmail.com'
                    className='inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-background'
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get in touch
                    <ArrowUpRight className='h-3.5 w-3.5' />
                  </motion.a>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Footer */}
        <div className='mt-12 text-center'>
          <p className='text-xs text-muted'>
            &copy; {new Date().getFullYear()} Daniel Nguyen &mdash; Built with Next.js, Framer Motion & Gemini AI
          </p>
        </div>
      </div>
    </main>
  )
}
