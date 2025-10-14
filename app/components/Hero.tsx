"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  const stats = [
    { value: 3, label: "Experiences" },
    { value: 15, label: "Project done" },
    { value: 50, label: "Happy Clients" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((num, i) => {
          if (num < stats[i].value) return num + 1;
          return num;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

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

  const fadeIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="hero-section" className="container">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-12 items-center gap-4 mt-[60px]"
      >
        <motion.div
          variants={fadeUp}
          className="col-span-12 lg:col-span-5 relative overflow-visible flex lg:block flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <Image
              src="/hero-content-bg.png"
              alt="Linear Gradient Background"
              width={1000}
              height={1000}
              className="absolute w-[600px] top-[-50px] left-[0] lg:left-[-65px] z-[-1]"
            />
          </motion.div>

          <motion.h3
            variants={fadeUp}
            className="text-[16px] lg:text-[24px] font-semibold leading-[19px] lg:leading-[29px] text-[#707070] mb-2.5"
          >
            Hi I am
          </motion.h3>

          <motion.h2
            variants={fadeUp}
            className="font-bold text-[20px] lg:text-[28px] leading-[24px] lg:leading-[34px] mb-6"
          >
            Syed Waleed Ali
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            className="hero-title font-black text-[50px] lg:text-[70px] leading-[60px] lg:leading-[84px] mb-[33px] text-center lg:text-start"
          >
            Front-End Engineer
          </motion.h1>

          <motion.div variants={fadeUp}>
            <SocialIcons />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6 mt-[40px] lg:mt-[61px]"
          >
            <Button label="Hire me" href="#contact" variant="primary" />
            <Button
              label="Download Resume"
              href="/syed-waleed-ali-resume.pdf"
              variant="outline"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-[50px] lg:mt-20 flex items-center p-4 lg:p-6 gap-[14px] lg:gap-[30px] bg-[rgba(255,255,255,0.04)] rounded-[8px] w-full"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex-1 border-r border-[#959595] last:border-none"
              >
                <h3 className="font-extrabold text-[20px] lg:text-[24px] leading-[24px] lg:leading-[29px] text-primary mb-3">
                  {counts[i]}+
                </h3>
                <p className="text-[#DFDFDF] font-bold text-[16px] lg:text-[20px] leading-[19px] lg:leading-[24px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="col-span-12 lg:col-span-7 flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="rounded-full bg-[rgba(255,255,255,0.04)] overflow-hidden flex justify-center w-[383px] lg:w-[618px] h-[383px] lg:h-[618px]"
          >
            <Image
              src="/syed-waleed-ali.png"
              alt="Syed Waleed Ali"
              width={1000}
              height={1000}
              className="lg:w-full lg:h-full max-w-[323px] lg:max-w-[520px] max-h-[484px] lg:max-h-[781px] object-cover grayscale"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
