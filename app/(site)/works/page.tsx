import React from "react";
export const revalidate = 0;

import { getWorksPage, ImageType, ProjectType } from "@/sanity/queries/page";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const WorksPage = async () => {
  const data = await getWorksPage();

  const { Content, Hero, CallToAction } = data;

  return (
    <>
      <section
        id="section"
        className="py-24 overflow-hidden sm:py-24  w-full justify-center flex items-center bg-black"
      >
        <div className="container" id="container">
          <h1 className="text-white text-6xl font-oswald">{Hero.heading}</h1>
          <div className="h-full w-full aspect-video flex flex-col">
            <span className="text-md blick italic font bold text-white">
              {Hero.tagline}
            </span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NoWyNgAQe34?start=10&autoplay=1&mute=1"
              title="YouTube video player"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-24 overflow-hidden sm:py-24 w-full justify-center flex items-center bg-black relative"
      >
        <div className="container" id="container">
          {Content.map((project: ProjectType, index: number) => {
            const { location, url, imageUrls, excerpt, tagline, projectname } =
              project;

            return (
              <div
                key={index}
                className={clsx(
                  "sticky  overflow-hidden top-0 sm:h-[75vh] pb-24 shrink-0 w-full text-white",
                  index % 2 == 0 ? "bg-white text-black" : "bg-black text-white"
                )}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between py-6 px-6 border-b-black">
                  <div className="">
                    <h3 className="text-3xl font-bebas">{projectname}</h3>
                    <div className="flex xl:flex-row flex-col gap-3 sm:gap-6 xl:items-center">
                      <span className="font-bold text-xl">{location}</span>
                      <span
                        className={clsx(
                          "border-2  italic rounded-full px-2 py-2 w-fit",
                          index % 2 == 0
                            ? "bg-white text-black border-black"
                            : "bg-black text-white border-white"
                        )}
                      >
                        {tagline}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col my-3 sm:my-0 sm:flex-row sm:justify-between">
                    <p>{excerpt}</p>
                    <Link
                      href={url}
                      target="_blank"
                      className={clsx(
                        "bg-black font-bebas w-fit h-fit shrink-0  border-solid px-6 py-2 rounded-full border-2 duration-300 ",
                        index % 2 == 0
                          ? "bg-black text-white border-white hover:bg-white hover:border-black hover:text-black"
                          : "bg-white text-black border-white hover:bg-black hover:border-white hover:text-white"
                      )}
                    >
                      See More
                    </Link>
                  </div>
                </div>
                <div className="relative flex mt-[50px] lg:mt-[100px]">
                  <Marquee
                    className="w-fit overflow-hidden"
                    speed={90}
                    pauseOnHover
                  >
                    {imageUrls?.map((image: ImageType, index: number) => {
                      return (
                        <div
                          key={index}
                          className="w-[88vw] overflow-hidden shrink-0 cursor-pointer flex items-center justify-center sm:w-[450px] aspect-video"
                        >
                          <Image
                            loading="lazy"
                            src={image?.url || ""}
                            alt="Images"
                            width={200}
                            height={300}
                            className="h-full w-full object-cover px-1"
                          />
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            );
          })}
          <div className="sticky text-black top-82 bg-slate-600 opacity-0 h-[600px] shrink-0 w-full"></div>
        </div>
      </section>
      {/* <section
        id="section"
        className="py-24 sm:py-24 sm:h-fit h-screen relative w-full justify-center flex flex-col items-center bg-black"
      >
        <div id="container" className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-6xl text-white font-bebas leading-none max-w-96">
                {CallToAction.title}
              </h2>
              <Link
                href="/"
                className="px-6 font-bebas py-3 w-fit border-white border-2 text-xl hover:bg-white hover:text-black duration-300 text-white"
              >
                {CallToAction.label}
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default WorksPage;
