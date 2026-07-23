import React, { useState } from 'react';
import { Shirt, Footprints, Glasses, Layers, UserCheck, Tag } from 'lucide-react';
import './ProductListing.css';
const shopImages = import.meta.glob('../../assets/ShopImages/*.{png,jpg,jpeg,PNG,JPG}', {
  eager: true,
  import: 'default',
});

// Helper function to safely resolve dynamic image paths
const getShopImage = (num) => {
  const matchedKey = Object.keys(shopImages).find((path) =>
    path.toLowerCase().endsWith(`/shop${num}.png`) ||
    path.toLowerCase().endsWith(`/shop${num}.jpg`) ||
    path.toLowerCase().endsWith(`/shop${num}.jpeg`)
  );
  return matchedKey ? shopImages[matchedKey] : '';
};

const defaultCategories = [
  { id: 1, name: 'Clothing', count: '120+ Items', Icon: Shirt },
  { id: 2, name: 'Footwear', count: '80+ Items', Icon: Footprints },
  { id: 3, name: 'Accessories', count: '60+ Items', Icon: Glasses },
  { id: 4, name: 'Jackets', count: '50+ Items', Icon: Layers },
  { id: 5, name: 'Pants', count: '70+ Items', Icon: UserCheck },
  { id: 6, name: 'Shirts', count: '90+ Items', Icon: Tag },
];

