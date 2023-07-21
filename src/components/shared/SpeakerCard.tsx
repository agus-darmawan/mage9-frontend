import Image from 'next/image'

interface SpeakerCardProps {
  readonly title: string
  readonly name: string
  readonly description: string
  readonly archivment: string
  readonly image: string
  readonly gradient: string
}

export default function SpeakerCard({
  title,
  name,
  description,
  archivment,
  image,
  gradient,
}: SpeakerCardProps) {
  return (
    <div className='relative flex flex-col  items-center justify-center'>
      <div
        className={`absolute -left-24 top-[30%] flex w-[85%] rotate-90 flex-col items-center   justify-center rounded-full bg-gradient-to-r ${gradient} py-2 md:left-auto md:top-0 md:mt-0 md:rotate-0`}
      >
        <h1 className='text-2xl font-bold text-white'>{title}</h1>
      </div>
      <Image
        src={'/images/workshop/pemateri/' + image}
        width={250}
        height={300}
        alt={'pemateri' + name}
        className='h-auto w-[65%]'
      />
      <h1 className='mb-2 text-lg font-bold sm:text-xl md:mt-5 md:text-2xl lg:text-2xl'>
        {name}
      </h1>
      <h2 className='md:mt-2s mb-2  text-sm sm:text-sm md:text-lg lg:text-lg'>
        {description}
      </h2>
      <h2 className='md:mt-2s mb-10  text-sm sm:text-sm md:text-lg lg:text-lg'>
        {archivment}
      </h2>
    </div>
  )
}
