import React from 'react';

const last = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-green-50 py-16 px-6 space-y-8">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-green-600 mb-6">
        We Are Foreigners Helping Foreigners
      </h2>

      {/* Main Text */}
      <p className="text-xl text-gray-800 font-medium leading-relaxed max-w-3xl">
        As <span className="text-red-500 font-bold">three foreigners</span> living in Rwanda, we recognized a need for a model like Kravinz—bringing flavors from all corners of the world to this vibrant country. Our mission? To unite cultures through the <span className="font-bold text-green-600">universal language of food</span>.
      </p>

      <p className="text-lg text-gray-700 font-medium max-w-xl">
        We're here to bridge the gap for foreigners by offering a <span className="text-red-500 italic">taste of home</span> while also opening doors to exciting culinary exploration. Every meal is a chance to build connections, foster understanding, and celebrate the rich tapestry of cultures.
      </p>

      <p className="text-lg text-gray-700 font-medium max-w-2xl">
        With a heart full of passion and a purpose-driven mission, we aim to empower individuals to savour the richness of diversity—one dish, one kitchen, and one household at a time.
      </p>

      {/* Call to Action */}
      <button className="bg-red-500 text-white py-3 px-8 rounded-full font-bold shadow-lg hover:bg-red-400 transition duration-300 ease-in-out">
        Learn More
      </button>
    </div>
  );
};

export default last;
