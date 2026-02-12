import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import h25 from "../../assets/h25.png"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={h25} alt="Organick" className="logo-img" />
          <span className="logo-text">Organick</span>
        </NavLink>

        <nav className={`main-nav ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li> 
            <li><NavLink to="/shop" onClick={closeMenu}>Shop</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink to="/news" onClick={closeMenu}>News</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">🔍</button>
          </div>

          <div className="cart-container">
            <div className="cart-circle">🛒</div>
            <span className="cart-label">Cart (0)</span>
          </div>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;