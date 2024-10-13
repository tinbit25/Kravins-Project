import React from 'react';

const Section5 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-gray-100 py-16 px-6 space-y-12">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
        Meet the Founders
      </h2>

      {/* Kay's Bio */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold text-green-600">Kay</h3>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          With a background in culinary arts and a passion for creative dining experiences, Kay is the visionary behind Kravinz. Her love for exploring different cuisines has shaped her mission to bring global flavors to Rwanda. Through Kravinz, Kay is committed to redefining how people experience food, making it personal and meaningful.
        </p>
      </div>

      {/* Franck's Bio */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold text-green-600">Franck</h3>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Franck brings his entrepreneurial spirit and deep connection to the local community to Kravinz. Having worked in various sectors, Franck’s diverse background helps bridge the gap between foreign and local cultures. He is dedicated to making Kravinz not just a service, but a cultural movement.
        </p>
      </div>

      {/* Daniel's Bio */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold text-green-600">Daniel</h3>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          As a seasoned strategist with a flair for innovation, Daniel brings business acumen and leadership to Kravinz. His international experience in hospitality and service management is pivotal in ensuring Kravinz delivers consistent, high-quality culinary experiences that resonate with people from all walks of life.
        </p>
      </div>
    </div>
  );
};

export default Section5;
