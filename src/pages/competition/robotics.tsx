import CompetitionPage from '@/components/competition/CompetitionPage'
import CompetitionData from '@/components/data/CompetitionData'

export default function RoboticsPage() {
  return (
    <main>
      <CompetitionPage content={CompetitionData[3]} />
    </main>
  )
}
