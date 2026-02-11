import React from 'react';
import './Header.css';
import h25 from "../../assets/h25.png";
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src={h25} alt="logo" />
          <span>Organick</span>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          
          <div className="dropdown">
            <Link to="/contact-us">ContactUs <i className="arrow-down"></i></Link>
          </div>
          
          <Link to="/shop">Shop</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/news">News</Link>
        </nav>

        <div className="nav-actions">
          <div className="search-container">
            <input type="text" className="search-input" />
            <button className="search-btn">🔍</button>
          </div>
          
          <div className="cart-container">
            <div className="cart-icon">🛒</div>
            <span className="cart-text">Cart (0)</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;