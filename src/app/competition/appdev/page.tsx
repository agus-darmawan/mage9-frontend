import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import CompetitionHero from '@/components/competition/Hero'
import AboutCompetition from '@/components/competition/About'

import appdevBackgraund from "../../../assets/images/backgraund/app.png"
import appdevLogo from "../../../assets/images/complogo/app.png"
import appdevAboutImage from "../../../assets/images/about/about-home.png"
import {CompetitionData} from "../../../Data/CompetitionData"

export default function AppDev() {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <CompetitionHero 
          image = {appdevBackgraund}
          logo  = {appdevLogo}
          text  = {CompetitionData[0].title}
          about = "/competition/appdev/#aboutappdev"
          />
      </div>
      <div id='aboutappdev'>
        <AboutCompetition 
          description ={CompetitionData[0].decription}
          image = {appdevAboutImage}
        />
      </div>
    </div>
  )
}
