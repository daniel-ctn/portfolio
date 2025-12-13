'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Zap } from 'lucide-react'
import { TypingAnimation, WordRotate } from '@/components/ui/text-animations'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { FloatingElement, GlowingOrb } from '@/components/ui/parallax'

const socialLinks = [
  { icon: Github, href: 'https://github.com/daniel-ctn', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/daniel-ctn', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:danielnguyen5201@gmail.com', label: 'Email' },
]

const roles = ['Frontend Developer', 'Web3 Builder', 'AI Enthusiast', 'Problem Solver']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20'>
      {/* Animated background elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <GlowingOrb color='var(--primary)' size='400px' className='top-1/4 left-1/4 opacity-20' blur='120px' />
        <GlowingOrb
          color='var(--primary-light)'
          size='500px'
          className='bottom-1/4 right-1/4 opacity-15'
          blur='150px'
        />
        <GlowingOrb color='var(--secondary)' size='300px' className='top-1/2 right-1/3 opacity-10' blur='100px' />

        {/* Floating decorative elements */}
        <FloatingElement delay={0} className='absolute top-1/4 right-1/4'>
          <div className='w-20 h-20 rounded-2xl glass-card flex items-center justify-center rotate-12'>
            <Code2 className='w-8 h-8 text-primary' />
          </div>
        </FloatingElement>

        <FloatingElement delay={1} className='absolute bottom-1/3 left-1/5'>
          <div className='w-16 h-16 rounded-2xl glass-card flex items-center justify-center -rotate-12'>
            <Zap className='w-6 h-6 text-secondary' />
          </div>
        </FloatingElement>

        {/* Grid pattern overlay */}
        <div
          className='absolute inset-0 opacity-[0.02]'
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div className='text-center' variants={containerVariants} initial='hidden' animate='visible'>
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <MagneticButton className='px-4 py-2 rounded-full glass-card mb-8 cursor-default' strength={0.2}>
              <Sparkles className='w-4 h-4 text-primary mr-2' />
              <span className='text-sm font-medium text-muted'>Available for new opportunities</span>
            </MagneticButton>
          </motion.div>

          {/* Main heading with unique layout */}
          <motion.div variants={itemVariants} className='mb-6'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none'>
              <span className='block text-muted text-2xl sm:text-3xl md:text-4xl font-normal mb-4'>Hi there, I'm</span>
              <span className='gradient-text relative'>
                Daniel Nguyen
                <motion.span
                  className='absolute -right-4 -top-4 text-4xl'
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👋
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Animated role */}
          <motion.div
            variants={itemVariants}
            className='text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-8 h-12'
          >
            <span className='text-muted'>A </span>
            <WordRotate words={roles} className='text-primary' />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className='text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed'
          >
            Crafting exceptional digital experiences for{' '}
            <span className='text-foreground font-semibold relative'>
              9+ years
              <svg
                className='absolute -bottom-1 left-0 w-full'
                viewBox='0 0 100 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.path
                  d='M0 4C20 4 20 1 40 1C60 1 60 7 80 7C100 7 100 4 100 4'
                  stroke='var(--primary)'
                  strokeWidth='2'
                  strokeLinecap='round'
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
              </svg>
            </span>
            . Specialized in building <span className='text-primary'>Web3 platforms</span> and exploring the frontier of{' '}
            <span className='text-secondary'>AI-powered</span> applications.
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-12'
          >
            <MagneticButton
              href='#projects'
              className='group px-8 py-4 text-lg bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-xl hover:shadow-primary/30'
            >
              <span>View My Work</span>
              <motion.span
                className='ml-2 inline-block'
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </MagneticButton>

            <MagneticButton
              href='#contact'
              className='px-8 py-4 text-lg border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary'
            >
              Let's Talk
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className='flex items-center justify-center gap-4'>
            <span className='text-sm text-muted mr-2'>Find me on</span>
            {socialLinks.map((social, index) => (
              <MagneticButton
                key={social.label}
                href={social.href}
                className='p-3 rounded-full glass-card text-muted hover:text-foreground hover:bg-card'
              >
                <social.icon className='w-5 h-5' />
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className='absolute bottom-8 left-1/2 -translate-x-1/2'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.a
            href='#about'
            className='flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors group'
          >
            <span className='text-xs font-medium'>Scroll to explore</span>
            <motion.div
              className='w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1'
              animate={{ borderColor: ['var(--muted)', 'var(--primary)', 'var(--muted)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className='w-1.5 h-3 bg-primary rounded-full'
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
