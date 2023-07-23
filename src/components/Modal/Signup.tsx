import { useRouter } from 'next/router'
import { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'

import { authModalState } from '@/atoms/authModalAtom'
import { auth } from '@/firebase/firebase'

const Signup = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: 'login' }))
  }
  const router = useRouter()
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth)
  const [inputs, setInputs] = useState({
    email: '',
    displayName: '',
    password: '',
  })
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
      router.push('/dashboard')
    } catch (error) {
      alert('i am error')
    }
  }

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
          placeholder='John Doe'
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
