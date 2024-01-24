import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './(home)/_components/Navbar'
import ScrollButton from '@/components/Scroll-Button'
import Footer from './(home)/_components/Footer'
import ToastProvider from '@/components/providers/react-toast-provider'
import SessionClientProvider from '@/components/providers/session-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}><SessionClientProvider><ToastProvider/>{children}</SessionClientProvider><ScrollButton/></body>
    </html>
  )
}
