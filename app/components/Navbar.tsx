"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-me", label: "About me" },
    { href: "/projects", label: "Projects" },
    { href: "/contact-me", label: "Contact me" },
  ];
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-5 pb-2.5">
      <div className="container">
        <div className="hidden lg:flex items-center justify-between mt-[30px]">
          <Link
            href="/"
            className="site-logo text-[35px] leading-[39px] font-bold"
          >
            WALEED
          </Link>

          <div className="flex items-center gap-[30px] xl:gap-[60px]">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary text-[20px] leading-[24px] ${
                    isActive ? "font-bold text-primary" : "font-medium"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Button
            label="Hire me"
            href="#contact"
            variant="primary"
            className="nav-btn"
          />
        </div>

        <div className="flex lg:hidden items-center justify-between mt-[33px]">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          <Link
            href="/"
            className="site-logo text-[24px] md:text-[35px] leading-[39px] font-bold"
          >
            WALEED
          </Link>

          <Button
            label="Hire me"
            href="#contact"
            variant="primary"
            className="nav-btn"
          />
        </div>

        {isMobileMenuOpen && (
          <div className="block lg:hidden py-4 space-y-4">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <div key={index} onClick={toggleMobileMenu}>
                  <Link
                    href={item.href}
                    className={`hover:text-primary text-[15px] leading-[24px] ${
                      isActive ? "font-bold text-primary" : "font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
