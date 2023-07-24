import { IconBrandTwitter, IconLoader2 } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSignInWithTwitter } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

import { auth } from '@/firebase/firebase'
export default function TwiterButton() {
  const [signInWithTwitter, user, loading, error] = useSignInWithTwitter(auth)
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
    <div>
      <button
        className='rounded-full bg-[#1DA1F2] p-2 text-white hover:bg-blue-400'
        onClick={() => signInWithTwitter()}
      >
        {loading ? (
          <IconLoader2 className='animate-spin' />
        ) : (
          <IconBrandTwitter />
        )}
      </button>
    </div>
  )
}
