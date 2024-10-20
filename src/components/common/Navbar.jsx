import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute right-0 top-0 z-10 p-4 flex justify-end bg-transparent overflow-hidden">
      {/* Hamburger menu icon */}
      <div className="text-white text-2xl cursor-pointer lg:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation links */}
      <ul
        className={`${
          isOpen ? 'left-0 opacity-100' : '-left-full opacity-0'
        } fixed top-0 h-screen w-[60%] bg-black bg-opacity-80 text-white flex flex-col items-start space-y-8 p-8 transition-all duration-700 ease-in-out lg:static lg:flex-row lg:h-auto lg:w-auto lg:bg-transparent lg:space-y-0 lg:space-x-8 lg:p-0 lg:opacity-100`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'relative font-bold text-orange-500' : 'relative text-white'
            }>
            <span className="relative after:absolute text-xl after:content-[''] after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-[5px] after:transition-all after:duration-500 hover:text-orange-500 hover:scale-110 hover:after:w-full transition-transform ease-in-out duration-300">
              Home
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'relative font-bold text-orange-500' : 'relative text-white'
            }>
            <span className="relative after:absolute text-xl after:content-[''] after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-[5px] after:transition-all after:duration-500 hover:text-orange-500 hover:scale-110 hover:after:w-full transition-transform ease-in-out duration-300">
              About Us
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'relative font-bold text-orange-500' : 'relative text-white'
            }>
            <span className="relative after:absolute text-xl after:content-[''] after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-[5px] after:transition-all after:duration-500 hover:text-orange-500 hover:scale-110 hover:after:w-full transition-transform ease-in-out duration-300">
              Contact Us
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? 'relative font-bold text-orange-500' : 'relative text-white'
            }>
            <span className="relative after:absolute text-xl after:content-[''] after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-[5px] after:transition-all after:duration-500 hover:text-orange-500 hover:scale-110 hover:after:w-full transition-transform ease-in-out duration-300">
              Book Chef
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive ? 'relative font-bold text-orange-500' : 'relative text-white'
            }>
            <span className="relative after:absolute text-xl after:content-[''] after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-[5px] after:transition-all after:duration-500 hover:text-orange-500 hover:scale-110 hover:after:w-full transition-transform ease-in-out duration-300">
              Order/Get Offer
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/become-chef"
            className={({ isActive }) =>
              isActive ? 'relative font-bold text-orange-500' : 'relative text-white'
            }>
            <span className="relative after:absolute text-xl after:content-[''] after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-[5px] after:transition-all after:duration-500 hover:text-orange-500 hover:scale-110 hover:after:w-full transition-transform ease-in-out duration-300">
              Become a Kravinz Chef
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
