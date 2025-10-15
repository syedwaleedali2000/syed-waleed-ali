"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import SocialIcons from "./SocialIcons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#services-section", label: "Services" },
    { href: "#about-section", label: "About me" },
    { href: "#projects-section", label: "Projects" },
    { href: "#contact-section", label: "Contact me" },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="pt-[40px] pb-[24px] bg-[rgba(255,255,255,0.04)]"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-[50px]">
          <motion.div variants={fadeUp} custom={0}>
            <Link
              href="/"
              className="site-logo text-[35px] leading-[39px] font-bold"
            >
              WALEED
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.5}
            className="flex flex-wrap justify-center gap-[20px] lg:gap-[60px]"
          >
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  variants={fadeUp}
                  custom={index / 5 + 0.6}
                >
                  <Link
                    href={item.href}
                    className={`hover:text-primary text-[20px] leading-[24px] mx-[12px] mb-[15px] last:mb-0 last:mx-0 inline-block ${
                      isActive ? "font-bold text-primary" : "font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <SocialIcons />
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1.2}
            className="flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[40px]"
          >
            <Link
              href="mailto:syedwaleedali19@gmail.com"
              className="flex items-center gap-2 group transition-all duration-300"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300 group-hover:text-primary"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="transition-colors duration-300 group-hover:text-primary">
                syedwaleedali19@gmail.com
              </span>
            </Link>

            <Link
              href="tel:+923492510200"
              className="flex items-center gap-2 group transition-all duration-300"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300 group-hover:text-primary"
              >
                <path
                  d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.3148 6.72533 15.2663 5.18999 12.85C3.49997 10.2413 2.44824 7.27109 2.11999 4.18C2.095 3.90356 2.12787 3.62486 2.21649 3.36172C2.30512 3.09859 2.44756 2.85679 2.63476 2.65172C2.82196 2.44665 3.0498 2.28281 3.30379 2.17062C3.55777 2.05843 3.83233 2.00036 4.10999 2.0001H7.10999C7.5953 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04207 3.23954 9.10999 3.7201C9.23662 4.68016 9.47144 5.62282 9.80999 6.5301C9.94454 6.88802 9.97366 7.27701 9.8939 7.65098C9.81415 8.02494 9.62886 8.36821 9.35999 8.6401L8.08999 9.9101C9.51355 12.4136 11.5864 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9751 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5286 19.3199 14.7635 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.9201Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="transition-colors duration-300 group-hover:text-primary">
                +92 349 2510200
              </span>
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={1.4}
            className="pt-[16px] text-[16px] font-bold leading-[19px] border-t border-foreground w-full lg:w-[593px] text-center"
          >
            Designed by Syed Waleed Ali — Front-End Engineer
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
