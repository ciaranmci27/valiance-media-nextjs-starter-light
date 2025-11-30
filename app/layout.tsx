import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Valiance Media',
  description: 'Welcome to our website.',
  authors: [{ name: 'Valiance Media' }],
  openGraph: {
    title: 'Home | Valiance Media',
    description: 'Welcome to our website.',
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
