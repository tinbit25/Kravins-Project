import React from 'react';
import { FaUtensils, FaWineGlassAlt, FaSeedling } from 'react-icons/fa';

// Dummy image sources (replace with actual images)
const kayImage = 'https://via.placeholder.com/150';
const franckImage = 'https://via.placeholder.com/150';
const danielImage = 'https://via.placeholder.com/150';

const teamMembers = [
  {
    name: 'Kay',
    bio: 'Passionate food enthusiast from the UK, helping others discover the joy of cooking and sharing meals.',
    image: kayImage,
    icon: <FaUtensils />,
  },
  {
    name: 'Franck',
    bio: 'Skilled chef from France, infusing local flavors into traditional dishes, creating delightful fusions.',
    image: franckImage,
    icon: <FaWineGlassAlt />,
  },
  {
    name: 'Daniel',
    bio: 'Seasoned food consultant from Italy, specializing in authentic culinary experiences and cultural blends.',
    image: danielImage,
    icon: <FaSeedling />,
  },
];

const MeetTheTeam = () => {
  return (
    <section className="py-16 px-5 lg:px-28 text-white">
      <h2 className="Tfont text-5xl font-bold text-center text-[#C9A581] mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 bg-[#1E1E1E] text-center group"
          >
            {/* Profile Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 transition-transform duration-300 group-hover:scale-110"
            />

            {/* Icon for each chef */}
            <div className="text-4xl text-[#C9A581] mb-4">
              {member.icon}
            </div>

            {/* Name */}
            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>

            {/* Bio */}
            <p className="text-gray-300 leading-relaxed">
              {member.bio}
            </p>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#2e1802] to-transparent blur-md"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;