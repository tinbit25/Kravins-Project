import React from 'react';
import { motion } from 'framer-motion';
import AfricanFood from '../../assets/images/New Picture (3).png';
import { Link } from 'react-router-dom';

const MeetOurChefs = () => {
  const chefData = [
    {
      name: 'Chef Alex',
      image: AfricanFood,
      description: 'Chef Alex focuses on healthy, sustainable meals that nourish the body and soul, while never compromising on taste.',
    },
    {
      name: 'Chef Michael',
      image: AfricanFood,
      description: 'Chef Michael is a pastry expert, renowned for his intricate desserts and creative use of local ingredients.',
    },
    {
      name: 'Chef Sofia',
      image: AfricanFood,
      description: 'Chef Sofia specializes in plant-based dishes, crafting hearty and delicious meals that appeal to both vegans and non-vegans alike.',
    },
  ];

  return (
    <section className="p-8 text-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.5, 0.1, 0.1, 0.9] }}
      >
        <h2 className="Tfont text-5xl text-[#C9A581] mb-10 leading-tight">Meet Our Chefs</h2>

        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Image Gallery */}
          <motion.div className='flex flex-wrap justify-center items-center max-w-6xl'>
            {chefData.map((chef, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-4 mb-8"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.5, 0.1, 0.1, 0.9] }}
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="meetchef w-full h-60 object-cover shadow-lg rounded-md"
                />
                <h3 className="text-2xl font-semibold mt-4 mb-2 text-[#C9A581]">{chef.name}</h3>
                <p className="text-sm">{chef.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <Link to='/menu'>
            <motion.button
              className="bg-[#C9A581] text-black px-6 py-3 mt-6 rounded-lg shadow-lg hover:bg-[#A78D6D] transition-transform transform hover:scale-105 duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.5, 0.1, 0.1, 0.9] }}
            >
              Book your chef
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default MeetOurChefs;