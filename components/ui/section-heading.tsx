'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ title, subtitle, className, align = 'center' }: SectionHeadingProps) {
  const isCentered = align === 'center'

  return (
    <motion.div
      className={cn('mb-14 md:mb-18', isCentered ? 'text-center' : 'text-left', className)}
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={cn('mb-4 flex items-center gap-3', isCentered ? 'justify-center' : 'justify-start')}>
        <span className='h-px w-10 bg-primary/40' />
        <span className='h-1 w-1 rounded-full bg-primary' />
      </div>
      <h2
        className={cn(
          'font-display text-4xl tracking-[-0.02em] text-foreground md:text-5xl lg:text-6xl',
          isCentered ? 'mx-auto max-w-4xl' : 'max-w-3xl'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 max-w-xl text-base leading-relaxed text-muted', isCentered ? 'mx-auto' : undefined)}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
