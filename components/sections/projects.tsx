'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { ExternalLink, Github, Sparkles, ArrowUpRight, Layers, Globe, Cpu } from 'lucide-react'
import { useRef, useState } from 'react'

const projects = [
  {
    title: 'Art Flow',
    subtitle: 'AI Art Generator',
    description:
      'ArtFlow — An AI-powered NFT creation platform where users describe their vision, and Google Gemini AI generates unique artwork infused with Feng Shui elements. Features NFT minting, elemental fusion mechanics, and a built-in marketplace',
    technologies: ['Next.js', 'TypeScript', 'Wagmi', 'Vercel AI SDK', 'Gemini', 'TailwindCSS', 'Prisma', 'Supabase'],
    liveUrl: 'https://nft-ai-gen-pearl.vercel.app/',
    githubUrl: '#',
    icon: Globe,
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    shadowColor: 'shadow-purple-500/20',
    stats: { users: '100+', transactions: '10k+', chains: '1' },
  },
  {
    title: 'AI Code Assistant',
    subtitle: 'Intelligent Development',
    description:
      'An AI-powered development tool that helps write, review, and optimize code with seamless IDE integration.',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind', 'Prisma'],
    liveUrl: null,
    githubUrl: null,
    icon: Cpu,
    comingSoon: true,
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    shadowColor: 'shadow-teal-500/20',
    stats: { accuracy: '95%', languages: '10+', speedup: '3x' },
  },
  {
    title: 'NFT Marketplace',
    subtitle: 'Digital Collectibles',
    description:
      'A sleek marketplace for trading digital collectibles with lazy minting, auctions, and social features.',
    technologies: ['React', 'Solidity', 'IPFS', 'Web3.js', 'Chakra UI'],
    liveUrl: '#',
    githubUrl: '#',
    icon: Layers,
    gradient: 'from-orange-500 via-pink-500 to-rose-500',
    shadowColor: 'shadow-pink-500/20',
    stats: { volume: '$2M+', artists: '500+', nfts: '10K+' },
  },
]

function FeaturedProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative group'
    >
      {/* Animated gradient border */}
      <div className='absolute -inset-[1px] rounded-3xl overflow-hidden'>
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ scale: 2 }}
        />
      </div>

      {/* Card content */}
      <div className='relative bg-background rounded-3xl p-8 md:p-10 overflow-hidden'>
        {/* Spotlight effect */}
        <motion.div
          className='pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(var(--primary-rgb, 99, 102, 241), 0.1), transparent 40%)`,
          }}
        />

        {/* Background gradient orb */}
        <div
          className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.gradient} opacity-5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className='relative z-10 grid lg:grid-cols-2 gap-8 items-center'>
          {/* Left side - Content */}
          <div>
            {/* Coming soon badge */}
            {project.comingSoon && (
              <motion.div
                className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-orange-500/20 text-accent text-sm font-medium mb-4'
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className='w-4 h-4' />
                Coming Soon
              </motion.div>
            )}

            {/* Icon */}
            <motion.div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 ${project.shadowColor} shadow-2xl`}
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <project.icon className='w-8 h-8 text-white' />
            </motion.div>

            {/* Title */}
            <p className='text-sm font-medium text-primary mb-2'>{project.subtitle}</p>
            <h3 className='text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-primary transition-all duration-300'>
              {project.title}
            </h3>

            {/* Description */}
            <p className='text-muted text-lg leading-relaxed mb-6'>{project.description}</p>

            {/* Technologies */}
            <div className='flex flex-wrap gap-2 mb-8'>
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className='tech-tag'
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Actions */}
            <div className='flex items-center gap-4'>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium hover:shadow-xl ${project.shadowColor} transition-shadow`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Live
                  <ArrowUpRight className='w-4 h-4' />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-foreground font-medium hover:border-primary'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className='w-4 h-4' />
                  Source
                </motion.a>
              )}
            </div>
          </div>

          {/* Right side - Preview/Stats */}
          <div className='relative'>
            {/* Floating preview window */}
            <motion.div
              className='relative aspect-video rounded-2xl overflow-hidden glass-card p-1'
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Window chrome */}
              <div className='absolute top-0 left-0 right-0 h-8 bg-card/80 backdrop-blur flex items-center gap-2 px-4 rounded-t-xl'>
                <div className='w-3 h-3 rounded-full bg-red-500/80' />
                <div className='w-3 h-3 rounded-full bg-yellow-500/80' />
                <div className='w-3 h-3 rounded-full bg-green-500/80' />
                <span className='ml-4 text-xs text-muted truncate'>
                  {project.title.toLowerCase().replace(/\s/g, '-')}.app
                </span>
              </div>

              {/* Preview content */}
              <div
                className={`mt-8 h-full rounded-xl bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center`}
              >
                <project.icon className='w-20 h-20 text-foreground/30' />
              </div>

              {/* Floating stats */}
              <div className='absolute bottom-4 left-4 right-4 flex justify-between'>
                {Object.entries(project.stats).map(([key, value], i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className='glass-card px-4 py-2 rounded-xl text-center'
                  >
                    <div className='text-lg font-bold text-foreground'>{value}</div>
                    <div className='text-xs text-muted capitalize'>{key}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className={`absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 blur-xl`}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 blur-xl`}
              animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id='projects' className='relative py-24 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl' />
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <SectionHeading title='Featured Projects' subtitle='Crafted with passion, built for impact' />

        {/* Projects grid */}
        <div className='space-y-12'>
          {projects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More projects hint */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card'
            whileHover={{ scale: 1.05 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className='w-5 h-5 text-primary' />
            </motion.div>
            <span className='text-muted'>More innovative projects in development</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
