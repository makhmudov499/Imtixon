import React, { useState } from 'react';
import './Header.css';
import h25 from "../../assets/h25.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        {/* Logo qismi - Kichraytirilgan */}
        <div className="logo">
          <img src={h25} alt="Organick" className="logo-img" />
          <span className="logo-text">Organick</span>
        </div>

        {/* Navigatsiya - Chiroyli hoverlar bilan */}
        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </nav>

        {/* O'ng tomon: Search va Cart */}
        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">🔍</button>
          </div>

          <div className="cart-container">
            <div className="cart-circle">🛒</div>
            <span className="cart-label">Cart (0)</span>
          </div>

          {/* Hamburger (Mobil uchun) */}
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
            <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
            <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;