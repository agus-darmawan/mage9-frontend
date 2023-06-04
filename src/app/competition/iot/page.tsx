import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import CompetitionHero from '@/components/competition/Hero'
import AboutCompetition from '@/components/competition/About'
import Rules from '@/components/competition/Rules'
import Timeline from '@/components/competition/Timeline'
import Faq1 from '@/components/competition/Faq'

import iotBackgraund from "../../../assets/images/backgraund/iot.png"
import iotLogo from "../../../assets/images/complogo/iot.png"
import iotAboutImage from "../../../assets/images/about/about-home.png"
import {CompetitionData} from "../../../Data/CompetitionData"

export default function IoT() {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <CompetitionHero 
          image = {iotBackgraund}
          logo  = {iotLogo}
          text  = {CompetitionData[2].title}
          about = "/competition/appdev/#aboutIOT"
          />
      </div>
      <div className="bg-gradient-to-b from-[#FFD57E] to-white">
        <div id='aboutiot'>
            <AboutCompetition 
            description ={CompetitionData[2].decription}
            image = {iotAboutImage}
            />
        </div>
        <div>
            <Rules 
            catagory={CompetitionData[2].catagory}
            guidebook={CompetitionData[2].guidebook}
            />
        </div>
        <div>
            <Timeline />
            <Faq1 />
        </div>
      </div>  
    </div>
  )
}
