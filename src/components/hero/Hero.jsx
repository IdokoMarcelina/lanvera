import React, { useState } from 'react'
import Navbar from '../Navbar'
import hero from '../../assets/hero.png'
import LocationSelector from './LocationSelector'
import Status from './Status'
import PropertyType from './PropertyType'
import { CiSearch } from "react-icons/ci";
const Hero = () => {

  return (
    <div  className=" px-4 py-1  relative min-h-screen  lg:bg-center  bg-cover "
    style={{ backgroundImage: `url(${hero})`  }}>
        
        <Navbar/>
      
        <h1 className='text-white lg:text-[30px] text-[29px] font-bold absolute top-[479px] lg:top-[329px] left-[52px] lg:left-[490px]'>Welcome to Lanvera</h1>
        <Status />
        <div className="absolute top-[587px] lg:top-[432px] left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-1 lg:px-4 ">
            <div className="bg-white rounded-[12px] p-3 shadow-md flex flex-col md:flex-row gap-6 lg:gap-10 items-center justify-center">
              <LocationSelector />
              <PropertyType />
              <button className="bg-[#d93e00] block place-items-center  lg:hidden  w-[200px] text-white  rounded-[4px]">
                  
                  <CiSearch className="text-xl place-items-center m-2  " />
                  
              </button>
              <button className="bg-[#d93e00] hidden lg:block  text-white lg:px-2 lg:py-2 rounded-[4px]  items-center gap-2">
                  <CiSearch className="text-xl" />
                  
              </button>
            </div>
     </div>




    </div>
  )
}

export default Hero