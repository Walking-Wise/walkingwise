"use client";

import React, { useState } from "react";
import PageBanner from "../ui/PageBanner/PageBanner";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import { robotoopo } from "../../public/fonts/Fonts";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | string>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ firstName: "", lastName: "", email: "", message: "" });
        setSuccess("Thank you for reaching out. We’ll get back to you soon!");
      } else {
        setSuccess("Something went wrong. Please try again.");
      }
    } catch (err) {
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageBanner
        title="How can we help you?"
        image="/assets/CONT.jpg"
        altText="Contact Us"
      />

      <Section bgColor="[#00c1d5]" className="mb-20">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-6xl mx-auto p-6 sm:p-10 bg-[#00c1d5] rounded-md"
        >
          <SectionHeaderText>Get In Touch With Us</SectionHeaderText>
          <BodyText className="text-white mt-2">
            Please allow us 24 hours to respond to your inquiry.
          </BodyText>

          <div className="flex flex-col sm:flex-row justify-center mt-10 gap-6">
            <div className="flex w-full flex-col">
              <label
                className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
                className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
              />
            </div>
            <div className="flex w-full flex-col">
              <label
                className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
                className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
              />
            </div>
          </div>

          <div className="flex w-full mt-10 flex-col">
            <label
              className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
            />
          </div>

          <div className="flex w-full mt-10 flex-col">
            <label
              className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              className={`bg-white border-none outline-none py-3 px-3 rounded-sm min-h-[120px] ${robotoopo.className}`}
            />
          </div>

          <div className="flex w-full mt-6 justify-center">
            <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
          </div>

          <div className="flex w-full mt-10 flex-col">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#303030] py-3 text-white text-3xl ${robotoopo.className}`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {success && <p className="mt-4 text-center text-lg">{success}</p>}
        </form>
      </Section>
    </>
  );
};

export default Contact;
