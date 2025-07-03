import React from 'react'
import Navbar from '../Navbar'
import PartOne from './PartOne'
import PartTwo from './PartTwo'
import Footer from '../Footer'

const Hero = () => {
  return (
    <div className=' mx-auto'>
    <Navbar/>
    <PartOne/>

    <Footer/>
    </div>
  )
}

export default Hero