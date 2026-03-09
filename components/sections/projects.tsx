'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { ArrowUpRight, Github, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const projects = [
  {
    title: 'Art Flow',
    subtitle: 'AI-Powered NFT Product',
    description:
      'A complete product where AI generates NFT artwork from user input, then lets users mint those images on-chain inside one connected experience.',
    technologies: ['Next.js', 'TypeScript', 'Wagmi', 'Vercel AI SDK', 'Gemini', 'TailwindCSS', 'Prisma', 'Supabase'],
    liveUrl: 'https://nft-ai-gen-pearl.vercel.app/',
    githubUrl: '#',
    image: '/projects/art-flow-2.png',
    stats: { users: '100+', transactions: '10k+', chains: '1' },
  },
  {
    title: 'Real-Time Stock Intelligence',
    subtitle: 'Live Market Analysis with AI',
    description:
      'A product currently in development where users follow live stock charts while AI analyzes data in real time and provides actionable market suggestions.',
    technologies: ['Next.js', 'TypeScript', 'Realtime Data', 'Charting', 'AI Analysis'],
    liveUrl: null,
    githubUrl: null,
    image: null,
    comingSoon: true,
    stats: { mode: 'Live', focus: 'Realtime', ai: 'Assistive' },
  },
  {
    title: 'NFT Marketplace',
    subtitle: 'Digital Collectibles Platform',
    description:
      'A marketplace for digital collectibles with lazy minting, auctions, and social mechanics, built to make blockchain-native interactions feel accessible and polished.',
    technologies: ['React', 'Solidity', 'IPFS', 'Web3.js', 'Chakra UI'],
    liveUrl: '#',
    githubUrl: '#',
    image: null,
    stats: { volume: '$2M+', artists: '500+', nfts: '10K+' },
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.6], [60, 0])

  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== '#')
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl !== '#')
  const isComingSoon = 'comingSoon' in project && project.comingSoon

  return (
    <motion.article ref={ref} style={{ opacity, y }} className='py-12 first:pt-0 last:pb-0'>
      <div className='grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-12'>
        <div>
          <div className='flex items-center gap-3'>
            <span className='font-mono text-sm text-muted'>{String(index + 1).padStart(2, '0')}</span>
            <span className='h-px flex-1 bg-card-border' />
            {isComingSoon && (
              <span className='inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary'>
                <Sparkles className='h-3 w-3' />
                In development
              </span>
            )}
          </div>

          <h3 className='mt-5 font-display text-4xl tracking-[-0.02em] text-foreground md:text-5xl'>
            {project.title}
          </h3>
          <p className='mt-1 text-sm uppercase tracking-[0.12em] text-muted'>{project.subtitle}</p>

          <p className='mt-5 max-w-xl text-base leading-relaxed text-foreground-soft'>{project.description}</p>

          <div className='mt-6 grid grid-cols-3 gap-4'>
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className='border-l border-card-border pl-3'>
                <p className='font-mono text-xl text-foreground'>{value}</p>
                <p className='mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-muted'>{key}</p>
              </div>
            ))}
          </div>

          <div className='mt-6 flex flex-wrap gap-1.5'>
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
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold uppercase tracking-widest text-background'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View live
                <ArrowUpRight className='h-3.5 w-3.5' />
              </motion.a>
            )}

            {hasGithubUrl && (
              <motion.a
                href={project.githubUrl ?? undefined}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border border-card-border px-4 py-2.5 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:border-primary/30'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className='h-3.5 w-3.5' />
                Source
              </motion.a>
            )}

            {!hasLiveUrl && !hasGithubUrl && (
              <span className='inline-flex items-center rounded-lg border border-card-border px-4 py-2.5 text-sm text-muted'>
                Private / in-progress
              </span>
            )}
          </div>
        </div>

        <div className='overflow-hidden rounded-xl border border-card-border bg-background-alt'>
          <div className='flex items-center justify-between border-b border-card-border px-4 py-2.5'>
            <div className='flex gap-1.5'>
              <div className='h-2.5 w-2.5 rounded-full bg-card-border' />
              <div className='h-2.5 w-2.5 rounded-full bg-card-border' />
              <div className='h-2.5 w-2.5 rounded-full bg-card-border' />
            </div>
            <span className='text-[0.6rem] uppercase tracking-[0.14em] text-muted'>{project.subtitle}</span>
          </div>

          <div className='relative aspect-4/3'>
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className='object-cover object-top'
                sizes='(max-width: 1024px) 100vw, 380px'
              />
            ) : (
              <div className='flex h-full items-center justify-center bg-linear-to-br from-primary/5 via-accent/5 to-secondary/5'>
                {isComingSoon ? (
                  <div className='text-center'>
                    <div className='relative'>
                      <div className='absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl' />
                      <Sparkles className='relative h-10 w-10 text-primary/40' />
                    </div>
                    <p className='mt-3 text-sm text-muted'>Coming soon</p>
                  </div>
                ) : (
                  <span className='font-display text-6xl text-foreground/5'>{project.title[0]}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id='projects' className='relative overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          align='left'
          title='Selected Projects'
          subtitle='Products where AI is not just a feature on top, but part of how the product creates value.'
        />

        <div className='divide-y divide-card-border'>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
