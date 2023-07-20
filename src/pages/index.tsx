import MainLayout from '@/components/layout/MainLayout'
import Seo from '@/components/Seo'

export default function HomePage() {
  return (
    <MainLayout>
      <Seo />
      <main className='flex min-h-screen flex-col items-center justify-center'>
        <div className='w-80 '></div>
      </main>
    </MainLayout>
  )
}
