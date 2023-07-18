import CompetitionData from '@/data/CompetitionData'

import CompetitionPage from '@/components/competition/CompetitionPage'

export default function RoboticsPage() {
  return (
    <main>
      <CompetitionPage content={CompetitionData[3]} />
    </main>
  )
}
