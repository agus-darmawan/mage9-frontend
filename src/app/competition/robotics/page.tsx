import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import CompetitionHero from '@/components/competition/Hero'
import AboutCompetition from '@/components/competition/About'
import Rules from '@/components/competition/Rules'
import Timeline from '@/components/competition/Timeline'
import Faq1 from '@/components/competition/Faq'

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
      <div className="bg-gradient-to-b from-[#DCF0FA] to-white">
        <div id='aboutrobotics'>
            <AboutCompetition 
            description ={CompetitionData[3].decription}
            image = {roboticsAboutImage}
            />
        </div>
        <div className="">
            <Rules 
            catagory={CompetitionData[3].catagory}
            guidebook={CompetitionData[3].guidebook}
            />
        </div>
        <div className="">
            <Timeline />
            <Faq1 />
        </div>
      </div>
    </div>
  )
}
