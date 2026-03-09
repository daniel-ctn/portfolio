'use client'

import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'gradient' | 'glass'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'rounded-xl border border-card-border bg-card-strong',
      gradient: 'gradient-border backdrop-blur-xl',
      glass: 'glass-card',
    }

    return (
      <motion.div
        ref={ref}
        className={cn('p-6 transition-colors duration-200', variants[variant], className)}
        whileHover={{ y: -3 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export { Card }
