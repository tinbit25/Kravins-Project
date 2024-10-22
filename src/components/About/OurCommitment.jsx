import React from 'react';
import { useInView } from 'react-intersection-observer'; 
import { FaLeaf, FaHandsHelping, FaLightbulb, FaStar } from 'react-icons/fa'; 

const commitments = [
  {
    title: 'Quality Service',
    description:
      'We prioritize delivering exceptional service to all our customers, ensuring satisfaction at every step.',
    icon: <FaStar />,
  },
  {
    title: 'Sustainability',
    description:
      'We are committed to sustainable practices that protect the environment and promote social responsibility.',
    icon: <FaLeaf />,
  },
  {
    title: 'Community Engagement',
    description:
      'We actively engage with the communities we serve, supporting local initiatives and fostering positive relationships.',
    icon: <FaHandsHelping />,
  },
  {
    title: 'Innovation',
    description:
      'We strive to innovate continuously, adopting new technologies and methods to improve our offerings.',
    icon: <FaLightbulb />,
  },
];

const OurCommitment = () => {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, 
  });

  return (
    <section className="py-10 sm:py-16 px-5 lg:px-28 relative">
      
      <div
        ref={ref}
        className={`transition-all duration-1000 ease-in-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section Title */}
        <h2 className="Tfont text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#C9A581] mb-4 tracking-wide">
          Our Commitment
        </h2>

        {/* Commitment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-1000 text-white group
                ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}
            >
              {/* Icon and Title */}
              <div className="text-4xl sm:text-5xl text-[#C9A581] mb-3 group-hover:scale-110 transition-transform duration-300">
                {commitment.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 tracking-wide group-hover:text-[#C9A581] transition-colors duration-300">
                {commitment.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                {commitment.description}
              </p>

              {/* Floating Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent blur-md z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
