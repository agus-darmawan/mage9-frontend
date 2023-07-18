import { IconChevronDown } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Squash as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import useScroll from '@/hooks/useScroll'

import LoginButton from '@/components/buttons/LoginButton'
import ThemeToogle from '@/components/shared/ThemeToogle'

import { complinks, links } from './NavLinks'

export default function Navbar() {
  const scrollPos = useScroll()
  const [blurNavbar, setBlurNavbar] = useState(false)
  const [dropDownCompe, setdropDownCompe] = useState(false)
  const [MobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    if (scrollPos > 0) {
      setBlurNavbar(true)
    } else {
      setBlurNavbar(false)
    }
  }, [scrollPos])

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.2,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  const sidebar = {
    open: (height = 1000) => ({
      opacity: 1,
      height,
      transition: {
        type: 'easeInOut',
        duration: 0.2,
      },
    }),
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: 'easeInOut',
        duration: 0.2,
      },
    },
  }

  return (
    <nav
      className={`fixed left-0 top-0 z-50 mx-auto flex w-full rounded-b-[18px] px-10 ${
        blurNavbar
          ? 'bg-black/80 backdrop-blur-sm duration-500'
          : 'bg-transparent duration-500'
      }`}
    >
      <div className='z-50 flex w-screen items-center justify-between md:mx-10 lg:w-3/12'>
        <Link href='/'>
          <Image
            alt='Logo Mage9'
            width={60}
            height={60}
            priority={true}
            src='/images/mage-white.svg'
            className='h-auto w-full'
          />
        </Link>
        <div className=' flex gap-4 text-white lg:hidden'>
          <Hamburger
            onToggle={() => {
              setMobileNav(!MobileNav)
            }}
          />
          <ThemeToogle />
        </div>
      </div>
      <div className='flex h-24 items-center justify-end self-center lg:w-9/12'>
        <div className='text-xl font-semibold text-white'>
          <ul className='hidden flex-row lg:flex '>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className='link-underline ml-12'>
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li
              className='link-underline ml-12 flex flex-row'
              onClick={() => {
                setdropDownCompe(!dropDownCompe)
              }}
            >
              Competition
              {dropDownCompe ? (
                <IconChevronDown className='inline-block w-10' />
              ) : (
                <IconChevronDown className='inline-block w-10 rotate-180 transform duration-75' />
              )}
              <motion.div
                className='absolute top-[4.3rem]'
                variants={subMenuAnimate}
                animate={dropDownCompe ? 'enter' : 'exit'}
              >
                <div className='flex w-max flex-col gap-3 rounded-xl  border-s bg-black/80 px-2 py-4 backdrop-blur-sm'>
                  {complinks.map(({ href, label }) => (
                    <ul key={href}>
                      <Link href={href}>
                        <li className='w-full cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-50/5'>
                          <h1 className='text-base font-semibold'>{label}</h1>
                        </li>
                      </Link>
                    </ul>
                  ))}
                </div>
              </motion.div>
            </li>
            <li className='link-underline ml-12'>
              <Link href='/workshop'>Workshop</Link>
            </li>
            <li className='link-underline ml-12'>
              <Link href='/faq'>FAQ</Link>
            </li>
            <li className='mx-12 -mt-2'>
              <LoginButton link='auth/login' variant='login' />
            </li>
            <li>
              <ThemeToogle />
            </li>
          </ul>
        </div>
        {/* MOBILE NAV */}
        <motion.div
          initial={false}
          animate={MobileNav ? 'open' : 'closed'}
          className='flex cursor-pointer lg:hidden'
        >
          <motion.div
            className='absolute bottom-0 left-0 top-0 min-h-screen w-full bg-gradient-to-b from-violet-950 to-violet-800 pt-28 backdrop-blur-sm'
            style={{ pointerEvents: MobileNav ? 'auto' : 'none' }}
            variants={sidebar}
          >
            <div className='flex flex-col justify-start gap-6 text-lg text-white'>
              {links.map(({ href, label }) => (
                <div key={href}>
                  <Link href={href}>
                    <div className='flex flex-row gap-2 px-8'>{label}</div>
                  </Link>
                </div>
              ))}
              <div className='flex flex-col gap-5 px-8'>
                <div
                  className='flex flex-row gap-2'
                  onClick={() => {
                    setdropDownCompe(!dropDownCompe)
                  }}
                >
                  Competition
                  {dropDownCompe ? (
                    <IconChevronDown className='inline-block w-10' />
                  ) : (
                    <IconChevronDown className='inline-block w-10 rotate-180 transform duration-75' />
                  )}
                </div>
                <div
                  className={`flex flex-col gap-5 pl-6 text-base font-medium text-sky-200 
                ${
                  dropDownCompe
                    ? 'animate-fade-in-down block'
                    : 'animate-fade-out-up hidden'
                }`}
                >
                  {complinks.map(({ href, label }) => (
                    <div key={href}>
                      <Link href={href}>
                        <div className='flex flex-row gap-1'>{label}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-5 px-8'>
                <div className='flex flex-row gap-2'>
                  <Link href='/workshop'>Workshop</Link>
                </div>
              </div>
              <div className='flex flex-col gap-5 px-8'>
                <div className='flex flex-row gap-2'>
                  <Link href='/faq'>FAQ</Link>
                </div>
              </div>
              <div className='flex flex-col gap-5 px-8'>
                <LoginButton link='auth/login' variant='login' />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  )
}
