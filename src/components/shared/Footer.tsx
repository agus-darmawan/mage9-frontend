import {
  IconBrandInstagram,
  IconBrandLine,
  IconBrandTiktok,
  IconMail,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  readonly lineColor: string
  readonly footerColor: string
}

const Footer = ({ lineColor, footerColor }: FooterProps) => {
  return (
    <footer className={`${footerColor} relative z-20`}>
      <div className={`h-8 w-full bg-gradient-to-r ${lineColor}`}></div>
      <div className='flex min-h-[300px] items-center justify-center text-white'>
        <div className='md:grid-col-2  container mx-4 my-10 flex flex-col gap-5 md:grid lg:grid-cols-5'>
          <div className=' col-start-1 col-end-2 md:col-start-1 md:col-end-2'>
            <div className='flex flex-col items-center justify-center'>
              <Link href='/'>
                <Image
                  alt='Logo MAGE 9'
                  width={225}
                  height={225}
                  src='/images/mage-white.svg'
                  className='cursor-pointe h-24 md:h-28 lg:h-40'
                />
              </Link>
              <h1 className='font-aistrike -mt-3 text-3xl md:text-4xl lg:text-5xl'>
                MAGE 9
              </h1>
            </div>
          </div>
          <div className=' h-full md:col-start-2 md:col-end-3 lg:col-start-2 lg:col-end-4'>
            <div className='item-center flex h-full flex-col justify-center lg:items-start'>
              <h1 className='text-center text-lg font-black  tracking-widest lg:text-left lg:text-2xl'>
                MULTIMEDIA AND GAME EVENT
              </h1>
              <h2 className='text-center text-2xl font-bold md:text-3xl lg:text-left lg:text-4xl'>
                Build a Better Society with Smart City
              </h2>
            </div>
          </div>
          <div className=' h-full md:col-start-1 md:col-end-2 lg:col-start-4 lg:col-end-5'>
            <div className='flex flex-col'>
              <h2 className='mb-1 text-xl font-semibold md:text-2xl md:font-bold lg:mb-2'>
                QUICK LINKS
              </h2>
              <ul className='text-lg font-light'>
                <li>
                  <Link href='/competition/appdev' className='hover:underline'>
                    App Development
                  </Link>
                </li>
                <li>
                  <Link href='/competition/gamedev' className='hover:underline'>
                    Game Development
                  </Link>
                </li>
                <li>
                  <Link href='/competition/iot' className='hover:underline'>
                    IoT
                  </Link>
                </li>
                <li>
                  <Link
                    href='/competition/robotics'
                    className='hover:underline'
                  >
                    Robotics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=' h-full md:col-start-2 md:col-end-3 lg:col-start-5 lg:col-end-6'>
            <div className='flex flex-col'>
              <h2 className='mb-3 text-xl font-semibold md:text-2xl md:font-bold'>
                GET IN TOUCH
              </h2>
              <ul className='text-lg font-light'>
                <li>
                  <Link
                    href='mailto:mage.ce.its@gmail.com'
                    className='flex items-center gap-2 hover:underline'
                    target='blank'
                  >
                    <IconMail />
                    mage.ce.its@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.instagram.com/mage_its/'
                    className='flex items-center gap-2 hover:underline'
                    target='blank'
                  >
                    <IconBrandInstagram />
                    Mage_its
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.tiktok.com/@mage9_its'
                    className='flex items-center gap-2 hover:underline'
                    target='blank'
                  >
                    <IconBrandTiktok />
                    mage9_its
                  </Link>
                </li>
                <li className='mb-10 lg:mb-0'>
                  <Link
                    href='http://line.me/ti/p/@rio5948f'
                    className='flex items-center gap-2 hover:underline'
                    target='blank'
                  >
                    <IconBrandLine />
                    @rio5948f
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
