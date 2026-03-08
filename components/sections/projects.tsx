'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { ArrowUpRight, Cpu, Github, Layers, Palette, Sparkles } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Art Flow',
    subtitle: 'AI-Powered NFT Product',
    description:
      'ArtFlow is a product I completed where AI helps generate NFT artwork from user input, then lets users mint those images on-chain inside one connected experience.',
    technologies: ['Next.js', 'TypeScript', 'Wagmi', 'Vercel AI SDK', 'Gemini', 'TailwindCSS', 'Prisma', 'Supabase'],
    liveUrl: 'https://nft-ai-gen-pearl.vercel.app/',
    githubUrl: '#',
    icon: Palette,
    image: '/projects/art-flow-2.png',
    stats: { users: '100+', transactions: '10k+', chains: '1' },
  },
  {
    title: 'Real-Time Stock Intelligence',
    subtitle: 'Real-Time Stock Chart App',
    description:
      "A product I'm currently building where users can follow live stock charts while AI analyzes the data in real time and provides suggestions based on what is happening in the market.",
    technologies: ['Next.js', 'TypeScript', 'Realtime Data', 'Charting', 'AI Analysis'],
    liveUrl: null,
    githubUrl: null,
    icon: Cpu,
    image: null,
    comingSoon: true,
    stats: { mode: 'Live', focus: 'Realtime', ai: 'Assistive' },
  },
  {
    title: 'NFT Marketplace',
    subtitle: 'Digital Collectibles',
    description:
      'A marketplace for digital collectibles with lazy minting, auctions, and social mechanics, built to make blockchain-native interactions feel more accessible and polished.',
    technologies: ['React', 'Solidity', 'IPFS', 'Web3.js', 'Chakra UI'],
    liveUrl: '#',
    githubUrl: '#',
    icon: Layers,
    image: null,
    stats: { volume: '$2M+', artists: '500+', nfts: '10K+' },
  },
]

function ProjectCaseStudy({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== '#')
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl !== '#')

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className='border-t border-card-border/80 pt-10 first:border-t-0 first:pt-0'
    >
      <div className='grid gap-6 lg:grid-cols-[170px_minmax(0,1fr)_320px] lg:gap-8'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-card-border bg-background-alt/70'>
              <project.icon className='h-5 w-5 text-primary' />
            </div>
            <div>
              <p className='text-[0.66rem] uppercase tracking-[0.24em] text-muted'>Case study</p>
              <p className='font-display text-3xl leading-none text-foreground'>{String(index + 1).padStart(2, '0')}</p>
            </div>
          </div>

          <div>
            <p className='text-[0.66rem] uppercase tracking-[0.24em] text-muted'>Project type</p>
            <p className='mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground'>{project.subtitle}</p>
          </div>

          <div className='rounded-2xl border border-card-border bg-background-alt/65 px-4 py-3'>
            <p className='text-[0.66rem] uppercase tracking-[0.22em] text-muted'>Status</p>
            <p className='mt-2 text-sm font-medium text-foreground'>{project.comingSoon ? 'In active development' : 'Live case study'}</p>
          </div>
        </div>

        <div>
          {project.comingSoon && (
            <div className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary'>
              <Sparkles className='h-3.5 w-3.5' />
              Coming soon
            </div>
          )}

          <h3 className='mt-4 font-display text-4xl leading-[0.95] tracking-[-0.04em] text-foreground md:text-5xl'>
            {project.title}
          </h3>
          <p className='mt-5 max-w-2xl text-base leading-relaxed text-foreground-soft md:text-lg'>{project.description}</p>

          <div className='mt-6 grid gap-3 sm:grid-cols-3'>
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className='rounded-2xl border border-card-border bg-background-alt/65 px-4 py-4'>
                <p className='font-display text-3xl leading-none text-foreground'>{value}</p>
                <p className='mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted'>{key}</p>
              </div>
            ))}
          </div>

          <div className='mt-6 flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <span key={tech} className='tech-tag'>
                {tech}
              </span>
            ))}
          </div>

          <div className='mt-8 flex flex-wrap gap-3'>
            {hasLiveUrl && (
              <motion.a
                href={project.liveUrl ?? undefined}
                className='inline-flex items-center gap-2 rounded-2xl border border-primary/30 bg-linear-to-r from-primary to-primary-light px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-primary/20'
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                View live
                <ArrowUpRight className='h-4 w-4' />
              </motion.a>
            )}

            {hasGithubUrl && (
              <motion.a
                href={project.githubUrl ?? undefined}
                className='inline-flex items-center gap-2 rounded-2xl border border-card-border bg-background/45 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground'
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className='h-4 w-4' />
                Source
              </motion.a>
            )}

            {!hasLiveUrl && !hasGithubUrl && (
              <span className='inline-flex items-center rounded-2xl border border-card-border bg-background/45 px-5 py-3 text-sm font-medium text-foreground-soft'>
                Private or in-progress build
              </span>
            )}
          </div>
        </div>

        <div className='rounded-3xl border border-frame-border bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.18)]'>
          <div className='flex items-center justify-between px-2 text-[0.66rem] uppercase tracking-[0.22em] text-muted'>
            <span>Preview</span>
            <span>{project.subtitle}</span>
          </div>

          <div className='relative mt-3 overflow-hidden rounded-[1.25rem] border border-white/10 bg-background-alt'>
            <div className='relative aspect-4/3'>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className='object-cover object-top'
                  sizes='(max-width: 1024px) 100vw, 320px'
                />
              ) : (
                <div className='flex h-full items-center justify-center bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20'>
                  <project.icon className='h-16 w-16 text-foreground/30' />
                </div>
              )}
            </div>
            <div className='absolute inset-0 bg-linear-to-t from-background via-background/5 to-transparent' />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id='projects' className='relative overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/8 blur-3xl' />
        <div className='absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-secondary/8 blur-3xl' />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
          <SectionHeading
            align='left'
            className='mb-0'
            title='Selected Projects'
            subtitle='A few projects that show how I use AI in real products while continuing to grow toward more AI-native engineering work.'
          />
          <p className='max-w-xl text-sm leading-relaxed text-foreground-soft md:justify-self-end md:text-base'>
            I&apos;m especially interested in products where AI is not just a feature on top, but part of how the product
            creates value for the user.
          </p>
        </div>

        <div className='mt-14 space-y-10'>
          {projects.map((project, index) => (
            <ProjectCaseStudy key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className='mt-12 rounded-2xl border border-card-border bg-background/35 px-5 py-4 text-sm text-foreground-soft'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          I&apos;m continuing to build more AI-assisted products and experiments as I move deeper into the agentic
          engineering direction.
        </motion.div>
      </div>
    </section>
  )
}
