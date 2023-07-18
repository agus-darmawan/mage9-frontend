import { IconChevronDown } from '@tabler/icons-react'
import React, { useState } from 'react'

interface FaqComponentProps {
  readonly answer: string
  readonly question: string
}

export default function FaqComponent({ answer, question }: FaqComponentProps) {
  const [active, setActive] = useState(true)
  return (
    <div className='min-h-16 mx-auto mt-4 w-[95vw] rounded-2xl bg-violet-950 p-4 md:mx-0 md:w-[85vw]'>
      <div className='flex flex-row'>
        <div className=''>
          <h4 className='ml-4 text-lg text-white md:text-xl'>{question}</h4>
        </div>
        <div className='ml-auto'>
          <IconChevronDown
            className={` rounded-full bg-white dark:bg-slate-600 ${
              active ? 'rotate-180 duration-100' : 'rotate-0 duration-100 '
            }`}
            onClick={() => setActive(!active)}
          />
        </div>
      </div>
      <div
        className={`ml-4  mt-2 flex items-center border-t-2 border-[#5B8FB9] text-left ${
          active ? 'hidden' : 'block '
        }`}
      >
        <p className='text-sm text-white md:text-lg'>{answer}</p>
      </div>
    </div>
  )
}
