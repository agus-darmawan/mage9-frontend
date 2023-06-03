import React from 'react'
import Link from 'next/link'

export default function ForgotPassword() {
  return (
    <div>
        <h1 className="text-xl p-0 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Forgot Password
        </h1>
        <p className="text-sm font-light text-gray-500 ">
            We are here to help you to recover your password. Enter the email address you used when you joined and we'll send you instructions to reset your password.  
        </p>
        <form className="space-y-4 md:space-y-6" action="#">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required={true}/>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
            <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet? <Link href="/auth/signup" className="font-medium text-primary-600 hover:underline ">Sign up</Link>
            </p>
        </form>
    </div>
  )
}
