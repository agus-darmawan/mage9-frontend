import React from 'react'
import Link from 'next/link'

export default function Button(props : any) {
  return (
    <Link href={props.link} className='px-1'>
      <div className="inline-block text-base font-semibold leading-5 text-center">
        <div className=" text-white transition-colors duration-200 transform ">
          <div className="rounded-full px-10 py-2 bg-blue-700  hover:bg-blue-300 hover:text-blue-700">
            {props.text}
          </div>
        </div>
      </div>
    </Link>
  )
}
