import Image from "next/image";
import { Search, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MiningWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Mining equipment"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h2 className="text-lg mb-2">About us</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
            Our Services
          </h1>
        </div>
      </section>

      {/* Contract Mining Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                CONTRACT MINING
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We encourage rate around workforce productivity, occupational
                health and safety, and environmental incidents for our clients.
              </p>
              <div className="border-l-4 border-yellow-500 pl-4 mb-6">
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="font-semibold text-gray-900">
                      Managing Risk
                    </h3>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="font-semibold text-gray-900">
                      Project Management
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Process Control
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Mining operation"
                width={500}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded max-w-xs">
                <p className="text-sm">
                  We encourage rate around workforce productivity, occupational
                  health and safety, and environmental incidents for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Trading Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Currency coins"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">CURRENCY TRADING</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our expertise extends to currency trade, enabling business
                transactions across regions, meeting global and borderless trade
                with African identity.
              </p>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="space-y-4">
                  <div className="border-b border-gray-700 pb-3">
                    <h3 className="font-semibold">Managing Risk</h3>
                  </div>
                  <div className="border-b border-gray-700 pb-3">
                    <h3 className="font-semibold">Managing Risk</h3>
                  </div>
                  <div>
                    <h3 className="font-semibold">Managing Risk</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                We encourage rate around workforce productivity, occupational
                health and safety, and environmental incidents for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Supplies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                MINING SUPPLIES
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We assist mining entities maintain highest levels of operational
                optimization through the supply of mining inputs and equipment.
              </p>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="font-semibold text-gray-900">
                      Managing Risk
                    </h3>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="font-semibold text-gray-900">
                      Managing Risk
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Managing Risk
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Mining supplies"
                width={500}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded max-w-xs">
                <p className="text-sm">
                  We encourage rate around workforce productivity, occupational
                  health and safety, and environmental incidents for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Equity Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Clock and business"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">PRIVATE EQUITY</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our expertise extends to currency trade, enabling business
                transactions across regions, meeting global and borderless trade
                with African identity.
              </p>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="space-y-4">
                  <div className="border-b border-gray-700 pb-3">
                    <h3 className="font-semibold">Managing Risk</h3>
                  </div>
                  <div className="border-b border-gray-700 pb-3">
                    <h3 className="font-semibold">Managing Risk</h3>
                  </div>
                  <div>
                    <h3 className="font-semibold">Managing Risk</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                We encourage rate around workforce productivity, occupational
                health and safety, and environmental incidents for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Industrial background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-yellow-500 mb-4">
              OUR PROJECTS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Access World SA"
                  width={300}
                  height={200}
                  className="w-full rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">ACCESS WORLD SA</h3>
              <p className="text-gray-300 text-sm mb-4">
                CONTRACT VALUE: $3 million
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                Read more →
              </Button>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="SSC Mining"
                  width={300}
                  height={200}
                  className="w-full rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">SSC MINING</h3>
              <p className="text-gray-300 text-sm mb-4">
                CONTRACT VALUE: $3 million
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                Read more →
              </Button>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Reload Logistics"
                  width={300}
                  height={200}
                  className="w-full rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">RELOAD LOGISTICS</h3>
              <p className="text-gray-300 text-sm mb-4">
                CONTRACT VALUE: $3 million
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                Read more →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {"Let's start something great together"}
              </h3>
              <p className="text-gray-600 text-sm">
                Subscribe to our newsletter or email us at
                info@kinglandsequipment.com
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div>
              <h4 className="text-lg font-bold mb-4">Address</h4>
              <div className="space-y-2 text-gray-300">
                <p>Kinglands Equipment</p>
                <p>Any City, ST 12345</p>
                <p>United States</p>
                <p className="mt-4">Tel: (123) 456-7890</p>
                <p>Email: info@kinglandsequipment.com</p>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="text-lg font-bold mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday to Friday</p>
                <p>8:00 am to 6:00 pm</p>
                <p className="mt-4">Weekend by appointment</p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-300 hover:text-yellow-500 cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-300 hover:text-yellow-500 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-yellow-500 cursor-pointer" />
              </div>
              <p className="text-gray-300 text-sm mt-4">
                Kinglands Capital Partners
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
