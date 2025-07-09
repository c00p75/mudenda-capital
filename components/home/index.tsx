"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeHeroSection from "@/components/home/hero";
import Image from "next/image";
import mission from "@/public/assets/13.png";
import vision from "@/public/assets/12.png";
import contractMining from "@/public/assets/14.png";
import Partners from "@/components/partners";
import Subscribe from "@/components/subscribe";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MudendaCapital() {
  useEffect(() => {
    const path = document.querySelector("#animated-path") as SVGPathElement;
    const triggers = document.querySelectorAll<HTMLElement>(".path-trigger");
    if (!path || triggers.length === 0) return;

    const pathLength = path.getTotalLength();

    // Set initial path state
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      opacity: 0, // initially invisible
    });

    // Fade in the SVG path when scroll starts
    gsap.to(path, {
      opacity: 1,
      duration: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top+=400 top", // match the line animation
        toggleActions: "play none none reverse",
      },
    });

    const triggerData = Array.from(triggers).map((el) => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = top / docHeight;
      const targetLength = pathLength * progress;

      return {
        el,
        targetLength,
      };
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top+=400 top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const currentLength = pathLength * self.progress;

          triggerData.forEach(({ el, targetLength }) => {
            const offset = 1300; // increase this to fade in earlier
            const fadeInStart = targetLength - offset;
            const fadeInEnd = targetLength + 200;

            if (currentLength >= fadeInStart && currentLength <= fadeInEnd) {
              // Fade in smoothly
              gsap.to(el, {
                opacity: 1,
                duration: 0.4,
                ease: "power1.out",
              });
            }
            // else {
            //   // Fade out smoothly
            //   gsap.to(el, {
            //     opacity: 0,
            //     duration: 0.4,
            //     ease: "power1.out",
            //   });
            // }
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      {/* Animated SVG Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="1500 0 900 3000"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          id="animated-path"
          d="M 1700 760 L 1698 1008 L 1326 1003 L 1331 1354 L 1923 1358 L 1927 1691 L 1616 1695 L 1633 2898"
          fill="none"
          stroke="#f0b100"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <HomeHeroSection />

      {/* Sections */}
      <section className="py-14 px-6 max-w-3xl path-trigger opacity-0 will-change-[opacity] transition-opacity duration-700">
        <div className="container mx-auto ml-20 bg-[black]/95 p-8 backdrop-blur-sm">
          <h2 className="text-8xl font-bold mb-12">WHO WE ARE</h2>
          <div className="">
            <p className="text-xl text-white leading-relaxed">
              Mudenda Capital is a Pan-African investment and trade finance firm
              with a strong foundation in commodity trading. Since inception, we
              have strategically evolved into a leading player in{" "}
              <span className="font-bold">private equity</span>,{" "}
              <span className="font-bold">investment banking</span>, and{" "}
              <span className="font-bold">project financing</span> across
              Africa. <br />
              <br />
              Our mission is to unlock value by providing tailored financial
              solutions, market insights, and execution support to businesses
              and institutions. With a deep understanding of regional markets,
              we deliver expertise in trade facilitation, capital structuring,
              and contract execution that drives real economic impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 flex justify-center relative path-trigger opacity-0 will-change-[opacity] transition-opacity duration-700">
        <Image
          src={mission}
          alt="Mission"
          width={1000}
          height={1000}
          className="absolute top-0 left-28 w-[30em] h-[30em] object-contain"
        />
        <div className="container mt-40 bg-[#252826]/95 p-8 backdrop-blur-sm max-w-2xl">
          <div className="container mx-auto relative z-10 max-w-2xl">
            <div className="p-8">
              <h2 className="text-8xl font-bold mb-6 border-l-4 border-yellow-500 pl-4">
                MISSION
              </h2>
              <p className="text-white leading-relaxed text-xl">
                To be the preferred Pan-African partner for commodities,
                capital, and growth, offering end-to-end solutions in trade,
                finance, and investment that empower businesses to drive
                sustainable development across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 flex justify-center relative path-trigger opacity-0 will-change-[opacity] transition-opacity duration-700">
        <Image
          src={vision}
          alt="Mission"
          width={1000}
          height={1000}
          className="absolute -bottom-28 right-28 w-[30em] h-[30em] object-contain"
        />
        <div className="container bg-[#252826]/95 p-8 backdrop-blur-sm max-w-2xl">
          <div className="container mx-auto relative z-10 max-w-2xl">
            <div className="p-8">
              <h2 className="text-8xl font-bold mb-6 border-l-4 border-yellow-500 pl-4">
                VISION
              </h2>
              <p className="text-white leading-relaxed text-xl">
                To deliver exceptional, personalised and flexible service to our
                trade clients through a strict guideline of honesty and
                integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 mt-20 flex w-full path-trigger opacity-0 will-change-[opacity] transition-opacity duration-700">
        <div className="container md:w-1/2 bg-[black]/95 p-8 backdrop-blur-sm md:pl-28">
          <h2 className="text-8xl font-bold mb-8 text-yellow-500">
            What We Do
          </h2>
          <p className="text-white 2xl text-xl mb-12">
            At Mudenda Capital, we provide tailored financial and trade
            solutions across Africa, with a focus on private equity, investment
            banking, project financing, and commodity trading. We help
            businesses unlock capital, execute complex transactions, and deliver
            on large-scale contracts and tenders. Our expertise spans multiple
            sectors, from energy and infrastructure to agriculture and mining,
            making us a trusted execution partner. With deep market insight and
            a strong regional presence, we turn opportunity into impact for
            companies and communities alike.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#252826]">
            <div className=" p-4 m-3 border-r-2 border-white">
              <h3 className="text-2xl text-center tracking-wider">
                Contract Mining
              </h3>
            </div>
            <div className="p-4 m-3 border-r-2 border-white">
              <h3 className="text-2xl text-center tracking-wider">
                Currency Trading
              </h3>
            </div>
            <div className="p-4 m-3">
              <h3 className="text-2xl text-center tracking-wider">
                Mining Supplies
              </h3>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-full flex items-end p-10">
          <Image
            src={contractMining}
            alt="Contract Mining"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <Partners />
      <Subscribe />
    </div>
  );
}
