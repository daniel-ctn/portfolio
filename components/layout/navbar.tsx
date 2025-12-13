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
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-xl' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <motion.div
              className='w-10 h-10 rounded-xl overflow-hidden'
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src='/daniel-chibi.jpg'
                alt='Daniel Nguyen'
                width={40}
                height={40}
                className='w-full h-full object-cover'
              />
            </motion.div>
            <span className='font-semibold text-lg hidden sm:block'>
              daniel<span className='text-primary'>.</span>dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-1'>
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className='px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors link-hover'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <ThemeToggle />
            <motion.a
              href='#contact'
              className='ml-4 px-5 py-2 text-sm font-medium bg-gradient-to-r from-primary to-primary-light text-white rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center gap-2'>
            <ThemeToggle />
            <button className='p-2 text-foreground' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={cn('md:hidden overflow-hidden', isMobileMenuOpen ? 'block' : 'hidden')}
          initial={{ height: 0 }}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='py-4 space-y-2'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='block px-4 py-3 text-muted hover:text-foreground hover:bg-card rounded-lg transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href='#contact'
              className='block px-4 py-3 text-center bg-gradient-to-r from-primary to-primary-light text-white rounded-lg mt-4'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
