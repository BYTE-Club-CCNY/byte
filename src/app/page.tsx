"use client";
import React from "react";
import { HeroScroll } from "@/components/ui/HeroScroll";
import AboutSection from "@/components/About";
import Eboard from "@/components/Eboard";
export default function Home() {
  return (
    <main>
      <div id="home">
        <HeroScroll />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <Eboard />
    </main>
  );
}
