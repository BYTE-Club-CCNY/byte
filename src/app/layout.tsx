import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BYTE CCNY',
  description: 'Build Your Technical Experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <main className="flex-grow">{children}</main>
      <Footer/>
      </body>
      </html>
  )
}
