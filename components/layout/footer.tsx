'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/daniel-ctn', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/daniel-ctn', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:danielnguyen5201@gmail.com', label: 'Email' },
]

const footerLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className='relative border-t border-card-border px-4 pb-8 pt-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-12 lg:grid-cols-[1.3fr_0.7fr]'>
          <div>
            <p className='text-[0.62rem] uppercase tracking-[0.2em] text-muted'>Let&apos;s connect</p>
            <h2 className='mt-3 font-display text-4xl tracking-[-0.02em] text-foreground md:text-5xl'>
              Let&apos;s build something
              <br />
              <span className='italic'>visitors remember.</span>
            </h2>
            <p className='mt-4 max-w-lg text-base leading-relaxed text-foreground-soft'>
              I design and build frontend experiences that feel polished, expressive, and production-ready. If you have
              a product that needs that level of craft, let&apos;s talk.
            </p>

            <motion.a
              href='mailto:danielnguyen5201@gmail.com'
              className='mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-widest text-background'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              danielnguyen5201@gmail.com
              <ArrowUpRight className='h-4 w-4' />
            </motion.a>
          </div>

          <div className='grid gap-8 sm:grid-cols-2'>
            <div>
              <p className='text-[0.6rem] uppercase tracking-[0.2em] text-muted'>Navigate</p>
              <div className='mt-4 space-y-2.5'>
                <Link href='/' className='block text-sm text-foreground'>
                  Home
                </Link>
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className='block text-sm text-muted transition-colors hover:text-foreground'
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className='text-[0.6rem] uppercase tracking-[0.2em] text-muted'>Elsewhere</p>
              <div className='mt-4 space-y-2.5'>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground'
                  >
                    <social.icon className='h-4 w-4' />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 flex flex-col gap-2 border-t border-card-border pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between'>
          <p>&copy; {new Date().getFullYear()} Daniel Nguyen</p>
          <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}
