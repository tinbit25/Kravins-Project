import React from 'react';
import Section1 from '../components/Home/Section1'; // Corrected import
import Section2 from '../components/Home/Section2'; // Corrected import
import Section3 from '../components/Home/Section3'; // Corrected import
import Section4 from '../components/Home/Section4'; // Corrected import
import Section5 from '../components/Home/Section5'; // Corrected import
import HowItWorks from '../components/Home/HowItWorks'; // Corrected import

const Home = () => {
  return (
    <>
      <Section1 />
      <HowItWorks />
      <Section2 /> {/* Use the corrected component name */}
      <Section3 /> {/* Use the corrected component name */}
      <Section4 /> {/* Use the corrected component name */}
      <Section5 /> {/* Use the corrected component name */}
    </>
  );
};

export default Home;
