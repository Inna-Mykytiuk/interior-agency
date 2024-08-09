import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { Gallery } from "@/types/pageTypes";

import room1 from "../../public/images/room1.jpg";
import room3 from "../../public/images/room5.jpg";
import room4 from "../../public/images/room4.jpg";

interface GallerySectionProps {
  gallery: Gallery;
}

const ComfortSection: React.FC<GallerySectionProps> = ({ gallery }) => {
  return (
    <section className="py-6 h-fit w-full sm:h-screen flex items-center justify-center relative">
      <div className="container w-full h-full">
        <div className="w-full mb-6 sm:mb-12">
          <Link
            href="/works"
            className=" font-semibold border-2 hover:bg-mainBcg hover:text-white font-oswald pt-1 border-mainBcg rounded-full px-3 py-1 transition-all duration-300 ease-in-out hover:shadow-md"
          >
            See Our Works
          </Link>
        </div>
        <div className="w-full h-full flex items-center justify-center ">
          <Marquee speed={80} pauseOnHover className="w-full h-full gap-8">
            <Image
              src={room1}
              alt="armchair"
              width={420}
              height={420}
              className="h-[450px] sm:h-2/4 w-full sm:w-1/4 sm:right-[33%] top-0 sm:absolute object-cover"
            />
            <Image
              src={room3}
              alt="armchair"
              width={420}
              height={420}
              className="h-[450px] sm:h-2/4 w-full sm:w-1/4 sm:right-0 bottom-0 sm:absolute object-cover"
            />
            <Image
              src={room4}
              alt="armchair"
              width={420}
              height={420}
              className="h-[450px] w-full sm:w-1/3 sm:left-0 bottom-0 sm:absolute object-cover"
            />
            {/* {gallery.imageUrls.map((image: ImageType, index: number) => (
              <div key={index} className="sm:w-[33vw] h-full">
                <Image
                  src={image.url}
                  alt=""
                  width={420}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>
            ))} */}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
