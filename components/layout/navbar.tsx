'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { ChibiLogo } from '@/components/ui/chibi-logo'

gsap.registerPlugin(ScrollTrigger)

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const header = headerRef.current
    if (!header) return

    gsap.set(header, { autoAlpha: 0, y: -20 })

    ScrollTrigger.create({
      trigger: '#hero',
      start: 'bottom 20%',
      onEnter: () => {
        gsap.to(header, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
      },
      onLeaveBack: () => {
        gsap.to(header, {
          autoAlpha: 0,
          y: -20,
          duration: 0.35,
          ease: 'power2.in',
        })
      },
    })
  })

  return (
    <header
      ref={headerRef}
      className='fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8'
    >
      <nav className='mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-card-border bg-background/70 px-4 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 md:px-5'>
        <a href='#hero' className='flex items-center gap-2.5'>
          <ChibiLogo size={30} />
          <span className='font-display text-lg text-foreground'>Daniel Nguyen</span>
        </a>

        <div className='flex items-center gap-3'>
          <ThemeToggle />
          <a
            href='#contact'
            className='hidden rounded-lg border border-primary/20 bg-primary/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary/15 sm:inline-flex'
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  )
}
