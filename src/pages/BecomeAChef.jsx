import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundImage from '../assets/images/pexels-elevate-12673.webp';
import ScrollToTop from './ScrollToTop';

const BecomeAChef = () => {
  const [formData2, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    availability: '',
    cookingLevel: '',
    reason: [],
    additionalComments: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData2, [name]: value });
  };

  const handleMultiSelectChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedReasons = prevData.reason.includes(value)
        ? prevData.reason.filter((item) => item !== value)
        : [...prevData.reason, value];
      return { ...prevData, reason: updatedReasons };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const response = await fetch('http://localhost:5000/submitchefform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData2),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
  
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        location: '',
        availability: '',
        cookingLevel: '',
        reason: [],
        additionalComments: '',
      });
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <motion.div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.7) 50%), url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="min-h-screen py-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ScrollToTop />
      <div className="max-w-3xl text-white mx-auto p-8 shadow-lg rounded-lg bg-opacity-90">
        <h1 className=" Tfont text-3xl font-bold text-center text-[#C9A581] mb-8">
          Become a Kravinz Chef
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData2.name}
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
              value={formData2.phone}
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
              value={formData2.location}
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
              value={formData2.availability}
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
              value={formData2.cookingLevel}
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
                    checked={formData2.reason.includes(option)}
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
              value={formData2.additionalComments}
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