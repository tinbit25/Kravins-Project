import React, { useEffect, useState } from 'react';
import BackgroundImage from '../../assets/images/fix.png';

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
    <div>
      <div
        className="h-96 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${offsetY * 0.1}px`, // Subtle vertical movement
          backgroundAttachment: 'fixed', // Fixed background effect
          filter: 'brightness(50%) contrast(120%)',
        }}
      ></div>
    </div>
  );
};

export default Picture;
