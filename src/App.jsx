import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoggedinNavbar from './components/LoggedinNavbar';
import LandingPage from './Pages/LandingPage';
import Signin from './pages/auth/Signin';
import Home from './Pages/Home';
import { useAuth } from './context/AuthContext';
import Faq from './Pages/faq/Faq';

function App() {
 
  return (
    <>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/nav" element={<LoggedinNavbar />} /> */}
      </Routes>
    </>
  );
}

export default App;



// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import LoggedinNavbar from './components/LoggedinNavbar';
// import LandingPage from './Pages/LandingPage';
// import Signin from './pages/auth/Signin';
// import Signup from './Pages/auth/Signup';
// import Home from './Pages/Home';
// import { useAuth } from './context/AuthContext';
// import Faq from './Pages/faq/Faq';

// function App() {
//   const [showSignin, setShowSignin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   const { user, loading } = useAuth();

//   if (loading) return null;
//   return (
//     <>
//       {user ? (
//         <LoggedinNavbar />
//       ) : (
//         <Navbar setShowSignin={setShowSignin} />
//       )}

//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/faq" element={<Faq />} />
//         {/* <Route path="/nav" element={<LoggedinNavbar />} /> */}
//       </Routes>

//       {showSignin && (
//         <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="relative">
//             <button
//               onClick={() => setShowSignin(false)}
//               className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
//             >
//               &times;
//             </button>
//             <Signin
//               onSwitchToSignup={() => {
//                 setShowSignin(false);
//                 setShowSignup(true);
//               }}
//               onCloseModal={() => setShowSignin(false)} 
//             />
//           </div>
//         </div>
//       )}

//       {showSignup && (
//         <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="relative">
//             <button
//               onClick={() => setShowSignup(false)}
//               className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
//             >
//               &times;
//             </button>
//             <Signup
//               onSwitchToSignin={() => {
//                 setShowSignup(false);
//                 setShowSignin(true);
//               }}
//               onCloseModal={() => setShowSignup(false)}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;




