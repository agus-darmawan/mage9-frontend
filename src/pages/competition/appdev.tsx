import CompetitionData from '@/data/CompetitionData'

import CompetitionPage from '@/components/competition/CompetitionPage'

export default function AppdevPage() {
  return (
    <main>
      <CompetitionPage content={CompetitionData[0]} />
    </main>
  )
}
