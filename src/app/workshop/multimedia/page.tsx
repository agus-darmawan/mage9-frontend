import React from 'react'
import Image from 'next/image'
import CommingSoon from '@/components/CommingSoon'
import Navbar from '@/components/navbar/Navbar'
import primaryBackgraund from "../../../assets/images/backgraund/primary.png"

export default function Mulmed() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#DCF0FA]'>
        <Navbar />
        <Image className="absolute -z-10 bg-cover h-screen w-screen bg-center" 
              src={primaryBackgraund}
              alt="Background Image"
              width={1000}
              quality={100}
              height={1000}
          />
        <div className=' to-white'>
            <CommingSoon />
        </div>
    </div>
  )
}
