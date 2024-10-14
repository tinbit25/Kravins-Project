import React from 'react';
import { useInView } from 'react-intersection-observer'; // For scroll-based animation
import { FaLeaf, FaHandsHelping, FaLightbulb, FaStar } from 'react-icons/fa'; // FontAwesome icons

const commitments = [
  {
    title: 'Quality Service',
    description:
      'We prioritize delivering exceptional service to all our customers, ensuring satisfaction at every step.',
    icon: <FaStar />,
    imageUrl: '/path/to/image1.jpg', // Example image
  },
  {
    title: 'Sustainability',
    description:
      'We are committed to sustainable practices that protect the environment and promote social responsibility.',
    icon: <FaLeaf />,
    imageUrl: '/path/to/image2.jpg', // Example image
  },
  {
    title: 'Community Engagement',
    description:
      'We actively engage with the communities we serve, supporting local initiatives and fostering positive relationships.',
    icon: <FaHandsHelping />,
    imageUrl: '/path/to/image3.jpg', // Example image
  },
  {
    title: 'Innovation',
    description:
      'We strive to innovate continuously, adopting new technologies and methods to improve our offerings.',
    icon: <FaLightbulb />,
    imageUrl: '/path/to/image4.jpg', // Example image
  },
];

const OurCommitment = () => {
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // Animation trigger point
  });

  return (
    <section className="py-16 px-5 lg:px-28 relative">
      {/* Section Title */}
      <h2 className="Tfont text-5xl font-bold text-center text-[#C9A581] mb-12 tracking-wide animate-pulse">
        Our Commitment
      </h2>

      {/* Commitment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {commitments.map((commitment, index) => (
          <div
            ref={cardRef}
            key={index}
            className={`relative p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 text-white group
              ${cardInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}
              transition-all duration-700 ease-in-out`}
          
          >
            {/* Icon and Title */}
            <div className="text-5xl text-[#C9A581] mb-4 group-hover:scale-110 transition-transform duration-300">
              {commitment.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 tracking-wide group-hover:text-[#C9A581] transition-colors duration-300">
              {commitment.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
              {commitment.description}
            </p>

            {/* Floating Glow Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#2e1802] to-transparent blur-md z-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCommitment;
