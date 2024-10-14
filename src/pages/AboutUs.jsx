import React from 'react'
import Section1 from '../components/About/Section1'
import Ourstory from '../components/About/Ourstory'
import WhatMakesUsDifferent from '../components/About/WhatMakesUsDifferent'
import Picture from '../components/About/Picture'
import OurCommitment from '../components/About/OurCommitment'
import MeetTheTeam from '../components/About/MeetTheTeam'
import BackgroundImage from '../assets/images/8917515a62f05ee4e2838f3b21a098a0.jpg'

const AboutUs = () => {
  return (
    <>
    <div className="bg-cover bg-center"
     style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', 
    }}>
    <Section1/>
    </div>

    <Ourstory />
  <Picture/>
      <WhatMakesUsDifferent />
      
      <OurCommitment />
      <MeetTheTeam />
      
       </>
  )
}

export default AboutUs