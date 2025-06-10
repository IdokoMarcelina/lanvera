import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        
        <div className="flex justify-between items-center bg-white rounded-[12px]  py-1 px-4 ">
            <div className="logo">
                <img className='w-[100px]' src={logo} alt="" />
            </div>

            <div>
                <button className='bg-[#d93e00] text-white w-[120px] h-[35px] rounded-[12px]' >Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar