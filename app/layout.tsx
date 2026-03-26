import type { Metadata } from 'next'
import { Syne, DM_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Daniel Nguyen | Frontend Developer Building for the AI Era',
  description:
    'Senior frontend developer focused on AI-powered products, agentic engineering, and building real experiences in Web3 and the AI era.',
  keywords: ['Frontend Developer', 'Agentic Engineering', 'Web3', 'React', 'Next.js', 'TypeScript', 'AI'],
  authors: [{ name: 'Daniel Nguyen' }],
  openGraph: {
    title: 'Daniel Nguyen | Frontend Developer Building for the AI Era',
    description:
      'Senior frontend developer building AI-powered products, exploring agentic engineering, and shipping polished product experiences.',
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
      <body className={`${syne.variable} ${dmSans.variable} ${geistMono.variable} antialiased`}>
        <div className='animated-bg' />
        {children}
      </body>
    </html>
  )
}
