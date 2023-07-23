import { IconChevronDown } from '@tabler/icons-react'
import React, { useState } from 'react'

import styles from '../../styles/Select.module.css'

import { Option } from '@/components/shared/Option'

interface SelectProps {
  placeholder?: string
  options: Option[]
  selected: Option | null
  onChange: (selection: Option) => void
}

export const Select: React.FC<SelectProps> = ({
  placeholder,
  selected,
  options,
  onChange,
}) => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <div className='relative z-30 w-full text-white'>
      <div
        className='text-md flex min-w-full cursor-pointer flex-row items-center justify-between rounded-[20px] border-2 border-[#5B8FB9] bg-[#301E67] px-5  py-2'
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className='pr-5 text-left text-lg'>
          <h1>{selected ? selected.label : placeholder}</h1>
        </div>
        <div>
          <div className='rounded-full bg-white  text-black'>
            <IconChevronDown
              className={`${
                showOptions
                  ? 'rotate-180 duration-100'
                  : 'rotate-0 duration-100'
              }`}
            />
          </div>
        </div>
      </div>
      {showOptions && (
        <div className='absolute min-w-full overflow-hidden rounded-[20px]  border-2 border-[#5B8FB9] bg-[#301E67]'>
          {options.map((option) => (
            <div
              onClick={() => {
                onChange(option)
                setShowOptions(false)
              }}
              key={option.value}
              className={`w-full cursor-pointer border-b-2 px-2 py-[2px] duration-75 hover:bg-gradient-to-r hover:from-slate-400/50 hover:to-transparent ${styles.lastnoborder}`}
            >
              <h2 className='min-w-full px-2 py-1 text-lg'>{option.label}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
