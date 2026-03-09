'use client'

import { cn } from '@/lib/utils'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24)
  })

  return (
    <motion.header
      className='fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8'
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={cn(
          'mx-auto max-w-6xl rounded-xl border px-4 py-2.5 transition-all duration-500 md:px-5',
          isScrolled
            ? 'border-card-border bg-background/80 shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl backdrop-saturate-150'
            : 'border-transparent bg-transparent backdrop-blur-sm'
        )}
      >
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2'>
            <span className='font-display text-xl text-foreground'>Daniel Nguyen</span>
          </Link>

          <div className='hidden items-center gap-1 lg:flex'>
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className='rounded-lg px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:bg-card-strong hover:text-foreground'
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className='hidden items-center gap-3 lg:flex'>
            <ThemeToggle />
            <motion.a
              href='#contact'
              className='rounded-lg border border-primary/20 bg-primary/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary/15'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a project
            </motion.a>
          </div>

          <div className='flex items-center gap-2 lg:hidden'>
            <ThemeToggle />
            <button
              className='rounded-lg border border-card-border bg-card-strong p-2 text-foreground'
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <motion.div
          className={cn('overflow-hidden lg:hidden', isMobileMenuOpen ? 'mt-3 block border-t border-card-border pt-3' : 'hidden')}
          initial={{ height: 0 }}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className='space-y-1 pb-2'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='block rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:bg-card-strong hover:text-foreground'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href='#contact'
              className='mt-2 block rounded-lg border border-primary/20 bg-primary/10 px-3 py-2.5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-primary'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a project
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
