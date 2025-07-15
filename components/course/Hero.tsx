import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CourseSection from "./CourseSection";

const Hero = () => {
  return (
    <div className="mx-auto">
      <Navbar />
      <CourseSection />
      <Footer />
    </div>
  );
};

export default Hero;
