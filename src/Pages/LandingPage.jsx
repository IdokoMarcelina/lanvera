// LandingPage.jsx
import React from 'react';
import Hero from '../components/hero/Hero';
import Trendpage from '../components/trending/Trendpage';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Trendpage />
      <Footer />
    </>
  );
};

export default LandingPage;
