import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../assets/images/Pngtree—black fashion summer hot pot_913336.jpg'
const Section2 = () => {
  return (
    <section 
    
        className="bg-cover bg-center py-10 pt-64 px-4 -mt-72"
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.8) 50%), url(${bg})` 
        }}
      > {/* Reduced vertical padding */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-10 p"
        initial={{ opacity: 0, x: 200 }} // Initial state
        whileInView={{ opacity: 1, x: 0 }} // Animate to this state when in view
        transition={{ duration: 2, ease: [0.5, 0.05, 0.1, 0.3] }} // Custom easing effect
      >
        <h2 className="Tfont pt-11 text-4xl font-bold mb-4 text-[#C9A581]">Our Packages</h2> {/* Reduced bottom margin */}
        <p className="text-lg mb-6 text-white">Dining Made Easy</p> {/* Reduced bottom margin */}
        <div className="grid grid-cols-1 md:grid-cols-4 -mb-11">
          {/* Trial Package */}
          <motion.div
            className="p-4 text-white shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <div className="border border-red-100 border-opacity-30 px-6 py-16  text-center"> {/* Reduced vertical padding */}
              <h3 className="text-xl font-semibold mb-4  p-3 text-[#BA9774]">Trial</h3>
              <p>
                Experience our meals with a trial package, perfect for first-timers!
              </p>
              <button className="bg-transparent border px-4 py-2 hover:bg-[#A78D6D] my-5">
                Get a Package
              </button>
            </div>
          </motion.div>

          {/* Basic Package */}
          <motion.div
            className="p-4 text-white shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <div className="border border-red-100 border-opacity-30 px-6 py-16  shadow-lg text-center"> {/* Reduced vertical padding */}
              <h3 className="text-xl font-semibold mb-4 p-3 text-[#BA9774]">Basic</h3>
              <p>
                Our Basic package offers a variety of meals for a balanced diet.
              </p>
              <button className="text-white border border-[#BA9774] px-4 py-3 my-5 hover:bg-[#A78D6D]">
                Get a Package
              </button>
            </div>
          </motion.div>

          {/* Standard Package */}
          

          
          <motion.div
            className="p-4 text-white shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <div className=" border border-red-100 border-opacity-30 px-6 py-16 shadow-lg text-center"> {/* Reduced vertical padding */}
              <h3 className="text-xl text-[#BA9774] p-3 font-semibold mb-4">Standard</h3>
              <p className="mb-4">Our Standard package includes additional gourmet options.</p>
              <button className="bg-transparent border border-[#BA9774] px-4 py-3 my-5 hover:rotate-6 hover:duration-100">
                Get a Package
              </button>
            </div>
          </motion.div>
          {/* Premium Package */}
        
          <motion.div
            className="p-4 text-white shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <div className=" border border-red-100 border-opacity-30 px-6 py-16 shadow-lg text-center mx-auto"> {/* Reduced vertical padding */}
              <h3 className="text-xl text-[#BA9774] p-3 font-semibold mb-4 ">Premium</h3>
              <p className="mb-4">Indulge in our Premium package for an exquisite dining experience.</p>
              <button className="bg-transparent border border-[#BA9774] px-4 py-3 my-3 hover:rotate-6 hover:duration-100">
                Get a Package
              </button>
            </div>
          </motion.div>
        </div>
        <p className="text-sm text-gray-400 mt-7 ">*We only deliver between [insert time range]</p>
      </motion.div>
    </section>
  );
};

export default Section2;
