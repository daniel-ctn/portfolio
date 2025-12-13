'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className='p-2 rounded-xl glass-card w-9 h-9'>
        <div className='w-5 h-5' />
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className='p-2 rounded-xl glass-card text-muted hover:text-foreground transition-colors'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div initial={false} animate={{ rotate: theme === 'dark' ? 0 : 180 }} transition={{ duration: 0.3 }}>
        {theme === 'dark' ? <Moon className='w-5 h-5' /> : <Sun className='w-5 h-5' />}
      </motion.div>
    </motion.button>
  )
}
