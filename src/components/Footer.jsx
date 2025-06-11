import React from 'react';
import logo from '../assets/logo.png';
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='bg-[#f6f7f9]'>
      <div className='flex flex-col lg:flex-row p-10 gap-10 text-[10px]'>
        
        {/* One - Always Visible */}
        <div className="one">
          <img src={logo} alt="Lanvera logo" className='mb-4' />
          <p className='lg:w-[490px] mb-4 text-gray-600'>
            We help you meet trusted agents and find right properties without
            stress whether you're buying or investing, we make the whole process easier.
            Explore properties that match your plans and lifestyle.
          </p>
          <div className="icons flex gap-5 mt-10">
            <BsTwitterX />
            <RiInstagramFill />
            <FaFacebook />
            <TbBrandLinkedinFilled />
          </div>
        </div>

        {/* Two - Hidden on small screens */}
        <div className="two hidden lg:flex flex-col w-[400px]">
          <h3 className='font-bold mb-3'>Quick Links</h3>
          <a className='text-gray-600 mb-3' href="">Privacy policy</a>
          <a className='text-gray-600 mb-3' href="">FaQs</a>
          <a className='text-gray-600 mb-3' href="">Sign in</a>
          <a className='text-gray-600 mb-3' href="">Create account</a>
          <a className='text-gray-600 mb-3' href="">Properties</a>
        </div>

        {/* Three - Hidden on small screens */}
        <div className="three hidden lg:flex flex-col w-[400px]">
          <h3 className='font-bold mb-3'>Company</h3>
          <a className='text-gray-600 mb-3' href="">About us</a>
          <a className='text-gray-600 mb-3' href="">Services</a>
          <a className='text-gray-600 mb-3' href="">Testimonial</a>
          <a className='text-gray-600 mb-3' href="">Blog</a>
        </div>

        {/* Four - Hidden on small screens */}
        <div className="four hidden lg:flex flex-col w-[400px]">
          <h3 className='font-bold mb-3'>Support</h3>
          <a className='text-gray-600 mb-3' href="">Help Center</a>
          <a className='text-gray-600 mb-3' href="">Term of use</a>
          <a className='text-gray-600 mb-3' href="">Community</a>
          <a className='text-gray-600 mb-3' href="">Contact us</a>
        </div>

        {/* Five - Hidden on small screens */}
        <div className="five hidden lg:flex flex-col w-[400px]">
          <h3 className='font-bold mb-3'>NewsLetter Signup</h3>
          <p className='text-gray-600 mb-3'>
            Be the first to know about new properties and updates
            from Lanvera. Join our newsletter and stay in the loop!
          </p>
          <div className='flex justify-between mt-10'>
            <input
              className='bg-white border-2 p-1 border-white rounded-[4px] text-[12px]'
              type="email"
              placeholder='Enter your email'
            />
            <button className='bg-[#d93e00] text-white w-[80px] rounded-[12px]'>Submit</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom  flex flex-col lg:flex-row text-[12px] justify-between m-10 pb-10 gap-2">
        <p className='text-gray-600'>&copy; 2025 Lanvera. All rights reserved</p>
        <div className=' hidden lg:flex  items-center gap-2'>
          <p className='text-gray-600'>About Company</p>
          <span className='border h-3 border-gray-600'></span>
          <p className='text-gray-600'>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
