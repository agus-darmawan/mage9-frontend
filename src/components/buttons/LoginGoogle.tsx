import { IconBrandGoogle } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

import { auth } from '@/firebase/firebase'

const LoginGoogle = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const router = useRouter()
  useEffect(() => {
    if (error)
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      })
    if (user) router.push('/')
  }, [error, user, router])
  return (
    <button
      className='flex w-full items-center justify-center rounded-md bg-[#4285F4] px-4 py-2 text-sm font-medium text-white hover:bg-[#357AE8] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
      onClick={() => signInWithGoogle()}
    >
      <IconBrandGoogle className='mr-2 h-5 w-5' />
      {loading ? 'Loading...' : 'Sign in with Google'}
    </button>
  )
}

export default LoginGoogle
