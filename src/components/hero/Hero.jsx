import React, { useState } from 'react'
import Navbar from '../Navbar'
import hero from '../../assets/hero.png'
import LocationSelector from './LocationSelector'
import Status from './Status'
import PropertyType from './PropertyType'
import { CiSearch } from "react-icons/ci";
const Hero = () => {

  return (
    <div  className=" px-4 py-1  relative h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${hero})` }}>
        
        <Navbar/>

        <h1 className='text-white text-[30px] font-bold absolute top-[329px] left-[220px] lg:left-[420px]'>Welcome to Lanvera</h1>
        <Status />
        <div className="absolute top-[423px] left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 ">
            <div className="bg-white rounded-[12px] p-3 shadow-md flex flex-col md:flex-row gap-10 items-center justify-center">
            <LocationSelector />
            <PropertyType />
            <button className="bg-[#d93e00] text-white px-4 py-2 rounded-[12px] flex items-center gap-2">
                <CiSearch className="text-xl" />
                
            </button>
            </div>
     </div>




    </div>
  )
}

export default Hero