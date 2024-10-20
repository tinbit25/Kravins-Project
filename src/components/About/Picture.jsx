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
    <div className="relative w-full h-96 hidden lg:block overflow-hidden"> {/* Full screen height */}
      {/* Parallax background image */}
      <div
        className="h-full " 
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: `center` , 
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
};

export default Picture;