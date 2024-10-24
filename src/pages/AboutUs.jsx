import React from 'react'
import Aboutus from '../components/About/Aboutus'
import Ourstory from '../components/About/Ourstory'
import WhatMakesUsDifferent from '../components/About/WhatMakesUsDifferent'
import Picture from '../components/About/Picture'
import OurCommitment from '../components/About/OurCommitment'
import MeetTheTeam from '../components/About/MeetTheTeam'
import AboutKravinz from '../components/About/AboutKravinz'
import ScrollToTop from './ScrollToTop';


const AboutUs = () => {
  return (
    <div className='overflow-hidden'>
    <ScrollToTop /> 
    <Aboutus/>
    <AboutKravinz/>
    <Ourstory />
  <Picture/>
      <WhatMakesUsDifferent />
      <OurCommitment />
      <MeetTheTeam />
      
       </div>
  )
}

export default AboutUs