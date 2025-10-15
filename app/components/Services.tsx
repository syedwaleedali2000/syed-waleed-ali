"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { BiBarChartAlt2 } from "react-icons/bi";
import {
  FiMonitor,
  FiCode,
  FiDatabase,
  FiShoppingCart,
  FiSettings,
  FiGlobe,
} from "react-icons/fi";

const services = [
  {
    icon: <FiMonitor size={40} />,
    title: "UI/UX & Web Design",
    description:
      "Designing modern, user-friendly, and visually appealing interfaces that enhance engagement and usability.",
  },
  {
    icon: <FiCode size={40} />,
    title: "Front-End Development",
    description:
      "Creating high-performance, responsive websites using React.js, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FiGlobe size={40} />,
    title: "WordPress & Statamic",
    description:
      "Building modern CMS-based websites with WordPress (Elementor, Bricks) and Statamic — optimized for speed, flexibility, and easy management.",
  },
  {
    icon: <FiShoppingCart size={40} />,
    title: "E-Commerce Solutions",
    description:
      "Delivering seamless online stores with Shopify, WooCommerce, Laravel, or custom solutions that drive sales.",
  },
  {
    icon: <FiSettings size={40} />,
    title: "Optimization & Maintenance",
    description:
      "Improving performance, SEO, and security while keeping your website up-to-date and reliable.",
  },
  {
    icon: <BiBarChartAlt2 size={40} />,
    title: "Power BI Dashboards",
    description:
      "Designing interactive Power BI dashboards and reports that transform raw data into meaningful insights for better decision-making.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Services = () => {
  return (
    <section id="services-section" className="container">
      <motion.div
        className="py-[50px] lg:py-[100px]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="text-center mb-6 lg:mb-20">
          <h1 className="font-bold text-[24px] lg:text-[40px] leading-[29px] lg:leading-[48px] text-white mb-[18px]">
            Services
          </h1>
          <p className="text-[#959595] font-medium text-[16px] lg:text-[20px] leading-[26px] lg:leading-[38px] lg:max-w-[800px] mx-auto">
            Elevate your business with innovative designs and powerful digital
            experiences. Combining creativity with technology, I create
            solutions that inspire and deliver real results.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(253, 111, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-[rgba(255,255,255,0.04)] rounded-[16px] lg:rounded-[24px] text-center py-[30px] lg:py-[34px] px-[34px] border border-transparent hover:border-primary transition-all duration-300"
            >
              <div className="text-primary flex justify-center mb-1 lg:mb-4">
                {service.icon}
              </div>
              <h3 className="text-primary font-bold text-[20px] lg:text-[24px] leading-[32px] lg:leading-[38px] mb-[16px] lg:mb-[34px]">
                {service.title}
              </h3>
              <p className="text-[#575757] font-medium text-[16px] lg:text-[20px] leading-[26px] lg:leading-[32px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
