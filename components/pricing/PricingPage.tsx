"use client";

import React from "react";
import Section from "../ui/Section/Section";

enum Plans {
 Individual = "HOME EDUCATION",
 Professional = "PROFESSIONAL",
 NonProfit = "NONPROFIT",
 Schools = "SCHOOLS",
 Enterprise = "ENTERPRISE",
 OnlineCourse = "ADULT EDUCATION",
}

const plans = [
 {
  name: Plans.Individual,
  subtext:
   "Created for homeschooling in addition to parents, grandparents, and caregivers who want to educate their children.",
  price: "$3 / month",
  annual: "Billed $36 annually",
  footer: "Annual Subscription, Cancel Anytime",
  numberOfUsers: "1 User",
  features: [
     " ",
    "Youth Curriculum (11+)",
    "Teaching Tips for Home",
    "Parent Resources",
    "Lesson Plans: 12 Part Series",
    "Animated Videos: 12 Part Series",
  ],
  buttonText: "Buy Now",
  popular: false,
  link: "https://learn.walkingwise.com/enroll/3486923?price_id=4408860",
 },
 {
  name: Plans.Professional,
  subtext:
   "Ideal for doctors' offices and independent consultants, such as nurses, social workers, and trainers.",
  price: "$16 / month",
  annual: "Billed $192 annually",
  footer: "Annual Subscription, Cancel Anytime",
  numberOfUsers: "1 User",
  features: [
   " ",
   "Adult Education Courses",
   "12 Learning Modules",
   "12 Continuing Education Credits",
   "12 Contact Hours",
   " ",
   "Youth Curriculum (11+)",
   "Implementation Guidance",
   "Reporting Protocol Tool",
   "Risk Factor & Indicator Tools",
   "Anonymous Assessment Tools",
   "Teaching Tips for Classrooms",
   "Lesson Plans: 12 Part Series",
   "Animated Videos: 12 Part Series",
   "Classroom Presentations: 12 Lessons",
  ],
  buttonText: "Buy Now",
  popular: false,
  discount: { text: "30% OFF", original: "$20" },
  link: "https://learn.walkingwise.com/enroll/3486950?price_id=4408888",
 },
 {
  name: Plans.NonProfit,
  subtext:
   "Available for advocacy groups and youth-serving organizations, such as churches and youth clubs.",
  price: "$50 / month",
  annual: "Billed $600 annually",
  footer: "&nbsp;",
  numberOfUsers: "6 Users",
  features: [
    " ",
    "Adult Education Courses",
    "12 Learning Modules",
    "12 Continuing Education Credits",
    " ",
    "Youth Curriculum (11+)",
    "Implementation Guidance",
    "SLIDO’s Anonymous Polling Tool",
    "Reporting Protocol Tool",
    "Risk Factor & Indicator Tools",
    "Anonymous Assessment Tools",
    "Teaching Tips for Classrooms",
    "Lesson Plans: 12 Part Series",
    "Animated Videos: 12 Part Series",
    "Classroom Presentations: 12 Lessons",
  ],
  buttonText: "Request Invoice",
  popular: false,
  link: "https://tally.so/r/3xGWE9",
  button2Text: "",
  link2: "",

 },
 {
  name: Plans.Schools,
  subtext:
   "Tailored for middle and high schools to educate staff, parents, and students.",
  price: "$125 / month",
  annual: "Billed $1,500 annually",
  footer: "&nbsp;",
  numberOfUsers: "6 Users",
  features: [
    " ",
    "Adult Education Courses",
    "12 Learning Modules",
    "12 Continuing Education Credits",
    " ",
    "Youth Curriculum (11+)",
    "Implementation Guidance",
    "SLIDO’s Anonymous Polling Tool",
    "Reporting Protocol Tool",
    "Risk Factor & Indicator Tools",
    "Anonymous Assessment Tools",
    "Teaching Tips for Classrooms",
    "Lesson Plans: 12 Part Series",
    "Animated Videos: 12 Part Series",
    "Classroom Presentations: 12 Lessons",
  ],
  buttonText: "Request Invoice",
  link: "https://tally.so/r/3xGWE9",

  button2Text: "",
  link2: "",
  popular: false,
 },
];

