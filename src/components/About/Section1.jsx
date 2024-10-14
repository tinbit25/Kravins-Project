import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils } from 'react-icons/fa';
import BackgroundImage from '../../assets/images/8917515a62f05ee4e2838f3b21a098a0.jpg';

const Section1 = () => {
  const delay = 0; // Adjust delay as needed

  return (
    <section className="relative py-20 px-6 text-white mb-48">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 h-screen "
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }} // Scale effect
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay for darkening the background */}
      </motion.div>

      <div className="relative max-w-5xl mx-auto text-center mb-16">
        {/* Section Heading with Sliding Effect */}
        <motion.h2
          className="Tfont text-6xl font-extrabold text-[#C9A581] drop-shadow-lg my-16 mt-36"
          initial={{  opacity: 0,scale:1.5 }} // Start off-screen
          animate={{ opacity: 1 ,scale:1}} // Slide in and fade in
          transition={{
            duration: 2,
            delay: delay,
          }}
        >
          About Us

          <div className="flex justify-center my-auto mb-14">
          <FaUtensils className="text-6xl text-[#C9A581]" />
        </div>
        </motion.h2>

        {/* Icon for Visual Appeal */}
       

        
      </div>
    </section>
  );
};

export default Section1;
