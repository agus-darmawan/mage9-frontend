interface RightTimelineProps {
  readonly date?: string
  readonly description?: string
}

export default function RightTimeline({
  date,
  description,
}: RightTimelineProps) {
  return (
    <div className='flex md:contents'>
      <div className='relative col-start-5 col-end-6 mr-10 md:mx-auto'>
        <div className='flex h-full w-6 items-center justify-center'>
          <div className='pointer-events-none h-full w-1 bg-[#301E67] dark:bg-white'></div>
        </div>
        <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-[#301E67] shadow dark:bg-white'></div>
      </div>
      <div className=' col-start-6 col-end-10  mr-auto rounded-xl p-4 first-letter:my-4 md:text-left'>
        <h3 className='mb-1 text-lg font-semibold'>{date}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
