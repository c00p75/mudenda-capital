"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const SpinningGlobe = dynamic(() => import("@/components/magicui/globe"), {
  ssr: false,
});

const Reveal = () => {
  const globeRef = useRef(null);
  const globeInstanceRef = useRef(null);

  return (
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
  );
};

export default Reveal;
