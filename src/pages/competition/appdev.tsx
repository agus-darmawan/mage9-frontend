import CompetitionPage from '@/components/competition/CompetitionPage'
import CompetitionData from '@/components/data/CompetitionData'

export default function AppdevPage() {
  return (
    <main>
      <CompetitionPage content={CompetitionData[0]} />
    </main>
  )
}
