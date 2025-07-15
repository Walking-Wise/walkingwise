"use client";

import React from "react";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";

const plans = [
  {
    name: "Individual",
    subtext:
      "For parents empowering their kids to recognize and resist exploitation.",
    price: "$3.00 / month",
    annual: "Billed $36 annually",
    footer: "Annual Subscription, Cancel Anytime",
    features: [
      "1 user",
      "Education Guide: 11 Lessons",
      "Teaching Tips",
      "Animated Videos: 11 Part Series",
    ],
    buttonText: "Buy Now",
    popular: false,
    discount: null,
  },
  {
    name: "Professional",
    subtext:
      "For professionals teaching and protecting youth with proven tools and strategies.",
    price: "$7.00 / month",
    annual: "Billed $84 annually",
    footer: "Annual Subscription, Cancel Anytime",
    features: [
      "1 user",
      "Implementation Guide",
      "Toolkit: Protocol & Assessments",
      "Education Guide: 11 Lessons",
      "Teaching Tips",
      "Animated Videos: 11 Part Series",
    ],
    buttonText: "Get Professional",
    popular: true,
    discount: { text: "30% OFF", original: "$20.00" },
    // discount: null,
  },
  {
    name: "Organization",
    subtext:
      "For community leaders and advocates running group programs to educate and protect youth.",
    price: "$30.00 / month",
    annual: "Billed $360 annually",
    footer: "Annual Subscription, Cancel Anytime",
    features: [
      "10 users",
      "Implementation Guide",
      "Toolkit: Protocol & Assessments",
      "Education Guide: 11 Lessons",
      "Teaching Tips",
      "Animated Videos: 11 Part Series",
      "On-Demand 12 Lesson Course for Adults",
    ],
    buttonText: "Buy Now",
    popular: false,
    discount: null,
  },
  {
    name: "Education",
    subtext:
      "For schools implementing a full anti-trafficking curriculum across classrooms and staff.",
    price: "$100 / month",
    annual: "Billed $1,200 Annually",
    footer: "Annual Subscription, Cancel Anytime",
    features: [
      "25 users",
      "Implementation Guide",
      "Toolkit: Protocol & Assessments",
      "Education Guide: 11 Lessons",
      "Teaching Tips",
      "Animated Videos: 11 Part Series",
      "On-Demand 12 Lesson Course for Adults",
    ],
    buttonText: "Buy Now",
    popular: false,
    discount: null,
  },
  {
    name: "Enterprise",
    subtext:
      "For large organizations needing over 25 users or custom training solutions.",
    price: "Custom Pricing",
    annual: "Contact us for a quote",
    footer: "Tailored to your needs",
    features: [
      "Unlimited users",
      "Custom onboarding & support",
      "On-Demand 12 Lesson Course for Adults",
      "All Pro & Education features",
      "Dedicated account manager",
    ],
    buttonText: "Contact Us",
    popular: false,
    discount: null,
    enterprise: true, // custom flag for conditional rendering
  },
];

const PricingPage = () => {
  return (
    <Section bgColor="white">
      <SectionHeaderText className="text-center mb-10">
        Pricing Plans
      </SectionHeaderText>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 p-6 relative ${
              plan.enterprise ? "lg:col-span-2" : ""
            }`}
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
                {plan.name === "Organization" ||
                plan.name === "Education" ||
                plan.enterprise ? (
                  <li className="font-semibold text-blue-700">
                    ✔ On-Demand 12 Lesson Course for Adults
                  </li>
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
      <div className="rounded-xl overflow-hidden shadow-lg mt-10 bg-gradient-to-r from-[#00C1D5] to-[#36c5d8] flex flex-col lg:flex-row text-white">
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
          <h3 className="text-2xl lg:text-3xl mt-4 font-bold">
            The all-in-one solution for{" "}
            <span className="text-yellow-400">lifetime access</span> to
            unlimited learning.
          </h3>

          <ul className="mt-6 space-y-2 text-sm lg:text-base">
            <li>✔ Unlimited course access</li>
            <li>✔ Includes all materials & updates</li>
            <li>✔ Lifetime support</li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex-1 bg-black p-8 flex flex-col justify-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded">
                50% OFF
              </span>
              <span className="text-gray-400 line-through">$200.00</span>
            </div>
            <div className="text-3xl lg:text-4xl font-bold mt-2">
              $99.99 <span className="text-sm font-normal">/ year</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">USD ($)</div>
          </div>

          <div className="mt-6 text-sm">
            <p>For individuals and teams.</p>
            <p>No hidden fees, cancel anytime.</p>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 mt-6 rounded-md text-center">
            Get The Online Course
          </button>
        </div>
      </div>
    </Section>
  );
};

export default PricingPage;
