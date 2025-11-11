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
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  // const closeModal = () => setShowModal(false);
  // const openModal = () => setShowModal(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleEducation = () => {
    setIsEducationOpen(!isEducationOpen);
    setIsProgramsOpen(false);
    setIsPricingOpen(false);
  };
  const togglePrograms = () => {
    setIsProgramsOpen(!isProgramsOpen);
    setIsEducationOpen(false);
    setIsPricingOpen(false);
  };
  const togglePricing = () => {
    setIsPricingOpen(!isPricingOpen);
    setIsEducationOpen(false);
    setIsProgramsOpen(false);
  };

  const loginLink = "https://learn.walkingwise.com/users/sign_in"

  return (
    <>
      <nav className="w-full navb px-4 bg-white z-5000">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
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
            <div className="hidden lg:flex mt-16 ms-12 space-x-8 text-[#303030] text-2xl font-bold">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
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
                  <div className="absolute left-0 mt-2 w-65 bg-white rounded-lg shadow-lg py-2 z-50">
                    <Link
                      href="/adult-education"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      Adult Education
                    </Link>
                    <Link
                      href="/videos"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      Animated Videos
                    </Link>
                    <Link
                      href="/youth-curriculum"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      Youth Curriculum
                    </Link>
                    <Link
                      href="/implementation"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      Implementation
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
                  <div className="absolute left-0 mt-2 w-65 bg-white rounded-lg shadow-lg py-2 z-50">
                    <Link
                      href="/school-programs"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      School Program
                    </Link>
                    <Link
                      href="/youth-organization"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      Youth Organization
                    </Link>
                    <Link
                      href="/home-education"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      Home Education
                    </Link>
                    <Link
                      href="/public-private-sector"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      Public & Private Sector
                    </Link>
                    {/* <Link href="/pricing" className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}>Pricing</Link> */}
                  </div>
                )}
              </div>


               <div className="relative">
                <button
                  onClick={togglePricing}
                  className="flex items-center space-x-2 text-[#303030] cursor-pointer"
                >
                  <span>Pricing</span>
                  <ChevronDown
                    size={24}
                    className={`transform transition-transform ${
                      isPricingOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isPricingOpen && (
                  <div className="absolute left-0 mt-2 w-65 bg-white rounded-lg shadow-lg py-2 z-50">
                    <Link
                      href="/pricing-adult-education"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      Adult Education
                    </Link>
                    <Link
                      href="/pricing-youth-curriculum"
                      className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                    >
                      Youth Curriculum
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/demo">Demo</Link>
            </div>
          </div>
          <div className="flex items-center hidden lg:flex mt-16 space-x-8 text-[#303030] text-2xl font-bold">
            <button onClick={() => window.open(loginLink)}>Login</button>
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
          <div className="lg:hidden flex flex-col text-2xl mt-2 px-8 pt-8 space-y-4 text-[#303030] font-bold relative min-h-[90vh]">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
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
                    href="/adult-education"
                    className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                  >
                    Adult Education
                  </Link>
                  <Link
                    href="/videos"
                    className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                  >
                    Animated Videos
                  </Link>
                  <Link
                    href="/youth-curriculum"
                    className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                  >
                    Youth Curriculum
                  </Link>
                  <Link
                    href="/implementation"
                    className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                  >
                    Implementation
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
                    href="/school-programs"
                    className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                  >
                    School Program
                  </Link>
                  <Link
                    href="/youth-organization"
                    className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                  >
                    Youth Organization
                  </Link>
                  <Link
                    href="/home-education"
                    className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                  >
                    Home Education
                  </Link>
                  <Link
                    href="/public-private-sector"
                    className={`block px-4 py-2 text-lg hover:bg-gray-100 ${roboto.className}`}
                  >
                    Public & Private Sector
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="/demo" onClick={() => setIsOpen(false)}>
              Demo
            </Link>
            <button
              className="w-fit"
              onClick={() => {
                // setIsOpen(false);
                window.open(loginLink)
              }}
            >
              Login
            </button>
          </div>
        )}
      </nav>
      {/* {showModal && (
        <div className="fixed z-[9999] inset-0 bg-black/90 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl text-center relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h1 className="text-2xl mb-4">⚠️ Scheduled Maintenance</h1>
            <p className="mb-2 font-semibold">
              The Walking Wise Learning Platform is temporarily unavailable.
            </p>
            <p className="mb-2">
              We’re currently making improvements to enhance your learning
              experience.
            </p>
            <p className="mb-2">
              For immediate access or assistance, please contact us at:
            </p>
            <p>
              <a
                href="mailto:support@WalkingWise.com"
                className="text-blue-600 underline"
              >
                support@WalkingWise.com
              </a>
            </p>
            <p className="mt-4">Thank you for your patience.</p>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
