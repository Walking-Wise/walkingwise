import React from 'react'
import Navbar from '../Navbar'
import PartOne from './PartOne'
import PartTwo from './PartTwo'
import Footer from '../Footer'
import CourseSection from './CourseSection'

const Hero = () => {
  return (
    <div className='mx-auto'>
    <Navbar/>
    <CourseSection />
    {/* <PartOne/>
    <PartTwo/> */}
    <Footer/>
    </div>
  )
}

export default Hero