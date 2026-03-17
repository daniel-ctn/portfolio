'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Sparkles } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

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
    comingSoon: false,
  },
  {
    title: 'Stock Intelligence',
    subtitle: 'Live Market Analysis with AI',
    description:
      'A product currently in development where users follow live stock charts while AI analyzes data in real time and provides actionable market suggestions.',
    technologies: ['Next.js', 'TypeScript', 'Realtime Data', 'Charting', 'AI Analysis'],
    liveUrl: null,
    githubUrl: null,
    image: null,
    stats: { mode: 'Live', focus: 'Realtime', ai: 'Assistive' },
    comingSoon: true,
  },
  {
    title: 'NFT Marketplace',
    subtitle: 'Digital Collectibles Platform',
    description:
      'A marketplace for digital collectibles with lazy minting, auctions, and social mechanics, built to make blockchain-native interactions feel accessible.',
    technologies: ['React', 'Solidity', 'IPFS', 'Web3.js', 'Chakra UI'],
    liveUrl: '#',
    githubUrl: '#',
    image: null,
    stats: { volume: '$2M+', artists: '500+', nfts: '10K+' },
    comingSoon: false,
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentProject, setCurrentProject] = useState(0)

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      gsap.set('.project-card:not(.project-card-0)', { autoAlpha: 0, y: 60 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${projects.length * 100}%`,
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const p = self.progress
            const idx = Math.min(Math.floor(p * projects.length), projects.length - 1)
            setCurrentProject(idx)
          },
        },
      })

      gsap.from('.projects-header', {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        opacity: 0,
        y: 40,
        duration: 1,
      })

      for (let i = 0; i < projects.length - 1; i++) {
        tl.to({}, { duration: 0.4 })
        tl.to(`.project-card-${i}`, { autoAlpha: 0, y: -60, filter: 'blur(6px)', duration: 0.3 })
        tl.fromTo(
          `.project-card-${i + 1}`,
          { autoAlpha: 0, y: 60, filter: 'blur(6px)' },
          { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.3 }
        )
      }
      tl.to({}, { duration: 0.4 })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id='projects' className='motion-section relative h-screen'>
      <div className='section-inner relative z-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='projects-header mb-10 flex items-center justify-between'>
            <div>
              <div className='section-label'>Selected Work</div>
              <p className='max-w-md text-sm leading-relaxed text-foreground-soft'>
                Products where AI is part of how the product creates value.
              </p>
            </div>
            <div className='hidden items-center gap-3 font-mono text-sm text-muted sm:flex'>
              <motion.span
                key={currentProject}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className='text-2xl font-medium text-foreground'
              >
                {String(currentProject + 1).padStart(2, '0')}
              </motion.span>
              <span className='h-px w-4 bg-card-border' />
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className='relative min-h-[60vh]'>
            {projects.map((project, i) => {
              const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== '#')
              const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl !== '#')

              return (
                <div
                  key={project.title}
                  className={`project-card project-card-${i} ${i === 0 ? '' : 'absolute inset-0'}`}
                  style={i !== 0 ? { top: 0 } : undefined}
                >
                  <div className='grid items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-14'>
                    <div>
                      <div className='flex items-center gap-3'>
                        <span className='font-mono text-xs text-muted'>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className='h-px flex-1 bg-card-border' />
                        {project.comingSoon && (
                          <span className='inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary'>
                            <Sparkles className='h-3 w-3' />
                            In development
                          </span>
                        )}
                      </div>

                      <h3 className='mt-5 font-display text-5xl tracking-[-0.03em] text-foreground lg:text-6xl'>
                        {project.title}
                      </h3>
                      <p className='mt-1.5 text-xs uppercase tracking-[0.14em] text-muted'>
                        {project.subtitle}
                      </p>

                      <p className='mt-5 max-w-lg text-base leading-relaxed text-foreground-soft'>
                        {project.description}
                      </p>

                      <div className='mt-6 grid grid-cols-3 gap-4'>
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className='border-l border-card-border pl-3'>
                            <p className='font-mono text-xl text-foreground'>{value}</p>
                            <p className='mt-0.5 text-[0.62rem] uppercase tracking-[0.14em] text-muted'>{key}</p>
                          </div>
                        ))}
                      </div>

                      <div className='mt-5 flex flex-wrap gap-1.5'>
                        {project.technologies.map((tech) => (
                          <span key={tech} className='tech-tag'>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className='mt-7 flex flex-wrap gap-3'>
                        {hasLiveUrl && (
                          <a
                            href={project.liveUrl ?? undefined}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold uppercase tracking-widest text-background transition-transform hover:scale-[1.02] active:scale-[0.98]'
                          >
                            View live
                            <ArrowUpRight className='h-3.5 w-3.5' />
                          </a>
                        )}
                        {hasGithubUrl && (
                          <a
                            href={project.githubUrl ?? undefined}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 rounded-lg border border-card-border px-4 py-2.5 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:border-primary/30'
                          >
                            <Github className='h-3.5 w-3.5' />
                            Source
                          </a>
                        )}
                        {!hasLiveUrl && !hasGithubUrl && (
                          <span className='inline-flex items-center rounded-lg border border-card-border px-4 py-2.5 text-sm text-muted'>
                            Private / in-progress
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='hidden overflow-hidden rounded-xl border border-card-border bg-background-alt lg:block'>
                      <div className='flex items-center justify-between border-b border-card-border px-4 py-2.5'>
                        <div className='flex gap-1.5'>
                          <div className='h-2.5 w-2.5 rounded-full bg-card-border' />
                          <div className='h-2.5 w-2.5 rounded-full bg-card-border' />
                          <div className='h-2.5 w-2.5 rounded-full bg-card-border' />
                        </div>
                        <span className='text-[0.58rem] uppercase tracking-[0.14em] text-muted'>
                          {project.subtitle}
                        </span>
                      </div>
                      <div className='relative aspect-4/3'>
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            className='object-cover object-top'
                            sizes='380px'
                          />
                        ) : (
                          <div className='flex h-full items-center justify-center bg-linear-to-br from-primary/5 via-accent/5 to-secondary/5'>
                            {project.comingSoon ? (
                              <div className='text-center'>
                                <div className='relative'>
                                  <div className='absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl' />
                                  <Sparkles className='relative h-10 w-10 text-primary/40' />
                                </div>
                                <p className='mt-3 text-sm text-muted'>Coming soon</p>
                              </div>
                            ) : (
                              <span className='font-display text-7xl text-foreground/5'>
                                {project.title[0]}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
