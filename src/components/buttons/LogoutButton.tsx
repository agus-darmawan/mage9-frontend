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
    <button
      className='bg-dark-fill-3 text-brand-orange cursor-pointer rounded px-3 py-1.5'
      onClick={handleLogout}
    >
      <FiLogOut />
    </button>
  )
}
export default Logout
