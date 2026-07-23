import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductListing from '../../components/ProductListing/ProductListing';
import './Shop.css';

// Product list mapping to Shop1.png through Shop22.png
const productsData = [
  { id: 1, name: 'Classic Black Shirt', price: '₹1,299', rating: 4.8, reviews: 128, isNew: true, colors: ['#000000', '#1c1c1c'] },
  { id: 2, name: 'Premium Cotton T-Shirt', price: '₹899', rating: 4.7, reviews: 96, isNew: true, colors: ['#000000', '#111111'] },
  { id: 3, name: 'Slim Fit Chinos', price: '₹1,899', rating: 4.6, reviews: 87, isNew: false, colors: ['#000000', '#2b2b2b'] },
  { id: 4, name: 'Denim Jacket', price: '₹2,499', rating: 4.9, reviews: 76, isNew: false, colors: ['#000000', '#1a1a1a'] },
  { id: 5, name: 'Formal Leather Shoes', price: '₹3,499', rating: 4.8, reviews: 112, isNew: true, colors: ['#000000'] },
  { id: 6, name: 'Aviator Sunglasses', price: '₹899', rating: 4.5, reviews: 76, isNew: false, colors: ['#222222', '#555555'] },
  { id: 7, name: 'Black Leather Watch', price: '₹1,599', rating: 4.7, reviews: 65, isNew: false, colors: ['#111111'] },
  { id: 8, name: 'Minimal White Sneakers', price: '₹2,199', rating: 4.9, reviews: 54, isNew: true, colors: ['#ffffff', '#000000'] },
  { id: 9, name: 'Linen Casual Shirt', price: '₹1,499', rating: 4.6, reviews: 98, isNew: false, colors: ['#000000', '#dcdcdc'] },
  { id: 10, name: 'Bomber Jacket', price: '₹2,999', rating: 4.8, reviews: 79, isNew: false, colors: ['#2b2b2b', '#ffffff'] },
  { id: 11, name: 'Leather Loafers', price: '₹2,799', rating: 4.7, reviews: 68, isNew: false, colors: ['#4a2e18'] },
  { id: 12, name: 'Premium Backpack', price: '₹1,999', rating: 4.5, reviews: 45, isNew: false, colors: ['#000000'] },
  { id: 13, name: 'Urban Cargo Pants', price: '₹1,799', rating: 4.6, reviews: 52, isNew: true, colors: ['#1c1c1c'] },
  { id: 14, name: 'Classic Polo T-Shirt', price: '₹999', rating: 4.8, reviews: 84, isNew: false, colors: ['#000000', '#ffffff'] },
  { id: 15, name: 'Casual Denim Shirt', price: '₹1,699', rating: 4.7, reviews: 61, isNew: false, colors: ['#2b2b2b'] },
  { id: 16, name: 'Suede Chelsea Boots', price: '₹3,899', rating: 4.9, reviews: 43, isNew: true, colors: ['#4a2e18'] },
  { id: 17, name: 'Lightweight Windbreaker', price: '₹2,299', rating: 4.5, reviews: 39, isNew: false, colors: ['#111111'] },
  { id: 18, name: 'Graphic Printed Tee', price: '₹799', rating: 4.6, reviews: 90, isNew: true, colors: ['#000000'] },
  { id: 19, name: 'Formal Trousers', price: '₹1,599', rating: 4.7, reviews: 71, isNew: false, colors: ['#1c1c1c'] },
  { id: 20, name: 'Sports Running Shoes', price: '₹2,599', rating: 4.8, reviews: 88, isNew: false, colors: ['#ffffff', '#000000'] },
  { id: 21, name: 'Leather Belt', price: '₹699', rating: 4.9, reviews: 104, isNew: false, colors: ['#000000', '#4a2e18'] },
  { id: 22, name: 'Oversized Hoodie', price: '₹2,199', rating: 4.8, reviews: 67, isNew: true, colors: ['#2b2b2b'] },
];

const Shop = () => {
  return (
    <div className="plp-page bg-light min-vh-100 d-flex flex-column justify-content-between">
      <Header />
      
      {/* Reusable Product Listing with images attached */}
      <ProductListing products={productsData} totalPages={15} />

      <Footer />
    </div>
  );
};

export default Shop;