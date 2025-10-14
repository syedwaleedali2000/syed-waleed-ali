"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { useEffect, useState } from "react";
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

  return (
    <section className="container">
      <div className="grid grid-cols-12 items-center gap-4 mt-[60px]">
        <div className="col-span-12 lg:col-span-5 relative overflow-visible flex lg:block flex-col items-center">
          <Image
            src="/hero-content-bg.png"
            alt="Linear Gradient Background"
            width={1000}
            height={1000}
            className="absolute w-[600px] top-[-50px] lg:left-[-65px] z-[-1]"
          />
          <h3 className="text-[16px] lg:text-[24px] font-semibold leading-[19px] lg:leading-[29px] text-[#707070] mb-2.5">
            Hi I am
          </h3>
          <h2 className="font-bold text-[20px] lg:text-[28px] leading-[24px] lg:leading-[34px] mb-6">
            Syed Waleed Ali
          </h2>
          <h1 className="hero-title font-black text-[50px] lg:text-[70px] leading-[60px] lg:leading-[84px] mb-[33px] text-center lg:text-start">
            Front-End Engineer
          </h1>

          <SocialIcons />

          <div className="flex items-center gap-6 mt-[40px] lg:mt-[61px]">
            <Button label="Hire me" href="#contact" variant="primary" />
            <Button
              label="Download Resume"
              href="/syed-waleed-ali-resume.pdf"
              variant="outline"
            />
          </div>

          <div className="mt-[50px] lg:mt-20 flex items-center p-4 lg:p-6 gap-[14px] lg:gap-[30px] bg-[rgba(255,255,255,0.04)] rounded-[8px] w-full">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex-1 border-r border-[#959595] last:border-none"
              >
                <h3 className="font-extrabold text-[20px] lg:text-[24px] leading-[24px] lg:leading-[29px] text-primary mb-3">
                  {counts[i]}+
                </h3>
                <p className="text-[#DFDFDF] font-bold text-[16px] lg:text-[20px] leading-[19px] lg:leading-[24px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 flex justify-center lg:justify-end">
          <div className="rounded-full bg-[rgba(255,255,255,0.04)] overflow-hidden flex justify-center w-[383px] lg:w-[618px] h-[383px] lg:h-[618px]">
            <Image
              src="/syed-waleed-ali.png"
              alt="Syed Waleed Ali"
              width={1000}
              height={1000}
              className="lg:w-full lg:h-full max-w-[323px] lg:max-w-[520px] max-h-[484px] lg:max-h-[781px] object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
