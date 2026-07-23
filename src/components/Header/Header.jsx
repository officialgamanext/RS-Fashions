import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import './Header.css';

const Header = () => {
  const location = useLocation();

  // Check if current route is the Home page
  const isHomePage = location.pathname === '/';

  return (
    <div className={`Navbar-Header ${isHomePage ? 'is-home' : 'is-inner-page'}`}>
      
      {/* Top Announcement Bar */}
      <div className="top-announcement-bar text-center py-2">
        <p className="m-0 text-uppercase">
          <i className="top fa-solid fa-truck-fast me-2 text-warning"></i>
          Free Shipping on orders above ₹999
        </p>
      </div>

      {/* Main Navbar */}
      <header className="main-header navbar navbar-expand-lg navbar-dark px-4 py-2">
        <div className="container-fluid p-0">
          
          {/* Logo as Plain Text (Not a Link) */}
          <div className="navbar-brand-static d-flex align-items-center gap-2 m-0">
            <div className="logo-circle d-flex align-items-center justify-content-center fw-bold">
              RS
            </div>
            <div className="logo-text lh-1">
              <span className="fw-bold d-block tracking-wider brand-title">FASHIONS</span>
              <small className="brand-subtitle d-block tracking-tight">EXCLUSIVE MENS WEAR</small>
            </div>
          </div>

          {/* Toggle Button for Mobile */}
          <button 
            className="navbar-toggler border-0 shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
            <ul className="navbar-nav gap-lg-4 text-uppercase">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new-arrivals" className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active-link' : ''}`}>
                  NEW ARRIVALS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/collections" className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active-link' : ''}`}>
                  COLLECTIONS
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Icon Utilities */}
          <div className="header-utilities d-flex align-items-center gap-4">
            <NavLink to="#" className="text-light position-relative"><Search size={20} /></NavLink>
            <NavLink to="#" className="text-light position-relative"><User size={20} /></NavLink>
            <NavLink to="#" className="text-light position-relative">
              <Heart size={20} />
              <span className="badge-count position-absolute rounded-circle text-black fw-bold">0</span>
            </NavLink>
            <NavLink to="#" className="text-light position-relative">
              <ShoppingBag size={20} />
              <span className="badge-count position-absolute rounded-circle text-black fw-bold">0</span>
            </NavLink>
          </div>

        </div>
      </header>
    </div>
  );
};

export default Header;