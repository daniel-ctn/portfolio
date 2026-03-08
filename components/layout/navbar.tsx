'use client'

import { cn } from '@/lib/utils'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
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
      className='fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav
        className={cn(
          'mx-auto max-w-7xl rounded-[1.75rem] border px-4 py-3 transition-all duration-300 md:px-6',
          isScrolled
            ? 'border-frame-border bg-background/78 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl'
            : 'border-white/8 bg-white/3 backdrop-blur-xl'
        )}
      >
        <div className='flex items-center justify-between gap-4'>
          <Link href='/' className='flex min-w-0 items-center gap-3'>
            <motion.div
              className='overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-1'
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src='/daniel-chibi.jpg'
                alt='Daniel Nguyen'
                width={44}
                height={44}
                className='h-11 w-11 rounded-xl object-cover'
              />
            </motion.div>
            <div className='min-w-0'>
              <p className='hidden text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:block'>Digital atelier</p>
              <p className='hidden truncate font-display text-2xl leading-none text-foreground sm:block'>Daniel Nguyen</p>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-foreground sm:hidden'>DN</p>
            </div>
          </Link>

          <div className='hidden items-center gap-2 rounded-full border border-card-border bg-background-alt/60 px-2 py-2 lg:flex'>
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className='rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className='hidden items-center gap-3 lg:flex'>
            <ThemeToggle />
            <motion.a
              href='#contact'
              className='rounded-full border border-primary/30 bg-linear-to-r from-primary to-primary-light px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-primary/20'
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a project
            </motion.a>
          </div>

          <div className='flex items-center gap-2 lg:hidden'>
            <ThemeToggle />
            <button
              className='rounded-2xl border border-card-border bg-background-alt/60 p-2 text-foreground'
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <motion.div
          className={cn(
            'overflow-hidden lg:hidden',
            isMobileMenuOpen ? 'mt-4 block border-t border-card-border/80 pt-4' : 'hidden'
          )}
          initial={{ height: 0 }}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='space-y-2 pb-2'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='block rounded-[1.2rem] border border-card-border bg-background-alt/60 px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href='#contact'
              className='mt-4 block rounded-[1.2rem] border border-primary/30 bg-linear-to-r from-primary to-primary-light px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white'
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
