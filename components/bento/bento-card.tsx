'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  sectionId?: string | string[]
  delay?: number
}

export function BentoCard({ children, className, sectionId, delay = 0 }: BentoCardProps) {
  const ids = Array.isArray(sectionId) ? sectionId : sectionId ? [sectionId] : []

  return (
    <motion.div
      {...Object.fromEntries(ids.map((id) => [`data-section-${id}`, true]))}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border bg-white/[0.02] p-6 lg:p-8',
        'transition-all duration-500',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
