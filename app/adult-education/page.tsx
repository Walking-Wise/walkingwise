import Hero from '@/components/adult/Hero'
import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Adult Education Courses | Continuing Education on Child Exploitation',
  description: 'Earn continuing education credits with 12 learning modules designed for professionals and community members to recognize and respond to child sexual exploitation.',
};

const page = () => {
  return <Hero/>
}

export default page
