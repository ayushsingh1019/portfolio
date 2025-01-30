import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="AVD Enterprises - (Nov 2024 - present)"
            result="Greater Noida"
            des="Frontend Developer at AVD Enterprises, specializing in React, Tailwind, and UI/UX design to build responsive, modern, and high-performance web applications."
          />
          <ResumeCard
            title="Mern Stack Developer Intern"
            subTitle="Insurance Samadhan Pvt Ltd (Jul 2024 - Oct 2024)"
            result="Noida"
            des="MERN Stack Intern at INSA, developing responsive web applications using MongoDB, Express, React, and Node.js with a focus on UI/UX."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
