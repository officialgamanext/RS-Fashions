import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './WhyShopWithUs.css';

const testimonials = [
  {
    id: 1,
    rating: 5,
    review: '"The quality is amazing and the fit is perfect."',
    author: '- Arjun M.'
  },
  {
    id: 2,
    rating: 5,
    review: '"Fast delivery and stylish collection."',
    author: '- Rohit S.'
  },
  {
    id: 3,
    rating: 4,
    review: '"Best menswear store online"',
    author: '- Karan P.'
  },
  {
    id: 4,
    rating: 5,
    review: '"Loved the fabrics and design options!"',
    author: '- Rahul V.'
  }
];

const WhyShopWithUs = () => {
  return (
    <div className="why-shop-container container my-3">
      
      {/* 1. WHY SHOP WITH RS FASHIONS? */}
      <section className="why-shop-card p-4 mb-4">
        <h5 className="text-uppercase fw-bold text-dark text-center mb-4 section-title-main">
          WHY SHOP WITH RS FASHIONS?
        </h5>

        <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5 g-3 align-items-center justify-content-center">
          
          <div className="col">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <i className="fa-solid fa-shield-cat fs-2 text-dark"></i>
              <div className="text-start">
                <h6 className="fw-bold m-0 text-dark fs-7">Premium Quality</h6>
                <span className="text-muted fs-8 d-block">Finest materials</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <i className="fa-solid fa-calendar-check fs-2 text-dark"></i>
              <div className="text-start">
                <h6 className="fw-bold m-0 text-dark fs-7">Easy Returns</h6>
                <span className="text-muted fs-8 d-block">30 days return policy</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <i className="fa-solid fa-box-archive fs-2 text-dark"></i>
              <div className="text-start">
                <h6 className="fw-bold m-0 text-dark fs-7">Secure Payment</h6>
                <div className="text-start">
                  <span className="text-muted fs-8 d-block">Multiple secure options</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <i className="fa-solid fa-user-group fs-2 text-dark"></i>
              <div className="text-start">
                <h6 className="fw-bold m-0 text-dark fs-7">Customer Support</h6>
                <span className="text-muted fs-8 d-block">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <i className="fa-solid fa-heart-circle-check fs-2 text-dark"></i>
              <div className="text-start">
                <h6 className="fw-bold m-0 text-dark fs-7">Trusted Brand</h6>
                <span className="text-muted fs-8 d-block">Loved by thousands</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHAT OUR CUSTOMERS SAY */}
      <section className="testimonials-card p-4 text-center">
        <h5 className="text-uppercase fw-bold text-dark mb-4 section-title-main">
          WHAT OUR CUSTOMERS SAY
        </h5>

        <div className="testimonials-slider-container position-relative px-4">
          
          <button className="testimonial-prev-btn">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="testimonial-next-btn">
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.testimonial-prev-btn',
              nextEl: '.testimonial-next-btn',
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card p-4 d-flex flex-column justify-content-center align-items-center h-100">
                  <div className="stars-box mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fa-solid fa-star ${i < item.rating ? 'text-dark' : 'text-white'}`}
                      ></i>
                    ))}
                  </div>

                  <p className="testimonial-text mb-3 text-secondary">
                    {item.review}
                  </p>

                  <span className="testimonial-author text-secondary fw-semibold">
                    {item.author}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </div>
  );
};

export default WhyShopWithUs;




