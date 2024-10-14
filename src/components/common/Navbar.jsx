import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Our Menu
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/order" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Order/Get Offer
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/become-chef" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Become a Kravinz Chef
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
