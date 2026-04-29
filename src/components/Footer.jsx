import "./Footer.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {

  useEffect(() => {
    const btn = document.getElementById("topBtn");
    window.onscroll = function () {
      if (window.scrollY > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };
  }, []);

  return (
    <>
      <footer className="footer">

        <div className="footer-wave"></div>

        <div className="footer-container">

          {/* Company Info */}
          <div className="footer-section">
            <h3>Jain Trading Company</h3>
            <p>
              Premium wholesale supplier of Namkeen,
              Biscuits, Candies and Seasonal Products.
            </p>

            <div className="social-icons">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for latest offers</p>

            <div className="newsletter">
              <input type="email" placeholder="Enter email" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          ©️ {new Date().getFullYear()} Jain Trading Company  
          <span> | Quality Wholesale | Fast Delivery</span>
        </div>

      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>

      {/* Back To Top */}
      <button
        id="topBtn"
        className="top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}