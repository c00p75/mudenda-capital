import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logos/logo-1.png";
export default function NavHeader() {
  return (
    <header className="fixed text-white top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Mudenda Capital"
            className="w-32 object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-yellow-500 transition-colors">
            HOME
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            ABOUT US
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            BLOG
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors">
            CONTACT
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm w-32 focus:w-48 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
