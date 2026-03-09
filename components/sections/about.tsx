'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Code2, Rocket, Brain } from 'lucide-react'

const strengths = [
  {
    icon: Code2,
    title: 'AI product building',
    description: 'I use AI to turn ideas into real product experiences, not just prototypes or one-off experiments.',
  },
  {
    icon: Rocket,
    title: 'Agentic engineer path',
    description: 'Learning how to leverage AI more deeply across research, implementation, and iteration.',
  },
  {
    icon: Brain,
    title: 'Continuous learning',
    description: 'Using AI to accelerate learning in Python, PostgreSQL, and skills for the AI-era industry.',
  },
]

const profileFacts = [
  { label: 'Base', value: 'Ho Chi Minh City' },
  { label: 'Experience', value: 'Since 2017' },
  { label: 'Direction', value: 'Agentic engineering' },
]

const staggerItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function About() {
  return (
    <section id='about' className='relative'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start'>
          <div>
            <SectionHeading
              align='left'
              className='mb-0'
              title='About'
              subtitle='A senior frontend developer using AI to build real products and move toward the path of an agentic engineer.'
            />

            <div className='mt-10 space-y-5 text-base leading-[1.75] text-foreground-soft md:text-lg'>
              <p>
                I&apos;m Daniel Nguyen, a senior frontend developer currently focused on leveraging AI more deeply in my
                work so I can grow toward the path of an agentic engineer.
              </p>
              <p>
                I like using AI to build real products. One product I completed uses AI to generate NFT images that
                users can mint on-chain. I&apos;m also starting work on a real-time stock chart app where AI analyzes live
                market data and gives users suggestions in real time.
              </p>
              <p>
                I also use AI to learn and expand my knowledge. Right now I&apos;m studying Python, PostgreSQL, and related
                areas while researching how to work with AI more efficiently and prepare myself for an AI-era industry.
              </p>
            </div>

            <div className='mt-10 border-l-2 border-primary/30 pl-5'>
              <p className='text-[0.65rem] uppercase tracking-[0.2em] text-muted'>Working direction</p>
              <p className='mt-3 text-base leading-relaxed text-foreground-soft'>
                My goal is to combine strong frontend fundamentals with AI-native workflows, so I can move beyond
                traditional frontend delivery and become the kind of engineer who can learn, build, and iterate faster
                with AI as a real working partner.
              </p>
            </div>
          </div>

          <motion.div
            className='space-y-4 lg:sticky lg:top-28'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            <motion.div variants={staggerItem} className='rounded-xl border border-card-border p-5'>
              <p className='text-[0.62rem] uppercase tracking-[0.18em] text-muted'>Profile snapshot</p>
              <p className='mt-2 text-lg font-medium text-foreground'>What defines my work</p>

              <div className='mt-5 grid gap-px overflow-hidden rounded-lg border border-card-border bg-card-border'>
                {profileFacts.map((fact) => (
                  <div key={fact.label} className='bg-background-alt px-4 py-3'>
                    <p className='text-[0.6rem] uppercase tracking-[0.16em] text-muted'>{fact.label}</p>
                    <p className='mt-1 text-sm font-medium text-foreground'>{fact.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className='rounded-xl border border-card-border p-5'>
              <p className='text-sm leading-relaxed text-foreground-soft'>
                Based in Vietnam, working remotely, and ready to collaborate on products that take AI seriously as part
                of the future of software.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className='mt-16 grid gap-4 md:grid-cols-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
        >
          {strengths.map((strength) => (
            <motion.div
              key={strength.title}
              variants={staggerItem}
              className='group rounded-xl border border-card-border p-6 transition-colors hover:border-primary/20'
            >
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                <strength.icon className='h-5 w-5' />
              </div>
              <h3 className='mt-4 text-lg font-semibold text-foreground'>{strength.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-foreground-soft'>{strength.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
