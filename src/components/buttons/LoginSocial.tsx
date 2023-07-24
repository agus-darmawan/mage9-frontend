import FacebookButton from '@/components/buttons/FacebookButton'
import GithubButton from '@/components/buttons/GithubButton'
import GoogleButton from '@/components/buttons/GoogleButton'
import TwiterButton from '@/components/buttons/TwiterButton'

const LoginSocial = () => {
  return (
    <div>
      <div className='mb-2 flex items-center justify-center space-x-2'>
        <div className='h-px w-1/4 bg-gray-300'></div>
        <p className='text-gray-300'>Or Login With</p>
        <div className='h-px w-1/4 bg-gray-300'></div>
      </div>
      <div className='flex items-center justify-center space-x-4'>
        <FacebookButton />
        <GithubButton />
        <GoogleButton />
        <TwiterButton />
      </div>
    </div>
  )
}

export default LoginSocial
