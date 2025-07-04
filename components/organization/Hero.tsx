import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import YouthOrganization from "./YouthOrganization";

const Hero = () => {
  return (
    <div className=" mx-auto">
      <Navbar />
      <YouthOrganization />
      <Footer />
    </div>
  );
};

export default Hero;
