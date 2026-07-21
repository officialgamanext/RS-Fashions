import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Collections = () => {
  return (
    <div className="bg-black text-white min-vh-100 d-flex flex-column justify-content-between">
      <Header />
      <div className="container py-5 my-5 text-center">
        <h2 className="text-uppercase fw-bold letter-spacing-1">Collections</h2>
        <p className="text-secondary mt-2">Explore curated seasonal & urban collections.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;