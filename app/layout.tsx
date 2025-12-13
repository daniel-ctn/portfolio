import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Daniel Nguyen | Senior Frontend Developer',
  description:
    'Senior Frontend Developer with 9 years of experience. Passionate about Web3, AI, and building exceptional digital experiences.',
  keywords: ['Frontend Developer', 'Web3', 'React', 'Next.js', 'TypeScript', 'AI'],
  authors: [{ name: 'Daniel Nguyen' }],
  openGraph: {
    title: 'Daniel Nguyen | Senior Frontend Developer',
    description: 'Senior Frontend Developer with 9 years of experience in Web3 and modern web technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className='animated-bg' />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
