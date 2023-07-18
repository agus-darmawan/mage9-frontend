import CompetitionData from '@/data/CompetitionData'

import CompetitionPage from '@/components/competition/CompetitionPage'

export default function IoTPage() {
  return (
    <main>
      <CompetitionPage content={CompetitionData[2]} />
    </main>
  )
}
