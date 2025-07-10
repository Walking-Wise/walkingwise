"use client";

import React, { useState } from "react";
import PageBanner from "../ui/PageBanner/PageBanner";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import { robotoopo } from "../../public/fonts/Fonts";

const QuoteRequest = () => {
  const [form, setForm] = useState({
    name: "",
    jobTitle: "",
    company: "",
    phone: "",
    companySize: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

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
          companySize: "",
          email: "",
          message: "",
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
        image="/assets/CONT.jpg"
        altText="Request a Quote"
      />
      <Section bgColor="[#00c1d5]" className="mb-20">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-6xl mx-auto p-6 sm:p-10 bg-[#00c1d5] rounded-md"
        >
          <SectionHeaderText>Tell Us About Your Company</SectionHeaderText>
          <BodyText className="text-white mt-2">
            Please allow us 24 hours to respond to your inquiry.
          </BodyText>

          {[
            { label: "Name", name: "name" },
            { label: "Job Title", name: "jobTitle" },
            { label: "Company", name: "company" },
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

          <div className="flex flex-col sm:flex-row justify-center mt-10 gap-6">
            {[
              { label: "Phone", name: "phone" },
              { label: "Company Size", name: "companySize" },
            ].map(({ label, name }) => (
              <div key={name} className="flex w-full flex-col">
                <label
                  className={`${robotoopo.className} text-[#303030] text-lg sm:text-xl`}
                >
                  {label} <span className="text-red-500">*</span>
                </label>
                <input
                  name={name}
                  type="text"
                  value={(form as any)[name]}
                  onChange={handleChange}
                  placeholder={label}
                  required
                  className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
                />
              </div>
            ))}
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
              className={`bg-[#303030] py-3 text-white text-3xl ${robotoopo.className}`}
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
