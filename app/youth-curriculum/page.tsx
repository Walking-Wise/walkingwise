import Hero from '@/components/youth/Hero'
import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Youth Curriculum | Exploitation Education for Ages 11+',
  description: 'Engage middle & high school youth with interactive lessons & animated videos that build awareness and confidence in recognizing sexual exploitation.',
};
const page = () => {
  return <Hero/>
}

export default page
