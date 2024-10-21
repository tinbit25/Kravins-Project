import React, { useEffect, useState } from 'react';
import BackgroundImage from '../../assets/images/pexels-hasan-kurt-154798938-10749578.jpg';

const Picture = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Update background position when scrolling
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden"> {/* Full screen height */}
      {/* Parallax background image */}
      <div
        className="h-full" 
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex items-center justify-end h-full p-4 text-white">
          <h2 className='max-w-lg text-center about text-2xl'>
            We are dedicated to delivering exceptional culinary experiences that blend tradition with innovation.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Picture;