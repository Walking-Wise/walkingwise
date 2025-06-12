import React from 'react'
import PartOne from './PartOne'
import PartTwo from './PartTwo'
import PartThree from './PartThree'
import PartFour from './PartFour'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Hero = () => {
  return (
    <div className=' mx-auto'>
      <Navbar/>
    <PartOne/>
    <PartTwo/>
    <PartThree/>
    <PartFour/>
    <Footer/>
    </div>
  )
}

export default Hero