import { IconBrandGoogle } from '@tabler/icons-react'
import { IconLoader2 } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

import { auth } from '@/firebase/firebase'
export default function GoogleButton() {
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
    <div>
      <button
        className='rounded-full bg-[#DB4437] p-2 text-white hover:bg-orange-400'
        onClick={() => signInWithGoogle()}
      >
        {loading ? (
          <IconLoader2 className='animate-spin' />
        ) : (
          <IconBrandGoogle />
        )}
      </button>
    </div>
  )
}
