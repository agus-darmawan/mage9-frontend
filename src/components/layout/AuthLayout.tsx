import style from '../../styles/AuthLayout.module.css'

import BgParticles from '@/components/shared/BgParticles'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div
        className={`flex ${style.bgauth} relative min-h-screen min-w-full items-center justify-center`}
      >
        <BgParticles />
        {children}
      </div>
    </>
  )
}
