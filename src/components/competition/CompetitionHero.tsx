import Image from 'next/image'

const imagespath = '/images/competition/logo/'
const gradientsVariant = {
  appdevGradient:
    'dark:from-[#16BC6D] dark:to-[#0A4026] from-[#EC7272] to-[#EC7272]',
  gamedevGradient:
    'dark:from-[#C64CF2] dark:to-[#47075E] from-[#FFA45C] to-[#C38154]',
  iotGradient:
    'dark:from-[#CB3699] dark:to-[#4D0434] from-[#E7B10A] to-[#898121]',
  roboticsGradient:
    'dark:from-[#3453C1] dark:to-[#0B1462] from-[#87CBB9] to-[#569DAA]',
}

interface CompetitionHeroProps {
  readonly subtitle: string
  readonly title: string
}

const CompetitionHero = ({ title, subtitle }: CompetitionHeroProps) => {
  return (
    <div
      className={`left-0 right-0 top-0 flex min-h-screen items-center justify-center bg-gradient-to-b 
      ${
        title === 'APP DEV'
          ? gradientsVariant.appdevGradient
          : title === 'GAME DEV'
          ? gradientsVariant.gamedevGradient
          : title === 'IOT'
          ? gradientsVariant.iotGradient
          : title === 'ROBOTICS'
          ? gradientsVariant.roboticsGradient
          : ''
      }`}
    >
      <div className='flex flex-col items-center justify-center'>
        <Image
          src={imagespath + title.split(' ')[0].toLowerCase() + '.svg'}
          alt={`logo-${title.toLowerCase()}`}
          width={389}
          height={402}
          priority={true}
          className='h-52 md:h-80'
        />
        <h1 className='text-center text-4xl font-bold tracking-[1rem] text-white md:text-6xl md:tracking-[2rem]'>
          {title}/
          <span className='font-extralight'>
            <br />
            {subtitle}
          </span>
        </h1>
      </div>
    </div>
  )
}

export default CompetitionHero
