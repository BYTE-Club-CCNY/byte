"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="relative flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="relative p-16 pt-0 mb-8 text-4xl font-sans font-semibold white:text-black dark:text-white">
              Join Us And Build Your <br />
              <span className="relative text-4xl md:text-[6rem] font-sans font-bold mt-1 leading-none py-5">
                Technical Experience
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://d1tzawfcgeew72.cloudfront.net/groupPhoto2.jpeg"
          alt="hero image"
          width={1000}
          height={1400}
          priority={true}
          className="relative mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
