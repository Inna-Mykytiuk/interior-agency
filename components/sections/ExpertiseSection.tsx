import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Expertise } from "@/types/pageTypes";

// import room3 from "../../public/images/room33.jpg";
// import room4 from "../../public/images/room4.jpg";

interface ExpertisesSectionProps {
  expertises: Expertise[];
}

const ExpertiseSection: React.FC<ExpertisesSectionProps> = ({ expertises }) => {
  return (
    <section
      id="section"
      className="py-6 xl:py-40 mt-0 sm:mt-16 xl:mb-16 h-fit sm:h-screen flex items-center justify-center w-full"
    >
      <div className="container" id="container">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-5xl font-oswald mb-8">Our Expertise</h3>
        </div>
        <div className="w-full flex flex-grow flex-col gap-6 sm:flex-row justify-between h-3/4">
          {expertises.map((expertise, index) => (
            <Link
              key={index}
              href="/works"
              className="w-full sm:w-1/2 flex justify-center items-center h-[330px] sm:h-[600px] bg-black group transition-all duration-500 ease-in-out hover:border-black hover:rounded-xl cursor-pointer relative"
            >
              <span className="text-white text-2xl relative z-10 font-oswald group-hover:opacity-20 opacity-100 transition-all duration-500 ease-in-out">
                {expertise.heading}
              </span>
              <Image
                src={expertise.url}
                alt=""
                width={720}
                height={820}
                className="w-full h-[330px] sm:h-[600px] absolute top-0 opacity-20 group-hover:opacity-100 object-cover z-10 transition-all duration-500 ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
