import CompetitionHero from '@/components/competition/CompetitionHero'
import CompetitionData from '@/components/data/CompetitionData'

export default function AppdevPage() {
  return (
    <div>
      <CompetitionHero
        title={CompetitionData[0].title}
        subtitle={CompetitionData[0].subtitle}
      />
    </div>
  )
}