const ProductListing = ({ products = [], totalPages = 15, categories = defaultCategories }) => {
  const [priceRange, setPriceRange] = useState(4999);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination calculation
  const itemsPerPage = 12;
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  // Map products to local images dynamically
  const currentProducts = products
    .slice(indexOfFirstProduct, indexOfLastProduct)
    .map((prod, index) => ({
      ...prod,
      img: prod.img || getShopImage(indexOfFirstProduct + index + 1),
    }));

  return (
    <main className="container-fluid px-lg-5 py-4 flex-grow-1">
      {/* Top Category Banner */}
      <div className="category-top-banner py-3 mb-4">
        <div className="row text-center g-0 align-items-center">
          {categories.map((cat, index) => {
            const IconComponent = cat.Icon;
            return (
              <div 
                key={cat.id} 
                className={`col-6 col-sm-4 col-md-2 ${
                  index !== categories.length - 1 ? 'border-end-divider' : ''
                }`}
              >
                <div className="cat-card p-2 d-flex align-items-center justify-content-center gap-3">
                  <IconComponent size={32} strokeWidth={1.5} className="category-icon" />
                  <div className="text-start">
                    <span className="category-name d-block">{cat.name}</span>
                    <span className="category-count d-block">{cat.count}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content: Sidebar Filters + Product Grid */}
      <div className="row g-4">
        {/* Left Sidebar Filters */}
        <aside className="col-lg-3 col-xl-2 text-start">
          <div className="filter-sidebar bg-white border p-3 rounded-1">
            <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-3">
              <h6 className="fw-bold text-uppercase m-0 tracking-wider">FILTERS</h6>
              <i className="fa-solid fa-sliders text-secondary"></i>
            </div>

            {/* Category Filter */}
            <div className="filter-group mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold fs-8 text-uppercase text-secondary">CATEGORIES</span>
                <i className="fa-solid fa-minus fs-9 text-muted"></i>
              </div>
              <ul className="list-unstyled mb-0 filter-list fs-8">
                <li><input type="checkbox" id="cat1" /> <label htmlFor="cat1">T-Shirts <span>(28)</span></label></li>
                <li><input type="checkbox" id="cat2" /> <label htmlFor="cat2">Shirts <span>(36)</span></label></li>
                <li><input type="checkbox" id="cat3" /> <label htmlFor="cat3">Pants <span>(24)</span></label></li>
                <li><input type="checkbox" id="cat4" /> <label htmlFor="cat4">Jackets <span>(22)</span></label></li>
                <li><input type="checkbox" id="cat5" /> <label htmlFor="cat5">Footwear <span>(30)</span></label></li>
                <li><input type="checkbox" id="cat6" /> <label htmlFor="cat6">Accessories <span>(20)</span></label></li>
              </ul>
            </div>

            {/* Price Range Filter */}
            <div className="filter-group mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="fw-bold fs-8 text-uppercase text-secondary">PRICE RANGE</span>
                <i className="fa-solid fa-minus fs-9 text-muted"></i>
              </div>

              <input 
                type="range"
                className="custom-price-slider w-100"
                min="799"
                max="4999"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                style={{
                  background: `linear-gradient(to right, #0d6efd 0%, #0d6efd ${
                    ((priceRange - 799) / (4999 - 799)) * 100
                  }%, #e9ecef ${
                    ((priceRange - 799) / (4999 - 799)) * 100
                  }%, #e9ecef 100%)`,
                }}
              />

              <div className="d-flex justify-content-between range-labels mt-2">
                <span>₹799</span>
                <span>₹{priceRange}</span>
              </div>

              <button className="btn btn-dark w-100 btn-sm text-uppercase fw-bold rounded-0 mt-3">
                APPLY FILTER
              </button>
            </div>

            {/* Size Filter */}
            <div className="filter-group mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold fs-8 text-uppercase text-secondary">SIZE</span>
                <i className="fa-solid fa-minus fs-9 text-muted"></i>
              </div>
              <ul className="list-unstyled mb-0 filter-list fs-8">
                <li><input type="checkbox" id="s1" /> <label htmlFor="s1">S <span>(34)</span></label></li>
                <li><input type="checkbox" id="s2" /> <label htmlFor="s2">M <span>(44)</span></label></li>
                <li><input type="checkbox" id="s3" /> <label htmlFor="s3">L <span>(44)</span></label></li>
                <li><input type="checkbox" id="s4" /> <label htmlFor="s4">XL <span>(34)</span></label></li>
                <li><input type="checkbox" id="s5" /> <label htmlFor="s5">XXL <span>(24)</span></label></li>
              </ul>
            </div>

            {/* Color Filter */}
            <div className="filter-group mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold fs-8 text-uppercase text-secondary">COLOR</span>
                <i className="fa-solid fa-minus fs-9 text-muted"></i>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <span className="color-dot bg-dark"></span>
                <span className="color-dot bg-light border"></span>
                <span className="color-dot bg-secondary"></span>
                <span className="color-dot bg-primary"></span>
                <span className="color-dot" style={{ backgroundColor: '#556B2F' }}></span>
                <span className="color-dot" style={{ backgroundColor: '#8B4513' }}></span>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="filter-group mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold fs-8 text-uppercase text-secondary">BRAND</span>
                <i className="fa-solid fa-minus fs-9 text-muted"></i>
              </div>
              <ul className="list-unstyled mb-0 filter-list fs-8">
                <li><input type="checkbox" id="b1" /> <label htmlFor="b1">RS Fashions <span>(68)</span></label></li>
                <li><input type="checkbox" id="b2" /> <label htmlFor="b2">Premium <span>(40)</span></label></li>
                <li><input type="checkbox" id="b3" /> <label htmlFor="b3">Classic <span>(36)</span></label></li>
                <li><input type="checkbox" id="b4" /> <label htmlFor="b4">Urban <span>(36)</span></label></li>
              </ul>
            </div>

            <button className="btn btn-outline-dark w-100 btn-sm text-uppercase fw-bold rounded-0 mt-2">CLEAR ALL</button>
          </div>
        </aside>

        {/* Product Grid Column */}
        <main className="col-lg-9 col-xl-10">
          {/* Top Toolbar */}
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 text-start">
            <span className="text-secondary fs-8">Showing {currentProducts.length} results</span>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2 text-nowrap">
                <span className="fs-8 text-secondary text-nowrap">Sort by:</span>
                <select className="form-select form-select-sm rounded-0 border-secondary fs-8 w-auto">
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Popularity</option>
                </select>
              </div>
              <div className="view-toggle-btns d-flex gap-1">
                <button className="btn btn-dark btn-sm rounded-0"><i className="fa-solid fa-border-all"></i></button>
                <button className="btn btn-outline-dark btn-sm rounded-0"><i className="fa-solid fa-list"></i></button>
              </div>
            </div>
          </div>

          {/* Product Cards or Empty State */}
          {currentProducts.length > 0 ? (
            <div className="row g-3">
              {currentProducts.map((prod) => (
                <div key={prod.id} className="col-6 col-md-4 col-xl-3">
                  <div className="plp-product-card bg-white border h-100 d-flex flex-column justify-content-between text-start position-relative">
                    <div className="plp-img-box position-relative overflow-hidden">
                      {prod.isNew && (
                        <span className="badge bg-black text-white rounded-0 position-absolute top-0 start-0 m-2 z-2 fs-9">NEW</span>
                      )}
                      <button className="wishlist-icon-btn position-absolute top-0 end-0 m-2 z-2 border-0 bg-white rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <img src={prod.img} alt={prod.name} className="w-100 h-100 object-fit-cover plp-img" />
                      <button className="quick-view-btn position-absolute bottom-0 end-0 m-2 border-0 bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm">
                        <i className="fa-regular fa-eye"></i>
                      </button>
                    </div>

                    <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
                      <div>
                        <h6 className="plp-prod-title fw-normal text-secondary mb-1">{prod.name}</h6>
                        <div className="fw-bold text-dark fs-7 mb-1">{prod.price}</div>
                        <div className="d-flex align-items-center gap-1 mb-2 fs-9">
                          <div className="stars text-warning">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa-solid fa-star"></i>
                            ))}
                          </div>
                          <span className="text-muted fs-9">({prod.reviews})</span>
                        </div>
                      </div>

                      <div className="d-flex gap-1 mt-1">
                        {prod.colors.map((c, i) => (
                          <span key={i} className="swatch-circle" style={{ backgroundColor: c }}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-5 my-5 text-center text-muted border bg-white">
              <h5 className="fw-semibold mb-2">No Products Available</h5>
              <p className="small mb-0">Products will be added tomorrow.</p>
            </div>
          )}

          {/* Interactive Pagination */}
          <div className="pagination-wrapper d-flex justify-content-center align-items-center gap-2 mt-5">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="btn btn-light border btn-sm rounded-0 px-3 pagination-btn"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button
              onClick={() => setCurrentPage(1)}
              className={`btn btn-sm rounded-0 px-3 ${
                currentPage === 1 ? 'btn-dark fw-bold' : 'btn-light border text-muted'
              }`}
            >
              1
            </button>

            {currentPage > 4 && <span className="text-muted fs-8 px-1">...</span>}

            {Array.from({ length: totalPages }, (_, index) => index + 1)
              .filter((page) => {
                if (currentPage <= 4) return page >= 2 && page <= 5;
                if (currentPage >= totalPages - 3) return page >= totalPages - 4 && page < totalPages;
                return page >= currentPage - 1 && page <= currentPage + 1;
              })
              .map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`btn btn-sm rounded-0 px-3 ${
                    currentPage === pageNum ? 'btn-dark fw-bold' : 'btn-light border text-muted'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

            {currentPage < totalPages - 3 && <span className="text-muted fs-8 px-1">...</span>}

            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`btn btn-sm rounded-0 px-3 ${
                currentPage === totalPages ? 'btn-dark fw-bold' : 'btn-light border text-muted'
              }`}
            >
              {totalPages}
            </button>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="btn btn-light border btn-sm rounded-0 px-3 pagination-btn"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </main>
      </div>
    </main>
  );
};

export default ProductListing;