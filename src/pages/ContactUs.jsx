import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-200 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-8">
          Contact Us
        </h2>
        <p className="text-lg mb-4">
          For more info, reach out to us at:
        </p>
        <p className="text-lg font-medium">
          <a href="mailto:info@kravinz.com" className="text-green-600 hover:underline">
            info@kravinz.com
          </a>
        </p>

        <h3 className="text-3xl font-semibold text-green-600 my-6">
          Our Team Contacts
        </h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-semibold">Daniel</h4>
            <p className="text-lg">Phone: <span className="text-green-600">+250 790 139 857</span></p>
            <p className="text-lg">
              Email: <a href="mailto:daniel@kravinz.com" className="text-green-600 hover:underline">daniel@kravinz.com</a>
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Kay</h4>
            <p className="text-lg">Phone: <span className="text-green-600">+250 790 139 525</span></p>
            <p className="text-lg">
              Email: <span className="text-gray-700">email@example.com</span>
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Franck</h4>
            <p className="text-lg">Phone: <span className="text-green-600">+250 790 801 228</span></p>
            <p className="text-lg">
              Email: <a href="mailto:akarekezi@kravinz.com" className="text-green-600 hover:underline">akarekezi@kravinz.com</a>
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-semibold text-green-600 my-6">
          Follow Us on Social Media
        </h3>
        <p className="text-lg">
          Stay connected with us on Instagram and other social platforms!
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.instagram.com" className="text-red-500 hover:underline">Instagram</a>
          {/* Add other social media links as needed */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
