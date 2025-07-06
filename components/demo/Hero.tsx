import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import DemoPage from './DemoPage'

const Hero = () => {
  return (
    <div className=' mx-auto'>
    <Navbar/>
    <DemoPage />
    <Footer/>
    </div>
  )
}

export default Hero