import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CompetitionHero(props:any) {
  return (
    <div className="w-screen relative -z-10">
        <Image className="-z-10 bg-cover bg-center w-[100%] min-h-screen absolute" 
            src={props.image}
            alt={props.text}
            width={1000}
            quality={100}
            height={1000}/>
        <div className="py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
          <div className="relative mb-6 mr-auto mx-auto  md:mb-10 md:max-w-md lg:max-w-lg">
            <Image className="md:h-52 md:w-52 w-36 h-36 -z-10 lg:h-52 mx-auto" 
              src={props.logo}
              alt={props.text}
              width={300}
              quality={100}
            />
          </div>
          <div className="mb-16 md:mb-0  sm:mx-auto md:text-center">
            <h1 className="md:text-5xl font-extrabold text-white py-2 text-center mx-auto max-w-2xl text-4xl">
              {props.text}
            </h1>
          </div>
         <Link
          href={props.about}
          aria-label="Scroll down"
          className="mt-32 flex items-center justify-center w-10 h-10 mx-auto text-white hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-white rounded-full hover:shadow hover:scale-110"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </Link>
      </div>  
    </div>
  )
}
