import Hero from '@/components/publicPrivateSector/Hero'
import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Corporate & Organizational Training | Recognize Sexual Exploitation',
  description: 'Empower your employees with evidence-based education to help them detect and respond to sexual abuse and child exploitation.',
};

const page = () => {
  return <Hero/>
}

export default page
