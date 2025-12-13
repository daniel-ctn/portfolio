'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

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
    <footer className='relative py-12 border-t border-card-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <motion.div className='w-10 h-10 rounded-xl overflow-hidden' whileHover={{ scale: 1.1, rotate: 5 }}>
              <Image
                src='/daniel-chibi.jpg'
                alt='Daniel Nguyen'
                width={40}
                height={40}
                className='w-full h-full object-cover'
              />
            </motion.div>
            <span className='font-semibold text-lg'>
              Daniel<span className='text-primary'>.</span>dev
            </span>
          </Link>

          {/* Navigation */}
          <nav className='flex flex-wrap justify-center gap-6'>
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-sm text-muted hover:text-foreground transition-colors'
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className='flex items-center gap-3'>
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg text-muted hover:text-foreground hover:bg-card transition-all'
                whileHover={{ scale: 1.1 }}
              >
                <social.icon className='w-4 h-4' />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 pt-8 border-t border-card-border text-center'>
          <p className='text-sm text-muted flex items-center justify-center gap-1'>
            © {new Date().getFullYear()} Daniel Nguyen. Built with
            <Heart className='w-3 h-3 text-accent inline' />
            using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
