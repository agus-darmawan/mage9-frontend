import Image from 'next/image'
import Link from 'next/link'

import MainLayout from '@/components/layout/MainLayout'
import Seo from '@/components/Seo'
import Footer from '@/components/shared/Footer'
import SpeakerCard from '@/components/shared/SpeakerCard'
import WorkshopBanner from '@/components/shared/WorkshopBanner'

export default function workshop() {
  return (
    <MainLayout>
      <Seo templateTitle='Workshop' />
      <main>
        <div className='flex flex-col text-[#301E67] dark:text-white'>
          <div className='left-0 right-0 top-0 z-10 h-24 bg-black/70'></div>
          <div className='relative flex min-h-[80vh] flex-col items-center justify-center bg-white dark:bg-[#03001C] md:min-h-[85vh] md:justify-end'>
            <h1 className='font-aistrike z-20 text-5xl md:text-7xl lg:text-8xl'>
              Workshop
            </h1>
            <h2 className='z-20 mb-10 text-lg font-bold md:mb-28 md:text-2xl lg:text-3xl'>
              Multimedia and Game Event
            </h2>
            <h3 className='z-20 -mb-52 text-lg font-bold md:mb-5 md:text-4xl'>
              "Build <span className='font-normal'>a</span> Better Society{' '}
              <span className='font-normal'> with </span>Smart City"
            </h3>
            <div className='absolute bottom-0 flex flex-col'>
              <Image
                src='/images//workshop/bg/workshop.svg'
                width={1920}
                height={1080}
                priority={true}
                alt='bg-workshop'
                className='hidden min-h-[60vh] object-cover md:block md:dark:hidden '
              />
              <Image
                src='/images/workshop/bg/workshop-sm-dark.svg'
                width={768}
                height={1024}
                priority={true}
                alt='bg-workshop'
                className='hidden min-h-[60vh] object-cover dark:block md:hidden md:dark:hidden'
              />
              <Image
                src='/images/workshop/bg/workshop-dark.svg'
                width={1920}
                height={1080}
                priority={true}
                alt='bg-workshop'
                className='hidden  min-h-[60vh] object-cover md:dark:block'
              />
              <Image
                src='/images/workshop/bg/workshop-sm-light.svg'
                width={768}
                height={1024}
                priority={true}
                alt='bg-workshop'
                className='block min-h-[60vh] object-cover dark:hidden md:hidden'
              />
            </div>
          </div>
        </div>
        <div className='relative flex min-h-screen flex-col items-center justify-center bg-[#CBEAF8] dark:bg-[#301E67]'>
          <div className='mx-8 rounded-3xl bg-gradient-to-b from-[#50B8E7] to-[#0076AB] px-8 py-10 md:mx-16 md:px-12 md:py-16'>
            <h1 className='mb-2 text-2xl font-bold sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl'>
              Workshop
            </h1>
            <p className='text-justifytext-sm font-light sm:text-xl md:text-2xl'>
              Workshop merupakan sebuah realisasi dari komitmen MAGE 9 dalam
              berbagi ilmu pengetahuan dan pengalaman dalam menciptakan dan
              mengembangkan sebuah teknologi digital. Kegiatan workshop ini
              diadakan karena MAGE 9 menyadari betapa pentingnya human
              investment di bidang teknologi digital yang kian hari semakin
              berkembang dan krusial peranannya dalam membangun masa depan dan
              karakter bangsa. Kegiatan workshop ini terdiri atas tiga workshop
              berbeda, yaitu workshop multimedia, workshop IoT, dan workshop
              robotik. Kegiatan workshop dapat diikuti oleh siswa, mahasiswa,
              dan masyarakat umum.
            </p>
          </div>
          <Image
            src='/images/workshop/bg/bg-workshop-2.svg'
            width={1920}
            height={1080}
            alt='bg-workshop'
            className='absolute bottom-0 z-40 hidden min-h-[30vh] object-cover md:left-0 md:block md:dark:hidden'
          />
          <Image
            src='/images/workshop/bg/bg-workshop-2-dark.svg'
            width={1920}
            height={1080}
            alt='bg-workshop'
            className='absolute bottom-0 z-40 hidden min-h-[30vh] object-cover md:left-0 dark:md:block'
          />
          <Image
            src='/images/workshop/bg/bg-workshop-2-sm.svg'
            width={1920}
            height={1080}
            alt='bg-workshop'
            className='absolute bottom-0 z-40 block min-h-[20vh] object-cover dark:hidden md:left-0 md:hidden'
          />
          <Image
            src='/images/workshop/bg/bg-workshop-2-dark-sm.svg'
            width={1920}
            height={1080}
            alt='bg-workshop'
            className='absolute bottom-0 z-40 min-h-[20vh] object-cover dark:block md:left-0 md:hidden md:dark:hidden'
          />
        </div>
        <div className='flex min-h-screen  flex-col items-center justify-center bg-gradient-to-b from-[#CBEAF8] to-[#4FB2E2] dark:from-[#301E67] dark:to-[#4FB2E2]'>
          <h1 className='mb-2 text-2xl font-bold sm:text-3xl md:mb-2 md:text-4xl lg:text-5xl'>
            Pemateri
          </h1>
          <h1 className='font-aistrike mb-10 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl'>
            Workshop
          </h1>
          <div className='container mx-auto gap-10 md:grid md:grid-cols-3 '>
            <div className='col-start-1 col-end-2  '>
              <SpeakerCard
                title='Multimedia'
                name='Kenanya Kaendra'
                description='FreePass Teknik Komputer 2021'
                archivment='Juara 1 Game Dev, Mage 6'
                image='ken.svg'
                gradient='from-[#F7A76C] to-[#EC7272]'
              />
            </div>
            <div className='col-start-2 col-end-3  '>
              <SpeakerCard
                title='IoT'
                name='Commming Soon'
                description='Commig Soon'
                archivment='Coming Soon'
                image='dummy.svg'
                gradient='from-[#FBF17F] to-[#E7B10A]'
              />
            </div>
            <div className='col-start-3 col-end-4 '>
              <SpeakerCard
                title='Robotics'
                name='Commming Soon'
                description='Commig Soon'
                archivment='Coming Soon'
                image='dummy.svg'
                gradient='from-[#87CBB9] to-[#569DAA]'
              />
            </div>
          </div>
        </div>
        <div className='min-h-screen bg-gradient-to-b from-[#4FB2E2] to-[#53B9E7] pb-20 dark:bg-[#4FB2E2] dark:to-[#301E67]'>
          <h1 className='mb-2 text-center text-2xl font-bold sm:text-3xl md:mb-2 md:text-4xl lg:text-5xl'>
            Save the Date!
          </h1>
          <WorkshopBanner
            title='Multimedia'
            date='29 Juli & 5 Agustus 2023'
            place='Online - Zoom Meeting'
            price='Free'
            bordercol='border-[#F7A76C]'
            gradient='from-[#F7A76C] to-[#EC7272]'
          />
          <WorkshopBanner
            title='IoT'
            date='3 & 9 September 2023'
            place='Theater A - ITS'
            price='Rp 35.000'
            bordercol='border-[#FBF280]'
            gradient='from-[#FBF280] to-[#E7B10B]'
          />
          <WorkshopBanner
            title='Robotics'
            date='10 & 16 September 2023'
            place='Theater A - ITS'
            price='Rp 35.000'
            bordercol='border-[#87CBBA]'
            gradient='from-[#87CBBA] to-[#569DAA]'
          />
          <Link href='auth/login'>
            <div className='mx-auto mt-10  w-max rounded-full bg-white px-5 py-2 text-[#301E67] hover:bg-slate-400 hover:text-white md:px-20'>
              <h1 className='text-center text-2xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl'>
                Register Now!
              </h1>
            </div>
          </Link>
        </div>
      </main>
      <Footer
        footerColor='bg-[#4FB2E2] dark:bg-[#301E67]'
        lineColor='from-white dark:from-[#5B8FB9] to-transparent'
      />
    </MainLayout>
  )
}
