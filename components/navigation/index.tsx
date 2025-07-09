"use client";
import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logos/logo-1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavHeader() {
  const pathname = usePathname();
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  return (
    <header className="fixed text-white top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-[#0e0e0e]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Mudenda Capital"
            className="w-32 object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === "/" ? "text-yellow-500" : "hover:text-yellow-500"
            }`}
          >
            HOME
          </Link>

          <Link
            href="/about/our-services"
            className={`transition-colors ${
              pathname === "/about/our-services"
                ? "text-yellow-500"
                : "hover:text-yellow-500"
            }`}
          >
            SERVICES
          </Link>

          <Link
            href="/about/our-team"
            className={`transition-colors ${
              pathname === "/about/our-team"
                ? "text-yellow-500"
                : "hover:text-yellow-500"
            }`}
          >
            TEAM
          </Link>

          {/* About Us Dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}
          >
            <div
              className={`transition-colors flex items-center space-x-1 ${
                pathname === "/about/our-services" ||
                pathname === "/about/our-team"
                  ? "text-yellow-500"
                  : "hover:text-white"
              }`}
            >
              <span>ABOUT US</span>
              <ChevronDown
                className={`w-7 h-7 transition-transform duration-200 ${
                  isAboutHovered ? "rotate-180" : ""
                }`}
              />
            </div>
            
            {isAboutHovered && (
              <div className="absolute top-full left-0 w-56 bg-white shadow-md backdrop-blur-sm py-2 z-50">
                <Link
                  href="about/our-services"
                  className={`block px-4 py-2 font-semibold transition-colors ${
                    pathname === "about/our-services"
                      ? "text-yellow-500 bg-gray-800/50"
                      : "text-black hover:text-yellow-500"
                  }`}
                >
                  Our Services
                </Link>
                <Link
                  href="/about/our-team"
                  className={`block px-4 py-2 font-semibold transition-colors ${
                    pathname === "/team"
                      ? "text-yellow-500 bg-gray-800/50"
                      : "text-black hover:text-yellow-500"
                  }`}
                >
                  Our Team
                </Link>
              </div>
            )}
          </div> */}

          <Link
            href="/blog"
            className={`transition-colors ${
              pathname === "/blog" ? "text-yellow-500" : "hover:text-yellow-500"
            }`}
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className={`transition-colors ${
              pathname === "/contact"
                ? "text-yellow-500"
                : "hover:text-yellow-500"
            }`}
          >
            CONTACT
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white px-6 py-3 text-sm w-36 focus:w-48 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
