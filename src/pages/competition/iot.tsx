import CompetitionPage from '@/components/competition/CompetitionPage'
import CompetitionData from '@/components/data/CompetitionData'

export default function IoTPage() {
  return (
    <main>
      <CompetitionPage content={CompetitionData[2]} />
    </main>
  )
}
