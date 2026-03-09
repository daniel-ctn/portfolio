'use client'

import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold uppercase tracking-[0.1em] transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-primary text-background hover:brightness-110',
      secondary: 'bg-secondary text-background hover:brightness-110',
      outline: 'border border-card-border text-foreground hover:border-primary/30 hover:text-primary',
      ghost: 'text-muted hover:text-foreground hover:bg-card-strong',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-6 py-3 text-sm',
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