const customPlans = [
 {
  name: Plans.OnlineCourse,
  subtext:
   "Developed for medical professionals, social workers, law enforcement, educators, youth leaders and community members.",
  price: "$125 Online Course",
  annual: "Billed $125 annually, with $45 renewal option",
  footer: "Annual Subscription, Cancel Anytime",
  numberOfUsers: "1 User",
  features: [
    " ",
  "Course Features",
  "Education Courses – 12 learning modules, 12 contact hours",
  "Continuing Education – Earn 12 CME/CE credits",
  "Evidence-Based Content – Built on the latest research",
  "Expert Interviews – Survivor leaders and advocacy professionals",
  "Knowledge Check – Reinforce learning",
  "Quizzes – Claim credits from the Postgraduate Institute for Medicine", 
 ],
  buttonText: "Buy Now",
  popular: false,
  link: "https://learn.walkingwise.com/enroll/3486696?price_id=4408602",
  variant: "dark",
 },
 {
  name: Plans.Enterprise,
  subtext:
   "Designed for organizations delivering adult education through their own learning management system (LMS) or coordinating large group access to the Walking Wise Learning Center.",
  price: "Custom Pricing",
  annual: "Contact us for a quote",
  footer: "&nbsp;",
  numberOfUsers: "Unlimited Users",
  features: [
    " ",
 "Course Features",
  "Education Courses – 12 learning modules, 12 contact hours",
  "Continuing Education – Earn 12 CME/CE credits",
  "Evidence-Based Content – Built on the latest research",
  "Expert Interviews – Survivor leaders and advocacy professionals",
  "Knowledge Check – Reinforce learning",
  "Quizzes – Claim credits from the Postgraduate Institute for Medicine", 
     " ",
   "Seamless Integration",
   "Upload courses to your LMS",
   "Customizable course features",
   "File options include SCORM, xAPI, AICC, and cmi5",
   "Custom billing and terms",
  ],
  buttonText: "Request Quote",
  enterprise: true,
  link: "https://tally.so/r/3E956o",
  variant: "dark",
 },
];

