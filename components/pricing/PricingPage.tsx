"use client";

import React from "react";
import Section from "../ui/Section/Section";

enum Plans {
  Individual = "INDIVIDUAL",
  Professional = "PROFESSIONAL",
  NonProfit = "NONPROFIT",
  Schools = "SCHOOLS",
  Enterprise = "ENTERPRISE",
}

const plans = [
  {
    name: Plans.Individual,
    subtext:
      "Designed for home education & proactive parents who want to educate their children.",
    price: "$3 / month",
    annual: "Billed $36 annually",
    footer: "Annual Subscription, Cancel Anytime",
    numberOfUsers: "1 user",
    features: [
      "Education Guide: 12 Lessons",
      "Teaching Tips",
      "Animated Videos: 12 Part Series",
    ],
    buttonText: "Buy Now",
    popular: false,
  },
  {
    name: Plans.Professional,
    subtext:
      "Ideal for independent consultants, such as nurses, social workers, and trainers.",
    price: "$21 / month",
    annual: "Billed $250 annually",
    footer: "Annual Subscription, Cancel Anytime",
    numberOfUsers: "1 user",
    features: [
      "Implementation Guide",
      "Toolkit: Protocol & Assessments",
      "Education Guide: 12 Lessons",
      "Teaching Tips",
      "Classroom Presentations",
      "Animated Videos: 12 Part Series",
    ],
    buttonText: "Get Professional",
    popular: true,
    discount: { text: "30% OFF", original: "$20" },
  },
  {
    name: Plans.NonProfit,
    subtext:
      "Created for youth-serving organizations and anti-exploitation advocates.",
    price: "$50 / month",
    annual: "Billed $600 annually (With nonprofit discount code)",
    footer: "Annual Subscription, Cancel Anytime",
    numberOfUsers: "4 users",
    features: [
      "Implementation Guide",
      "Toolkit: Protocol & Assessments",
      "Education Guide: 12 Lessons",
      "Teaching Tips",
      "Classroom Presentations",
      "Anonymous Classroom Polling Tool",
      "Animated Videos: 12 Part Series",
    ],
    buttonText: "Request Discount Code",
    popular: false,
  },
  {
    name: Plans.Schools,
    subtext:
      "Tailored for middle and high schools to educate staff, parents, and students.",
    price: "$125 / month",
    annual: "Billed $1,500 annually",
    footer: "Annual Subscription, Cancel Anytime",
    numberOfUsers: "6 users",
    features: [
      "Implementation Guide",
      "Toolkit: Protocol & Assessments",
      "Education Guide: 12 Lessons",
      "Teaching Tips",
      "Classroom Presentations",
      "Anonymous Classroom Polling Tool",
      "Animated Videos: 12 Part Series",
    ],
    buttonText: "Buy Now",
    popular: false,
  },
];

