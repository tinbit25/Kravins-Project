import React from 'react';
import { motion } from 'framer-motion';
import AfricanFood from '../../assets/images/Jollof_Rice_with_Stew.jpg';

/**
 * OurStory Component
 * 
 * This component presents the story of the company with an image and descriptive text. 
 * It uses Framer Motion for smooth animations and Tailwind CSS for styling and responsiveness.
 * The content and layout adapt based on screen size, displaying images and text with smooth transitions.
 */
const OurStory = () => {
  return (
    <div className='px-4 md:px-20 text-white'>
      {/* Container with responsive padding */}
      <div className="py-32 mx-auto flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-7">
        
        {/* Image section for small screens */}
        <motion.img 
          className="w-3/4 md:w-1/4 rounded-lg shadow-lg"
          src={AfricanFood}
          alt="African Food"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />

        {/* Text section */}
        <div className="flex flex-col items-center text-center px-4 md:px-28">
          {/* Title with smooth transition */}
          <motion.h2 
            className="Tfont font-extrabold text-4xl mb-6 text-[#C9A581]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Story
          </motion.h2>
          
          {/* Subtitle with smooth transition */}
          <motion.p 
            className="text-xl font-semibold text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <strong>We are FOREIGNERS helping FOREIGNERS</strong>
          </motion.p>
          
          {/* Description 1 */}
          <motion.p 
            className="text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We are 3 foreigners in Rwanda who have seen the need for a model like Kravinz. Our mission is to unite cultures through the universal language of food, bridging the gap for foreigners by offering a taste of home and a way to culinary exploration.
          </motion.p>
          
          {/* Description 2 */}
          <motion.p 
            className="text-lg leading-relaxed mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            We believe that every meal shared is an opportunity to foster connection and understanding. With passion and purpose, we empower individuals to savor the richness of diversity, one dish at a time—enriching lives and households one kitchen at a time.
          </motion.p>
        </div>

        {/* Image section for larger screens */}
        <motion.img 
          className="w-3/4 md:w-1/4 rounded-lg shadow-lg"
          src={AfricanFood}
          alt="African Food"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
};

export default OurStory;
