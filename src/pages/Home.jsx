import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import bgImage from '../assets/images/bg.jpg';

import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import Section4 from '../components/Home/Section4';
import Section5 from '../components/Home/Section5';
import HowItWorks from '../components/Home/HowItWorks';

const Home = () => {
  return (
    <>
      {/* Navigation Links for Smooth Scrolling */}
      
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.4) 50%), url(${bgImage})`,
        }}
      >
        <Section1 />
      </div>
      <HowItWorks id="how-it-works" />
      <Section2 id="section2" />
      <Section3 id="section3" />
      <Section4 id="section4" />
      <Section5 id="section5" />
    </>
  );
};

export default Home;
