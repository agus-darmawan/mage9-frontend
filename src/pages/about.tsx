import MainLayout from '@/components/layout/MainLayout'
import Seo from '@/components/Seo'
import BgParticles from '@/components/shared/BgParticles'
import Footer from '@/components/shared/Footer'
import ImageSwipper from '@/components/shared/ImageSwiper'
import { ImageProps, SlideViewProps } from '@/components/shared/SwiperInterface'
import YotubePlayer from '@/components/shared/YotubePlayer'

const images: ImageProps[] = [
  {
    src: '/images/about/swiper/1.svg',
    alt: 'about-image-1',
  },
  {
    src: '/images/about/swiper/2.svg',
    alt: 'about-image-2',
  },
  {
    src: '/images/about/swiper/3.svg',
    alt: 'about-image-3',
  },
  {
    src: '/images/about/swiper/4.svg',
    alt: 'about-image-4',
  },
  {
    src: '/images/about/swiper/5.svg',
    alt: 'about-image-5',
  },
  {
    src: '/images/about/swiper/6.svg',
    alt: 'about-image-6',
  },
  {
    src: '/images/about/swiper/7.svg',
    alt: 'about-image-7',
  },
  {
    src: '/images/about/swiper/8.svg',
    alt: 'about-image-8',
  },
]

const slideView: SlideViewProps[] = [
  {
    media0: 1,
    media768: 2,
    media1024: 3,
    media1280: 4,
  },
]

export default function AboutPage() {
  return (
    <MainLayout>
      <Seo templateTitle='About' />
      <BgParticles />
      <div className='bg-gradient-to-b from-[#B6EADA] to-[#5B8FB9] dark:from-[#03001C] dark:to-[#301E67]'>
        <div className='container mx-auto flex min-h-screen flex-col items-center justify-center'>
          <div className='mx-10 mb-10 text-center text-[#301E67] dark:text-white sm:mx-auto md:max-w-lg lg:max-w-6xl'>
            <h1 className='font-aistrike text-5xl md:text-7xl lg:text-8xl'>
              MAGE 9
            </h1>
            <h2 className='text-lg font-bold md:text-2xl lg:text-3xl '>
              Multimedia and Game Event
            </h2>
            <p>
              MAGE ( Multimedia dan Game Event ) adalah suatu serangkaian acara
              yang diadakan oleh Departemen Teknik Komputer Fakultas dari FTEIC
              Institut Teknologi Sepuluh Nopember Surabaya yang meliputi
              perlombaan-perlombaan serta workshop. MAGE juga adalah media untuk
              pelajar dan akademisi dalam mengeksplor kreativitas, inovasi, dan
              kemampuan di berbagai bidang IT.
            </p>
          </div>
          <div className='container mx-auto'>
            <ImageSwipper
              images={images}
              height={270}
              width={480}
              slideView={slideView}
              spaceBetween={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-[#5B8FB9] to-[#301E67] dark:from-[#301E67] dark:to-[#04011E] '>
        <div className='flex min-h-screen flex-col items-center justify-center'>
          <h1 className='mb-5 text-center text-5xl font-extrabold tracking-widest text-white md:text-7xl'>
            Video <br /> Profile
          </h1>
          <div className='container z-30 flex max-w-sm flex-col items-center justify-center md:max-w-lg lg:max-h-[40vw] lg:max-w-6xl'>
            <YotubePlayer
              videoUrl='https://www.youtube.com/watch?v=7e90gBu4pas'
              width='90%'
              height='50vw'
            />
          </div>
        </div>
      </div>
      <Footer
        footerColor='bg-[#301E67] dark:bg-[#04011E]'
        lineColor='from-[#5B8FB9] dark:from-[#1D6427] to-transparent'
      />
    </MainLayout>
  )
}
