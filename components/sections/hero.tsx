'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Zap } from 'lucide-react'
import { WordRotate } from '@/components/ui/text-animations'
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

        <FloatingElement delay={1} className='absolute bottom-1/3 left-[15%]'>
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
        <motion.div
          className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Left side - Text content */}
          <div className='flex-1 text-center lg:text-left'>
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <MagneticButton className='px-4 py-2 rounded-full glass-card mb-8 cursor-default' strength={0.2}>
                <Sparkles className='w-4 h-4 text-primary mr-2' />
                <span className='text-sm font-medium text-muted'>Available for new opportunities</span>
              </MagneticButton>
            </motion.div>

            {/* Main heading with unique layout */}
            <motion.div variants={itemVariants} className='mb-6'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none'>
                <span className='block text-muted text-xl sm:text-2xl md:text-3xl font-normal mb-4'>Hi there, I'm</span>
                <span className='gradient-text'>Daniel Nguyen</span>
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div
              variants={itemVariants}
              className='text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-8 h-10'
            >
              <span className='text-muted'>A </span>
              <WordRotate words={roles} className='text-primary' />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className='text-base md:text-lg text-muted max-w-xl mb-10 leading-relaxed'
            >
              Crafting exceptional digital experiences for{' '}
              <span className='text-foreground font-semibold'>9+ years</span>. Specialized in building{' '}
              <span className='text-primary'>Web3 platforms</span> and exploring{' '}
              <span className='text-secondary'>AI-powered</span> applications.
            </motion.p>

            {/* CTA Buttons with magnetic effect */}
            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8'
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
            <motion.div variants={itemVariants} className='flex items-center justify-center lg:justify-start gap-4'>
              <span className='text-sm text-muted mr-2'>Find me on</span>
              {socialLinks.map((social) => (
                <MagneticButton
                  key={social.label}
                  href={social.href}
                  className='p-3 rounded-full glass-card text-muted hover:text-foreground hover:bg-card'
                >
                  <social.icon className='w-5 h-5' />
                </MagneticButton>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <motion.div variants={itemVariants} className='relative flex-shrink-0'>
            {/* Decorative ring */}
            <motion.div
              className='absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl'
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Animated border */}
            <motion.div
              className='absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary'
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Image container */}
            <motion.div
              className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image src='/daniel-chibi.jpg' alt='Daniel Nguyen' fill className='object-cover' priority />
            </motion.div>

            {/* Floating badges around image */}
            <motion.div
              className='absolute -top-2 -right-2 px-3 py-1.5 rounded-full glass-card text-sm font-medium'
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className='text-primary'>9+ Years</span>
            </motion.div>

            <motion.div
              className='absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full glass-card text-sm font-medium'
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span className='text-secondary'>Web3 Expert</span>
            </motion.div>

            <motion.div
              className='absolute top-1/2 -right-8 px-3 py-1.5 rounded-full glass-card text-sm font-medium'
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className='text-accent'>AI Lover</span>
            </motion.div>
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
