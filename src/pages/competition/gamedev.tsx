import CompetitionPage from '@/components/competition/CompetitionPage'
import CompetitionData from '@/components/data/CompetitionData'

export default function GamedevPage() {
  return (
    <main>
      <CompetitionPage content={CompetitionData[1]} />
    </main>
  )
}
