 import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">🛒 QuickCart</h1>
        <p className="header-subtitle">Your one-stop shop for everything</p>
      </div>
    </header>
  );
}

export default Header;