"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import buildingfLf from "@/public/assets/8-lf.png";
import buildingRt from "@/public/assets/8-rt.png";
import clientLogos from "@/public/client logos/client logos.jpg";

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const revealContentRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-visible bg-black flex flex-col lg:flex-row">
      {/* <div className="h-screen w-screen">
        <p className="text-white leading-relaxed text-base md:text-xl">
          Mudenda Capital Partners Pty assists clients with multiple interactive
          services into the huge untapped market with a recipe to success. Our
          methods have been tried and tested by major expert analysts and
          traders approving our successful formula.
          <br />
          <br />
          With professional background credibility, MUDENDA CAPITAL is your
          trade partner of choice on the African continent.
        </p>
      </div> */}

      <div
        className="bg-gradient-to-b from-[#0e0e0e] to-transparent py-20 px-4 md:px-6 bottom-0 left-0 z-[1]"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl xl:text-[6rem] text-yellow-500 mb-6 leading-tight">
              EQUITY, INVESTMENTS <span className="text-white">AND</span>{" "}
              PARTNERS
            </h1>
            <Image
              src={clientLogos}
              alt="Mudenda Capital Client Logos"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
