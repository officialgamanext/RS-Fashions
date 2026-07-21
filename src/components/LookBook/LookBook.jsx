import React from 'react';
import './LookBook.css';

// Import local images from src/assets/LookBookImages/
import lookBook1 from '../../assets/LookBookImages/LookBook1.png';
import lookBook2 from '../../assets/LookBookImages/LookBook2.png';
import lookBook3 from '../../assets/LookBookImages/LookBook3.png';
import lookBook4 from '../../assets/LookBookImages/LookBook4.png';

const lookbookItems = [
  {
    title: 'URBAN STYLE',
    subtitle: 'Explore Now',
    img: lookBook1,
  },
  {
    title: 'SUMMER VIBES',
    subtitle: 'Explore Now',
    img: lookBook2,
  },
  {
    title: 'WINTER READY',
    subtitle: 'Explore Now',
    img: lookBook3,
  },
  {
    title: 'SPORTS MODE',
    subtitle: 'Explore Now',
    img: lookBook4,
  },
];

const LookBook = () => {
  return (
    <div className="lookbook-section-bg bg-white py-4 w-100">
      <section className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 px-1">
          <h4 className="text-uppercase fw-bold text-dark m-0 section-header-title">
            LOOK BOOK
          </h4>
          <a href="/lookbook" className="view-all-link text-uppercase text-decoration-none fw-semibold">
            VIEW ALL <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="row g-3">
          {lookbookItems.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="lookbook-card position-relative overflow-hidden rounded-2 cursor-pointer">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-100 h-100 object-fit-cover lookbook-img"
                />
                
                {/* Bottom Gradient Overlay */}
                <div className="lookbook-gradient-overlay position-absolute bottom-0 start-0 w-100 p-3">
                  <h6 className="text-white text-uppercase fw-bold m-0 lookbook-card-title">
                    {item.title}
                  </h6>
                  <span className="lookbook-card-sub text-white-50 d-block fs-8 mt-1">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LookBook;