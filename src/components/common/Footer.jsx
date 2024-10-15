import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import FooterBg from '../../assets/images/Pngtree—healthy thai food recipes concept_15445097.webp';
import Logo from '../../assets/images/Logo/white_orange_logo - Copy.png';
import { motion } from 'framer-motion';

const Footer = () => {
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
      className="relative min-h-screen pt-36 text-white"
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
        className="relative container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10 z-10"
      >
        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#C9A581] mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/home" className="hover:text-[#C9A581] transition-colors duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-[#C9A581] transition-colors duration-300">About</a></li>
            <li><a href="/services" className="hover:text-[#C9A581] transition-colors duration-300">Services</a></li>
            <li><a href="/contact" className="hover:text-[#C9A581] transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-xs"
            src={Logo}
            alt="Logo"
            loading="lazy"
          />
        </div>

        {/* Contact Section */}
        <div className="ml-40">
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
        <p className="text-sm">&copy; {new Date().getFullYear()} Kravins. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
