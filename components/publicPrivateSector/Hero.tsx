import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import PublicPrivateSectorPage from './PublicPrivateSectorPage'

const Hero = () => {
  return (
    <div className=' mx-auto'>
    <Navbar/>
    <PublicPrivateSectorPage />
    <Footer/>
    </div>
  )
}

export default Hero