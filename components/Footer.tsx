import React from "react";
import Link from "next/link";
import { roboto, robotoop, robotoopo } from "../public/fonts/Fonts";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si"; // TikTok from Simple Icons

const bottomstyle={    paddingLeft:7vw;};
const linkstyle={    textDecoration: 'underline',fontWeight: 'normal'};
const plainstyle={    fontWeight: 'normal'};
const Footer = () => {
  const socialIcons = [
    {
      Icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=100076611698755",
    },
    {
      Icon: FaYoutube,
      link: "https://youtube.com/@walkingwise",
    },
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/walking.wise/",
    },
    {
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/company/walking-wise/about/?viewAsMember=true",
    },
    {
      Icon: SiTiktok,
      link: "https://www.tiktok.com/@walkingwise",
    },
  ];
  return (
    <>
    <div className="bg-[#BFEBF0] py-8 md:py-1 w-full
          grid grid-cols-1 md:grid-cols-6 gap-5  items-start
          "
          style={bottomstyle}
          >
      {/* Main Footer Content */}
      <div className="
      col-span-1 col-start-1 row-span-1
      md:col-span-2 md:col-start-1 md:row-span-1
      max-w-screen-2xl 
      px-4 sm:px-8 lg:px-10">
        
          <p className={`${roboto.className} mt-5 text-xl text-red-500`}>
            Report Suspicions of Human Trafficking to:
          </p>
          <p className={`${roboto.className} mt-2 text-[#303030] text-lg sm:text-xl`}>
            <strong> National Human Trafficking Hotline</strong><br></br>
            <span style={plainstyle}>Text: </span><a href="sms://233733"><span style={linkstyle}>233733 (BEFREE)</span></a>
            <br></br>
             <span style={plainstyle}>Call: </span<a href="tel:18883737888"><span style={linkstyle}>1-888-373-7888</span></a>
          </p>
          <p className={`${roboto.className} mt-2 text-[#303030] text-lg sm:text-xl`}>
            <strong>Rescue America</strong><br></br>
            <span style={plainstyle}>Call: </span<a href="tel:18335993733"><span style={linkstyle}>833-599-FREE (3733)</span></a>
            <br></br>
          </p>
      </div>
      <div className=" col-start-1  col-span-1 row-span-1 
              md:col-start-3  md:col-span-1 md:row-span-1
              min-w-[150px] px-4 md:my-16  items-center 

              md:text-left text-center">
              <a href="/" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Home</a>
              <br></br> 
              <a href="/about" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >About Us</a>
              <br></br> 
              <a href="/pricing" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Pricing</a>
              <br></br> 
              <a href="/demo" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Demo</a>
              <br></br> 
      </div>
      <div className=" col-start-1  col-span-1 row-span-1
              md:col-start-4  md:col-span-1 md:row-span-1
              min-w-[150px] px-4 md:my-16  items-center 

              md:text-left text-center">
              <a href="/adult-education" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Adult Education</a>
              <br></br> 
              <a href="/videos" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Animated Videos</a>
              <br></br> 
              <a href="/youth-curriculum" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Youth Curriculum</a>
              <br></br> 
              <a href="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/PIM_Accreditation_Info_Walking-Wise-Website/content/index.html?version=3001" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >CE Credit</a>
              <br></br> 
      </div>
      <div className=" col-start-1  col-span-1 row-span-1
              md:col-start-5  md:col-span-1 md:row-span-1
              min-w-[150px] px-4 md:my-16  items-center 

              md:text-left text-center">
              <a href="/school-programs" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >School Programs</a>
              <br></br> 
              <a href="/youth-organization" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Youth Organization</a>
              <br></br> 
              <a href="/home-education" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Home Education</a>
              <br></br> 
              <a href="/public-private-sector" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Public & Private Sector</a>
              <br></br> 
              <a href="https://tally.so/r/w459Bo" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Affiliate Program</a>
              <br></br> 
      </div>
      <div className=" col-start-1  col-span-1 row-span-1
              md:col-start-6  md:col-span-1 md:row-span-1
              min-w-[150px] px-4 md:my-16  items-center 

              md:text-left text-center">
              <a href="https://learn.walkingwise.com/users/sign_in" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Login</a>
              <br></br> 
              
              <a href="/contact" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Contact Us</a>
              <br></br> 
              <a href="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Walking+Wise+Terms+of+Use+2025.pdf" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Terms of Use</a>
              <br></br> 
              <a href="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Walking+Wise+-+Privacy+Policy+2025.pdf" 
              className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >Privacy Policy</a>
              <br></br> 
      </div>
  </div>
  
   <div className=" grid grid-cols-1 md:grid-cols-6 
   bg-[#BFEBF0]
    max-w-screen-2xl mx-auto flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-20  gap-4">
        
        <div className="col-span-1 col-start-1 md:col-span-2 md:col-start-1">
        
        <p className={`${robotoop.className} text-[#303030] text-base `}>
          ©2025 Walking Wise. All Rights Reserved.
        </p>
        
        </div>

        <div className="col-span-1 col-start-1 md:col-span-2 md:col-start-5 flex items-center">
          <div className="w-fit flex gap-1 p-1 bg-[#006072] ">
            {socialIcons.map(({ Icon, link }, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-[#5FCEE9] flex items-center justify-center cursor-pointer hover:opacity-80"
              >
                <a href={link} target="_blank">
                  <Icon className="text-white w-5 h-5 " />
                </a>
              </div>
            ))}
          </div>
        </div>

    </div>
    
    </>
  );
};

export default Footer;
