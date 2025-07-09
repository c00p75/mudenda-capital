"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import Subscribe from "@/components/subscribe";
import Projects from "@/components/projects";

const carouselItems = [
  {
    title: "Managing Risk",
    text: "We manage risks around workforce availability, occupational health and safety, and environmental incidents for our clients.",
    image: "/assets/16.png",
  },
  {
    title: "Project Management",
    text: "Our teams ensure that projects are executed on time and within budget, using proven methodologies and real-time oversight.",
    image: "/assets/17.png",
  },
  {
    title: "Process Control",
    text: "We utilize smart systems and monitoring tools to ensure efficiency and safety in mining operations.",
    image: "/assets/18.png",
  },
];

const tradingItems = [
  {
    title: "Managing Risk",
    text: "We manage risk around workforce availability, occupational health and safety, and environmental incidents for our clients.",
    image: "/assets/9.png",
  },
  {
    title: "Cross-Border Trade",
    text: "We enable seamless cross-border transactions with currency strategies tailored to the African economic landscape.",
    image: "/assets/10.png",
  },
  {
    title: "Exchange Strategy",
    text: "Our specialists deliver competitive exchange strategies that mitigate volatility and optimize outcomes.",
    image: "/assets/11.png",
  },
];

const miningSupplyItems = [
  {
    title: "Procurement Management",
    text: "We streamline the acquisition of critical inputs to maintain operational uptime in mining operations.",
    image: "/assets/12.png",
  },
  {
    title: "Vendor Networks",
    text: "Our extensive supplier partnerships guarantee access to quality, vetted mining supplies.",
    image: "/assets/13.png",
  },
  {
    title: "Cost Optimization",
    text: "We help reduce overhead through strategic sourcing and just-in-time delivery.",
    image: "/assets/14.png",
  },
];

const equityItems = [
  {
    title: "Growth Capital",
    text: "We deploy capital to scale African enterprises through structured equity placements.",
    image: "/assets/15.png",
  },
  {
    title: "Strategic Advisory",
    text: "Our team provides expert advisory across mergers, acquisitions, and expansion plans.",
    image: "/assets/16.png",
  },
  {
    title: "Portfolio Management",
    text: "We actively manage holdings to drive returns and align business growth with impact.",
    image: "/assets/17.png",
  },
];

