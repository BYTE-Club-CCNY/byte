"use client";
import React, { useRef, useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

// dark mode check to determine component background color
const isDarkMode = () => {
  if (typeof window !== "undefined") {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
  return false;
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment BELOW target:ref if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  const [isDark, setIsDark] = useState(isDarkMode());

  useEffect(() => {
    const handleChange = () => {
      setIsDark(isDarkMode());
    };
    if (typeof window !== "undefined") {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", handleChange);
      return () => {
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", handleChange);
      };
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: isDark ? backgroundColors[2] : backgroundColors[1],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative lg:space-x-10 rounded-md -space-x-2 lg:p-10"
      // -space-x-2 & lg:p-10 help image fit on mobile
      ref={ref}
    >
      <div className="div relative flex items-start lg:px-0 px-1.5">
        <div className="max-w-screen-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                }}
                className="text-kg text-slate-300 max-w-sm"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "lg:block h-60 w-80 lg:flex-row lg:rounded-md bg-white sticky top-20 justify-center overflow-hidden rounded-lg",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
