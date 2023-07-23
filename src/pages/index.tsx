import { IconChevronDown } from '@tabler/icons-react'
import Image from 'next/image'

import MoreButton from '@/components/buttons/MoreButton'
import MainLayout from '@/components/layout/MainLayout'
import Seo from '@/components/Seo'
import BgParticles from '@/components/shared/BgParticles'
import Footer from '@/components/shared/Footer'
import ImageSwipper from '@/components/shared/ImageSwiper'
import LeftCompetitionBanner from '@/components/shared/LeftCompetitionBanner'
import ResponsiveThemeHandler from '@/components/shared/ResponsiveTheme'
import RightCompetitionBanner from '@/components/shared/RightCompetitionBanner'
import { ImageProps, SlideViewProps } from '@/components/shared/SwiperInterface'
import TestimonialCard from '@/components/shared/TestimonialCard'
import WorkshopImageCard from '@/components/shared/WorkshopImageCard'
const imagespath = '/images/homepage/trapezoid/'

const images: ImageProps[] = [
  {
    src: '/images/homepage/swiper/1.png',
    alt: 'exhebition-image',
  },
  {
    src: '/images/homepage/swiper/1.png',
    alt: 'exhebition-image',
  },
  {
    src: '/images/homepage/swiper/1.png',
    alt: 'exhebition-image',
  },
]

const slideView: SlideViewProps[] = [
  {
    media0: 1,
    media768: 1,
    media1024: 1,
    media1280: 1,
  },
]

