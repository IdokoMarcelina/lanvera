import React from 'react'
import hero from '../../assets/newhero.png'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const FaqHero = () => {
  return (
    <div
         className="px-4 py-1 relative min-h-screen lg:bg-center bg-cover"
         style={{ backgroundImage: `url(${hero})` }}
       >
        <div className='relative z-20'>
          <Navbar/>
        </div>

        <div className='absolute  top-0 left-0 w-full z-10 h-[430px]'
            style={{background: 'linear-gradient(180.13deg, #80B2DF 56.72%, rgba(128, 178, 223, 0.880282) 74.95%, rgba(128, 178, 223, 0) 99.89%)'}}
        >
           
        </div>

        <div className='relative text-center mt-[25px] z-30'>
            <h4 className='text-white text-2xl font-bold'>Frequently Asked Questions</h4>
            <p className='text-white'>Explore common questions about using lanvera and make your experience easier</p>
        </div>

        
    </div>
  )
}

export default FaqHero