import React from 'react';
import streetFood from '../../assets/images/New Picture (1).png';
import WafricaFood from '../../assets/images/west-african-entree-jollof-rice-overhead-view-dish-chicken-shito-sauce-boiled-egg-197234742.webp';
import { motion } from 'framer-motion';

const Section5 = () => {
  return (
    <section className="bg-[#0D0D0D] py-16">
      <div className="p-8">
        <h2 className="Tfont text-5xl text-[#C9A581] mb-10 text-center leading-tight">
          Meal Highlights
        </h2>

        <div className="space-y-8">
          {/* Street Food */}
          <div className="border-b border-gray-600 pb-4 flex w-full">
            {/* Text content slides from the left */}
            <motion.div
              className="my-auto border border-red-50 border-opacity-25 py-80 px-20 mx-5"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <h3 className="text-3xl text-[#C9A581] mb-4">Street Food</h3>
              <p className="text-lg text-gray-300 leading-relaxed ">
                Discover the vibrant street food scene, offering a variety of quick and delicious meals perfect for on-the-go enjoyment. Enjoy favorites like Suya, Akara, and Puff-Puff.
              </p>
            </motion.div>

            {/* Image slides from the right */}
            <motion.img
              className="simg m-auto w-3/6"
              src={streetFood}
              alt="African Food"
              style={{
                filter: 'brightness(50%) contrast(120%)',
              }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* West African Meals */}
          <div className="border-b border-gray-600 pb-4 flex w-full">
            {/* Image slides from the left */}
            <motion.img
              className="simg2"
              src={WafricaFood}
              alt="African Food"
              style={{
                filter: 'brightness(50%) contrast(120%)',
              }}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Text content slides from the right */}
            <motion.div
              className="my-auto border border-red-50 border-opacity-25 py-80 px-20 mx-5"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <h3 className="text-3xl text-[#C9A581] mb-4">West African Meals</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Experience the rich flavors of West Africa, featuring iconic dishes such as Jollof Rice, Egusi Soup, and more. Each meal is crafted with authentic spices and local ingredients.
              </p>
            </motion.div>
          </div>

          {/* East African Meals */}
          <div className="pb-4">
            <h3 className="text-3xl text-[#C9A581] mb-4">East African Meals</h3>
            <p className="text-lg text-gray-300 leading-relaxed italic">
              Coming Soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
