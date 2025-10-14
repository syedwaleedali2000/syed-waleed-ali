"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import CustomInput from "../components/CustomInput";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  message: string;
}

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_7lc97ap",
        "template_9ay7wxk",
        { ...formData },
        "LvZLqRsOMi6Xjx-dI"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            timeline: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section className="container">
      <div className="pb-[100px] lg:pb-[150px]">
        <div className="text-center mb-6 lg:mb-20">
          <h1 className="font-bold text-[24px] lg:text-[40px] leading-[29px] lg:leading-[48px] text-white mb-[18px]">
            Contact me
          </h1>
          <p className="text-[#959595] font-medium text-[16px] lg:text-[20px] leading-[26px] lg:leading-[38px] lg:max-w-[800px] mx-auto">
            Let’s build something great together — get in touch below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 lg:gap-6 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <CustomInput
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-baseline">
            <CustomInput
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                const onlyValid = value.replace(/[^\d+]/g, "");
                const formatted = onlyValid.startsWith("+")
                  ? "+" + onlyValid.slice(1).replace(/[+]/g, "")
                  : onlyValid.replace(/[+]/g, "");
                setFormData((prev) => ({ ...prev, phone: formatted }));
              }}
            />

            <CustomInput
              textarea
              name="message"
              placeholder="Tell me about your project or idea…"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center lg:justify-end">
            <Button type="submit" variant="outline" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
