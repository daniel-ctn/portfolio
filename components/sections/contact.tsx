'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react'

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

export function Contact() {
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
                    className='w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted hover:text-foreground hover:bg-white/[0.08] transition-all'
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
              <form className='space-y-6'>
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium mb-2'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      className='w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium mb-2'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors'
                      placeholder='your@email.com'
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
                    className='w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors'
                    placeholder='Project inquiry'
                  />
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-medium mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={5}
                    className='w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none'
                    placeholder='Tell me about your project...'
                  />
                </div>
                <Button type='submit' className='w-full' size='lg'>
                  <Send className='w-4 h-4 mr-2' />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
