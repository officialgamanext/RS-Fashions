import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// Swiper CSS imported centrally in index.css
import './homeHeroSection.css';

// Import local hero images
import myHeroModel1 from "../../assets/HeroSectionImages/MyHero1.jpg";
import myHeroModel2 from "../../assets/HeroSectionImages/MyHero2.jpg";

const HomeHeroSection = () => {
  return (
    <section className="hero-slider-wrapper position-relative w-100 overflow-hidden">
      
      {/* Background Image Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-arrow-right',
          prevEl: '.custom-arrow-left',
        }}
        loop={true}
        className="h-100 position-absolute top-0 start-0 w-100"
      >
        {/* Background Slide 1 */}
        <SwiperSlide>
          <div 
            className="hero-slide-bg w-100 h-100"
            style={{ backgroundImage: `url(${myHeroModel1})` }}
          />
        </SwiperSlide>

        {/* Background Slide 2 */}
        <SwiperSlide>
          <div 
            className="hero-slide-bg w-100 h-100"
            style={{ backgroundImage: `url(${myHeroModel2})` }}
          />
        </SwiperSlide>
      </Swiper>

      {/* Dark Overlay Tint */}
      <div className="diagonal-overlay"></div>

      {/* Fixed Static Content Overlay */}
      <div className="hero-content-layer container position-relative z-3 h-100 d-flex align-items-center">
        <div className="row w-100 m-0">
          <div className="col-12 col-md-7 hero-content-box p-0">
            <h2 className="text-uppercase text-white fw-bold display-4 m-0">
              Move In Style
              <span className="cursive-subtext d-block">Live In Comfort</span>
            </h2>
            <p className="text-muted fs-6 tracking-wide mt-3 mb-4">
              Premium quality, Modern design<br />Made for every move you make.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-gold text-uppercase d-flex align-items-center gap-2 px-4 py-3 fw-semibold">
                Shop Now <ArrowRight size={16} />
              </button>
              <button className="btn btn-outline-border text-uppercase px-4 py-3 fw-semibold text-white">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Collection Floating Indicator Badge */}
      <div className="collection-floating-box text-center p-4">
        <span className="text-muted text-uppercase tracking-widest d-block mb-1">New Collection</span>
        <h3 className="text-white fw-bold display-6 mb-2">2024</h3>
        <a href="#" className="text-white text-uppercase tracking-wider fw-semibold text-decoration-underline small">Discover How</a>
      </div>

      {/* Slide Arrow Navigation Triggers */}
      <button className="custom-arrow custom-arrow-left position-absolute top-50 translate-middle-y z-3 rounded-circle d-flex align-items-center justify-content-center">
        <ChevronLeft size={20} />
      </button>
      <button className="custom-arrow custom-arrow-right position-absolute top-50 translate-middle-y z-3 rounded-circle d-flex align-items-center justify-content-center">
        <ChevronRight size={20} />
      </button>

    </section>
  );
};

export default HomeHeroSection;