interface LeftTimelineProps {
  readonly date?: string
  readonly description?: string
}

export default function LeftTimeline({ date, description }: LeftTimelineProps) {
  return (
    <div className='flex flex-row-reverse md:contents'>
      <div className='col-start-3 col-end-5 my-4 ml-auto rounded-xl p-4'>
        <h3 className='mb-1 text-lg font-semibold'>{date}</h3>
        <p className='text-justify leading-tight'>{description}</p>
      </div>
      <div className='relative col-start-5 col-end-6 mr-10 md:mx-auto'>
        <div className='flex h-full w-6 items-center justify-center'>
          <div className='pointer-events-none h-full w-1 bg-[#301E67] dark:bg-white'></div>
        </div>
        <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-[#301E67] shadow dark:bg-white'></div>
      </div>
    </div>
  )
}
