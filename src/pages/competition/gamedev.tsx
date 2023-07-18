import CompetitionData from '@/data/CompetitionData'

import CompetitionPage from '@/components/competition/CompetitionPage'

export default function GamedevPage() {
  return (
    <main>
      <CompetitionPage content={CompetitionData[1]} />
    </main>
  )
}
