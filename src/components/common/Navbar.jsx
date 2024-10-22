import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/makerequest", label: "Book Chef" },
    { to: "/order", label: "Order/Get Offer" },
    { to: "/become-chef", label: "Become a Kravinz Chef" },
    
  ];

  return (
    <nav className="absolute right-0 top-0 z-10 p-4 flex justify-end bg-transparent overflow-hidden">
      <div className="text-white text-2xl cursor-pointer lg:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`fixed top-0 h-screen w-[60%] bg-black bg-opacity-80 text-white flex flex-col items-start space-y-8 p-8 transition-all duration-700 ease-in-out 
        ${isOpen ? 'left-0 opacity-100' : '-left-full opacity-0'} 
        lg:static lg:flex-row lg:h-auto lg:w-auto lg:bg-transparent lg:space-y-0 lg:space-x-8 lg:p-0 lg:opacity-100`}>
        
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => 
                isActive ? 'relative font-bold text-orange-500' : 'relative text-white'
              }>
              <span className="relative after:absolute text-xl after:content-[''] after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-[5px] 
                after:transition-all after:duration-500 hover:text-orange-500 hover:scale-110 
                hover:after:w-full transition-transform ease-in-out duration-300">
                {label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
