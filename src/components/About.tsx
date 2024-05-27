"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Link from "next/link";

const AboutSection = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-6xl font-medium font-medium tracking-tight text-transparent md:text-7xl"
      >
        CCNY Byte
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center text-slate-400 pt-10 hidden sm:block text-lg"
      >
        Are you interested in diving deeper into the world of technology? Byte
        Club is the perfect place for you! We provide a supportive environment
        where you can develop your coding skills and explore the exciting world
        of Computer Science.
        <br />
        Through workshops, projects and guest speakers from the industry, you'll
        gain valuable experience and knowledge that will give you a head-start
        in today's tech driven world.
      </motion.p>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="pt-12 flex justify-center flex-col space-y-8 sm:flex-row sm:space-x-20 sm:space-y-0"
      >
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full">
          <Link
            href="https://stackoverflow.com/questions/77307474/in-next-js-changes-in-layout-tsx-only-applies-to-home-page-other-pages-are-not"
            target="_blank"
          >
            Join Now
          </Link>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-10 sm:py-4 px-6 py-2 rounded-full">
          <Link href="#projects">
            <span>Club Projects</span>
          </Link>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </LampContainer>
  );
};

export default AboutSection;
