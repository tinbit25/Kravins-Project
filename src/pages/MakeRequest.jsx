import React, { useEffect } from 'react';
import BackgroundImage from '../assets/images/pexels-elevate-12673.webp';
import Form from '../components/makerequest/Form';
import ScrollToTop from './ScrollToTop';
import { motion } from 'framer-motion';

const MakeRequest = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <>
      <ScrollToTop />
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.9) 50%), url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className="py-10 md:py-20" 
      >
        {/* Animated Heading and Description */}
        <motion.div
          className="text-center mx-4 md:my-20 md:mb-32 pb-4"
          initial={{ opacity: 0, y: -70 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2 }}
        >
          <h1 className=" Tfont text-4xl md:text-5xl font-extrabold text-[#C9A581] my-6">
            Make Your Reservation
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto">
            Planning an unforgettable dining experience? Whether it's a personal celebration, corporate event, or a special occasion, we are here to make it seamless for you. Fill out the form below, and our team will get in touch to curate a customized experience tailored to your needs.
          </p>
        </motion.div>

        {/* Form Component */}
        <Form />
      </div>
    </>
  );
};

export default MakeRequest;
