"use client";
import React from "react";
import { HeroScroll } from "@/components/ui/HeroScroll";
import AboutSection from "@/components/About";
import Eboard from "@/components/Eboard";

export default function Home() {
  return (
    <main>
      <HeroScroll />
      <AboutSection />
      <Eboard />
    </main>
  );
}
