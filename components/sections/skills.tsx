'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Code2, Blocks, Wrench, GraduationCap } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    title: 'Web3',
    icon: Blocks,
    skills: ['Web3.js', 'Ethers.js', 'wagmi', 'RainbowKit', 'Wallet Integration', 'Smart Contracts', 'DeFi', 'NFTs', 'IPFS'],
  },
  {
    title: 'Tools & Libraries',
    icon: Wrench,
    skills: ['Git', 'GitHub Actions', 'TanStack Query', 'Redux', 'Zustand', 'GraphQL', 'REST APIs', 'Jest', 'AI Workflows'],
  },
  {
    title: 'Currently Learning',
    icon: GraduationCap,
    skills: ['Python', 'PostgreSQL', 'Agentic Systems', 'Realtime Data Apps', 'Backend Foundations', 'AI/ML APIs'],
  },
]

const staggerItem = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          align='left'
          title='Capabilities & Tools'
          subtitle='My current stack, the AI-assisted workflows I use every day, and the areas I am actively expanding into.'
        />

        <div className='mt-4 border-l-2 border-primary/30 pl-5'>
          <p className='max-w-xl text-base leading-relaxed text-foreground-soft'>
            I still consider frontend engineering my strongest foundation, but I&apos;m intentionally broadening my range
            with AI-native workflows, Python, PostgreSQL, and the technical knowledge that will matter more in the AI era.
          </p>
        </div>

        <motion.div
          className='mt-14 grid gap-6 md:grid-cols-2'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              className='group rounded-xl border border-card-border p-6 transition-colors hover:border-primary/20'
            >
              <div className='flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                  <category.icon className='h-4 w-4' />
                </div>
                <h3 className='text-lg font-semibold text-foreground'>{category.title}</h3>
              </div>

              <div className='mt-5 flex flex-wrap gap-1.5'>
                {category.skills.map((skill) => (
                  <span key={skill} className='tech-tag'>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
