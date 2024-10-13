import React, { useEffect, useRef, useState } from 'react';

const Section2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        //   observer.unobserve(sectionRef.current); // Stop observing once visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      
      className={`   flex flex-col items-center justify-center text-center bg-gray-200 py-16 px-6 -mt-1 space-y-7`}
    >
        <div 
        ref={sectionRef}
        className={`containerSection2 transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
      }`}>

      {/* Title and content */}
      <h2 className="section-title text-3xl font-bold text-red-400 mb-8">
        We are flexible!
      </h2>

      <p className="text-lg font-medium mb-4">
        <span className="text-green-600">We can help you</span> source ingredients
      </p>

      <p className="text-lg font-medium mb-4">
        <span className="text-green-600">We can be</span> your kitchen assistant
      </p>

      <p className="text-lg font-medium mb-4">
        <span className="text-green-600">We can help you cook</span> whatever cuisine you{' '}
        <span className="italic text-red-500">krave</span>
      </p>

      <p className="text-lg font-medium mb-4">
        <span className="text-green-600">Local or foreign</span>, in your house or in the chef’s kitchen
      </p>

      <p className="text-lg font-medium mb-4">
        In <span className="text-green-600">large or small quantities</span>
      </p>

      <p className="text-lg font-medium">
        With <span className="text-green-600">your budget</span> and{' '}
        <span className="text-green-600">dietary needs</span>
      </p>
      </div>
    </div>
  );
};

export default Section2;
