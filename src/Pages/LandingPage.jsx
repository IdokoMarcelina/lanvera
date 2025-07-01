import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero/Hero'
import Trending from '../components/trending/Trending'
import Trendpage from '../components/trending/Trendpage'
import Footer from '../components/Footer'
import Signup from './auth/Signup'
import Signin from './auth/Signin'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <Trendpage/>
        <Footer/>
    </div>
  )
}

export default LandingPage