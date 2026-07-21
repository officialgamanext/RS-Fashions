import React from 'react';
import { Mail, Phone, MapPin, Sparkles, RefreshCw, ShieldCheck, Headphones, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-black text-white pt-5">
      
      {/* Newsletter Block */}
      {/* Newsletter Block & Quick Features Row */}
<div className="container border-bottom border-secondary pb-5 mb-5">
  <div className="row align-items-center justify-content-between row-gap-4">
    
    {/* Left Column: Stay in Style and Form Input */}
    <div className="col-xl-6 col-lg-7">
      <div className="row align-items-center g-3">
        <div className="col-12 col-md-5">
          <h3 className="text-uppercase fw-bold tracking-wide mb-1">Stay in Style</h3>
          <p className="text-muted small m-0">Sign up and get 10% OFF on your first order</p>
        </div>
        <div className="col-12 col-md-7">
          <div className="newsletter-form-input d-flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="form-control bg-transparent text-white border-secondary rounded-0 px-3 custom-placeholder" 
            />
            <button className="btn btn-gold text-uppercase rounded-0 px-4 fw-semibold">Subscribe</button>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column: Added Circled Icon Badges */}
    <div className="col-xl-5 col-lg-5">
      <div className="d-flex justify-content-lg-end justify-content-start gap-4 flex-nowrap text-center text-white pt-2 pt-lg-0">
        
        {/* Item 1: Exclusive Offers */}
        <div className="footer-badge-item">
          <div className="badge-icon-wrapper mx-auto mb-2">
            <i className="fa-solid fa-percent"></i>
          </div>
          <h6 className="text-uppercase m-0 fw-semibold tracking-wide">Exclusive Offers</h6>
          <p className="text-muted m-0">Be the first to know</p>
        </div>

        {/* Item 2: New Arrivals */}
        <div className="footer-badge-item">
          <div className="badge-icon-wrapper mx-auto mb-2">
            <i className="fa-regular fa-star"></i>
          </div>
          <h6 className="text-uppercase m-0 fw-semibold tracking-wide">New Arrivals</h6>
          <p className="text-muted m-0">Updates & trends</p>
        </div>

        {/* Item 3: Special Discounts */}
        <div className="footer-badge-item">
          <div className="badge-icon-wrapper mx-auto mb-2">
            <i className="fa-solid fa-tags"></i>
          </div>
          <h6 className="text-uppercase m-0 fw-semibold tracking-wide">Special Discounts</h6>
          <p className="text-muted m-0">For subscribers only</p>
        </div>

      </div>
    </div>

  </div>
</div>

      {/* Services/Perks Badges grid layout */}
      <div className="container border-bottom border-secondary pb-5 mb-5">
        <div className="row row-cols-2 row-cols-lg-4 text-center g-4">
          <div className="col d-flex align-items-center justify-content-center gap-3 border-end border-dark">
            <Sparkles className="text-warning" size={28} />
            <div className="text-start">
              <h6 className="text-uppercase m-0 small fw-bold">Worldwide Shipping</h6>
              <small className="text-muted">Fast & Reliable</small>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center gap-3 border-end border-dark">
            <RefreshCw className="text-warning" size={26} />
            <div className="text-start">
              <h6 className="text-uppercase m-0 small fw-bold">30 Days Returns</h6>
              <small className="text-muted">Easy Returns</small>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center gap-3 border-end border-dark">
            <ShieldCheck className="text-warning" size={28} />
            <div className="text-start">
              <h6 className="text-uppercase m-0 small fw-bold">Secure Payment</h6>
              <small className="text-muted">100% Safe & Secure</small>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center gap-3">
            <Headphones className="text-warning" size={28} />
            <div className="text-start">
              <h6 className="text-uppercase m-0 small fw-bold">24/7 Support</h6>
              <small className="text-muted">We're here for you</small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Corporate Footer Links Layout */}
      <div className="container pb-4">
        <div className="row g-4 justify-content-between">
          
          {/* Column 1: Branding and Socials */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="logo-circle d-flex align-items-center justify-content-center fw-bold">RS</div>
              <div className="logo-text lh-1">
                <span className="fw-bold d-block tracking-wider fs-5">FASHIONS</span>
                <small className="text-muted tracking-tight text-uppercase">Exclusive Mens Wear</small>
              </div>
            </div>
            <p className="text-muted small mb-4">Your style. Your way
              <br />
              <span>
                Aways premium
              </span>
            </p>
            <div className="social-links-row d-flex gap-3">
              <a href="#" className="text-muted hover-white"><i className="fa-brands fa-instagram fs-5"></i></a>
              <a href="#" className="text-muted hover-white"><i className="fa-brands fa-facebook-f fs-5"></i></a>
              <a href="#" className="text-muted hover-white"><i className="fa-brands fa-youtube fs-5"></i></a>
            </div>
          </div>

          {/* Column 2: Links Shop */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-uppercase tracking-wider fw-bold small mb-3">Shop</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">All Products</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Shirts</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">T-Shirts</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Trousers</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Jackets</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Accessories</a></li>
            </ul>
          </div>

          {/* Column 3: Links Help */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-uppercase tracking-wider fw-bold small mb-3">Help</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Your Orders</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Shipping & Delivery</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Returns & Refunds</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">FAQs</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Track Order</a></li>
            </ul>
          </div>

          {/* Column 4: Links About */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-uppercase tracking-wider fw-bold small mb-3">About Us</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">About Us</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Our Story</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Careers</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Blog</a></li>
              <li><a href="#" className="text-decoration-none footer-link-highlight hover-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Info details */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-uppercase tracking-wider fw-bold small mb-3">Contact Us</h6>
            <ul className="list-unstyled d-flex flex-column gap-3 small text-muted">
              <li className="d-flex align-items-center footer-link-highlight gap-2">
                <Phone size={16} className="text-warning" /> <span>+91 9876543210</span>
              </li>
              <li className="d-flex align-items-center footer-link-highlight gap-2">
                <Mail size={16} className="text-warning" /> <span>support@rsfashions.com</span>
              </li>
              <li className="d-flex align-items-center footer-link-highlight gap-2 align-items-start">
                <MapPin size={18} className="text-warning mt-1" />
                <span>123 Style Avenue, Fashion City, State - 400001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Absolute base copyright bar */}
      <div className="bg-dark text-muted text-center py-3 fs-7 border-top border-dark mt-4">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
          <p className="m-0">&copy; 2026 RS Fashions. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-reset text-decoration-none small hover-white">Privacy Policy</a>
            <a href="#" className="text-reset text-decoration-none small hover-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;