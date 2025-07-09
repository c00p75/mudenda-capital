"use client";

import Image from "next/image";
import gsap from "gsap";
import { useState, useEffect, useRef, RefObject } from "react";
import Subscribe from "@/components/subscribe";
import Projects from "@/components/projects";

const privateEquityItems = [
  {
    title: "Growth Capital",
    text: "We invest in businesses looking to expand operations, enter new markets, or develop new products. Our capital is paired with strategic guidance to ensure accelerated, well-managed growth.",
    image: "/assets/9.png",
  },
  {
    title: "Buyouts",
    text: "MCP supports management-led or strategic buyouts where business ownership transitions are required. We ensure the continuity and enhancement of operations during ownership changes, often bringing in sector expertise and funding to stabilize and grow the company.",
    image: "/assets/9.png",
  },
  {
    title: "Turnaround Investments",
    text: "We step in to restructure and recapitalize businesses facing distress but with strong underlying potential. Our focus is on restoring operational health and building a path to profitability through hands-on support.",
    image: "/assets/9.png",
  },
];

const investmentBankingItems = [
  {
    title: "Capital Raising",
    text: "Whether equity or debt, we help companies structure and source the right capital for their stage of growth. MCP leverages its investor network and regional knowledge to close funding gaps efficiently.",
    image: "/assets/13.png",
  },
  {
    title: "Mergers & Acquisitions (M&A)",
    text: "From valuations to deal structuring and negotiation, we support M&A transactions that align with your strategic objectives. Our experience ensures that clients are guided through every step with minimal risk and maximum value.",
    image: "/assets/13.png",
  },
  {
    title: "Corporate Advisory",
    text: "We provide strategic financial guidance for corporate restructuring, governance, or market entry. Our team aligns advice with investor expectations and market realities, helping clients stay ahead.",
    image: "/assets/13.png",
  },
];

const projectFinancingItems = [
  {
    title: "Infrastructure & Energy Projects",
    text: "From roads to power plants, we fund critical infrastructure that drives economic growth. MCP structures financing with an eye on long-term sustainability, partnering with DFIs, banks, and governments.",
    image: "/assets/19.png",
  },
  {
    title: "Feasibility & Risk Assessment",
    text: "We work with clients to assess project viability and design bankable models. Our team ensures that financial and technical risks are mitigated early, improving funding success rates.",
    image: "/assets/19.png",
  },
  {
    title: "Syndicated & Blended Finance",
    text: "For large or complex projects, we organize co-financing through syndicates or public-private partnerships. This allows projects to scale while reducing the burden on individual sponsors.",
    image: "/assets/19.png",
  },
];

const purchaseOrderFinancingItems = [
  {
    title: "Contract Execution Support",
    text: "We fund suppliers and contractors to deliver on secured tenders or large orders. MCP enables businesses to grow without tying up cash or losing out on major opportunities due to funding delays.",
    image: "/assets/15.png",
  },
  {
    title: "Payment Assurance & Risk Buffering",
    text: "We work directly with end buyers and monitor payment flows to ensure repayment. This protects our clients from cash flow issues while allowing them to scale operations.",
    image: "/assets/16.png",
  },
  {
    title: "Flexible Repayment Structures",
    text: "Repayment terms are tied to client payment cycles and project timelines. MCP’s flexible model ensures entrepreneurs can meet financial obligations without stress or penalty.",
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

  const animate = (imageRef: RefObject<null>, textRef: RefObject<null>) => {
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
          style={{ backgroundImage: `url('/assets/18.png')` }}
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
              <h2 className="text-8xl mb-6 uppercase">PRIVATE EQUITY</h2>
              <p className="text-2xl mb-8">
                Mudenda Capital provides strategic private equity investments to
                fuel the growth of high-potential companies across emerging
                African markets. We partner with ambitious entrepreneurs and
                businesses to unlock scale, sustainability, and long-term value.
              </p>
              <div className="w-[90%] h-2 bg-yellow-500 mb-8"></div>

              <div className="space-y-4 text-4xl tracking-wider pr-20">
                {privateEquityItems.map((item, index) => (
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
                  src={privateEquityItems[activeIndex1].image}
                  alt={privateEquityItems[activeIndex1].title}
                  width={600}
                  height={900}
                />
              </div>
              <div
                className="absolute bottom-4 right-4 bg-[#252826]/90 text-white p-10 max-w-md"
                ref={textRef1}
              >
                <p className="text-xl">
                  {privateEquityItems[activeIndex1].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Banking Section */}
      <section className="py-20 px-6 bg-black text-right pr-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div ref={imageRef2}>
                <Image
                  src={investmentBankingItems[activeIndex2].image}
                  alt={investmentBankingItems[activeIndex2].title}
                  width={600}
                  height={400}
                  className=""
                />
              </div>
              <div
                className="absolute bottom-4 right-4 bg-[#252826]/90 text-white p-10 max-w-md"
                ref={textRef2}
              >
                <p className="text-xl">
                  {investmentBankingItems[activeIndex2].text}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-8xl font-bold mb-6 uppercase">
                Investment Banking
              </h2>
              <p className="text-2xl mb-8">
                We offer tailored investment banking services to guide
                businesses through complex financial decisions, capital raises,
                and mergers & acquisitions. Our focus is on delivering clear
                value, sound advice, and strong execution across transactions.
              </p>

              <div className="w-[80%] h-2 bg-yellow-500 mb-8 flex justify-self-end" />

              <div className="space-y-4 text-4xl tracking-wider pl-40">
                {investmentBankingItems.map((item, index) => (
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
            </div>
          </div>
        </div>
      </section>

      {/* Project Financing Section */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-8xl font-bold mb-6 uppercase">
                Project Financing
              </h2>
              <p className="text-2xl mb-8">
                Mudenda Capital structures and secures financing for large-scale
                infrastructure, energy, and industrial projects. We combine deep
                sector knowledge with flexible financial structuring to bring
                transformational ideas to life.
              </p>
              <div className="w-[90%] h-2 bg-yellow-500 mb-8" />

              <div className="space-y-4 text-4xl tracking-wider pr-20">
                {projectFinancingItems.map((item, index) => (
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
                  src={projectFinancingItems[activeIndex3].image}
                  alt={projectFinancingItems[activeIndex3].title}
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
                  {projectFinancingItems[activeIndex3].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Order Financing Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div ref={imageRef4}>
                <Image
                  src={purchaseOrderFinancingItems[activeIndex4].image}
                  alt={purchaseOrderFinancingItems[activeIndex4].title}
                  width={600}
                  height={400}
                  className=""
                />
              </div>
              <div
                className="absolute bottom-4 right-4 bg-[#252826]/90 text-white p-10 max-w-md"
                ref={textRef4}
              >
                <p className="text-xl">
                  {purchaseOrderFinancingItems[activeIndex4].text}
                </p>
              </div>
            </div>

            <div className="text-right">
              <h2 className="text-8xl font-bold mb-6 uppercase">
                Purchase Order Financing
              </h2>
              <p className="text-2xl mb-8">
                Our purchase order (PO) financing helps businesses execute large
                orders or contracts without upfront capital. Mudenda Capital
                provides the working capital needed to fulfill supply contracts,
                repaid once the buyer pays.
              </p>
              <div className="w-[80%] h-2 bg-yellow-500 mb-8 flex justify-self-end" />

              <div className="space-y-4 text-4xl tracking-wider pl-40">
                {purchaseOrderFinancingItems.map((item, index) => (
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
