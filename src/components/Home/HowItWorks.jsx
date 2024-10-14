import React from 'react';
import Image1 from '../../assets/images/2e157f8443ad1510bf4b6b8b5a2f70d0.jpg';
import Image2 from '../../assets/images/06cc5bedecba3302168aa7f4db22b4ca.jpg';
// import Image3 from '../../assets/images/Pngtree—cooking.jpg';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <section className="py-10 pb-20 bg-[#131314] -mt-9 -mb-72 p-11">
      <div className="max-w-5xl mx-auto text-center m-20">
        <h2 className="Tfont text-4xl font-bold mb-6 text-[#C9A581]">How It Works</h2>
        <p className="text-lg mb-8 text-gray-300">Simple Steps to Delicious Convenience</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Step 1 */}
          <motion.div
            className="p-2 text-white bg-[#333] rounded-t-full rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#444] duration-300"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%),url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.5, 0.1, 0.1, 0.9] }}
            loading="lazy"
          >
            <div className="px-6 py-40 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">1. Select Your Meals</h3>
              <p>
                Dive into our flavorful menu and handpick your favorite dishes.
                Choose a package that satisfies your cravings and fits your lifestyle.
              </p>
            </div>
          </motion.div>
          {/* Step 2 */}
          <motion.div
            className="p-2 text-white bg-[#333] rounded-t-full rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#444] duration-300"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%),url(${Image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.5, 0.1, 0.1, 0.9] }}
            loading="lazy"
          >
            <div className="px-6 py-40 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">2. Easy Checkout & Confirmation</h3>
              <p>
                Place your order in a few easy steps. We’ll confirm your order and
                schedule a delivery time that works best for you.
              </p>
            </div>
          </motion.div>
          {/* Step 3 */}
          <motion.div
            className="p-2 text-gray-300 bg-[#333] rounded-t-full rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#444] duration-300"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%),url(${Image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.5, 0.1, 0.1, 0.9] }}
            loading="lazy"
          >
            
            <div className="px-6 py-40 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">3. Heat & Savor</h3>
              <p className="text-white">
                Your meals arrive fresh and perfectly prepared. Just heat them up and indulge
                in the comforting taste of home—no hassle, no fuss.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default HowItWorks;
