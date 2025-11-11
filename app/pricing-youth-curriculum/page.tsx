import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import PricingYouth from "@/components/pricing-youth-curriculum/PricingYouth";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Walking Wise Pricing for Youth Curriculum',
  description: 'Access practical education tools while supporting our mission to protect youth from sexual predators and traffickers.',
};

const page = () => {
  return (
    <>
      <Navbar />
      <PricingYouth />
      <Footer />
    </>
  );
};

export default page;
