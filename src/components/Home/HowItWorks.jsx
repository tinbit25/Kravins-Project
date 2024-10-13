import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-10 bg-[#1E1E1E] -mt-6 p-11">
      <div className="max-w-5xl mx-auto text-center m-20">
        <h2 className="text-3xl font-bold mb-6 text-white">How It Works</h2>
        <p className="text-lg mb-8 text-white">Simple Steps to Delicious Convenience</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">1. Select Your Meals</h3>
            <p>
              Dive into our flavorful menu and handpick your favorite dishes.
              Choose a package that satisfies your cravings and fits your lifestyle.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">2. Easy Checkout & Confirmation</h3>
            <p>
              Place your order in a few easy steps. We’ll confirm your order and
              schedule a delivery time that works best for you.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">3. Heat & Savor</h3>
            <p>
              Your meals arrive fresh and perfectly prepared. Just heat them up and indulge
              in the comforting taste of home—no hassle, no fuss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
