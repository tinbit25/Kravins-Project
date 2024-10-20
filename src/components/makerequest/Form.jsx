import Image from '../../assets/images/Bookpic.png'; 
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    origin: '',
    budget: '',
    dietaryNeeds: 'No',
    service: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        origin: '',
        budget: '',
        dietaryNeeds: 'No',
        service: [],
      });
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative my-72 w-full">
      <div className="hidden md:block w-full">
        <div
          style={{
            backgroundImage: `url(${Image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(50%)',
            height: '500px', 
          }}
          className="absolute inset-0 w-full"
        ></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full h-full">
        <motion.div className="hidden md:block mt-32 z-10">
          <h2 className="text-4xl font-extrabold text-[#C9A581] text-center mb-5">
            Make Your Reservation
          </h2>
          <p className="text-xl text-gray-300 mb-6 text-center max-w-2xl mx-auto">
            Planning an unforgettable dining experience? Whether it's a personal celebration, corporate event, or a special occasion, we are here to make it seamless for you. Fill out the form below, and our team will get in touch to curate a customized experience tailored to your needs.
          </p>
        </motion.div>
        <div className="">
          <motion.div
            className="mt-28 mr-12 ml-5 max-w-full md:max-w-lg p-5 rounded-3xl bg-black bg-opacity-80 z-12"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-3 text-white">
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
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-3">
                <div className="flex-1">
                  <label className="block text-lg mb-3">
                    Do you have any preferences or dietary needs?
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
                <div className="flex-1">
                  <label className="block text-lg mb-3">What service do you need?</label>
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
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-[#C9A581] p-3 rounded-md text-lg text-black font-bold"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
              {error && <p className="text-red-500 text-center mt-3">{error}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Form;
