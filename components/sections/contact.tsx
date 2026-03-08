'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { ArrowUpRight, CheckCircle, Github, Linkedin, Mail, MapPin, Send, X } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'danielnguyen5201@gmail.com',
    href: 'mailto:danielnguyen5201@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ho Chi Minh City, Vietnam',
    href: null,
  },
]

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/daniel-ctn' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/daniel-ctn',
  },
]

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending (just a delay for UX)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData(initialFormData)

    // Auto-hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <section id='contact' className='relative'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start'>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <SectionHeading
              align='left'
              className='mb-0'
              title='Start a Conversation'
              subtitle='If you have a product idea, platform, or interface that needs a stronger frontend presence, let&apos;s talk.'
            />

            <p className='mt-8 max-w-xl text-base leading-relaxed text-foreground-soft md:text-lg'>
              I&apos;m interested in projects where product quality matters, especially when the goal is to make the
              experience feel sharper, more modern, and more intentional than the typical template-driven solution.
            </p>

            <motion.a
              href='mailto:danielnguyen5201@gmail.com'
              className='mt-8 inline-flex items-center gap-2 rounded-2xl border border-primary/30 bg-linear-to-r from-primary to-primary-light px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-primary/20'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Email me directly
              <ArrowUpRight className='h-4 w-4' />
            </motion.a>

            <div className='mt-8 space-y-3'>
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  className='flex items-center justify-between rounded-2xl border border-card-border bg-background/38 px-4 py-4'
                  whileHover={{ x: 4 }}
                >
                  <div className='flex items-center gap-4'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-card-border bg-background-alt/70'>
                      <item.icon className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='text-[0.66rem] uppercase tracking-[0.22em] text-muted'>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className='mt-1 block text-sm font-medium text-foreground hover:text-primary'>
                          {item.value}
                        </a>
                      ) : (
                        <p className='mt-1 text-sm font-medium text-foreground'>{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className='mt-4 grid gap-3 sm:grid-cols-2'>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-between rounded-2xl border border-card-border bg-background/38 px-4 py-4 text-foreground transition-colors hover:border-frame-border'
                  whileHover={{ x: 4 }}
                >
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/3'>
                      <social.icon className='h-4 w-4' />
                    </div>
                    <span className='text-sm font-semibold uppercase tracking-[0.14em]'>{social.label}</span>
                  </div>
                  <ArrowUpRight className='h-4 w-4 text-muted' />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className='rounded-3xl border border-frame-border bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.2)] md:p-6'>
              <div className='flex items-center justify-between gap-4 border-b border-card-border pb-4'>
                <div>
                  <p className='text-[0.66rem] uppercase tracking-[0.22em] text-muted'>Project inquiry</p>
                  <h3 className='mt-2 font-display text-4xl leading-none text-foreground'>Send a brief</h3>
                </div>
                <div className='rounded-2xl border border-primary/20 bg-primary/10 px-3 py-2 text-[0.66rem] uppercase tracking-[0.18em] text-primary'>
                  Response-friendly
                </div>
              </div>

              <form className='mt-6 space-y-5' onSubmit={handleSubmit}>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='name' className='mb-2 block text-[0.68rem] uppercase tracking-[0.2em] text-muted'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full rounded-2xl border border-card-border bg-background-alt/70 px-4 py-3 text-foreground placeholder:text-muted focus:border-primary focus:outline-none'
                      placeholder='Your name'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='mb-2 block text-[0.68rem] uppercase tracking-[0.2em] text-muted'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full rounded-2xl border border-card-border bg-background-alt/70 px-4 py-3 text-foreground placeholder:text-muted focus:border-primary focus:outline-none'
                      placeholder='your@email.com'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='subject' className='mb-2 block text-[0.68rem] uppercase tracking-[0.2em] text-muted'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full rounded-2xl border border-card-border bg-background-alt/70 px-4 py-3 text-foreground placeholder:text-muted focus:border-primary focus:outline-none'
                    placeholder='What are you building?'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='message' className='mb-2 block text-[0.68rem] uppercase tracking-[0.2em] text-muted'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full resize-none rounded-2xl border border-card-border bg-background-alt/70 px-4 py-3 text-foreground placeholder:text-muted focus:border-primary focus:outline-none'
                    placeholder='Tell me about the product, the stage you are in, and what kind of frontend help you need.'
                    required
                  />
                </div>

                <motion.button
                  type='submit'
                  className='inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-linear-to-r from-primary to-primary-light px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-60'
                  whileHover={{ y: isFormValid && !isSubmitting ? -3 : 0 }}
                  whileTap={{ scale: isFormValid && !isSubmitting ? 0.98 : 1 }}
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className='h-4 w-4 rounded-full border-2 border-background border-t-transparent'
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send className='h-4 w-4' />
                      Send message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className='fixed bottom-8 left-1/2 z-50'
          >
            <div className='flex items-center gap-4 rounded-2xl bg-linear-to-r from-primary to-secondary px-6 py-4 text-white shadow-2xl shadow-primary/30'>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, delay: 0.1 }}
              >
                <CheckCircle className='w-6 h-6' />
              </motion.div>
              <div>
                <p className='font-semibold'>Message sent successfully!</p>
                <p className='text-sm text-white/80'>Thank you for reaching out. I&apos;ll get back to you soon!</p>
              </div>
              <button
                onClick={() => setShowSuccess(false)}
                className='p-1 rounded-full hover:bg-white/20 transition-colors'
              >
                <X className='w-4 h-4' />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
