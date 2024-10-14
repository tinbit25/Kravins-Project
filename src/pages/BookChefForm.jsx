import React, { useState } from 'react';

const BookChefForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    origin: '',
    budget: '',
    dietaryNeeds: 'No',
    service: []
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    console.log(formData);
    // You can send the form data to your API or handle it as needed
  };

  return (
    <div className="py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#C9A581] mb-8">Book Your Chef</h2>
        <p className="text-lg mb-4">Savor Now and Satisfy Your Kravinz!</p>

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
            <label className="block text-lg font-medium mb-2" htmlFor="budget">
              Budget
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your budget"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-lg font-medium mb-2">Do you have any preferences or dietary needs?</label>
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
              <label htmlFor="yes" className="mr-4">Yes</label>
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

          <div>
            <label className="block text-lg font-medium mb-2">What service do you need?</label>
            <div className="flex flex-col space-y-2">
              {['Ingredients sourcing', 'Kitchen assistant', 'Hire a chef'].map((service) => (
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
              ))}
            </div>
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

export default BookChefForm;
