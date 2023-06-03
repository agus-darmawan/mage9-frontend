import React from 'react'

export default function RightTimeline(props:any) {
  return (
    <div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-1 font-bold text-l text-primaryColor1">{props.date}</p>
                <h4 className="mb-2 font-bold text-lg md:text-2xl">{props.title}</h4>
                <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                    {props.details}
                </p>
            </div>
        </div>
        
    </div>
  )
}
