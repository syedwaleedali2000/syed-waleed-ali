"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import CustomInput from "../components/CustomInput";
import Button from "./Button";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

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
      <motion.div
        className="pb-[100px] lg:pb-[150px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center mb-6 lg:mb-20"
          variants={fadeUp}
          custom={0}
        >
          <h1 className="font-bold text-[24px] lg:text-[40px] leading-[29px] lg:leading-[48px] text-white mb-[18px]">
            Contact me
          </h1>
          <p className="text-[#959595] font-medium text-[16px] lg:text-[20px] leading-[26px] lg:leading-[38px] lg:max-w-[800px] mx-auto">
            Let’s build something great together — get in touch below.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-4 lg:gap-6 max-w-4xl mx-auto"
          variants={fadeUp}
          custom={1}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={fadeUp} custom={1.2}>
              <CustomInput
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={1.4}>
              <CustomInput
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={fadeUp} custom={1.6}>
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
            </motion.div>

            <motion.div variants={fadeUp} custom={1.8}>
              <CustomInput
                textarea
                name="message"
                placeholder="Tell me about your project or idea…"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center lg:justify-end"
            variants={fadeUp}
            custom={2}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button type="submit" variant="outline" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
