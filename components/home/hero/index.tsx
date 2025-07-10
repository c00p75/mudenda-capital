/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoLf from "@/public/logos/logo-lf.png";
import logoRt from "@/public/logos/logo-rt.png";
import building from "@/public/assets/8.png";

const HomeHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const revealContentRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const globeInstanceRef = useRef<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const leftHalf = leftHalfRef.current;
    const rightHalf = rightHalfRef.current;
    const revealContent = revealContentRef.current;
    const globe = globeRef.current;

    if (!container || !leftHalf || !rightHalf || !revealContent || !globe)
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
        onUpdate: (self) => {
          if (globeInstanceRef.current) {
            const speed = 0.6 + self.progress * 2;
            globeInstanceRef.current.controls().autoRotateSpeed = speed;
          }
        },
        onLeave: () => {
          if (globeInstanceRef.current) {
            globeInstanceRef.current.controls().autoRotateSpeed = 0.6;
          }
        },
        onLeaveBack: () => {
          if (globeInstanceRef.current) {
            globeInstanceRef.current.controls().autoRotateSpeed = 0.6;
          }
        },
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
        revealContent,
        {
          opacity: 1,
          scale: 1,
          duration: 3,
          ease: "power2.out",
          force3D: true,
        },
        0.3
      )
      .to(
        globe,
        {
          scale: 1.5,
          x: -200,
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
    <section
      ref={containerRef}
      className="relative h-screen overflow-visible bg-black text-white"
    >
      {/* Left half */}
      <div
        ref={leftHalfRef}
        className="absolute inset-0 w-1/2 flex items-center justify-end z-20 transform will-change-transform"
      >
        <Image src={logoLf} alt="Mudenda Capital" className="h-screen" />
      </div>

      {/* Right half */}
      <div
        ref={rightHalfRef}
        className="absolute inset-0 left-1/2 w-1/2 flex items-center justify-start z-10 transform will-change-transform"
      >
        <Image src={logoRt} alt="Mudenda Capital" className="h-screen" />
      </div>

      {/* Revealed content behind */}
      <div
        ref={revealContentRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transform will-change-transform"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center rounded-lg backdrop-blur-sm">
          <div
            ref={globeRef}
            className="absolute left-0 top-0 flex items-center justify-center w-screen h-screen transform transition-transform will-change-transform"
          >
            <div className="absolute left-0 top-0 h-screen w-screen bg-grey-500">
              <Image
                src={building}
                alt="Mudenda Capital"
                className="h-screen w-screen"
              />
              <div className="absolute top-0 left-0 bg-gradient-to-t from-black via-80% via-black/50 to-transparent opacity-90 h-screen w-screen" />
            </div>
          </div>
          <div className="container flex justify-center items-center relative z-[2]">
            <div className="space-y-8">
              <div className="h-20 w-full" />
              <h1
                className="text-6xl xl:text-[8rem] font-bold leading-tight uppercase"
                style={{
                  textShadow:
                    "0 0 5px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.0.5)",
                }}
              >
                YOUR <span className="text-yellow-500">Investment </span>
                <br />
                <span className="text-yellow-500">Family</span> Office
              </h1>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-none">
                WORK WITH US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
