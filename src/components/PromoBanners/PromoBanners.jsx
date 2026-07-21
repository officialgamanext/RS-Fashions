import React from 'react';
import './PromoBanners.css';

// Import your local promo images from src/assets/PromoBannersImages/
import banner1Img from '../../assets/PromoBannersImages/banner1.png';
import banner2Img from '../../assets/PromoBannersImages/banner2.png';
import stackedImg from '../../assets/PromoBannersImages/stacked.png';

const PromoBanners = () => {
  return (
    <div className="promo-banners-section-bg bg-white py-2 w-100">
      <section className="promo-banners-wrapper container">
        <div className="row g-3">
          
          {/* Banner 1: SPORTS COLLECTION */}
          <div className="col-12 col-lg-4">
            <div className="promo-card sports-card position-relative overflow-hidden p-4 rounded-2 d-flex flex-column justify-content-between">
              <div className="promo-content position-relative z-2">
                <span className="promo-gold-title text-uppercase d-block mb-2">SPORTS COLLECTION</span>
                <span className="promo-sub-label text-uppercase text-secondary d-block">UP TO</span>
                <h2 className="promo-big-number text-white fw-bold m-0">
                  30% <span className="fs-4 fw-bold">OFF</span>
                </h2>
                <p className="text-secondary small mt-1 mb-4">On Active Wear</p>
                <button className="btn btn-gold-solid text-uppercase fw-bold rounded-0 border-0">
                  EXPLORE NOW
                </button>
              </div>
              {/* Local Model Image */}
              <div 
                className="promo-model-bg sports-model"
                style={{ backgroundImage: `linear-gradient(to right, #0c0c0c 25%, rgba(12, 12, 12, 0) 100%), url(${banner1Img})` }}
              ></div>
            </div>
          </div>

          {/* Banner 2: PREPAID EXCLUSIVE */}
         {/* Banner 2: PREPAID EXCLUSIVE */}
<div className="col-12 col-lg-4">
  <div className="promo-card prepaid-card position-relative overflow-hidden p-4 rounded-2 d-flex flex-column justify-content-between">
    <div className="promo-content position-relative z-2">
      <span className="promo-gold-title text-uppercase d-block mb-2">PREPAID EXCLUSIVE</span>
      <h2 className="promo-title-extra text-white fw-bold m-0">EXTRA</h2>
      <h2 className="promo-big-number text-white fw-bold m-0">10%OFF</h2>
      <p className="text-secondary small mt-1 mb-4">ON PREPAID ORDERS</p>
      <div className="coupon-border-box d-inline-block px-3 py-2">
        <span className="coupon-code-text fw-bold">USE CODE:RSI0</span>
      </div>
    </div>
    {/* Local Model Image */}
    <div 
      className="promo-model-bg prepaid-model"
      style={{ backgroundImage: `linear-gradient(to right, #0c0c0c 25%, rgba(12, 12, 12, 0) 100%), url(${banner2Img})` }}
    ></div>
    {/* Removed gold-stripe-overlay div here */}
  </div>
</div>

          {/* Banner 3: FEATURES & STACKED HOODIES */}
          <div className="col-12 col-lg-4">
            <div className="promo-card features-card position-relative overflow-hidden p-4 rounded-2 d-flex align-items-center justify-content-between">
              <div className="features-col d-flex flex-column gap-3 position-relative z-2">
                
                {/* Feature 1 */}
                <div className="d-flex align-items-center gap-3">
                  <div className="feature-badge-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h6 className="text-white-50 text-uppercase fw-bold m-0 fs-7">TRENDING DESIGNS</h6>
                    <p className="text-custom-grey m-0 fs-9">Stay ahead with the latest trends</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="d-flex align-items-center gap-3">
                  <div className="feature-badge-icon">
                    <i className="fa-solid fa-shirt"></i>
                  </div>
                  <div>
                    <h6 className="text-white-50 text-uppercase fw-bold m-0 fs-7">PERFECT FIT</h6>
                    <p className="text-custom-grey m-0 fs-9">Tailored for ultimate comfort</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="d-flex align-items-center gap-3">
                  <div className="feature-badge-icon">
                    <i className="fa-solid fa-sun"></i>
                  </div>
                  <div>
                    <h6 className="text-white-50 text-uppercase fw-bold m-0 fs-7">PREMIUM FABRICS</h6>
                    <p className="text-custom-grey m-0 fs-9">Breathable & durable materials</p>
                  </div>
                </div>

              </div>

              {/* Local Stacked Hoodies Image */}
              <div className="stacked-hoodies-img-wrapper">
                <img 
                  src={stackedImg} 
                  alt="Stacked Hoodies" 
                  className="stacked-hoodies-img"
                />
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PromoBanners;