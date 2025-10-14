"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-me", label: "About me" },
    { href: "/projects", label: "Projects" },
    { href: "/contact-me", label: "Contact me" },
  ];

  const navbarVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const menuVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: -10 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="show"
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50 pb-2.5"
    >
      <div className="container">
        <div className="hidden lg:flex items-center justify-between mt-[30px]">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/"
              className="site-logo text-[35px] leading-[39px] font-bold"
            >
              WALEED
            </Link>
          </motion.div>

          <div className="flex items-center gap-[30px] xl:gap-[60px]">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`hover:text-primary text-[20px] leading-[24px] ${
                      isActive ? "font-bold text-primary" : "font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              label="Hire me"
              href="#contact"
              variant="primary"
              className="nav-btn"
            />
          </motion.div>
        </div>

        <div className="flex lg:hidden items-center justify-between mt-[33px]">
          <motion.button
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </motion.button>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/"
              className="site-logo text-[24px] md:text-[35px] leading-[39px] font-bold"
            >
              WALEED
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              label="Hire me"
              href="#contact"
              variant="primary"
              className="nav-btn"
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              variants={menuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="block lg:hidden py-4 space-y-4 origin-top"
            >
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={index}
                    onClick={toggleMobileMenu}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={`hover:text-primary text-[15px] leading-[24px] ${
                        isActive ? "font-bold text-primary" : "font-medium"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
