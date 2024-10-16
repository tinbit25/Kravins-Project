import React, { useEffect, useState, useRef } from 'react';
import AfricanFood from '../../assets/images/Pngtree—plate african food_16036974.webp';
import { Link } from 'react-router-dom';

const Section3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="mb-11">
      <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-24'} transition-all duration-1000`}>
        <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 p-8">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <h2 className="Tfont text-5xl text-[#C9A581] leading-tight text-center md:text-left">
              TIRED OF DELIVERY
            </h2>
            <h2 className="Tfont text-5xl text-[#C9A581] mb-6 text-center md:text-left leading-tight">
              DISAPPOINTMENTS?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed text-center md:text-left">
              Let’s be honest—aren’t we all fed up with <br /> spending too much on delivery apps only <br /> to receive meals that are <span className="font-bold text-[#BA9774]">generic</span>, inconsistent,<br /> and far from satisfying?
            </p>
            <p className="text-3xl font-semibold text-[#C9A581] leading-10 text-center md:text-left">
              It's time for a change.
            </p>
            <p className="text-lg text-gray-400 leading-10 text-center md:text-left">
              Welcome to <span className="font-bold italic text-[#C9A581]">Kravinz</span>, where we serve your meals exactly how you <span className="italic text-[#BA9774]">krave</span> them—tailored to your taste, budget, and lifestyle. This is the future of dining.
            </p>
            <h3 className="text-2xl font-semibold text-[#C9A581] leading-relaxed text-center md:text-left">
              Join the Culinary Revolution!
            </h3>
            <p className="text-lg text-gray-400 leading-10 mb-6 text-center md:text-left">One kitchen at a time.</p>

            {/* Contact Button */}
            <Link to="/contact">
              <button className="bg-[#C9A581] text-black py-3 px-8 rounded-full font-bold shadow-md hover:bg-[#BA9774] hover:scale-105 transition-transform duration-300 ease-in-out mx-auto md:mx-0">
                Contact Us Now
              </button>
            </Link>
          </div>

          <div className="relative w-full md:w-1/2">
            <img 
              className="w-full h-auto rounded-md"
              src={AfricanFood}
              alt="African Food"
            />
            <div className="rounded-full absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;