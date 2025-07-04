import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoggedinNavbar from './components/LoggedinNavbar';
import LandingPage from './Pages/LandingPage';
import Signin from './pages/auth/Signin';
import Signup from './Pages/auth/Signup';
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
