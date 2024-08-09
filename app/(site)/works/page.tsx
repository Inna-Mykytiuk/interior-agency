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
      <section className="pt-24 sm:pt-36 overflow-hidden w-full justify-center flex items-center bg-mainBcg">
        <div className="container">
          <h1 className="text-white text-6xl font-oswald">{Hero.heading}</h1>
          <div className="w-full h-full aspect-video flex flex-col">
            <span className="text-md block italic font-bold text-white">
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
      <section className="py-12 sm:py-24 sm:h-fit relative w-full justify-center flex flex-col items-center bg-mainBcg">
        {Content.map((project: ProjectType, index: number) => {
          const { location, url, imageUrls, excerpt, tagline, projectname } =
            project;

          return (
            <div
              key={index}
              className={clsx(
                "sticky  overflow-hidden top-0 h-[85vh] sm:h-[75vh] shrink-0 w-full",
                index % 2 == 0
                  ? "bg-white text-mainBcg"
                  : "bg-mainBcg text-white"
              )}
            >
              <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between py-6 sm:py-12 px-6 border-b-mainBcg">
                  <div className="">
                    <h3 className="text-3xl font-oswald">{projectname}</h3>
                    <div className="flex xl:flex-row flex-col gap-3 sm:gap-6 xl:items-center">
                      <span className="font-bold text-xl">{location}</span>
                      <span
                        className={clsx(
                          "border-2  italic rounded-full px-2 py-2 w-fit",
                          index % 2 == 0
                            ? "bg-white text-mainBcg border-mainBcg"
                            : "bg-mainBcg text-white border-white"
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
                        "bg-mainDcg font-oswald w-fit h-fit shrink-0  border-solid px-6 py-2 rounded-full border-2 duration-300 ml-0 sm:ml-12 mt-8 sm:mt-0",
                        index % 2 == 0
                          ? "bg-mainBcg text-white border-white hover:bg-white hover:border-mainBcg hover:text-mainBcg"
                          : "bg-white text-mainBcg border-white hover:bg-mainBcg hover:border-white hover:text-white"
                      )}
                    >
                      See More
                    </Link>
                  </div>
                </div>
                <div className="relative flex -mx-[50%]">
                  <Marquee
                    className="w-fit overflow-hidden"
                    speed={80}
                    pauseOnHover
                  >
                    {imageUrls?.map((image: ImageType, index: number) => {
                      return (
                        <div
                          key={index}
                          className="w-[88vw] overflow-hidden shrink-0 cursor-pointer flex items-center justify-center sm:w-[650px] aspect-video"
                        >
                          <Image
                            loading="lazy"
                            src={image?.url || ""}
                            alt="Images"
                            width={650}
                            height={450}
                            className="h-full w-full object-cover px-1"
                          />
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className=" w-full justify-center flex flex-col items-center bg-mainBcg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-6xl text-white font-oswald leading-none mb-12">
                {CallToAction.title}
              </h2>
              <Link
                href="https://t.me/Bilskirnirr"
                className="px-6 font-oswald pt-3 pb-[17px] w-fit border-2 border-white  cursor-pointer text-white hover:bg-white  hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out text-xl"
              >
                {CallToAction.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksPage;
