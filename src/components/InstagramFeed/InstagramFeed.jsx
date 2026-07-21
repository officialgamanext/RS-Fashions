import React from 'react';
import './InstagramFeed.css';

// Import local image from src/assets/InstaFeedImages/
import instaFeedImg from '../../assets/InstaFeedImages/InstaFeed.png';

const InstagramFeed = () => {
  return (
    <div className="instagram-section-wrapper container my-4 mb-0">
      <div className="instagram-card-box p-4 text-center rounded-2">
        
        {/* Header Title */}
        <h5 className="text-uppercase fw-bold text-white mb-1 section-title">
          FOLLOW US ON INSTAGRAM
        </h5>
        
        {/* Handle Accent Link */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer" 
          className="insta-handle-text d-block fw-semibold mb-3 text-decoration-none"
        >
          @RSFASHIONS_OFFICIAL
        </a>

        {/* Single Local Image Banner Container */}
        <div className="single-insta-banner-wrapper my-3 overflow-hidden rounded-1">
          <img 
            src={instaFeedImg} 
            alt="Instagram Feed" 
            className="w-100 object-fit-cover single-insta-banner-img"
          />
        </div>

        {/* View More Button */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer" 
          className="btn btn-insta-gold d-inline-flex align-items-center gap-2 px-4 py-2 text-decoration-none mt-2"
        >
          <i className="fa-brands fa-instagram fs-6"></i>
          <span className="text-uppercase fw-bold">VIEW MORE ON INSTAGRAM</span>
        </a>

      </div>
    </div>
  );
};

export default InstagramFeed;