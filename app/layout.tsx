import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GTA Bath Solution - Professional Bathroom Renovation Services in GTA',
  description: 'Transform your bathroom with GTA Bath Solution. Expert bathroom wall panels, bathtub repair, reglazing, cabinet resurfacing, grab bar installation, and walk-in tub services in the Greater Toronto Area.',
  keywords: [
    'bathroom renovation',
    'bathroom wall panels',
    'bathtub repair',
    'bathtub reglazing',
    'cabinet resurfacing',
    'grab bar installation',
    'walk-in tub',
    'GTA',
    'Toronto',
    'bathroom remodeling'
  ],
  authors: [{ name: 'GTA Bath Solution' }],
  creator: 'GTA Bath Solution',
  publisher: 'GTA Bath Solution',
  openGraph: {
    title: 'GTA Bath Solution - Professional Bathroom Renovation Services',
    description: 'Transform your bathroom with expert renovation services. Quick, affordable, and professional bathroom solutions in the Greater Toronto Area.',
    url: 'https://gtabathsolution.com',
    siteName: 'GTA Bath Solution',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GTA Bath Solution - Bathroom Renovation Services',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA Bath Solution - Professional Bathroom Renovation Services',
    description: 'Transform your bathroom with expert renovation services in the Greater Toronto Area.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased min-h-screen bg-white")}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 