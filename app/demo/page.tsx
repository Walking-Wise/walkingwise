import Hero from '@/components/demo/Hero'
import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Course Demo | Experience Walking Wise’s Myths & Reality Lesson',
  description: 'Take the hands-on demo of our adult learning course, Myths & Reality, and see how prevention education transforms understanding.',
};

const page = () => {
  return <Hero/>
}

export default page
