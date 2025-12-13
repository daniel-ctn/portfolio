'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle, X } from 'lucide-react'

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
    <section id='contact' className='relative py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading title='Get In Touch' subtitle="Have a project in mind? Let's work together!" />

        <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold mb-4'>Let&apos;s Connect</h3>
              <p className='text-muted leading-relaxed'>
                I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question
                or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className='space-y-4'>
              {contactInfo.map((item) => (
                <motion.div key={item.label} className='flex items-center gap-4' whileHover={{ x: 5 }}>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                    <item.icon className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <p className='text-sm text-muted'>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className='text-foreground hover:text-primary transition-colors'>
                        {item.value}
                      </a>
                    ) : (
                      <p className='text-foreground'>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <p className='text-sm text-muted mb-4'>Find me on</p>
              <div className='flex gap-3'>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted hover:text-foreground hover:bg-card transition-all'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className='w-5 h-5' />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card variant='gradient'>
              <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium mb-2'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors'
                      placeholder='Your name'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium mb-2'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors'
                      placeholder='your@email.com'
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='subject' className='block text-sm font-medium mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors'
                    placeholder='Project inquiry'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-medium mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors resize-none'
                    placeholder='Tell me about your project...'
                    required
                  />
                </div>
                <Button type='submit' className='w-full' size='lg' disabled={!isFormValid || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className='w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2'
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className='w-4 h-4 mr-2' />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
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
            <div className='flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-secondary to-cyan-500 text-white shadow-2xl shadow-secondary/30'>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, delay: 0.1 }}
              >
                <CheckCircle className='w-6 h-6' />
              </motion.div>
              <div>
                <p className='font-semibold'>Message sent successfully!</p>
                <p className='text-sm text-white/80'>Thank you for reaching out. I'll get back to you soon!</p>
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
