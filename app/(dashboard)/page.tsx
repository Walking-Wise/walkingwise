import Hero from "@/components/hero/Hero";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Walking Wise® | Prevent Child Exploitation Through Education ',
  description: 'Discover how Walking Wise equips adults and communities to teach youth (ages 11+) how to recognize, avoid, and report sexual predators and traffickers.',
};

export default function Main() {
  return (
    <>
      <Hero />
    </>
  );
}
