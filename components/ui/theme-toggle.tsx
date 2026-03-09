'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

function useHasMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false)
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const mounted = useHasMounted()

  if (!mounted) {
    return <div className='h-8 w-8 rounded-lg border border-card-border' />
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className='flex h-8 w-8 items-center justify-center rounded-lg border border-card-border text-muted transition-colors hover:border-primary/30 hover:text-foreground'
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div initial={false} animate={{ rotate: theme === 'dark' ? 0 : 180 }} transition={{ duration: 0.3 }}>
        {theme === 'dark' ? <Moon className='h-4 w-4' /> : <Sun className='h-4 w-4' />}
      </motion.div>
    </motion.button>
  )
}
