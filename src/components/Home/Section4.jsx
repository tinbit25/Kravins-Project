import React from 'react';
import { motion } from 'framer-motion';
import AfricanFood from '../../assets/images/New Picture (3).png';
// import AfricanFood2 from '../../assets/images/pexels-elevate-1267320 (1).jpg';

const Section4 = () => {
  return (
    <section className=" p-8">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }} // Initial state
        whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
        transition={{ duration: 1.5, ease: [0.5, 0.1, 0.1, 0.9] }} // More gradual easing effect
      >
        <h2 className="Tfont text-4xl font-bold mb-6 text-[#C9A581]">Meet Our Chefs</h2>

        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <motion.div
            className="w-96 h-96 mb-4 md:mb-0 md:mr-6"
            initial={{ scale: 0 }} // Initial scale for image
            whileInView={{ scale: 1 }} // Animate to full scale when in view
            transition={{ duration: 1.2, ease: [0.5, 0.1, 0.1, 0.9] }} // Slower scale effect
          >
            <img
              src={AfricanFood} // Replace with the actual image path
              alt="Chef Wisdom"
              className="w-full h-full object-cover rounded-tr-full rounded-bl-full shadow-lg"
            />
          </motion.div>

          <motion.div
            className="text-left text-white"
            initial={{ opacity: 0 }} // Initial state
            whileInView={{ opacity: 1 }} // Animate to this state when in view
            transition={{ duration: 1.2, ease: [0.5, 0.1, 0.1, 0.9] }} // Smooth, slower opacity change
          >
            <h3 className="text-2xl font-semibold mb-2 text-[#C9A581]">Chef Wisdom</h3>
            <p className="mb-4">
              Chef Wisdom brings over 15 years of culinary experience, specializing in diverse cuisines and passionate about delivering memorable dining experiences. Their dedication to quality and creativity in the kitchen ensures that every meal is exceptional.
            </p>
            <button className="bg-[#C9A581] text-black px-4 py-2 rounded-lg hover:bg-[#A78D6D]">
              Get a Package
            </button>
          </motion.div>
          <motion.div
            className="w-96 h-96 mb-4 md:mb-0 md:mr-6"
            initial={{ scale: 0 }} // Initial scale for image
            whileInView={{ scale: 1 }} // Animate to full scale when in view
            transition={{ duration: 1.2, ease: [0.5, 0.1, 0.1, 0.9] }} // Slower scale effect
          >
            <img
              src={AfricanFood} // Replace with the actual image path
              alt="Chef Wisdom"
              className="w-full h-full object-cover rounded-tr-full rounded-bl-full shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Section4;