export default function ServicesPage() {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [activeIndex4, setActiveIndex4] = useState(0);

  const imageRef1 = useRef(null);
  const textRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const textRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const textRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const textRef4 = useRef(null);

  const animate = (imageRef, textRef) => {
    if (imageRef.current && textRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 0.5 }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2 }
      );
    }
  };

  useEffect(() => animate(imageRef1, textRef1), [activeIndex1]);
  useEffect(() => animate(imageRef2, textRef2), [activeIndex2]);
  useEffect(() => animate(imageRef3, textRef3), [activeIndex3]);
  useEffect(() => animate(imageRef4, textRef4), [activeIndex4]);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[30rem] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center mt-20 w-full h-full"
          style={{ backgroundImage: `url('/assets/15.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-10% via-black/50 to-black/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="ml-28 max-w-2xl">
            <p className="text-white font-bold text-3xl mb-4">About us.</p>
            <h1 className="text-6xl lg:text-8xl tracking-wide font-semibold text-yellow-500 leading-tight">
              Our Services
            </h1>
          </div>
        </div>
      </section>

      {/* Contract Mining Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pl-28">
            <div>
              <h2 className="text-8xl mb-6">CONTRACT MINING</h2>
              <p className="text-2xl mb-8">
                We manage risks around workforce availability, occupational
                health and safety, and environmental incidents for our clients.
              </p>
              <div className="w-[90%] h-2 bg-yellow-500 mb-8"></div>

              <div className="space-y-4 text-4xl tracking-wider pr-20">
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border-b-4 border-gray-400/20 py-4 pl-4 transition-all duration-300 ${
                      index === activeIndex1
                        ? "border-l-4 border-l-yellow-500"
                        : "border-l-4 border-l-transparent hover:border-l-yellow-300"
                    }`}
                    onMouseEnter={() => setActiveIndex1(index)}
                  >
                    <h3 className="">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div ref={imageRef1}>
                <Image
                  src={carouselItems[activeIndex1].image}
                  alt={carouselItems[activeIndex1].title}
                  width={600}
                  height={900}
                />
              </div>
              <div
                className="absolute bottom-4 right-4 bg-[#252826]/90 text-white p-10 max-w-md"
                ref={textRef1}
              >
                <p className="text-xl">{carouselItems[activeIndex1].text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Trading Section */}
      <section className="py-20 px-6 bg-black text-right pr-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div ref={imageRef2}>
                <Image
                  src={tradingItems[activeIndex2].image}
                  alt={tradingItems[activeIndex2].title}
                  width={600}
                  height={400}
                  className=""
                />
              </div>
              <div
                className="absolute bottom-4 right-4 bg-[#252826]/90 text-white p-10 max-w-md"
                ref={textRef2}
              >
                <p className="text-xl">{tradingItems[activeIndex2].text}</p>
              </div>
            </div>

            <div>
              <h2 className="text-8xl font-bold mb-6">CURRENCY TRADING</h2>
              <p className="text-2xl mb-8">
                Our expertise extends to currency trade, enabling business
                transactions across regions, making global and borderless trade
                an African reality.
              </p>

              <div className="w-[80%] h-2 bg-yellow-500 mb-8 flex justify-self-end" />

              <div className="space-y-4 text-4xl tracking-wider pl-40">
                {tradingItems.map((item, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border-b-4 border-gray-400/20 py-4 pr-4 transition-all duration-300 text-left lg:text-right ${
                      index === activeIndex2
                        ? "border-r-4 border-r-yellow-500"
                        : "border-r-4 border-r-transparent hover:border-r-yellow-300"
                    }`}
                    onMouseEnter={() => setActiveIndex2(index)}
                  >
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>

              {/* <p className="text-gray-400 text-sm mt-8" ref={textRef2}>
                {tradingItems[activeIndex2].text}
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mining Supplies Section */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-8xl font-bold mb-6">MINING SUPPLIES</h2>
              <p className="text-2xl mb-8">
                We assist mining entities maintain highest levels of operational
                optimization through the supply of mining inputs and equipment.
              </p>
              <div className="w-[90%] h-2 bg-yellow-500 mb-8" />

              <div className="space-y-4 text-4xl tracking-wider pr-20">
                {miningSupplyItems.map((item, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border-b-4 border-gray-400/20 py-4 pl-4 transition-all duration-300 ${
                      index === activeIndex3
                        ? "border-l-4 border-l-yellow-500"
                        : "border-l-4 border-l-transparent hover:border-l-yellow-300"
                    }`}
                    onMouseEnter={() => setActiveIndex3(index)}
                  >
                    <h3 className="">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div ref={imageRef3}>
                <Image
                  src={miningSupplyItems[activeIndex3].image}
                  alt={miningSupplyItems[activeIndex3].title}
                  width={600}
                  height={400}
                  className=""
                />
              </div>
              <div
                className="absolute bottom-4 right-4 bg-[#252826]/90 text-white p-10 max-w-md"
                ref={textRef1}
              >
                <p className="text-xl">
                  {miningSupplyItems[activeIndex3].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Equity Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div ref={imageRef4}>
                <Image
                  src={equityItems[activeIndex4].image}
                  alt={equityItems[activeIndex4].title}
                  width={600}
                  height={400}
                  className=""
                />
              </div>
              <div
                className="absolute bottom-4 right-4 bg-[#252826]/90 text-white p-10 max-w-md"
                ref={textRef4}
              >
                <p className="text-xl">{equityItems[activeIndex4].text}</p>
              </div>
            </div>

            <div className="text-right">
              <h2 className="text-8xl font-bold mb-6">PRIVATE EQUITY</h2>
              <p className="text-2xl mb-8">
                Our expertise extends to currency trade, enabling business
                transactions across regions, making global and borderless trade
                an African reality.
              </p>
              <div className="w-[80%] h-2 bg-yellow-500 mb-8 flex justify-self-end" />

              <div className="space-y-4 text-4xl tracking-wider pl-40">
                {equityItems.map((item, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border-b-4 border-gray-400/20 py-4 pr-4 transition-all duration-300 text-left lg:text-right ${
                      index === activeIndex4
                        ? "border-r-4 border-r-yellow-500"
                        : "border-r-4 border-r-transparent hover:border-r-yellow-300"
                    }`}
                    onMouseEnter={() => setActiveIndex4(index)}
                  >
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* CTA Section */}
      <Subscribe />
    </div>
  );
}
