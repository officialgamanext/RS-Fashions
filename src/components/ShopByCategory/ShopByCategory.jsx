import React from 'react';
import './ShopByCategory.css';

// Import local images from src/assets/ShopByCategory/
import cat1 from '../../assets/ShopByCategoryImages/ShopByCategory1.png';
import cat2 from '../../assets/ShopByCategoryImages/ShopByCategory2.png';
import cat3 from '../../assets/ShopByCategoryImages/ShopByCategory3.png';
import cat4 from '../../assets/ShopByCategoryImages/ShopByCategory4.png';
import cat5 from '../../assets/ShopByCategoryImages/ShopByCategory5.png';
import cat6 from '../../assets/ShopByCategoryImages/ShopByCategory6.png';
import cat7 from '../../assets/ShopByCategoryImages/ShopByCategory7.png';
import cat8 from '../../assets/ShopByCategoryImages/ShopByCategory8.png';

const categories = [
  { name: 'T-SHIRTS', img: cat1 },
  { name: 'SHIRTS', img: cat2 },
  { name: 'TROUSERS', img: cat3 },
  { name: 'JACKETS', img: cat4 },
  { name: 'HOODIES', img: cat5 },
  { name: 'SHORTS', img: cat6 },
  { name: 'ACCESSORIES', img: cat7 },
  { name: 'FOOTWEAR', img: cat8 },
];

const ShopByCategory = () => {
  return (
    <div className="shop-category-section-bg bg-white py-4 w-100">
      <section className="container">
        
        {/* Header Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4 px-1">
          <h4 className="text-uppercase fw-bold text-dark m-0 section-header-title">
            SHOP BY CATEGORY
          </h4>
          <a href="/categories" className="view-all-link text-uppercase text-decoration-none fw-semibold">
            VIEW ALL <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>

        {/* Single Row 8-Item Layout */}
        <div className="category-single-row d-flex flex-nowrap justify-content-between align-items-center text-center">
          {categories.map((item, index) => (
            <div key={index} className="category-col-item">
              <div className="category-card-item cursor-pointer">
                <div className="category-circle-avatar mx-auto mb-2 overflow-hidden rounded-circle">
                  <img src={item.img} alt={item.name} className="w-100 h-100 object-fit-cover" />
                </div>
                <span className="category-title-text text-uppercase d-block fw-semibold">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default ShopByCategory;