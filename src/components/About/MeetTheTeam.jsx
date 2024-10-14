import React from 'react';
import { FaUtensils, FaWineGlassAlt, FaSeedling } from 'react-icons/fa'; // Icons for interactivity

// Dummy image sources (replace with actual images)
const kayImage = 'https://via.placeholder.com/150';
const franckImage = 'https://via.placeholder.com/150';
const danielImage = 'https://via.placeholder.com/150';

const teamMembers = [
  {
    name: 'Kay',
    bio: 'Kay is a passionate food enthusiast with a diverse culinary background. Originally from the UK, she brings a unique perspective on global cuisines. Her mission is to help others discover the joy of cooking and the connection that comes from sharing meals with loved ones.',
    image: kayImage,
    icon: <FaUtensils />,
  },
  {
    name: 'Franck',
    bio: 'Franck, hailing from France, is a skilled chef with years of experience in the culinary industry. He is dedicated to infusing local flavors into traditional dishes, creating a delightful fusion that reflects his love for both home and new cultures.',
    image: franckImage,
    icon: <FaWineGlassAlt />,
  },
  {
    name: 'Daniel',
    bio: 'Daniel is a seasoned food consultant from Italy, specializing in creating authentic culinary experiences. His journey in the food industry has taken him across various countries, allowing him to blend different cultural elements into his cooking.',
    image: danielImage,
    icon: <FaSeedling />,
  },
];

const MeetTheTeam = () => {
  return (
    <section className="py-16 px-5 lg:px-28 text-white">
      <h2 className="Tfont text-5xl font-bold text-center text-[#C9A581] mb-12 tracking-wide">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-[#1E1E1E] text-center group"
          >
            {/* Profile Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 transition-transform duration-300 group-hover:scale-110"
            />

            {/* Icon for each chef */}
            <div className="text-4xl text-[#C9A581] mb-4 group-hover:scale-110 transition-transform duration-300">
              {member.icon}
            </div>

            {/* Name */}
            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>

            {/* Bio */}
            <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
              {member.bio}
            </p>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#2e1802] to-transparent blur-md"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;


