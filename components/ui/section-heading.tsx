'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  const isCentered = align === 'center'

  return (
    <motion.div
      className={cn('mb-16 md:mb-20', isCentered ? 'text-center' : 'text-left', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn('mb-5 flex items-center gap-3', isCentered ? 'justify-center' : 'justify-start')}>
        <span className='h-px w-16 bg-linear-to-r from-primary via-secondary to-transparent' />
        <span className='h-1.5 w-1.5 rounded-full bg-primary' />
      </div>
      <h2
        className={cn(
          'font-display text-4xl leading-[0.92] tracking-[-0.04em] text-foreground md:text-5xl lg:text-6xl',
          isCentered ? 'mx-auto max-w-4xl' : 'max-w-3xl'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg',
            isCentered ? 'mx-auto' : undefined
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