export default function HomePage() {
  return (
    <MainLayout>
      <Seo />
      <main className='text-[#301E67] dark:text-white'>
        <div className='bg-gradient-radial relative left-0 right-0 top-0 flex min-h-screen items-center justify-center from-[#04040C] to-[#301E67]'>
          <BgParticles />
          <div className='text-center text-white'>
            <h1 className='font-aistrike text-6xl md:text-8xl lg:text-9xl'>
              MAGE 9
            </h1>
            <h1 className='text-xl font-bold md:text-3xl  '>
              Multimedia and Game Event
            </h1>
            <h2 className='mt-12 text-xl font-bold md:text-4xl'>
              "Build <span className='font-normal'>a</span> Better Society{' '}
              <span className='font-normal'>with</span> <br />
              Smart City"
            </h2>
          </div>
        </div>
        <div className='relative z-20 flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black'>
          <div className='container flex flex-col gap-20 lg:grid lg:grid-cols-2    '>
            <div className=' pl-5 text-center md:text-justify'>
              <h1 className=' mb-2 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl'>
                About <br /> Mage
              </h1>
              <div className='mx-auto mb-2 h-2 w-[70%] bg-[#301E67]  md:mx-1 md:mb-8 md:h-3 md:w-[50%]'></div>
              <p className='mb-2 text-sm md:mb-8 md:text-lg lg:text-xl'>
                MAGE ( Multimedia dan Game Event ) adalah suatu serangkaian
                acara yang diadakan oleh Departemen Teknik Komputer Fakultas
                dari FTEIC Institut Teknologi Sepuluh Nopember Surabaya yang
                meliputi perlombaan-perlombaan serta workshop. MAGE juga adalah
                media untuk pelajar dan akademisi dalam mengeksplor kreativitas,
                inovasi, dan kemampuan di berbagai bidang IT.
              </p>
              <div className='mx-auto w-[70%] md:mx-0'>
                <MoreButton link='about' text='Baca Selengkapnya' />
              </div>
            </div>
            <div className=' grid grid-cols-2 gap-5'>
              <div className='col-start-1 col-end-3'>
                <Image
                  src='/images/homepage/about/1.svg'
                  width={1000}
                  height={1000}
                  alt='about-1'
                  className='mx-auto h-auto w-[100%]'
                />
              </div>
              <div className='col-start-1 col-end-2'>
                <Image
                  src='/images/homepage/about/2.svg'
                  width={283}
                  height={274}
                  alt='about-1'
                  className='mx-auto h-full w-[100%]'
                />
              </div>
              <div className='col-start-2 col-end-3'>
                <Image
                  src='/images/homepage/about/3.svg'
                  width={338}
                  height={1000}
                  alt='about-1'
                  className='mx-auto h-auto w-[100%]'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='relative z-40 flex min-h-screen  flex-col items-center justify-start bg-gradient-to-b from-white to-[#B6EADA] dark:from-black dark:to-[#0B1462]'>
          <div className='container mx-auto mt-10'>
            <h1 className=' text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
              Meet Our Mascot!
            </h1>
            <Image
              src='/images/homepage/tyo.svg'
              width={338}
              height={1000}
              alt='maskot'
              className='mx-auto -mt-8 h-auto'
            />
            <div className='mx-auto -mt-14 w-80 rounded-full bg-[#301E67]'>
              <h1 className='py-2 text-center text-xl font-semibold text-white md:text-2xl lg:text-3xl'>
                T.y.o
              </h1>
            </div>
            <h1 className='py-2 text-center text-xl font-bold md:text-2xl lg:text-3xl'>
              The Young Observer
            </h1>
            <h1 className='mx-5 py-2 text-center text-sm sm:mx-auto md:max-w-5xl md:text-lg lg:text-xl'>
              T.y.o merupakan seekor kucing dari masa depan yang menyukai
              hal-hal yang berbau teknologi. Pada saat ia melakukan percobaan
              mesin waktu, ia membuat kesalahan yang membuatnya terlempar ke
              masa lalu. Dan kini ia tengah mengumpulkan orang orang berbakat
              untuk membantunya untuk kembali ke masa depan
            </h1>
          </div>
          <div className='absolute bottom-0'>
            <h1 className='text-center text-sm md:text-lg lg:text-xl '>
              Introducting
            </h1>
            <h1 className='text-center text-xl font-bold md:text-2xl lg:text-3xl'>
              Our Main Event
            </h1>
            <IconChevronDown className='mx-auto h-10 w-10 animate-bounce text-6xl font-bold' />
          </div>
        </div>
        <div className='bg-gradient-radial flex min-h-screen flex-col justify-center gap-10 from-[#5B8FB9] from-[0%] to-[#B6EADA] to-[50%] text-black dark:from-[#5B8FB9] dark:to-[#0B1462] dark:text-white md:gap-24'>
          <RightCompetitionBanner
            gradient='from-[#87CBB9] to-[#569DAA] dark:from-[#3352C0] dark:to-[#0B1462]'
            title='ROBOTICS'
            description='Robotic Competition merupakan lomba pengoperasian robot yang diadakan untuk siswa/i SD dan SMP'
            link='competition/robotics'
          />
          <LeftCompetitionBanner
            gradient='from-[#C38154] to-[#FFC26F] dark:from-[#47075E] dark:to-[#C64BF1]'
            title='GAME DEV'
            description='Game Development Competition merupakan lomba pembuatan game
              yang diadakan untuk siswa/i SMA/SMK/sederajat dan mahasiswa
              yang memiliki minat dan bakat dalam mengembangkan permainan.'
            link='competition/gamedev'
          />
        </div>
        <div className=' bg-gradient-radial relative flex min-h-screen flex-col justify-center gap-10 from-[#5B8FB9] from-[0%] to-[#B6EADA] to-[50%] text-black dark:from-[#5B8FB9] dark:to-[#0B1462] dark:text-white md:gap-24'>
          <RightCompetitionBanner
            gradient='from-[#F7A76C] to-[#EC7272] dark:from-[#16BC6C] dark:to-[#0A4026]'
            title='APP DEV'
            description='Application Development Competition merupakan sebuah
              kompetisi yang bertujuan untuk mendorong siswa/i
              SMA/SMK/sederajat dan mahasiswa dalam mengembangkan
              kreativitas, inovasi, dan pemikiran kritis dalam
              pengembangan aplikasi.'
            link='competition/appdev'
          />
          <LeftCompetitionBanner
            gradient='from-[#898121] to-[#E7B10A] dark:from-[#4D0334] dark:to-[#CB3699]'
            title='IOT'
            description='Internet of Things (IoT) Competition merupakan cabang
              kompetisi MAGE 9 yang berfokus pada pembuatan alat yang
              dapat terintegrasi dengan koneksi nirkabel untuk terhubung
              dengan alat lain yang dikendalikan.'
            link='competition/iot'
          />
          <div className='h-24 min-w-[100vw] bg-gradient-to-b  from-[#B6EADA] to-white dark:from-[#0B1462] dark:to-[#03001C]'></div>
        </div>
        <div className='min-h-screen bg-gradient-to-b from-white to-[#B6EADA] dark:from-[#03001C] dark:to-[#0B1462]'>
          <div className='container mx-auto flex flex-col items-start justify-start gap-5 px-8  pt-16 md:grid md:grid-cols-2'>
            <div className='col-start-1 col-end-2'>
              <h1 className='text-left text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
                Exhibition & <br /> Talkshow
              </h1>
            </div>
            <div className='col-start-2 col-end-3'>
              <div className='flex flex-col items-center justify-center'>
                <p className='mb-2 text-justify text-xs md:mb-8 md:text-sm lg:text-lg'>
                  Exhibition merupakan pameran yang akan diikuti oleh seluruh
                  peserta yang mengikuti tahap final. Para peserta akan
                  menampilkan hasil karya nya yang telah mereka buat dan para
                  pengunjung dapat mengunjungi semua pameran dari tiap tim
                  cabang lomba apapun.
                </p>
              </div>
            </div>
          </div>
          <div className='mx-auto mt-10 px-8 md:mt-20 md:max-w-[60%]'>
            <ImageSwipper
              images={images}
              height={474}
              width={607}
              slideView={slideView}
              spaceBetween={0}
            />
          </div>
          <div className='-mt-28 md:-mt-16'>
            <ResponsiveThemeHandler type='mddark'>
              <Image
                src={imagespath + 'md/dark.svg'}
                width={1000}
                height={100}
                alt='trapezoid'
                className='mx-auto -mt-5 hidden w-[62%] dark:md:block'
              />
            </ResponsiveThemeHandler>
            <ResponsiveThemeHandler type='mdlight'>
              <Image
                src={imagespath + 'md/light.svg'}
                width={1000}
                height={100}
                alt='trapezoid'
                className='mx-auto -mt-5 w-[62%] md:block dark:md:hidden'
              />
            </ResponsiveThemeHandler>
            <ResponsiveThemeHandler type='smdark'>
              <Image
                src={imagespath + 'sm/dark.svg'}
                width={1000}
                height={1000}
                alt='trapezoid'
                className=' mx-auto -mt-6 hidden w-full dark:block md:hidden md:dark:hidden'
              />
            </ResponsiveThemeHandler>
            <ResponsiveThemeHandler type='smlight'>
              <Image
                src={imagespath + 'sm/light.svg'}
                width={1000}
                height={1000}
                alt='trapezoid'
                className=' mx-auto -mt-6 block w-full dark:hidden md:hidden'
              />
            </ResponsiveThemeHandler>
          </div>
          <div className='h-24 min-w-[100vw] bg-gradient-to-b  from-transparent to-[#5B8FB9] dark:to-[#03001C]'></div>
        </div>
        <div className='bg-gradient-radial flex min-h-screen flex-col items-center justify-center from-[#B6EADA] from-[0%] to-[#5B8FB9] to-[50%] py-10 dark:from-[#0B1462] dark:to-[#03001C]'>
          <div className='container flex flex-col gap-10 text-white md:grid md:grid-cols-7'>
            <div className='col-start-1 col-end-4  px-5 md:px-10'>
              <div className='flex flex-col items-center justify-center md:items-start'>
                <h1 className='mb-2 text-center text-2xl font-bold sm:text-3xl md:mb-8 md:text-left md:text-4xl lg:text-5xl'>
                  Workshop
                </h1>
                <p className='mb-2 text-justify text-xs md:mb-8 md:text-sm lg:text-lg'>
                  Workshop merupakan sebuah realisasi dari komitmen MAGE 9 dalam
                  berbagi ilmu pengetahuan dan pengalaman dalam menciptakan dan
                  mengembangkan sebuah teknologi digital. Kegiatan workshop ini
                  diadakan karena MAGE 9 menyadari betapa pentingnya human
                  investment di bidang teknologi digital yang kian hari semakin
                  berkembang dan krusial peranannya dalam membangun masa depan
                  dan karakter bangsa.
                </p>
                <MoreButton link='workshop' text='Lihat Selengkapnya' />
              </div>
            </div>
            <div className='col-start-4 col-end-8 '>
              <div className='mx-2 md:mx-0'>
                <div className='grid grid-cols-3 gap-2 md:gap-8'>
                  <div className='col-start-1 col-end-2 '>
                    <WorkshopImageCard
                      title='MULTI'
                      subtitle='MEDIA'
                      image='1'
                    />
                  </div>
                  <div className='col-start-2 col-end-3'>
                    <WorkshopImageCard title='IOT' subtitle=' ' image='2' />
                  </div>
                  <div className='col-start-3 col-end-4'>
                    <WorkshopImageCard title='ROBO' subtitle='TICS' image='3' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='min-h-screen bg-gradient-to-b from-[#0B1462] from-[10%] via-[#03001C] via-[10%] to-[#0B1462] to-[100%]'>
          <div className='bg-gradient-radial flex min-h-screen flex-col items-center justify-center from-[#B6EADA] from-[0%] to-[#5B8FB9] to-[50%] py-10 dark:from-[#0B1462] dark:to-[#03001C]'>
            <h1 className='text-2xl font-bold text-white md:text-4xl lg:text-5xl'>
              Testimoni
            </h1>
            <h1 className='mb-5 text-2xl font-bold md:text-4xl lg:mb-10 lg:text-5xl'>
              Apa Kata Mereka?{' '}
            </h1>
            <div className='mdgrid-cols-3 container flex flex-col gap-10 text-center md:grid md:gap-2 lg:gap-10'>
              <div className='col-start-1 col-end-2 w-full'>
                <TestimonialCard
                  name='Amanda Katarina Santoso'
                  title='Juara 2 Olimpiade MAGE 8'
                  image='1'
                  testimonial='Gamenya seru kak, mulai dari babak penyisihan yang sesuai dengan topik, lalu cerdas cermatnya itu bikin deg-degan banget karena harus cepet-cepetan tapi hitungannya harus benar juga, dan babak codingnya bikin tegang sih.'
                />
              </div>
              <div className='col-start-2 col-end-3  w-full'>
                <TestimonialCard
                  name='Abyan Dhia Pratama'
                  title='Juara 1 Game Dev MAGE 6'
                  image='2'
                  testimonial='Sebagai alumni MAGE 5 & 6 menurut saya MAGE sangat berhasil mengadakan acara sebagai media unjuk gigi para indie dev, dan menurut saya tema dari tiap mage yang selalu berganti adalah ide yang keren, karena darisana para indie dev dapat terpacu untuk memberikan sebuah solusi dari tema yang ada dengan cara kreatif & fun.'
                />
              </div>
              <div className='col-start-3 col-end-4 w-full'>
                <TestimonialCard
                  name='Rezky Dwisantika P'
                  title='Juara 1 APP Dev MAGE 7'
                  image='3'
                  testimonial='Pengalaman ikut MAGE 7 tentunya sangat memorable dan tentu saja keren karena membuka jalan lain untuk masuk ITS selain jalur akademik. Semangat lagi panitia MAGE selanjutnya, semoga kegiatannya MAGE ini bisa terus berjalan dengan kedepanya dan sukses!.'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#5B8FB9] to-[#301E67] dark:from-[#03001C] dark:to-[#301E67]'>
          <h1 className='pt-[10vh] text-center text-3xl font-extrabold tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl'>
            OUR PARTNER
          </h1>
          <div className='mx-auto flex h-[70vh] min-w-[90vw] flex-col items-center justify-center rounded-[40px] bg-gradient-to-b from-[#B6EADA]/30 to-transparent md:mt-10 md:min-w-[80vw]'>
            <h2 className='text-center text-2xl text-white md:text-3xl lg:text-6xl'>
              Comming Soon
            </h2>
          </div>
        </div>
        <Footer
          footerColor='bg-[#301E67] dark:bg-[#301E67]'
          lineColor='from-white dark:from-[#5B8FB9] to-transparent'
        />
      </main>
    </MainLayout>
  )
}
