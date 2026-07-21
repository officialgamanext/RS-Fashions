import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <div className='Navbar-Header'>
      {/* Top Announcement Bar */}
      <div className="top-announcement-bar text-center py-2">
        <p className="m-0 text-uppercase">
          <i className="top fa-solid fa-truck-fast me-2 text-warning"></i> 
          Free Shipping on orders above ₹999
        </p>
      </div>

      {/* Main Navbar */}
      <header className="main-header navbar navbar-expand-lg navbar-dark bg-transparent px-4 py-3">
        
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <div className="logo-circle d-flex align-items-center justify-content-center fw-bold">
              RS
            </div>
            <div className="logo-text lh-1">
              <span className="fw-bold d-block tracking-wider">FASHIONS</span>
              <small className="text-muted tracking-tight">EXCLUSIVE MENS WEAR</small>
            </div>
          </Link>

          {/* Toggle Button for Mobile */}
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
            <ul className="navbar-nav gap-lg-4 text-uppercase">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Shop</NavLink>
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
            <Link to="#" className="text-light position-relative"><Search size={20} /></Link>
            <Link to="#" className="text-light position-relative"><User size={20} /></Link>
            <Link to="#" className="text-light position-relative">
              <Heart size={20} />
              <span className="badge-count position-absolute rounded-circle text-black fw-bold">0</span>
            </Link>
            <Link to="#" className="text-light position-relative">
              <ShoppingBag size={20} />
              <span className="badge-count position-absolute rounded-circle text-black fw-bold">0</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;