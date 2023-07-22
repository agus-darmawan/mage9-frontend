import Image from 'next/image'

interface TestimonialCardProps {
  readonly image: string
  readonly name: string
  readonly title: string
  readonly testimonial: string
}

export default function TestimonialCard({
  image,
  name,
  title,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div>
      <Image
        src={'/images/homepage/testimoni/' + image + '.svg'}
        width={338}
        height={1000}
        alt='textimoni1'
        className='mx-auto h-auto w-[55%] rounded-full md:w-[100%] md:max-w-[345px] lg:rounded-none'
      />
      <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>{name}</h2>
      <h3 className='text-sm font-light md:text-lg lg:text-xl'>{title}</h3>
      <h4 className='text-xs font-semibold md:text-sm lg:text-lg'>
        {testimonial}
      </h4>
    </div>
  )
}
