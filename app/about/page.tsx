"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold">Mudenda</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-yellow-500 transition-colors">
              HOME
            </a>
            <a href="/about" className="text-yellow-500 transition-colors">
              ABOUT US
            </a>
            <a href="/services" className="hover:text-yellow-500 transition-colors">
              SERVICES
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/boardroom.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-2xl">
            <p className="text-gray-300 mb-4">About us.</p>
            <h1 className="text-6xl lg:text-7xl font-bold text-yellow-500 leading-tight">Our Executive Team</h1>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-square bg-gray-300 relative">
                <Image src="/placeholder.svg?height=400&width=400" alt="Maybin Mudenda" fill className="object-cover" />
              </div>
              <div className="p-6 bg-black text-white">
                <h3 className="text-xl font-bold mb-2">MAYBIN MUDENDA</h3>
                <p className="text-gray-300">Chief Executive</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-square bg-gray-300 relative">
                <Image src="/placeholder.svg?height=400&width=400" alt="Namuye Mudenda" fill className="object-cover" />
              </div>
              <div className="p-6 bg-black text-white">
                <h3 className="text-xl font-bold mb-2">NAMUYE MUDENDA</h3>
                <p className="text-gray-300">Head - Finance & Admin</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-square bg-gray-300 relative">
                <Image src="/placeholder.svg?height=400&width=400" alt="Andrew Sekandi" fill className="object-cover" />
              </div>
              <div className="p-6 bg-black text-white">
                <h3 className="text-xl font-bold mb-2">ANDREW SEKANDI</h3>
                <p className="text-gray-300">Head of Legal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6 leading-tight">Let's start something great together!</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-8"></div>

            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter or email us at
              <br />
              <span className="text-white font-semibold">info@mudendacapital.com</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-bold mb-4">Address</h4>
            <p className="text-gray-300 mb-2">123 Anywhere St.</p>
            <p className="text-gray-300 mb-2">Any City, ST 12345</p>
            <p className="text-gray-300 mb-4">(PWD parking available)</p>
            <p className="text-gray-300 mb-2">Tel. (123) 456-7890</p>
            <p className="text-gray-300">Email: info@mudendacapital.com</p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Office Hours</h4>
            <p className="text-gray-300 mb-2">Monday to Friday</p>
            <p className="text-gray-300 mb-4">9:00 am to 5:00 pm</p>
            <p className="text-gray-300">Weekends by appointment</p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <p className="text-gray-300">Mudenda Capital Partners</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
