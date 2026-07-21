import React from 'react';
import Header from '../../components/Header/Header';
import HomeHeroSection from '../../components/homeHeroSection/homeHeroSection';
import PromoBanners from '../../components/PromoBanners/PromoBanners';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Footer from '../../components/Footer/Footer';
import myHeroModel from '../../assets/HeroSectionImages/MyHero1.jpg'; // Import the image
import './Home.css';
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory';
import LookBook from '../../components/LookBook/LookBook';
import WhyShopWithUs from '../../components/WhyShopWithUs/WhyShopWithUs';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
const Home = () => {
  return (
    <div className="home-page-view bg-black overflow-hidden">
      {/* Top Hero Section Fold */}
      <div 
        className="hero-fullscreen-wrapper position-relative"
        style={{ backgroundImage: `url(${myHeroModel})` }}
      >
        <Header />
        <HomeHeroSection />
      </div>

      {/* WHITE BACKGROUND SECTION (Holds Features Strip & Promo Banners) */}
      <div className="home-white-section bg-white position-relative pt-3 pb-2">
        
        {/* Floating Feature Strip */}
        <section className="features-floating-container container position-relative z-3">
          <div className="features-card-row row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0 text-white rounded-3 shadow">
            
            {/* Feature 1 */}
            <div className="col d-flex align-items-center justify-content-start px-4 py-3 feature-column border-end-divider">
              <div className="feature-icon-outer me-3">
                <i className="fa-solid fa-award"></i>
              </div>
              <div className="feature-text-block">
                <h6 className="text-uppercase m-0 fw-semibold">Premium Quality</h6>
                <p className="text-muted m-0 small mt-1">Finest Fabrics</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col d-flex align-items-center justify-content-start px-4 py-3 feature-column border-end-divider">
              <div className="feature-icon-outer me-3">
                <i className="fa-solid fa-truck-ramp-box"></i>
              </div>
              <div className="feature-text-block">
                <h6 className="text-uppercase m-0 fw-semibold">Free Shipping</h6>
                <p className="text-muted m-0 small mt-1">On orders above ₹999</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col d-flex align-items-center justify-content-start px-4 py-3 feature-column border-end-divider">
              <div className="feature-icon-outer me-3">
                <i className="fa-solid fa-box-open"></i>
              </div>
              <div className="feature-text-block">
                <h6 className="text-uppercase m-0 fw-semibold">Easy Returns</h6>
                <p className="text-muted m-0 small mt-1">Horsle free returs</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col d-flex align-items-center justify-content-start px-4 py-3 feature-column">
              <div className="feature-icon-outer me-3">
                <i className="fa-solid fa-shield-virus"></i>
              </div>
              <div className="feature-text-block">
                <h6 className="text-uppercase m-0 fw-semibold">Secure Payment</h6>
                <p className="text-muted m-0 small mt-1">100% Safe & Secure</p>
              </div>
            </div>

          </div>
        </section>

        
        <PromoBanners />
        <NewArrivals />
        <ShopByCategory />
        <LookBook />
        <WhyShopWithUs />
        <InstagramFeed /> 
         
      </div>

       
      <Footer />
    </div>
  );
};

export default Home;