const customPlans = [
  {
    name: Plans.Enterprise,
    subtext:
      "Built for public and private organizations seeking to deliver adult-focused sexual exploitation education using their internal learning management system (LMS).",
    price: "Custom Pricing",
    annual: "Contact us for a quote",
    footer: "Tailored to your needs",
    numberOfUsers: "Unlimited users",
    features: ["Connect to your LMS with SCORM, xAPI, etc."],
    buttonText: "Contact Us",
    enterprise: true,
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
                  <li className="font-semibold text-gray-800">
                    ✔ {plan.numberOfUsers}
                  </li>
                  {plan.features.map((feature, i) => {
                    if (feature.includes("On-Demand 12 Lesson Course"))
                      return null;
                    return <li key={i}>✔ {feature}</li>;
                  })}
                  {(plan.name === Plans.NonProfit ||
                    plan.name === Plans.Schools) && (
                    <>
                      <li className="font-semibold text-blue-700">
                        ✔ On-Demand 12 Lesson Course for Adults
                      </li>
                      <li className="font-semibold text-blue-700">
                        ✔ 12 CME / CE Credits (PIM Accreditation)
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <button
                  className={`w-full py-2 px-4 rounded-md text-white ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-[#303030] hover:bg-[#303030]"
                  }`}
                  onClick={() => {
                    window.location.href = "/request-a-quote";
                  }}
                >
                  {plan.buttonText}
                </button>
                <p className="text-xs text-center text-gray-400 mt-2">
                  {plan.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Online course card */}
        <div id="courseCard" className="rounded-xl overflow-hidden shadow-lg mt-10 bg-gradient-to-r from-[#00C1D5] to-[#36c5d8] flex flex-col lg:flex-row text-[#303030]">
          {/* Left side */}
          <div className="flex-1 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-yellow-400 hidden md:flex"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
              <h2 className=" text-sm md:text-lg font-extrabold text-white">
                On-Demand 12 Lesson Course for Adults
              </h2>
            </div>
            <h3 className="text-2xl lg:text-3xl mt-4 font-bold mb-2 text-white">
              Walking Wise: Sexual Exploitation Education
            </h3>
            <p>
              A self-paced course that offers a clear, comprehensive
              understanding of the U.S. commercial sex trade—and how it affects
              children and teens.
            </p>

            <ul className="mt-6 space-y-2 text-sm font-semibold lg:text-base">
              <li>✔ 12 CME / CE Credits (PIM Accreditation)</li>
              <li>✔ Interviews with Survivor Leaders and Advocacy Experts</li>
              <li>✔ Evidence Based Content</li>
              <li>✔ Interactive and Engaging</li>
            </ul>
          </div>

          {/* Right side */}
          <div className="flex-1 bg-[#303030] p-8 flex flex-col justify-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded">
                  38% OFF
                </span>
                <span className="text-gray-400 line-through">$200.00</span>
              </div>
              <div className="text-xl lg:text-4xl font-bold mt-2 text-white">
                Online Course: $125{" "}
                <span className="text-sm font-normal">/ year</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">USD ($)</div>
            </div>

            <div className="mt-6 text-sm text-white">
              <p>✔ For adult learners.</p>
              <p>✔ Designed for individual use and team training.</p>
              <p>✔ 12 month access.</p>
            </div>

            <button
              onClick={() => {
                window.location.href = "/request-a-quote";
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 mt-6 rounded-md text-center"
            >
              Get The Online Course
            </button>
          </div>
        </div>

        {/* Enterprise block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {customPlans.map((plan, idx) => (
            <div
              key={idx}
              className="mt-10 flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 p-6 relative col-span-2"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {plan.name}
                </h2>
                <p className="text-sm text-gray-500">{plan.subtext}</p>
              </div>

              <div className="text-2xl font-bold text-gray-900 mt-2">
                {plan.price}
              </div>
              <div className="text-xs text-gray-500">{plan.annual}</div>

              <div className="flex-1 mt-4 mb-4">
                <ul className="space-y-2 text-sm lg:text-md text-gray-700">
                  <li className="font-semibold text-gray-800">
                    ✔ {plan.numberOfUsers}
                  </li>
                  {plan.features.map((feature, i) => {
                    if (feature.includes("On-Demand 12 Lesson Course"))
                      return null;
                    return <li key={i}>✔ {feature}</li>;
                  })}
                  {plan.enterprise && (
                    <>
                      <li className="font-semibold text-blue-700">
                        ✔ On-Demand 12 Lesson Course for Adults
                      </li>
                      <li className="font-semibold text-blue-700">
                        ✔ 12 CME / CE Credits (PIM Accreditation)
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <button
                  className="w-full py-2 px-4 rounded-md text-white bg-[#303030] hover:bg-[#303030]"
                  onClick={() => {
                    window.location.href = "/request-a-quote";
                  }}
                >
                  {plan.buttonText}
                </button>
                <p className="text-xs text-center text-gray-400 mt-2">
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
