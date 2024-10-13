import React, { useState } from 'react';

const BecomeChefForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    origin: '',
    availability: '',
    cookingLevel: '',
    reasons: [],
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'reasons') {
      setFormData((prev) => {
        const newReasons = prev.reasons.includes(value)
          ? prev.reasons.filter((item) => item !== value)
          : [...prev.reasons, value];
        return { ...prev, reasons: newReasons };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    console.log(formData);
    // You can send the form data to your API or handle it as needed
  };

  return (
    <div className="bg-gray-200 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-8">Become a Kravinz Chef</h2>
        <p className="text-lg mb-4">Cook with Kravinz and share your culinary passion!</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="phone">
              Phone Number (preferably WhatsApp)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="origin">
              Where Are You From?
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your location"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="availability">
              What is Your Availability?
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400 rounded"
            >
              <option value="" disabled>Select your availability</option>
              <option value="Full-time (40 hours and above/week)">Full-time (40 hours and above/week)</option>
              <option value="Full-time (below 40 hours/week)">Full-time (below 40 hours/week)</option>
              <option value="Part-time (below 20 hours/week)">Part-time (below 20 hours/week)</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="cookingLevel">
              What is Your Level of Cooking?
            </label>
            <select
              id="cookingLevel"
              name="cookingLevel"
              value={formData.cookingLevel}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400 rounded"
            >
              <option value="" disabled>Select your cooking level</option>
              <option value="I know how to cook">I know how to cook</option>
              <option value="I have been cooking for people (as a business)">I have been cooking for people (as a business)</option>
              <option value="I am a professional chef (gone to a catering school)">I am a professional chef (gone to a catering school)</option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-lg font-medium mb-2">Why do you want to join Kravinz?</label>
            <div className="flex flex-col space-y-2">
              {['I need the extra money', 'I love cooking', 'Just exploring'].map((reason) => (
                <div key={reason} className="flex items-center">
                  <input
                    type="checkbox"
                    id={reason}
                    name="reasons"
                    value={reason}
                    checked={formData.reasons.includes(reason)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={reason}>{reason}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your location"
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeChefForm;
