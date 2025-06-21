"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleEducation = () => setIsEducationOpen(!isEducationOpen);

  return (
    <nav className="w-full navb px-4 bg-white z-5000">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={300}
            height={300}
            className="cursor-pointer w-[150px] md:w-[300px] h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex mt-20 space-x-14 text-black text-4xl font-bold">
          <Link href="/">Home</Link>
          <div className="relative">
            <button
              onClick={toggleEducation}
              className="flex items-center space-x-2 text-black cursor-pointer"
            >
              <span>Our Education</span>
              <ChevronDown size={24} className={`transform transition-transform ${isEducationOpen ? 'rotate-180' : ''}`} />
            </button>
            {isEducationOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link href="/course" className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}>Online course for adults</Link>
                <Link href="/youth-curriculum" className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}>Curriculum for youth</Link>
                <Link href="/videos" className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}>Animated video series</Link>
                <Link href="/pricing" className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}>Pricing</Link>
              </div>
            )}
          </div>
          <Link href="/about">About</Link>
          <div className="flex relative flex-col space-y-2">
            <Link
              href="/demo"
              className="bg-[#303030] absolute lg:top-[-70px] lg:left-[-10px] text-white px-4 py-2 rounded-2xl text-center"
            >
              Demo
            </Link>
            <Link href="/demo">Enroll</Link>
          </div>
          <Link href="/sign-in">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden sm:mt-20">
          <button
            className="text-black"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex text-2xl flex-col mt-2 space-y-4 text-black font-bold">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <div className="flex flex-col">
            <button
              onClick={toggleEducation}
              className="flex items-center space-x-2 text-black"
            >
              <span>Our Education</span>
              <ChevronDown size={24} className={`transform transition-transform ${isEducationOpen ? 'rotate-180' : ''}`} />
            </button>
            {isEducationOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/course" onClick={() => setIsOpen(false)} className={`block ${roboto.className}`}>Online course for adults</Link>
                <Link href="/education/methodology" onClick={() => setIsOpen(false)} className={`block ${roboto.className}`}>Methodology</Link>
                <Link href="/education/resources" onClick={() => setIsOpen(false)} className={`block ${roboto.className}`}>Resources</Link>
                <Link href="/education/success-stories" onClick={() => setIsOpen(false)} className={`block ${roboto.className}`}>Success Stories</Link>
              </div>
            )}
          </div>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/demo" onClick={() => setIsOpen(false)}>
            Enroll
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <div className="flex justify-center items-start flex-col space-y-2">
            <Link
              href="/demo"
              className="bg-[#303030] text-white px-4 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
