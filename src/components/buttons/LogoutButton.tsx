import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { FiLogOut } from 'react-icons/fi'

import { auth } from '@/firebase/firebase'

const Logout: React.FC = () => {
  const [signOut] = useSignOut(auth)

  const handleLogout = () => {
    signOut()
  }
  return (
    <>
      <button
        className='bg-dark-fill-3 hidden cursor-pointer rounded px-3 py-1.5 text-blue-700 md:block'
        onClick={handleLogout}
      >
        <FiLogOut />
      </button>
      <button
        className=' mx-auto w-[90vw] rounded-xl bg-white px-7 py-2 text-violet-900 hover:bg-violet-300 md:hidden md:w-max  md:rounded-full'
        onClick={handleLogout}
      >
        Logout <FiLogOut className='ml-3 inline' />
      </button>
    </>
  )
}
export default Logout
