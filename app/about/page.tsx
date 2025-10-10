import Hero from '@/components/about/Hero'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About Walking Wise® | Experts Unit to Help Prevent Child Exploitation',
  description: 'Learn how 60+ experts partnered with Walking Wise to deliver evidence-based education, protecting children from sexual exploitation and trafficking.',
};

const about = () => {
  return (
   <Hero/>
  )
}

export default about
