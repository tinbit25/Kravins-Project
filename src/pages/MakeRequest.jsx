import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundImage from '../assets/images/pexels-elevate-12673.webp';
import Image from '../assets/images/Bookpic.png';

const MakeRequest = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    origin: '',
    budget: '',
    dietaryNeeds: 'No',
    service: []
  });

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'service') {
      setFormData((prev) => {
        const newService = prev.service.includes(value)
          ? prev.service.filter((item) => item !== value)
          : [...prev.service, value];
        return { ...prev, service: newService };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.9) 50%),url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment:'fixed'
        }}
        className="h-1/2 py-10"
      >

        {/* Heading and Description */}
        <div className="text-center my-48">
          <h1 className="text-5xl font-extrabold text-[#C9A581] my-6">
            Make Your Reservation
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Planning an unforgettable dining experience? Whether it's a personal celebration, corporate event, or a special occasion, we are here to make it seamless for you. Fill out the form below, and our team will get in touch to curate a customized experience tailored to your needs.
          </p>
        </div>
     
        {/* Image */}
        <img 
          className="w-full"
          src={Image}
          alt="African Food"
        />
        
        {/* Form Section with Animation */}
        <motion.div
          className="max-w-xl p-5 bookform form"
          initial={{ x: '-100%', opacity: 0 }} // Start off the screen
          animate={{ x: 0, opacity: 1 }} // Slide in
          transition={{ duration: 0.5 }} // Animation duration
        >
          <h2 className="text-4xl font-extrabold text-[#C9A581] text-center mb-5">
            Book Your Chef
          </h2>
          <p className="text-xl text-gray-300 mb-6 text-center">
            Savor Now and Satisfy Your Kravinz!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 text-white">
            {/* Name Field */}
            <div>
              <label className="block text-lg mb-3" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#C9A581] border-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-lg mb-3" htmlFor="phone">
                Phone Number (preferably WhatsApp)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#C9A581] border-none"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Origin Field */}
            <div>
              <label className="block text-lg mb-3" htmlFor="origin">
                Where Are You From?
              </label>
              <input
                type="text"
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#C9A581] border-none"
                placeholder="Enter your location"
              />
            </div>

            {/* Budget Field */}
            <div>
              <label className="block text-lg mb-3" htmlFor="budget">
                Budget
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#C9A581] border-none"
                placeholder="Enter your budget"
              />
            </div>

            {/* Dietary Needs */}
            <div className="flex space-x-3">
              <div>
                <label className="block text-lg mb-3">
                  Do you have any preferences<br/> or dietary needs?
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="yes"
                      name="dietaryNeeds"
                      value="Yes"
                      checked={formData.dietaryNeeds === 'Yes'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="no"
                      name="dietaryNeeds"
                      value="No"
                      checked={formData.dietaryNeeds === 'No'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div>

              {/* Service Options */}
              <div>
                <label className="block text-lg mb-3">
                  What service do you need?
                </label>
                <div className="flex flex-col space-y-4">
                  {['Ingredients sourcing', 'Kitchen assistant', 'Hire a chef'].map(
                    (service) => (
                      <div key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          id={service}
                          name="service"
                          value={service}
                          checked={formData.service.includes(service)}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor={service}>{service}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#C9A581] text-black font-bold rounded-lg hover:bg-[#b5906b] transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default MakeRequest;