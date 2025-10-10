import Hero from '@/components/implementation/Hero'
import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Implementation | Build a Sustainable Exploitation Education Program',
  description: 'Follow five effective steps to launch a long-term child exploitation prevention program in your school or youth organization.',
};

const page = () => {
  return <Hero/>
}

export default page
