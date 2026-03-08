'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Blocks, Code2, GraduationCap, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'primary',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    title: 'Web3',
    icon: Blocks,
    color: 'secondary',
    skills: [
      'Web3.js',
      'Ethers.js',
      'wagmi',
      'RainbowKit',
      'Wallet Integration',
      'Smart Contracts',
      'DeFi',
      'NFTs',
      'IPFS',
    ],
  },
  {
    title: 'Tools & Libraries',
    icon: Wrench,
    color: 'accent',
    skills: ['Git', 'GitHub Actions', 'TanStack Query', 'Redux', 'Zustand', 'GraphQL', 'REST APIs', 'Jest', 'AI Workflows'],
  },
  {
    title: 'Currently Learning',
    icon: GraduationCap,
    color: 'muted',
    skills: ['Python', 'PostgreSQL', 'Agentic Systems', 'Realtime Data Apps', 'Backend Foundations', 'AI/ML APIs'],
  },
]

const coreStack = ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'GraphQL', 'Web3', 'AI Workflows']

export function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start'>
          <div>
            <SectionHeading
              align='left'
              className='mb-0'
              title='Capabilities & Tools'
              subtitle='My current stack, the AI-assisted workflows I use every day, and the areas I am actively expanding into.'
            />

            <p className='mt-8 max-w-xl text-base leading-relaxed text-foreground-soft md:text-lg'>
              I still consider frontend engineering my strongest foundation, but I&apos;m intentionally broadening my range
              with AI-native workflows, Python, PostgreSQL, and the technical knowledge that will matter more in the
              AI era.
            </p>

            <div className='mt-8 flex flex-wrap gap-2'>
              {coreStack.map((skill) => (
                <span key={skill} className='tech-tag'>
                  {skill}
                </span>
              ))}
            </div>

            <div className='mt-8 rounded-2xl border border-card-border bg-background/38 px-5 py-5'>
              <p className='text-[0.68rem] uppercase tracking-[0.22em] text-muted'>How I work with tools</p>
              <p className='mt-3 text-sm leading-relaxed text-foreground-soft md:text-base'>
                I use AI not only to ship faster, but also to learn faster. A big part of my current workflow is
                figuring out how to use AI more efficiently for coding, research, and knowledge expansion.
              </p>
            </div>
          </div>

          <div className='grid gap-4 md:grid-cols-2'>
            {skillCategories.map((category, index) => {
              const toneClasses =
                category.color === 'primary'
                  ? 'border-primary/20 bg-primary/10 text-primary'
                  : category.color === 'secondary'
                    ? 'border-secondary/20 bg-secondary/10 text-secondary'
                    : category.color === 'accent'
                      ? 'border-accent/20 bg-accent/10 text-accent'
                      : 'border-card-border bg-background-alt/70 text-foreground'

              return (
                <motion.div
                  key={category.title}
                  className='rounded-2xl border border-card-border bg-background/38 px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.14)]'
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className='flex items-center gap-4'>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${toneClasses}`}>
                      <category.icon className='h-5 w-5' />
                    </div>
                    <div>
                      <p className='text-[0.66rem] uppercase tracking-[0.22em] text-muted'>Category</p>
                      <h3 className='text-xl font-semibold text-foreground'>{category.title}</h3>
                    </div>
                  </div>

                  <div className='mt-5 flex flex-wrap gap-2'>
                    {category.skills.map((skill) => (
                      <span key={skill} className='tech-tag'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
