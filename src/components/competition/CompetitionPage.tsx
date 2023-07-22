import CompetitionDetails from '@/components/competition/CompetitionDetails'
import CompetitionHero from '@/components/competition/CompetitionHero'
import CompetitionTeknis from '@/components/competition/CompetitionTeknis'
import CompetitionTimeline from '@/components/competition/DevcomTimeline'
import MainLayout from '@/components/layout/MainLayout'
import Seo from '@/components/Seo'
import Footer from '@/components/shared/Footer'

const footerColor = {
  appdevColor: 'dark:bg-[#0A4026] bg-[#EFC7C7]',
  gamedevColor: 'dark:bg-[#47075E] bg-[#F6DBC9]',
  iotColor: 'dark:bg-[#4D0434] bg-[#CECCB4]',
  roboticsColor: 'dark:bg-[#0B1462] bg-[#E0AF8F]',
}

interface CompetitionPageProps {
  readonly content: {
    readonly title: string
    readonly subtitle: string
    readonly name: string
    readonly description: string
    readonly catagory: string
  }
}

const CompetitionPage = ({ content }: CompetitionPageProps) => {
  return (
    <MainLayout>
      <Seo templateTitle={content.title.toUpperCase()} />
      <main>
        <CompetitionHero
          title={content.title.toUpperCase()}
          subtitle={content.subtitle}
        />
        <CompetitionDetails
          title={content.title.split(' ')[0]}
          description={content.description}
        />
        <CompetitionTeknis
          title={content.title.split(' ')[0]}
          catagory={content.catagory}
        />
        <CompetitionTimeline
          title={content.title.split(' ')[0]}
          name={content.name}
        />
        <div
          className={` ${
            content.title === 'app dev'
              ? footerColor.appdevColor
              : content.title === 'game dev'
              ? footerColor.gamedevColor
              : content.title === 'iot'
              ? footerColor.iotColor
              : content.title === 'robotics'
              ? footerColor.roboticsColor
              : ''
          } relative z-20`}
        >
          <Footer lineColor='from-white to transparent' footerColor='inherit' />
        </div>
      </main>
    </MainLayout>
  )
}
export default CompetitionPage
