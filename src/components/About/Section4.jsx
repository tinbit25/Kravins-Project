import React from 'react';

const Section4 = () => {
  return (
    <div className="bg-gray-200 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-8">
          Meet Our Team
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold text-green-600">Kay</h3>
            <p className="text-lg text-gray-700">
              Kay is a passionate food enthusiast with a diverse culinary background. Originally from the UK, she brings a unique perspective on global cuisines. Her mission is to help others discover the joy of cooking and the connection that comes from sharing meals with loved ones.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-600">Franck</h3>
            <p className="text-lg text-gray-700">
              Franck, hailing from France, is a skilled chef with years of experience in the culinary industry. He is dedicated to infusing local flavors into traditional dishes, creating a delightful fusion that reflects his love for both home and new cultures. His goal is to promote culinary exploration and appreciation among his clients.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-600">Daniel</h3>
            <p className="text-lg text-gray-700">
              Daniel is a seasoned food consultant from Italy, specializing in creating authentic culinary experiences. His journey in the food industry has taken him across various countries, allowing him to blend different cultural elements into his cooking. He believes in the power of food to bring people together and create lasting memories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
