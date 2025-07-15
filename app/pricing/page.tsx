import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import PricingPage from "@/components/pricing/PricingPage";

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
