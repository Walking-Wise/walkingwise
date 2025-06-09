import React from "react";
import { robotoopo } from "../../public/fonts/Fonts";

const PageTwo = () => {
  return (
    <>
      {/* Hero Image Section */}
      <div className="w-full relative bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/CONT.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 1024px */}
          <div className="hidden md:block absolute bottom-2 sm:bottom-5 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl  text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/50">
              Conatct us
            </h1>
          </div>

          {/* Centered version - shows on screens < 1024px */}
          <div className="md:hidden flex h-full justify-center items-center">
            <h1 className="text-6xl  text-white p-1 bg-black/50">
              Conatct us
            </h1>
          </div>
        </div>
      </div>

      {/* Title Overlay Section */}
      <div className="relative z-10">
        <div className="absolute z-[-100] top-[-40px]  bg-[#303030] w-full h-[100px] sm:h-[120px] flex items-center ps-4 sm:ps-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl text-white">
            quote request
          </h1>
        </div>
      </div>

     <div className="mt-50 flex justify-center mb-20 items-center px-4 sm:px-10">
  <div className="w-full max-w-6xl p-6 text-[#303030] sm:p-10 bg-[#68D2DF] rounded-md">
    {/* Heading */}
    <div>
      <h1 className={`${robotoopo.className} text-[#303030] text-3xl sm:text-4xl`}>
        Tell me about your company
      </h1>
      <p className={`${robotoopo.className} text-white text-lg sm:text-2xl mt-4`}>
        Please Allow Us 24-hours to respond to your Inquiry
      </p>
    </div>

    {/* Name */}
    <div className="flex w-full mt-10 flex-col">
      <label className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}>
        Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
      />
    </div>

    {/* Job Title */}
    <div className="flex w-full mt-10 flex-col">
      <label className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}>
        Job Title <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Your job title"
        className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
      />
    </div>

    {/* Company */}
    <div className="flex w-full mt-10 flex-col">
      <label className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}>
        Company <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Company name"
        className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
      />
    </div>

    {/* Phone & Company Size */}
    <div className="flex flex-col sm:flex-row justify-center mt-10 gap-6">
      <div className="flex w-full flex-col">
        <label className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}>
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Phone number"
          className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
        />
      </div>
      <div className="flex w-full flex-col">
        <label className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}>
          Company Size <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. 1-10, 50-100"
          className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
        />
      </div>
    </div>

    {/* Email */}
    <div className="flex w-full mt-10 flex-col">
      <label className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}>
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
      />
    </div>

    {/* Message */}
    <div className="flex w-full mt-10 flex-col">
      <label className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}>
        Message <span className="text-red-500">*</span>
      </label>
      <textarea
        placeholder="Share your message here..."
        className={`bg-white border-none outline-none py-3 px-3 rounded-sm min-h-[120px] ${robotoopo.className}`}
      />
    </div>

      {/* Load reCAPTCHA script */}
      {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}


    {/* Submit Button */}
    <div className="flex w-full mt-10 flex-col">
      <button className={`bg-[#303030] py-3 text-white text-3xl ${robotoopo.className}`}>
        Send
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default PageTwo;
