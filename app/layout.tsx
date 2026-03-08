import type { Metadata } from 'next'
import { Cormorant_Garamond, Geist_Mono, Manrope } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Daniel Nguyen | Frontend Developer Building for the AI Era',
  description:
    'Senior frontend developer focused on AI-powered products, agentic engineering, and building real experiences in Web3 and the AI era.',
  keywords: ['Frontend Developer', 'Agentic Engineering', 'Web3', 'React', 'Next.js', 'TypeScript', 'AI'],
  authors: [{ name: 'Daniel Nguyen' }],
  openGraph: {
    title: 'Daniel Nguyen | Frontend Developer Building for the AI Era',
    description: 'Senior frontend developer building AI-powered products, exploring agentic engineering, and shipping polished product experiences.',
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
      <body className={`${manrope.variable} ${cormorant.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className='animated-bg' />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
