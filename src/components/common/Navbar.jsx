import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-transparent">
      <ul className="nav-links bg-transparent">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/menu">Our Menu</Link>
        </li>
        <li>
          <Link to="/order">Order/Get Offer</Link>
        </li>
        <li>
          <Link to="/become-chef">Become a Kravinz Chef</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
