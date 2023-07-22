import Image from 'next/image'

import BgParticles from '@/components/shared/BgParticles'
import ResponsiveThemeHandler from '@/components/shared/ResponsiveTheme'

const imagespath = '/images/competition/details/'
const gradientsVariant = {
  appdevGradient: 'dark:from-[#0A4026] from-[#EC7272]',
  gamedevGradient: 'dark:from-[#47075E] from-[#C38154]',
  iotGradient: 'dark:from-[#4D0434] from-[#898121]',
  roboticsGradient: 'dark:from-[#0B1462] from-[#569DAA]',
}
interface CompetitionDetailsProps {
  readonly title: string
  readonly description: string
}

const CompetitionDetails = ({
  title,
  description,
}: CompetitionDetailsProps) => {
  return (
    <div className='relative min-h-screen w-full bg-white dark:bg-[#03001C]'>
      <BgParticles />
      <div
        className={`h-32 w-full bg-gradient-to-b ${
          title === 'app'
            ? gradientsVariant.appdevGradient
            : title === 'game'
            ? gradientsVariant.gamedevGradient
            : title === 'iot'
            ? gradientsVariant.iotGradient
            : title === 'robotics'
            ? gradientsVariant.roboticsGradient
            : ''
        }`}
      ></div>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
        <div className='px-10 text-[#301E67] dark:text-white md:ml-10'>
          <h1 className='mb-5 text-4xl font-extrabold md:text-5xl '>
            Tentang <br /> Kompetisi
          </h1>
          <p className='text-md mb-5 py-4 text-justify md:text-lg'>
            {description}
          </p>
        </div>
        <div className='mt-10 flex flex-col items-center justify-center md:mt-0'>
          <Image
            src={imagespath + 'img/' + title + '.svg'}
            width={607}
            height={474}
            alt={'image-' + title}
            className=' z-20 w-6/12  md:w-7/12'
          />
          <div className='w-full'>
            <ResponsiveThemeHandler type='mddark'>
              <Image
                src={imagespath + 'dark/md/' + title + '.svg'}
                width={948}
                height={205}
                alt={'trapezoid-' + title}
                className='z-10 mx-auto -mt-10 md:w-10/12'
              />
            </ResponsiveThemeHandler>
            <ResponsiveThemeHandler type='mdlight'>
              <Image
                src={imagespath + 'light/md/' + title + '.svg'}
                width={948}
                height={205}
                alt={'trapezoid-' + title}
                className='z-10 mx-auto -mt-10 md:w-10/12'
              />
            </ResponsiveThemeHandler>
            <ResponsiveThemeHandler type='smdark'>
              <Image
                src={imagespath + 'dark/sm/' + title + '.svg'}
                width={607}
                height={474}
                alt={'trapezoid-' + title}
                className='-mt-6 w-[100vw] md:w-7/12  md:dark:hidden'
              />
            </ResponsiveThemeHandler>
            <ResponsiveThemeHandler type='smlight'>
              <Image
                src={imagespath + 'light/sm/' + title + '.svg'}
                width={607}
                height={474}
                alt={'trapezoid-' + title}
                className='-mt-6 w-[100vw] md:w-7/12'
              />
            </ResponsiveThemeHandler>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionDetails
