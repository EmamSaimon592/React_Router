import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo"  width="80px"/>

      <ul>

      <Link to='/'><li>Home</li></Link>
      <Link to='/products'><li>Products</li></Link>
      <Link to='/about'><li>About</li></Link>
      <Link to='/contact'><li>Contact</li></Link>
        
      </ul>
    
      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
