import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero/Hero'
import Trending from '../components/trending/Trending'
import Trendpage from '../components/trending/Trendpage'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <Trendpage/>
    </div>
  )
}

export default LandingPage