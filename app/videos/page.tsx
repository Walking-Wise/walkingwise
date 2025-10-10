import Hero from '@/components/videos/Hero'
import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Animated Explainer Videos | Teach Youth About Online Safety & Exploitation',
  description: 'Empower youth with engaging, 3-minute videos that teach how to spot unsafe adults, identify online predators, and seek help from trustworthy adults.',
};

const page = () => {
  return <Hero/>
}

export default page
