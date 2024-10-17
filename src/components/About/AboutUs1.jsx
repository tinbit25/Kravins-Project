import React from 'react';
import { motion } from 'framer-motion';
import AfricanFood from '../../assets/images/Logo/post1.jpg';

const AboutUs1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="text-white py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <motion.img
          src={AfricanFood}
          alt="African Food"
          className="rounded-tr-full rounded-br-full shadow-lg w-full h-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }} 
        />

        {/* Text Section */}
        <motion.div
          className="max-w-5xl mx-auto p-4 md:p-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false }} 
        >
          {/* Header */}
          <motion.h2
            className="Tfont text-5xl mb-6 text-[#C9A581] text-center"
            variants={itemVariants}
          >
            About Kravinz
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg mb-6 text-center"
            variants={itemVariants}
          >
            At Kravinz, we simplify the food experience for expatriates. Our mission is to provide access to meal plans made with familiar ingredients, helping you feel at home no matter where you are.
          </motion.p>

          {/* Info Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            {/* First Info Box */}
            <motion.div
              className="p-6 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#C9A581]">Our Promise</h3>
              <p>
                We eliminate the challenges of navigating local markets and language barriers. Our seamless culinary solutions save you time and effort, allowing you to focus on settling into your new life.
              </p>
            </motion.div>

            {/* Second Info Box */}
            <motion.div
              className="p-6 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#C9A581]">Cultural Exchange</h3>
              <p>
                By connecting you with familiar flavors, we foster cultural exchange, making it easier to embrace new experiences while enjoying the tastes of home.
              </p>
            </motion.div>
          </motion.div>

          {/* Final Call-to-Action */}
          <motion.p
            className="text-lg mt-8 text-center"
            variants={itemVariants}
          >
            Join us in enhancing your settling-in process with Kravinz, where every meal brings you closer to home!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs1;