/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoLf from "@/public/logos/logo-lf.png";
import logoRt from "@/public/logos/logo-rt.png";
import dynamic from "next/dynamic";

const SpinningGlobe = dynamic(() => import("@/components/magicui/globe"), {
  ssr: false,
});

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
        scrub: 1,
        pin: true,
        anticipatePin: 1,
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

    tl.to(leftHalf, {
      x: "-50vw",
      duration: 2,
      ease: "power2.inOut",
    })
      .to(
        rightHalf,
        {
          x: "50vw",
          duration: 2,
          ease: "power2.inOut",
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
      className="relative h-screen overflow-visible bg-black text-white z-[2]"
    >
      {/* Left half */}
      <div
        ref={leftHalfRef}
        className="absolute inset-0 w-1/2 flex items-center justify-end z-20"
      >
        {/* <Image
          src={logoLfBlur}
          alt="Mudenda Capital"
          className="absolute left-0 w-full h-full opacity-10 pr-[0.11px]"
        /> */}
        <Image src={logoLf} alt="Mudenda Capital" />
      </div>

      {/* Right half */}
      <div
        ref={rightHalfRef}
        className="absolute inset-0 left-1/2 w-1/2 flex items-center justify-start z-10"
      >
        {/* <Image
          src={logoRtBlur}
          alt="Mudenda Capital"
          className="absolute right-0 w-full h-full opacity-10"
        /> */}
        <Image src={logoRt} alt="Mudenda Capital" />
      </div>

      {/* Revealed content behind */}
      <div
        ref={revealContentRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 scale-90"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center rounded-lg backdrop-blur-sm">
          <div
            ref={globeRef}
            className="absolute mt-20 inset-0 flex items-center justify-center w-full h-full transform scale-100 transition-transform"
          >
            <div className="absolute lg:-top-32 lg:left-64 h-full w-full bg-grey-500">
              <SpinningGlobe globeRef={globeInstanceRef} />
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-[2]">
            <div className="space-y-8">
              <h1 className="text-6xl xl:text-[9rem] font-bold leading-tight">
                YOUR <span className="text-yellow-500">AFRICAN</span>
                <br />
                <span className="text-yellow-500">TRADE</span> PARTNER
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
