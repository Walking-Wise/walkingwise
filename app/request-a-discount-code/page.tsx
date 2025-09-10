import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import DiscountCodeRequestForm from '@/components/descountCodeRequestForm/DiscountCodeRequestForm'

const page = () => {
  return (
    <>
    <Navbar/>
    <DiscountCodeRequestForm/>
    <Footer/>
    </>
  )
}

export default page