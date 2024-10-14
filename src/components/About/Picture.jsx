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
        className="h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${offsetY * 0.1}px`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Background Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30" /> */}

        {/* <div className="h-full flex items-center justify-center p-6">
          <div className="text-white max-w-3xl text-center">
            <h1 className="text-3xl font-bold mb-4">The Spice Rack of Life: Feeling at Home Abroad</h1>
            <p className="mb-4">
              You've just landed in a bustling new city, heart brimming with excitement for your promising experience. Yet, as days turn into weeks, a strange pang of longing sets in. The unfamiliarity of the country's culture and the overwhelming chaos of the new atmosphere leave you yearning for a taste of home. This is culture shock, an experience most expatriates can attest to.
            </p>
            <h2 className="text-2xl font-bold mb-2">The Familiar Surprise</h2>
            <p className="mb-4">
              Derek Thompson explores the M.A.Y.A. – Most Advanced Yet Acceptable concept in his book Hit Makers. This principle suggests humans crave a balance between novelty (neophilia) and familiarity (neophobia). M.A.Y.A. isn't just about products; it's a fundamental human desire! The initial thrill of encountering new cultures can be dampened by the struggle to find a sense of normalcy in a globalised world where travel is a norm. Food, as a fundamental aspect of culture, plays a crucial role in navigating this push-and-pull.
            </p>
            <h2 className="text-2xl font-bold mb-2">Identity Anchors</h2>
            <p className="mb-4">
              Leaving Nigeria for Kigali was exciting, but I realised Mom's spicy stew's delicious aroma, and the heavy warmth of fufu and okazi soup was more than just sustenance. They're anchors to my memories and identities. When I later travelled to Kilifi, Kenya, the absence of these familiar flavours intensified the feeling of being out of place. As beautifully stated in a comment section, “People don’t know what they like; they like what they know."
            </p>
            <h2 className="text-2xl font-bold mb-2">The Push & Pull: Neophilia & Neophobia</h2>
            <p className="mb-4">
              This concept is further explored by psychologists who study the push and pull between neophilia (the love of the new) and neophobia (the fear of the new). For foreigners, encountering a new culture presents a buffet of unfamiliar experiences. The initial stages are often fueled by neophilia – the excitement of trying exotic dishes and exploring new ingredients. However, the constant flurry of unfamiliarity can trigger neophobia, leading to feelings of anxiety and longing for the comfort of home.
            </p>
            <h2 className="text-2xl font-bold mb-2">What then?</h2>
            <p className="mb-4">
              So, how do we bridge this gap? What’s the ideal way to embrace novelty within the framework of familiarity? Travel bloggers often recommend seeking out familiar dishes – a pizza joint in Rome or a burger bar in Tokyo. I personally don’t see restaurants and delivery platforms as an ideal and sustainable solution for expatriates… perhaps a way to feel a little more at home, even on the other side of the world.
            </p>
            <h2 className="text-2xl font-bold mb-2">Share Your Experience</h2>
            <p className="mb-4">
              I would sincerely love to hear from you. What’s your experience? What’s your ideal solution to get a taste of home in a foreign and unfamiliar environment?
            </p>
            <button className="mt-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300">
              Share Your Thoughts
            </button>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Picture;
