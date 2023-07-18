import DevcomTimelineData from '@/components/data/DevcomTimelineData'
import LeftTimeline from '@/components/shared/LeftTimeline'
import RightTimeline from '@/components/shared/RightTimeline'

const colorVariant = {
  appdevColor: 'dark:bg-[#0A4026] bg-[#EFC7C7]',
  gamedevColor: 'dark:bg-[#47075E] bg-[#F6DBC9]',
  iotColor: 'dark:bg-[#4D0434] bg-[#CECCB4]',
  roboticsColor: 'dark:bg-[#0B1462] bg-[#E0AF8F]',
}

interface CompetitionTimelineProps {
  readonly title: string
  readonly name: string
}

const CompetitionTimeline = ({ title, name }: CompetitionTimelineProps) => {
  return (
    <div
      className={`${
        title === 'app'
          ? colorVariant.appdevColor
          : title === 'game'
          ? colorVariant.gamedevColor
          : title === 'iot'
          ? colorVariant.iotColor
          : title === 'robotics'
          ? colorVariant.roboticsColor
          : ''
      } pb-16 md:pt-24`}
    >
      <div className='min-h-screen max-w-full'>
        <div className='mx-auto px-5 text-center text-[#301E67] dark:text-white md:max-w-[50vw]'>
          <h1 className='mb-5 text-4xl font-bold md:text-5xl '>
            Timeline
            <br /> Kompetisi
          </h1>
        </div>
        <div className='flex min-h-[80vh] flex-col items-center justify-center'>
          <h1 className='animate-bounce text-4xl font-bold md:text-5xl'>
            Comming Soon
          </h1>
        </div>
        <div className={title === 'robotics' ? 'hidden' : 'block'}>
          <div className='mx-auto p-2 md:grid md:grid-cols-9'>
            <LeftTimeline
              date={DevcomTimelineData[0].date}
              description={DevcomTimelineData[0].description + ' ' + name}
            />
            <RightTimeline
              date={DevcomTimelineData[1].date}
              description={DevcomTimelineData[1].description + ' ' + name}
            />
            <LeftTimeline
              date={DevcomTimelineData[2].date}
              description={DevcomTimelineData[2].description + ' ' + name}
            />
            <RightTimeline
              date={DevcomTimelineData[3].date}
              description={DevcomTimelineData[3].description + ' ' + name}
            />
            <LeftTimeline
              date={DevcomTimelineData[4].date}
              description={DevcomTimelineData[4].description}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionTimeline
