"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import buildingfLf from "@/public/assets/8-lf.png";
import buildingRt from "@/public/assets/8-rt.png";
import accessWorld from "@/public/assets/10.png";
import sscMining from "@/public/assets/11.png";
import reloadLogistics from "@/public/assets/12.png";

const projects = [
  {
    title: "ACCESS WORLD SA",
    value: "$3 million",
    image: accessWorld,
    description:
      "Access World South Africa facility for a copper transit warehouse on the Copperbelt.",
  },
  {
    title: "SSC MINING",
    value: "$3 million",
    image: sscMining,
    description:
      "Successfully supplied 3 underground LHD machines to Mopani copper mines contract miners SSC Mining Limited.",
  },
  {
    title: "RELOAD LOGISTICS",
    value: "$3 million",
    image: reloadLogistics,
    description:
      "Reload Logistics transit and warehouse bonds for copper cathodes and Sulphuric acid.",
  },
  {
    title: "RTT AFRICA LEGACY",
    value: "Strategic Investment",
    image: sscMining,
    description:
      "In 2025, Mudenda Capital invested in RTT Africa Legacy, a member of RTT Engineering Consulting, operating in South Africa and Lesotho, as a 49% shareholder.",
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const revealContentRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 0.4,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(leftHalfRef.current, {
      x: "-50vw",
      ease: "power2.inOut",
    })
      .to(
        rightHalfRef.current,
        {
          x: "50vw",
          ease: "power2.inOut",
        },
        0
      )
      .to(
        paragraphRef.current,
        {
          x: "50%",
          ease: "power2.inOut",
        },
        0.2
      )
      .to(
        revealContentRef.current,
        {
          scale: 1,
          ease: "power2.out",
        },
        0.3
      );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-visible bg-white"
    >
      {/* Left Half */}
      <div
        ref={leftHalfRef}
        className="absolute w-1/2 bg-black flex items-center justify-end z-10"
      >
        <Image src={buildingfLf} alt="Left Building" />
      </div>

      {/* Right Half */}
      <div
        ref={rightHalfRef}
        className="absolute left-1/2 w-1/2 bg-black flex items-center justify-start z-20"
      >
        <Image src={buildingRt} alt="Right Building" />
        <div
          ref={paragraphRef}
          className="absolute left-[-20%] top-1/2 -translate-x-[30%] -translate-y-1/2 bg-[#252826]/95 p-8 backdrop-blur-sm text-center w-fit min-w-2xl"
        >
          <h2 className="text-8xl text-white text-center">OUR PROJECTS</h2>
        </div>
      </div>

      {/* Revealed Content */}
      <div
        ref={revealContentRef}
        className="absolute inset-0 scale-90 bg-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="py-20 px-6 relative z-10 w-full">
          <h2 className="text-5xl font-bold text-yellow-500 mb-12 text-center">
            OUR PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-black/90 p-6 relative flex flex-col justify-center items-center group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                />

                <div className="w-full text-center z-10">
                  <h3 className="text-4xl xl:text-6xl mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-xl mb-4 text-white">
                    CONTRACT VALUE: {project.value}
                  </p>
                </div>

                <div className="w-full h-[0.3rem] bg-yellow-500 my-2 xl:my-10" />

                <div className="flex justify-end items-center gap-2 w-full text-2xl font-medium text-white z-10">
                  <span>Read more</span>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/arrow-right.png"
                      alt="arrow-right"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                {/* Fade-in Description Overlay */}
                <div className="absolute inset-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center px-6 text-center z-20">
                  <p className="text-2xl">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
