import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import CompetitionHero from '@/components/competition/Hero'
import AboutCompetition from '@/components/competition/About'
import Rules from '@/components/competition/Rules'
import Timeline from '@/components/competition/Timeline'

import gamedevBackgraund from "../../../assets/images/backgraund/game.png"
import gamedevLogo from "../../../assets/images/complogo/game.png"
import gamedevAboutImage from "../../../assets/images/about/about-home.png"
import {CompetitionData} from "../../../Data/CompetitionData"

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
            <Timeline 
            />
        </div>
      </div>
    </div>
  )
}
