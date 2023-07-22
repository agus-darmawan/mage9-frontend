import Image from 'next/image'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ImageProps, SwiperProps } from '@/components/shared/SwiperInterface'

export default function ImageSwipper({
  images,
  width,
  height,
  slideView,
  spaceBetween,
}: SwiperProps) {
  return (
    <>
      <Swiper
        slidesPerView='auto'
        spaceBetween={0}
        breakpoints={{
          0: {
            slidesPerView: slideView[0].media0,
            spaceBetween: spaceBetween,
          },
          768: {
            slidesPerView: slideView[0].media768,
            spaceBetween: spaceBetween,
          },
          1024: {
            slidesPerView: slideView[0].media1024,
            spaceBetween: spaceBetween,
          },
          1280: {
            slidesPerView: slideView[0].media1280,
            spaceBetween: spaceBetween,
          },
        }}
        pagination={{
          type: 'fraction',
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='myswiper mx-auto w-full'
      >
        {images.map((image: ImageProps) => (
          <SwiperSlide key={image.alt}>
            <Image
              src={image.src}
              alt={image.alt}
              width={width}
              height={height}
              className='mx-auto object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
