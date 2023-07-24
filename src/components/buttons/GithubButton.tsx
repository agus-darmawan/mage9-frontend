import { IconBrandGithub, IconLoader2 } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSignInWithGithub } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

import { auth } from '@/firebase/firebase'
export default function GithubButton() {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth)
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
        className='rounded-full bg-[#333] p-2 text-white hover:bg-gray-400'
        onClick={() => signInWithGithub()}
      >
        {loading ? (
          <IconLoader2 className='animate-spin' />
        ) : (
          <IconBrandGithub />
        )}
      </button>
    </div>
  )
}
