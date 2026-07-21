import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Shop.css'; // Make sure this matches your CSS filename exactly too!

const Shop = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <div className="container py-5 text-center">
        <h2 className="text-uppercase tracking-wider py-5">Shop Collection Coming Soon</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;