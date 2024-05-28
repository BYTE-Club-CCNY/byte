"use client";
import React from "react";
import { HeroScroll } from "@/components/ui/HeroScroll";
import AboutSection from "@/components/About";
import Eboard from "@/components/Eboard";
import { InfiniteMovingCardsDemo } from "@/components/projects";

export default function Home() {
  return (
    <main>
      <HeroScroll />
      <AboutSection />
      <Eboard />
      <InfiniteMovingCardsDemo />
    </main>
  );
}
