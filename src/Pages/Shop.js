import React from 'react';
import Hero from '../Components/Hero';
import Popular from '../Components/Popular';
import Offers from '../Components/Offers';
import NewCollections from '../Components/NewCollections';
import NewsLetter from '../Components/NewsLetter';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const Shop = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
      <Footer/>
    </div>
  );
}

export default Shop;
