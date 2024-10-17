import React, { useEffect, useState } from 'react';
import BackgroundImage from '../../assets/images/New.png';

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
    <div className="relative">
      <div
        className="h-screen bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${offsetY * 0.1}px`,
          backgroundAttachment: 'fixed',
        }}
      >
      
      </div>
    </div>
  );
};

export default Picture;
