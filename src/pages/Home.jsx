import React from 'react';
import bgImage from '../assets/images/bg.jpg';
import { motion } from 'framer-motion';

import TasteOfHome from '../components/Home/TasteOfHome';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import Section4 from '../components/Home/Section4';
import Section5 from '../components/Home/Section5';
import HowItWorks from '../components/Home/HowItWorks';

const Home = () => {
  return (
    <>
      <motion.div
        className="h-screen flex items-center justify-center relative overflow-hidden" // Center content and allow overflow
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0, 
        }}
      >
        {/* Background Image with Scaling Effect */}
        <motion.div
          className="absolute inset-0" // Cover the entire parent
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }} // Slightly scale up
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1, // Ensure it's behind other content
          }}
        />
        
        {/* Text Section */}
        <div className="relative z-10"> {/* Ensure text is above the gradient */}
          <TasteOfHome />
        </div>
      </motion.div>

      <HowItWorks id="how-it-works" />
      <Section2 id="section2" />
      <Section3 id="section3" />
      <Section4 id="section4" />
      <Section5 id="section5" />
    </>
  );
};

export default Home;
