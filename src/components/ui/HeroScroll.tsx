"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";
import BYTE from "../images/BYTE.png";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="mb-8 text-4xl font-sans font-semibold text-black dar:text-white">
              Join Us And Build Your <br />
              <span className="text-4xl md:text-[6rem] font-sans font-bold mt-1 leading-none py-5">
                Technical Experience
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={BYTE}
          alt="hero image"
          width={1000}
          height={1400}
          //width="100%"
          //height="auto"
          objectFit="cover"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
