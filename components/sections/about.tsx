'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Brain, Calendar, Code2, MapPin, Rocket, Sparkles } from 'lucide-react'

const strengths = [
  {
    icon: Code2,
    title: 'AI product building',
    description: 'I use AI to help turn ideas into real product experiences, not just prototypes or one-off experiments.',
  },
  {
    icon: Rocket,
    title: 'Agentic engineer path',
    description: 'My current direction is learning how to leverage AI more deeply across research, implementation, and iteration.',
  },
  {
    icon: Brain,
    title: 'Continuous learning',
    description: 'I use AI to accelerate my learning in Python, PostgreSQL, and the skills needed for the AI-era industry.',
  },
]

const profileFacts = [
  { label: 'Base', value: 'Ho Chi Minh City' },
  { label: 'Experience', value: 'Since 2017' },
  { label: 'Direction', value: 'Agentic engineering' },
]

export function About() {
  return (
    <section id='about' className='relative'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
          <div>
            <SectionHeading
              align='left'
              className='mb-0'
              title='About'
              subtitle='A senior frontend developer using AI to build real products, learn faster, and move toward the path of an agentic engineer.'
            />

            <div className='mt-8 space-y-5 text-base leading-relaxed text-foreground-soft md:text-lg'>
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

            <div className='mt-8 rounded-2xl border border-card-border bg-background/35 px-5 py-5'>
              <p className='text-[0.68rem] uppercase tracking-[0.24em] text-muted'>Working direction</p>
              <p className='mt-3 max-w-xl text-sm leading-relaxed text-foreground-soft md:text-base'>
                My goal is to combine strong frontend fundamentals with AI-native workflows, so I can move beyond
                traditional frontend delivery and become the kind of engineer who can learn, build, and iterate faster
                with AI as a real working partner.
              </p>
            </div>
          </div>

          <motion.div
            className='rounded-3xl border border-frame-border bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.2)]'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className='flex items-center gap-3'>
              <div className='flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10'>
                <Sparkles className='h-5 w-5 text-primary' />
              </div>
              <div>
                <p className='text-[0.66rem] uppercase tracking-[0.22em] text-muted'>Profile snapshot</p>
                <p className='text-lg font-semibold text-foreground'>What defines my work</p>
              </div>
            </div>

            <div className='mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1'>
              {profileFacts.map((fact) => (
                <div key={fact.label} className='rounded-2xl border border-card-border bg-background-alt/70 px-4 py-4'>
                  <p className='text-[0.66rem] uppercase tracking-[0.22em] text-muted'>{fact.label}</p>
                  <p className='mt-2 text-sm font-medium text-foreground'>{fact.value}</p>
                </div>
              ))}
            </div>

            <div className='mt-4 rounded-2xl border border-card-border bg-background-alt/70 px-4 py-4'>
              <div className='flex items-center gap-3'>
                <MapPin className='h-5 w-5 text-secondary' />
                <Calendar className='h-5 w-5 text-primary' />
              </div>
              <p className='mt-3 text-sm leading-relaxed text-foreground-soft'>
                Based in Vietnam, working remotely, and ready to collaborate on products that take AI seriously as part
                of the future of software.
              </p>
            </div>
          </motion.div>
        </div>

        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              className='rounded-2xl border border-card-border bg-background/38 px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.14)]'
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-card-border bg-background-alt/70'>
                <strength.icon className='h-5 w-5 text-foreground' />
              </div>
              <p className='mt-5 text-[0.68rem] uppercase tracking-[0.22em] text-muted'>Strength</p>
              <h3 className='mt-2 text-xl font-semibold text-foreground'>{strength.title}</h3>
              <p className='mt-3 text-sm leading-relaxed text-foreground-soft'>{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
