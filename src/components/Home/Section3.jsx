import React from 'react';

const Section3 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-red-50 py-16 px-6 space-y-8">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-red-500 mb-6">
        Tired of Delivery Disappointments?
      </h2>

      {/* Main Text */}
      <p className="text-xl text-gray-800 font-medium leading-relaxed max-w-2xl">
        Let’s be honest—aren’t we all fed up with spending too much on delivery apps only to receive meals that are <span className="font-bold text-red-400">generic</span>, inconsistent, and far from satisfying? <br />
        <span className="block mt-4 text-2xl text-green-600 font-semibold">It's time for a change.</span>
      </p>

      <p className="text-lg text-gray-700 font-medium max-w-xl">
        Welcome to <span className="font-bold italic text-green-700">Kravinz</span>, where we serve your meals exactly how you <span className="text-red-500 italic">krave</span> them—tailored to your taste, budget, and lifestyle. This is the future of dining.
      </p>

      {/* Call to Action */}
      <h3 className="text-2xl font-semibold text-red-500 mt-6">
        Join the Culinary Revolution!
      </h3>
      <p className="text-lg text-gray-600 font-medium">One kitchen at a time.</p>

      {/* Contact Button */}
      <button className="bg-green-600 text-white py-3 px-8 rounded-full font-bold shadow-lg hover:bg-green-500 transition duration-300 ease-in-out">
        Contact Us Now
      </button>
    </div>
  );
};

export default Section3;
