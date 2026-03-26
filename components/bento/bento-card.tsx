'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  highlighted?: boolean
  dimmed?: boolean
  delay?: number
}

export function BentoCard({ children, className, highlighted = false, dimmed = false, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={{
        opacity: dimmed ? 0.15 : 1,
        y: 0,
        filter: dimmed ? 'blur(6px)' : 'blur(0px)',
        scale: highlighted ? 1.01 : 1,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 },
        scale: { duration: 0.3 },
      }}
      whileHover={
        !dimmed
          ? {
              scale: 1.008,
              transition: { duration: 0.3 },
            }
          : undefined
      }
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border bg-white/[0.02] p-6 backdrop-blur-sm lg:p-8',
        'transition-shadow duration-500',
        'hover:border-border-hover hover:shadow-[0_0_60px_rgba(94,234,212,0.04)]',
        highlighted && 'border-primary/25 shadow-[0_0_50px_rgba(94,234,212,0.08)]',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
