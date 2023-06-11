import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import CompetitionHero from '@/components/competition/Hero'
import AboutCompetition from '@/components/competition/About'
import Rules from '@/components/competition/Rules'
import Timeline from '@/components/competition/Timeline'
import Faq1 from '@/components/competition/Faq'

import appdevBackgraund from "../../../assets/images/backgraund/app.png"
import appdevLogo from "../../../assets/images/complogo/app.png"
import appdevAboutImage from "../../../assets/images/about/about-home.png"

import {CompetitionData} from "../../../Data/CompetitionData"
import { AppDevFaq } from '@/Data/Faq'

export default function AppDev() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="relatife z-10 w-full">
          <Navbar />
        </div>
        <div className="-z-10">
        <CompetitionHero 
          image = {appdevBackgraund}
          logo  = {appdevLogo}
          text  = {CompetitionData[0].title}
          about = "/competition/appdev/#aboutappdev"
          />
        </div>       
      </div>
      <div className="bg-gradient-to-b from-[#F0E59F] to-white">
        <div id='aboutappdev'>
          <AboutCompetition 
            description ={CompetitionData[0].decription}
            image = {appdevAboutImage}
          />
        </div>
        <div>
          <Rules 
          catagory={CompetitionData[0].catagory}
          guidebook={CompetitionData[0].guidebook}
          />
        </div>
        <div>
          <Timeline  />
          <Faq1 
            question1={AppDevFaq[0].question}
            answer1={AppDevFaq[0].answer}
            question2={AppDevFaq[1].question}
            answer2={AppDevFaq[1].answer}
            question3={AppDevFaq[2].question}
            answer3={AppDevFaq[2].answer}
            question4={AppDevFaq[3].question}
            answer4={AppDevFaq[3].answer}
            question5={AppDevFaq[4].question}
            answer5={AppDevFaq[4].answer}
          />
        </div>
      </div>
    </div>
  )
}
