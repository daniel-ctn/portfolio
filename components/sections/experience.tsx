'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { ArrowRight } from 'lucide-react'

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

const staggerItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Experience() {
  return (
    <section id='experience' className='relative'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          align='left'
          title='Experience'
          subtitle='From early client delivery to leading complex platform work across product teams and Web3.'
        />

        <motion.div
          className='relative'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.12 }}
        >
          <div className='absolute left-0 top-0 hidden h-full w-px bg-linear-to-b from-primary/40 via-primary/10 to-transparent md:block' />

          {experiences.map((exp) => (
            <motion.article key={exp.company} variants={staggerItem} className='relative pb-12 last:pb-0 md:pl-10'>
              <div className='absolute -left-[5px] top-1 hidden h-[10px] w-[10px] rounded-full border-2 border-primary bg-background md:block' />

              <div className='flex flex-wrap items-baseline gap-x-4 gap-y-1'>
                <h3 className='font-display text-3xl tracking-[-0.02em] text-foreground md:text-4xl'>{exp.title}</h3>
                {exp.current && (
                  <span className='rounded-md bg-primary/10 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-primary'>
                    Current
                  </span>
                )}
              </div>

              <div className='mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted'>
                <span className='font-medium text-primary'>{exp.company}</span>
                <span className='hidden h-1 w-1 rounded-full bg-muted sm:block' />
                <span>{exp.location}</span>
                <span className='hidden h-1 w-1 rounded-full bg-muted sm:block' />
                <span className='font-mono text-[0.8rem]'>{exp.period}</span>
              </div>

              <p className='mt-4 max-w-2xl text-base leading-relaxed text-foreground-soft'>{exp.description}</p>

              <div className='mt-4 space-y-1.5'>
                {exp.highlights.map((highlight) => (
                  <div key={highlight} className='flex items-start gap-2.5 text-sm text-foreground-soft'>
                    <ArrowRight className='mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60' />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className='mt-5 flex flex-wrap gap-1.5'>
                {exp.technologies.map((tech) => (
                  <span key={tech} className='tech-tag'>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