const PricingPage = () => {

 return (
  <>
   <div className="w-full bg-[#303030] h-[80px] sm:h-[120px] flex items-center">
    <div className="w-full max-w-[2000px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26">
     <h1 className="text-white uppercase text-4xl sm:text-6xl lg:text-6xl">
      Pricing Plans
     </h1>
    </div>
   </div>

   <Section bgColor="white">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
     {plans.map((plan, idx) => (
      <div
       key={idx}
       className="flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 p-6 relative"
      >
       {plan.popular && (
        <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded">
         Popular
        </span>
       )}

       <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
         {plan.name}
        </h2>
        <p className="text-sm text-gray-500">{plan.subtext}</p>
       </div>

       <div className="text-2xl font-bold text-gray-900 mt-2">
        {plan.price}
       </div>
       <div className="text-xs text-gray-500">{plan.annual}</div>

       <div className="flex-1 mt-4 mb-4">
        <ul className="space-y-2 text-sm lg:text-[15px] text-gray-700">
         <li className="font-semibold font14">
           {plan.numberOfUsers}
         </li>
         {plan.features.map((feature, i) => {
          if  (feature.includes("Course Features"))
           return <li className="font-semibold font14" >{feature}</li>;
          else if (feature.includes("Seamless Integration"))
           return <li className="font-semibold font14" >{feature}</li>;
          else if (feature.includes("Adult Education Courses"))
           return <li className="font-semibold font14" >{feature}</li>;
          else if (feature.includes("Youth Curriculum"))
          return <li className="font-semibold font14" >{feature}</li>;
          else if (feature.includes("SLIDO"))
          return <li className="font-semibold text-darkgreen" >✔ {feature}</li>;
          else if (feature === " ")
          return <li className="line-short" >&nbsp;</li>;
          else
          return <li key={i}>✔ {feature}</li>;

         })}
         
        </ul>
       </div>
               {plan.button2Text ? (
                <div>
                 <div className="flex flex-col md:flex-row items-center">
                  <button
                   className={`w-full py-2 px-4 mb-3 md:mr-1 md:mb-0 rounded-md border-1 border-[#303030] text-[#303030] ${
                    plan.popular
                     ? "bg-purple-600 hover:bg-purple-700"
                     : "bg-[#ffffff] hover:bg-[#fafafa]"
                   }`}
                   onClick={() => {
                    window.open(plan.link2, '_blank')
                   }}
                  >
                   {plan.button2Text}
                  </button>
                  <button
                   className={`w-full py-2 px-4 md:ml-1 rounded-md text-white ${
                    plan.popular
                     ? "bg-purple-600 hover:bg-purple-700"
                     : "bg-[#303030] hover:bg-[#303030]"
                   }`}
                   onClick={() => {
                    window.open(plan.link, '_blank')
                   }}
                  >
                   {plan.buttonText}
                  </button>
                 </div>
                 <p className="text-xs text-center text-gray-400 mt-2">
                  {plan.footer}
                 </p>
                </div>
               ) : (
                <div>
                 <button
                  className={`w-full py-2 px-4 rounded-md text-white ${
                   plan.popular
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-[#303030] hover:bg-[#303030]"
                  }`}
                  onClick={() => {
                   window.open(plan.link, '_blank')
                  }}
                 >
                  {plan.buttonText}
                 </button>
                 <p className="text-xs text-center text-gray-400 mt-2">
                  {plan.footer}
                 </p>
        </div>
       )}
      </div>
     ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
     {customPlans.map((plan, idx) => (
      <div
       key={idx}
       className={`mt-10 flex flex-col rounded-xl shadow-lg border p-6 relative col-span-2
       ${
        plan.variant === "dark"
         ? "bg-[#d7f3f7] text-gray-800 border-gray-200"
         : "bg-white text-gray-800 border-gray-200"
       }`}
      >
       <div className="mb-4">
        <h2 id={plan.name} className="text-2xl font-semibold">{plan.name}</h2>
        <p
         className={`text-sm dark:text-gray-300 ${
          plan.variant === "dark"
           ? "text-gray-500"
           : "text-gray-500"
         }`}
        >
         {plan.subtext}
        </p>
       </div>

       <div className="text-2xl font-bold mt-2">{plan.price}</div>
       <div className="text-xs opacity-70">{plan.annual}</div>

       <div className="flex-1 mt-4 mb-4">
        <ul className="space-y-2 text-sm lg:text-md">
         
         <li className="font-semibold font14">
           {plan.numberOfUsers}
         </li>
         {plan.features.map((feature, i) => {
          if  (feature.includes("Course Features"))
           return <li className="font-semibold font14" >{feature}</li>;
          else if (feature.includes("Seamless Integration"))
           return <li className="font-semibold font14" >{feature}</li>;
          else if (feature.includes("Youth Curriculum"))
          return <li className="font-semibold font14" >{feature}</li>;
          else if (feature.includes("SLIDO"))
          return <li className="font-semibold text-darkgreen" >✔ {feature}</li>;
          else if (feature === " ")
          return <li className="line-short" >&nbsp;</li>;
          else
          return <li key={i}>✔ {feature}</li>;

         })}
         
         

        </ul>
       </div>

       <div>
        <button
         className={`w-full py-2 px-4 rounded-md
         ${
          plan.variant === "dark"
           ? "bg-[#303030] hover:bg-[#303030] text-white"
           : "bg-[#303030] hover:bg-[#303030] text-white"
         }`}
         onClick={() => {
          window.open(plan.link, '_blank')
         }}
        >
         {plan.buttonText}
        </button>
        <p className="text-xs text-center mt-2 opacity-60">
         {plan.footer}
        </p>
       </div>
      </div>
     ))}
    </div>
   </Section>
  </>
 );
};

export default PricingPage;
