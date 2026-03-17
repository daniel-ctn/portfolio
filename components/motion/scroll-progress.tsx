'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const sectionMeta = [
  { id: 'hero', label: 'Intro' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Journey' },
  { id: 'skills', label: 'Stack' },
  { id: 'contact', label: 'Connect' },
]

export function ScrollProgress() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)

      const sections = document.querySelectorAll('.motion-section')
      const viewportCenter = window.innerHeight / 2

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          setActiveIndex(i)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((index: number) => {
    const sections = document.querySelectorAll('.motion-section')
    if (sections[index]) {
      const y = sections[index].getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: y })
    }
  }, [])

  return (
    <div className='fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex'>
      <div className='mb-3 font-mono text-[0.6rem] tracking-wider text-muted'>
        <span className='text-primary'>{String(activeIndex + 1).padStart(2, '0')}</span>
        <span className='mx-0.5 text-card-border'>/</span>
        <span>{String(sectionMeta.length).padStart(2, '0')}</span>
      </div>

      {sectionMeta.map((section, i) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(i)}
          className='group relative flex items-center'
          aria-label={`Go to ${section.label}`}
        >
          <motion.div
            className={`rounded-full transition-colors duration-300 ${
              i === activeIndex ? 'bg-primary' : 'bg-primary/15'
            }`}
            animate={{ scale: i === activeIndex ? 2 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ width: 5, height: 5 }}
          />
          <span className='pointer-events-none absolute right-5 whitespace-nowrap text-[0.58rem] uppercase tracking-[0.18em] text-muted opacity-0 transition-opacity group-hover:opacity-100'>
            {section.label}
          </span>
        </button>
      ))}

      <div className='relative mt-4 h-14 w-px overflow-hidden bg-card-border'>
        <motion.div
          className='absolute left-0 top-0 w-full origin-top bg-primary'
          animate={{ scaleY: progress }}
          style={{ height: '100%' }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>
    </div>
  )
}
