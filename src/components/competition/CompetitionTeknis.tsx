import Image from 'next/image'

import ResponsiveThemeHandler from '@/components/shared/ResponsiveTheme'
const imagespath = '/images/competition/teknis/'
const gradientsVariant = {
  appdevGradient:
    'dark:from-[#03001C] dark:to-[#0A4026] from-[#FFFFFF] to-[#EFC7C7]',
  gamedevGradient:
    'dark:from-[#03001C] dark:to-[#47075E] from-[#FFFFFF] to-[#F6DBC9]',
  iotGradient:
    'dark:from-[#03001C] dark:to-[#4D0434] from-[#FFFFFF] to-[#CECCB4]',
  roboticsGradient:
    'dark:from-[#03001C] dark:to-[#0B1462] from-[#FFFFFF] to-[#E0AF8F]',
}

interface CompetitionTeknisProps {
  readonly title: string
  readonly catagory: string
}

const CompetitionTeknis = ({ title, catagory }: CompetitionTeknisProps) => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b ${
        title === 'app'
          ? gradientsVariant.appdevGradient
          : title === 'game'
          ? gradientsVariant.gamedevGradient
          : title === 'iot'
          ? gradientsVariant.iotGradient
          : title === 'robotics'
          ? gradientsVariant.roboticsGradient
          : ''
      } -z-50 flex flex-col pt-20 md:pt-0`}
    >
      <div className='mx-auto px-5 text-center text-[#301E67] dark:text-white md:max-w-[50vw]'>
        <h1 className='mb-5 text-4xl font-bold md:text-5xl '>
          Tentang <br /> Kompetisi
        </h1>
        <p className='text-md mb-10 text-center font-semibold md:text-xl'>
          {catagory}
        </p>
      </div>
      <div className='z-10 mx-[5rem] mt-5 flex h-40 items-center justify-center  rounded-lg bg-white px-10 md:mx-auto md:h-[40vh] md:w-5/12'>
        <h1 className='text-bold text-2xl text-black '>VIDEO HERE</h1>
      </div>
      <div className='mx-auto'>
        <ResponsiveThemeHandler type='mddark'>
          <Image
            src={imagespath + 'dark/md/' + title + '.svg'}
            width={1000}
            height={100}
            alt='trapezoid'
            className='mx-auto -mt-5 hidden w-[62%] dark:md:block'
          />
        </ResponsiveThemeHandler>
        <ResponsiveThemeHandler type='mdlight'>
          <Image
            src={imagespath + 'light/md/' + title + '.svg'}
            width={1000}
            height={100}
            alt='trapezoid'
            className='mx-auto -mt-5 w-[62%] md:block dark:md:hidden'
          />
        </ResponsiveThemeHandler>
        <ResponsiveThemeHandler type='smdark'>
          <Image
            src={imagespath + 'dark/sm/' + title + '.svg'}
            width={1000}
            height={1000}
            alt='trapezoid'
            className=' mx-auto -mt-6 hidden w-full dark:block md:hidden md:dark:hidden'
          />
        </ResponsiveThemeHandler>
        <ResponsiveThemeHandler type='smlight'>
          <Image
            src={imagespath + 'light/sm/' + title + '.svg'}
            width={1000}
            height={1000}
            alt='trapezoid'
            className=' mx-auto -mt-6 block w-full dark:hidden md:hidden'
          />
        </ResponsiveThemeHandler>
      </div>
      <div className='z-30 -mt-44 md:-mt-[6.6rem]'>
        <h1 className='z-30 mx-[20vw] rounded-full bg-white py-3 text-center text-xl text-black md:mx-auto md:w-80'>
          Unduh Guidebook
        </h1>
      </div>
    </div>
  )
}

export default CompetitionTeknis
