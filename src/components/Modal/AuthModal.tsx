import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRecoilValue } from 'recoil'

import Login from '@/components/Modal/Login'
import ResetPassword from '@/components/Modal/ResetPasworrd'
import Signup from '@/components/Modal/Signup'

import { authModalState } from '@/atoms/authModalAtom'
const AuthModal = () => {
  const authModal = useRecoilValue(authModalState)
  return (
    <>
      <div className='z-50 items-center justify-center sm:w-[450px]'>
        <div className='relative mx-auto flex h-full w-full items-center justify-center'>
          <div className='relative mx-6 w-full rounded-[2.5rem] border border-gray-700 bg-[#1c2431]'>
            <Link href='/'>
              <Image
                src='/images/mage-logo.svg'
                width={350}
                height={100}
                alt='mage-logo'
                className='mx-auto mt-5 h-20'
              />
            </Link>
            <div className='flex justify-end p-2'></div>
            {authModal.type === 'login' ? (
              <Login />
            ) : authModal.type === 'register' ? (
              <Signup />
            ) : (
              <ResetPassword />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthModal
