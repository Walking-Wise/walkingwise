"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
          <Link className="text-[#05AFDB]" href="/home-education">
            Our Education &gt;
          </Link>
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
          <Link href="/">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden  sm:mt-20">
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
          <Link
            href="/home-education"
            className="text-[#05AFDB]"
            onClick={() => setIsOpen(false)}
          >
            Our Education &gt;
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="flex justify-center items-start  flex-col space-y-2">
            <Link 
              href="/demo" 
              className="bg-[#303030] text-white px-4 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Link>
            <Link href="/demo" onClick={() => setIsOpen(false)}>
              Enroll
            </Link>
          </div>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;