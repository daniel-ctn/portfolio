'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Code2, Rocket, Brain, Heart, MapPin, Calendar, Coffee, Zap } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function About() {
  return (
    <section id='about' className='relative py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading title='About Me' subtitle='A glimpse into who I am and what drives me' />

        {/* Bento Grid Layout */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Main intro - spans 2 cols and 2 rows */}
          <motion.div
            variants={itemVariants}
            className='md:col-span-2 md:row-span-2 gradient-border p-6 flex flex-col justify-between group hover:scale-[1.02] transition-transform'
          >
            <div>
              <h3 className='text-2xl font-bold mb-4 gradient-text'>Hello there! 👋</h3>
              <p className='text-muted leading-relaxed'>
                I'm <span className='text-foreground font-semibold'>Daniel Nguyen</span>, a Senior Frontend Developer
                with a passion for crafting exceptional digital experiences. With nearly{' '}
                <span className='text-primary font-semibold'>9 years</span> of experience, I've had the privilege of
                working on diverse projects that have shaped my expertise.
              </p>
              <p className='text-muted leading-relaxed mt-4'>
                In the last 3 years, I've been deeply immersed in the{' '}
                <span className='text-primary'>Web3 ecosystem</span>, building platforms that connect multiple products
                into cohesive experiences.
              </p>
            </div>
            <div className='flex items-center gap-4 text-sm text-muted mt-4'>
              <span className='flex items-center gap-1'>
                <MapPin className='w-4 h-4' />
                Ho Chi Minh City
              </span>
              <span className='flex items-center gap-1'>
                <Calendar className='w-4 h-4' />
                Since 2015
              </span>
            </div>
          </motion.div>

          {/* Frontend Expert */}
          <motion.div
            variants={itemVariants}
            className='glass-card p-6 flex flex-col justify-between group hover:bg-primary/5 transition-colors'
          >
            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center group-hover:scale-110 transition-transform'>
              <Code2 className='w-6 h-6 text-primary' />
            </div>
            <div>
              <h4 className='font-bold text-foreground'>Frontend Expert</h4>
              <p className='text-sm text-muted'>React, Next.js, TypeScript</p>
            </div>
          </motion.div>

          {/* Web3 Pioneer */}
          <motion.div
            variants={itemVariants}
            className='glass-card p-6 flex flex-col justify-between group hover:bg-secondary/5 transition-colors'
          >
            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform'>
              <Rocket className='w-6 h-6 text-secondary' />
            </div>
            <div>
              <h4 className='font-bold text-foreground'>Web3 Pioneer</h4>
              <p className='text-sm text-muted'>3+ years in blockchain</p>
            </div>
          </motion.div>

          {/* AI Enthusiast - spans 2 cols */}
          <motion.div
            variants={itemVariants}
            className='md:col-span-2 glass-card p-6 flex items-center gap-6 group hover:bg-accent/5 transition-colors'
          >
            <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform'>
              <Brain className='w-8 h-8 text-accent' />
            </div>
            <div>
              <h4 className='font-bold text-foreground text-lg'>AI Enthusiast</h4>
              <p className='text-muted'>
                I use AI daily to enhance productivity and have plans to build AI-first projects that push the
                boundaries of what's possible.
              </p>
            </div>
          </motion.div>

          {/* Lifelong Learner */}
          <motion.div
            variants={itemVariants}
            className='glass-card p-6 flex flex-col justify-between group hover:bg-primary/5 transition-colors'
          >
            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform'>
              <Heart className='w-6 h-6 text-primary' />
            </div>
            <div>
              <h4 className='font-bold text-foreground'>Lifelong Learner</h4>
              <p className='text-sm text-muted'>Backend, Cloud, Databases</p>
            </div>
          </motion.div>

          {/* Fun fact */}
          <motion.div
            variants={itemVariants}
            className='glass-card p-6 flex flex-col justify-between bg-gradient-to-br from-primary/5 to-transparent'
          >
            <Coffee className='w-8 h-8 text-primary' />
            <div>
              <p className='text-3xl font-bold gradient-text'>∞</p>
              <p className='text-sm text-muted'>Cups of coffee</p>
            </div>
          </motion.div>

          {/* Currently */}
          <motion.div variants={itemVariants} className='md:col-span-2 glass-card p-6 flex items-center gap-4 group'>
            <div className='relative'>
              <Zap className='w-8 h-8 text-secondary' />
              <motion.div
                className='absolute inset-0 rounded-full bg-secondary/20'
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <p className='text-sm text-muted'>Currently working on</p>
              <p className='font-bold text-foreground'>Web3 Ecosystem Platform</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
