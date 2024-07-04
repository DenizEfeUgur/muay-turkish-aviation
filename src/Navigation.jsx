import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from './logo.png';

const Navigation = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/home">
        <img src={logo} alt="Logo" className="navbar-logo-img" />
      </Link>
    </div>
    <ul className="navbar-links">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/booking">Booking</Link>
      </li>
    
      <li>
        <Link to="/">Logout</Link>
      </li>
    </ul>
  </nav>
  );
};

export default Navigation;
