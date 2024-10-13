import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeClassName="active-link">Our Menu</NavLink>
        </li>
        <li>
          <NavLink to="/order" activeClassName="active-link">Order/Get Offer</NavLink>
        </li>
        <li>
          <NavLink to="/become-chef" activeClassName="active-link">Become a Kravinz Chef</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
