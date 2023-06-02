import React from 'react'
import { TestimonialData } from './Data'
import CardTestimonials from './Card'

import avatarGirls from "../../assets/images/avatar/girls.svg"
import avatarMan from "../../assets/images/avatar/man.svg"

export default function Testimonials() {
  return (
    <div >
        <h2 className="md:text-4xl mt-5 font-extrabold text-2xl leading-6 text-gray-800 text-center px-4">Testimoni</h2>
        <h1 className="lg:text-5xl md:text-5xl text-4xl font-extrabold px-4 leading-10 text-blue-700  text-center">Apa kata mereka?</h1>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-10 gap-6">
            <CardTestimonials 
                name={TestimonialData[0].name}
                title = {TestimonialData[0].title}
                testimonial ={TestimonialData[0].testimonial}
                image ={avatarGirls}
            />
            <CardTestimonials 
                name={TestimonialData[1].name}
                title = {TestimonialData[1].title}
                testimonial ={TestimonialData[1].testimonial}
                image ={avatarMan}
            />
            <CardTestimonials 
                name={TestimonialData[2].name}
                title = {TestimonialData[2].title}
                testimonial ={TestimonialData[2].testimonial}
                image ={avatarGirls}
            />
        </div>
    </div>
  )
}
