"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleEducation = () => {
    setIsEducationOpen(!isEducationOpen);
    setIsProgramsOpen(false);
  };
  const togglePrograms = () => {
    setIsEducationOpen(false);
    setIsProgramsOpen(!isProgramsOpen);
  };

  return (
    <nav className="w-full navb px-4 bg-white z-5000">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer w-[100x] md:w-[250px] h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex mt-20 space-x-8 text-[#303030] text-2xl font-bold">
          <Link href="/">Home</Link>
          <div className="relative">
            <button
              onClick={toggleEducation}
              className="flex items-center space-x-2 text-[#303030] cursor-pointer"
            >
              <span>Education</span>
              <ChevronDown
                size={24}
                className={`transform transition-transform ${
                  isEducationOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isEducationOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/youth-curriculum"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Youth Curriculum
                </Link>
                <Link
                  href="/videos"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Animated Videos
                </Link>
                <Link
                  href="/adult-education"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Adult Education
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={togglePrograms}
              className="flex items-center space-x-2 text-[#303030] cursor-pointer"
            >
              <span>Programs</span>
              <ChevronDown
                size={24}
                className={`transform transition-transform ${
                  isProgramsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProgramsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/youth-organization"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Youth Organization
                </Link>
                <Link
                  href="/implementation"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Implementation
                </Link>
                <Link
                  href="/home-education"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Home Education
                </Link>
                {/* <Link href="/pricing" className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}>Pricing</Link> */}
              </div>
            )}
          </div>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <div className="flex relative flex-col space-y-2">
            <Link
              href="/demo"
              className="bg-[#303030] absolute lg:top-[-70px] lg:left-[-10px] text-white px-4 py-2 rounded-2xl text-center"
            >
              Demo
            </Link>
            <Link href="/request-a-quote">
              Enroll
            </Link>
          </div>
          <Link
            href="https://www.walkingwise.com/enrollment/members-login/"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden sm:mt-20">
          <button
            className="text-base"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col text-2xl mt-2 space-y-4 text-[#303030] font-bold relative min-h-[80vh]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          {/* Dropdown menu logic stays the same */}
          <div className="flex flex-col">
            <button
              onClick={toggleEducation}
              className="flex items-center space-x-2 text-[#303030]"
            >
              <span>Education</span>
              <ChevronDown
                size={24}
                className={`transform transition-transform ${
                  isEducationOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isEducationOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/youth-curriculum"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Youth Curriculum
                </Link>
                <Link
                  href="/videos"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Animated Videos
                </Link>
                <Link
                  href="/adult-education"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Adult Education
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <button
              onClick={togglePrograms}
              className="flex items-center space-x-2 text-[#303030]"
            >
              <span>Programs</span>
              <ChevronDown
                size={24}
                className={`transform transition-transform ${
                  isProgramsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProgramsOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/youth-organization"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Youth Organization
                </Link>
                <Link
                  href="/implementation"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Implementation
                </Link>
                <Link
                  href="/home-education"
                  className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                >
                  Home Education
                </Link>
              </div>
            )}
          </div>

          <Link href="/pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/request-a-quote" onClick={() => setIsOpen(false)}>
            Enroll
          </Link>
          <Link
            href="https://www.walkingwise.com/enrollment/members-login/"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>

          {/* Button at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Link
              href="/demo"
              className="bg-[#303030] text-white w-full text-center py-3 rounded-lg block"
              onClick={() => setIsOpen(false)}
            >
              Get a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
