import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../assets/images/Pngtree—black fashion summer hot pot_913336.jpg';
import { Link } from 'react-router-dom';

const packageData = [
  {
    id: 1,
    title: "Trial",
    description: "Experience our meals with a trial package, perfect for first-timers!",
  },
  {
    id: 2,
    title: "Basic",
    description: "Our Basic package offers a variety of meals for a balanced diet.",
  },
  {
    id: 3,
    title: "Standard",
    description: "Our Standard package includes additional gourmet options.",
  },
  {
    id: 4,
    title: "Premium",
    description: "Indulge in our Premium package for an exquisite dining experience.",
  },
];

const Packages = () => {
  return (
    <section 
      className="bg-cover bg-center py-10 pt-96 px-4 -mt-72"
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.8) 50%), url(${bg})` 
      }}
    >
      <motion.div
        className="max-w-5xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 70 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeInOut" }} 
      >
        <h2 className="text-5xl text-[#C9A581] mb-10">Our Packages</h2>
        <p className="text-lg mb-6 text-white">Dining Made Easy</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packageData.map(pkg => (
            <div
              key={pkg.id}
              className="p-4 shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              <div className="border bg-black bg-opacity-35 border-red-100 border-opacity-30 px-6 py-10 text-center">
                <h3 className="text-xl font-semibold mb-4 text-[#BA9774]">{pkg.title}</h3>
                <p>{pkg.description}</p>
                <Link to="/order">
                  <button className="bg-transparent border border-[#BA9774] px-4 py-2 my-5 hover:bg-[#A78D6D]">Get a Package</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-7">*We only deliver between [insert time range]</p>
      </motion.div>
    </section>
  );
};

export default Packages;