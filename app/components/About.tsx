"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  {
    img: <img src={"/html-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "HTML",
    level: 100,
  },
  {
    img: <img src={"/css-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "CSS",
    level: 100,
  },
  {
    img: <img src={"/javascript-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "JavaScript",
    level: 100,
  },
  {
    img: <img src={"/typescript-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "TypeScript",
    level: 90,
  },
  {
    img: <img src={"/tailwind-css-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "Tailwind CSS",
    level: 100,
  },
  {
    img: <img src={"/react-js-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "React.js",
    level: 95,
  },
  {
    img: <img src={"/nextjs-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "Next.js",
    level: 96,
  },
  {
    img: <img src={"/php-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "PHP",
    level: 90,
  },
  {
    img: <img src={"/laravel-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "Laravel",
    level: 90,
  },
  {
    img: <img src={"/wordpress-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "WordPress (Elementor / Bricks)",
    level: 100,
  },
  {
    img: <img src={"/shopify-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "Shopify",
    level: 100,
  },
  {
    img: <img src={"/webflow-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "Webflow",
    level: 80,
  },
  {
    img: <img src={"/gulp-js-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "Gulp",
    level: 80,
  },
  {
    img: <img src={"/pug-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "Pug",
    level: 85,
  },
  {
    img: <img src={"/gsap-greensock.svg"} className="w-[36px] h-[36px]" />,
    name: "GSAP",
    level: 100,
  },
  {
    img: <img src={"/statamic-mark-lime.svg"} className="w-[36px] h-[36px]" />,
    name: "Statamic",
    level: 90,
  },
  {
    img: <img src={"/power-bi-icon.svg"} className="w-[36px] h-[36px]" />,
    name: "Power BI",
    level: 100,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

const About = () => {
  return (
    <section id="about-section" className="container">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="pb-[50px] lg:pb-[100px]"
      >
        <motion.div
          variants={fadeUp}
          className="text-center mb-6"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="font-bold text-[24px] lg:text-[40px] leading-[29px] lg:leading-[48px] text-white mb-[18px]">
            About Me
          </h1>
          <p className="text-[#959595] font-medium text-[16px] lg:text-[20px] leading-[26px] lg:leading-[38px] lg:max-w-[800px] mx-auto">
            I’m a detail-oriented Front-End Engineer who loves turning ideas
            into interactive, visually stunning websites and transforming data
            into insights with Power BI.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 items-center gap-[34px] lg:gap-[100px]">
          <motion.div
            variants={fadeUp}
            className="col-span-12 lg:col-span-6 relative overflow-visible flex lg:justify-around"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/about-me-bg.png"
              alt="Grey Background"
              width={1000}
              height={1000}
              className="lg:w-full lg:h-full max-w-[366px] lg:max-w-[523px] max-h-[473px] lg:max-h-[676px] object-cover absolute z-[-1] bottom-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src="/syed-waleed-ali.png"
                alt="Syed Waleed Ali"
                width={1000}
                height={1000}
                className="lg:w-full lg:h-full max-w-[380px] lg:max-w-[566px] max-h-[565px] lg:max-h-[808px] object-cover grayscale"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="col-span-12 lg:col-span-6"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-medium text-[16px] lg:text-[20px] leading-[30px] lg:leading-[38px] mb-[50px]">
              I’m a passionate Front-End Engineer who turns ideas into clean,
              interactive, and high-performing digital experiences. With a
              strong command of React.js, Next.js, WordPress, and modern
              front-end technologies, I craft websites that are not only
              visually engaging but also optimized for performance and
              usability.
              <br />
              <br />
              Beyond front-end development, I also work with Power BI,
              transforming raw data into clear, insightful dashboards that
              empower decision-making through visual storytelling.
              <br />
              <br />I see code as a creative art form — every line contributing
              to a larger picture that connects design, functionality, and user
              experience. My mission is simple: to transform complex concepts
              into elegant, scalable, and user-friendly web and data-driven
              solutions.
            </p>
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-start"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Button
                label="Download Resume"
                href="/syed-waleed-ali-resume.pdf"
                variant="primary"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="skills mt-24"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {skills.map((skill, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="relative w-24 h-24 mb-3">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="45"
                        stroke="#2e2e2e"
                        strokeWidth="6"
                        fill="none"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="45"
                        stroke="#ff7300"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        initial={{
                          strokeDasharray: 283,
                          strokeDashoffset: 283,
                        }}
                        whileInView={{
                          strokeDashoffset: 283 - (283 * skill.level) / 100,
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                          delay: i * 0.2,
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {skill.img}
                    </div>
                  </div>
                  <p className="text-primary font-bold text-[18px] mb-1">
                    {skill.level}%
                  </p>
                  <p className="font-semibold text-[15px]">{skill.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
