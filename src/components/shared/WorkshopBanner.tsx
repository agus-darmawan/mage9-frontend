interface WorkshopBannerProps {
  readonly title: string
  readonly date: string
  readonly place: string
  readonly price: string
  readonly bordercol: string
  readonly gradient: string
}

export default function WorkshopBanner({
  title,
  date,
  place,
  price,
  bordercol,
  gradient,
}: WorkshopBannerProps) {
  return (
    <div>
      <div className=' container mx-auto mt-10 px-6 text-black'>
        <div className={`rounded-tr-full bg-gradient-to-r ${gradient}`}>
          <h1 className='px-10 py-3 text-xl font-bold text-white md:text-2xl'>
            Workshop {title}
          </h1>
        </div>
        <div
          className={`min-h-[150px] items-center border-l-[15px] ${bordercol} bg-white md:grid md:grid-cols-3`}
        >
          <div className='col-start-1 col-end-2   '>
            <div className='grid-col-3 grid min-h-[15px] items-center md:flex md:flex-col md:justify-center'>
              <div className='2 col-start-1   col-end-2'>
                <h1 className=' bottom-0 text-lg font-bold md:text-2xl lg:text-2xl'>
                  Tanggal
                </h1>
              </div>
              <div className='2 col-start-2   col-end-4'>
                <h2 className='bottom-0 text-sm sm:text-sm md:text-lg lg:text-lg'>
                  {date}
                </h2>
              </div>
            </div>
          </div>
          <div className='col-start-2 col-end-3   '>
            <div className='grid-col-3 grid min-h-[15px] items-center md:flex md:flex-col md:justify-center'>
              <div className='2 col-start-1   col-end-2'>
                <h1 className=' bottom-0 text-lg font-bold md:text-2xl lg:text-2xl'>
                  Tempat
                </h1>
              </div>
              <div className='2 col-start-2   col-end-4'>
                <h2 className='bottom-0 text-sm sm:text-sm md:text-lg lg:text-lg'>
                  {place}
                </h2>
              </div>
            </div>
          </div>
          <div className='col-start-3 col-end-4   '>
            <div className='grid-col-3 grid min-h-[15px] items-center md:flex md:flex-col md:justify-center'>
              <div className='2 col-start-1   col-end-2'>
                <h1 className=' bottom-0 text-lg font-bold md:text-2xl lg:text-2xl'>
                  Biaya
                </h1>
              </div>
              <div className='2 col-start-2   col-end-4'>
                <h2 className='bottom-0 text-sm sm:text-sm md:text-lg lg:text-lg'>
                  {price}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
