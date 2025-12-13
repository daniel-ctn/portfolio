'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react'
import { useRef } from 'react'

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Web3 Platform',
    location: 'Remote',
    period: '2021 - Present',
    description:
      'Leading frontend development for a comprehensive Web3 ecosystem with multiple interconnected products.',
    highlights: [
      'Architected frontend for 5+ interconnected dApps',
      'Reduced bundle size by 40%',
      'Led a team of 4 developers',
    ],
    technologies: ['React', 'TypeScript', 'Web3.js', 'TailwindCSS', 'GraphQL'],
    current: true,
  },
  {
    title: 'Frontend Developer',
    company: 'Tech Startup',
    location: 'Ho Chi Minh City',
    period: '2018 - 2021',
    description: 'Developed and maintained multiple client-facing web applications with focus on performance.',
    highlights: ['Built 10+ production apps', 'Introduced component library', 'Mentored junior developers'],
    technologies: ['React', 'Vue.js', 'Redux', 'SCSS'],
    current: false,
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Digital Agency',
    location: 'Ho Chi Minh City',
    period: '2015 - 2018',
    description: 'Started professional journey building websites and web applications for various clients.',
    highlights: ['Delivered 20+ client projects', 'Built responsive design skills', 'Strong JS fundamentals'],
    technologies: ['JavaScript', 'jQuery', 'HTML5', 'CSS3'],
    current: false,
  },
]

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'center center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? -50 : 50, 0])

  return (
    <motion.div ref={cardRef} style={{ opacity, scale, x }} className='relative'>
      {/* Connection line */}
      {index < experiences.length - 1 && (
        <div className='absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block' />
      )}

      <div className='relative flex gap-6'>
        {/* Timeline dot */}
        <div className='hidden md:flex flex-col items-center'>
          <motion.div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
              exp.current ? 'bg-gradient-to-br from-primary to-primary-light' : 'glass-card'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Briefcase className={`w-6 h-6 ${exp.current ? 'text-white' : 'text-primary'}`} />
          </motion.div>
          {exp.current && (
            <motion.div
              className='absolute w-16 h-16 rounded-2xl bg-primary/30'
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>

        {/* Content */}
        <div className='flex-1 glass-card p-6 group hover:border-primary transition-colors'>
          {/* Header */}
          <div className='flex flex-wrap items-start justify-between gap-4 mb-4'>
            <div>
              <div className='flex items-center gap-2 mb-1'>
                <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
                  {exp.title}
                </h3>
                {exp.current && (
                  <span className='px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full'>
                    Current
                  </span>
                )}
              </div>
              <p className='text-primary font-medium'>{exp.company}</p>
            </div>
            <div className='flex flex-col items-end text-sm text-muted'>
              <span className='flex items-center gap-1'>
                <Calendar className='w-4 h-4' />
                {exp.period}
              </span>
              <span className='flex items-center gap-1'>
                <MapPin className='w-4 h-4' />
                {exp.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className='text-muted mb-4'>{exp.description}</p>

          {/* Highlights */}
          <ul className='space-y-2 mb-4'>
            {exp.highlights.map((highlight) => (
              <li key={highlight} className='flex items-center gap-2 text-sm text-muted'>
                <ArrowRight className='w-3 h-3 text-primary shrink-0' />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className='flex flex-wrap gap-2'>
            {exp.technologies.map((tech) => (
              <span key={tech} className='tech-tag'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id='experience' className='relative py-24'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading title='Experience' subtitle='My professional journey building exceptional web experiences' />

        <div className='space-y-12'>
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>

        {/* Years counter */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className='inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass-card'>
            <div className='text-5xl font-bold gradient-text'>9+</div>
            <div className='text-left'>
              <p className='text-foreground font-semibold'>Years of Experience</p>
              <p className='text-sm text-muted'>Building for the web</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
