import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">Electronics Store</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;