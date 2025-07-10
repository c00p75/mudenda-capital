// Imports and setup remain
"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import maybinMudenda from "@/public/team/1.jpeg";
import namuyeMudenda from "@/public/team/2.jpg";
import andrewSekandi from "@/public/team/3.jpeg";
import tree from "@/public/logos/tree.png";
import subscribeBg from "@/public/assets/10.png";
import { X } from "lucide-react";
import gsap from "gsap";

const teamMembers = [
  {
    name: "MAYBIN MUDENDA",
    title: "Chief Executive",
    image: maybinMudenda,
    bio: "Maybin Mudenda is a highly accomplished entrepreneur and business leader who founded African Grey Insurance in Zambia and currently serves as the Executive Chairman of Mudenda Capital Partners South Africa. He is also the Board Chairman of Insizwe Private Brokers and an active member of the boards of the American Chamber of Commerce and the French Business Circle.",
  },
  {
    name: "NAMUYE MUDENDA",
    title: "Head - Finance & Admin",
    image: namuyeMudenda,
    bio: "Namuye has over 15 years of experience in financial operations, including USAID funded projects, and in the commodity logistics and commodity insurance sectors as Managing Director at Insizwe Insurance Brokers. Her expertise spans budgeting, compliance, and stakeholder coordination. At Seneca, she oversees internal financial controls, reporting, and administrative systems, ensuring the company operates with efficiency, transparency, and accountability.",
  },
  {
    name: "ANDREW SEKANDI",
    title: "Head of Legal",
    image: andrewSekandi,
    bio: `Andrew has nearly 20 years of professional services and executive experience focused on Africa, with exposure to diverse sectors including private equity, corporate finance, energy, and natural resources. 
Andrew started his career as a lawyer in Namibia supporting cross-border capital markets transactions. He then relocated to the United Kingdom to work for global consulting firms, including as an Associate Director at KPMG in London. As a consultant, he advised major institutional investors, sovereign-related entities, and Fortune 500 companies on market entry, due diligence, and risk mitigation in more than 15 African countries. 
Andrew has also served in the founding and executive management teams for publicly listed and private companies, where he participated in transactions involving equity and debt financing, royalty and streaming agreements, reverse takeovers, and SPACs. 
His current portfolio of interests includes private investments and board-level involvement in commodity trading & logistics, mining and asset management. 
Andrew holds Bachelor of Arts and LLB (Law) degrees from the University of Cape Town, and is the Acting Chairman of Save The Children UK’s Africa Advisory Board. 
`,
  },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (selectedMember && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [selectedMember]);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[30rem] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-top mt-20 w-full h-full"
          style={{ backgroundImage: `url('/assets/6.png')` }}
        >
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="md:ml-28 max-w-2xl">
            <p className="text-white font-bold text-3xl mb-4">About us.</p>
            <h1 className="text-8xl tracking-wide font-semibold text-yellow-500 leading-tight">
              Our Executive Team
            </h1>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 bg-gray-100 relative overflow-hidden text-black">
        <Image
          src={tree}
          alt="Mission"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full scale-150 object-contain"
        />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 md:p-32 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="p-3 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="aspect-square bg-gray-300 relative overflow-hidden rounded-md shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute p-6 bg-[#252826]/80 w-[80%] text-white top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h3 className="text-2xl mb-2 tracking-wider">
                      {member.name}
                    </h3>
                    <p className="text-white text-xl flex justify-between gap-2">
                      {member.title}{" "}
                      <Image
                        src={"/arrow-right.png"}
                        alt="arrow-right"
                        width={20}
                        height={20}
                        className="w-6 h-6 mt-[2%]"
                      />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 md:p-6"
            onClick={() => setSelectedMember(null)}
          >
            <div
              ref={modalRef}
              className="bg-white text-black rounded-lg shadow-2xl w-[100%] md:w-[80%] h-[100%] md:h-[80%] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 relative h-full">
                  <Image
                    src={(selectedMember as { image: StaticImageData }).image}
                    alt={(selectedMember as { name: string }).name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h2 className="text-3xl font-bold tracking-wider mb-2">
                    {(selectedMember as { name: string }).name}
                  </h2>
                  <p className="text-xl text-yellow-600 font-semibold mb-4">
                    {(selectedMember as { title: string }).title}
                  </p>

                  <div className="w-[35%] h-1 bg-yellow-500 my-5" />
                  <p className="text-gray-700 leading-relaxed text-xl overflow-auto max-h-[50vh]">
                    {(selectedMember as { bio: string }).bio}
                  </p>
                  <X
                    className="w-10 h-10 bg-yellow-500 rounded-full p-2 absolute top-5 right-5 cursor-pointer"
                    onClick={() => setSelectedMember(null)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="py-32 pl-5 pr-5 md:pr-5 md:pl-28 text-white bg-black relative">
        <Image
          src={subscribeBg}
          alt=""
          className="absolute top-0 right-0 w-1/2 h-full object-cover"
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-black via-90% via-black/50 to-transparent" />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="pb-12 md:mb-0 flex flex-col flex-1 overflow-visible z-[2]">
            <h3 className="text-8xl tracking-wide mb-2">
              Let’s start something great together!
              <div className="w-[35%] h-2 mt-3 bg-yellow-500" />
            </h3>
            <p className="bg-[#252826]/95 w-fit max-w-xl py-5 px-10 text-xl mt-5">
              Subscribe to our newsletter or email us at info@mudendacapital.com
            </p>
            <div className="relative w-full h-full mt-10">
              <div className="relative flex flex-col gap-10 w-full md:max-w-[30rem] text-xl justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-8 md:py-6 h-14 rounded-full placeholder:text-white bg-[#939393] w-full border-gray-800 border-4 focus:outline-none focus:border-yellow-500"
                />
                <button className="flex items-center justify-center cursor-pointer bg-yellow-500 text-xl text-white font-semibold px-10 md:px-20 py-4 md:py-6 h-14 rounded-lg w-fit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
