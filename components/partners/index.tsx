"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import buildingfLf from "@/public/assets/8-lf.png";
import buildingRt from "@/public/assets/8-rt.png";
import clientLogos from "@/public/client logos/client logos 2.jpg";

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const revealContentRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const leftHalf = leftHalfRef.current;
    const rightHalf = rightHalfRef.current;
    const revealContent = revealContentRef.current;
    const paragraph = paragraphRef.current;

    if (!container || !leftHalf || !rightHalf || !revealContent || !paragraph)
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 0%",
        end: "bottom center",
        scrub: 0.3,
        pin: true,
        anticipatePin: 1,
        lazy: false,
      },
    });

    tl.to(
      leftHalf,
      {
        x: "-50vw",
        duration: 2,
        ease: "power2.inOut",
        force3D: true,
      },
      0
    )
      .to(
        rightHalf,
        {
          x: "50vw",
          duration: 2,
          ease: "power2.inOut",
          force3D: true,
        },
        0
      )
      .to(
        paragraph,
        {
          x: "-80%",
          duration: 2,
          ease: "power2.inOut",
          force3D: true,
        },
        0.2
      )
      .to(
        revealContent,
        {
          opacity: 1,
          scale: 1,
          duration: 3,
          ease: "power2.out",
          force3D: true,
        },
        0.4
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-visible">
      {/* Left half */}
      <div
        ref={leftHalfRef}
        className="absolute w-1/2 bg-black flex items-center justify-end z-[11] overflow-visible transform will-change-transform"
      >
        <Image
          src={buildingfLf}
          alt="Mudenda Capital"
          className="h-screen object-cover object-right"
        />
        <div
          ref={paragraphRef}
          className="absolute md:left-[80%] left-[100%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#252826]/85 p-8 backdrop-blur-sm md:w-[90%] w-[95vw] transform will-change-transform"
        >
          <div className="md:p-8 p-4">
            <p className="text-white leading-relaxed text-xl">
              Mudenda Capital Partners Pty assists clients with multiple
              interactive services into the huge untapped market with a recipe
              to success. Our methods have been tried and tested by major expert
              analysts and traders approving our successful formula.
              <br />
              <br />
              With professional background credibility, MUDENDA CAPITAL is your
              trade partner of choice on the African continent.
            </p>
          </div>
        </div>
      </div>

      {/* Right half */}
      <div
        ref={rightHalfRef}
        className="absolute left-1/2 w-1/2 bg-black flex items-center justify-start z-10 transform will-change-transform"
      >
        <Image
          src={buildingRt}
          alt="Mudenda Capital"
          className="h-screen object-cover object-left"
        />
      </div>

      {/* Revealed content behind */}
      <div
        ref={revealContentRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 bg-gradient-to-b from-[#0e0e0e] to-transparent transform will-change-transform"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="py-20 px-6 flex justify-center relative path-trigger transition-opacity duration-700 bg-black">
          <div className="container mt-40 p-8">
            <div className="container mx-auto relative z-10">
              <div className="md:p-8 p-4">
                <h1 className="text-6xl text-yellow-500 xl:text-[6rem] md:mb-5  text-center leading-tight">
                  EQUITY, INVESTMENTS <span className="text-white">AND</span>{" "}
                  PARTNERS
                </h1>
                <p className="text-white leading-relaxed text-xl mb-36">
                  <Image
                    src={clientLogos}
                    alt="Mudenda Capital"
                    className="scale-150 md:scale-100 mt-10 md:mt-0"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;
