import React, { useState, useEffect } from 'react';
import Hero from '../components/hero/Hero';
import Trendpage from '../components/trending/Trendpage';
import Footer from '../components/Footer';
import Signin from './auth/Signin';

const LandingPage = () => {
  const [showSignin, setShowSignin] = useState(false);

  // Optional: prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showSignin ? 'hidden' : 'auto';
  }, [showSignin]);

  return (
    <div className="relative">
      {/* Dimmable Content */}
      <div className={`transition-all duration-300 ${showSignin ? 'opacity-20 blur-sm pointer-events-none' : ''}`}>
        <Hero setShowSignin={setShowSignin} />
        <Trendpage />
        <Footer />
      </div>

      {/* Modal Overlay */}
      {showSignin && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setShowSignin(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
            >
              &times;
            </button>
            <Signin />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
