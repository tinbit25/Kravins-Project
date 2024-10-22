import React from 'react'
import Section1 from '../components/About/Section1'
import Ourstory from '../components/About/Ourstory'
import WhatMakesUsDifferent from '../components/About/WhatMakesUsDifferent'
import Picture from '../components/About/Picture'
import OurCommitment from '../components/About/OurCommitment'
import MeetTheTeam from '../components/About/MeetTheTeam'
import AboutUs1 from '../components/About/AboutUs1'
import ScrollToTop from './ScrollToTop';


const AboutUs = () => {
  return (
    <div className='overflow-hidden'>
          <ScrollToTop /> 
    <Section1/>
    <AboutUs1/>
    <Ourstory />
  <Picture/>
      <WhatMakesUsDifferent />
      <OurCommitment />
      <MeetTheTeam />
      
       </div>
  )
}

export default AboutUs