import React from 'react'
import Image from 'next/image'
import bgHero from "../assets/images/bg/Hero1-2.png"

export default function CommingSoon() {
  return (
    <div className='mt-[20%] '>
        <div className="bg-gradient-to-tl dark:bg-gray-900 flex flex-col items-center justify-center">
            <h1 className="text-6xl text-primaryColor1 dark:text-white font-bold mb-8 animate-bounce">
                Coming Soon
            </h1>
            <p className=" text-blue-900 text-center dark:text-white text-lg mb-8">
                We're working hard to bring you something amazing. Stay tuned!
            </p>
        </div>
    </div>
  )
}
