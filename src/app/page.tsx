"use client";
import React from "react";
import { HeroScroll } from "@/components/ui/HeroScroll";
import Eboard from "@/components/Eboard";

export default function Home() {
  return (
    <main className="light:bg-[#e5e7eb]">
      <HeroScroll />
      <Eboard />
    </main>
  );
}
