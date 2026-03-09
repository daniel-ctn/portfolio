'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { ArrowUpRight, CheckCircle, Github, Linkedin, Mail, MapPin, Send, X } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'danielnguyen5201@gmail.com', href: 'mailto:danielnguyen5201@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Ho Chi Minh City, Vietnam', href: null },
]

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/daniel-ctn' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/daniel-ctn' },
]

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const initialFormData: FormData = { name: '', email: '', subject: '', message: '' }

const inputClasses =
  'w-full rounded-lg border border-card-border bg-background-alt px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20'

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
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData(initialFormData)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <section id='contact' className='relative'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start'>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              align='left'
              className='mb-0'
              title='Start a Conversation'
              subtitle='If you have a product that needs a stronger frontend presence, let&apos;s talk.'
            />

            <p className='mt-8 max-w-md text-base leading-relaxed text-foreground-soft'>
              I&apos;m interested in projects where product quality matters, especially when the goal is to make the
              experience feel sharper, more modern, and more intentional.
            </p>

            <motion.a
              href='mailto:danielnguyen5201@gmail.com'
              className='mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-widest text-background'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Email me directly
              <ArrowUpRight className='h-4 w-4' />
            </motion.a>

            <div className='mt-10 space-y-3'>
              {contactInfo.map((item) => (
                <div key={item.label} className='flex items-center gap-3'>
                  <item.icon className='h-4 w-4 text-primary' />
                  <div>
                    <p className='text-[0.6rem] uppercase tracking-[0.16em] text-muted'>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className='text-sm text-foreground hover:text-primary'>
                        {item.value}
                      </a>
                    ) : (
                      <p className='text-sm text-foreground'>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-6 flex gap-2'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-10 w-10 items-center justify-center rounded-lg border border-card-border text-muted transition-colors hover:border-primary/30 hover:text-primary'
                  aria-label={social.label}
                >
                  <social.icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className='rounded-xl border border-card-border p-6 md:p-8'>
              <div className='flex items-center justify-between border-b border-card-border pb-4'>
                <div>
                  <p className='text-[0.62rem] uppercase tracking-[0.18em] text-muted'>Project inquiry</p>
                  <h3 className='mt-1 font-display text-3xl text-foreground'>Send a brief</h3>
                </div>
              </div>

              <form className='mt-6 space-y-4' onSubmit={handleSubmit}>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='name' className='mb-1.5 block text-[0.62rem] uppercase tracking-[0.16em] text-muted'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder='Your name'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='mb-1.5 block text-[0.62rem] uppercase tracking-[0.16em] text-muted'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder='your@email.com'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='subject' className='mb-1.5 block text-[0.62rem] uppercase tracking-[0.16em] text-muted'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder='What are you building?'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='message' className='mb-1.5 block text-[0.62rem] uppercase tracking-[0.16em] text-muted'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder='Tell me about the product, the stage you are in, and what kind of frontend help you need.'
                    required
                  />
                </div>

                <motion.button
                  type='submit'
                  className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-widest text-background disabled:cursor-not-allowed disabled:opacity-50'
                  whileHover={{ scale: isFormValid && !isSubmitting ? 1.01 : 1 }}
                  whileTap={{ scale: isFormValid && !isSubmitting ? 0.99 : 1 }}
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
                      <Send className='h-3.5 w-3.5' />
                      Send message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className='fixed bottom-8 left-1/2 z-50'
          >
            <div className='flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-background shadow-2xl shadow-primary/30'>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 500, delay: 0.1 }}>
                <CheckCircle className='h-5 w-5' />
              </motion.div>
              <div>
                <p className='text-sm font-semibold'>Message sent successfully!</p>
                <p className='text-xs opacity-80'>I&apos;ll get back to you soon.</p>
              </div>
              <button onClick={() => setShowSuccess(false)} className='rounded-full p-1 transition-colors hover:bg-background/20'>
                <X className='h-4 w-4' />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
