import React from 'react';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ setShowSignin }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className='flex px-[30px] py-[10px] justify-between items-center text-white bg-transparent'>
      <div className="logo w-[120px]">
        <img src={logo} alt="logo" />
      </div>

      <div className="others flex gap-5">
        {[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'FAQs', path: '/faq' },
          { name: 'Contact Us', path: '/contact' },
        ].map(({ name, path }) => (
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

      <div className="right">
        <div className='flex gap-5'>
          <p
            className='bg-[#d93e00] rounded-[4px] px-[15px] h-[37px] flex items-center cursor-pointer'
            onClick={() => setShowSignin(true)}
          >
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
