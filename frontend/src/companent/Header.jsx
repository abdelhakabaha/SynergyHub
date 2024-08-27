import React, { useState } from 'react';
import './Header.css';

function Header() {

  const [isActive, setIsActive] = useState(false);


  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <a href="#">SynergyHub</a>
        </div>
        <nav className={`nav-links ${isActive ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Entroprise</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className={`header-right ${isActive ? 'active' : ''}`}>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="notification">
            <span>🔔</span>
          </div>
          <div className="auth-buttons">
            <a href="#" className="login-btn">Login</a>
            <a href="#" className="signup-btn">Sign Up</a>
          </div>
        </div>
        <div className={`hamburger-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>
      </header>
    </div>
  );
}

export default Header;
