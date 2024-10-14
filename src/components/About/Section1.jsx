import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import BackgroundImage from '../../assets/images/8917515a62f05ee4e2838f3b21a098a0.jpg'


const Section1 = () => {
  return (
    <section
      className="relative py-20 px-6 text-white"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Creates a parallax effect
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for darkening the background */}
      
      <div className="relative max-w-5xl mx-auto text-center mb-16">
        {/* Section Heading */}
        <h2 className=" Tfont text-6xl font-extrabold  text-[#C9A581] drop-shadow-lg my-16 mt-36">About Us</h2>

        {/* Icon for Visual Appeal */}
        <div className="flex justify-center my-auto mb-14">
          <FaUtensils className="text-6xl text-[#C9A581]" />
        </div>

        {/* Our Story */}
        <div></div>
      </div>
    </section>
  );
};

export default Section1;
