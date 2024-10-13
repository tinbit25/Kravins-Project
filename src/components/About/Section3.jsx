import React from 'react';

const Section3 = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-8">
          What We Aim to Achieve / Our Vision
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          At Kravinz, our vision is to create a culinary landscape where every individual, regardless of their background, can experience the joy of diverse cuisines. We strive to:
        </p>
        <ul className="list-disc list-inside space-y-4 text-left text-gray-700 mx-auto">
          <li className="text-lg">
            <span className="font-bold text-red-500">Foster Inclusivity:</span> By uniting cultures through food, we aim to create a welcoming environment for all.
          </li>
          <li className="text-lg">
            <span className="font-bold text-red-500">Promote Sustainability:</span> We are committed to sourcing fresh, local ingredients to support our community and reduce our environmental footprint.
          </li>
          <li className="text-lg">
            <span className="font-bold text-red-500">Encourage Culinary Exploration:</span> We empower individuals to explore new tastes and cooking techniques, enhancing their culinary journey.
          </li>
          <li className="text-lg">
            <span className="font-bold text-red-500">Cultivate Connections:</span> By sharing meals and experiences, we aim to strengthen bonds between individuals and communities.
          </li>
          <li className="text-lg">
            <span className="font-bold text-red-500">Deliver Exceptional Quality:</span> We strive to provide consistently high-quality meals that delight our customers and exceed their expectations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section3;
