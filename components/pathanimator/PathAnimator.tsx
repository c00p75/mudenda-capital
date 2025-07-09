// components/pathanimator/PathAnimator.tsx
"use client";
export const dynamic = "force-dynamic";

import { useEffect, useRef } from "react";

export default function PathAnimator() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const updateDimensionsAndPath = () => {
      if (typeof window === "undefined" || typeof document === "undefined")
        return;
      const viewportWidth = window.innerWidth;
      const docHeight = document.documentElement.scrollHeight;
      const centerX = viewportWidth / 2;

      svg.style.width = `${viewportWidth}px`;
      svg.style.height = `${docHeight}px`;
      svg.setAttribute("viewBox", `0 0 ${viewportWidth} ${docHeight}`);

      const newPath = [
        `M ${centerX} 100`,
        `L ${centerX} 400`,
        `L ${centerX + 200} 400`,
        `L ${centerX + 200} 800`,
        `L ${centerX - 200} 800`,
        `L ${centerX - 200} 1200`,
        `L ${centerX} 1600`,
        `L ${centerX + 250} 2000`,
        `L ${centerX} 2400`,
      ].join(" ");

      path.setAttribute("d", newPath);

      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;

      const handleScroll = () => {
        if (typeof window === "undefined" || typeof document === "undefined")
          return;
        const scrollTop = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const percent = Math.min(scrollTop / maxScroll, 1);
        const offset = pathLength * (1 - percent);
        path.style.strokeDashoffset = `${offset}`;
      };

      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
      }
    };

    if (typeof window !== "undefined") {
      updateDimensionsAndPath();
      window.addEventListener("resize", updateDimensionsAndPath);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateDimensionsAndPath);
      }
    };
  }, []);

  return (
    <svg ref={svgRef} className="fixed top-0 left-0 pointer-events-none z-50">
      <path
        ref={pathRef}
        fill="none"
        stroke="#fbbf24"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="round"
        style={{ filter: "drop-shadow(0 0 6px #fbbf24)" }}
      />
    </svg>
  );
}
