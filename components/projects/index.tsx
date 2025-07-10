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

const Projects = () => {
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
        scrub: 1,
        pin: true,
        anticipatePin: 1,
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
        paragraph,
        {
          left: "50%",
          duration: 2,
          ease: "power2.inOut",
        },
        0.2
      )
      .to(
        revealContent,
        {
          scale: 1,
          duration: 3,
          ease: "power2.out",
        },
        0.3
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-white relative h-screen overflow-visible"
    >
      {/* Left half */}
      <div
        ref={leftHalfRef}
        className="absolute w-1/2 bg-black flex items-center justify-end z-[9]"
      >
        <Image src={buildingfLf} alt="Mudenda Capital" />
      </div>

      {/* Right half */}
      <div
        ref={rightHalfRef}
        className="absolute left-1/2 w-1/2 bg-black flex items-center justify-start z-10 overflow-visible"
      >
        <Image src={buildingRt} alt="Mudenda Capital" />
        <div
          ref={paragraphRef}
          className="absolute left-[-20%] top-1/2 -translate-x-[30%] -translate-y-1/2 bg-[#252826]/95 p-8 backdrop-blur-sm min-w-2xl w-fit text-center"
        >
          <h2 className="text-white leading-relaxed text-8xl text-center w-full">
            OUR PROJECTS
          </h2>
        </div>
      </div>

      {/* Revealed content behind */}
      <div
        ref={revealContentRef}
        className="absolute inset-0 flex items-center justify-center scale-90 bg-white"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="py-20 px-6 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
            }}
          >
            <div className="absolute inset-0"></div>
          </div>

          <div className="relative z-10 container mx-auto">
            <h2 className="text-5xl font-bold text-yellow-500 mb-12">
              OUR PROJECTS
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-black/90 p-6 w-[90vw] h-[20rem] lg:w-[25vw] lg:h-[25vw] relative flex flex-col justify-center items-center">
                <Image
                  src={accessWorld}
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                  alt="Access World"
                />
                <div className="w-full ">
                  <h3 className="text-4xl xl:text-6xl mb-4">ACCESS WORLD SA</h3>
                  <p className="text-xl mb-4">CONTRACT VALUE: $3 million</p>
                </div>
                <div className="w-full h-[0.3rem] bg-yellow-500 my-2 xl:my-10" />
                <div className=" font-semibold px-3 py-2 rounded-full flex justify-end items-center gap-2 w-full">
                  <span className="text-2xl font-medium">Read more</span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <Image
                      src={"/arrow-right.png"}
                      alt="arrow-right"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-black/90 p-6 w-[90vw] h-[20rem] lg:w-[25vw] lg:h-[25vw] relative flex flex-col justify-center items-center">
                <Image
                  src={sscMining}
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                  alt="Access World"
                />
                <div className="w-full ">
                  <h3 className="text-4xl xl:text-6xl mb-4">SSC MINING</h3>
                  <p className="text-xl mb-4">CONTRACT VALUE: $3 million</p>
                </div>
                <div className="w-full h-[0.3rem] bg-yellow-500 my-2 xl:my-10" />
                <div className=" font-semibold px-3 py-2 rounded-full flex justify-end items-center gap-2 w-full">
                  <span className="text-2xl font-medium">Read more</span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <Image
                      src={"/arrow-right.png"}
                      alt="arrow-right"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-black/90 p-6 w-[90vw] h-[20rem] lg:w-[25vw] lg:h-[25vw] relative flex flex-col justify-center items-center">
                <Image
                  src={reloadLogistics}
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                  alt="Access World"
                />
                <div className="w-full ">
                  <h3 className="text-4xl xl:text-6xl mb-4">
                    RELOAD LOGISTICS
                  </h3>
                  <p className="text-xl mb-4">CONTRACT VALUE: $3 million</p>
                </div>
                <div className="w-full h-[0.3rem] bg-yellow-500 my-2 xl:my-10" />
                <div className=" font-semibold px-3 py-2 rounded-full flex justify-end items-center gap-2 w-full">
                  <span className="text-2xl font-medium">Read more</span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <Image
                      src={"/arrow-right.png"}
                      alt="arrow-right"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
