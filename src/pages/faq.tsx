import { useState } from 'react'

import FaqData from '@/data/FaqData'

import MainLayout from '@/components/layout/MainLayout'
import Seo from '@/components/Seo'
import FaqComponent from '@/components/shared/FaqComponent'
import Footer from '@/components/shared/Footer'
import { Option } from '@/components/shared/Option'
import Select from '@/components/shared/Select'

const options: Option[] = [
  { label: 'General', value: 'general' },
  { label: 'App Development', value: 'appdev' },
  { label: 'Game Development', value: 'gamedev' },
  { label: 'IoT', value: 'iot' },
]

export default function FAQPage() {
  const [selectedItem, setSelectedItem] = useState<Option | null>(null)
  return (
    <MainLayout>
      <Seo templateTitle='FAQ' />
      <main className='min-h-screen bg-black'>
        <div className='left-0 right-0 top-0 h-[88px] rounded-b-[18px] bg-gradient-to-b from-violet-950 to-violet-800'></div>
        <section className='grid-col-2 container mx-auto pt-32 md:grid'>
          <div className='col-start-1 col-end-2'>
            <h2 className='mx-5 text-xl font-light tracking-[14px] text-slate-500 md:mx-0 md:text-2xl'>
              FAQ
            </h2>
            <h1 className='mx-5 mb-2 text-2xl font-bold text-white md:mx-0 md:text-3xl lg:text-4xl'>
              FREQUENTLY ASKED QUESTION
            </h1>
            <div className='mx-auto h-2 w-[80%] bg-gradient-to-l from-slate-500 to-violet-950 md:mx-0 md:w-[40vw] lg:h-3'></div>
          </div>
          <div className='col-start-2 col-end-3 mx-auto mt-5 flex w-80 items-end justify-center md:ml-auto md:mr-0 md:justify-end'>
            <Select
              placeholder='Select a option'
              selected={selectedItem}
              options={options}
              onChange={(selection: Option) => setSelectedItem(selection)}
            />
          </div>
        </section>
        <section className='pb-10'>
          <div className='container mx-auto mt-10'>
            {FaqData.filter(
              (FaqData) => FaqData.type === selectedItem?.value
            ).map((filteredFaq) => (
              <div key={filteredFaq.id}>
                <FaqComponent
                  question={filteredFaq.question}
                  answer={filteredFaq.answer}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer footerColor='bg-black' lineColor='from-white to-transparent' />
    </MainLayout>
  )
}
