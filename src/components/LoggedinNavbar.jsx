import React, { useState } from 'react'
import logo from '../assets/logo.png'
import muiz from '../assets/Muiz.png'
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";

const LoggedinNavbar = () => {

    const [active, setActive] = useState('home')

    const [showDropdown, setShowDropDown] = useState(false)

    const toggleDropdown = ()=>{
        setShowDropDown(!showDropdown)
    }

const showNumberOfNotifcation = ()=>{

}

const notifications = {
    profile: 2,
    myListing: 0,
    messages: 4,
    favorite: 1,
    performance: 0,
    settings: 0,
  };

const totalNotifications = Object.values(notifications).reduce((a, b) => a + b, 0);





  return (
    <div className='flex px-[30px] py-[10px] justify-between items-center bg-[#5588bd] text-white'>

        <div className="logo w-[120px]">
            <img src={logo} alt="" />
        </div>


        <div className="others flex gap-5">
            {['home', 'about', 'faq', 'contact'].map((item) => (
            <div key={item} className="flex flex-col items-center cursor-pointer" onClick={() => setActive(item)}>
                <span className="capitalize">{item === 'faq' ? 'FAQs' : item === 'contact' ? 'Contact Us' : item === 'about' ? 'About Us' : 'Home'}</span>
                {active === item && (
                <div className='border-b-white border-b-2 w-[60px] mt-1'></div>
                )}
            </div>
            ))}
        </div>

        <div className="right">
            <div className='flex  gap-5' >
                <div className="notify relative flex justify-center items-center border border-white rounded-full w-[50px]"
                    onClick={toggleDropdown}
                >
                     <img  src={muiz} alt="user" />
                     {totalNotifications > 0 && (
                        <p className='absolute top-0 right-0 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center'>
                            {totalNotifications}
                        </p>
                    )}
                </div>


                {showDropdown && (
                    <div className='absolute right-25 top-[60px] bg-white rounded-[4px] text-gray-500 w-[200px] shadow-2xl p-2 z-50'>
                    <DropdownItem icon={<MdOutlinePersonOutline />} label="Profile" count={notifications.profile} />
                    <DropdownItem icon={<AiOutlineProfile />} label="My Listing" count={notifications.myListing} />
                    <DropdownItem icon={<FaRegEnvelope />} label="Messages" count={notifications.messages} />
                    <DropdownItem icon={<MdFavoriteBorder />} label="Favorite" count={notifications.favorite} />
                    <DropdownItem icon={<GiNetworkBars />} label="Performance" count={notifications.performance} />
                    <DropdownItem icon={<IoSettingsOutline />} label="Settings" count={notifications.settings} />
                    </div>
                )}



                <p className='bg-red-600 rounded-[4px] px-[8px] h-[45px] flex items-center'>List Property</p>
            </div>
        </div>

        
        
    </div>
  )
}

// const DropdownItem = ({ icon, label }) => (
//     <div className='flex mb-2 items-center relative gap-2'>
//       {icon}
//       <div className='flex justify-between w-full'>
//         <p>{label}</p>
//         <p className='absolute top-1 left-38 text-white bg-red-600 w-[15px] h-[15px] rounded-full flex justify-center items-center'>1</p>
//       </div>
//     </div>
//   );
  

const DropdownItem = ({ icon, label, count }) => (
    <div className='flex mb-2 items-center relative gap-2'>
      {icon}
      <div className='flex justify-between w-full'>
        <p>{label}</p>
        {count > 0 && (
          <p className='absolute top-1 left-38 text-white bg-red-600 w-[15px] h-[15px] rounded-full flex justify-center items-center text-[10px]'>
            {count}
          </p>
        )}
      </div>
    </div>
  );

export default LoggedinNavbar