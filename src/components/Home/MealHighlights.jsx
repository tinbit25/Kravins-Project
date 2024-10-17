import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import streetFood from '../../assets/images/New Picture (1).png';
import WafricaFood from '../../assets/images/west-african-entree-jollof-rice-overhead-view-dish-chicken-shito-sauce-boiled-egg-197234742.webp';

const meals = [
  {
    title: 'Street Food',
    description:
      'Discover the vibrant street food scene, offering a variety of quick and delicious meals perfect for on-the-go enjoyment.',
    image: streetFood,
  },
  {
    title: 'West African Meals',
    description:
      'Experience the rich flavors of West Africa, featuring iconic dishes such as Jollof Rice, Egusi Soup, and more.',
    image: WafricaFood,
  },
  {
    title: 'East African Meals',
    description: 'Coming Soon...',
    image: streetFood,
  },
  {
    title: 'South African Meals',
    description:
      'Savor the unique culinary traditions of South Africa, blending indigenous ingredients with international influences.',
    image: WafricaFood,
  },
  {
    title: 'North African Meals',
    description:
      'Enjoy the exotic tastes of North Africa, featuring dishes rich in spices and flavors.',
    image: streetFood,
  },
];

const MealHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default for large screens
  const totalMeals = meals.length;

  // Set the number of slides based on the screen width
  const updateSlidesToShow = () => {
    if (window.innerWidth < 640) {
      setSlidesToShow(1); // 1 slide for small screens
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2); // 2 slides for medium screens
    } else {
      setSlidesToShow(3); // 3 slides for large screens
    }
  };

  useEffect(() => {
    updateSlidesToShow(); // Set initial value based on window width
    window.addEventListener('resize', updateSlidesToShow); // Adjust when resized

    return () => {
      window.removeEventListener('resize', updateSlidesToShow); // Clean up on unmount
    };
  }, []);

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalMeals - slidesToShow : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalMeals - slidesToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-[#0D0D0D] py-16 mb-10">
      <div className="p-8">
        <h2 className="Tfont text-5xl text-[#C9A581] mb-10 text-center">
          Meal Highlights
        </h2>

        <div className="relative overflow-hidden">
          {/* Slider */}
          <motion.div
            className="flex"
            animate={{ x: -currentIndex * (100 / slidesToShow) + '%' }}
            transition={{ ease: 'easeInOut', duration: 0.8 }}
          >
            {meals.map((meal, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2`} // Adjust widths dynamically
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={meal.image}
                    alt={meal.title}
                    className="w-full h-64 object-cover"
                    style={{
                      filter: 'brightness(70%) contrast(110%)',
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-2xl text-[#C9A581] mb-2">
                      {meal.title}
                    </h3>
                    <p className="text-gray-300">{meal.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition"
            onClick={handlePrevClick}
          >
            <FaChevronLeft size={30} />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition"
            onClick={handleNextClick}
          >
            <FaChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MealHighlights;
