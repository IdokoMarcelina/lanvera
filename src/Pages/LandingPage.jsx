// // LandingPage.jsx
// import React from 'react';
// import Hero from '../components/hero/Hero';
// import Trendpage from '../components/trending/Trendpage';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// const LandingPage = () => {
//   return (
//     <>
//       <Hero />
//       <Trendpage />
//       <Footer />
//     </>
//   );
// };

// export default LandingPage;


import React, { useState } from 'react';
import Hero from '../components/hero/Hero';
import Trendpage from '../components/trending/Trendpage';
import Footer from '../components/Footer';
import Signin from '../pages/auth/Signin';
import Signup from '../pages/auth/Signup';

const LandingPage = () => {
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className={showSignin || showSignup ? ' overflow-hidden' : ''}>
      <Hero setShowSignin={setShowSignin} />
      <Trendpage />
      <Footer />

      {showSignin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowSignin(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {/* No extra bg-white box */}
            <Signin
              onSwitchToSignup={() => {
                setShowSignin(false);
                setShowSignup(true);
              }}
              onCloseModal={() => setShowSignin(false)}
            />
          </div>
        </div>
      )}



      {showSignup && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
            >
              &times;
            </button>
            <Signup
              onSwitchToSignin={() => {
                setShowSignup(false);
                setShowSignin(true);
              }}
              onCloseModal={() => setShowSignup(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
