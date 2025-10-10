import Hero from '@/components/organization/Hero'
import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Youth Organization Curriculum | Sexual Exploitation Education',
  description: 'Use adaptable lessons to educate youth in mentoring, small groups, or workshops on recognizing and preventing child exploitation.',
};

const page = () => {
  return <Hero/>
}

export default page
