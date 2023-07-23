interface UserProps {
  email: string | undefined
}
import Image from 'next/image'
export default function Avatar({ email }: UserProps) {
  return (
    <div className='group relative cursor-pointer'>
      <Image
        src='/images/dashboard/avatar.svg'
        alt='Avatar'
        width={30}
        height={30}
        className='min-w-[30px] rounded-full'
      />
      <div
        className='text-brand-orange absolute left-2/4 top-10  z-40 mx-auto -translate-x-2/4 scale-0 rounded bg-blue-900/40 
          p-2 shadow-lg transition-all 
          duration-300 ease-in-out group-hover:scale-100'
      >
        <p className='text-sm'>{email}</p>
      </div>
    </div>
  )
}
