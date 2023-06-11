
import React from "react";
import Image from "next/image";
export default function AboutCompetition(props:any) {
  return (
    <div>
        <div >
            <div className="w-full relative z-0 pb-10 px-6 xl:px-0">
                <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full text-center md:text-left lg:w-1/2 h-full">
                        <h1  className="text-primaryColor1 uppercase text-3xl font-black mb-1">Tentang</h1>
                        <h1  className="text-primaryColor1 text-5xl lg:text-6xl font-black mb-4">Kompetisi</h1>
                        <p  className="text-black mb-8 text-xl">{props.description}</p>                      
                    </div>
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <Image 
                            width={500}
                            height={500}
                            className="mx-auto" 
                            src={props.image}  
                            alt="people smiling"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};