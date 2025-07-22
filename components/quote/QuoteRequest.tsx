"use client";

import React, { useState } from "react";
import PageBanner from "../ui/PageBanner/PageBanner";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import { roboto, robotoBold, robotoopo } from "../../public/fonts/Fonts";

const QuoteRequest = () => {
  const [form, setForm] = useState({
    name: "",
    jobTitle: "",
    company: "",
    phone: "",
    industry: "",
    email: "",
    message: "",
    city: "",
    state: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({
          name: "",
          jobTitle: "",
          company: "",
          phone: "",
          industry: "",
          email: "",
          message: "",
          city: "",
          state: "",
        });
        setSuccess("Thank you! Your request has been submitted.");
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
        title="Request a Quote"
        image="/assets/contact-bg.png"
        altText="Connect with us"
      />
      <Section bgColor="white">
        <SectionHeaderText className="text-red lg:text-[#ff3131]">
          Enrollment is Launching Soon!
        </SectionHeaderText>
        <BodyText className="mt-4 md:mt-8 md:pe-24">
          Our new learning platform is on track and launching just in time for
          the start of the school year! While we put the final touches in place,
          we’d love to connect with you.
        </BodyText>
        <BodyText
          className={`mt-4 md:mt-8 ${robotoBold.className} mb-2 md:ms-4`}
        >
          Be the first to know when subscriptions go live:
        </BodyText>
        <BodyText className="md:ms-4">
          📩 Submit your contact info to get notified.
        </BodyText>
        <BodyText
          className={`mt-4 md:mt-8 ${robotoBold.className} mb-2 md:ms-4`}
        >
          If you’d like to learn more in the meantime:
        </BodyText>
        <BodyText className="md:ms-4">
          📅 Schedule an{" "}
          <a
            className="underline"
            href="https://calendly.com/karla-highman-walkingwise/30min?back=1&month=2025-03"
            target="_blank"
          >
            in-person DEMO
          </a>{" "}
          to explore school programs or adult education
        </BodyText>
      </Section>
      <Section bgColor="white" className="mb-20 lg:py-0">
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto p-6 sm:p-10 bg-[#00c1d5] rounded-md"
        >
          <SectionHeaderText>Get in touch with us</SectionHeaderText>
          <BodyText className="text-white mt-2">
            Please allow us 24 hours to respond to your inquiry.
          </BodyText>

          {[
            { label: "Name", name: "name" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex w-full mt-10 flex-col">
              <label
                className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}
              >
                {label} <span className="text-red-500">*</span>
              </label>
              <input
                name={name}
                type={type || "text"}
                value={(form as any)[name]}
                onChange={handleChange}
                placeholder={`Enter your ${label.toLowerCase()}`}
                required
                className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
              />
            </div>
          ))}
          {[
            { label: "Job Title", name: "jobTitle" },
            { label: "Company / Organization", name: "company" },
          ].map(({ label, name }) => (
            <div key={name} className="flex w-full mt-10 flex-col">
              <label
                className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}
              >
                {label}
              </label>
              <input
                name={name}
                type={"text"}
                value={(form as any)[name]}
                onChange={handleChange}
                placeholder={
                  label === "Company / Organization"
                    ? "Enter name"
                    : `Enter your ${label.toLowerCase()}`
                }
                className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
              />
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-center mt-10 gap-6">
            <div className="flex w-full flex-col">
              <label
                className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                type="text"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
              />
            </div>

            <div className="flex w-full flex-col">
              <label
                className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}
              >
                Industry / Sector <span className="text-red-500">*</span>
              </label>
              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                required
                className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
              >
                <option value="" disabled>
                  Select an industry
                </option>
                <option value="Medical Group">Medical Group</option>
                <option value="Higher Education">Higher Education</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="Government">Government</option>
                <option value="Individual">Individual</option>
                <option value="Professional">Professional</option>
                <option value="Non-Profit">Non-Profit</option>
                <option value="School">School</option>
              </select>
            </div>
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
              placeholder="Share your message here..."
              required
              className={`bg-white border-none outline-none py-3 px-3 rounded-sm min-h-[120px] ${robotoopo.className}`}
            />
          </div>

          <div className="flex w-full mt-10 flex-col">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#303030] py-3 text-white text-xl md:text-3xl rounded-4xl  ${roboto.className}`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {success && (
            <p className="mt-4 text-center text-lg text-white">{success}</p>
          )}
        </form>
      </Section>
    </>
  );
};

export default QuoteRequest;
