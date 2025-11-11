import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import PricingPage from "@/components/pricing-adult-education/PricingAdult";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Walking Wise Pricing for Adult Education',
  description: 'Access practical education tools while supporting our mission to protect youth from sexual predators and traffickers.',
};

const page = () => {
  return (
    <>
      <Navbar />
      <PricingPage />
      <Footer />
    </>
  );
};

export default page;
