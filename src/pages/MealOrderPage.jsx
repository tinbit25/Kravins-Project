import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundImage from '../assets/images/pexels-elevate-12673.webp';

const MealOrderPage = () => {
  const [mealPreference, setMealPreference] = useState('');
  const [numberOfMeals, setNumberOfMeals] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' });
  const [address, setAddress] = useState({ street: '', city: '', zip: '' });
  const [showOptions, setShowOptions] = useState(false);

  const mealOptions = [
    { value: '', label: 'Select your meal preference' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'non-vegetarian', label: 'Non-Vegetarian' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleMealSelect = (option) => {
    setMealPreference(option.value);
    setShowOptions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    // Reset the form after submission
    setMealPreference('');
    setNumberOfMeals(1);
    setPersonalInfo({ name: '', email: '', phone: '' });
    setAddress({ street: '', city: '', zip: '' });
  };

  return (
    <motion.div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.7) 50%),url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="min-h-screen py-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl text-white mx-auto p-8 shadow-lg rounded-lg mt-20 bg-opacity-90">
        <h1 className="text-3xl font-extrabold text-center text-[#C9A581] mb-8">
          Don't Let Food Be the Hardest Part of Leaving Home
        </h1>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10">
          {/* Meal Preference Section */}
          <div className="mb-6 w-full md:w-1/2 relative">
            <h2 className="text-xl font-semibold mb-2">Choose Your Preference</h2>
            <div
              className="w-full p-3 border rounded-md cursor-pointer"
              onClick={() => setShowOptions(!showOptions)}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} // Semi-transparent background
            >
              {mealOptions.find(option => option.value === mealPreference)?.label || mealOptions[0].label}
            </div>
            {showOptions && (
              <ul className="absolute z-10 w-full bg-transparent border border-[#C9A581] rounded-md mt-1">
                {mealOptions.map(option => (
                  <li
                    key={option.value}
                    onClick={() => handleMealSelect(option)}
                    className="p-3 hover:bg-[#C9A581] hover:text-white cursor-pointer"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} // Semi-transparent background for options
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Number of Meals Section */}
          <div className="mb-6 w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Number of Meals</h2>
            <input
              type="number"
              value={numberOfMeals}
              min="1"
              onChange={(e) => setNumberOfMeals(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-[#C9A581]"
            />
          </div>
        </div>
        
        {/* Personal Info Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={personalInfo.name}
              onChange={handleInputChange}
              className="p-3 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-[#C9A581]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={personalInfo.email}
              onChange={handleInputChange}
              className="p-3 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-[#C9A581]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={personalInfo.phone}
              onChange={handleInputChange}
              className="p-3 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-[#C9A581]"
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={address.street}
              onChange={handleAddressChange}
              className="p-3 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-[#C9A581]"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleAddressChange}
              className="p-3 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-[#C9A581]"
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={address.zip}
              onChange={handleAddressChange}
              className="p-3 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-[#C9A581]"
            />
          </div>
        </div>

        {/* Checkout Section */}
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            className="bg-[#C9A581] text-white px-6 py-3 rounded-md hover:bg-opacity-90 focus:outline-none transition duration-300"
          >
            Check Out
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MealOrderPage;