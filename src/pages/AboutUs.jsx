import React from 'react'
import Section1 from '../components/About/Section1'
import Ourstory from '../components/About/Ourstory'
import WhatMakesUsDifferent from '../components/About/WhatMakesUsDifferent'
import Picture from '../components/About/Picture'
import OurCommitment from '../components/About/OurCommitment'
import MeetTheTeam from '../components/About/MeetTheTeam'
import AboutUs1 from '../components/About/AboutUs1'
import BackgroundImage from '../assets/images/8917515a62f05ee4e2838f3b21a098a0.jpg'
import ScrollToTop from './ScrollToTop';


const AboutUs = () => {
  return (
    <div className='overflow-hidden'>
          <ScrollToTop /> {/* Ensure this is placed inside Router */}

    <div className="bg-cover bg-center "
     style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', 
    }}>
    <Section1/>
    </div>
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