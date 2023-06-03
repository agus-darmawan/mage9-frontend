import React from 'react'
import LeftTimeline from './timeline/LeftTimeline'
import RightTimeline from './timeline/RightTimeline'
import { TimelineData } from '@/Data/TimelineData'

export default function Timeline(props:any) {
  return (
    <div>
      <div className=" text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="text-2xl font-extrabold md:text-4xl text-primaryColor1 leading-normal md:leading-relaxed mb-2">Timeline Kompetisi</p>
            <p className="text-sm text-semibold md:text-xl text-black mb-4">
              Adpun timeline dari kegiatan Multimedia dan Game Event 9 adalah sebagai berikut.
            </p>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-full border">
                </div>
                <div className="border-2-2 border-yellow-555 absolute h-full border">
                </div>
                <div>
                  <LeftTimeline 
                    date={TimelineData[0].date}
                    title={TimelineData[0].title}
                    details={TimelineData[0].details}
                  />
                  <RightTimeline
                    date={TimelineData[1].date}
                    title={TimelineData[1].title}
                    details={TimelineData[1].details}
                   />
                  <LeftTimeline
                    date={TimelineData[2].date}
                    title={TimelineData[2].title}
                    details={TimelineData[2].details}
                  />
                  <RightTimeline
                    date={TimelineData[3].date}
                    title={TimelineData[3].title}
                    details={TimelineData[3].details}
                  />
                  <LeftTimeline
                    date={TimelineData[4].date}
                    title={TimelineData[4].title}
                    details={TimelineData[4].details}
                  />
                  <RightTimeline
                    date={TimelineData[5].date}
                    title={TimelineData[5].title}
                    details={TimelineData[5].details}
                  />
                </div>
              </div>
              <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
