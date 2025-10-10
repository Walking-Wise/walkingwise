import Hero from '@/components/school/Hero'
import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'School Programs | Empower Students to Recognize & Avoid Exploitation ',
  description: 'Integrate exploitation-prevention education across grade levels with flexible, school-led lessons that build awareness and resilience.',
};

const page = () => {
  return <Hero/>
}

export default page
