"use client";
import React, { useState, useEffect } from "react";
import { HeroScroll } from "@/components/ui/HeroScroll";
import Eboard from "@/components/Eboard";
import EmblaCarousel from "@/app/projects/carousel";
import { EmblaOptionsType } from "embla-carousel";
import "@/components/ui/css/embla.css";
import "@/components/ui/css/sandbox.css";
const OPTIONS: EmblaOptionsType = {};

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://18.117.235.144/projects/get");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="light:bg-[#e5e7eb]">
      <HeroScroll />
      <EmblaCarousel
        slides={projects.map((project: any) => ({
          name: project.name,
          image: project.image,
          description: project["short-description"],
        }))}
        options={OPTIONS}
      />
      <Eboard />
    </main>
  );
}
