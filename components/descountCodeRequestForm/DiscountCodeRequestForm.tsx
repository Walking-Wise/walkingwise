"use client";

import React, { useState } from "react";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import { roboto, robotoopo } from "../../public/fonts/Fonts";

const DiscountCodeRequestForm = () => {
  const [form, setForm] = useState({
    name: "",
    jobTitle: "",
    company: "",
    website: "",
    phone: "",
    email: "",
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
      const res = await fetch("/api/discount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({
          name: "",
          jobTitle: "",
          company: "",
          website: "",
          phone: "",
          email: "",
          city: "",
          state: "",
        });
        setSuccess("Thank you! Your request for a discount code has been submitted.");
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
      <Section bgColor="white" className="mb-20 mt-0 lg:mt-20 lg:py-0">
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto p-6 sm:p-10 bg-[#00c1d5] rounded-md"
        >
          <SectionHeaderText>Request a discount code for your nonprofit</SectionHeaderText>
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
                Website <span className="text-red-500">*</span>
              </label>
              <input
                name="website"
                type="text"
                value={form.website}
                onChange={handleChange}
                placeholder="Website"
                required
                className={`bg-white border-none outline-none py-3 px-3 rounded-sm ${robotoopo.className}`}
              />
            </div>
          </div>
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

export default DiscountCodeRequestForm;
