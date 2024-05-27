"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dar:text-white">
              Join Us And Build Your <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Technical Experience
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://img.freepik.com/premium-photo/young-girl-with-laptop-pink-hair-hot-looks_862994-25302.jpg"
          alt="hero image"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
