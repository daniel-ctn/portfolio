'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/daniel-ctn' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/daniel-ctn' },
  { icon: Mail, label: 'Email', href: 'mailto:danielnguyen5201@gmail.com' },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,
        },
      })

      tl.from('.contact-label', { opacity: 0, y: 20, duration: 0.3 })
        .from('.contact-headline', {
          opacity: 0,
          y: 60,
          scale: 0.92,
          filter: 'blur(12px)',
          duration: 0.8,
        })
        .from('.contact-sub', { opacity: 0, y: 25, duration: 0.4 }, '-=0.3')
        .from('.contact-cta', { opacity: 0, y: 20, scale: 0.95, duration: 0.4 }, '-=0.2')
        .from('.contact-divider', { scaleX: 0, duration: 0.5 }, '-=0.2')
        .from('.contact-social', { opacity: 0, y: 15, stagger: 0.08, duration: 0.3 }, '-=0.2')
        .from('.contact-footer', { opacity: 0, y: 15, duration: 0.4 }, '-=0.1')
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id='contact' className='motion-section relative'>
      <div className='section-inner'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex min-h-[70vh] flex-col items-center justify-center text-center'>
            <div className='contact-label section-label justify-center'>Let&apos;s connect</div>

            <h2 className='contact-headline max-w-3xl font-display text-5xl tracking-[-0.03em] text-foreground md:text-7xl lg:text-8xl'>
              Let&apos;s build something
              <br />
              <span className='italic'>visitors remember.</span>
            </h2>

            <p className='contact-sub mx-auto mt-6 max-w-md text-base leading-relaxed text-foreground-soft'>
              I build frontend experiences that feel polished, expressive, and production-ready. If you have a product
              that needs that level of craft, let&apos;s talk.
            </p>

            <motion.a
              href='mailto:danielnguyen5201@gmail.com'
              className='contact-cta mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-background'
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              danielnguyen5201@gmail.com
              <ArrowUpRight className='h-4 w-4' />
            </motion.a>

            <div className='contact-divider mx-auto mt-12 h-px w-24 origin-center bg-card-border' />

            <div className='mt-8 flex gap-3'>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact-social flex h-11 w-11 items-center justify-center rounded-lg border border-card-border text-muted transition-colors hover:border-primary/30 hover:text-primary'
                  whileHover={{ y: -3, scale: 1.05 }}
                  aria-label={social.label}
                >
                  <social.icon className='h-4 w-4' />
                </motion.a>
              ))}
            </div>

            <div className='contact-footer mt-14 flex flex-col gap-1 text-xs text-muted'>
              <p>&copy; {new Date().getFullYear()} Daniel Nguyen</p>
              <p>Built with Next.js, GSAP & Framer Motion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
