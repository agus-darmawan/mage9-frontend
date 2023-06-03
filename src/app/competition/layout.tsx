import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Seo from '@/components/Seo'
import Footer from '@/components/Footer'

export default function ComprtitionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Seo templateTitle="Competition" />
        {children}
        <Footer />
    </div>
  )
}
