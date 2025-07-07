"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PageSplitScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftHalfRef = useRef<HTMLDivElement>(null)
  const rightHalfRef = useRef<HTMLDivElement>(null)
  const revealContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const leftHalf = leftHalfRef.current
    const rightHalf = rightHalfRef.current
    const revealContent = revealContentRef.current

    if (!container || !leftHalf || !rightHalf || !revealContent) return

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
    })

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
        0,
      ) // Start at the same time as left half
      .to(
        revealContent,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0.3,
      ) // Start slightly after the split begins

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="bg-black text-white">
      {/* Initial content before split */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Scroll Down</h1>
          <p className="text-xl text-gray-300">Experience the page split animation</p>
        </div>
      </section>

      {/* Split animation container */}
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        {/* Left half */}
        <div ref={leftHalfRef} className="absolute inset-0 w-1/2 bg-black flex items-center justify-end pr-8 z-10">
          <div className="text-right max-w-md">
            <div className="flex justify-end mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">GTC</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">Make your walls happ</h2>
            <p className="text-lg text-gray-300 mb-8">
              combines accurate
              <br />
              craftsm
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider">COLLEC</p>
              <p className="text-2xl font-bold">BL</p>
            </div>
          </div>
        </div>

        {/* Right half */}
        <div
          ref={rightHalfRef}
          className="absolute inset-0 left-1/2 w-1/2 bg-black flex items-center justify-start pl-8 z-10"
        >
          <div className="text-left max-w-md">
            <div className="flex justify-start mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">286</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">y with artwork that</h2>
            <p className="text-lg text-gray-300 mb-8">
              data and beautiful
              <br />
              manship.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider">TIONS</p>
              <p className="text-2xl font-bold">JY</p>
            </div>
          </div>
        </div>

        {/* Revealed content behind */}
        <div
          ref={revealContentRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 scale-90"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=800')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center bg-black/70 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4 text-white">STOCKHOLM</h3>
            <p className="text-gray-300 mb-6">Discover the hidden beauty</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400">more awesome</p>
                <p className="text-gray-400">have loads of</p>
              </div>
              <div>
                <p className="text-white font-semibold">collections</p>
                <p className="text-white font-semibold">amazing art</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content after split */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">Continue Exploring</h2>
          <p className="text-xl text-gray-300">The split animation is complete</p>
        </div>
      </section>
    </div>
  )
}
