"use client";
import React from "react";
import { HeroScroll } from "@/components/ui/HeroScroll";
import Eboard from "@/components/Eboard";
import EmblaCarousel from "@/app/projects/carousel";
import { EmblaOptionsType } from "embla-carousel";
import "@/components/ui/css/embla.css";
import "@/components/ui/css/sandbox.css";

const OPTIONS: EmblaOptionsType = {};

export default async function Home() {
  const projects = await fetch("http://18.117.235.144/projects");
  const projectsJson = await projects.json();
  return (
    <main className="light:bg-[#e5e7eb]">
      <HeroScroll />
      <EmblaCarousel
        slides={projectsJson.map((project: any) => project.name)}
        options={OPTIONS}
      />
      <Eboard />
    </main>
  );
}
