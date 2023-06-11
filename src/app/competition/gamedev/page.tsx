import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import CompetitionHero from '@/components/competition/Hero'
import AboutCompetition from '@/components/competition/About'
import Rules from '@/components/competition/Rules'
import Timeline from '@/components/competition/Timeline'
import Faq1 from '@/components/competition/Faq'

import gamedevBackgraund from "../../../assets/images/backgraund/game.png"
import gamedevLogo from "../../../assets/images/complogo/game.png"
import gamedevAboutImage from "../../../assets/images/about/about-home.png"
import {CompetitionData} from "../../../Data/CompetitionData"
import { GameDevFaq } from '@/Data/Faq'

export default function GameDev() {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <CompetitionHero 
          image = {gamedevBackgraund}
          logo  = {gamedevLogo}
          text  = {CompetitionData[1].title}
          about = "/competition/appdev/#aboutgamedev"
          />
      </div>
      <div className="bg-gradient-to-b from-[#FFCDAB] to-white">
        <div id='aboutappdev'>
            <AboutCompetition 
            description ={CompetitionData[1].decription}
            image = {gamedevAboutImage}
            />
        </div>
        <div>
            <Rules 
            catagory={CompetitionData[1].catagory}
            guidebook={CompetitionData[1].guidebook}
            />
        </div>
        <div>
            <Timeline />
            <Faq1 
            question1={GameDevFaq[0].question}
            answer1={GameDevFaq[0].answer}
            question2={GameDevFaq[1].question}
            answer2={GameDevFaq[1].answer}
            question3={GameDevFaq[2].question}
            answer3={GameDevFaq[2].answer}
            question4={GameDevFaq[3].question}
            answer4={GameDevFaq[3].answer}
            question5={GameDevFaq[4].question}
            answer5={GameDevFaq[4].answer}
          />
        </div>
      </div>
    </div>
  )
}
