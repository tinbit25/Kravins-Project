import React from 'react';
import AfricanFood from '../../assets/images/Jollof_Rice_with_Stew.jpg';


const Ourstory = () => {
  return (
    <div className='px-20 py-15
text-white'>

    <div className="py-32 mx-auto flex flex-row space-x-7">
    <img 
              className="w-1/4 py-72"
              src={AfricanFood}
              alt="African Food"
            />
            <div className="flex flex-col px-28 text-center">
          <h2 className="Tfont font-extrabold text-4xl mb-6 text-[#C9A581]">Our Story</h2>
          <p className="text-xl font-semibold text-gray-300 mb-4">
            <strong>We are FOREIGNERS helping FOREIGNERS</strong>
          </p>
          <p className="text-lg leading-relaxed ">
            We are 3 foreigners in Rwanda who have seen the need for a model like Kravinz in Rwanda. 
            Our mission is to unite cultures through the universal language of food, bridging the 
            gap for foreigners by offering a taste of home and a way to culinary exploration.
          </p>
          <p className="text-lg leading-relaxed  mt-4">
            We believe that every meal shared is an opportunity to foster connection and understanding. 
            With passion and purpose, we empower individuals to savor the richness of diversity, one 
            dish at a time—enriching lives and households one kitchen at a time.
          </p>
          </div>
          <img 
              className="w-1/4 py-72"
              src={AfricanFood}
              alt="African Food"
            />
        </div>
        </div>
  );
};

export default Ourstory;
