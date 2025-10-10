import Hero from '@/components/education/Hero';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home Education | Teach Teens About Sexual Abuse & Exploitation',
  description: 'Guide your teen’s learning with Walking Wise’s home education resources—ideal for parents, grandparents, and homeschool families.',
};

const page = () => {
  return <Hero/>
}
export default page
