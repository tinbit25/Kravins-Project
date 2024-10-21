import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundImage from '../assets/images/BackgroungPictures/BecomeChefBg.jpg';
import sideImage from '../assets/images/pexels-yente-van-eynde-1263034-2403391.jpg';
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
  const [error, setError] = useState('');

  const handleChange = (e) => {
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
    <div className='overflow-hidden'>
      <motion.div
      
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.7) 50%), url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className="min-h-full py-10 px-6"
        initial={{ opacity: 0,scaleX:1.1 }}
        animate={{ opacity: 1,scaleX:1 }}
        transition={{ duration: 1 }}
      >
        <div className="my-56">
        <h1 className="Tfont text-5xl font-bold text-center text-[#C9A581] ">
          Cook with Kravinz
        </h1>
        <img
        className='mx-auto my'
    loading="lazy"
    decoding="async"
    width="240"
    height="240"
    src="https://wgl-dsites.net/benoit/wp-content/uploads/2021/03/img_2.png"
    alt=""
    srcSet="https://wgl-dsites.net/benoit/wp-content/uploads/2021/03/img_2.png 240w, https://wgl-dsites.net/benoit/wp-content/uploads/2021/03/img_2-150x150.png 150w, https://wgl-dsites.net/benoit/wp-content/uploads/2021/03/img_2-210x210.png 210w"
    sizes="(max-width: 240px) 100vw, 240px"
/>
</div>

      </motion.div>
      <ScrollToTop />
      <div
      
      className="p-6 rounded-lg shadow-md my-28  lg:m-20">
      <h2 className="text-2xl font-bold text-center text-[#C9A581]">Become a Kravinz Chef</h2>
      <p className="text-lg mx-auto text-center">
        Are you passionate about cooking and looking for a way to share your culinary skills with the world? Cook with Kravinz invites you to join our community of talented chefs and home cooks dedicated to creating delicious meals and unforgettable experiences. Whether you're an experienced chef or just starting your culinary journey, we welcome you to become a Kravinz Chef. As a member, you'll expand your skills, share your passion for cooking, and make a positive impact in your community. Join us and discover the joy of cooking with Kravinz!
      </p>
    </div>

      <div className="w-full flex lg:flex-row flex-col space-x-10 shadow-lg rounded-lg bg-black ">
       

        {/* Form Sliding from Right */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 flex flex-col justify-between p-9"
          
        >
          {/* Name Input */}
          <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-xl font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData2.name}
              onChange={handleChange}
              required
              className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
              placeholder="Your Name"
            />
          </motion.div>

          {/* Phone Input */}
          <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-xl font-bold mb-2">Phone Number (preferably WhatsApp)</label>
            <input
              type="tel"
              name="phone"
              value={formData2.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
              placeholder="Your Phone Number"
            />
          </motion.div>

          {/* Location Input */}
          <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-xl font-bold mb-2">Where are you from?</label>
            <input
              type="text"
              name="location"
              value={formData2.location}
              onChange={handleChange}
              required
              className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
              placeholder="Your Location"
            />
          </motion.div>

          {/* Availability Selection */}
          <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-xl font-bold mb-2">What is your availability?</label>
            <select
              name="availability"
              value={formData2.availability}
              onChange={handleChange}
              required
              className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
            >
              <option value="">Select your availability</option>
              <option value="Full-time (40 hours and above/week)">Full-time (40 hours and above/week)</option>
              <option value="Full-time (below 40 hours/week)">Full-time (below 40 hours/week)</option>
              <option value="Part-time (below 20 hours/week)">Part-time (below 20 hours/week)</option>
            </select>
          </motion.div>

          {/* Cooking Level Selection */}
          <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-xl font-bold mb-2">What is your level of cooking?</label>
            <select
              name="cokingLevel"
              value={formData2.cookingLevel}
              onChange={handleChange}
              required
              className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
            >
              <option value="">Select your cooking level</option>
              <option value="I know how to cook">I know how to cook</option>
              <option value="I have been cooking for people (as a business)">I have been cooking for people (as a business)</option>
              <option value="I am a professional chef (gone to a catering school)">I am a professional chef (gone to a catering school)</option>
            </select>
          </motion.div>

          {/* Reason for Joining Kravinz */}
          <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
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
          </motion.div>

          {/* Additional Comments Section */}
          <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-xl font-bold mb-2">Additional Comments</label>
            <textarea
              name="additionalComments"
              value={formData2.additionalComments}
              onChange={handleChange}
              className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#C9A581] bg-transparent"
              rows="4"
              placeholder="Any additional comments or questions..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="bg-[#C9A581] text-white py-3 px-6 transition duration-300 hover:bg-[#A66F59]"
            disabled={loading}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </motion.button>

          {/* Error Message */}
          {error && (
            <motion.p
              className="mt-4 text-red-500 text-center"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            >
              {error}
            </motion.p>
          )}
        </motion.form>
         {/* Side Image Sliding from Left */}
         <motion.img
          src={sideImage}
          alt=""
          className="w-1/2 hidden lg:block"
          initial={{ x: 100, opacity: 0 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default BecomeAChef;
