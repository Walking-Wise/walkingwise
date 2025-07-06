import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AnimatedVideos from "./AnimatedVideos";

const Hero = () => {
  return (
    <div className=" mx-auto">
      <Navbar />
      <AnimatedVideos />
      <Footer />
    </div>
  );
};

export default Hero;
