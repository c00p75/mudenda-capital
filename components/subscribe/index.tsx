import React from "react";
import subscribeBg from "@/public/assets/11.png";
import Image from "next/image";
const Subscribe = () => {
  return (
    <section className="py-16 md:pl-28 text-white bg-black ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="pb-12 md:mb-0 flex flex-col flex-1 overflow-visible z-[2] px-4 md:px-0">
          <h3 className="text-5xl tracking-wider font-bold text-yellow-500 mb-2">
            Subscribe to our blog
          </h3>
          <p className="">
            Be the first to hear about what’s happening on the ground.
          </p>
          <div className="relative w-full mt-5">
            <div className="relative w-full text-lg flex flex-col md:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-6 h-14 rounded-full placeholder:text-white bg-[#939393] w-full border-gray-800 border-4 focus:outline-none focus:border-yellow-500"
              />
              <button className="mt-5 md:mt-0 flex items-center justify-center cursor-pointer bg-yellow-500 text-xl text-white font-semibold px-20 py-6 h-14 rounded-lg md:absolute top-0 md:right-[-60%] w-fit">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-2 relative">
          <div className="absolute top-0 left-0 md:w-[60%] w-screen h-full bg-gradient-to-r from-black via-90% via-black/50 to-transparent" />
          <Image
            src={subscribeBg}
            alt=""
            className="md:w-full w-screen h-52 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
