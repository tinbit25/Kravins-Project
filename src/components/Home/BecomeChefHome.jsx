import { FaUtensils } from "react-icons/fa";
import React from 'react';
import BecomeChef from '../../assets/images/chef.jpg';
import streetFood from '../../assets/images/pexels-dilara-yilmaz-988605972-28766047.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const BecomeChefHome = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  const handleNavigate2 = () => {
    navigate("/become-chef");
  };

  return (
    <section className="py-16 text-white overflow-hidden">
      <div className="p-8">
        <div className="space-y-8">

          {/* Street Food Section */}
          <div className="pb-8 flex flex-col lg:flex-row space-y-5 w-full">
            {/* Text content slides from the left */}
            <motion.div
              className="my-auto border border-red-50 border-opacity-25 py-14 px-10 mx-5 lg:w-1/2"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div id="become-chef" className="relative py-4">
                <div className="max-w-7xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex justify-center items-center mb-4"
                  >
                    <FaUtensils className="text-[#C9A581] text-6xl" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-4xl font-extrabold"
                  >
                    Become a Chef!
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="mt-4 max-w-2xl text-xl mx-auto text-gray-300"
                  >
                    Do you have a passion for cooking? Dream of creating exquisite dishes that bring joy to others? Join the culinary world and unleash your creativity in the kitchen. Start your journey today!
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="mt-10"
                  >
                    <button
                      onClick={handleNavigate2}
                      className="inline-block bg-[#C9A581] font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#af8d64] transition-all duration-300"
                    >
                      Start Your Journey
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Image slides from the right */}
            <motion.img
              className="roundimg m-auto w-full lg:w-1/2"//roundimg in index.css
              src={BecomeChef }
              alt="BecomeChef "
              style={{
                filter: 'brightness(50%) contrast(120%)',
              }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* About Kravinz Section */}
          <div className="pb-4 flex flex-col lg:flex-row space-y-5 w-full">
            {/* Image slides from the left */}
            <motion.img
              className=" roundimg2 m-auto w-full lg:w-1/2"//roundimg2 in index.css
              src={streetFood}
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
              className="my-auto border border-red-50 border-opacity-25 py-32 px-10 mx-5 lg:w-1/2"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold">About Kravinz</h2>
                <p className="mt-5 text-lg">
                  At Kravinz, we simplify the food experience for expatriates by providing meal plans cooked with familiar ingredients. Our mission is to make settling into a new country easier while fostering cultural exchange through food.
                </p>
                <button
                  onClick={handleNavigate}
                  className="mt-6 px-6 py-3 bg-[#C9A581] font-semibold rounded hover:bg-[#b58c69] transition duration-300"
                >
                  Learn More About Us
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BecomeChefHome;