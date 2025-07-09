// components/GsapPathAnimation.tsx
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapPathAnimation() {
  useEffect(() => {
    // ⛔ Prevent server-side execution
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    gsap.registerPlugin(ScrollTrigger);

    const path = document.querySelector(
      "#animated-path"
    ) as SVGPathElement | null;
    const triggers = document.querySelectorAll<HTMLElement>(".path-trigger");
    if (!path || triggers.length === 0) return;

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      opacity: 0,
    });

    gsap.to(path, {
      opacity: 1,
      duration: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top+=400 top",
        toggleActions: "play none none reverse",
      },
    });

    const triggerData = Array.from(triggers).map((el) => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = top / docHeight;
      const targetLength = pathLength * progress;

      return { el, targetLength };
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
            const offset = 1300;
            const fadeInStart = targetLength - offset;
            const fadeInEnd = targetLength + 200;

            if (currentLength >= fadeInStart && currentLength <= fadeInEnd) {
              gsap.to(el, {
                opacity: 1,
                duration: 0.4,
                ease: "power1.out",
              });
            }
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
