"use client";
import React from "react";
import { HeroScroll } from "@/components/ui/HeroScroll";
import AboutSection from "@/components/About";
export default function Home() {
  return (
    <main>
      <HeroScroll />
      <AboutSection />
    </main>
  );
}
