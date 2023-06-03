import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'
import Image from 'next/image'
import Seo from '@/components/Seo'

import mageLogo from "../../assets/images/logo.svg"
import authBackgraund from "../../assets/images/backgraund/auth.png"


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen min-w-full w-sc'>
        <Seo templateTitle="Auth" />
        <Image className="absolute -z-10 bg-cover h-screen w-screen bg-center" 
            src={authBackgraund}
            alt="Background Image"
            width={1000}
            quality={100}
            height={1000}/>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <Link href="/">
                <div className="mt-10 flex flex-col items-center justify-center mx-auto lg:py-0">
                    <Image
                        src={mageLogo}
                        width={350}
                        height={100}
                        alt="mage-logo"
                        className='h-20'
                    />
                </div>
                </Link>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}
