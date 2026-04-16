import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-header-inner">
          <Link to="/" className="brand">
            <img src="/logo.png" alt="Jain Trading Company" className="brand-logo" />
            <div className="brand-text">
              <h2>Jain Trading Company</h2>
              <p>Quality Wholesale Since 2010</p>
            </div>
          </Link>

          <nav className="home-nav">
  <Link to="/">Home</Link>
  <Link to="/products">Products</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/admin-login">Admin</Link>
  <Link to="/login">Login</Link>
  <Link to="/cart" className="cart-link">
    Cart <span className="cart-count">0</span>
  </Link>
</nav>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-tag">Trusted Wholesale Partner</span>
          <h1>Smart Wholesale For Growing Businesses</h1>
          <p>
            Premium wholesale products with reliable quality, better prices,
            and fast delivery for retailers and shop owners.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/products")}>
              Explore Products
            </button>

            <button className="secondary-btn" onClick={() => navigate("/contact")}>
              Send Enquiry
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <h2>Why Choose Jain Trading?</h2>
          <p>Everything you need from a reliable wholesale supplier.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Best Wholesale Rates</h3>
            <p>Competitive pricing for retailers, resellers, and bulk buyers.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Trusted Product Quality</h3>
            <p>Quality products that help build trust with your customers.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Quick dispatch and smooth delivery to keep your business running.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-box">
          <h2>What Our Clients Say</h2>
          <p className="testimonial-quote">
            “Best wholesale supplier we have worked with. Always on time delivery
            and great pricing!”
          </p>
          <h4>- Jain Traders</h4>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Need Bulk Orders or Product Enquiry?</h2>
          <p>Contact us today and get the best wholesale deal for your business.</p>
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            Contact Now
          </button>
        </div>
      </section>

      <footer className="home-footer">
        <div className="footer-grid">
          <div>
            <h3>Jain Trading Company</h3>
            <p>
              Premium wholesale supplier of Namkeen, Biscuits, Candies and
              Seasonal Products.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          <div>
            <h3>Newsletter</h3>
            <p>Subscribe for latest offers</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Enter email" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Jain Trading Company | Quality Wholesale | Fast Delivery
        </div>
      </footer>
    </div>
  );
};

export default Home;