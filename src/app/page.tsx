import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Seo from '@/components/Seo'
import Navbar from '@/components/navbar/Navbar'
import Button from '@/components/utils/Button'
import About from '@/components/About'
import Carousel from '@/components/carousel/Carousel'
import Testimonials from '@/components/testimonials/Testimonials'

import primaryBackgraund from "../assets/images/backgraund/primary.png"


export default function Home() {
  return (
    <div>
      <Seo templateTitle="Home" />
        <div className="min-h-screen">
          <Navbar />
          <Image className="absolute -z-10 bg-cover h-screen w-screen bg-center" 
              src={primaryBackgraund}
              alt="Background Image"
              width={1000}
              quality={100}
              height={1000}
          />
          <div className="container px-7 md:ml-10 mx-auto ">
            <div className= "text-gray-800 text-center lg:text-left">
              <div className="flex-col gap-6 xl:gap-1=9 mt-36 items-center md:mt-52 max-w-md">
                <div className="lg:mb-0">
                  <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight">
                    MAGE 9 
                    <span className="text-blue-600"> ITS 2023</span>
                  </h2>
                </div>
                <div className="lg:mb-0">
                  <p className="uppercase text-blue-600 text-2xl font-bold mt-16">MULTIMEDIA AND GAME EVENT</p>
                  <h6 className="text-black text-xl mb-3 mt-2">
                    Build a Better Society with Smart City</h6>
                </div >
                <div className='mt-2'>
                <Button
                    text="Daftar Sekarang!"
                    link="/auth/signup"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='about'>
          <About />
        </div>
        <div>
            <div className="md:py-8 py-1 px-4 mx-auto max-w-screen-xl text-center lg:py-3 mt-10">
              <h1 className="md:text-6xl  font-extrabold text-blue-700 text-5xl">COMPETITIONS</h1>
              <p className="mt-2 text-xl md:text-2xl font-medium text-gray-500 ">Adapun perlombaan yang dilaksanakan pada MAGE 9 adalah</p>
            </div>
          <Carousel />
        </div>
        <Testimonials />
    </div>
  )
}
