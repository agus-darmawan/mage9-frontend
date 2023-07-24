import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'

import LoginSocial from '@/components/buttons/LoginSocial'

import { authModalState } from '@/atoms/authModalAtom'
import { auth } from '@/firebase/firebase'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = (type: 'login' | 'register' | 'forgotPassword') => {
    setAuthModalState((prev) => ({ ...prev, type }))
  }
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const router = useRouter()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputs.email || !inputs.password)
      return {
        alert: 'Please fill all fields}',
      }
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      )
      if (!newUser) return
      router.push('/dashboard')
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
    if (user) router.push('/')
  }, [error, user, router])
  return (
    <form className='space-y-6 px-6 py-4' onSubmit={handleLogin}>
      <h3 className='text-xl font-medium text-white'>Signin to MAGE 9</h3>
      <div>
        <label
          htmlFor='email'
          className='mb-2 block text-sm font-medium text-gray-300'
        >
          Your Email
        </label>
        <input
          onChange={handleInputChange}
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
          htmlFor='password'
          className='mb-2 block text-sm font-medium text-gray-300'
        >
          Your Password
        </label>
        <div className='relative'>
          <input
            onChange={handleInputChange}
            type={showPassword ? 'text' : 'password'}
            name='password'
            id='password'
            className='
            relative block w-full rounded-lg border-2 border-gray-500 bg-gray-600 p-2.5 text-white
            placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm
        '
            placeholder='*******'
          />
          <span className='absolute right-4 top-[50%] translate-y-[-50%] text-xl text-white'>
            {showPassword ? (
              <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </span>
        </div>
      </div>
      <button
        type='submit'
        className='hover:bg-brand-yellow-200 w-full rounded-lg  bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-400 focus:ring-blue-300'
      >
        {loading ? 'Loading...' : 'Signin'}
      </button>
      <button
        className='flex w-full justify-end'
        onClick={() => handleClick('forgotPassword')}
      >
        <a
          href='#'
          className='block w-full text-right text-sm text-blue-700 hover:underline'
        >
          Forgot Password?
        </a>
      </button>
      <LoginSocial />
      <div className='text-sm font-medium text-gray-300'>
        Not Registered?{' '}
        <a
          href='#'
          className='text-blue-700 hover:underline'
          onClick={() => handleClick('register')}
        >
          Create account
        </a>
      </div>
    </form>
  )
}

export default Login
