import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './NewArrivals.css';
import img1 from '../../assets/NewArrivalsImages/NewArrivals1.png';
import img2 from '../../assets/NewArrivalsImages/NewArrivals2.png';
import img3 from '../../assets/NewArrivalsImages/NewArrivals3.png';
import img4 from '../../assets/NewArrivalsImages/NewArrivals4.png';
import img5 from '../../assets/NewArrivalsImages/NewArrivals5.png';
import img6 from '../../assets/NewArrivalsImages/NewArrivals6.png';
const products = [
  {
    id: 1,
    name: 'Graphic T-Shirt',
    price: '₹699',
    oldPrice: '₹999',
    rating: '5.0',
    reviews: '76',
    img: img1
  },
  {
    id: 2,
    name: 'Cargo Pants',
    price: '₹1,799',
    oldPrice: '₹2,609',
    rating: '4.8',
    reviews: '84',
    img: img2
  },
  {
    id: 3,
    name: 'Bomber Jacket',
    price: '₹2,499',
    oldPrice: '₹3,500',
    rating: '4.9',
    reviews: '78',
    img: img3
  },
  {
    id: 4,
    name: 'Athleisure Hoodie',
    price: '₹1,499',
    oldPrice: '₹2,099',
    rating: '4.7',
    reviews: '80',
    img: img4
  },
  {
    id: 5,
    name: 'Denim Shirt',
    price: '₹1,499',
    oldPrice: '₹2,100',
    rating: '4.9',
    reviews: '90',
    img: img5
  },
  {
    id: 6,
    name: 'Polo T-Shirt',
    price: '₹999',
    oldPrice: '₹1,499',
    rating: '4.6',
    reviews: '51',
    img: img6
  }
];

const NewArrivals = () => {
  return (
    <div className="new-arrivals-section-bg bg-white py-4 w-100">
      <section className="container position-relative">
        
        {/* Header Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4 px-2">
          <h4 className="text-uppercase fw-bold text-dark m-0 letter-spacing-1 fs-5">
            NEW ARRIVALS
          </h4>
          <a href="/shop" className="view-all-link text-uppercase small text-decoration-none fw-semibold">
            VIEW ALL <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="swiper-outer-container position-relative">
          
          {/* External Navigation Arrows */}
          <button className="new-arrivals-prev-btn">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="new-arrivals-next-btn">
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              prevEl: '.new-arrivals-prev-btn',
              nextEl: '.new-arrivals-next-btn',
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
            className="new-arrivals-swiper py-2"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card border bg-white h-100 d-flex flex-column justify-content-between">
                  
                  {/* Top Image Box with NEW Badge */}
                  <div className="product-img-box position-relative overflow-hidden">
                    <span className="badge-new text-uppercase">NEW</span>
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-100 h-100 object-fit-cover" 
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-2 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <span className="product-title d-block text-muted text-truncate">
                        {product.name}
                      </span>

                      {/* Pricing and Ratings Row */}
                      <div className="d-flex align-items-center justify-content-between mt-1">
                        <div>
                          <span className="fw-bold text-dark fs-7">{product.price}</span>
                          <span className="text-muted text-decoration-line-through ms-1 fs-8">
                            {product.oldPrice}
                          </span>
                        </div>
                        <div className="rating-block text-muted fs-9">
                          <span className="stars text-muted">★★★★★</span>
                          <span className="ms-1">({product.reviews})</span>
                        </div>
                      </div>
                    </div>

                    {/* Add To Cart Button */}
                    <button className="btn btn-add-cart w-100 text-uppercase rounded-0 mt-2">
                      ADD TO CART
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>
    </div>
  );
};

export default NewArrivals;