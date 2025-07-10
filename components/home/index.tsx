"use client";

import HomeHeroSection from "@/components/home/hero";
import Image from "next/image";
import mission from "@/public/assets/13.png";
import vision from "@/public/assets/12.png";
import building2 from "@/public/assets/21.png";
import Partners from "@/components/partners";
import Subscribe from "@/components/subscribe";
import GsapPathAnimation from "./GsapPathAnimation";
import tree from "@/public/logos/tree.png";
import Link from "next/link";

export default function MudendaCapital() {
  return (
    <div className="overflow-x-hidden relative">
      {/* Mount GSAP animation effect */}
      {/* <GsapPathAnimation /> */}

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-0"
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

      {/* WHO WE ARE */}
      <section className="bg-white relative z-[1] text-black w-screen py-14 px-6 path-trigger  will-change-[opacity] transition-opacity duration-700 overflow-hidden">
        <div className="container mx-auto md:pl-20 pr-0 p-4 md:p-8 backdrop-blur-sm">
          <h2 className="text-8xl font-bold mb-12">WHO WE ARE</h2>
          <p className="text-xl leading-relaxed">
            Mudenda Capital is a Pan-African investment and trade finance firm
            with a strong foundation in commodity trading. Since inception, we
            have strategically evolved into a leading player in{" "}
            <span className="font-bold">private equity</span>,{" "}
            <span className="font-bold">investment banking</span>, and{" "}
            <span className="font-bold">project financing</span> across Africa.
            <br />
            <br />
            Our mission is to unlock value, with our strategic partners,{" "}
            <Link
              target="_blank"
              href="https://lvc-global.com/"
              className="font-bold underline"
            >
              LVC GLOBAL HOLDINGS{" "}
            </Link>
             by providing tailored financial solutions, market insights, and
            execution support to businesses and institutions. With a deep
            understanding of regional markets, we deliver expertise in trade
            facilitation, capital structuring, and contract execution that
            drives real economic impact. For more information on the joint
            venture, view article{" "}
            <Link
              target="_blank"
              href="https://panafricanvisions.com/2025/03/seneca-commodities-zambia-and-lvc-global-forge-jv-to-optimize-critical-mineral-trading-in-emerging-frontier-markets/"
              className="font-bold underline"
            >
              here
            </Link>
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white z-[2] text-black py-20 px-6 flex justify-end relative path-trigger  will-change-[opacity] transition-opacity duration-700">
        <Image
          src={mission}
          alt="Mission"
          width={1000}
          height={1000}
          className="absolute top-10 right-[30%] w-[35em] h-[20em] object-cover border-2 border-black/20"
        />

        <Image
          src={tree}
          alt="Mission"
          className="absolute top-[-40%] left-[-15%] w-[50em] object-cover"
        />
        <div className="container mt-20 bg-black text-white p-4 md:p-8 backdrop-blur-sm max-w-2xl">
          <div className="p-4 md:p-8">
            <h2 className="text-8xl font-bold mb-6 border-l-4 border-yellow-500 pl-4">
              MISSION
            </h2>
            <p className="text-white leading-relaxed text-xl">
              To be the preferred Pan-African partner for commodities, capital,
              and growth, offering end-to-end solutions in trade, finance, and
              investment that empower businesses to drive sustainable
              development across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-black z-[5] py-20 px-6 flex justify-start relative path-trigger  will-change-[opacity] transition-opacity duration-700">
        <Image
          src={vision}
          alt="Vision"
          width={1000}
          height={1000}
          className="absolute -bottom-28 right-[20%] w-[30em] h-[30em] object-contain"
        />
        <div className="container bg-white md:ml-[10%] text-black p-4 md:p-8 backdrop-blur-sm max-w-2xl">
          <div className="p-4 md:p-8">
            <h2 className="text-8xl font-bold mb-6 border-l-4 border-yellow-500 pl-4">
              VISION
            </h2>
            <p className="text-black leading-relaxed text-xl">
              To deliver exceptional, personalised and flexible service to our
              trade clients through a strict guideline of honesty and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-black z-[4] relative py-20 flex flex-col md:flex-row w-full path-trigger  will-change-[opacity] transition-opacity duration-700">
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
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#252826] text-white">
            <div className="p-5 md:p-1 px-3 mx-5 md:mx-0 md:my-3 border-b-1 md:border-b-0 md:border-r-2 border-white">
              <h3 className="text-2xl text-center tracking-wider">
                Private <br className="hidden md:block" /> Equity
              </h3>
            </div>
            <div className="p-5 md:p-1 px-3 mx-5 md:mx-0 md:my-3 border-b-1 md:border-b-0 md:border-r-2 border-white">
              <h3 className="text-2xl text-center tracking-wider">
                Investment <br className="hidden md:block" />
                Banking
              </h3>
            </div>
            <div className="p-5 md:p-1 px-3 mx-5 md:mx-0 md:my-3">
              <h3 className="text-2xl text-center tracking-wider">
                Project <br className="hidden md:block" />
                Financing
              </h3>
            </div>
          </div>
        </div>
        <div className="hidden md:flex h-full items-end p-10 fill-available">
          <Image
            src={building2}
            alt="Contract Mining"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover fill-available"
          />
        </div>
      </section>

      <Partners />
      <Subscribe />
    </div>
  );
}
