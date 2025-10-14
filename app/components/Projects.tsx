"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { Project } from "../types";
import Button from "./Button";

const tabs = ["All", "Personal", "Work", "Power BI", "Freelance"];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 20 },
  };

  return (
    <section id="projects-section" className="container">
      <div className="pb-[100px] lg:pb-[150px]">
        <div className="text-center mb-6 lg:mb-20">
          <h1 className="font-bold text-[24px] lg:text-[40px] leading-[29px] lg:leading-[48px] text-white mb-[18px]">
            A Selection of Projects
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-[24px] mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-[40px] py-[14px] rounded-[8px] font-bold text-[16px] leading-[26px] capitalize transition-all cursor-none ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-[rgba(255,255,255,0.08)] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]"
        >
          <AnimatePresence mode="wait">
            {visibleProjects.map((project: Project, index) => (
              <motion.div
                key={`${activeTab}-${project.id}-${index}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(253, 111, 0, 0.2)",
                }}
                onClick={() => window.open(project.link, "_blank")}
                className="group relative bg-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden border border-transparent hover:border-primary transition-all duration-300 cursor-pointer"
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

        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-10">
            <Button onClick={handleViewMore}>View More</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
