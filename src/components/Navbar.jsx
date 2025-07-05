// 

import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ setShowSignin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className='text-white bg-transparent relative z-50 px-6 py-3 flex justify-between items-center'>
      {/* Logo */}
      <div className="logo w-[100px]">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-5">
        {menuLinks.map(({ name, path }) => (
          <Link to={path} key={name}>
            <div className="flex flex-col items-center cursor-pointer">
              <span>{name}</span>
              {isActive(path) && (
                <div className='border-b-white border-b-2 w-[60px] mt-1'></div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Right CTA */}
      <div className="hidden md:flex">
        <button
          className='bg-[#d93e00] rounded-[4px] px-[15px] h-[37px] flex items-center cursor-pointer'
          onClick={() => setShowSignin(true)}
        >
          Get Started
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#222] text-white p-4 flex flex-col gap-4 md:hidden z-50">
          {menuLinks.map(({ name, path }) => (
            <Link
              to={path}
              key={name}
              onClick={() => setMobileMenuOpen(false)} // close on click
            >
              <span className={`block py-1 ${isActive(path) ? 'text-[#d93e00]' : ''}`}>
                {name}
              </span>
            </Link>
          ))}

          <button
            className='bg-[#d93e00] rounded px-4 py-2 text-white'
            onClick={() => {
              setShowSignin(true);
              setMobileMenuOpen(false);
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
