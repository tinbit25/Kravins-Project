import React, { useState, useEffect } from "react";

const WhatMakesUsDifferent = () => {
  // State to keep track of the current visible section
  const [currentIndex, setCurrentIndex] = useState(0);

  // Content data
  const content = [
    {
      title: "Expanding Culinary Diversity",
      text1:
        "We enable collaboration between hotels and local restaurants to offer diverse, personalized meal experiences for their guests, blending comfort with exploration.",
      text2:
        "Guests can enjoy global and local cuisines from the comfort of their accommodations, providing a true culinary journey without leaving the hotel.",
    },
    {
      title: "Seamless Collaboration for Vendors",
      text1:
        "We offer restaurants and chefs the chance to reach new audiences by partnering with large hotels and guest houses. Niche vendors can expand their market while keeping focus on their specialties.",
      text2:
        "This collaboration benefits everyone: hotels enhance guest experience, vendors gain exposure, and customers enjoy diverse meal options.",
    },
    {
      title: "Tailored Meal Plans for Institutions",
      text1:
        "We make meal plan customization easy for both individual customers and institutions. Connect with the restaurants you love and enjoy a diverse range of meal options.",
      text2:
        "Whether you're a company, a tourist agency, or an individual, you can curate meals from different vendors all in one plan.",
    },
    {
      title: "Understanding Meal Segments",
      text1:
        "We categorize meals based on consumption patterns—fast food for impulse buys, fine dining for occasions, and snacks for rounding out meal plans.",
      text2:
        "This helps us focus on the right segments, ensuring that every meal plan is thoughtfully designed.",
    },
    {
      title: "Testing Packages for Restaurants and Chefs",
      text1:
        "Restaurants and chefs can promote their brands with testing packages, allowing customers to explore new meals that could be added to their meal plans.",
      text2:
        "These packages create opportunities for chefs to showcase their skills and for customers to try exciting new options.",
    },
  ];

  // Handle sliding left and right
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically change slide every 5 seconds (5000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]); // Runs whenever currentIndex changes

  return (
    <section className="what-makes-us-different pt-60 pb-10 px-60 relative">
      {/* Section Header */}
      <h2 className="Tfont text-4xl font-bold text-center text-[#C9A581] mb-12">
        What Makes Us Different?
      </h2>

      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Mapping through the content array to display each section */}
          {content.map((item, index) => (
            <div
              key={index}
              className={`min-w-full p-8 shadow-md rounded-lg transition-transform duration-500 ${
                currentIndex === index ? "scale-105" : "scale-95"
              }`}
            >
              <h3 className="text-xl font-semibold text-[#C9A581] text-center mb-4">
                {item.title}
              </h3>
              <p className="text-white leading-relaxed mb-3 text-center">
                {item.text1}
              </p>
              <p className="text-white leading-relaxed text-center">
                {item.text2}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Previous and Next buttons */}
      <div className="absolute text-5xl top-1/2 left-0 transform -translate-y-1/2 pl-5">
        <button
          onClick={handlePrev}
          className=" hover:scale-150 hover:duration-150 text-gray-200 py-2 px-2 rounded-lg transform"
        >
          <span className="text-6xl font-light">&#60;</span> {/* Left arrow icon */}
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-5">
  <button
    onClick={handleNext}
    className="hover:scale-150 text-gray-200 py-2 px-2 rounded-lg transform"
  >
    <span className="text-6xl font-light">&#62;</span>
  </button>
</div>

      
    </section>
  );
};

export default WhatMakesUsDifferent;
