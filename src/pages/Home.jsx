import {React,useEffect} from 'react';
import bgImage from '../assets/images/BackgroungPictures/HomePageBg.jpg';
import { motion } from 'framer-motion';

import TasteOfHome from '../components/Home/TasteOfHome';
import Packages from '../components/Home/Packages';
import Section3 from '../components/Home/Section3';
import MeetOurChefs from '../components/Home/MeetOurChefs';
import MealHighlights from '../components/Home/MealHighlights';
import HowItWorks from '../components/Home/HowItWorks';
import BecomeChefHome from '../components/Home/BecomeChefHome';

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
      <Packages id="Packages" />
      <Section3 id="section3" />
      <MeetOurChefs id="MeetOurChefs" />
      <BecomeChefHome/>
      <MealHighlights id="MealHighlights" />
    </>
  );
};

export default Home;
