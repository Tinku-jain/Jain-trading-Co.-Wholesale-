import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section">
          <div className="logo-circle">JT</div>

          <div className="logo-text">
            <h2>Jain Trading Company</h2>
            <p>Quality Wholesale Since 2010</p>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;