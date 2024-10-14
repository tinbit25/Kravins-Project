import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import FotterBg from '../../assets/images/Pngtree—healthy.jpg';
import { motion } from 'framer-motion';

const Footer = () => {
  // Define Framer Motion animation properties
  const footerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state (out of view)
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <motion.footer
      // Use whileInView to animate the footer when it comes into view
      whileInView="visible" 
      initial="hidden"
      variants={footerVariants}
      transition={{ duration: 1, ease: [0.5, 0.05, 0.1, 0.3] }}
      className="relative min-h-screen py-72 text-white"
    >
      {/* Background Image Layer with Filter */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.9) 50%),url(${FotterBg})`, // Background image
          // Filter styles
        }}
      />

      <div className="relative container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl text-[#C9A581] mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/home" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl text-[#C9A581] mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li>123 Street Name</li>
            <li>City, Country</li>
            <li>Email: info@example.com</li>
            <li>Phone: +123 456 7890</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-2xl text-[#C9A581] mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-600 pt-6 z-10">
        <p className="text-sm">&copy; {new Date().getFullYear()} Kravins. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
