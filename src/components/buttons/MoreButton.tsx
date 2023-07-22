import Link from 'next/link'

interface MoreButtonProps {
  readonly link: string
  readonly text: string
}

export default function MoreButton({ link, text }: MoreButtonProps) {
  return (
    <Link href={`/${link}`}>
      <div className='mx-auto rounded-full bg-[#301E67]  hover:bg-blue-700 dark:bg-white md:mx-2'>
        <h1 className='px-8 py-2 text-center text-sm text-white dark:text-[#301E67] md:text-lg lg:text-xl '>
          {text}
        </h1>
      </div>
    </Link>
  )
}
