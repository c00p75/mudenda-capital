"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/magicui/globe";
import Image from "next/image";
import buildings from "@/public/buildings.png";
import HomeHeroSection from "@/components/home/hero";
// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MudendaCapital() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const revealContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const leftHalf = leftHalfRef.current;
    const rightHalf = rightHalfRef.current;
    const revealContent = revealContentRef.current;

    if (!container || !leftHalf || !rightHalf || !revealContent) return;

    // Create the split animation
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

    // Animate the split
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

  // Line drawing animation
  useEffect(() => {
    const path = document.querySelector("#animated-path") as SVGPathElement;
    if (!path) return;

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 4,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HomeHeroSection />
      {/* Animated line path */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-40"
        viewBox="0 0 1200 2000"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          id="animated-path"
          d="M 1000 100 L 600 100 L 600 300 L 800 300 L 800 500 L 500 500 L 500 700 L 700 700 L 700 900 L 400 900 L 400 1100 L 600 1100 L 600 1300 L 300 1300 L 300 1500 L 500 1500 L 500 1700 L 200 1700 L 200 1900"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-6 pt-20 relative">
        <div className="absolute mt-20 inset-0 flex items-center justify-center w-full h-full">
          {/* <Globe /> */}
          {/* <Image
            src={buildings}
            alt="Mudenda Capital"
            className="w-1/4 object-cover absolute left-0 top-60"
          /> */}
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-[2]">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              YOUR <span className="text-yellow-500">AFRICAN</span>
              <br />
              <span className="text-yellow-500">TRADE</span> PARTNER
            </h1>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-none">
              WORK WITH US
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12">WHO WE ARE</h2>
          <div className="max-w-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Mudenda Capital is an international commodity trading company.
              From inception to date, we have evolved strategically to become
              one of Africa&apos;s most trusted commodity trading companies.
            </p>
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
              Our aim is to offer possibilities as well as opportunities to our
              clients through market analysis and contract execution. Our aim is
              to offer possibilities as well as professional guidance and
              service in trading, market analysis and contract execution.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
          }}
        ></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-md bg-black/80 p-8 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-6 border-l-4 border-yellow-500 pl-4">
              MISSION
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To be the preferred one-stop source for commodities from across
              Africa to our clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 border-l-4 border-yellow-500 pl-4">
              VISION
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To deliver exceptional, personalized and flexible service to our
              trade clients through a strict guidance of honesty and integrity.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
              <Users className="w-24 h-24 text-yellow-500" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-yellow-500">
            What We Do
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Write a paragraph that talks about your construction company here.
            Convince your prospective clients to choose your construction team
            for their construction needs by talking about your unique services,
            as well as your commitment to getting the job done.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Contract Mining</h3>
            </div>
            <div className="bg-gray-900 p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Currency Trading</h3>
            </div>
            <div className="bg-gray-900 p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Mining Supplies</h3>
            </div>
          </div>

          <div className="relative">
            <div
              className="w-full h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=800')`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Equity and Partners Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-yellow-500">EQUITY, INVESTMENTS</span> AND{" "}
            <span className="text-yellow-500">PARTNERS</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center"
              >
                <span className="text-black font-bold">LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-yellow-500">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-black mb-2">
              Subscribe to our blog
            </h3>
            <p className="text-black">
              Be the first to get latest news happening around you!
            </p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-lg text-black w-64 focus:outline-none"
            />
            <Button className="bg-black text-yellow-500 px-6 py-3 rounded-r-lg hover:bg-gray-800">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-bold mb-4">Address</h4>
            <p className="text-gray-300">
              Mudenda Capital Partners Pty Ltd
              <br />
              Any City, ST 12345
              <br />
              (123) 456-7890
              <br />
              email: info@mudendacapital.com
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Office Hours</h4>
            <p className="text-gray-300">
              Monday to Friday
              <br />
              9:00 am to 6:00 pm
              <br />
              <br />
              Weekends by appointment
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <p className="text-gray-300">@MudendaCapitalPartners</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
