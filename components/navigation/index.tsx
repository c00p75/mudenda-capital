"use client";
import React, { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logos/logo-1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(pathname !== "/"); // visible by default unless on homepage

  useEffect(() => {
    if (pathname !== "/") return; // only apply scroll logic on homepage

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const headerClass = `
    fixed text-white top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-[#0e0e0e]
    transform transition-transform duration-500 ease-in-out
    ${
      pathname === "/"
        ? showNavbar
          ? "md:translate-y-0"
          : "md:-translate-y-full"
        : "md:translate-y-0"
    }
  `;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Mudenda Capital"
            className="w-32 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Search (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-10 bg-black/90 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4 text-white">
            {[
              { href: "/", label: "HOME" },
              { href: "/about/our-services", label: "SERVICES" },
              { href: "/about/our-team", label: "TEAM" },
              { href: "/contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  pathname === href
                    ? "text-yellow-500"
                    : "hover:text-yellow-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
