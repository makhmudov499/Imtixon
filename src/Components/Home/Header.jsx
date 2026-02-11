import React, { useState } from 'react';
import './Header.css';
import h25 from "../../assets/h25.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <img src={h25} alt="Organick Logo" className="logo-img" />
          <span className="logo-text">Organick</span>
        </div>

        <nav className={`main-nav ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#shop" onClick={() => setIsOpen(false)}>Shop</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#news" onClick={() => setIsOpen(false)}>News</a></li>
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