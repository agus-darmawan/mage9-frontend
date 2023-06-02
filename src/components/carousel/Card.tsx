import React from 'react'
import Image from 'next/image'
import Button from '../utils/Button'

export default function Card(props:any) {
  return (
    <div>
        <div className="flex flex-shrink-0 relative w-full">
            <Image 
                width={500}
                height={500}
                className="object-cover object-center w-full" 
                src={props.image}  
                alt={props.title}
            />
            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 font-bold text-white">{props.title}</h2>
                <p className="text-white font-xl italic">{props.description}</p>
                <div className="h-full items-end pb-24 flex">
                    <Button text="Selengkapnya" 
                    link={props.link} />
                </div>
            </div>
        </div>
    </div>
  )
}
