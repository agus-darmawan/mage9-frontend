import Image from 'next/image'

interface WorkshopImageCardProps {
  readonly image: string
  readonly title: string
  readonly subtitle: string
}

export default function WorkshopImageCard({
  image,
  title,
  subtitle,
}: WorkshopImageCardProps) {
  return (
    <div>
      <Image
        src={'/images/homepage/workshop/' + image + '.svg'}
        alt={title + subtitle}
        width={328}
        height={584}
        className='mb-5'
      />
      <h1 className='text-semibold mc:text-2xl text-center text-xl tracking-wide text-white lg:text-3xl'>
        {title} <br />
        {subtitle}
      </h1>
    </div>
  )
}
