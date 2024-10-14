import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundImage from '../assets/images/pexels-elevate-12673.webp';

const BecomeAChef = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    availability: '',
    cookingLevel: '',
    reason: [],
    additionalComments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => {
      if (prevData.reason.includes(value)) {
        return { ...prevData, reason: prevData.reason.filter((item) => item !== value) };
      } else {
        return { ...prevData, reason: [...prevData.reason, value] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    alert('Form submitted successfully!'); 
    console.log(formData); // Check the collected form data in console
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
      <div className="max-w-3xl text-white mx-auto p-8 shadow-lg rounded-lg">
        <h1 className="Tfont text-3xl font-bold text-center text-[#C9A581] mb-8">
          Become a Kravinz Chef
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
              placeholder="Your Name"
            />
          </div>

          {/* Phone Input */}
          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">Phone Number (preferably WhatsApp)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Location Input */}
          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">Where are you from?</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
              placeholder="Your Location"
            />
          </div>

          {/* Availability Selection */}
          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">What is your availability?</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
            >
              <option value="">Select your availability</option>
              <option value="Full-time (40 hours and above/week)">Full-time (40 hours and above/week)</option>
              <option value="Full-time (below 40 hours/week)">Full-time (below 40 hours/week)</option>
              <option value="Part-time (below 20 hours/week)">Part-time (below 20 hours/week)</option>
            </select>
          </div>

          {/* Cooking Level Selection */}
          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">What is your level of cooking?</label>
            <select
              name="cookingLevel"
              value={formData.cookingLevel}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
            >
              <option value="">Select your cooking level</option>
              <option value="I know how to cook">I know how to cook</option>
              <option value="I have been cooking for people (as a business)">I have been cooking for people (as a business)</option>
              <option value="I am a professional chef (gone to a catering school)">I am a professional chef (gone to a catering school)</option>
            </select>
          </div>

          {/* Reason for Joining Kravinz */}
          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">Why do you want to join Kravinz?</label>
            <div className="flex flex-col">
              {["I need the extra money", "I love cooking", "Just exploring"].map((option) => (
                <label key={option} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.reason.includes(option)}
                    onChange={handleMultiSelectChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Additional Comments Section */}
          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">Additional Comments</label>
            <textarea
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
              placeholder="Any additional information..."
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-[#C9A581] text-white px-6 py-3 rounded-md hover:bg-opacity-90 focus:outline-none transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default BecomeAChef;
