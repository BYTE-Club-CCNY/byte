"use client";
import React from "react";
import { HeroScroll } from "@/components/ui/HeroScroll";
import Eboard from "@/components/Eboard";
import EmblaCarousel from "@/app/projects/carousel";
import { EmblaOptionsType } from "embla-carousel";
import "@/components/ui/css/embla.css";
import "@/components/ui/css/sandbox.css";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="light:bg-[#e5e7eb]">
      <HeroScroll />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Eboard />
    </main>
  );
}
