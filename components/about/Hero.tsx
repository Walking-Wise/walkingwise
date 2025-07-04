import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AboutUs from './AboutUs'

const Hero = () => {
  return (
    <div className='mx-auto'>
    <Navbar/>
    <AboutUs />
    <Footer/>
    </div>
  )
}

export default Hero