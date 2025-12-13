'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/daniel-ctn', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/daniel-ctn', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:danielnguyen5201@gmail.com', label: 'Email' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20'>
      {/* Animated background elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          className='absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-[120px]'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div className='text-center' variants={containerVariants} initial='hidden' animate='visible'>
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8'
          >
            <Sparkles className='w-4 h-4 text-primary' />
            <span className='text-sm font-medium text-muted'>Available for new opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'
          >
            Hi, I&apos;m <span className='gradient-text'>Daniel Nguyen</span>
            <br />
            <span className='text-muted'>Senior Frontend Developer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className='text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8'>
            With nearly <span className='text-foreground font-semibold'>9 years of experience</span> crafting
            exceptional web experiences. Passionate about <span className='text-primary'>Web3</span>,{' '}
            <span className='text-secondary'>AI</span>, and building the future of the web.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className='flex flex-wrap justify-center gap-8 mb-12'>
            {[
              { value: '9+', label: 'Years Experience' },
              { value: 'Web3', label: 'Expertise' },
              { value: 'AI', label: 'Enthusiast' },
            ].map((stat) => (
              <div key={stat.label} className='text-center'>
                <div className='text-3xl md:text-4xl font-bold gradient-text'>{stat.value}</div>
                <div className='text-sm text-muted'>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'
          >
            <Button
              size='lg'
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className='flex items-center justify-center gap-4'>
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full glass-card text-muted hover:text-foreground hover:bg-card transition-all'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className='w-5 h-5' />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className='absolute bottom-8 left-1/2 -translate-x-1/2'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href='#about'
            className='flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors'
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className='text-xs font-medium'>Scroll Down</span>
            <ArrowDown className='w-4 h-4' />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
