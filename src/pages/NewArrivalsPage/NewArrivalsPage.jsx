import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const NewArrivalsPage = () => {
  return (
    <div className="bg-black text-white min-vh-100 d-flex flex-column justify-content-between">
      <Header />
      <div className="container py-5 my-5 text-center">
        <h2 className="text-uppercase fw-bold letter-spacing-1">New Arrivals</h2>
        <p className="text-secondary mt-2">Discover our latest collection of premium menswear.</p>
      </div>
      <Footer />
    </div>
  );
};

export default NewArrivalsPage;