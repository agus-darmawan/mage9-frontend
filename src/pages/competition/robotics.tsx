import CompetitionHero from '@/components/competition/CompetitionHero'
import MainLayout from '@/components/layout/MainLayout'
import Seo from '@/components/Seo'
export default function RoboticsPage() {
  return (
    <MainLayout>
      <Seo templateTitle='Robotics' />
      <CompetitionHero title='ROBOTICS' />
    </MainLayout>
  )
}
