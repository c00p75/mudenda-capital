import SpinningGlobe from "@/components/magicui/globeDark";
import Image from "next/image";
import tree from "@/public/logos/tree.png";

export default function ContactPage() {
  return (
    <div className="bg-white text-black min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[20rem] flex items-end pt-28 z-10">
        <div
          className="absolute inset-0 bg-cover bg-top w-full h-full"
          style={{ backgroundImage: `url('/assets/6.png')` }}
        >
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="ml-0 md:ml-28 max-w-2xl">
            <h1 className="text-6xl lg:text-8xl tracking-wide font-semibold text-yellow-500 leading-tight mb-4">
              Contact Us
            </h1>
            <div className="w-32 h-2 bg-yellow-500 mb-8" />
            <p className="text-white font-bold text-2xl mb-4">
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white text-white overflow-hidden">
        <Image
          src={tree}
          alt="Mission"
          className="absolute bottom-[-80%] left-[25%] transform -translate-x-1/2 scale-[150%] h-full object-contain"
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
            {/* Left Side - Spinning Globe */}
            <div className="relative flex items-start justify-start min-h-[32rem] ml-[-65%] scale-[140%]">
              <SpinningGlobe />
            </div>
            {/* Right Side - Contact Form */}
            <div className="bg-black/95 p-10 rounded shadow-lg z-[20]">
              <h2 className="text-4xl font-bold mb-6 text-yellow-500">
                Send us a Message
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mb-8" />
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  >
                    <option value="">Select a service</option>
                    <option value="contract-mining">Contract Mining</option>
                    <option value="currency-trading">Currency Trading</option>
                    <option value="mining-supplies">Mining Supplies</option>
                    <option value="private-equity">Private Equity</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md transition-colors text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
