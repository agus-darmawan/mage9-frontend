import Link from 'next/link'

const LoginButton = () => {
  return (
    <Link href='/auth'>
      <button className=' mx-auto w-[90vw] rounded-xl bg-white px-7 py-2 text-violet-900 hover:bg-violet-300 md:w-max  md:rounded-full'>
        Signin
      </button>
    </Link>
  )
}

export default LoginButton
