import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'

import LoginGoogle from '@/components/buttons/LoginGoogle'

import { authModalState } from '@/atoms/authModalAtom'
import { auth } from '@/firebase/firebase'
const Signup = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: 'login' }))
  }
  const [inputs, setInputs] = useState({
    email: '',
    displayName: '',
    password: '',
  })
  const router = useRouter()
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputs.email || !inputs.password || !inputs.displayName)
      return {
        alert: 'Please fill all fields',
      }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      )
      if (!newUser) return
      router.push('/')
    } catch (error) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      })
    }
  }
  useEffect(() => {
    if (error)
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      })
    if (user) router.push('/dashboard')
  }, [error, user, router])
  return (
    <form className='space-y-6 px-6 py-4' onSubmit={handleRegister}>
      <h3 className='text-xl font-medium text-white'>Register to MAGE 9</h3>
      <div>
        <label
          htmlFor='email'
          className='mb-2 block text-sm font-medium text-gray-300'
        >
          Your Email
        </label>
        <input
          onChange={handleChangeInput}
          type='email'
          name='email'
          id='email'
          className='
              block w-full rounded-lg border-2 border-gray-500 bg-gray-600 p-2.5 text-white placeholder-gray-400
              outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm
          '
          placeholder='name@company.com'
        />
      </div>
      <div>
        <label
          htmlFor='email'
          className='mb-2 block text-sm font-medium text-gray-300'
        >
          Display Name
        </label>
        <input
          onChange={handleChangeInput}
          type='displayName'
          name='displayName'
          id='displayName'
          className='
              block w-full rounded-lg border-2 border-gray-500 bg-gray-600 p-2.5 text-white placeholder-gray-400
              outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm
          '
          placeholder='Your Name'
        />
      </div>
      <div>
        <label
          htmlFor='password'
          className='mb-2 block text-sm font-medium text-gray-300'
        >
          Your Password
        </label>
        <input
          onChange={handleChangeInput}
          type='password'
          name='password'
          id='password'
          className='
            block w-full rounded-lg border-2 border-gray-500 bg-gray-600 p-2.5 text-white placeholder-gray-400
            outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm
        '
          placeholder='*******'
        />
      </div>
      <button
        type='submit'
        className='hover:bg-brand-yellow-200 w-full rounded-lg bg-blue-600 px-5 py-2.5
                text-center text-sm font-medium text-white hover:bg-blue-400 focus:ring-blue-300
            '
      >
        {loading ? 'Loading...' : 'Register'}
      </button>
      <LoginGoogle />
      <div className='text-sm font-medium text-gray-300'>
        Alredy Have an account?{' '}
        <a
          href='#'
          className='text-blue-700 hover:underline'
          onClick={handleClick}
        >
          Login
        </a>
      </div>
    </form>
  )
}

export default Signup
