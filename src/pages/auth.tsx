import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import AuthLayout from '@/components/layout/AuthLayout'
import AuthModal from '@/components/Modal/AuthModal'

import { auth } from '@/firebase/firebase'
const AuthPage = () => {
  const [user, loading] = useAuthState(auth)
  const [pageLoading, setPageLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (user) router.push('/')
    if (!loading && !user) setPageLoading(false)
  }, [user, router, loading])

  if (pageLoading) return null
  return (
    <AuthLayout>
      <div className='flex flex-col items-center justify-center'>
        <div className=' item-center flex flex-col justify-center'>
          <h1 className='font-aistrike mx-auto h-20 text-7xl text-sky-400 md:text-8xl'>
            MAGE
          </h1>
          <h2 className='-mt-5 mb-10 text-xl font-bold text-sky-400 sm:mt-0 md:text-xl'>
            Multimedia and Game Event
          </h2>
        </div>
        <AuthModal />
      </div>
    </AuthLayout>
  )
}

export default AuthPage
