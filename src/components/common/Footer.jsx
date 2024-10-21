import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import FooterBg from '../../assets/images/BackgroungPictures/FooterBg.webp';
import Logo from '../../assets/images/Logo/white_orange_logo - Copy.png';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show the button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200); // Show button after scrolling 200px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      whileInView="visible"
      initial="hidden"
      variants={footerVariants}
      transition={{ duration: 1, ease: [0.5, 0.05, 0.1, 0.3] }}
      className="relative pt-36 text-white"
    >
      {/* Background Image Layer with Filter */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.9) 50%),url(${FooterBg})`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Footer content */}
      <motion.div
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: -200 }}
        transition={{ duration: 2, ease: [0.5, 0.05, 0.1, 0.3] }}
        className="relative container mx-auto  items-center px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 z-10"
      >
        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#C9A581] mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/home" className="hover:text-[#C9A581] transition-colors duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#C9A581] transition-colors duration-300">About</Link></li>
            <li><Link to="/services" className="hover:text-[#C9A581] transition-colors duration-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#C9A581] transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex lg:justify-center">
          <img
            className="w-full max-w-48 lg:max-w-xs  "
            src={Logo}
            alt="Logo"
            loading="lazy"
          />
        </div>

        {/* Contact Section */}
        <div className="ml-0 lg:ml-40">
          <h3 className="text-2xl font-bold text-[#C9A581] mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-[#C9A581]" /> 123 Street Name, City, Country
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-[#C9A581]" /> Email: info@example.com
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-[#C9A581]" /> Phone: +123 456 7890
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Social Media Section */}
      <motion.div
        className="mx-auto px-8 mt-24 z-10 flex justify-center"
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 50 }}
        transition={{ duration: 2, ease: [0.5, 0.05, 0.1, 0.3] }}
      >
        <div className="flex space-x-4">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A581] transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebookF size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A581] transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A581] transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A581] transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedinIn size={24} />
          </motion.a>
        </div>
      </motion.div>

      {/* Footer bottom section */}
      <div className="relative mt-32 text-center border-t border-gray-600 pt-6 -mb-64 z-10">
        <p className="text-sm">&copy; {new Date().getFullYear()} Kravinz. All rights reserved.</p>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 cursor-pointer p-3 bg-[#C9A581] text-white rounded-full shadow-lg"
          onClick={scrollToTop}
          whileHover={{ scale: 1.2 }}
        >
          <FaArrowUp size={20} />
        </motion.div>
      )}
    </motion.footer>
  );
};

export default Footer;