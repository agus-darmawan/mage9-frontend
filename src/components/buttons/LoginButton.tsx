import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

const LoginButtonVariant = ['login', 'logout']

interface LoginButtonProps {
  readonly link?: Url
  readonly variant?: (typeof LoginButtonVariant)[number]
}

const LoginButton = ({ variant, link }: LoginButtonProps) => {
  return (
    <Link href={`/${link}`}>
      <button
        className={`${
          variant === 'login'
            ? ' mx-auto w-[90vw] rounded-xl bg-white px-7 py-2 text-violet-900 hover:bg-violet-300 md:w-max  md:rounded-full'
            : 'rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700'
        }`}
      >
        {variant === 'login' ? 'Login' : 'Logout'}
      </button>
    </Link>
  )
}

export default LoginButton
