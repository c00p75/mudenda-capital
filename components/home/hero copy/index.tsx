"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const revealContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const leftHalf = leftHalfRef.current;
    const rightHalf = rightHalfRef.current;
    const revealContent = revealContentRef.current;

    if (!container || !leftHalf || !rightHalf || !revealContent) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(leftHalf, {
      x: "-50vw",
      duration: 1,
      ease: "power2.inOut",
    })
      .to(
        rightHalf,
        {
          x: "50vw",
          duration: 1,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        revealContent,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0.3
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Left half */}
      <div
        ref={leftHalfRef}
        className="absolute inset-0 w-1/2 bg-black flex items-center justify-end pr-8 z-10"
      >
        <div className="text-right max-w-md">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Mudenda Capital Partners Pty assists clients with multiple services
            into the huge untapped market with a recipe to success. Our methods
            have been tried and tested by major expert analysts and traders
            approving our successful formula.
          </p>
        </div>
      </div>

      {/* Right half */}
      <div
        ref={rightHalfRef}
        className="absolute inset-0 left-1/2 w-1/2 bg-black flex items-center justify-start pl-8 z-10"
      >
        <div className="text-left max-w-md">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            With professional background credibility, MUDENDA CAPITAL is your
            trade partner of choice on the African continent.
          </p>
        </div>
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
        <div className="text-center bg-black/70 p-8 rounded-lg backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-4 text-white">
            AFRICAN MARKETS
          </h3>
          <p className="text-gray-300 mb-6">
            Connecting opportunities across the continent
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
