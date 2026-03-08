'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { ArrowRight, Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Blockpixels',
    location: 'Remote',
    period: '2022 - Present',
    description:
      'Leading frontend development for a comprehensive Web3 ecosystem with multiple interconnected products.',
    highlights: [
      'Architected frontend for 5+ interconnected dApps',
      'Improved code quality',
      'Led a team of 4 developers',
    ],
    technologies: ['React', 'Nextjs', 'TypeScript', 'Viem', 'TailwindCSS', 'GraphQL'],
    current: true,
  },
  {
    title: 'Frontend Developer',
    company: '2359 Media',
    location: 'Ho Chi Minh City',
    period: '2020 - 2021',
    description: 'Developed and maintained multiple client-facing web applications with focus on performance.',
    highlights: ['Built 2+ production apps', 'Introduced component library', 'Mentored junior developers'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux'],
    current: false,
  },
  {
    title: 'Junior Frontend Developer',
    company: 'FPT Software',
    location: 'Ho Chi Minh City',
    period: '2017 - 2019',
    description: 'Started professional journey building websites and web applications for various clients.',
    highlights: ['Delivered 10+ client projects', 'Built responsive design skills', 'Strong JS fundamentals'],
    technologies: ['JavaScript', 'React', 'HTML5', 'CSS3'],
    current: false,
  },
]

export function Experience() {
  return (
    <section id='experience' className='relative'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
          <div>
            <SectionHeading
              align='left'
              className='mb-0'
              title='Experience'
              subtitle='A track record of building and refining frontend experiences across product teams, clients, and Web3 platforms.'
            />

            <div className='mt-8 rounded-2xl border border-card-border bg-background/38 px-5 py-5'>
              <p className='text-[0.68rem] uppercase tracking-[0.22em] text-muted'>Career snapshot</p>
              <p className='mt-3 font-display text-5xl leading-none text-foreground'>9+</p>
              <p className='mt-3 text-sm leading-relaxed text-foreground-soft'>
                Years of professional frontend experience, from early client delivery to leading complex platform work.
              </p>
            </div>
          </div>

          <div className='space-y-4'>
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className='rounded-3xl border border-card-border bg-background/40 px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.14)] md:px-6 md:py-6'
              >
                <div className='grid gap-5 lg:grid-cols-[190px_minmax(0,1fr)]'>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                      <div className='flex h-11 w-11 items-center justify-center rounded-2xl border border-card-border bg-background-alt/70'>
                        <Briefcase className='h-5 w-5 text-primary' />
                      </div>
                      {exp.current && (
                        <span className='rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-primary'>
                          Current
                        </span>
                      )}
                    </div>

                    <div>
                      <p className='text-[0.66rem] uppercase tracking-[0.22em] text-muted'>Period</p>
                      <p className='mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground'>{exp.period}</p>
                    </div>

                    <div className='space-y-2 text-sm text-foreground-soft'>
                      <p className='flex items-center gap-2'>
                        <Calendar className='h-4 w-4 text-muted' />
                        {exp.period}
                      </p>
                      <p className='flex items-center gap-2'>
                        <MapPin className='h-4 w-4 text-muted' />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className='text-sm font-semibold uppercase tracking-[0.16em] text-primary'>{exp.company}</p>
                    <h3 className='mt-2 font-display text-4xl leading-[0.95] tracking-[-0.03em] text-foreground'>
                      {exp.title}
                    </h3>
                    <p className='mt-4 text-base leading-relaxed text-foreground-soft'>{exp.description}</p>

                    <div className='mt-5 grid gap-2'>
                      {exp.highlights.map((highlight) => (
                        <div key={highlight} className='flex items-start gap-3 text-sm text-foreground-soft'>
                          <ArrowRight className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className='mt-6 flex flex-wrap gap-2'>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className='tech-tag'>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
