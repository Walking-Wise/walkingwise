import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import PartOne from './PartOne'
import PartTwo from './PartTwo'

const Hero = () => {
  return (
    <div className=' mx-auto'>
    <Navbar/>
    <PartOne/>
    <PartTwo/>
    <Footer/>
    </div>
  )
}

export default Hero