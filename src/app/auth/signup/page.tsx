import React from 'react'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Sign up to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required={true}/>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required={true}/>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required={true}/>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required={true}/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label  className="text-gray-500 ">Remember me</label>
                    </div>
                </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
            <p className="text-sm font-light text-gray-500 ">
                Already have an account? <Link href="/auth/login" className="font-medium text-primary-600 hover:underline ">Login</Link>
            </p>
        </form>
    </div>
  )
}
