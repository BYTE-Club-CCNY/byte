"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={project_list}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const project_list = [
  {
    quote:
      "Coolest tic tac toe project in C++ implemented with a Scheme backend, yo",
    name: "TicTac++Toe",
    title: "By Jesse Pinkman",
  },
];
