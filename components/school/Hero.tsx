import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SchoolDistrictPrograms from "./SchoolDistrictPrograms";

const Hero = () => {
  return (
    <div className=" mx-auto">
      <Navbar />
      <SchoolDistrictPrograms />
      <Footer />
    </div>
  );
};

export default Hero;
