"use client";

import React from "react";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";

enum Plans {
  Individual = "Individual",
  Professional = "Professional",
  NonProfit = "Nonprofit",
  Education = "Education",
  Enterprise = "Enterprise",
}

const plans = [
  {
    name: Plans.Individual,
    subtext:
      "Designed for home education and proactive parents who want to equip their children with the knowledge to recognize and report sexual predators.",
    price: "$3 / month",
    annual: "Billed $36 annually",
    footer: "Annual Subscription, Cancel Anytime",
    features: [
      "1 user",
      "Education Guide: 12 Lessons",
      "Teaching Tips",
      "Animated Videos: 12 Part Series",
    ],
    buttonText: "Buy Now",
    popular: false,
    discount: null,
  },
  {
    name: Plans.Professional,
    subtext:
      "Ideal for independent consultants, such as nurses, social workers, and trainers, who deliver education or workshops on sexual exploitation prevention.",
    price: "$7 / month",
    annual: "Billed $84 annually",
    footer: "Annual Subscription, Cancel Anytime",
    features: [
      "1 user",
      "Implementation Guide",
      "Toolkit: Protocol & Assessments",
      "Education Guide: 12 Lessons",
      "Teaching Tips",
      "Animated Videos: 12 Part Series",
    ],
    buttonText: "Get Professional",
    popular: true,
    discount: { text: "30% OFF", original: "$20" },
    // discount: null,
  },
  {
    name: Plans.NonProfit,
    subtext:
      "Created for youth-serving organizations and advocates committed to preventing sexual exploitation by educating adolescents, ages 10–19.",
    price: "$30 / month",
    annual: "Billed $360 annually",
    footer: "Annual Subscription, Cancel Anytime",
    features: [
      "4 users",
      "Implementation Guide",
      "Toolkit: Protocol & Assessments",
      "Education Guide: 12 Lessons",
      "Teaching Tips",
      "Animated Videos: 12 Part Series",
      "On-Demand 12 Lesson Course for Adults",
    ],
    buttonText: "Buy Now",
    popular: false,
    discount: null,
  },
  {
    name: Plans.Education,
    subtext:
      "Tailored for middle and high schools, offering comprehensive training for staff, parents, and students on sexual exploitation awareness and prevention.",
    price: "$100 / month",
    annual: "Billed $1,200 Annually",
    footer: "Annual Subscription, Cancel Anytime",
    features: [
      "6 users",
      "Implementation Guide",
      "Toolkit: Protocol & Assessments",
      "Education Guide: 12 Lessons",
      "Teaching Tips",
      "Animated Videos: 12 Part Series",
      "On-Demand 12 Lesson Course for Adults",
    ],
    buttonText: "Buy Now",
    popular: false,
    discount: null,
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
    features: [
      "Unlimited users",
      "Connect to your LMS with SCORM, xAPI, ect.",
      "On-Demand 12 Lesson Course for Adults",
    ],
    buttonText: "Contact Us",
    popular: false,
    discount: null,
    enterprise: true,
  },
];

const PricingPage = () => {
  return (
    <Section bgColor="white">
      <SectionHeaderText className="text-center mb-6 md:mb-10">
        Pricing Plans
      </SectionHeaderText>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 p-6 relative`}
          >
            {/* Popular or Enterprise tag */}
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded">
                Popular
              </span>
            )}
            {/* Title & subtitle */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {plan.name}
              </h2>
              <p className="text-sm text-gray-500">{plan.subtext}</p>
            </div>

            {/* Price block */}
            <div className="text-2xl font-bold text-gray-900 mt-2">
              {plan.price}
            </div>
            <div className="text-xs text-gray-500">{plan.annual}</div>

            {/* Features */}
            <div className="flex-1 mt-4 mb-4">
              <ul className="space-y-2 text-sm text-gray-700">
                {plan.name === Plans.NonProfit ||
                plan.name === Plans.Education ? (
                  <>
                    <li className="font-semibold text-blue-700">
                      ✔ On-Demand 12 Lesson Course for Adults
                    </li>
                    <li className="font-semibold text-blue-700">
                      ✔ 12 CME / CE Credits (PIM Accreditation)
                    </li>
                  </>
                ) : null}
                {plan.features.map((feature, i) => {
                  if (feature.includes("On-Demand 12 Lesson Course"))
                    return null;
                  return <li key={i}>✔ {feature}</li>;
                })}
              </ul>
            </div>

            {/* Button */}
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
      <div className="rounded-xl overflow-hidden shadow-lg mt-10 bg-gradient-to-r from-[#00C1D5] to-[#36c5d8] flex flex-col lg:flex-row text-[#303030]">
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
            <h2 className="text-lg font-semibold">
              On-Demand 12 Lesson Course for Adults
            </h2>
          </div>
          <h3 className="text-2xl lg:text-3xl mt-4 font-bold mb-2">
            Walking Wise: Sexual Exploitation Education
          </h3>
          <p>
            A self-paced course that offers a clear, comprehensive understanding
            of the U.S. commercial sex trade—and how it affects children and
            teens.
          </p>

          <ul className="mt-6 space-y-2 text-sm lg:text-base">
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
                28% OFF
              </span>
              <span className="text-gray-400 line-through">$139.00</span>
            </div>
            <div className="text-2xl lg:text-4xl font-bold mt-2 text-white">
              Online Course: $99.99{" "}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`mt-10 flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 p-6 relative col-span-2`}
          >
            {/* Popular or Enterprise tag */}
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded">
                Popular
              </span>
            )}
            {/* Title & subtitle */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {plan.name}
              </h2>
              <p className="text-sm text-gray-500">{plan.subtext}</p>
            </div>

            {/* Price block */}
            <div className="text-2xl font-bold text-gray-900 mt-2">
              {plan.price}
            </div>
            <div className="text-xs text-gray-500">{plan.annual}</div>

            {/* Features */}
            <div className="flex-1 mt-4 mb-4">
              <ul className="space-y-2 text-sm text-gray-700">
                {plan.name === Plans.NonProfit ||
                plan.name === Plans.Education ||
                plan.enterprise ? (
                  <>
                    <li className="font-semibold text-blue-700">
                      ✔ On-Demand 12 Lesson Course for Adults
                    </li>
                    <li className="font-semibold text-blue-700">
                      ✔ 12 CME / CE Credits (PIM Accreditation)
                    </li>
                  </>
                ) : null}
                {plan.features.map((feature, i) => {
                  if (feature.includes("On-Demand 12 Lesson Course"))
                    return null;
                  return <li key={i}>✔ {feature}</li>;
                })}
              </ul>
            </div>

            {/* Button */}

            <div>
              <button
                className={` w-full py-2 px-4 rounded-md text-white ${
                  plan.enterprise
                    ? "bg-[#303030] hover:bg-[#303030]"
                    : plan.popular
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
    </Section>
  );
};

export default PricingPage;
