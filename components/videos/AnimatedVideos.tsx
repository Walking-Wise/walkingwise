import React from "react";
import Link from "next/link";
import { roboto, robotoop, robotoopo } from "../public/fonts/Fonts";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si"; // TikTok from Simple Icons

const linkstyle={    textDecoration: 'underline'};
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
    <div className="bg-[#BFEBF0] py-8 md:py-16 w-full
          grid grid-cols-1 md:grid-cols-6 gap-5  items-start
          ">
      {/* Main Footer Content */}
      <div className="
      col-span-1 col-start-1 row-span-1
      md:col-span-2 md:col-start-1 md:row-span-1
      max-w-screen-2xl 
      px-4 sm:px-8 lg:px-10">
        {/* Report Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 min-w-[250px] px-4">
          <p className={`${roboto.className} mt-5 text-xl text-red-500`}>
            Report Suspicions of Human Trafficking to:
          </p>
          <p className={`${roboto.className} mt-2 text-[#303030] text-lg sm:text-xl`}>
            <strong> National Human Trafficking Hotline</strong><br></br>
            <span style={plainstyle}>Send a Text to </span><a href="sms://233733"><span style={linkstyle}>233733 (BEFREE)</span></a>
            <br></br>
             <a href="tel:18883737888"><span style={linkstyle}>1-888-373-7888</span></a>
          </p>
          <p className={`${roboto.className} mt-2 text-[#303030] text-lg sm:text-xl`}>
            <strong>Rescue America</strong><br></br>
            <a href="tel:18335993733"><span style={linkstyle}>833-599-FREE (3733)</span></a>
            <br></br>
          </p>
        </div>
        {[
          [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Pricing", href: "/pricing" },
            { label: "Demo", href: "/demo" },
          ],
          [
            { label: "Adult Education", href: "/adult-education" },
            { label: "Animated Videos", href: "/videos" },
            { label: "Youth Curriculum", href: "/youth-curriculum" },
            { label: "Implementation", href: "/implementation " },
            // { label: "Adult Course Description", href: "/course" },
            {
              label: "CE Credit",
              href: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/PIM_Accreditation_Info_Walking-Wise-Website/content/index.html?version=3001",
              newPage: true
            },
          ],
          [
            { label: "School Programs", href: "/school-programs" },
            { label: "Youth Organization", href: "/youth-organization" },
            { label: "Home Education", href: "/home-education" },
            {
              label: "Public & Private Sector",
              href: "/public-private-sector",
            },
            { label: "Affiliate Program", href: " https://tally.so/r/w459Bo " },
          ],
          [
            { label: "Login", href: "https://learn.walkingwise.com/users/sign_in" },
            { label: "My Account", href: "/" },
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "Terms of Use",
              href: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Walking+Wise+Terms+of+Use+2025.pdf",
              newPage: true,
            },
            {
              label: "Privacy Policy",
              href: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Walking+Wise+-+Privacy+Policy+2025.pdf",
              newPage: true,
            },
          ],
        ].map((column, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[`color${index + 1}`]}`}
            className={`
              col-start-1  col-span-1 row-span-1
              md:col-start-${index + 2}  md:col-span-1 md:row-span-1
              min-w-[150px] px-4 md:my-16  items-center text-center`}
          >
            {column.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target={item.newPage ? "_blank" : "_self"}
                className={`${robotoopo.className} text-lg sm:text-xl text-[#303030]  hover:text-[#05AFDB] cursor-pointer`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full flex max-w-screen-2xl mx-auto flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-20  gap-4">
        <p className={`${robotoop.className} text-[#303030] text-base `}>
          ©2025 Walking Wise. All Rights Reserved.
        </p>
        <div className="flex gap-1 p-1 bg-[#006072] ">
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
  );
};

export default Footer;
