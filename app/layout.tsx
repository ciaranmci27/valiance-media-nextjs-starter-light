import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valiance Media - Modern Marketing Website Solutions',
  description: 'Build high-converting marketing websites with our Next.js boilerplate. Professional templates, SEO optimization, and modern design patterns included.',
  authors: [{ name: 'Valiance Media' }],
  icons: {
    icon: 'https://starter.valiancemedia.com/favicon/favicon.ico',
  },
  openGraph: {
    title: 'Valiance Media - Modern Marketing Website Solutions',
    description: 'Build high-converting marketing websites with our Next.js boilerplate. Professional templates, SEO optimization, and modern design patterns included.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
