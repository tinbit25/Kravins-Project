import React from 'react';
import Image1 from '../../assets/images/2e157f8443ad1510bf4b6b8b5a2f70d0.jpg';
import Image2 from '../../assets/images/06cc5bedecba3302168aa7f4db22b4ca.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBoxOpen, FaCheckCircle, FaUtensils } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: '1. Select Your Meals',
    description: 'Dive into our flavorful menu and handpick your favorite dishes. Choose a package that satisfies your cravings and fits your lifestyle.',
    icon: <FaBoxOpen className="text-white" />,
    image: Image1,
  },
  {
    id: 2,
    title: '2. Easy Checkout & Confirmation',
    description: 'Place your order in a few easy steps. We’ll confirm your order and schedule a delivery time that works best for you.',
    icon: <FaCheckCircle className="text-white" />,
    image: Image2,
  },
  {
    id: 3,
    title: '3. Heat & Savor',
    description: 'Your meals arrive fresh and perfectly prepared. Just heat them up and indulge in the comforting taste of home—no hassle, no fuss.',
    icon: <FaUtensils className="text-white" />,
    image: Image2,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-10 pb-20 -mb-72 p-4 pt-36 sm:p-11">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="Tfont text-5xl text-[#C9A581] mb-10 leading-tight">How It Works</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">Easy Steps to Get Delicious Meals</p>
        <p className="my-5 max-w-2xl text-xl mx-auto text-white">Follow these simple steps to enjoy freshly prepared meals that cater to your specific dietary needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.map(step => (
            <motion.div
              key={step.id}
              className="p-2 text-white mx-[12%] md:m-0 bg-[#333] rounded-t-full rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#444] duration-300"
              style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%),url(${step.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              initial={{ opacity: 0, y: -100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              loading="lazy"
            >
              <div className=" md:px-6 py-40 rounded-lg shadow-lg text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#C9A581] mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div className="text-center"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: "0.1" }}
        loading="lazy"
      >
        <Link
          to="/menu"
          className="inline-block bg-[#C9A581] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#B89C6A] transition-all duration-300"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
};

export default HowItWorks;