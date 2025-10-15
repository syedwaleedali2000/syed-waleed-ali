"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "../data/projects";
import { Project } from "../types";
import Button from "./Button";

const tabs = ["All", "Personal", "Work", "Power BI", "Freelance"];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: { opacity: 0, scale: 0.9, y: 20 },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = useMemo(() => {
    return activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(6);
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="projects-section" className="container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="pb-[50px] lg:pb-[100px]"
      >
        <motion.div variants={fadeUp} className="text-center mb-6 lg:mb-20">
          <h1 className="font-bold text-[24px] lg:text-[40px] leading-[29px] lg:leading-[48px] text-white mb-[18px]">
            A Selection of Projects
          </h1>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-[14px] lg:gap-[24px] mb-10"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-[20px] lg:px-[40px] py-[10px] lg:py-[14px] rounded-[8px] font-bold text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] capitalize transition-all cursor-none ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-[rgba(255,255,255,0.08)] hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          layout
          className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
        >
          <AnimatePresence mode="wait">
            {visibleProjects.map((project: Project, index) => (
              <motion.div
                key={`${activeTab}-${project.id}-${index}`}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(253, 111, 0, 0.2)",
                }}
                onClick={() => window.open(project.link, "_blank")}
                className="group relative bg-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden border border-transparent hover:border-primary transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-[415px] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="font-bold text-[16px] leading-[26px] capitalize p-[16px] flex justify-between items-center">
                  <h3 className="text-[#C6C6C6]">{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="block lg:hidden"
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={true}
          >
            {filteredProjects.map((project: Project, index) => (
              <SwiperSlide key={`${activeTab}-${project.id}-${index}`}>
                <motion.div
                  variants={cardVariants}
                  initial="block"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(253, 111, 0, 0.2)",
                  }}
                  onClick={() => window.open(project.link, "_blank")}
                  className="group relative bg-[rgba(255,255,255,0.08)] rounded-[16px] lg:rounded-[20px] overflow-hidden border border-transparent hover:border-primary transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-[284px] lg:h-[400px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="font-bold text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] capitalize p-[16px] flex justify-between items-center">
                    <h3 className="text-[#C6C6C6]">{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {visibleCount < filteredProjects.length && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:flex justify-center mt-10"
          >
            <Button onClick={handleViewMore}>View More</Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
