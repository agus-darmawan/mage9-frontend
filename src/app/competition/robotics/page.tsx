import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import CompetitionHero from '@/components/competition/Hero'
import AboutCompetition from '@/components/competition/About'

import roboticsBackgraund from "../../../assets/images/backgraund/robotics.png"
import roboticsLogo from "../../../assets/images/complogo/robotics.png"
import roboticsAboutImage from "../../../assets/images/about/about-home.png"
import {CompetitionData} from "../../../Data/CompetitionData"

export default function IoT() {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <CompetitionHero 
          image = {roboticsBackgraund}
          logo  = {roboticsLogo}
          text  = {CompetitionData[3].title}
          about = "/competition/robotics/#aboutrobotics"
          />
      </div>
      <div id='aboutrobotics'>
        <AboutCompetition 
          description ={CompetitionData[3].decription}
          image = {roboticsAboutImage}
        />
      </div>
      
    </div>
  )
}
