import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Seo from '@/components/Seo'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Seo templateTitle="Home" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
