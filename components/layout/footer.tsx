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
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className='relative px-4 pb-8 pt-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl rounded-4xl border border-card-border bg-linear-to-br from-card-strong via-card to-card p-6 shadow-[0_30px_100px_rgba(0,0,0,0.24)] md:p-10'>
        <div className='grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start'>
          <div>
            <p className='text-[0.68rem] uppercase tracking-[0.28em] text-muted'>Closing room / Contact</p>
            <h2 className='mt-4 font-display text-5xl leading-none tracking-[-0.04em] text-foreground md:text-6xl'>
              Let&apos;s build something visitors remember.
            </h2>
            <p className='mt-4 max-w-xl text-base leading-relaxed text-foreground-soft'>
              I design and build frontend experiences that aim to feel polished, expressive, and production-ready. If
              you have a product, platform, or experiment that needs that level of craft, let&apos;s talk.
            </p>

            <motion.a
              href='mailto:danielnguyen5201@gmail.com'
              className='mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-linear-to-r from-primary to-primary-light px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/20'
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              danielnguyen5201@gmail.com
              <ArrowUpRight className='h-4 w-4' />
            </motion.a>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='rounded-3xl border border-card-border bg-background/45 p-5'>
              <p className='text-[0.65rem] uppercase tracking-[0.26em] text-muted'>Navigate</p>
              <div className='mt-4 space-y-3'>
                <Link href='/' className='block text-sm font-semibold uppercase tracking-[0.18em] text-foreground'>
                  Home
                </Link>
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className='block text-sm font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground'
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className='rounded-3xl border border-card-border bg-background/45 p-5'>
              <p className='text-[0.65rem] uppercase tracking-[0.26em] text-muted'>Elsewhere</p>
              <div className='mt-4 space-y-3'>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-between rounded-2xl border border-card-border bg-white/2 px-4 py-3 text-foreground transition-colors hover:border-frame-border'
                    whileHover={{ x: 4 }}
                  >
                    <span className='flex items-center gap-3'>
                      <social.icon className='h-4 w-4' />
                      <span className='text-sm font-semibold uppercase tracking-[0.18em]'>{social.label}</span>
                    </span>
                    <ArrowUpRight className='h-4 w-4 text-muted' />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-2 border-t border-card-border pt-5 text-sm text-muted md:flex-row md:items-center md:justify-between'>
          <p>© {new Date().getFullYear()} Daniel Nguyen</p>
          <p>Curated and built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}
