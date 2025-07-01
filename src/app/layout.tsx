import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aakash Giri - Frontend Developer',
  description: 'Frontend Developer specializing in React.js, Next.js, JavaScript, HTML, and CSS. Building clean, responsive, and user-focused web interfaces.',
  keywords: 'Frontend Developer, React, Next.js, JavaScript, HTML, CSS, Web Development, Portfolio',
  authors: [{ name: 'Aakash Giri' }],
  openGraph: {
    type: 'website',
    url: 'https://aakashgiri.dev/',
    title: 'Aakash Giri - Frontend Developer',
    description: 'Frontend Developer specializing in React.js, Next.js, JavaScript, HTML, and CSS.',
    siteName: 'Aakash Giri Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aakash Giri - Frontend Developer',
    description: 'Frontend Developer specializing in React.js, Next.js, JavaScript, HTML, and CSS.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}