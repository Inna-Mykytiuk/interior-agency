import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import armchair1 from "../../public/images/armchair1.webp";
import armchair2 from "../../public/images/armchair2.webp";
import armchair3 from "../../public/images/armchair5.webp";

const ComfortSection = () => {
  return (
    <section
      id="section"
      className="py-6 xl:py-24 h-fit w-full sm:h-screen flex items-center justify-center relative"
    >
      <div className="container w-full h-full" id="container">
        <div className="relative w-full mb-6 sm:mb-0">
          <button
            type="button"
            className=" font-semibold border-2 hover:bg-black hover:text-white font-oswald pt-1 border-black rounded-full px-3 py-1 transition-all duration-300 ease-in-out hover:shadow-md sm:mb-6"
          >
            See Our Works
          </button>
        </div>
        <div className="w-full h-full flex items-center justify-center ">
          <Marquee className="w-full h-full gap-8">
            <Image
              src={armchair1}
              alt=""
              width={320}
              height={450}
              className="h-[450px] sm:h-2/4 w-full sm:w-1/4 sm:right-[33%] top-0 sm:absolute object-cover"
            />
            <Image
              src={armchair2}
              alt=""
              width={320}
              height={320}
              className="h-3/4 w-full sm:w-1/3 sm:left-0 bottom-0 sm:absolute object-cover"
            />
            <Image
              src={armchair3}
              alt=""
              width={320}
              height={450}
              className="h-[450px] sm:h-2/4 w-full sm:w-1/4 sm:right-0 bottom-0 sm:absolute object-cover"
            />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
