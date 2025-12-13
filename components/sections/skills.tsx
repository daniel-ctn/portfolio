'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { Code2, Blocks, Wrench, GraduationCap } from 'lucide-react'

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
    skills: ['Git', 'GitHub Actions', 'TanStack Query', 'Redux', 'Zustand', 'GraphQL', 'REST APIs', 'Jest', 'Cypress'],
  },
  {
    title: 'Currently Learning',
    icon: GraduationCap,
    color: 'muted',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'AI/ML APIs', 'Python'],
  },
]

// All skills for marquee
const allSkills = [
  'React',
  'Next.js',
  'TypeScript',
  'Web3.js',
  'Ethers.js',
  'TailwindCSS',
  'Framer Motion',
  'GraphQL',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Vue.js',
  'Redux',
  'Jest',
  'Cypress',
  'Git',
  'Figma',
]

function Marquee({ children, direction = 1 }: { children: React.ReactNode; direction?: number }) {
  return (
    <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
      <motion.div
        className='flex gap-4 pr-4'
        animate={{ x: direction > 0 ? [0, -1920] : [-1920, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export function Skills() {
  return (
    <section id='skills' className='relative py-24 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading title='Skills & Expertise' subtitle='Technologies I work with daily and areas I explore' />

        {/* Skill Marquee */}
        <div className='mb-16 space-y-4'>
          <Marquee direction={1}>
            {allSkills.map((skill) => (
              <div
                key={skill}
                className='px-6 py-3 rounded-full glass-card text-foreground font-medium whitespace-nowrap hover:border-primary transition-colors'
              >
                {skill}
              </div>
            ))}
          </Marquee>
          <Marquee direction={-1}>
            {allSkills.reverse().map((skill) => (
              <div
                key={skill}
                className='px-6 py-3 rounded-full glass-card text-foreground font-medium whitespace-nowrap hover:border-primary transition-colors'
              >
                {skill}
              </div>
            ))}
          </Marquee>
        </div>

        {/* Skill Categories */}
        <motion.div
          className='grid md:grid-cols-2 gap-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <Card variant='gradient' className='h-full group'>
                <div className='flex items-center gap-4 mb-6'>
                  <motion.div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      category.color === 'primary'
                        ? 'bg-primary/20'
                        : category.color === 'secondary'
                          ? 'bg-secondary/20'
                          : category.color === 'accent'
                            ? 'bg-accent/20'
                            : 'bg-muted/20'
                    }`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <category.icon
                      className={`w-6 h-6 ${
                        category.color === 'primary'
                          ? 'text-primary'
                          : category.color === 'secondary'
                            ? 'text-secondary'
                            : category.color === 'accent'
                              ? 'text-accent'
                              : 'text-muted'
                      }`}
                    />
                  </motion.div>
                  <h3
                    className={`text-xl font-bold ${
                      category.color === 'primary'
                        ? 'text-primary'
                        : category.color === 'secondary'
                          ? 'text-secondary'
                          : category.color === 'accent'
                            ? 'text-accent'
                            : 'text-muted'
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className='tech-tag'
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
