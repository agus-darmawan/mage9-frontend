import Image from 'next/image'

import MoreButton from '@/components/buttons/MoreButton'

const imagespath = '/images/competition/logo/'
import { CompetitionBannerProps } from '@/components/shared/CompetitionBanner'

export default function LeftCompetitionBanner({
  gradient,
  title,
  description,
  link,
}: CompetitionBannerProps) {
  return (
    <div
      className={`grid w-[95%] grid-cols-3 rounded-r-[80px] bg-gradient-to-r ${gradient} md:w-[75%]`}
    >
      <div className='col-start-1 col-end-2 flex flex-col items-center justify-center'>
        <Image
          src={imagespath + title.split(' ')[0].toLowerCase() + '.svg'}
          alt={`logo-${title.toLowerCase()}`}
          width={450}
          height={400}
          className='h-40 min-h-[10rem]'
        />
      </div>
      <div className='col-start-2 col-end-4 flex h-80 flex-col items-end justify-center rounded-r-[80px]'>
        <div className='mr-5 flex flex-col items-end justify-center md:mr-20'>
          <h1 className=' text-right text-2xl font-bold md:text-3xl lg:text-4xl'>
            {title}
          </h1>
          <p className='mb-2 text-right text-xs md:mb-8 md:text-sm lg:text-lg'>
            {description}
          </p>
          <MoreButton link={link} text='Lihat Selengkapnya' />
        </div>
      </div>
    </div>
  )
}
